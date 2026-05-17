'use client';
import { useEffect, useRef, useState, useCallback } from 'react';

/**
 * VoiceItModesDemo — self-contained interactive demo of the 4 Voiceit modes.
 * Mirrors the in-app onboarding Step "Modes" (StepModesHero) so the user
 * sees the same story on the website and after install.
 *
 * Folder-tabs layout · 4 modes · 8s auto-cycle · click any tab to pause 20s.
 * Hardcoded English copy — DE and EN sites render the same demo on purpose.
 */

const MODES = [
  {
    key: 'dictation',
    name: 'Dictation Mode',
    description: 'Speech is transcribed and inserted as-is. No AI cleanup. 100% local, free forever.',
    appLabel: 'Mail · Reply',
    spoken: "hey luke the 10am doesn't work can we move to 11",
    output: "Hey Luke, the 10am doesn't work. Can we move to 11?",
    outputType: 'plain',
    hotkey: 'Fn',
    isSubFeature: false,
    badge: 'LOCAL',
    transformStep: null,
  },
  {
    key: 'transform',
    name: 'Custom Format',
    description: 'Polish your dictation with AI — auto-clean fillers, custom tone or format.',
    appLabel: 'Mail · Reply',
    spokenRaw:
      "uhh hey luke you know the meeting at ten like doesn't really work for me uhm can we move it to eleven",
    output: "Hey Luke, the 10am doesn't work for me. Can we move it to 11?",
    outputType: 'plain',
    hotkey: 'Fn',
    isSubFeature: true,
    badge: 'AI',
    transformStep: 'AI · Cleans Up & Formats',
  },
  {
    key: 'prompt',
    name: 'Prompt Mode',
    description: 'Converts your spoken transcript automatically into a world-class prompt.',
    appLabel: 'ChatGPT · new chat',
    spoken:
      'create a hyperrealistic editorial photo a top model sits sideways in a 66 mustang vintage look golden hour very dramatic',
    output:
      '# Role:\nEditorial photographer, vintage Americana focus.\n# Task:\nHyperrealistic photo of a top model sideways in a 1966 Mustang.\n# Style:\nVintage, golden-hour rim light, 35mm grain.\n# Output:\n4:5 portrait, photoreal, --style raw',
    outputType: 'structured',
    hotkey: 'Right ⌘',
    isSubFeature: false,
    badge: 'AI',
    transformStep: 'AI · Converts into Prompt',
  },
  {
    key: 'agent',
    name: 'Agent Mode',
    description: 'Select text, then speak a command. AI rewrites the selected text in place.',
    appLabel: 'Notes · Meeting',
    spoken: 'turn this into bullet points',
    selected:
      "We agreed Luke takes the investor pitch on Wednesday — he has the final slide deck. Sarah delivers the revised slides including the new revenue projection by Tuesday evening. I'm handling catering, logistics and the reception briefing.",
    output:
      '• Luke — investor pitch Wednesday, has final slide deck\n• Sarah — revised slides + revenue projection by Tuesday evening\n• Marcel — catering, logistics, reception briefing',
    outputType: 'bullets',
    hotkey: 'Right ⌥',
    isSubFeature: false,
    badge: 'AI',
    transformStep: 'AI Agent · Converts Selected Text into Bullets',
  },
];

const AGENT_PHASES = [
  { name: 'idle', wait: 600 },
  { name: 'selecting', wait: 2200 },
  { name: 'selected', wait: 600 },
  { name: 'speaking', wait: 1500 },
  { name: 'thinking', wait: 700 },
  { name: 'hold', wait: 3500 },
];
const AGENT_TYPE_MS_PER_CHAR = 10;
const STATIC_HOLD_MS = 8000;
const CLICK_PAUSE_MS = 20000;

const FILLER_RE =
  /\b(uhh|uhm|um|uh|you know|like|i mean|sort of|kind of|basically|literally|really)\b/gi;

function highlightFillers(text) {
  const parts = [];
  let lastIdx = 0;
  let m;
  let key = 0;
  while ((m = FILLER_RE.exec(text)) !== null) {
    if (m.index > lastIdx) parts.push(text.slice(lastIdx, m.index));
    parts.push(
      <span key={key++} className="vm-filler-strike">
        {m[0]}
      </span>,
    );
    lastIdx = m.index + m[0].length;
  }
  if (lastIdx < text.length) parts.push(text.slice(lastIdx));
  return parts;
}

function MicIcon({ color }) {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
    >
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
    </svg>
  );
}

function CursorIcon() {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 24 24"
      fill="#fbbf24"
      stroke="#fbbf24"
      strokeWidth="1.5"
      strokeLinejoin="round"
    >
      <path d="M3 3 L 3 17.5 L 7.5 13.5 L 10 19 L 12.5 17.5 L 10 12 L 16 12 Z" />
    </svg>
  );
}

export default function VoiceItModesDemo() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const [agentPhase, setAgentPhase] = useState('idle');
  const [typed, setTyped] = useState('');
  const [progressPct, setProgressPct] = useState(0);
  const [progressPaused, setProgressPaused] = useState(false);

  const phaseTimer = useRef(null);
  const typeInterval = useRef(null);
  const progressInterval = useRef(null);
  const pauseTimer = useRef(null);

  const clearAll = useCallback(() => {
    if (phaseTimer.current) clearTimeout(phaseTimer.current);
    if (typeInterval.current) clearInterval(typeInterval.current);
    if (progressInterval.current) clearInterval(progressInterval.current);
  }, []);

  const startProgress = useCallback((totalMs, isPaused = false) => {
    if (progressInterval.current) clearInterval(progressInterval.current);
    setProgressPaused(isPaused);
    const start = Date.now();
    setProgressPct(0);
    progressInterval.current = setInterval(() => {
      const elapsed = Date.now() - start;
      const pct = Math.min(100, (elapsed / totalMs) * 100);
      setProgressPct(pct);
      if (pct >= 100 && progressInterval.current) clearInterval(progressInterval.current);
    }, 80);
  }, []);

  const advanceMode = useCallback(() => {
    setCurrentIdx((idx) => (idx + 1) % MODES.length);
  }, []);

  const playAgent = useCallback(() => {
    let phaseIdx = 0;
    function nextPhase() {
      if (phaseIdx >= AGENT_PHASES.length) {
        advanceMode();
        return;
      }
      const phase = AGENT_PHASES[phaseIdx];
      if (phase.name === 'hold') {
        setAgentPhase('typing');
        setTyped('');
        let i = 0;
        const fullOutput = MODES[3].output;
        typeInterval.current = setInterval(() => {
          i++;
          setTyped(fullOutput.slice(0, i));
          if (i >= fullOutput.length && typeInterval.current) {
            clearInterval(typeInterval.current);
            setAgentPhase('hold');
            phaseTimer.current = setTimeout(() => {
              phaseIdx++;
              nextPhase();
            }, phase.wait);
          }
        }, AGENT_TYPE_MS_PER_CHAR);
        return;
      }
      setAgentPhase(phase.name);
      setTyped('');
      phaseIdx++;
      phaseTimer.current = setTimeout(nextPhase, phase.wait);
    }
    setAgentPhase('idle');
    setTyped('');
    nextPhase();
  }, [advanceMode]);

  useEffect(() => {
    clearAll();
    if (paused) return;
    const mode = MODES[currentIdx];
    if (mode.key === 'agent') {
      const totalMs =
        AGENT_PHASES.reduce((a, p) => a + p.wait, 0) + mode.output.length * AGENT_TYPE_MS_PER_CHAR;
      startProgress(totalMs);
      playAgent();
    } else {
      startProgress(STATIC_HOLD_MS);
      phaseTimer.current = setTimeout(advanceMode, STATIC_HOLD_MS);
    }
    return clearAll;
  }, [currentIdx, paused, advanceMode, clearAll, playAgent, startProgress]);

  useEffect(() => {
    return () => {
      clearAll();
      if (pauseTimer.current) clearTimeout(pauseTimer.current);
    };
  }, [clearAll]);

  function handleTabClick(idx) {
    if (pauseTimer.current) clearTimeout(pauseTimer.current);
    clearAll();
    setPaused(true);
    setCurrentIdx(idx);
    if (MODES[idx].key === 'agent') {
      setAgentPhase('hold');
      setTyped(MODES[idx].output);
    }
    startProgress(CLICK_PAUSE_MS, true);
    pauseTimer.current = setTimeout(() => setPaused(false), CLICK_PAUSE_MS);
  }

  const mode = MODES[currentIdx];

  return (
    <div className="vm-root">
      <style jsx>{`
        .vm-root { width: 100%; max-width: 720px; margin: 0 auto; }
        .vm-progress-row {
          width: 100%; max-width: 720px; margin: 0 auto 8px;
          display: flex; flex-direction: column; align-items: center; gap: 5px;
        }
        .vm-progress-track { height: 2px; background: rgba(255,255,255,0.10); border-radius: 1px; overflow: hidden; width: 100%; }
        .vm-progress-fill { height: 100%; background: rgba(255,255,255,0.45); transition: width 100ms linear; }
        .vm-progress-track.paused .vm-progress-fill { background: rgba(255,255,255,0.22); }
        .vm-tab-hint { margin: 0; font-size: 9.5px; font-family: monospace; color: rgba(255,255,255,0.55); text-transform: uppercase; letter-spacing: 1.2px; font-weight: 600; text-align: center; }
        .vm-tabs-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 4px; padding: 0; }
        .vm-tab {
          display: flex; align-items: center; justify-content: center; gap: 5px;
          padding: 9px 4px; border: 1px solid rgba(255,255,255,0.08); border-bottom: none;
          border-radius: 8px 8px 0 0; background: rgba(0,0,0,0.20);
          color: rgba(255,255,255,0.55); font-size: 11.5px; font-weight: 600;
          cursor: pointer; transition: all 280ms ease; white-space: nowrap; position: relative; z-index: 1;
          font-family: inherit;
        }
        .vm-tab:not(.active) { opacity: 0.85; }
        .vm-tab.active { background: var(--surface-fallback, #181b22); color: #fff; z-index: 3; }
        .vm-tab.active::after {
          content: ""; position: absolute; left: -1px; right: -1px; bottom: -7px; height: 8px;
          background: var(--surface-fallback, #181b22);
          border-left: 1px solid rgba(255,255,255,0.08); border-right: 1px solid rgba(255,255,255,0.08); z-index: 4;
        }
        .vm-tab.subfeature { font-weight: 500; }
        .vm-tab .vm-dot-sm { width: 7px; height: 7px; border-radius: 50%; opacity: 0.5; flex-shrink: 0; }
        .vm-tab.active .vm-dot-sm { opacity: 1; }
        .vm-tab.vm-tab-dictation .vm-dot-sm, .vm-tab.vm-tab-transform .vm-dot-sm { background: #1C64FF; }
        .vm-tab.vm-tab-prompt .vm-dot-sm { background: #10b981; }
        .vm-tab.vm-tab-agent .vm-dot-sm { background: #f59e0b; }
        .vm-tab .vm-sub-arrow { color: #1C64FF; font-size: 13px; font-weight: 700; margin-right: 1px; flex-shrink: 0; }
        .vm-ai-badge { font-size: 9px; font-family: monospace; font-weight: 800; padding: 2px 5px; border-radius: 3px; background: color-mix(in srgb, #1C64FF 28%, transparent); color: #9dc0ff; letter-spacing: 0.5px; flex-shrink: 0; }
        .vm-local-badge { font-size: 9px; font-family: monospace; font-weight: 800; padding: 2px 5px; border-radius: 3px; background: color-mix(in srgb, #22c55e 28%, transparent); color: #86efac; letter-spacing: 0.5px; flex-shrink: 0; }
        .vm-descbox { padding: 9px 14px; background: #181b22; border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; border-top-left-radius: 0; border-top-right-radius: 0; text-align: left; margin: -5px auto 0; position: relative; z-index: 1; }
        .vm-mode-desc { margin: 0; font-size: 12.5px; line-height: 1.45; color: #fff; }
        .vm-demo { background: #181b22; border-radius: 10px; overflow: hidden; display: flex; flex-direction: column; text-align: left; border: 1px solid rgba(255,255,255,0.08); margin: 5px auto 0; }
        .vm-demo-titlebar { display: flex; align-items: center; gap: 6px; padding: 6px 10px; border-bottom: 1px solid rgba(255,255,255,0.08); background: rgba(0,0,0,0.15); }
        .vm-traffic { width: 7px; height: 7px; border-radius: 50%; background: rgba(255,255,255,0.15); }
        .vm-app-label { margin-left: auto; font-size: 9px; font-family: monospace; color: rgba(255,255,255,0.55); text-transform: uppercase; letter-spacing: 1px; }
        .vm-demo-body { padding: 9px 11px 11px; min-height: 110px; display: flex; flex-direction: column; gap: 5px; }
        .vm-lbl-row { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
        .vm-lbl-left { display: inline-flex; align-items: center; gap: 5px; font-size: 10px; font-family: monospace; text-transform: uppercase; letter-spacing: 1px; font-weight: 700; }
        .vm-right-cluster { display: inline-flex; align-items: center; gap: 6px; }
        .vm-rec-tag { display: inline-flex; align-items: center; gap: 4px; font-size: 9px; font-family: monospace; font-weight: 800; color: #fca5a5; text-transform: uppercase; letter-spacing: 1px; padding: 2px 6px; border-radius: 3px; background: rgba(239,68,68,0.18); border: 1px solid rgba(239,68,68,0.45); flex-shrink: 0; }
        .vm-rec-tag::before { content: ""; width: 6px; height: 6px; border-radius: 50%; background: #ef4444; animation: vm-rec-pulse 1.4s ease-in-out infinite; }
        @keyframes vm-rec-pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.4;transform:scale(0.7)} }
        .vm-kbd-key { font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 12px; font-weight: 700; color: #fff; background: linear-gradient(180deg, rgba(255,255,255,0.10), rgba(255,255,255,0.04)); border: 1px solid rgba(255,255,255,0.20); border-bottom-color: rgba(255,255,255,0.30); border-radius: 5px; padding: 3px 10px; box-shadow: 0 1px 0 rgba(0,0,0,0.30), inset 0 1px 0 rgba(255,255,255,0.05); min-width: 30px; text-align: center; letter-spacing: 0.5px; white-space: nowrap; flex-shrink: 0; }
        .vm-spoken-frame { padding: 5px 9px; border-radius: 6px; background: rgba(239,68,68,0.08); border: 1px solid rgba(239,68,68,0.35); display: flex; flex-direction: column; gap: 3px; }
        .vm-spoken-frame .vm-lbl-left { color: #fca5a5; }
        .vm-spoken-frame .vm-lbl-left::before { content: ""; width: 6px; height: 6px; border-radius: 50%; background: #ef4444; display: inline-block; margin-right: 3px; }
        .vm-spoken { display: flex; align-items: flex-start; gap: 6px; }
        .vm-mic-circle { flex-shrink: 0; display: inline-flex; align-items: center; justify-content: center; width: 18px; height: 18px; border-radius: 50%; background: rgba(239,68,68,0.30); border: 1px solid rgba(239,68,68,0.70); box-shadow: 0 0 12px rgba(239,68,68,0.55); }
        .vm-spoken p { margin: 0; font-size: 13px; line-height: 1.45; color: #fff; }
        .vm-filler-strike { color: rgba(239,68,68,0.7); text-decoration: line-through; text-decoration-color: rgba(239,68,68,0.85); text-decoration-thickness: 1.5px; }
        .vm-agent-input { padding: 7px 11px; border-radius: 8px; background: rgba(239,68,68,0.06); border: 1px solid color-mix(in srgb, #ef4444 30%, rgba(255,255,255,0.08)); display: flex; flex-direction: column; gap: 4px; }
        .vm-section-hdr { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
        .vm-section-hdr.orange .vm-lbl-left { color: #fbbf24; }
        .vm-section-hdr.red .vm-lbl-left { color: #fca5a5; }
        .vm-selected-row { margin-bottom: 2px; }
        .vm-selected-row p { margin: 0; font-size: 12.5px; line-height: 1.45; color: #fff; }
        .vm-text-content { background-image: linear-gradient(rgba(245,158,11,0.32), rgba(245,158,11,0.32)); background-repeat: no-repeat; background-position: left center; background-size: 100% 100%; padding: 1px 2px; box-decoration-break: clone; -webkit-box-decoration-break: clone; }
        .vm-agent-input.vm-phase-idle .vm-text-content { background-size: 0% 100%; }
        .vm-agent-input.vm-phase-selecting .vm-text-content { animation: vm-sweep-select 2200ms ease-in-out forwards; }
        @keyframes vm-sweep-select { 0% { background-size: 0% 100%; } 100% { background-size: 100% 100%; } }
        .vm-ibeam { display: inline-block; width: 2px; height: 15px; background: #fbbf24; margin-left: 2px; vertical-align: text-bottom; animation: vm-ibeam-blink 1.1s steps(1) infinite; }
        @keyframes vm-ibeam-blink { 0%,49%{opacity:1} 50%,100%{opacity:0} }
        .vm-spoken-section { display: flex; flex-direction: column; gap: 3px; padding-top: 5px; margin-top: 3px; border-top: 1px dashed rgba(239,68,68,0.30); max-height: 60px; overflow: hidden; transition: opacity 380ms, max-height 380ms, padding-top 380ms, margin-top 380ms, border-top-width 380ms; }
        .vm-spoken-section.hidden { opacity: 0; max-height: 0; padding-top: 0; margin-top: 0; border-top-width: 0; }
        .vm-spoken-text { margin: 0; font-size: 12.5px; line-height: 1.4; color: #fff; padding-left: 18px; }
        .vm-transform-step { text-align: center; font-size: 9.5px; font-family: monospace; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #9dc0ff; padding: 1px 0; display: flex; align-items: center; justify-content: center; gap: 6px; }
        .vm-transform-step .vm-arrow { color: #1C64FF; font-size: 12px; line-height: 1; }
        .vm-output-frame { padding: 5px 9px; border-radius: 6px; display: flex; flex-direction: column; gap: 3px; background: color-mix(in srgb, #1C64FF 10%, transparent); border: 1px solid color-mix(in srgb, #1C64FF 38%, transparent); }
        .vm-output-lbl { display: inline-flex; align-items: center; gap: 5px; font-size: 10px; font-family: monospace; text-transform: uppercase; letter-spacing: 1px; font-weight: 700; color: #9dc0ff; }
        .vm-output-lbl::before { content: ""; width: 6px; height: 6px; border-radius: 1px; background: #1C64FF; display: inline-block; }
        .vm-output { margin-top: 6px; display: flex; flex-direction: column; gap: 2px; }
        .vm-output p { margin: 0; font-size: 12px; line-height: 1.4; color: #fff; }
        .vm-md-output { margin-top: 6px; margin-bottom: 0; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 11px; line-height: 1.5; color: #fff; white-space: pre-wrap; }
        .vm-md-h { color: #fff; font-weight: 700; }
        .vm-md-p { color: #fff; }
        .vm-plain-output { margin: 6px 0 0; font-size: 12px; line-height: 1.4; color: #fff; }
        .vm-caret { display: inline-block; width: 2px; height: 11px; margin-left: 1px; vertical-align: middle; background: #1C64FF; animation: vm-caret-blink 1s steps(1,end) infinite; }
        @keyframes vm-caret-blink { 0%,49%{opacity:1} 50%,100%{opacity:0} }
      `}</style>
      <div className="vm-progress-row">
        <div className={`vm-progress-track ${progressPaused ? 'paused' : ''}`}>
          <div className="vm-progress-fill" style={{ width: `${progressPct}%` }} />
        </div>
        <p className="vm-tab-hint">Click any tab to explore · auto-cycles every few seconds</p>
      </div>

      <div className="vm-tabs-row">
        {MODES.map((m, i) => {
          const active = i === currentIdx;
          const cls = `vm-tab vm-tab-${m.key}${active ? ' active' : ''}${m.isSubFeature ? ' subfeature' : ''}`;
          return (
            <button key={m.key} type="button" className={cls} onClick={() => handleTabClick(i)}>
              {m.isSubFeature ? <span className="vm-sub-arrow">+</span> : <span className="vm-dot-sm" />}
              <span>{m.name}</span>
              {m.badge === 'AI' && <span className="vm-ai-badge">AI</span>}
              {m.badge === 'LOCAL' && <span className="vm-local-badge">LOCAL</span>}
            </button>
          );
        })}
      </div>

      <div className="vm-descbox" data-active={mode.key}>
        <p className="vm-mode-desc">{mode.description}</p>
      </div>

      <div className="vm-demo">
        <div className="vm-demo-titlebar">
          <span className="vm-traffic" />
          <span className="vm-traffic" />
          <span className="vm-traffic" />
          <span className="vm-app-label">{mode.appLabel}</span>
        </div>
        <div className="vm-demo-body">
          {mode.key === 'agent' ? (
            <AgentDemo mode={mode} phase={agentPhase} typed={typed} />
          ) : (
            <StaticDemo mode={mode} />
          )}
        </div>
      </div>
    </div>
  );
}

function SpokenFrame({ mode, content }) {
  const labelText = mode.key === 'prompt' ? 'Hold button and speak your prompt.' : 'Spoken · Hold to record';
  return (
    <div className="vm-spoken-frame">
      <div className="vm-lbl-row">
        <span className="vm-lbl-left">{labelText}</span>
        <span className="vm-right-cluster">
          <span className="vm-rec-tag">REC</span>
          <span className="vm-kbd-key">{mode.hotkey}</span>
        </span>
      </div>
      <div className="vm-spoken">
        <span className="vm-mic-circle">
          <MicIcon color="#ef4444" />
        </span>
        <p>{content}</p>
      </div>
    </div>
  );
}

function TransformStep({ text }) {
  return (
    <div className="vm-transform-step">
      <span className="vm-arrow">↓</span>
      <span>{text}</span>
    </div>
  );
}

function OutputFrame({ mode, text, showCaret = false }) {
  let body;
  if (mode.outputType === 'structured') {
    const lines = text.split('\n');
    body = (
      <pre className="vm-md-output">
        {lines.map((line, i) =>
          line.startsWith('# ') ? (
            <span key={i} className="vm-md-h">
              {line}
              {i < lines.length - 1 ? '\n' : ''}
            </span>
          ) : (
            <span key={i} className="vm-md-p">
              {line}
              {i < lines.length - 1 ? '\n' : ''}
            </span>
          ),
        )}
      </pre>
    );
  } else if (mode.outputType === 'bullets') {
    const lines = text.split('\n').filter((l) => l.trim().length > 0);
    body = (
      <div className="vm-output">
        {lines.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
        {showCaret && <span className="vm-caret" />}
      </div>
    );
  } else {
    body = (
      <p className="vm-plain-output">
        {text}
        {showCaret && <span className="vm-caret" />}
      </p>
    );
  }
  return (
    <div className="vm-output-frame">
      <div className="vm-output-lbl">Result</div>
      {body}
    </div>
  );
}

function StaticDemo({ mode }) {
  const spokenContent =
    mode.key === 'transform' ? <>&ldquo;{highlightFillers(mode.spokenRaw || '')}&rdquo;</> : <>&ldquo;{mode.spoken}&rdquo;</>;
  return (
    <>
      <SpokenFrame mode={mode} content={spokenContent} />
      {mode.transformStep && <TransformStep text={mode.transformStep} />}
      <OutputFrame mode={mode} text={mode.output} />
    </>
  );
}

function AgentDemo({ mode, phase, typed }) {
  const showSpoken = ['speaking', 'thinking', 'typing', 'hold'].includes(phase);
  const showTransform = ['thinking', 'typing', 'hold'].includes(phase);
  const showOutput = ['typing', 'hold'].includes(phase);
  const showIbeam = ['selected', 'speaking', 'thinking', 'typing', 'hold'].includes(phase);
  const phaseClass = `vm-phase-${phase === 'idle' ? 'idle' : phase === 'selecting' ? 'selecting' : 'rest'}`;
  return (
    <>
      <div className={`vm-agent-input ${phaseClass}`}>
        <div className="vm-section-hdr orange">
          <span className="vm-lbl-left">
            <CursorIcon />
            1. Select text
          </span>
        </div>
        <div className="vm-selected-row">
          <p>
            <span className="vm-text-content">{mode.selected}</span>
            {showIbeam && <span className="vm-ibeam" />}
          </p>
        </div>
        <div className={`vm-spoken-section ${showSpoken ? '' : 'hidden'}`}>
          <div className="vm-section-hdr red">
            <span className="vm-lbl-left">
              <MicIcon color="#ef4444" />
              2. Hold key, speak command
            </span>
            <span className="vm-right-cluster">
              <span className="vm-rec-tag">REC</span>
              <span className="vm-kbd-key">{mode.hotkey}</span>
            </span>
          </div>
          <p className="vm-spoken-text">&ldquo;{mode.spoken}&rdquo;</p>
        </div>
      </div>
      {showTransform && mode.transformStep && <TransformStep text={mode.transformStep} />}
      {showOutput && (
        <OutputFrame mode={mode} text={phase === 'typing' ? typed : mode.output} showCaret={phase === 'typing'} />
      )}
    </>
  );
}

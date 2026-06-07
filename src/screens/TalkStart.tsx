import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PhoneFrame } from '../components/PhoneFrame'
import { NavBar, Progress } from '../components/ui'
import { useTrip } from '../state/TripContext'
import './screens.css'

type Msg = { role: 'ai' | 'user'; text: string }

const QUESTIONS: { field: 'who' | 'date' | 'place'; prompt: string }[] = [
  { field: 'who', prompt: 'Who would you like to see?' },
  { field: 'date', prompt: 'When would you like to visit them?' },
  { field: 'place', prompt: 'Where do you remember being?' },
]

export function TalkStart() {
  const navigate = useNavigate()
  const { setField } = useTrip()
  const [messages, setMessages] = useState<Msg[]>([{ role: 'ai', text: QUESTIONS[0].prompt }])
  const [idx, setIdx] = useState(0)
  const [draft, setDraft] = useState('')
  const [typing, setTyping] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  const done = idx >= QUESTIONS.length

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, typing])

  function send() {
    const text = draft.trim()
    if (!text || done) return
    const q = QUESTIONS[idx]
    setField(q.field, text)
    setMessages((m) => [...m, { role: 'user', text }])
    setDraft('')

    const nextIdx = idx + 1
    if (nextIdx < QUESTIONS.length) {
      setTyping(true)
      setTimeout(() => {
        setMessages((m) => [...m, { role: 'ai', text: QUESTIONS[nextIdx].prompt }])
        setTyping(false)
        setIdx(nextIdx)
      }, 700)
    } else {
      setTyping(true)
      setTimeout(() => {
        setMessages((m) => [...m, { role: 'ai', text: "Great, I have everything I need." }])
        setTyping(false)
        setIdx(nextIdx)
      }, 700)
    }
  }

  return (
    <PhoneFrame>
      <NavBar title="Talk it through" back="/home" />
      <Progress step={1} total={3} />
      <div className="screen talk-screen">
        <h2 className="title-lg" style={{ marginTop: 12 }}>Let's figure it out together</h2>
        <p className="subtitle">Just describe it naturally.</p>

        <div className="chat talk-chat" ref={scrollRef}>
          {messages.map((m, i) => (
            <div key={i} className={`bubble ${m.role === 'ai' ? 'bubble-ai' : 'bubble-user'}`}>
              {m.text}
            </div>
          ))}
          {typing && (
            <div className="bubble bubble-ai typing">
              <span /><span /><span />
            </div>
          )}
        </div>

        {done ? (
          <div className="talk-footer">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => navigate('/talk-complete')}
            >
              Confirm trip →
            </button>
          </div>
        ) : (
          <div className="talk-footer">
            <div className="chat-input">
              <input
                placeholder="Type your answer…"
                value={draft}
                autoFocus
                onChange={(e) => setDraft(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') send()
                }}
              />
              <button
                className="chat-send"
                onClick={send}
                aria-label="Send"
                disabled={!draft.trim()}
                style={{ opacity: draft.trim() ? 1 : 0.5 }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M12 19V5M5 12L12 5L19 12" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </PhoneFrame>
  )
}

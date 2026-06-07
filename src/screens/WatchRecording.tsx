import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { PhoneFrame } from '../components/PhoneFrame'
import { getVisit, THUMB_GRADIENTS } from '../state/visits'
import './screens.css'

export function WatchRecording() {
  const { id = '' } = useParams()
  const visit = getVisit(id)
  const [playing, setPlaying] = useState(true)
  const [activeMoment, setActiveMoment] = useState(
    () => visit?.moments.findIndex((m) => m.active) ?? 0,
  )

  if (!visit) {
    return (
      <PhoneFrame dark>
        <div className="screen" style={{ padding: 24 }}>
          <p className="subtitle">Recording unavailable.</p>
          <Link to="/visits" className="btn btn-primary">Back</Link>
        </div>
      </PhoneFrame>
    )
  }

  const short = `${visit.who.split(' ')[0]} · ${visit.place.split(',')[0]}`
  const meta = `${visit.date} · ${visit.time} · ${visit.duration}`

  return (
    <PhoneFrame dark>
      <div className="rec">
        <div className="rec-topbar">
          <Link to={`/visits/${visit.id}`} className="rec-back" aria-label="Back">
            <svg width="12" height="18" viewBox="0 0 12 18" fill="none">
              <path d="M10 1L2 9L10 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <div className="rec-title">Watch Recording</div>
          <button className="rec-up" aria-label="Share">
            <svg width="14" height="18" viewBox="0 0 14 18" fill="none">
              <path d="M7 1V13M1 7L7 1L13 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <div
          className="rec-video"
          style={{ background: THUMB_GRADIENTS[visit.thumb] || THUMB_GRADIENTS.peach }}
        />

        <div className="rec-progress">
          <div className="rec-time-row">
            <span>01:56</span>
            <span>{visit.recordingTotal}</span>
          </div>
          <div className="rec-bar">
            <div className="rec-fill" style={{ width: '35%' }} />
            <div className="rec-knob" style={{ left: '35%' }} />
          </div>
        </div>

        <div className="rec-info">
          <div className="rec-info-title">{short}</div>
          <div className="rec-info-meta">{meta}</div>
          <div className="rec-mode-chip">💬 {visit.mode}</div>
        </div>

        <div className="rec-controls">
          <div className="rec-speed">1×</div>
          <div className="rec-ctrls">
            <button className="rec-ctrl">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 6L7 18M19 6L7 12L19 18Z" />
              </svg>
            </button>
            <button className="rec-ctrl main" onClick={() => setPlaying((p) => !p)}>
              {playing ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <rect x="6" y="5" width="4" height="14" rx="1" />
                  <rect x="14" y="5" width="4" height="14" rx="1" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M8 5V19L19 12L8 5Z" />
                </svg>
              )}
            </button>
            <button className="rec-ctrl">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17 6L17 18M5 6L17 12L5 18Z" />
              </svg>
            </button>
          </div>
          <div className="rec-airplay">AirPlay</div>
        </div>

        <div className="rec-divider" />

        <div className="rec-moments-h">MOMENTS</div>
        <div className="rec-moments">
          {visit.moments.map((m, i) => (
            <button
              key={i}
              type="button"
              className={`rec-moment ${activeMoment === i ? 'on' : ''}`}
              onClick={() => setActiveMoment(i)}
            >
              <span className="rec-moment-time">{m.at}</span>
              <span className="rec-moment-label">{m.label}</span>
              {activeMoment === i && (
                <span className="rec-moment-play">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5V19L19 12L8 5Z" />
                  </svg>
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </PhoneFrame>
  )
}

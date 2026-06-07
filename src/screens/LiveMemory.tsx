import { useNavigate } from 'react-router-dom'
import { PhoneFrame } from '../components/PhoneFrame'
import { useTrip } from '../state/TripContext'
import './screens.css'

export function LiveMemory() {
  const { trip } = useTrip()
  const navigate = useNavigate()

  const who = trip.who ? trip.who.split(' ')[0] : 'Mom'
  const place = trip.place ? trip.place.split(',')[0] : 'Kitchen'
  const title = `${who} · ${place}`
  const meta = [trip.date || 'Date', trip.time || 'Time'].filter(Boolean).join(' · ')

  return (
    <PhoneFrame background="#FFF5E6">
      <div className="memory">
        <div className="memory-top">
          <div className="memory-top-left">
            <div className="live-chip"><span className="dot" />LIVE</div>
            <div className="live-chip rec"><span className="dot" />REC</div>
          </div>
          <div className="mode-toggle">Interact mode</div>
        </div>

        <div className="memory-visual" />

        <div className="memory-panel">
          <div>
            <div className="memory-title">{title}</div>
            <div className="memory-meta">{meta}</div>
          </div>

          <div className="player">
            <div className="player-bar">
              <div className="fill" />
              <div className="knob" />
            </div>
          </div>
          <div className="player-ctrls" style={{ justifyContent: 'center' }}>
            <button className="player-btn" aria-label="Previous">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 6L7 18M19 6L7 12L19 18Z" />
              </svg>
            </button>
            <button className="player-btn main" aria-label="Pause">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                <rect x="6" y="5" width="4" height="14" rx="1" />
                <rect x="14" y="5" width="4" height="14" rx="1" />
              </svg>
            </button>
            <button className="player-btn" aria-label="Next">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17 6L17 18M5 6L17 12L5 18Z" />
              </svg>
            </button>
          </div>

          <div className="memory-actions">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => navigate('/return')}
            >
              Stop
            </button>
          </div>
        </div>
      </div>
    </PhoneFrame>
  )
}

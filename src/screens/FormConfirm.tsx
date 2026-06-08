import { useNavigate } from 'react-router-dom'
import { PhoneFrame } from '../components/PhoneFrame'
import { NavBar, Progress } from '../components/ui'
import { useTrip } from '../state/TripContext'
import './screens.css'

function Row({ icon, value, fallback }: { icon: string; value: string; fallback: string }) {
  return (
    <div className="summary-row">
      <span className="ico">{icon}</span>
      <span style={{ color: value ? 'var(--text)' : 'var(--text-mute)' }}>
        {value || fallback}
      </span>
    </div>
  )
}

export function FormConfirm() {
  const { trip, setField } = useTrip()
  const navigate = useNavigate()

  return (
    <PhoneFrame>
      <NavBar title="Here's your trip" back="/form" />
      <Progress step={2} total={3} />
      <div className="screen">
        <h2 className="title-lg" style={{ marginTop: 12 }}>Review the details</h2>
        <p className="subtitle">Everything looks right?</p>

        <div className="summary">
          <Row icon="👤" value={trip.who} fallback="Who were you with?" />
          <Row icon="📅" value={trip.date} fallback="Date" />
          <Row icon="🕐" value={trip.time} fallback="Time" />
          <Row icon="📍" value={trip.place} fallback="Place" />
          <Row icon="⏱️" value={trip.duration} fallback="Duration" />
        </div>

        <div className="mode-h">Choose how you'll experience this</div>
        <div className="mode-row">
          <button
            type="button"
            className={`mode ${trip.mode === 'interact' ? 'on' : ''}`}
            onClick={() => setField('mode', 'interact')}
          >
            <div className="mode-icon">💬</div>
            <div className="mode-name">Interact</div>
            <div className="mode-desc">Talk & respond</div>
          </button>
          <button
            type="button"
            className={`mode ${trip.mode === 'observe' ? 'on' : ''}`}
            onClick={() => setField('mode', 'observe')}
          >
            <div className="mode-icon">👁️</div>
            <div className="mode-name">Observe</div>
            <div className="mode-desc">Watch silently</div>
          </button>
        </div>

        <div className="screen-footer">
          <button
            type="button"
            className="btn btn-primary"
            disabled={!trip.mode}
            onClick={() => trip.mode && navigate('/wear')}
            style={{
              opacity: trip.mode ? 1 : 0.45,
              cursor: trip.mode ? 'pointer' : 'not-allowed',
            }}
          >
            Wear glasses →
          </button>
        </div>
      </div>
    </PhoneFrame>
  )
}

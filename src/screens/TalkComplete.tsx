import { useNavigate } from 'react-router-dom'
import { PhoneFrame } from '../components/PhoneFrame'
import { NavBar, Progress } from '../components/ui'
import { useTrip } from '../state/TripContext'
import './screens.css'

export function TalkComplete() {
  const { trip } = useTrip()
  const navigate = useNavigate()

  return (
    <PhoneFrame>
      <NavBar title="Talk it through" back="/talk" />
      <Progress step={2} total={3} />
      <div className="screen">
        <h2 className="title-lg" style={{ marginTop: 12 }}>Great, I have everything</h2>
        <p className="subtitle">Let me show you what I'll set up.</p>

        <div className="chat">
          <div className="bubble bubble-ai">Who would you like to see?</div>
          <div className="bubble bubble-user">{trip.who || '—'}</div>
          <div className="bubble bubble-ai">When?</div>
          <div className="bubble bubble-user">{trip.date || '—'}</div>
          <div className="bubble bubble-ai">Where do you remember being?</div>
          <div className="bubble bubble-user">{trip.place || '—'}</div>
        </div>

        <div className="collected">
          <div className="collected-h">Collected so far</div>
          <div className="collected-row">👤 {trip.who || 'Who'}</div>
          <div className="collected-row">📅 {trip.date || 'Date'}</div>
          <div className="collected-row">📍 {trip.place || 'Place'}</div>
        </div>

        <div className="screen-footer">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => navigate('/wear')}
          >
            Confirm trip →
          </button>
        </div>
      </div>
    </PhoneFrame>
  )
}

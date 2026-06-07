import { useNavigate } from 'react-router-dom'
import { PhoneFrame } from '../components/PhoneFrame'
import { NavBar, Progress } from '../components/ui'
import { useTrip } from '../state/TripContext'
import './screens.css'

export function FormStep() {
  const { trip, setField } = useTrip()
  const navigate = useNavigate()

  return (
    <PhoneFrame>
      <NavBar title="New trip" back="/home" />
      <Progress step={1} total={3} />
      <div className="screen">
        <h2 className="title-lg" style={{ marginTop: 12 }}>Tell us about the memory</h2>
        <p className="subtitle">We'll use this to set the scene.</p>

        <div className="label">Who were you with?</div>
        <input
          className="input"
          placeholder="e.g. Mom (Sarah)"
          value={trip.who}
          onChange={(e) => setField('who', e.target.value)}
        />

        <div className="label">Date</div>
        <input
          className="input"
          placeholder="e.g. September 10, 2012"
          value={trip.date}
          onChange={(e) => setField('date', e.target.value)}
        />

        <div className="label">Time</div>
        <input
          className="input"
          placeholder="e.g. Around 9:30 AM"
          value={trip.time}
          onChange={(e) => setField('time', e.target.value)}
        />

        <div className="label">Place</div>
        <input
          className="input"
          placeholder="e.g. Home kitchen, Seoul"
          value={trip.place}
          onChange={(e) => setField('place', e.target.value)}
        />

        <div className="label">How long would you like to stay?</div>
        <input
          className="input"
          placeholder="e.g. 5 minutes"
          value={trip.duration}
          onChange={(e) => setField('duration', e.target.value)}
        />

        <div className="screen-footer">
          <button type="button" className="btn btn-primary" onClick={() => navigate('/confirm')}>
            Continue →
          </button>
        </div>
      </div>
    </PhoneFrame>
  )
}

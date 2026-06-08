import { Link } from 'react-router-dom'
import { PhoneFrame } from '../components/PhoneFrame'
import { Button } from '../components/ui'
import { useTrip } from '../state/TripContext'
import './screens.css'

export function WearTravel() {
  const { trip } = useTrip()
  const whoShort = trip.who ? trip.who.split(' ')[0] || trip.who : 'them'

  return (
    <PhoneFrame dark>
      <div className="wear">
        <div className="wear-chip-wrap">
          <div className="wear-chip"><span className="dot" />Glasses connected</div>
        </div>

        <h1 className="wear-h">Take a breath.</h1>
        <div className="wear-sub">You'll be with {whoShort} again.</div>

        <div className="wear-card">
          <div className="wear-card-row">👤 {trip.who || 'Who'}</div>
          <div className="wear-card-row">📅 {trip.date || 'Date'}</div>
          <div className="wear-card-row">📍 {trip.place || 'Place'}</div>
        </div>

        <div className="wear-actions">
          <Button to="/memory">Begin time travel</Button>
          <Link to="/home" className="btn btn-ghost">Cancel</Link>
        </div>
      </div>
    </PhoneFrame>
  )
}

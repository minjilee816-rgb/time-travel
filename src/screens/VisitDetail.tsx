import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { PhoneFrame } from '../components/PhoneFrame'
import { NavBar } from '../components/ui'
import { getVisit, THUMB_GRADIENTS, FEELINGS } from '../state/visits'
import './screens.css'

export function VisitDetail() {
  const { id = '' } = useParams()
  const visit = getVisit(id)
  const navigate = useNavigate()
  const [feeling, setFeeling] = useState(visit?.feeling ?? FEELINGS[1])

  if (!visit) {
    return (
      <PhoneFrame>
        <NavBar title="Visit" back="/visits" />
        <div className="screen">
          <p className="subtitle" style={{ marginTop: 24 }}>This memory couldn't be found.</p>
          <div className="screen-footer">
            <Link to="/visits" className="btn btn-primary">Back to Visits</Link>
          </div>
        </div>
      </PhoneFrame>
    )
  }

  const notePreview = visit.noteParagraphs[0] || ''

  return (
    <PhoneFrame>
      <NavBar title="Visit detail" back="/visits" />
      <div className="screen visit-detail">
        <div
          className="detail-hero"
          style={{ background: THUMB_GRADIENTS[visit.thumb] || THUMB_GRADIENTS.peach }}
        >
          <div className="past-chip"><span className="dot" />Past</div>
        </div>

        <div className="detail-card">
          <div className="detail-card-title">{visit.who.split(' ')[0]} · {visit.place.split(',')[0]}</div>
          <div className="detail-card-date">{visit.date}</div>
          <div className="detail-card-rule" />
          <div className="detail-row">🕐 {visit.time}</div>
          <div className="detail-row">📍 {visit.place}</div>
          <div className="detail-row">⏱️ {visit.duration}</div>
          <div className="detail-row">💬 {visit.mode} mode</div>
        </div>

        <div className="felt-h">How you felt</div>
        <div className="feeling-row" style={{ marginBottom: 18 }}>
          {FEELINGS.map((f) => (
            <button
              key={f}
              type="button"
              className={`feeling ${feeling === f ? 'picked' : ''}`}
              onClick={() => setFeeling(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="felt-h">Journal</div>
        <Link to={`/visits/${visit.id}/note`} className="journal-preview">
          <p className="journal-preview-text">{notePreview}</p>
        </Link>

        <div className="screen-footer">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => navigate(`/visits/${visit.id}/recording`)}
          >
            Watch Recording →
          </button>
          <button type="button" className="btn btn-danger-ghost">
            Delete visit
          </button>
        </div>
      </div>
    </PhoneFrame>
  )
}

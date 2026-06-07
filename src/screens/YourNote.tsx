import { useMemo, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { PhoneFrame } from '../components/PhoneFrame'
import { NavBar } from '../components/ui'
import { getVisit } from '../state/visits'
import './screens.css'

export function YourNote() {
  const { id = '' } = useParams()
  const visit = getVisit(id)
  const navigate = useNavigate()
  const [editing, setEditing] = useState(false)
  const [paragraphs, setParagraphs] = useState<string[]>(visit?.noteParagraphs ?? [])

  const wordCount = useMemo(() => {
    return paragraphs.join(' ').trim().split(/\s+/).filter(Boolean).length
  }, [paragraphs])

  if (!visit) {
    return (
      <PhoneFrame>
        <NavBar title="Note" back="/visits" />
        <div className="screen">
          <p className="subtitle" style={{ marginTop: 24 }}>Note not found.</p>
          <Link to="/visits" className="btn btn-primary">Back</Link>
        </div>
      </PhoneFrame>
    )
  }

  return (
    <PhoneFrame background="linear-gradient(180deg, #FFF6E7 0%, #FFFBF1 50%, #FFFFFF 100%)">
      <NavBar title="Your note" back={`/visits/${visit.id}`} />
      <div className="screen note-screen">
        <div className="note-header-card">
          <div className="note-avatar">👤</div>
          <div className="note-headline">
            <div className="note-headline-title">{visit.who.split(' ')[0]} · {visit.place.split(',')[0]}</div>
            <div className="note-headline-meta">{visit.date} · {visit.time}</div>
          </div>
          <div className="note-feeling">{visit.feeling}</div>
        </div>

        <div className="note-written">
          <div className="note-written-label">Written after your visit</div>
          <div className="note-written-date">{visit.noteWrittenAt}</div>
        </div>

        <div className="note-paper">
          {editing ? (
            paragraphs.map((p, i) => (
              <textarea
                key={i}
                className="note-paper-textarea"
                value={p}
                onChange={(e) => {
                  const copy = [...paragraphs]
                  copy[i] = e.target.value
                  setParagraphs(copy)
                }}
                rows={3}
              />
            ))
          ) : (
            paragraphs.map((p, i) => (
              <p key={i} className="note-paper-p">{p}</p>
            ))
          )}
          <div className="note-paper-count">{wordCount} words</div>
        </div>

        <div className="note-actions">
          <button
            type="button"
            className="note-action"
            onClick={() => setEditing((e) => !e)}
          >
            ✏️ {editing ? 'Save note' : 'Edit note'}
          </button>
          <button type="button" className="note-action">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ marginRight: 6 }}>
              <path d="M12 16V4M5 11L12 4L19 11M5 20H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Share
          </button>
        </div>

        <div className="screen-footer">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => navigate(`/visits/${visit.id}`)}
          >
            Done
          </button>
        </div>
      </div>
    </PhoneFrame>
  )
}

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PhoneFrame } from '../components/PhoneFrame'
import './screens.css'

const FEELINGS = ['😢', '😌', '🙂', '💛', '🥲']

export function Return() {
  const [picked, setPicked] = useState<number | null>(null)
  const navigate = useNavigate()

  return (
    <PhoneFrame>
      <div className="return">
        <div className="return-rings">
          <div className="ring2">
            <div className="ring3">breathe</div>
          </div>
        </div>

        <h1 className="return-title">Welcome back.</h1>
        <p className="return-sub">You're here, in the present.</p>

        <div className="feeling-q">How are you feeling right now?</div>
        <div className="feeling-row">
          {FEELINGS.map((f, i) => (
            <button
              key={i}
              type="button"
              className={`feeling ${picked === i ? 'picked' : ''}`}
              onClick={() => setPicked(i)}
              aria-pressed={picked === i}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="screen-footer">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => navigate('/home')}
          >
            Done ✓
          </button>
          <button
            type="button"
            className="visit-history-link"
            onClick={() => navigate('/visits')}
          >
            Visit history
          </button>
        </div>
      </div>
    </PhoneFrame>
  )
}

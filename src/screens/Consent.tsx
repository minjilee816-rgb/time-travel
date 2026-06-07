import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PhoneFrame } from '../components/PhoneFrame'
import { Progress } from '../components/ui'
import './screens.css'

export function Consent() {
  const [agreed, setAgreed] = useState(false)
  const navigate = useNavigate()

  return (
    <PhoneFrame>
      <Progress step={3} total={3} />
      <div className="screen" style={{ padding: 0 }}>
        <div className="consent-hero">
          <div className="consent-ring" style={{ width: 180, height: 180 }} />
          <div className="consent-ring" style={{ width: 130, height: 130 }} />
          <div className="consent-ring" style={{ width: 90, height: 90 }} />
          <div className="consent-check">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M5 12L10 17L20 7" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        <div style={{ padding: '20px 24px 24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
          <h2 className="title-lg">A gentle heads-up</h2>
          <p className="subtitle">Tempus helps you revisit meaningful moments thoughtfully and safely.</p>

          <div className="consent-list">
            <div className="consent-item">
              <div className="consent-item-icon">💛</div>
              <div>
                <div className="consent-item-title">Pause anytime</div>
                <div className="consent-item-desc">Take a break or leave the experience whenever you need to.</div>
              </div>
            </div>
            <div className="consent-item">
              <div className="consent-item-icon">🔒</div>
              <div>
                <div className="consent-item-title">Past only</div>
                <div className="consent-item-desc">We only surface memories from the past — never the future.</div>
              </div>
            </div>
            <div className="consent-item">
              <div className="consent-item-icon">🤝</div>
              <div>
                <div className="consent-item-title">Support nearby</div>
                <div className="consent-item-desc">Wellbeing tools and support are always within reach.</div>
              </div>
            </div>
          </div>

          <button
            type="button"
            className="consent-agree"
            onClick={() => setAgreed((a) => !a)}
            aria-pressed={agreed}
          >
            <div className={`checkbox ${agreed ? '' : 'unchecked'}`}>
              {agreed && (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12L10 17L20 7" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </div>
            <span>I understand and I'm ready to begin</span>
          </button>

          <div className="screen-footer">
            <button
              type="button"
              className="btn btn-primary"
              disabled={!agreed}
              onClick={() => agreed && navigate('/pair')}
              style={{
                opacity: agreed ? 1 : 0.45,
                cursor: agreed ? 'pointer' : 'not-allowed',
              }}
            >
              Enter Tempus
            </button>
          </div>
        </div>
      </div>
    </PhoneFrame>
  )
}

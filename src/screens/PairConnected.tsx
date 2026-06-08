import { PhoneFrame } from '../components/PhoneFrame'
import { Button } from '../components/ui'
import './screens.css'

export function PairConnected() {
  return (
    <PhoneFrame>
      <div className="connected">
        <div className="connected-check">
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
            <path d="M5 12L10 17L20 7" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <h1 className="connected-h">Connected!</h1>
        <div className="connected-sub">Tempus Glass v1 is paired<br />and ready to use.</div>

        <div className="specs">
          <div className="spec-cell">
            <div className="spec-label">Battery</div>
            <div className="spec-val">100%</div>
          </div>
          <div className="spec-cell">
            <div className="spec-label">Firmware</div>
            <div className="spec-val">v2.4.1</div>
          </div>
          <div className="spec-cell">
            <div className="spec-label">Signal</div>
            <div className="spec-val good">Strong</div>
          </div>
        </div>

        <div className="connected-chip">● Glasses connected ✓</div>

        <div className="screen-footer" style={{ width: '100%' }}>
          <Button to="/pair-guide">Continue →</Button>
          <div className="btn-foot-note">You can start your first trip now</div>
        </div>
      </div>
    </PhoneFrame>
  )
}

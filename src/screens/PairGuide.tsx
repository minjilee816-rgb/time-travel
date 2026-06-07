import { PhoneFrame } from '../components/PhoneFrame'
import { Button, NavBar } from '../components/ui'
import './screens.css'

export function PairGuide() {
  return (
    <PhoneFrame>
      <NavBar title="How to use" back="/pair-connected" />
      <div className="screen">
        <h1 className="title-xl" style={{ marginTop: 8 }}>Quick guide</h1>
        <p className="subtitle">Everything you need to know.</p>

        <div className="guide-list">
          <div className="guide-card">
            <div className="guide-icon">⏻</div>
            <div>
              <div className="guide-title">Turn on</div>
              <div className="guide-desc">Hold the right temple button 3 sec.<br />The lens will glow teal when ready.</div>
            </div>
          </div>
          <div className="guide-card purple">
            <div className="guide-icon">🕶️</div>
            <div>
              <div className="guide-title">Wear & calibrate</div>
              <div className="guide-desc">Put on the glasses. Stay seated.<br />Look forward — calibration takes 5s.</div>
            </div>
          </div>
          <div className="guide-card orange">
            <div className="guide-icon">⏸</div>
            <div>
              <div className="guide-title">Pause anytime</div>
              <div className="guide-desc">Tap the left temple once to pause.<br />The scene will freeze.</div>
            </div>
          </div>
          <div className="guide-card blue">
            <div className="guide-icon">⏏</div>
            <div>
              <div className="guide-title">Return to present</div>
              <div className="guide-desc">Hold the left temple 2 sec.<br />You'll return to your living room.</div>
            </div>
          </div>
        </div>

        <div className="safety">⚠️ Safety: Sit down before traveling. Max 10 min per session.</div>

        <div className="screen-footer">
          <Button to="/home">I'm ready to travel →</Button>
        </div>
      </div>
    </PhoneFrame>
  )
}

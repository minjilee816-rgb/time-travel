import { PhoneFrame } from '../components/PhoneFrame'
import { Button, NavBar } from '../components/ui'
import { Glasses } from '../components/Glasses'
import './screens.css'

export function PairIntro() {
  return (
    <PhoneFrame>
      <NavBar title="Pair Tempus Glass" back="/consent" />
      <div className="screen" style={{ padding: 0 }}>
        <div className="pair-intro-hero">
          <div className="ring" style={{ width: 180, height: 180 }} />
          <div className="ring" style={{ width: 130, height: 130 }} />
          <Glasses width={220} />
          <div className="pair-shield">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L4 6V12C4 17 8 21 12 22C16 21 20 17 20 12V6L12 2Z" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
        </div>

        <div style={{ padding: '20px 24px 24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
          <h2 className="title-lg">Let's connect your glasses</h2>
          <p className="subtitle">Place your Tempus Glass nearby and make sure Bluetooth is enabled.</p>

          <div className="steps-list">
            <div className="step-card">
              <div className="step-num">1</div>
              <div>
                <div className="step-title">Power on glasses</div>
                <div className="step-desc">Hold the side button for 3 seconds</div>
              </div>
            </div>
            <div className="step-card">
              <div className="step-num">2</div>
              <div>
                <div className="step-title">Enable Bluetooth</div>
                <div className="step-desc">Settings → Bluetooth → turn on</div>
              </div>
            </div>
            <div className="step-card">
              <div className="step-num">3</div>
              <div>
                <div className="step-title">Tap pair below</div>
                <div className="step-desc">We'll connect automatically</div>
              </div>
            </div>
          </div>

          <div className="screen-footer">
            <Button to="/pair-scan">Scan for glasses</Button>
            <div className="btn-foot-note">Both devices must be nearby</div>
          </div>
        </div>
      </div>
    </PhoneFrame>
  )
}

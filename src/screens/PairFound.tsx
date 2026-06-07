import { PhoneFrame } from '../components/PhoneFrame'
import { Button, NavBar } from '../components/ui'
import { Glasses } from '../components/Glasses'
import './screens.css'

export function PairFound() {
  return (
    <PhoneFrame>
      <NavBar title="Found a device" back="/pair" />
      <div className="screen" style={{ padding: 0 }}>
        <div className="found-hero">
          <div className="ring" style={{ width: 180, height: 180 }} />
          <div className="ring" style={{ width: 130, height: 130 }} />
          <div className="ring" style={{ width: 90, height: 90 }} />
          <Glasses width={200} />
        </div>

        <div style={{ padding: '20px 24px 24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
          <div className="device-card">
            <div className="device-mini"><Glasses width={42} /></div>
            <div style={{ flex: 1 }}>
              <div className="device-name">Tempus Glass v1</div>
              <div className="device-serial">Serial: TG-2024-0847</div>
              <div className="device-signal">📶 Strong signal</div>
            </div>
          </div>

          <div className="confirm-chip">
            <span>✓ This is your device</span>
            <span className="right">Not your device?</span>
          </div>

          <div className="encrypt">
            <div className="encrypt-title">🔒 Encrypted Bluetooth pairing</div>
            <div className="encrypt-sub">Your connection and data are private.</div>
          </div>

          <div className="screen-footer">
            <Button to="/pair-connected">Connect to this glass</Button>
            <div className="btn-foot-note">Takes about 3 seconds</div>
          </div>
        </div>
      </div>
    </PhoneFrame>
  )
}

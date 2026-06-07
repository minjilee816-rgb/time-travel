import { useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { PhoneFrame } from '../components/PhoneFrame'
import { NavBar } from '../components/ui'
import { Glasses } from '../components/Glasses'
import './screens.css'

export function PairScan() {
  const navigate = useNavigate()
  useEffect(() => {
    const t = setTimeout(() => navigate('/pair-found'), 2500)
    return () => clearTimeout(t)
  }, [navigate])

  return (
    <PhoneFrame dark>
      <NavBar title="Searching…" back="/pair" />
      <div className="scan">
        <div className="scan-radar">
          <div className="ring r1" />
          <div className="ring r2" />
          <div className="ring r3" />
          <Glasses width={200} />
        </div>

        <div className="scan-h">Searching for Tempus Glass…</div>
        <div className="scan-sub">Make sure your glasses are<br />powered on and in range.</div>

        <div className="voice-wave" style={{ marginTop: 16 }}>
          <span /><span /><span /><span /><span /><span /><span />
        </div>
        <div className="scan-status">Scanning</div>

        <div className="bt-chip">◯ Bluetooth · Active</div>

        <Link to="/consent" className="scan-cancel">Cancel</Link>
      </div>
    </PhoneFrame>
  )
}

import { PhoneFrame } from '../components/PhoneFrame'
import { NavBar } from '../components/ui'
import { useNavigate } from 'react-router-dom'
import './screens.css'

export function VoiceListening() {
  const navigate = useNavigate()
  return (
    <PhoneFrame dark>
      <NavBar title="Voice mode" back="/home" />
      <div className="voice">
        <div className="voice-orb-wrap">
          <div className="voice-mic">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <rect x="9" y="3" width="6" height="12" rx="3" fill="white" />
              <path d="M5 11C5 14.866 8.134 18 12 18M12 18C15.866 18 19 14.866 19 11M12 18V22M8 22H16" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <div className="voice-wave">
            <span /><span /><span /><span /><span /><span /><span />
          </div>
          <div className="voice-listening">Listening…</div>
        </div>

        <div className="voice-quote">"Take me to see my mom on Sep 10, 2012."</div>

        <button className="voice-stop" onClick={() => navigate('/voice-result')}>Tap to stop</button>
      </div>
    </PhoneFrame>
  )
}

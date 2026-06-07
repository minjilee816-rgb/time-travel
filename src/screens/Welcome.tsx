import { PhoneFrame } from '../components/PhoneFrame'
import { Button } from '../components/ui'
import { Link } from 'react-router-dom'
import './screens.css'

export function Welcome() {
  return (
    <PhoneFrame dark>
      <div className="welcome">
        <div className="welcome-bg" />
        <div className="welcome-center">
          <div className="welcome-logo">
            <div className="welcome-logo-dot" />
          </div>
          <h1 className="welcome-title">Tempus</h1>
          <p className="welcome-sub">Revisit the moments<br />that matter most.</p>
        </div>
        <div className="welcome-actions">
          <Button to="/create">Create account</Button>
          <Link to="/create" className="btn btn-outline-light">I already have an account</Link>
        </div>
      </div>
    </PhoneFrame>
  )
}

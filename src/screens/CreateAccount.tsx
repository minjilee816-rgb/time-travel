import { PhoneFrame } from '../components/PhoneFrame'
import { Button, NavBar, Progress } from '../components/ui'
import './screens.css'

export function CreateAccount() {
  return (
    <PhoneFrame>
      <NavBar title="Create account" back="/" />
      <Progress step={1} total={3} />
      <div className="screen">
        <div className="label">Full name</div>
        <input className="input" placeholder="Your full name" />
        <div className="label">Email address</div>
        <input className="input" placeholder="you@email.com" />
        <div className="label">Password</div>
        <input className="input" type="password" placeholder="At least 8 characters" />

        <div className="divider-or">or continue with</div>
        <div className="social-row">
          <div className="social-btn" style={{ color: '#4285F4' }}>G</div>
          <div className="social-btn">🍎</div>
          <div className="social-btn">𝕏</div>
        </div>
        <div className="tos">By continuing you agree to our Terms & Privacy Policy</div>

        <div className="screen-footer">
          <Button to="/verify">Continue</Button>
        </div>
      </div>
    </PhoneFrame>
  )
}

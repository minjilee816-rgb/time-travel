import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PhoneFrame } from '../components/PhoneFrame'
import { NavBar, Progress } from '../components/ui'
import './screens.css'

const KEYS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '', '0', '⌫']

export function VerifyEmail() {
  const navigate = useNavigate()
  const [digits, setDigits] = useState<string[]>(['', '', '', ''])

  const nextIndex = digits.findIndex((d) => d === '')

  function press(k: string) {
    if (k === '') return
    if (k === '⌫') {
      const lastFilled = [...digits].map((d, i) => (d ? i : -1)).filter((i) => i >= 0).pop()
      if (lastFilled === undefined) return
      const copy = [...digits]
      copy[lastFilled] = ''
      setDigits(copy)
      return
    }
    if (nextIndex === -1) return // already full
    const copy = [...digits]
    copy[nextIndex] = k
    setDigits(copy)
    if (nextIndex === digits.length - 1) {
      // last digit just filled — advance after a brief beat
      setTimeout(() => navigate('/consent'), 300)
    }
  }

  return (
    <PhoneFrame>
      <NavBar title="Verify email" back="/create" />
      <Progress step={2} total={3} />
      <div className="screen">
        <div className="email-chip">✉️ emily@email.com</div>
        <h2 className="title-lg">Check your inbox</h2>
        <p className="subtitle">Enter the 4-digit code we sent to confirm your email address.</p>

        <div className="code-row-wrap">
          <div className="code-timer-chip">0:47</div>
          <div className="code-row">
            {digits.map((d, i) => {
              const isCursor = d === '' && i === nextIndex
              return (
                <div
                  key={i}
                  className={`code-cell ${d ? 'filled' : ''} ${isCursor ? 'cursor' : ''}`}
                >
                  {d}
                </div>
              )
            })}
          </div>
        </div>

        <button className="resend-btn" type="button">Resend code</button>

        <div className="keyboard" style={{ marginTop: 'auto' }}>
          {KEYS.map((k, i) => (
            <button
              key={i}
              className={`key ${k === '' ? 'empty' : ''} ${k === '⌫' ? 'bksp' : ''}`}
              onClick={() => press(k)}
            >
              {k}
            </button>
          ))}
        </div>
      </div>
    </PhoneFrame>
  )
}

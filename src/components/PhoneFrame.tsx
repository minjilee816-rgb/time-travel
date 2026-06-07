import type { ReactNode, CSSProperties } from 'react'
import './PhoneFrame.css'

type Props = {
  children: ReactNode
  dark?: boolean
  background?: string
  statusBarColor?: 'light' | 'dark'
}

export function PhoneFrame({ children, dark = false, background, statusBarColor }: Props) {
  const isDark = dark || statusBarColor === 'light'
  const innerStyle: CSSProperties = background ? { background } : {}
  return (
    <div className={`phone ${isDark ? 'phone-dark' : ''}`}>
      <div className="phone-inner" style={innerStyle}>
        <StatusBar light={isDark} />
        <div className="phone-content">{children}</div>
        <div className="phone-home-bar" />
      </div>
    </div>
  )
}

function StatusBar({ light }: { light: boolean }) {
  const color = light ? '#FFFFFF' : '#0F1A1A'
  return (
    <div className="status-bar" style={{ color }}>
      <div className="status-time">9:41</div>
      <div className="status-island" />
      <div className="status-right">
        <SignalIcon color={color} />
        <BatteryIcon color={color} />
      </div>
    </div>
  )
}

function SignalIcon({ color }: { color: string }) {
  return (
    <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
      <rect x="0" y="8" width="3" height="4" rx="0.5" fill={color} />
      <rect x="5" y="5" width="3" height="7" rx="0.5" fill={color} />
      <rect x="10" y="2" width="3" height="10" rx="0.5" fill={color} />
      <rect x="15" y="0" width="3" height="12" rx="0.5" fill={color} opacity="0.4" />
    </svg>
  )
}

function BatteryIcon({ color }: { color: string }) {
  return (
    <svg width="26" height="12" viewBox="0 0 26 12" fill="none">
      <rect x="0.5" y="0.5" width="22" height="11" rx="2.5" stroke={color} fill="none" />
      <rect x="2" y="2" width="19" height="8" rx="1" fill={color} />
      <rect x="23.5" y="4" width="2" height="4" rx="1" fill={color} opacity="0.5" />
    </svg>
  )
}

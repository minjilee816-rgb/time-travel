import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import './ui.css'

export function Button({
  children,
  to,
  onClick,
  variant = 'primary',
}: {
  children: ReactNode
  to?: string
  onClick?: () => void
  variant?: 'primary' | 'ghost'
}) {
  const cls = `btn btn-${variant}`
  if (to) return <Link to={to} className={cls}>{children}</Link>
  return <button className={cls} onClick={onClick}>{children}</button>
}

export function BackButton({ to }: { to: string }) {
  return (
    <Link to={to} className="back-btn" aria-label="Back">
      <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
        <path d="M8 1L1 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </Link>
  )
}

export function NavBar({
  title,
  back,
  light,
}: {
  title: string
  back?: string
  light?: boolean
}) {
  return (
    <div className={`navbar ${light ? 'navbar-light' : ''}`}>
      <div className="navbar-left">{back && <BackButton to={back} />}</div>
      <div className="navbar-title">{title}</div>
      <div className="navbar-right" />
    </div>
  )
}

export function Progress({ step, total }: { step: number; total: number }) {
  return (
    <div className="progress">
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} className={`progress-seg ${i < step ? 'on' : ''}`} />
      ))}
    </div>
  )
}

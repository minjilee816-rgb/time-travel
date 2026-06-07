import { Link } from 'react-router-dom'
import './TabBar.css'

type Tab = 'home' | 'visits' | 'saved' | 'settings'

const TABS: { id: Tab; label: string; to: string; icon: (active: boolean) => React.ReactNode }[] = [
  {
    id: 'home',
    label: 'Home',
    to: '/home',
    icon: (a) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M4 11L12 4L20 11V20C20 20.5523 19.5523 21 19 21H14V14H10V21H5C4.44772 21 4 20.5523 4 20V11Z"
          stroke="currentColor"
          strokeWidth={a ? 2 : 1.6}
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 'visits',
    label: 'Visits',
    to: '/visits',
    icon: () => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="13" r="8" stroke="currentColor" strokeWidth="1.6" />
        <path d="M12 9V13L15 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M9 3H15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'saved',
    label: 'Saved',
    to: '/saved',
    icon: () => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M6 3H18C18.5523 3 19 3.44772 19 4V21L12 17L5 21V4C5 3.44772 5.44772 3 6 3Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 'settings',
    label: 'Settings',
    to: '/settings',
    icon: () => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M19.4 15A1.65 1.65 0 0 0 19.7 16.8L19.8 16.9C20.2 17.3 20.2 17.9 19.8 18.3L18.3 19.8C17.9 20.2 17.3 20.2 16.9 19.8L16.8 19.7A1.65 1.65 0 0 0 15 19.4 1.65 1.65 0 0 0 14 20.9V21A1 1 0 0 1 13 22H11A1 1 0 0 1 10 21V20.9A1.65 1.65 0 0 0 9 19.4A1.65 1.65 0 0 0 7.2 19.7L7.1 19.8C6.7 20.2 6.1 20.2 5.7 19.8L4.2 18.3C3.8 17.9 3.8 17.3 4.2 16.9L4.3 16.8A1.65 1.65 0 0 0 4.6 15A1.65 1.65 0 0 0 3.1 14H3A1 1 0 0 1 2 13V11A1 1 0 0 1 3 10H3.1A1.65 1.65 0 0 0 4.6 9A1.65 1.65 0 0 0 4.3 7.2L4.2 7.1C3.8 6.7 3.8 6.1 4.2 5.7L5.7 4.2C6.1 3.8 6.7 3.8 7.1 4.2L7.2 4.3A1.65 1.65 0 0 0 9 4.6A1.65 1.65 0 0 0 10 3.1V3A1 1 0 0 1 11 2H13A1 1 0 0 1 14 3V3.1A1.65 1.65 0 0 0 15 4.6A1.65 1.65 0 0 0 16.8 4.3L16.9 4.2C17.3 3.8 17.9 3.8 18.3 4.2L19.8 5.7C20.2 6.1 20.2 6.7 19.8 7.1L19.7 7.2A1.65 1.65 0 0 0 19.4 9V9A1.65 1.65 0 0 0 20.9 10H21A1 1 0 0 1 22 11V13A1 1 0 0 1 21 14H20.9A1.65 1.65 0 0 0 19.4 15Z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
]

export function TabBar({ active }: { active: Tab }) {
  return (
    <div className="tabbar">
      {TABS.map((t) => {
        const isActive = t.id === active
        return (
          <Link key={t.id} to={t.to} className={`tab ${isActive ? 'tab-active' : ''}`}>
            {isActive && <div className="tab-dot" />}
            <div className="tab-pill">
              <div className="tab-icon">{t.icon(isActive)}</div>
            </div>
            <div className="tab-label">{t.label}</div>
          </Link>
        )
      })}
    </div>
  )
}

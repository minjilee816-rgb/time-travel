import { useState } from 'react'
import { Link } from 'react-router-dom'
import { PhoneFrame } from '../components/PhoneFrame'
import { TabBar } from '../components/TabBar'
import { VISITS, THUMB_GRADIENTS } from '../state/visits'
import './screens.css'

type Filter = 'all' | 'interact' | 'observe'

export function Visits() {
  const [filter, setFilter] = useState<Filter>('all')
  const list = VISITS.filter((v) => {
    if (filter === 'all') return true
    return v.mode.toLowerCase() === filter
  })

  return (
    <PhoneFrame background="linear-gradient(180deg, #EAF6F2 0%, #F7FBF9 25%, #FFFFFF 100%)">
      <div className="screen visits-screen" style={{ paddingTop: 12 }}>
        <div className="home-greet">Your private archive</div>
        <div className="home-name" style={{ fontSize: 32, marginBottom: 14 }}>Visits</div>

        <div className="visit-filters">
          {(['all', 'interact', 'observe'] as Filter[]).map((f) => (
            <button
              key={f}
              type="button"
              className={`visit-filter ${filter === f ? 'on' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f === 'all' ? 'All' : f === 'interact' ? 'Interact' : 'Observe'}
            </button>
          ))}
        </div>

        <div className="visit-count">{list.length} {list.length === 1 ? 'memory' : 'memories'}</div>

        <div className="visit-list">
          {list.map((v) => (
            <Link key={v.id} to={`/visits/${v.id}`} className="visit-card">
              <div className="visit-thumb" style={{ background: THUMB_GRADIENTS[v.thumb] || THUMB_GRADIENTS.peach }}>
                <div className="visit-feeling">{v.feeling}</div>
              </div>
              <div className="visit-meta">
                <div className="visit-who">{v.who}</div>
                <div className="visit-line">📅 {v.date} · 🕐 {v.time}</div>
                <div className="visit-line">📍 {v.place}</div>
                <div className="visit-tags">
                  <span className="visit-tag">{v.mode}</span>
                  <span className="visit-tag light">{v.duration}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <TabBar active="visits" />
    </PhoneFrame>
  )
}

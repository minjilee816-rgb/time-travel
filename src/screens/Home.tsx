import { Link } from 'react-router-dom'
import { PhoneFrame } from '../components/PhoneFrame'
import { TabBar } from '../components/TabBar'
import './screens.css'

const ENTRIES = [
  { to: '/form', icon: '📝', title: 'Step-by-step', desc: 'Fill in details manually' },
  { to: '/photo', icon: '🖼️', title: 'From a photo', desc: "We'll read date & place" },
  { to: '/talk', icon: '💬', title: 'Talk it through', desc: 'Describe the memory' },
  { to: '/voice', icon: '🎙️', title: 'Use my voice', desc: 'One spoken command' },
]

export function Home() {
  return (
    <PhoneFrame background="linear-gradient(180deg, #EAF6F2 0%, #F7FBF9 35%, #FFFFFF 100%)">
      <div className="screen home-screen" style={{ paddingTop: 12 }}>
        <div className="home-greet">Good morning,</div>
        <div className="home-name">Emily</div>
        <div className="glasses-chip"><span className="dot" />Glasses connected</div>
        <div className="home-q">How do you want to remember this?</div>
        <div className="entry-list">
          {ENTRIES.map((e) => (
            <Link key={e.to} to={e.to} className="entry">
              <div className="entry-icon"><span className="entry-icon-emoji">{e.icon}</span></div>
              <div className="entry-text">
                <div className="entry-title">{e.title}</div>
                <div className="entry-desc">{e.desc}</div>
              </div>
              <div className="entry-caret">›</div>
            </Link>
          ))}
        </div>
      </div>
      <TabBar active="home" />
    </PhoneFrame>
  )
}

import { PhoneFrame } from '../components/PhoneFrame'
import { Button, NavBar, Progress } from '../components/ui'
import './screens.css'

const PHOTOS = [
  { bg: '#FBE2C4', sel: true },
  { bg: '#CFE3F4' },
  { bg: '#DDEDD9' },
  { bg: '#E7DAF2' },
  { bg: '#FBE2C4' },
  { bg: '#CFE7E5' },
]

export function PhotoPicker() {
  return (
    <PhoneFrame>
      <NavBar title="Choose a photo" back="/home" />
      <Progress step={1} total={3} />
      <div className="screen">
        <h2 className="title-lg" style={{ marginTop: 12 }}>Pick a memory photo</h2>
        <p className="subtitle">We'll read the date and place automatically.</p>

        <div className="photo-grid">
          {PHOTOS.map((p, i) => (
            <div key={i} className={`photo ${p.sel ? 'sel' : ''}`} style={{ background: p.bg }}>
              🏠
              {p.sel && (
                <div className="photo-tick">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12L10 17L20 7" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="browse">📂 Browse files…</div>

        <div className="screen-footer">
          <Button to="/exif">Use this photo</Button>
        </div>
      </div>
    </PhoneFrame>
  )
}

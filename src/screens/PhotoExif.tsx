import { PhoneFrame } from '../components/PhoneFrame'
import { Button, NavBar, Progress } from '../components/ui'
import './screens.css'

export function PhotoExif() {
  return (
    <PhoneFrame>
      <NavBar title="We found this" back="/photo" />
      <Progress step={2} total={3} />
      <div className="screen">
        <h2 className="title-lg" style={{ marginTop: 12 }}>Looks like this memory</h2>
        <p className="subtitle">From the photo's metadata.</p>

        <div className="exif-card">
          <div className="exif-tag">● Photo</div>
          <div>
            <div className="exif-card-title">Mom · Kitchen</div>
            <div className="exif-card-sub">Detected from EXIF data</div>
          </div>
        </div>

        <div className="exif-note">✓ Metadata read automatically</div>

        <div className="label">Date</div>
        <input className="input" defaultValue="September 10, 2012" readOnly />

        <div className="label">Time</div>
        <input className="input" defaultValue="9:30 AM" readOnly />

        <div className="label">Place</div>
        <input className="input" defaultValue="Home kitchen, Seoul" readOnly />

        <div className="screen-footer">
          <Button to="/wear">Looks right, continue →</Button>
        </div>
      </div>
    </PhoneFrame>
  )
}

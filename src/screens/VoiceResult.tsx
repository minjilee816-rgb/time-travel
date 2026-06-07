import { PhoneFrame } from '../components/PhoneFrame'
import { Button, NavBar, Progress } from '../components/ui'
import './screens.css'

function Field({ label, value }: { label: string; value: string }) {
  return (
    <>
      <div className="label">{label}</div>
      <div className="input input-row">
        <span>{value}</span>
        <span className="edit">Edit</span>
      </div>
    </>
  )
}

export function VoiceResult() {
  return (
    <PhoneFrame>
      <NavBar title="Got it!" back="/voice" />
      <Progress step={2} total={3} />
      <div className="screen">
        <h2 className="title-lg" style={{ marginTop: 12 }}>Here's what I heard</h2>
        <p className="subtitle">Tap any field to edit.</p>

        <div className="chip-soft" style={{ marginTop: 14 }}>🎙️ From voice command</div>

        <Field label="Who" value="Mom (Sarah)" />
        <Field label="Date" value="September 10, 2012" />
        <Field label="Time" value="Around 9:30 AM" />
        <Field label="Place" value="Home kitchen, Seoul" />

        <div className="screen-footer">
          <Button to="/wear">Yes, that's right →</Button>
        </div>
      </div>
    </PhoneFrame>
  )
}

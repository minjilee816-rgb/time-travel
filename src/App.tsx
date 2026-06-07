import { HashRouter, Route, Routes } from 'react-router-dom'
import { TripProvider } from './state/TripContext'
import { Welcome } from './screens/Welcome'
import { CreateAccount } from './screens/CreateAccount'
import { VerifyEmail } from './screens/VerifyEmail'
import { Consent } from './screens/Consent'
import { Home } from './screens/Home'
import { FormStep } from './screens/FormStep'
import { FormConfirm } from './screens/FormConfirm'
import { PhotoPicker } from './screens/PhotoPicker'
import { PhotoExif } from './screens/PhotoExif'
import { TalkStart } from './screens/TalkStart'
import { TalkComplete } from './screens/TalkComplete'
import { VoiceListening } from './screens/VoiceListening'
import { VoiceResult } from './screens/VoiceResult'
import { WearTravel } from './screens/WearTravel'
import { LiveMemory } from './screens/LiveMemory'
import { Return } from './screens/Return'
import { PairIntro } from './screens/PairIntro'
import { PairScan } from './screens/PairScan'
import { PairFound } from './screens/PairFound'
import { PairConnected } from './screens/PairConnected'
import { PairGuide } from './screens/PairGuide'
import { Visits } from './screens/Visits'
import { VisitDetail } from './screens/VisitDetail'
import { WatchRecording } from './screens/WatchRecording'
import { YourNote } from './screens/YourNote'

function App() {
  return (
    <HashRouter>
      <TripProvider>
      <div className="app-shell">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/create" element={<CreateAccount />} />
          <Route path="/verify" element={<VerifyEmail />} />
          <Route path="/consent" element={<Consent />} />
          <Route path="/pair" element={<PairIntro />} />
          <Route path="/pair-scan" element={<PairScan />} />
          <Route path="/pair-found" element={<PairFound />} />
          <Route path="/pair-connected" element={<PairConnected />} />
          <Route path="/pair-guide" element={<PairGuide />} />
          <Route path="/home" element={<Home />} />
          <Route path="/visits" element={<Visits />} />
          <Route path="/visits/:id" element={<VisitDetail />} />
          <Route path="/visits/:id/recording" element={<WatchRecording />} />
          <Route path="/visits/:id/note" element={<YourNote />} />
          <Route path="/form" element={<FormStep />} />
          <Route path="/confirm" element={<FormConfirm />} />
          <Route path="/photo" element={<PhotoPicker />} />
          <Route path="/exif" element={<PhotoExif />} />
          <Route path="/talk" element={<TalkStart />} />
          <Route path="/talk-complete" element={<TalkComplete />} />
          <Route path="/voice" element={<VoiceListening />} />
          <Route path="/voice-result" element={<VoiceResult />} />
          <Route path="/wear" element={<WearTravel />} />
          <Route path="/memory" element={<LiveMemory />} />
          <Route path="/return" element={<Return />} />
        </Routes>
      </div>
      </TripProvider>
    </HashRouter>
  )
}

export default App

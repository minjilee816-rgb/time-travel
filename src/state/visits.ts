export type Moment = {
  at: string // mm:ss
  label: string
  active?: boolean
}

export type Visit = {
  id: string
  who: string
  date: string
  time: string
  place: string
  duration: string
  mode: 'Interact' | 'Observe'
  thumb: string // gradient color seed
  feeling: string // emoji
  noteParagraphs: string[]
  noteWrittenAt: string
  moments: Moment[]
  recordingTotal: string // mm:ss
}

const MOM_MOMENTS: Moment[] = [
  { at: '00:00', label: 'Kitchen — morning light' },
  { at: '01:45', label: 'She turns around — smiles', active: true },
  { at: '03:20', label: 'Making doenjang jjigae' },
]

export const VISITS: Visit[] = [
  {
    id: '1',
    who: 'Mom (Sarah)',
    date: 'Sep 10, 2012',
    time: '9:30 AM',
    place: 'Home kitchen, Seoul',
    duration: '5 min',
    mode: 'Interact',
    thumb: 'peach',
    feeling: '😌',
    noteWrittenAt: 'Oct 14, 2024 at 3:18 PM',
    noteParagraphs: [
      'It was so quiet when I arrived. She was standing at the stove, her back to me.',
      "I forgot how she always hummed to herself while she cooked. That little song. I can't remember the melody now, but in that moment I could hear it perfectly.",
      "I didn't want to say anything. I just wanted to stand there for a little longer.",
    ],
    moments: MOM_MOMENTS,
    recordingTotal: '05:30',
  },
  {
    id: '2',
    who: 'Dad',
    date: 'Jul 4, 2008',
    time: '6:00 PM',
    place: 'Lake house dock',
    duration: '8 min',
    mode: 'Observe',
    thumb: 'sunset',
    feeling: '🥹',
    noteWrittenAt: 'May 2, 2024 at 8:42 PM',
    noteParagraphs: [
      'Watched him teach little me how to fish. He never knew I would remember this so vividly.',
      'The light on the water was exactly the same. The dock creaked the same way.',
    ],
    moments: [
      { at: '00:00', label: 'Walking to the dock' },
      { at: '02:10', label: 'Casting the line', active: true },
      { at: '05:40', label: 'Sun going down' },
    ],
    recordingTotal: '08:00',
  },
  {
    id: '3',
    who: 'Grandma Mae',
    date: 'Dec 24, 2005',
    time: '4:15 PM',
    place: 'Living room',
    duration: '6 min',
    mode: 'Interact',
    thumb: 'rose',
    feeling: '🙂',
    noteWrittenAt: 'Dec 24, 2024 at 9:02 AM',
    noteParagraphs: [
      'The tree, the cookies, her perfume. She asked about school like she always did.',
    ],
    moments: [
      { at: '00:00', label: 'Front door — wreath' },
      { at: '01:30', label: 'Tree lights on', active: true },
      { at: '04:10', label: 'Kitchen — cookies' },
    ],
    recordingTotal: '06:00',
  },
  {
    id: '4',
    who: 'Best friend Jay',
    date: 'May 22, 2014',
    time: '11:00 PM',
    place: 'Rooftop, Brooklyn',
    duration: '4 min',
    mode: 'Observe',
    thumb: 'sky',
    feeling: '😌',
    noteWrittenAt: 'Sep 5, 2024 at 10:11 PM',
    noteParagraphs: [
      'The last summer before he moved. We just talked about nothing for hours.',
    ],
    moments: [
      { at: '00:00', label: 'Climbing the stairs' },
      { at: '01:20', label: 'On the rooftop', active: true },
      { at: '03:00', label: 'City lights' },
    ],
    recordingTotal: '04:30',
  },
]

export function getVisit(id: string): Visit | undefined {
  return VISITS.find((v) => v.id === id)
}

export const THUMB_GRADIENTS: Record<string, string> = {
  peach: 'linear-gradient(135deg, #FBE2C4 0%, #F4D9B8 100%)',
  sunset: 'linear-gradient(135deg, #FFD4A8 0%, #F5A78A 100%)',
  rose: 'linear-gradient(135deg, #F8D4D4 0%, #ECB7C6 100%)',
  sky: 'linear-gradient(135deg, #D2E5F2 0%, #B8CFE4 100%)',
}

export const FEELINGS = ['😢', '😌', '🙂', '💛', '🥹']

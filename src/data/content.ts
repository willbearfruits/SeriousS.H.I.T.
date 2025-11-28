export const instruments = [
  {
    id: 'fuzilator-puke-machine',
    name: 'Fuzilator Puke Machine',
    price: '$333.00',
    shortDesc: 'Dual LPB-2 stages, tone stack, feedback loop, piezo mic.',
    description: `Dual LPB2 gain stages with tone stack between them. High gain on both stages—push hard for gated fuzz, back off for clean drive. Guitar volume knob controls saturation level. Feedback loop with "eat myself" switch—activates self-oscillation. In feedback mode: all knobs affect the feedback, creates ring modulations, octaves, arpeggios. Built-in piezo microphone inside the enclosure. Piezo activates with switch, filters harsh high end, picks up box resonance.`,
    features: [
      'Dual LPB2 gain stages',
      'High gain silicon fuzz',
      'Feedback loop (Self-Oscillation)',
      'Built-in Piezo microphone',
      'Works with Guitar, Bass, Synths, Drums'
    ],
    image: 'images/instruments/fuzilator.jpg',
    video: 'https://www.youtube.com/embed/hmRgam2-x0o',
    status: 'Limited run of 13'
  },
  {
    id: 'sus-my-bitx',
    name: 'Sus My BITx',
    price: 'TBA',
    shortDesc: 'Experimental bit crusher and sample rate reducer.',
    description: 'A rough, unpolished bit crushing unit designed to decimate audio signals into 8-bit dust. Unstable and aggressive.',
    features: [
      'Sample Rate Reduction',
      'Bit Crushing',
      'Glitch Mode',
      'True Bypass'
    ],
    image: 'images/instruments/sus-my-bitx.jpg',
    status: 'Out of Stock'
  },
  {
    id: 'pain-killers',
    name: 'Pain Killers',
    price: 'TBA',
    shortDesc: 'Sonic torture device.',
    description: 'High frequency oscillation and feedback generation for noise performances.',
    features: [
      'Feedback Loop',
      'Momentary Kill Switch',
      'Noise Generator'
    ],
    image: 'images/instruments/pain-killers.jpg',
    status: 'Archived'
  },
  {
    id: 'karplus-strong-machine',
    name: 'KarplusStrongMachine',
    price: 'Open Source',
    shortDesc: 'Digital Kalimba for Daisy Seed.',
    description: '7-button polyphonic Daisy Seed synth based on the Karplus-Strong algorithm. Physical modeling synthesis in a small box.',
    features: [
      'Daisy Seed powered',
      'Polyphonic',
      'Physical Modeling',
      'Open Source'
    ],
    image: '', 
    status: 'DIY / Open Source'
  }
];

export const works = [
  {
    id: 'cadavre',
    title: 'Cadavre',
    type: 'Performance',
    image: 'images/works/perf1.jpg',
    description: 'A visceral performance exploring the body as a circuit.',
    video: 'https://www.youtube.com/embed/rfsdvw6Z9Pk'
  },
  {
    id: 'yormungandr',
    title: 'YORMUNGANDR',
    type: 'Performance',
    image: 'images/works/perf2.jpg',
    description: 'Mythological noise ritual.',
    video: ''
  },
  {
    id: 'noanoa',
    title: 'NoaNoa',
    type: 'Video',
    image: '', 
    description: 'Abstract video work.',
    video: ''
  },
  {
    id: 'cave-study',
    title: 'Cave Study',
    type: 'Collaboration',
    image: '',
    description: 'Collaboration with Daniel Landau.',
    video: ''
  },
  {
    id: 'parve',
    title: 'Parve (Band)',
    type: 'Music/Performance',
    image: '',
    description: 'Guitarist for the band Parve.',
    video: ''
  }
];

export const music = [
  {
    title: 'Oroboros',
    year: '2011',
    description: 'Cycle of noise and rebirth.',
    video: 'https://www.youtube.com/embed/vEsWCcictmQ' 
  },
  {
    title: 'La-Nuit',
    year: '2011',
    description: 'Nocturnal transmissions. Songs like "Lu La Bee" and "Lucide".',
    video: ''
  },
  {
    title: 'Artificial Madne$',
    year: '2015',
    description: 'Generated chaos.',
    video: ''
  },
  {
    title: 'Happy-Dural',
    year: 'Soundtrack',
    description: 'Soundtrack work.',
    video: ''
  }
];

export const labs = [
  {
    id: 'hexglitcher',
    name: 'HexGlitcher',
    description: 'Raw Hex Image Databender. Header protection, hex preview, random glitch modes.',
    link: 'https://github.com/willbearfruits/hexglitcher'
  },
  {
    id: 'datamosh-gui',
    name: 'Datamosh GUI',
    description: 'Video I/P-frame mangler. Interactive datamosh tool with Tkinter GUI and realtime preview.',
    link: 'https://github.com/willbearfruits'
  },
  {
    id: 'alphaforge',
    name: 'AlphaForge Knob Modeler',
    description: 'AI-powered 3D knob designer; cross-platform electron app.',
    link: 'https://github.com/willbearfruits'
  },
  {
    id: 'smart-calendar',
    name: 'Smart Calendar',
    description: 'AI-powered calendar & task manager that converts notes into events.',
    link: 'https://github.com/willbearfruits'
  }
];
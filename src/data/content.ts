export const instruments = [
  {
    id: 'fuzilator-puke-machine',
    name: 'Fuzilator Puke Machine',
    price: '$333.00',
    shortDesc: 'Dual LPB-2 stages, tone stack, feedback loop, piezo mic.',
    description: `Dual LPB2 gain stages with a tone stack in between. Can run from mild clean-ish drive to very high-gain, gated fuzz. Features a feedback loop with a toggle ("eat myself") for self-oscillation, ring-mod-like artifacts, octaves, and arpeggiated behavior. Includes an internal piezo mic inside the enclosure that picks up box resonance and filters highs. Works as a standalone noise box. Limited run of 13 units.`,
    features: [
      'Dual LPB2 gain stages',
      'High gain silicon fuzz',
      'Feedback loop (Self-Oscillation)',
      'Built-in Piezo microphone',
      'Works with Guitar, Bass, Synths, Drums',
      'Limited Run of 13'
    ],
    image: 'images/instruments/fuzilator.jpg',
    video: 'https://www.youtube.com/embed/hmRgam2-x0o',
    status: 'Limited Stock',
    link: 'https://www.shitisizers.com/the-fuzilator-puke-machine.html'
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
    status: 'Out of Stock',
    link: ''
  },
  {
    id: 'pain-killers',
    name: 'Pain Killers',
    price: 'TBA',
    shortDesc: 'Sonic torture device.',
    description: 'High frequency oscillation and feedback generation for noise performances. Features a momentary kill switch and noise generator circuit.',
    features: [
      'Feedback Loop',
      'Momentary Kill Switch',
      'Noise Generator'
    ],
    image: 'images/instruments/pain-killers.jpg',
    status: 'Archived',
    link: ''
  },
  {
    id: 'karplus-strong-machine',
    name: 'KarplusStrongMachine',
    price: 'Open Source',
    shortDesc: 'Digital Kalimba for Daisy Seed.',
    description: '7-button polyphonic Daisy Seed synth based on the Karplus-Strong algorithm. Physical modeling synthesis in a small box. Tunable plucked sounds, parameterized decay, damping, and noise injection.',
    features: [
      'Daisy Seed powered',
      '7-voice Polyphony',
      'Physical Modeling',
      'WebUSB Flashing',
      'Open Source C++ DSP'
    ],
    image: '', 
    status: 'DIY / Open Source',
    link: 'https://github.com/willbearfruits/KarplusStrongMachine'
  }
];

export const works = [
  {
    id: 'cadavre',
    title: 'Cadavre',
    type: 'Performance',
    image: 'images/works/perf1.jpg',
    description: 'Restored piano harp rebuilt to be played with bows, sticks, and metal objects, meeting a live viola in performance. Exploring the body as a circuit.',
    video: 'https://www.youtube.com/embed/rfsdvw6Z9Pk'
  },
  {
    id: 'yormungandr',
    title: 'YORMUNGANDR',
    type: 'Performance',
    image: 'images/works/perf2.jpg',
    description: 'Mythological noise ritual. Large-scale audio-visual work.',
    video: ''
  },
  {
    id: 'everything-is-fine',
    title: 'Everything is Fine',
    type: 'Installation',
    image: '',
    description: 'Exhibited at Benyamin Gallery ("SETTINGS"). A fictional "farm" generating creatures from white noise. Surreal pseudo-archive of family albums and hybrids.',
    video: '',
    link: 'https://www.binyamin-gallery.com/en/exhibition/settings'
  },
  {
    id: 'wrong-wave',
    title: 'The Wrong Wave',
    type: 'Performance',
    image: '',
    description: 'Performed in an underground parking lot in Jerusalem (Urbanika festival). Custom drum kit built from car parts and found metal objects.',
    video: ''
  },
  {
    id: 'ensuing',
    title: 'Ensuing',
    type: 'Dance/Sound',
    image: '',
    description: 'Collaboration with Karyn Benquet at NDT (Nederlands Dans Theater). 8-minute dance performance around sound/movement and the Ouroboros motif.',
    video: ''
  },
  {
    id: 'noanoa',
    title: 'NoaNoa',
    type: 'Video',
    image: 'images/works/glitch.jpg', 
    description: 'Abstract video work.',
    video: ''
  },
  {
    id: 'remainders',
    title: 'Remainders',
    type: 'Video',
    image: 'images/works/glitch.jpg',
    description: 'Video based on No Exit, screened at the Israel Festival.',
    video: ''
  },
  {
    id: 'kilkool-olam',
    title: 'Kilkool Olam',
    type: 'Performance',
    image: '',
    description: '"World Corruption". Glitch and creative destruction aesthetics.',
    video: ''
  }
];

export const collaborations = [
  {
    id: 'parve',
    title: 'Parve',
    role: 'Guitar & Programming',
    description: 'Noise/industrial band with Tomer Damsky. Album: "Decktor" (2015). Sound between curiosity, nausea, and interest.',
    link: 'http://parvemusic.weebly.com/'
  },
  {
    id: 'kill-all-unicorns',
    title: 'Kill All Unicorns',
    role: 'Guitar & Programming',
    description: 'Noise/industrial project. Mini-album released in 2018.',
    link: 'https://www.qube.co.il/kill-all-unicorns'
  },
  {
    id: 'synesthesia',
    title: 'Synesthesia Project',
    role: 'Technician & Musician',
    description: 'Hybrid concerts mixing classical music, Israeli pop/rock, and video. Directed by Maya Felixbrodt.',
    link: ''
  },
  {
    id: 'cave-study',
    title: 'Cave Study',
    role: 'Collaboration',
    description: 'With Daniel Landau. Media/performance art.',
    link: ''
  },
  {
    id: 'musica-nova',
    title: 'Musica Nova',
    role: 'Improvisation',
    description: 'Ensemble Musica Nova @ Mezzo Gallery, Haifa. Experimental improvisation.',
    link: 'https://www.musicanova.co.il/items/novaparallel8'
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
    description: 'Nocturnal transmissions. Includes tracks "Lu La Bee" and "Lucide".',
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
    year: '2012',
    description: 'Solo audio-visual electronic music project.',
    video: ''
  },
  {
    title: 'Black Label',
    year: 'Commission',
    description: 'Original music for solo dance performance by Tzvika Hizikyas. Performed at Dock11 (Berlin) and International Dance Week.',
    video: '',
    link: 'https://tickchak.co.il/5728'
  },
  {
    title: 'Elevator',
    year: '2010',
    description: 'Complete soundtrack for visual theatre directed by Pete Brooks.',
    video: ''
  }
];

export const labs = [
  {
    id: 'hexglitcher',
    name: 'HexGlitcher',
    description: 'Raw Hex Image Databender. Cross-platform GUI for glitching images at the raw byte level. Supports JPG, PNG, BMP, GIF, WebP with header protection and random corruption modes.',
    link: 'https://github.com/willbearfruits/hexglitcher',
    tags: ['Python', 'Glitch Art', 'Tool']
  },
  {
    id: 'datamosh-gui',
    name: 'Datamosh GUI',
    description: 'Video I/P-frame mangler. Interactive datamosh tool with Tkinter GUI and realtime preview. Destroys codecs in a controlled way.',
    link: 'https://github.com/willbearfruits/datamosh-gui',
    tags: ['FFmpeg', 'Video Art', 'Python']
  },
  {
    id: 'alphaforge',
    name: 'AlphaForge Knob Modeler',
    description: 'AI-powered 3D knob designer. Electron desktop app. Describe a knob in natural language, AI generates STL with real-time 3D preview and parametric controls.',
    link: 'https://github.com/willbearfruits/alphaforge-knob-modeler',
    tags: ['AI', '3D Printing', 'Electron', 'Generative']
  },
  {
    id: 'smart-calendar',
    name: 'Smart Calendar',
    description: 'AI-powered calendar & task manager that converts notes into events. Supports local LLMs (Ollama, LM Studio) and cloud APIs.',
    link: 'https://github.com/willbearfruits/smart-calendar',
    tags: ['AI', 'Productivity', 'React']
  },
  {
    id: 'karplus-strong',
    name: 'KarplusStrongMachine',
    description: 'Source code and wiring for the Digital Kalimba. C++ DSP on Daisy Seed. Includes WebUSB flasher.',
    link: 'https://github.com/willbearfruits/KarplusStrongMachine',
    tags: ['C++', 'DSP', 'Embedded']
  }
];
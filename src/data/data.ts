import type {
  CardContent,
  IconImageProps,
  FooterContent,
  BreathingPhase,
  NotebookConfig,
  ThoughtsTabButton,
  CalmButtonContent,
  PlayPauseButton,
  HomeImage,
  FeelingCard,
  SoundOption,
} from "@/types/types";

/* home data - app/page */

export const homeImage: HomeImage = {
  src: "/images/icons/safeSpace.png",
  alt: "Safe Space",
  size: 56,
  name: "safe space",
};

export const overwhelmedButton: CalmButtonContent = {
  href: "/calm",
  src: "/images/icons/overwhelmed.png",
  alt: "Overwhelmed button",
  size: 40,
  label: "I feel overwhelmed",
};

console.log(overwhelmedButton.href);

export const homeCards: CardContent[] = [
  {
    icon: "/images/icons/breathe.png",
    alt: "Breathe",
    size: 30,
    href: "/breathing",
  },
  {
    icon: "/images/icons/brainDump.png",
    alt: "Clear your mind",
    size: 30,
    href: "/journal",
  },
  {
    icon: "/images/icons/sounds.png",
    alt: "Sounds",
    size: 30,
    href: "/sounds",
  },
  {
    icon: "/images/icons/comfort.png",
    alt: "Comfort",
    size: 30,
    href: "/comfort",
  },
];

/* BackButton */

export const backButtonImage: IconImageProps = {
  src: "/images/icons/back.png",
  alt: "Back button",
  name: "Back",
  size: 30,
};

/* BreathingCircle */

export const phases: BreathingPhase[] = [
  {
    name: "Breathe in",
    seconds: 4,
    scale: 1.35,
  },
  {
    name: "Hold",
    seconds: 4,
    scale: 1.35,
  },
  {
    name: "Breathe out",
    seconds: 4,
    scale: 1,
  },
  {
    name: "Rest",
    seconds: 4,
    scale: 1,
  },
];

export const playPauseButton: PlayPauseButton = {
  play: {
    src: "/images/icons/play.png",
    alt: "play button",
    size: 30,
    name: "Play",
  },
  pause: {
    src: "/images/icons/pause.png",
    alt: "pause button",
    size: 30,
    name: "Pause",
  },
};

/* ExportPDF */

export const pdfContentButton: IconImageProps = {
  src: "/images/icons/export_pdf.png",
  alt: "Export PDF",
  name: "Export PDF",
  size: 24,
};

/* Footer */

export const footerContent: FooterContent = {
  text: "Made with",
  heart: "♥",
  ending: "and care",
  author: "Francine Melo Pêpe",
  portfolio: "https://www.francinemelopepe.de",
};

/* Notebook */

export const notebookConfig: NotebookConfig = {
  storageKey: "safe-space-thoughts",
  placeholder: "Write whatever is in your mind...",
  pdfTitle: "Safe Space - Thoughts",
  pdfFilename: "safe-space-thoughts.pdf",
};

/* ThoughtsSpace */

export const thoughtsTabs: ThoughtsTabButton[] = [
  {
    action: "write",
    icon: "/images/icons/writing.png",
    alt: "Write",
  },
  {
    action: "draw",
    icon: "/images/icons/drawing.png",
    alt: "Draw",
  },
];

/* Calm page */

export const feelingsContent: FeelingCard[] = [
  {
    icon: "/images/icons/tired.png",
    alt: "I feel tired. I need to breathe",
    size: 30,
    href: "/breathing",
  },
  {
    icon: "/images/icons/thoughts.png",
    alt: "My mind is full. I need to write or draw",
    size: 30,
    href: "/journal",
  },
  {
    icon: "/images/icons/tooMuch.png",
    alt: "I need to calm down",
    size: 30,
    href: "/too-much",
  },
];

/* Sound page */

export const soundsContent: SoundOption[] = [
  {
    id: "ocean",
    name: "Ocean Waves",
    description: "Gentle waves to help you slow down.",
    video: "/videos/ocean.webm",
    audio: "/sounds/ocean.mp3",
  },

  {
    id: "rain",
    name: "Rain",
    description: "Soft rainfall for quiet moments.",
    video: "/videos/rain.webm",
    audio: "/sounds/rain.mp3",
  },

  {
    id: "forest",
    name: "Forest",
    description: "Nature sounds for relaxing moments.",
    video: "/videos/forest.webm",
    audio: "/sounds/forest.mp3",
  },
  {
    id: "fireplace",
    name: "Fireplace",
    description: "Fire sounds for a cozier environment",
    video: "/videos/fireplace.webm",
    audio: "/sounds/fireplace.mp3",
  },
];

export const backgrounds = {
  home: "/images/backgrounds/home.svg",
  calm: "/images/backgrounds/calm.svg",
  breathing: "/images/backgrounds/breathing.svg",
  sounds: "/images/backgrounds/sounds.svg",
  notebook: "/images/backgrounds/notebook.svg",
} as const;

export type BackgroundVariant = keyof typeof backgrounds;

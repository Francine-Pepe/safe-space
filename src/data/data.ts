import type {
  CardContent,
  IconImageProps,
  FooterContent,
  BreathingPhase,
  NotebookConfig,
  ThoughtsTabButton,
  CalmButtonContent,
  PlayPauseButton,
} from "@/types/types";

/* home data - app/page */

export const homeImage: IconImageProps = {
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

export const homeCards: CardContent[] = [
  {
    icon: "/images/icons/breathe.png",
    alt: "Breathe",
    size: 30,
  },
  {
    icon: "/images/icons/brainDump.png",
    alt: "Brain Dump",
    size: 30,
  },
  {
    icon: "/images/icons/sounds.png",
    alt: "Sounds",
    size: 30,
  },
  {
    icon: "/images/icons/comfort.png",
    alt: "Comfort",
    size: 30,
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

import { ReactNode } from "react";

export type Emotion = "tired" | "thoughts" | "too-much";

export type BreathingPhaseName = "Breathe in" | "Hold" | "Breathe out" | "Rest";

export type BackgroundVariant =
  | "home"
  | "calm"
  | "breathing"
  | "notebook"
  | "thoughts"
  | "comfort"
  | "sounds";

export type BackgroundProps = {
  variant?: BackgroundVariant;
};

export interface IconImageProps {
  src: string;
  alt: string;
  size?: number;
  name?: string;
  label?: string;
  href?: string;
}

export interface CardProps {
  children: ReactNode;
}

export interface CardContent {
  icon: string;
  alt: string;
  size?: number;
}

export interface CalmButtonContent {
  href: string;
  src: string;
  alt: string;
  size: number;
  label: string;
}

export interface CalmButtonProps {
  children: ReactNode;
}

export interface ExportPDFProps {
  text?: string;
  canvas?: HTMLCanvasElement | null;
  title?: string;
  filename?: string;
}

export interface BackButtonProps {
  href: string;
  text?: string;
  size?: number;
}

export interface JournalEntry {
  id: string;
  text: string;
  createdAt: Date;
}

export interface EmotionCard {
  title: string;
  icon: string;
  href: string;
}

export interface FooterContent {
  text: string;
  heart: string;
  ending: string;
  author: string;
  portfolio: string;
}

export interface BreathingPhase {
  name: BreathingPhaseName;
  seconds: number;
  scale: number;
}

export interface NotebookConfig {
  storageKey: string;
  placeholder: string;
  pdfTitle: string;
  pdfFilename: string;
}

export type ThoughtsTab = "write" | "draw";

export interface ThoughtsTabButton {
  action: ThoughtsTab;
  icon: string;
  alt: string;
}

export interface PlayPauseButton {
  play: IconImageProps;
  pause: IconImageProps;
}

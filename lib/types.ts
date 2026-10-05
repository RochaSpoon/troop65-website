export type Photo = { src: string; alt: string; hotspot?: { x: number; y: number } | null; w?: number | null; h?: number | null };

export type Settings = {
  visitFormUrl: string;
  meetingDays: string;
  meetingTime: string;
  meetingPlace: string;
  meetingAddress: string;
  emailListUrl?: string;
  beAScoutUrl?: string;
};

export type Fact = { number: string; label: string };
export type ScheduleItem = { time: string; title: string; text?: string };
export type Trip = { name: string; year: string; note?: string; image: Photo };

export type HomePage = {
  heroKicker?: string;
  heroHeading: string;
  boardLines?: string[];
  heroText?: string;
  heroImage: Photo;
  facts?: Fact[];
  tuesdayHeading?: string;
  tuesdayText?: string;
  tuesdayImage?: Photo;
  schedule?: ScheduleItem[];
  tuesdayNote?: string;
  outdoorsHeading?: string;
  outdoorsText?: string;
  trips?: Trip[];
  lairKicker?: string;
  lairHeading?: string;
  lairText?: string;
  lairImage?: Photo;
  spaceHeading?: string;
  spaceImage?: Photo;
  joinHeading?: string;
  joinText?: string;
};

export type TextSection = { heading: string; text?: string; images?: Photo[] };
export type SectionsPage = { heading: string; intro?: string; heroImage?: Photo; sections?: TextSection[] };

export type Room = { name: string; text?: string; image?: Photo };
export type OurSpacePage = { heading: string; intro?: string; heroImage?: Photo; size?: string; sizeLabel?: string; rooms?: Room[] };

export type Officer = { name: string; position: string; photo?: Photo };
export type LeadershipPage = { heading: string; intro?: string; officers?: Officer[] };

export type Step = { heading: string; text?: string };
export type JoinPage = {
  heading: string;
  intro?: string;
  heroImage?: Photo;
  steps?: Step[];
  whoCanJoin?: string;
  whatToBring?: string;
  cost?: string;
  signUpText?: string;
};

export type LinkItem = { label: string; url: string };
export type LinkGroup = { title: string; links?: LinkItem[] };
export type DocLink = { label: string; note?: string; url: string };
export type TroopPage = { heading: string; intro?: string; calendarEmbedUrl?: string; linkGroups?: LinkGroup[]; documents?: DocLink[] };

export type Announcement = { _id: string; title: string; date?: string; body: string; linkLabel?: string; linkUrl?: string };

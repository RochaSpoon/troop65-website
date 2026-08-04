export interface QuickStat {
  label: string;
  value: string;
  detail?: string;
}

export type EventCategory =
  | "campout"
  | "high-adventure"
  | "service"
  | "ceremony"
  | "meeting"
  | "fundraiser";

export interface TroopEvent {
  slug: string;
  title: string;
  /** ISO date, e.g. "2026-09-12" */
  date: string;
  endDate?: string;
  category: EventCategory;
  location: string;
  summary: string;
  /** Set true once the event has happened — powers the recap grid instead of the upcoming list */
  isPast: boolean;
  image: {
    src: string;
    alt: string;
  };
}

export interface AdultLeader {
  name: string;
  role: string;
  bio: string;
  photo: {
    src: string;
    alt: string;
  };
}

export interface YouthPosition {
  title: string;
  reportsTo: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export interface Announcement {
  title: string;
  date: string;
  body: string;
}

export interface MemberForm {
  title: string;
  description: string;
  href: string;
  fileType: string;
}

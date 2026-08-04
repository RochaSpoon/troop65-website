import { Announcement, MemberForm } from "@/lib/types";

/**
 * Members-area announcements. Newest first. Delete old ones whenever —
 * there's no archive requirement, this is just a running list.
 */
export const announcements: Announcement[] = [
  {
    title: "Fall permission slips due Sept 1",
    date: "2026-08-04",
    body: "Turn in signed permission slips for the Joshua Tree campout by the Sept 1 meeting. Forms are on this page under Forms & Permission Slips.",
  },
  {
    title: "Popcorn fundraiser kickoff",
    date: "2026-08-04",
    body: "Fall popcorn sale starts this month — see your Patrol Leader for order sheets and the troop sales goal.",
  },
  {
    title: "New Scout gear checklist posted",
    date: "2026-07-20",
    body: "An updated 10 Essentials checklist for new Scouts is up on the Forms page ahead of the September campout.",
  },
];

/**
 * Links to forms/permission slips. Point `href` at a real PDF in
 * /public/documents/ (or a Google Drive link) once you have one.
 */
export const memberForms: MemberForm[] = [
  {
    title: "Annual Health & Medical Record (Parts A/B/C)",
    description: "Required for all overnight events. Renew every 12 months.",
    href: "#",
    fileType: "PDF",
  },
  {
    title: "Campout Permission Slip",
    description: "One per event — hand to your Patrol Leader before departure.",
    href: "#",
    fileType: "PDF",
  },
  {
    title: "New Scout 10 Essentials Checklist",
    description: "What to pack for your first overnight campout.",
    href: "#",
    fileType: "PDF",
  },
  {
    title: "Adult Volunteer / YPT Info",
    description: "Youth Protection Training requirements for parent volunteers.",
    href: "#",
    fileType: "Link",
  },
];

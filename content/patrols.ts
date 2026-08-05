export interface Patrol {
  name: string;
  leader: string;
  founded: string;
  description: string;
}

/**
 * Troop 65's four patrols. Sourced from t65.org as of Aug 2026 — update
 * `leader` each time patrol elections happen (roughly every 6 months).
 */
export const patrols: Patrol[] = [
  {
    name: "Eagles",
    leader: "Henry Cerulle",
    founded: "The longest-running patrol in Troop 65",
    description:
      "Known for loyalty and high participation — the Eagles show up for nearly every troop event and set the pace for scout spirit.",
  },
  {
    name: "Diamondbacks",
    leader: "Mathew Fausto",
    founded: "",
    description: "One of Troop 65's four active patrols.",
  },
  {
    name: "Flaming Falcons",
    leader: "Liam Dougherty",
    founded: "",
    description: "One of Troop 65's four active patrols.",
  },
  {
    name: "Sabertooths",
    leader: "George Cota",
    founded: "The newest patrol — 15 years in the troop",
    description:
      "Ambitious adventurers focused on keeping the outdoor program fun for every rank.",
  },
];

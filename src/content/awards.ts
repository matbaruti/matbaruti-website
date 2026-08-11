import type { AwardGroup, Recommendation } from "./types";

export const awardGroups: AwardGroup[] = [
  {
    id: "awards",
    label: "Awards",
    description: "Formal recognition received.",
    items: [
      {
        title: "Çmimi i Lartë – Faik Konica",
        issuer: "Faik Konica Primary and Lower Secondary School",
        description:
          "Presented in recognition of overall contribution to school life — academic success alongside leadership, initiative, community engagement, and active participation in projects that positively influenced the school community.",
      },
      {
        title: "Academic Excellence Award",
        issuer: "Faik Konica Primary and Lower Secondary School",
        description:
          "For maintaining the highest possible academic results across nine consecutive years of primary and lower secondary education while balancing extensive leadership responsibilities.",
      },
      {
        title: "3rd Place Nationwide — Environmental Sustainability Initiative",
        issuer: "Red Cross of Kosovo",
        description:
          "Awarded within a nationwide Red Cross environmental initiative involving youth teams from across Kosovo, with official recognition and project funding to support further community work.",
      },
    ],
  },
  {
    id: "certificates",
    label: "Certificates",
    description: "Completed programmes and verified credentials.",
    items: [
      {
        title: "ODYLP-EAGLE 2026 Certificate of Completion",
        issuer: "Legacy International · Sponsored by the U.S. Department of State",
        date: "2026",
        description:
          "Recognises successful participation in a highly competitive international leadership and AI exchange, representing Kosovo alongside five other students selected nationwide.",
      },
      {
        title: "English Language — Advanced (C1)",
        issuer: "Oxford Studio ELT",
        description:
          "The final stage of nearly a decade of certified English study, following foundational courses at Cambridge School of Kosovo and Oxford Studio ELT.",
      },
      {
        title: "German Language — A2",
        issuer: "German language studies",
        description: "Progression beyond A2 currently in progress.",
      },
      {
        title: "School and extracurricular certificates",
        issuer: "Faik Konica Primary and Lower Secondary School and partners",
        description:
          "Certificates recognising participation and contribution across school activities, leadership initiatives, competitions, awareness campaigns, community projects, and extracurricular programmes.",
      },
    ],
  },
  {
    id: "competitions",
    label: "Competitions",
    description: "Contests entered and placements achieved.",
    items: [
      {
        title: "Red Cross nationwide environmental competition",
        issuer: "Red Cross of Kosovo",
        description:
          "3rd place nationwide among youth teams from across Kosovo, earning official recognition and project funding.",
      },
    ],
  },
  {
    id: "publications",
    label: "Publications",
    description: "Written and editorial work.",
    items: [
      {
        title: "Faik Konica School Magazine",
        issuer: "Faik Konica Primary and Lower Secondary School",
        description:
          "Contributed to the planning and creation of the school's official magazine, documenting student initiatives, activities, and achievements.",
      },
    ],
  },
];

// Official recommendation letters are held in the portfolio's evidence archive.
// Verbatim quotes will be added here once cleared for publication.
export const recommendations: Recommendation[] = [];

export const referenceAvailability = {
  note: "Professional references are available on request. To respect privacy, contact details are shared only with prior permission. Official recommendation letters are maintained within the portfolio's evidence archive.",
  sources: [
    "Principal, Faik Konica Primary and Lower Secondary School",
    "Deputy Director, Faik Konica Primary and Lower Secondary School",
    "Head Teacher, Faik Konica Primary and Lower Secondary School",
  ],
};

import type { ExperienceGroup, TimelineEntry } from "./types";

// Chronological journey shown on /about and previewed on the home page.
export const timeline: TimelineEntry[] = [
  {
    period: "2010",
    title: "Born in Skopje, North Macedonia",
    place: "Skopje, North Macedonia",
  },
  {
    period: "2016",
    title: "Began primary education at Faik Konica School",
    place: "Prishtina, Kosovo",
  },
  {
    period: "2020",
    title: "Started serving as Class Representative",
    detail:
      "The first student leadership role — acting as the link between classmates, teachers, and school administration.",
    place: "Faik Konica School",
  },
  {
    period: "2021",
    title: "Joined the Student Council",
    detail:
      "Contributing to discussions, student initiatives, and school-wide activities.",
    place: "Faik Konica School",
  },
  {
    period: "2022",
    title: "Continued leadership responsibilities and community initiatives",
    place: "Faik Konica School",
  },
  {
    period: "2023",
    title: "Expanded involvement in school projects, clubs, and awareness campaigns",
    place: "Faik Konica School",
  },
  {
    period: "2024",
    title: "Organised Konica Tech",
    detail:
      "Led one of the school's largest student technology exhibitions, spanning AI, robotics, cybersecurity, programming, and 3D printing.",
    place: "Faik Konica School",
  },
  {
    period: "2025",
    title: "Graduated with a perfect 5.0 GPA and enrolled at Xhevdet Doda High School",
    detail:
      "Nine consecutive years at the highest academic distinction, followed by entry into the STEM Gymnasium programme.",
    place: "Prishtina, Kosovo",
  },
  {
    period: "2026",
    title: "Selected for ODYLP-EAGLE 2026 and represented Kosovo in the United States",
    detail:
      "One of six students chosen from 240+ applicants, completing the exchange and beginning a collaborative post-program Capstone Project.",
    place: "Seattle & Washington D.C., United States",
  },
];

export const experienceGroups: ExperienceGroup[] = [
  {
    id: "leadership",
    label: "Leadership",
    description: "Roles carrying responsibility for people, direction, and outcomes.",
    entries: [
      {
        title: "Leader, Ninth-Grade Student Representatives",
        organization: "Faik Konica Primary and Lower Secondary School",
        period: "2024–2025",
        location: "Prishtina, Kosovo",
        description:
          "Coordinated communication among student representatives and supported collaboration between students and school administration during his final year.",
      },
      {
        title: "Deputy President, Student Council",
        organization: "Faik Konica Primary and Lower Secondary School",
        location: "Prishtina, Kosovo",
        description:
          "Worked closely with representatives and school leadership to coordinate projects and represent student interests.",
      },
      {
        title: "Member, Student Council",
        organization: "Faik Konica Primary and Lower Secondary School",
        period: "2021–2025 (four years)",
        location: "Prishtina, Kosovo",
        description:
          "Contributed to discussions, student initiatives, and school activities across four academic years.",
      },
      {
        title: "Class Representative",
        organization: "Faik Konica Primary and Lower Secondary School",
        period: "2020–2025 (five consecutive years)",
        location: "Prishtina, Kosovo",
        description:
          "Represented classmates, communicated concerns and suggestions, coordinated classroom initiatives, and supported a positive learning environment.",
      },
      {
        title: "Project Leader, Konica Tech",
        organization: "Faik Konica Primary and Lower Secondary School",
        period: "2024",
        location: "Prishtina, Kosovo",
        description:
          "Principal organiser of a five-section student technology exhibition, coordinating around 80 students on the day.",
      },
    ],
  },
  {
    id: "volunteering",
    label: "Volunteer work",
    description: "Unpaid work in service of the community.",
    entries: [
      {
        title: "Volunteer, Compassion in Action",
        organization: "OSL Serves",
        period: "2026",
        location: "Seattle, United States",
        description:
          "Prepared, packaged, and organised meals later distributed to individuals experiencing food insecurity, alongside fellow ODYLP-EAGLE participants.",
      },
      {
        title: "Volunteer, Environmental Sustainability Initiative",
        organization: "Red Cross of Kosovo",
        location: "Prishtina, Kosovo",
        description:
          "Recycling campaigns, tree planting, awareness sessions for middle school students, and an interactive recycling station. Awarded 3rd place nationwide.",
      },
      {
        title: "Awareness campaigns and humanitarian activities",
        organization: "Faik Konica School and partner organisations",
        location: "Prishtina, Kosovo",
        points: [
          "Bullying prevention and mental wellbeing",
          "Gender equality and inclusion",
          "Human trafficking awareness",
          "Environmental responsibility and STEM promotion",
        ],
      },
    ],
  },
  {
    id: "organizations",
    label: "Organizations",
    description: "Collaborations and partnerships across education, service, and social impact.",
    entries: [
      { title: "Collaboration", organization: "UNICEF Kosovo" },
      { title: "Collaboration", organization: "Red Cross Kosovo Team" },
      { title: "Collaboration", organization: "NGO TOKA" },
      { title: "Collaboration", organization: "Down Syndrome Kosova" },
      { title: "Programme implementation partner", organization: "Legacy International" },
      { title: "Programme host", organization: "World Affairs Council" },
      { title: "Volunteer service partner", organization: "OSL Serves" },
    ],
  },
  {
    id: "international",
    label: "International programmes",
    description: "Exchanges, delegations, and cross-border collaboration.",
    entries: [
      {
        title:
          "ODYLP – Excellence in AI and Global Leadership Exchange (EAGLE) 2026",
        organization:
          "U.S. Department of State, Bureau of Educational and Cultural Affairs · Legacy International",
        period: "2026 · 20 days",
        location: "United States",
        description:
          "One of six students representing Kosovo, selected from 240+ applicants (≈2.47% acceptance rate), alongside students from the United States and South Korea.",
        points: [
          "Site visits to Google, Microsoft, AWS, Boeing, Future Arts, the Fred Hutch Cancer Center, and the University of Washington",
          "Workshops on artificial intelligence, innovation, entrepreneurship, and ethics",
          "Volunteer service and cross-cultural collaboration",
          "Ongoing post-program Capstone Project",
        ],
      },
    ],
  },
  {
    id: "education",
    label: "Education",
    description: "Formal study and structured learning.",
    entries: [
      {
        title: "STEM Gymnasium",
        organization: "Xhevdet Doda High School",
        period: "2025–Present",
        location: "Prishtina, Kosovo",
        description:
          "One of Kosovo's most respected public high schools, with a rigorous curriculum in science, technology, and mathematics.",
      },
      {
        title: "Primary and Lower Secondary Education",
        organization: "Faik Konica Primary and Lower Secondary School",
        period: "2016–2025",
        location: "Prishtina, Kosovo",
        description:
          "Graduated Faik Konica Primary and Lower Secondary School with a final GPA of 5.0 while holding continuous leadership responsibilities.",
      },
      {
        title: "English Language — Advanced (C1)",
        organization: "Oxford Studio ELT",
        location: "Prishtina, Kosovo",
        description:
          "Completed after foundational studies at Cambridge School of Kosovo and Oxford Studio ELT, as part of nearly ten years of structured English education.",
      },
      {
        title: "English Language — Foundational studies",
        organization: "Cambridge School of Kosovo",
        location: "Prishtina, Kosovo",
      },
      {
        title: "German Language — A2",
        organization: "German language studies",
        description: "Currently continuing progression beyond the A2 level.",
      },
    ],
  },
];

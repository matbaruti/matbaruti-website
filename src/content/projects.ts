import type { Project } from "./types";

// One entry per project. Fields left out simply don't render.
// Every fact below comes from The Mat Baruti Portfolio (V1.0).

export const projects: Project[] = [
  {
    slug: "odylp-eagle-2026",
    title: "ODYLP-EAGLE 2026",
    summary:
      "One of six students selected to represent Kosovo in a U.S. Department of State exchange on AI and global leadership.",
    category: "Leadership",
    year: "2026",
    role: "Participant, representing Kosovo",
    location: "Seattle, United States",
    tags: ["exchange", "international", "leadership", "artificial intelligence", "usa"],
    featured: true,
    overview:
      "The On Demand Youth Leadership Program (ODYLP) – Excellence in AI and Global Leadership Exchange (EAGLE) 2026 was organised through the U.S. Department of State's Bureau of Educational and Cultural Affairs and implemented by Legacy International. It brought together high school students from Kosovo, the United States, and South Korea for a twenty-day exchange centred on leadership, artificial intelligence, innovation, and global collaboration.",
    objectives: [
      "Represent Kosovo alongside five other selected students",
      "Study artificial intelligence, ethics, and innovation with international peers",
      "Contribute to volunteer service and cross-cultural collaboration",
    ],
    planning:
      "Selection was highly competitive: out of 240+ applicants from across Kosovo, only six students were chosen — an acceptance rate of approximately 2.47%.",
    challenges: [
      "Collaborating across three countries, cultures, and educational systems",
      "Balancing an intensive twenty-day programme of workshops, site visits, and service",
    ],
    impact:
      "The programme deepened his understanding of artificial intelligence, ethical innovation, and global citizenship, and introduced an international network of students, mentors, educators, and professionals whose perspectives continue to shape his thinking.",
    results: [
      "Site visits to Google, Microsoft, Amazon Web Services (AWS), Boeing, Future Arts, the Fred Hutch Cancer Center, the University of Washington, the World Affairs Council, and the U.S. Department of State's Bureau of Educational and Cultural Affairs",
      "Volunteer service with OSL Serves – Compassion in Action, preparing and packaging meals for people experiencing food insecurity",
      "Official ODYLP-EAGLE 2026 Certificate of Completion issued by Legacy International",
      "Ongoing collaborative post-program Capstone Project with the other Kosovo participants",
    ],
    skills: [
      "Leadership",
      "Cross-cultural collaboration",
      "Public speaking",
      "AI ethics",
    ],
    lessons: [
      "Innovation depends on collaboration and ethical responsibility as much as technical expertise",
      "Meaningful collaboration begins with genuine curiosity and mutual respect",
    ],
    gallery: [],
    media: [],
  },
  {
    slug: "konica-tech",
    title: "Konica Tech",
    summary:
      "A student-led technology exhibition introducing AI, robotics, cybersecurity, programming, and 3D printing.",
    category: "Technology",
    year: "2024",
    role: "Project leader and principal organiser",
    location: "Faik Konica School, Prishtina",
    tags: ["technology", "education", "artificial intelligence", "stem"],
    featured: true,
    overview:
      "Konica Tech was one of the largest student-led technology initiatives organised at Faik Konica Primary and Lower Secondary School. It gave students an interactive environment to explore artificial intelligence, robotics, cybersecurity, programming, and 3D printing through demonstrations, presentations, and practical projects.",
    objectives: [
      "Create hands-on exposure to technologies missing from the regular curriculum",
      "Have students research, prepare, and present the material themselves",
      "Encourage curiosity, creativity, and confidence rather than passive display",
    ],
    planning:
      "The idea emerged from a shared interest within the student council. Planning began roughly one and a half months before the event and required continuous coordination among participating students and teachers. Mat developed the concept, organised the planning process, coordinated participants, communicated with teachers and school leadership, monitored progress, and made sure each booth was ready before opening.",
    results: [
      "Five dedicated technology sections: Artificial Intelligence, Robotics, Cybersecurity, Programming, and 3D Printing",
      "Approximately 15 to 25 students prepared each field, with around 80 students involved on the day",
      "Roughly 40 to 50 visitors explored the exhibition",
      "Every participating team successfully presented its work",
    ],
    challenges: [
      "Coordinating multiple teams progressing at different paces across different subjects",
      "Balancing preparation with regular academic responsibilities",
    ],
    impact:
      "Beyond attendance, the exhibition turned students into teachers — participants explained technical concepts with confidence while building communication, teamwork, and presentation skills. It strengthened interest in STEM across the school and encouraged younger students to explore subjects that may shape their futures.",
    skills: [
      "Project leadership",
      "Delegation",
      "Event planning",
      "Stakeholder communication",
    ],
    lessons: [
      "Successful leadership depends less on individual expertise and more on creating conditions in which others can succeed",
      "Planning, delegation, adaptability, and trust matter more than doing every task yourself",
    ],
  },
  {
    slug: "red-cross-environmental-initiative",
    title: "Environmental Sustainability Initiative",
    summary:
      "A youth-led sustainability project with the Red Cross of Kosovo, awarded 3rd place nationwide.",
    category: "Community",
    role: "Volunteer and project contributor",
    location: "Prishtina, Kosovo",
    tags: ["volunteering", "environment", "red cross", "sustainability"],
    featured: true,
    overview:
      "Organised in collaboration with the Red Cross of Kosovo, this youth-led community project promoted environmental responsibility, sustainability, and civic engagement through practical action and education.",
    results: [
      "Recycling campaigns and tree planting activities",
      "Interactive awareness sessions delivered to middle school students",
      "An interactive recycling station built from recycled materials as a basketball-style game, with collected materials repurposed into decorative and educational creations displayed throughout the school",
      "3rd Place Nationwide in a Red Cross environmental initiative involving youth teams from across Kosovo, with official recognition and project funding",
    ],
    impact:
      "The project strengthened understanding of community leadership, teamwork, and project planning, and showed the value of practical solutions that inspire long-term behavioural change.",
    skills: ["Community organising", "Project planning", "Public education"],
  },
  {
    slug: "student-council",
    title: "Student Council",
    summary:
      "Four years of student representation, rising to Deputy President and Leader of the Ninth-Grade representatives.",
    category: "Leadership",
    year: "2021–2025",
    role: "Member, then Deputy President, then Ninth-Grade Leader",
    location: "Faik Konica School, Prishtina",
    tags: ["leadership", "school", "representation"],
    featured: true,
    overview:
      "Over four academic years on the Student Council, Mat moved from contributing to discussions and student initiatives, to being elected Deputy President, to leading the Ninth-Grade student representatives in his final year at Faik Konica.",
    results: [
      "Coordinated projects and represented student interests with school leadership",
      "Coordinated communication among student representatives",
      "Supported collaboration between students and school administration",
    ],
    impact:
      "These roles strengthened collaborative leadership, strategic planning, and responsible decision making, and demonstrated the importance of teamwork in achieving meaningful results.",
    skills: ["Leadership", "Negotiation", "Public speaking", "Coordination"],
  },
  {
    slug: "konica-fest",
    title: "Konica Fest",
    summary:
      "Planning and coordination of one of the school's major student events.",
    category: "Events",
    location: "Faik Konica School, Prishtina",
    tags: ["events", "organising", "community"],
    overview:
      "Konica Fest was one of the school's major student events. Mat contributed to its planning and coordination, encouraging participation, creativity, and collaboration across the student body.",
    skills: ["Event planning", "Team leadership"],
  },
  {
    slug: "school-magazine",
    title: "School Magazine",
    summary:
      "Contributed to planning and creating the school's official magazine.",
    category: "Publishing",
    location: "Faik Konica School, Prishtina",
    tags: ["writing", "editorial", "school"],
    overview:
      "The publication documented student activities, achievements, and events while giving students the chance to help produce a lasting record of school life.",
    impact:
      "Working on the magazine strengthened his appreciation for communication, teamwork, and documenting educational experiences.",
    skills: ["Writing", "Editorial planning", "Visual communication"],
  },
  {
    slug: "student-clubs",
    title: "Biology, Physics & Neuro Clubs",
    summary:
      "Helped establish and support student clubs encouraging curiosity beyond the classroom.",
    category: "Science",
    location: "Faik Konica School, Prishtina",
    tags: ["biology", "physics", "neuroscience", "clubs"],
    overview:
      "Mat contributed to establishing and supporting student clubs including the Biology Club, the Physics Club, and the Neuro Club. These clubs encouraged curiosity, teamwork, and learning beyond the classroom.",
    skills: ["Research", "Communication", "Mentoring"],
  },
  {
    slug: "awareness-campaigns",
    title: "Awareness Campaigns",
    summary:
      "Educational campaigns on bullying prevention, equality, wellbeing, and STEM.",
    category: "Community",
    location: "Prishtina, Kosovo",
    tags: ["awareness", "community", "inclusion", "unicef"],
    overview:
      "Working alongside classmates, teachers, and community organisations, Mat helped organise awareness campaigns that encouraged open discussion of important social issues while promoting empathy, respect, and understanding among students.",
    results: [
      "Bullying prevention",
      "Gender equality",
      "Mental wellbeing",
      "Positive thinking",
      "Human trafficking awareness",
      "Environmental responsibility",
      "STEM promotion",
    ],
    impact:
      "Collaborations included UNICEF Kosovo, the Kosovo Red Cross, Down Syndrome Kosova, and TOKA, reinforcing the importance of inclusive communities where every individual is valued and respected.",
    skills: ["Campaign organising", "Advocacy", "Collaboration"],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export const featuredProjects = projects.filter((p) => p.featured).slice(0, 4);

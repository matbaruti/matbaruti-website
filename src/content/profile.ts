import type { Stat } from "./types";

export const profile = {
  name: "Mat Baruti",
  role: "Student Leader & AI Enthusiast",
  focus: "Artificial intelligence, medicine, and neuroscience",
  tagline: "Leave every place better than you found it.",
  location: "Prishtina, Kosovo",
  mission:
    "My goal is to use leadership, technology, and continuous learning to create opportunities for others while contributing to the future of artificial intelligence and healthcare.",
  headshot: "/headshot.jpg",
  contact: {
    email: "mattbaruti@gmail.com",
    phone: "+383 45 215 512",
    linkedin: "",
    github: "https://github.com/matbaruti",
    website: "",
  },
  /** Place the file in /public and point here, e.g. "/mat-baruti-cv.pdf". */
  cvUrl: "",
};

// Verified figures from the portfolio, as of July 2026.
export const stats: Stat[] = [
  { value: "5.0", label: "Graduated Faik Konica with a 5.0 GPA" },
  { value: "2.47%", label: "ODYLP-EAGLE acceptance rate" },
  { value: "6", label: "Students chosen for Kosovo" },
  { value: "5", label: "Years as class representative" },
  { value: "4", label: "Years on the student council" },
  { value: "3", label: "Languages spoken" },
];

export const about = {
  intro:
    "Mat Baruti is a student leader, artificial intelligence enthusiast, and youth innovator from Prishtina, Kosovo, combining academic excellence with long-term leadership in technology, education, and community service.",
  story: [
    "Born on 7 July 2010 in Skopje, North Macedonia, and raised in Prishtina, Kosovo, Mat developed an early curiosity for learning, leadership, and technology. From the beginning of his education he took initiative in both academic and extracurricular settings, and that curiosity gradually became a commitment to creating opportunities for others.",
    "Upon graduating from Faik Konica Primary and Lower Secondary School in 2025, he achieved a final GPA of 5.0 while serving five consecutive years as Class Representative and four years on the Student Council — first as a member, later as Deputy President, and finally as Leader of the Ninth-Grade student representatives.",
    "Beyond formal roles, he organised Konica Tech, one of the school's largest student-led technology exhibitions, contributed to the school's official magazine, helped establish the Biology, Physics, and Neuro clubs, and led awareness campaigns on bullying prevention, gender equality, mental wellbeing, human trafficking awareness, environmental responsibility, and STEM.",
    "What began as curiosity about how intelligent systems function grew into a deeper interest in responsible AI — agents, prompt engineering, automation, large language models, and their applications in healthcare, education, and research. That interest sits alongside a long-standing ambition in medicine, inspired by neuroscience and the precision of modern surgery.",
    "In 2026 he was selected as one of only six students representing Kosovo — from a pool of 240+ applicants, an acceptance rate of roughly 2.47% — in the ODYLP-EAGLE 2026 exchange sponsored by the U.S. Department of State. He now continues his education at Xhevdet Doda High School in the STEM Gymnasium programme.",
  ],
  values: [
    {
      title: "Service",
      body: "Meaningful leadership is measured not by titles or recognition, but by the opportunities created for others.",
    },
    {
      title: "Curiosity",
      body: "A daily habit of studying new developments, experimenting with new platforms, and asking better questions rather than settling for easy answers.",
    },
    {
      title: "Responsibility",
      body: "Innovation is only worth pursuing when it stays guided by ethics, privacy, transparency, and human values.",
    },
  ],
  philosophy:
    "Leadership is not about holding a title. It is about creating opportunities for others. Successful leaders empower people rather than seeking recognition for themselves — every initiative becomes stronger when individuals are encouraged to contribute their own ideas, talents, and perspectives.",
  vision:
    "To study medicine and pursue a career in neurosurgery while actively exploring the transformative role artificial intelligence can play in healthcare — supporting diagnosis, research, treatment planning, and scientific discovery — and to keep creating opportunities for others through education, mentoring, and community initiatives.",
};

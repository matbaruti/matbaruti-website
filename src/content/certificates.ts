import academicExcellence15 from "@/assets/academic-excellence-1-5.jpg.asset.json";
import academicExcellence69 from "@/assets/academic-excellence-6-9.jpg.asset.json";
import academicQuiz from "@/assets/academic-knowledge-quiz-certificate-1.jpg.asset.json";
import cambridgeA11 from "@/assets/cambridge-a1-1-excellent.jpg.asset.json";
import cambridgeA12 from "@/assets/cambridge-a1-2-excellent.jpg.asset.json";
import cambridgeA13 from "@/assets/cambridge-a1-3-excellent.jpg.asset.json";
import cmimi from "@/assets/cmimi-i-larte-faik-konica-1.jpg.asset.json";
import hourOfCode from "@/assets/hour-of-code-certificate-of-completion-1.jpg.asset.json";
import korca from "@/assets/jehona-korca-school-reference-1.jpg.asset.json";
import oruci from "@/assets/jehona-oruci-school-reference-1.jpg.asset.json";
import konicaTech from "@/assets/konica-tech-certificate-of-appreciation-1.jpg.asset.json";
import odylp from "@/assets/odylp-eagle-2026-1.jpg.asset.json";
import oxfordA2 from "@/assets/oxford-a2-next-move-3.jpg.asset.json";
import oxfordPrimaryA1 from "@/assets/oxford-primary-a1-excellent-3.jpg.asset.json";
import oxfordSecondaryA1 from "@/assets/oxford-secondary-a1-next-move-2.jpg.asset.json";
import productivity from "@/assets/productivity-activity-attendance.jpg.asset.json";
import redCross from "@/assets/red-cross-volunteer-certificate-1.jpg.asset.json";
import magazine from "@/assets/school-magazine-certificate-of-appreciation-1.jpg.asset.json";

export type CertificateDocument = {
  id: string;
  title: string;
  issuer: string;
  kind: "Certificate" | "Award" | "Reference";
  image: string;
};

/** Rendered, view-only images of the original documents. Source files are not published. */
export const certificateDocuments: CertificateDocument[] = [
  {
    id: "odylp-eagle-2026",
    title: "ODYLP-EAGLE 2026 — Certificate of Completion",
    issuer: "Legacy International · U.S. Department of State",
    kind: "Certificate",
    image: odylp.url,
  },
  {
    id: "cmimi-i-larte",
    title: "Çmimi i Lartë",
    issuer: "Faik Konica Primary and Lower Secondary School",
    kind: "Award",
    image: cmimi.url,
  },
  {
    id: "konica-tech",
    title: "Konica Tech — Certificate of Appreciation",
    issuer: "Faik Konica Primary and Lower Secondary School",
    kind: "Certificate",
    image: konicaTech.url,
  },
  {
    id: "red-cross-volunteer",
    title: "Red Cross Volunteer Certificate",
    issuer: "Red Cross of Kosovo",
    kind: "Certificate",
    image: redCross.url,
  },
  {
    id: "school-magazine",
    title: "School Magazine — Certificate of Appreciation",
    issuer: "Faik Konica Primary and Lower Secondary School",
    kind: "Certificate",
    image: magazine.url,
  },
  {
    id: "academic-excellence-1-5",
    title: "Certificate of Academic Excellence — Grades 1–5",
    issuer: "Faik Konica Primary and Lower Secondary School",
    kind: "Award",
    image: academicExcellence15.url,
  },
  {
    id: "academic-excellence-6-9",
    title: "Certificate of Academic Excellence — Grades 6–9",
    issuer: "Faik Konica Primary and Lower Secondary School",
    kind: "Award",
    image: academicExcellence69.url,
  },
  {
    id: "oxford-a2-next-move-3",
    title: "English — A2, Next Move 3",
    issuer: "Oxford Studio ELT",
    kind: "Certificate",
    image: oxfordA2.url,
  },
  {
    id: "oxford-secondary-a1-next-move-2",
    title: "English — Secondary A1, Next Move 2",
    issuer: "Oxford Studio ELT",
    kind: "Certificate",
    image: oxfordSecondaryA1.url,
  },
  {
    id: "oxford-primary-a1-excellent-3",
    title: "English — Primary A1, Excellent",
    issuer: "Oxford Studio ELT",
    kind: "Certificate",
    image: oxfordPrimaryA1.url,
  },
  {
    id: "cambridge-a1-1",
    title: "English — A1.1, Excellent",
    issuer: "The Cambridge School of Kosovo",
    kind: "Certificate",
    image: cambridgeA11.url,
  },
  {
    id: "cambridge-a1-2",
    title: "English — A1.2, Excellent",
    issuer: "The Cambridge School of Kosovo",
    kind: "Certificate",
    image: cambridgeA12.url,
  },
  {
    id: "cambridge-a1-3",
    title: "English — A1.3, Excellent",
    issuer: "The Cambridge School of Kosovo",
    kind: "Certificate",
    image: cambridgeA13.url,
  },
  {
    id: "productivity-activity",
    title: "Productivity Activity — Certificate of Attendance",
    issuer: "Productivity Activity programme",
    kind: "Certificate",
    image: productivity.url,
  },
  {
    id: "academic-knowledge-quiz",
    title: "Academic Knowledge Quiz — Certificate",
    issuer: "Academic Knowledge Quiz",
    kind: "Certificate",
    image: academicQuiz.url,
  },
  {
    id: "hour-of-code",
    title: "Hour of Code — Certificate of Completion",
    issuer: "Code.org",
    kind: "Certificate",
    image: hourOfCode.url,
  },
  {
    id: "reference-korca",
    title: "School Reference — Jehona Korça",
    issuer: "Faik Konica Primary and Lower Secondary School",
    kind: "Reference",
    image: korca.url,
  },
  {
    id: "reference-oruci",
    title: "School Reference — Jehona Oruçi",
    issuer: "Faik Konica Primary and Lower Secondary School",
    kind: "Reference",
    image: oruci.url,
  },
];

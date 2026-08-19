import academicExcellence15 from "@/assets/certificates/academic-excellence-1-5.jpg";
import academicExcellence69 from "@/assets/certificates/academic-excellence-6-9.jpg";
import academicQuiz from "@/assets/certificates/academic-knowledge-quiz-certificate-1.jpg";
import cambridgeA11 from "@/assets/certificates/cambridge-a1-1-excellent.jpg";
import cambridgeA12 from "@/assets/certificates/cambridge-a1-2-excellent.jpg";
import cambridgeA13 from "@/assets/certificates/cambridge-a1-3-excellent.jpg";
import cmimi from "@/assets/certificates/cmimi-i-larte-faik-konica-1.jpg";
import hourOfCode from "@/assets/certificates/hour-of-code-certificate-of-completion-1.jpg";
import konicaTech from "@/assets/certificates/konica-tech-certificate-of-appreciation-1.jpg";
import odylp from "@/assets/certificates/odylp-eagle-2026-1.jpg";
import productivity from "@/assets/certificates/productivity-activity-attendance.jpg";
import magazine from "@/assets/certificates/school-magazine-certificate-of-appreciation-1.jpg";
import oxfordB1Front from "@/assets/certificates/oxford-b1-front.jpg";
import oxfordB1Back from "@/assets/certificates/oxford-b1-back.jpg";
import geminiCertifiedStudent from "@/assets/certificates/gemini-certified-student-certificate.jpg";
import primarySchoolRecords from "@/assets/certificates/primary-school-academic-records.jpg";
import oxfordC1Front from "@/assets/certificates/oxford-c1-front.jpg";
import oxfordC1Back from "@/assets/certificates/oxford-c1-back.jpg"
import oxfordB2PlusFront from "@/assets/certificates/oxford-b2+-front.jpg";
import oxfordB2PlusBack from "@/assets/certificates/oxford-b2+-back.jpg";
import redCrossFront from "@/assets/certificates/red-cross-volunteer-certificate-front.jpg";
import redCrossBack from "@/assets/certificates/red-cross-volunteer-certificate-back.jpg";
import oxfordSecondaryA1Front from "@/assets/certificates/oxford-secondary-a1-front.jpg";
import oxfordSecondaryA1Back from "@/assets/certificates/oxford-secondary-a1-back.jpg";
import oxfordPrimaryA1Front from "@/assets/certificates/oxford-primary-a1-front.jpg";
import oxfordPrimaryA1Back from "@/assets/certificates/oxford-primary-a1-back.jpg";
import oxfordA2Front from "@/assets/certificates/oxford-a2-front.jpg";
import oxfordA2Back from "@/assets/certificates/oxford-a2-back.jpg";
import jehonaOruciReferenceEnFront from "@/assets/certificates/jehona-oruci-reference-en-front.jpg";
import jehonaOruciReferenceEnBack from "@/assets/certificates/jehona-oruci-reference-en-back.jpg";
import jehonaKorcaReferenceEnFront from "@/assets/certificates/jehona-korca-reference-en-front.jpg";
import jehonaKorcaReferenceEnBack from "@/assets/certificates/jehona-korca-reference-en-back.jpg";
import jehonaOruciReferenceSqFront from "@/assets/certificates/jehona-oruci-reference-sq-front.jpg";
import jehonaOruciReferenceSqBack from "@/assets/certificates/jehona-oruci-reference-sq-back.jpg";
import jehonaKorcaReferenceSqFront from "@/assets/certificates/jehona-korca-reference-sq-front.jpg";
import jehonaKorcaReferenceSqBack from "@/assets/certificates/jehona-korca-reference-sq-back.jpg";

export type CertificateDocument = {
  id: string;
  title: string;
  issuer: string;
  kind: "Certificate" | "Award" | "Reference";
  image: string;
  landscape?: boolean;
};

/** Rendered, view-only images of the original documents. Source files are not published. */
export const certificateDocuments: CertificateDocument[] = [
  {
    id: "odylp-eagle-2026",
    title: "ODYLP-EAGLE 2026 — Certificate of Completion",
    issuer: "Legacy International · U.S. Department of State",
    kind: "Certificate",
    image: odylp,
    landscape: true,
  },
  {
    id: "cmimi-i-larte",
    title: "Çmimi i Lartë",
    issuer: "Faik Konica Primary and Lower Secondary School",
    kind: "Award",
    image: cmimi,
  },
  {
    id: "konica-tech",
    title: "Konica Tech — Certificate of Appreciation",
    issuer: "Faik Konica Primary and Lower Secondary School",
    kind: "Certificate",
    image: konicaTech,
    landscape: true,
  },
  {
    id: "school-magazine",
    title: "School Magazine — Certificate of Appreciation",
    issuer: "Faik Konica Primary and Lower Secondary School",
    kind: "Certificate",
    image: magazine,
    landscape: true,
  },
  {
    id: "academic-excellence-1-5",
    title: "Certificate of Academic Excellence — Grades 1-5",
    issuer: "Faik Konica Primary and Lower Secondary School",
    kind: "Award",
    image: academicExcellence15,
    landscape: true,
  },
  {
    id: "academic-excellence-6-9",
    title: "Certificate of Academic Excellence — Grades 6-9",
    issuer: "Faik Konica Primary and Lower Secondary School",
    kind: "Award",
    image: academicExcellence69,
    landscape: true,
  },
  {
    id: "cambridge-a1-1",
    title: "English — A1.1",
    issuer: "The Cambridge School of Kosovo",
    kind: "Certificate",
    image: cambridgeA11,
    landscape: true,
  },
  {
    id: "cambridge-a1-2",
    title: "English — A1.2",
    issuer: "The Cambridge School of Kosovo",
    kind: "Certificate",
    image: cambridgeA12,
    landscape: true,
  },
  {
    id: "cambridge-a1-3",
    title: "English — A1.3",
    issuer: "The Cambridge School of Kosovo",
    kind: "Certificate",
    image: cambridgeA13,
    landscape: true,
  },
  {
    id: "productivity-activity",
    title: "Productivity Activity — Certificate of Attendance",
    issuer: "Productivity Activity programme",
    kind: "Certificate",
    image: productivity,
    landscape: true,
  },
  {
    id: "academic-knowledge-quiz",
    title: "Academic Knowledge Quiz — Certificate",
    issuer: "Academic Knowledge Quiz",
    kind: "Certificate",
    image: academicQuiz,
    landscape: true,
  },
  {
    id: "hour-of-code",
    title: "Hour of Code — Certificate of Completion",
    issuer: "Code.org",
    kind: "Certificate",
    image: hourOfCode,
    landscape: true,
  },
  {
    id: "oxford-b1-front",
    title: "English — B1",
    issuer: "Oxford Studio ELT",
    kind: "Certificate",
    image: oxfordB1Front,
  },
  {
    id: "gemini-certified-student",
    title: "Gemini Certified Student",
    issuer: "Google",
    kind: "Certificate",
    image: geminiCertifiedStudent,
  },
  {
    id: "primary-school-records",
    title: "Primary School Academic Records",
    issuer: "Faik Konica Primary and Lower Secondary School",
    kind: "Certificate",
    image: primarySchoolRecords,
  },
  {
    id: "oxford-c1-front",
    title: "English — C1",
    issuer: "Oxford Studio ELT",
    kind: "Certificate",
    image: oxfordC1Front,
  },
  {
    id: "oxford-b2+-front",
    title: "English — B2+",
    issuer: "Oxford Studio ELT",
    kind: "Certificate",
    image: oxfordB2PlusFront,
  },
  {
    id: "red-cross-volunteer-front",
    title: "Red Cross Volunteer Certificate",
    issuer: "Red Cross of Kosovo",
    kind: "Certificate",
    image: redCrossFront,
    landscape: true,
  },
  {
    id: "oxford-secondary-a1-front",
    title: "English — Secondary A1",
    issuer: "Oxford Studio ELT",
    kind: "Certificate",
    image: oxfordSecondaryA1Front,
  },
  {
    id: "oxford-primary-a1-front",
    title: "English — Primary A1",
    issuer: "Oxford Studio ELT",
    kind: "Certificate",
    image: oxfordPrimaryA1Front,
  },
  {
    id: "oxford-a2-front",
    title: "English — A2",
    issuer: "Oxford Studio ELT",
    kind: "Certificate",
    image: oxfordA2Front,
  },
  {
    id: "jehona-oruci-reference-en",
    title: "School Reference — Jehona Oruci, English",
    issuer: "Jehona Oruci School",
    kind: "Reference",
    image: jehonaOruciReferenceEnFront,
  },
  {
    id: "jehona-korca-reference-en",
    title: "School Reference — Jehona Korca, English",
    issuer: "Jehona Korca School",
    kind: "Reference",
    image: jehonaKorcaReferenceEnFront,
  },
  {
    id: "jehona-oruci-reference-sq",
    title: "School Reference — Jehona Oruci, Albanian",
    issuer: "Jehona Oruci School",
    kind: "Reference",
    image: jehonaOruciReferenceSqFront,
  },
  {
    id: "jehona-korca-reference-sq",
    title: "School Reference — Jehona Korca, Albanian",
    issuer: "Jehona Korca School",
    kind: "Reference",
    image: jehonaKorcaReferenceSqFront,
  },
];
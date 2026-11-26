import styles from "./page.module.css";

type Job = {
  company: string;
  role: string;
  period: string;
  summary?: string;
  points: string[];
};

const jobs: Job[] = [
  {
    company: "Sweep",
    role: "Founding Engineer",
    period: "2024.08 – 2025.09",
    summary:
      "Joined as an early team member and took part in engineering and product decisions across the business. The customer base grew from 10 to 60 companies during that time.",
    points: [
      "Learned through customer interviews that the real ask behind price management was showing prices on purchase orders, and built just that",
      "Quickly shipped a minimal shopping-mall CS integration (AliExpress, Coupang, and more), a common reason prospects dropped off in pre-sales",
      "Built a plugin that parses Excel formulas (arithmetic, IF, etc.), so each customer's purchase order needs could be met without new development",
      "Built the core order-management logic, its settings UI, and an internal design system",
      "Prevented client–server type mismatches with a monorepo (Yarn Berry), ts-rest, and type checks in GitHub Actions",
    ],
  },
  {
    company: "Viva Republica (Toss)",
    role: "UX Engineer Assistant",
    period: "2023.09 – 2024.07",
    summary: "Built DEUS, a DOM-based design editor",
    points: [
      "Sped up panning by cutting reflows (48ms → 0.07ms)",
      "Sped up drag multi-select by adding region containment to a QuadTree (9.42ms → 1.89ms)",
      "Built every DDS component, the design property panels, and core interactions such as copy, paste, and drag",
      "Made the React-based TDS components usable inside the editor",
    ],
  },
  {
    company: "Bluesignum",
    role: "Frontend Engineer",
    period: "2022.07 – 2023.08",
    points: [
      "ChatGPT counseling game: a chat game where a rapport score shapes the scenario, with GPT calls handled on the server",
      "KMI voice psychological test: recorded digital phenotypes, radar charts with PDF export, and voice visualization with the Web Audio API",
    ],
  },
];

export default function Experience() {
  return (
    <section className={styles.experience} aria-labelledby="experience-heading">
      <h2 id="experience-heading" className={styles.heading}>
        Experience
      </h2>
      <div className={styles.jobs}>
        {jobs.map((job) => (
          <details key={job.company} className={styles.job}>
            <summary className={styles.jobSummary}>
              <span className={styles.jobTitle}>
                <span className={styles.company}>{job.company}</span>
                <span className={styles.jobRole}>{job.role}</span>
              </span>
              <span className={styles.period}>{job.period}</span>
            </summary>
            <div className={styles.jobBody}>
              {job.summary && <p className={styles.jobText}>{job.summary}</p>}
              <ul className={styles.points}>
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}

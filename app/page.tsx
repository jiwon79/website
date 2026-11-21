import type { Metadata } from "next";
import Link from "next/link";
import WorkVideo from "./work-video";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Jiiwon — Design Engineer",
  description: "Interactive work by Jiiwon, a design engineer.",
};

const works = [
  {
    slug: "guseul",
    title: "Guseul",
    description: "A squishy glass marble.",
    video: "/work/guseul/demo.mp4",
    poster: "/work/guseul/preview.webp",
    demo: "https://studio.jiiwon.com/guseul/",
  },
];

export default function Home() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div className={styles.identity}>
          <span className={styles.name}>Jiiwon</span>
          <span className={styles.role}>Design Engineer</span>
        </div>
        <Link className={styles.link} href="/resume">
          Résumé
        </Link>
      </header>

      <section aria-labelledby="work-heading">
        <h1 id="work-heading" className={styles.heading}>Work</h1>
        <div className={styles.works}>
          {works.map((work) => (
            <article key={work.slug} className={styles.work}>
              <WorkVideo
                title={work.title}
                src={work.video}
                poster={work.poster}
              />
              <h2 className={styles.title}>
                <a className={styles.workLink} href={work.demo}>
                  {work.title}
                </a>
              </h2>
              <p className={styles.description}>{work.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

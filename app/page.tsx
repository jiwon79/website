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
    slug: "line-pull",
    title: "Line Pull",
    date: "2026-09-01",
    description: "Pull the lines apart to uncover hidden messages.",
    video: "/work/line-pull/demo.mp4",
    poster: "/work/line-pull/preview.webp",
    demo: "https://studio.jiiwon.com/line-pull/",
  },
  {
    slug: "glow-dice",
    title: "Glow Dice",
    date: "2026-10-03",
    description: "Drag across a wall of dice to leave a trail of glowing pips.",
    video: "/work/glow-dice/demo.mp4",
    poster: "/work/glow-dice/preview.webp",
    demo: "https://studio.jiiwon.com/glow-dice/",
  },
  {
    slug: "smile-flower",
    title: "Smile Flower",
    date: "2026-09-13",
    description: "Swipe to flip the tiles. Press and release to send a wave across the grid.",
    video: "/work/smile-flower/demo.mp4",
    poster: "/work/smile-flower/preview.webp",
    demo: "https://studio.jiiwon.com/smile-flower/",
  },
  {
    slug: "guseul",
    title: "Guseul",
    date: "2026-07-25",
    description: "A squishy glass marble.",
    video: "/work/guseul/demo.mp4",
    poster: "/work/guseul/preview.webp",
    demo: "https://studio.jiiwon.com/guseul/",
  },
  {
    slug: "cursor-cat",
    title: "Cursor Cat",
    date: "2026-08-30",
    description: "A cat that follows your cursor.",
    video: "/work/cursor-cat/demo.mp4",
    poster: "/work/cursor-cat/preview.webp",
    demo: "https://studio.jiiwon.com/cursor-cat/",
  },
  {
    slug: "rose-glass",
    title: "Rose Glass",
    date: "2026-09-25",
    description: "Frosted glass you can stretch.",
    video: "/work/rose-glass/demo.mp4",
    poster: "/work/rose-glass/preview.webp",
    demo: "https://studio.jiiwon.com/rose-glass/",
  },
  {
    slug: "cursive",
    title: "Cursive",
    date: "2026-10-12",
    description: "Animated cursive lettering.",
    video: "/work/cursive/demo.mp4",
    poster: "/work/cursive/preview.webp",
    demo: "https://studio.jiiwon.com/cursive/",
  },
  {
    slug: "gentle-monster",
    title: "Gentle Monster",
    date: "2026-05-02",
    description: "An interactive eyewear catalog.",
    video: "/work/gentle-monster/demo.mp4",
    poster: "/work/gentle-monster/preview.webp",
    demo: "https://studio.jiiwon.com/gentle-monster/",
  },
  {
    slug: "akmu-paradise",
    title: "AKMU Paradise",
    date: "2026-04-26",
    description: "Draw a trail of flowers through a meadow.",
    video: "/work/akmu-paradise/demo.mp4",
    poster: "/work/akmu-paradise/preview.webp",
    demo: "https://studio.jiiwon.com/akmu-paradise/",
  },
].sort((first, second) => second.date.localeCompare(first.date));

const dateFormat = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
});

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
              <div className={styles.workHeading}>
                <h2 className={styles.title}>
                  <a className={styles.workLink} href={work.demo}>
                    {work.title}
                  </a>
                </h2>
                <time className={styles.date} dateTime={work.date}>
                  {dateFormat.format(new Date(work.date))}
                </time>
              </div>
              <p className={styles.description}>{work.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

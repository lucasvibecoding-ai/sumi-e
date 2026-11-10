// Student reviews on the sales page (owner 2026-11-10: real reviews from Sumi-e students,
// first name and initial only), all in one block before the first price box. Text-only
// until the owner sends 3 student photos: then move those 3 reviews into PHOTO with a
// photo path (public/reviews/<name>.jpg).

type Review = { name: string; text: string; photo?: string };

const PHOTO: Review[] = [];

const TEXT: Review[] = [
  {
    name: 'Eunice K.',
    text: "I was intimidated by Japanese ink painting because everything looks so delicate. The bamboo lesson really helped me understand how much you can do with just a few brushstrokes. Still practicing, but I love the process.",
  },
  {
    name: 'Graham Y.',
    text: "There's something very satisfying about making a painting with only black ink and water. No complicated color mixing, just learning to control the brush. It's become my favorite way to relax after work.",
  },
  {
    name: 'Yvette M.',
    text: "My first orchid looked more like a bunch of weeds lol. But after watching the lesson again and practicing a few times, it started looking much better. I appreciate being able to learn at my own pace.",
  },
  {
    name: 'Hiroko S.',
    text: "I especially enjoyed learning the Four Gentlemen. The plum blossoms were my favorite because such small marks can create something so lovely. I'm making a little collection of paintings for my hallway.",
  },
  {
    name: 'Felicia A.',
    text: "I've tried watercolor before but never really understood how much water to use. The lessons about ink tones and wet versus dry brush were very helpful. I can finally see the difference in my paintings.",
  },
  {
    name: 'Peter R.',
    text: "I retired last year and wanted to pick up an artistic hobby. Sumi-e has been a pleasant surprise. It takes patience, and I'm certainly no expert, but that's exactly what I enjoy about it.",
  },
  {
    name: 'Mei W.',
    text: "The mountain landscapes are beautiful. I'm still working on getting that soft misty effect without making everything too dark. The examples give me something to work toward.",
  },
  {
    name: 'Nadia T.',
    text: "I like that the paintings don't need to be filled with tiny details. Sometimes leaving part of the paper completely white makes the whole picture more interesting. That was a new way of thinking for me.",
  },
  {
    name: 'Colin F.',
    text: "The brush control exercises seemed basic at first, but they made a big difference when I started painting trees and rocks. I wish I'd learned these techniques years ago.",
  },
];

function Stars() {
  return (
    <span className="rv-stars" aria-label="5 out of 5 stars">
      ★★★★★
    </span>
  );
}

function Cards({ list, plain = false }: { list: Review[]; plain?: boolean }) {
  return (
    <ul className={`rv-grid${plain ? ' rv-plain' : ''}`}>
      {list.map((r, i) => (
        <li key={i} className="rv-card">
          {r.photo && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={r.photo} alt="" className="rv-photo" />
          )}
          <div className="rv-body">
            <Stars />
            <p className="rv-text">&ldquo;{r.text}&rdquo;</p>
            <p className="rv-name">{r.name}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="rv">
      <style>{css}</style>
      <div className="rv-head">
        <p className="rv-eyebrow">Student reviews</p>
        <h2 className="rv-title">What students are painting</h2>
      </div>
      {PHOTO.length > 0 && (
        <>
          <Cards list={PHOTO} />
          <div style={{ height: 20 }} />
        </>
      )}
      <Cards list={TEXT} plain />
    </section>
  );
}

const css = `
.rv { padding: 56px 0 24px; }
.rv-head { text-align: center; margin-bottom: 32px; }
.rv-eyebrow { font-size: 13px; font-weight: 800; letter-spacing: 2.5px; text-transform: uppercase; color: var(--gold); margin: 0 0 8px; }
.rv-title { font-size: 36px; line-height: 1.2; margin: 0; color: var(--ink); text-align: center; }
.rv-stars { color: #e0a43a; letter-spacing: 2px; font-size: 18px; }
.rv-grid { list-style: none; padding: 0; margin: 0; display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 20px; }
.rv-card { background: #fff; border: 1px solid rgba(45,74,143,0.12); border-radius: 14px; overflow: hidden; box-shadow: 0 2px 14px rgba(26,31,61,0.05); display: flex; flex-direction: column; }
.rv-photo { width: 100%; aspect-ratio: 1/1; object-fit: cover; display: block; }
.rv-body { padding: 18px 20px 20px; display: flex; flex-direction: column; gap: 10px; flex: 1; }
.rv-text { margin: 0; font-size: 17px; line-height: 1.6; color: var(--ink); flex: 1; }
.rv-name { margin: 0; font-size: 15px; font-weight: 700; color: var(--ink); font-family: system-ui, sans-serif; }
.rv-plain .rv-card { background: var(--indigo-pale); box-shadow: none; }
@media (max-width: 860px) { .rv-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@media (max-width: 560px) {
  .rv-title { font-size: 28px; }
  .rv-grid { grid-template-columns: 1fr; gap: 16px; }
}
`;

// Student reviews grid (12 picked by the user, all 5 stars). Divs, not <p>, because the
// page's mobile rule forces every .bonsai-page p to 20px.
const REVIEWS = [
  { name: "Margaret Ellis", title: "I Never Thought I Could Paint Like This", body: "I've always loved Japanese ink paintings but never thought I could make my own. This made getting started feel so much easier." },
  { name: "Patricia Sloan", title: "Perfect for Complete Beginners", body: "I had absolutely no experience with Japanese painting. The explanations made everything feel approachable rather than intimidating." },
  { name: "Michael Monroe", title: "The Brush Techniques Really Helped", body: "Understanding how to hold and move the brush made a big difference for me. My paintings are starting to look much more natural." },
  { name: "Susan Carlisle", title: "My New Favorite Creative Hobby", body: "I wanted something creative that didn't require hours of preparation. Sumi-e has become a lovely part of my weekly routine." },
  { name: "Diane Westbrook", title: "Finally Getting the Hang of Brushstrokes", body: "My first attempts were pretty messy, but I started understanding how different brush movements create different effects. It's been really satisfying." },
  { name: "Thomas Mercer", title: "Much Easier Than I Expected", body: "I was worried that ink painting would be too difficult for a beginner. Once I stopped trying to make every stroke perfect, I really started enjoying it." },
  { name: "Frances Barlow", title: "So Satisfying to See the Finished Paintings", body: "There's a real sense of accomplishment when a few strokes turn into a recognizable image. I still get excited when that happens." },
  { name: "Deborah Finley", title: "My Paintings Are Finally Improving", body: "I used to struggle with getting the ink to flow the way I wanted. With practice, my lines and shapes are becoming much more controlled." },
  { name: "Rebecca Shaw", title: "I Feel Much More Confident with a Brush", body: "At first, I was nervous about making mistakes because ink can't simply be erased. Now I'm much more comfortable experimenting." },
  { name: "James Caldwell", title: "Great for Learning Brush Control", body: "I used to press much too hard with the brush. Learning to vary the pressure has made my paintings look much more interesting." },
  { name: "Marlene Bishop", title: "I Love Painting with Just Black and White", body: "It surprised me how many different effects you can achieve with one ink color. Playing with light and dark shades is my favorite part." },
  { name: "Monica Alden", title: "A Beautiful Way to Be Creative Again", body: "I hadn't painted anything in years. This reminded me how much I enjoy making art simply for the pleasure of it." },
];

export function Stars({ size = 16 }: { size?: number }) {
  return (
    <span aria-label="5 out of 5 stars" style={{ display: "inline-flex", gap: 2, lineHeight: 1 }}>
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 20 20" aria-hidden="true">
          <path fill="#f5a524" d="M10 1.5l2.6 5.5 6 .8-4.4 4.1 1.1 5.9L10 15l-5.3 2.8 1.1-5.9L1.4 7.8l6-.8z" />
        </svg>
      ))}
    </span>
  );
}

export function HappyCustomers() {
  return (
    <div className="happy-badge">
      <Stars size={18} />
      <span>500+ Happy Customers Enjoying The Course</span>
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section id="reviews" className="reviews-section">
      <style>{`
        .happy-badge { display: inline-flex; align-items: center; justify-content: center; flex-wrap: wrap; gap: 8px 10px; margin-bottom: 20px; font-family: Inter, system-ui, sans-serif; font-size: 15px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; color: var(--ink); }
        .reviews-section { padding: 56px 0 24px; }
        .reviews-head { text-align: center; margin-bottom: 28px; }
        .reviews-head h2 { margin: 0 0 8px; }
        .reviews-score { display: inline-flex; align-items: center; gap: 10px; font-family: Inter, system-ui, sans-serif; }
        .reviews-score b { font-size: 40px; line-height: 1; color: var(--ink); }
        .reviews-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 16px; font-family: Inter, system-ui, sans-serif; }
        .review-card { background: #fff; border: 1px solid #ddd8d0; border-radius: 12px; padding: 16px 16px 18px; }
        .review-who { display: flex; align-items: center; gap: 8px; margin-bottom: 8px; }
        .review-avatar { width: 30px; height: 30px; border-radius: 50%; background: #f5a524; color: #fff; display: flex; align-items: center; justify-content: center; font-size: 15px; font-weight: 600; flex-shrink: 0; }
        .review-name { font-size: 16px; font-weight: 700; color: var(--ink); line-height: 1.2; }
        .review-title { font-size: 16px; font-weight: 700; color: var(--ink); margin: 10px 0 4px; line-height: 1.35; }
        .review-body { font-size: 15.5px; color: #3a3f55; line-height: 1.55; }
        @media (max-width: 1000px) { .reviews-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
        @media (max-width: 560px) { .reviews-grid { grid-template-columns: 1fr; } .happy-badge { font-size: 13px; letter-spacing: 1px; } }
      `}</style>
      <div className="reviews-head">
        <h2>What students are saying</h2>
        <div className="reviews-score"><b>5.0</b><Stars size={22} /></div>
      </div>
      <div className="reviews-grid">
        {REVIEWS.map((r) => (
          <div key={r.name} className="review-card">
            <div className="review-who">
              <div className="review-avatar">{r.name[0]}</div>
              <div className="review-name">{r.name}</div>
              <svg width="16" height="16" viewBox="0 0 20 20" aria-label="Verified student">
                <circle cx="10" cy="10" r="10" fill="#22a45d" />
                <path d="M5.5 10.3l3 3 6-6.3" stroke="#fff" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <Stars />
            <div className="review-title">{r.title}</div>
            <div className="review-body">{r.body}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

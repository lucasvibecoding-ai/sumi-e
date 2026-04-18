'use client';

import { useState } from 'react';

const faqs = [
  {
    q: 'Do I need any experience with ink painting or drawing?',
    a: "None at all. This course is built for complete beginners, including people who've never held a sumi brush. Module 1 starts with the fundamentals of sumi-e and walks you through your very first painting step by step.",
  },
  {
    q: 'How much does everything cost to get started?',
    a: "Under $30 total. A beginner sumi-e brush set ($10 to $15), an ink stick and small inkstone ($8 to $12), and a pad of rice paper ($5 to $10). The course includes a complete shopping guide with links. You do NOT need expensive specialty supplies.",
  },
  {
    q: 'Will you tell me which materials to buy and where to get them?',
    a: "Yes. Module 2 walks you through exactly which materials to start with based on the subjects you want to paint first. It also includes a shopping guide with specific links so you know exactly where to buy everything and what to avoid.",
  },
  {
    q: 'What materials do I need for my first painting?',
    a: "Everything you need costs under $30. A basic starter kit includes: a sumi-e brush, an ink stick (or bottled sumi ink), a small inkstone or felt mat, rice paper, and water. Module 2 covers exactly what to buy and where.",
  },
  {
    q: 'Can I do this in a small apartment?',
    a: "Absolutely. All you need is a desk or kitchen table, a small mat, and a cup of water. No studio, no workshop, no special equipment. Most of our students paint at their kitchen table. You can even do it on a lap desk.",
  },
  {
    q: 'Will this work with materials available in my country?',
    a: "Yes. The materials used in this course are available worldwide through online retailers. Sumi-e brush sets ship internationally, and most other supplies (ink sticks, rice paper, inkstones) are available anywhere. The course covers alternatives for hard-to-find items.",
  },
  {
    q: 'How much time does a painting take?',
    a: "Your first sumi-e painting takes about 30 minutes to 1 hour from setup to finished. Grinding ink and loading the brush takes 10 to 15 minutes, painting takes 10 to 20 minutes, and drying plus signing takes another 5 to 10 minutes. It's one of the most rewarding creative hobbies for the time invested.",
  },
  {
    q: 'How long until my work looks like the stunning pieces I see online?',
    a: "Your very first painting will have that signature sumi-e look. That happens in under an hour. The beauty comes from the brush technique, not years of practice. The initial \"wow\" moment is immediate. Every painting after that just gets more refined.",
  },
  {
    q: "I'm not artistic at all. Can I still do this?",
    a: "Sumi-e is fundamentally different from realistic drawing. The images are created by a handful of practiced brushstrokes, not by detailed sketching. If you can sign your name, you can create stunning sumi-e. The technique does the artistry for you.",
  },
  {
    q: 'What if my first painting doesn\'t turn out well?',
    a: "The Troubleshooting Guide covers every common mistake so you can fix almost any issue on your next painting. But honestly, even imperfect sumi-e looks beautiful. That's the magic of this art form. Each painting is unique. And with paper costing a few cents a sheet, a learning experience is never a disaster.",
  },
  {
    q: "What's the refund policy?",
    a: "90-day money-back guarantee. Try the entire course. Get your materials. Paint your first piece. If you don't love it, email us within 90 days and we'll refund you in full. No questions asked. No hoops.",
  },
  {
    q: 'How is the content delivered?',
    a: "Instant access to our private course platform. All video lessons and downloadable PDFs organized by module. Watch on any device: phone, tablet, or computer. Lifetime access, so go at your own pace. There's no schedule and no expiration.",
  },
  {
    q: 'Is it safe to purchase online?',
    a: "Yes. Payments are processed through Stripe, the same secure payment platform used by millions of businesses worldwide (including Amazon, Google, and Shopify). We never see your card details.",
  },
  {
    q: 'Is the ink dangerous or harmful to my skin?',
    a: "No. Traditional sumi ink is non-toxic and has been used safely for over a thousand years. It can temporarily stain your hands gray, but it washes off easily with soap and water. The course recommends a small mat under your work to keep things clean, but even direct skin contact is completely harmless. There are no harsh chemicals involved.",
  },
  {
    q: 'Have a specific question?',
    a: "Email us at hello@sumieclass.com and we'll get back to you as soon as possible.",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="faq-list">
      {faqs.map((faq, i) => (
        <div key={i} className="faq-item">
          <button
            className="faq-q"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            type="button"
          >
            <span className="faq-q-text">{faq.q}</span>
            <span className={`faq-icon ${openIndex === i ? 'open' : ''}`}>+</span>
          </button>
          <div className={`faq-answer ${openIndex === i ? 'open' : ''}`}>
            <div className="faq-answer-inner">
              <p className="faq-a">{faq.a}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

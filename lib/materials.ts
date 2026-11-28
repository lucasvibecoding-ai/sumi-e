// What a student needs for the Sumi-e Masterclass (the list on the /gift page, under $30 in total),
// with Amazon links for the buyer's country. Used on /materials and the gift thank-you page.
// Amazon doesn't allow affiliate links inside emails, so emails link to /materials instead.

export type Material = { name: string; note: string; query: string };

export const MATERIALS: Material[] = [
  { name: 'Sumi-e brush set', note: 'A beginner set of bamboo ink brushes', query: 'sumi-e brush set beginner' },
  { name: 'Ink stick and inkstone', note: 'A sumi ink stick and a small inkstone to grind it on', query: 'sumi ink stick and inkstone set' },
  { name: 'Rice paper pad', note: 'A pad of rice paper for ink painting', query: 'rice paper pad sumi-e painting' },
];

// Amazon store per buyer country (Vercel's x-vercel-ip-country); everyone else gets amazon.com.
const DOMAINS: Record<string, string> = {
  US: 'amazon.com', GB: 'amazon.co.uk', IE: 'amazon.co.uk', DE: 'amazon.de', AT: 'amazon.de', CH: 'amazon.de',
  FR: 'amazon.fr', BE: 'amazon.fr', IT: 'amazon.it', ES: 'amazon.es', NL: 'amazon.nl', CA: 'amazon.ca',
  AU: 'amazon.com.au', NZ: 'amazon.com.au', SE: 'amazon.se', PL: 'amazon.pl', JP: 'amazon.co.jp',
};

// Amazon Associates tracking ID per store. Empty = plain link (no affiliate tag yet).
// TODO(owner): fill in the Associates tags, e.g. 'amazon.com': 'sumieclass-20'.
const TAGS: Record<string, string> = {};

export function amazonDomain(country?: string | null) {
  return DOMAINS[(country ?? '').toUpperCase()] ?? 'amazon.com';
}

export function amazonUrl(query: string, country?: string | null) {
  const domain = amazonDomain(country);
  const tag = TAGS[domain];
  return `https://www.${domain}/s?k=${encodeURIComponent(query)}${tag ? `&tag=${encodeURIComponent(tag)}` : ''}`;
}

export function hasAffiliateTag(country?: string | null) {
  return !!TAGS[amazonDomain(country)];
}

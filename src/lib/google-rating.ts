import { createServerFn } from "@tanstack/react-start";

const MAPS_URL = "https://www.google.com/maps?cid=11709658860137419814&hl=en";
const TTL_OK = 15 * 60 * 1000;
const TTL_MISS = 5 * 60 * 1000;

export type GoogleRating = { rating: number; count: number };

let cache: { at: number; data: GoogleRating | null } | null = null;

export const getGoogleRating = createServerFn({ method: "GET" }).handler(async (): Promise<GoogleRating | null> => {
  const now = Date.now();
  if (cache && now - cache.at < (cache.data ? TTL_OK : TTL_MISS)) return cache.data;
  const data = await loadRating();
  cache = { at: now, data };
  return data;
});

async function loadRating(): Promise<GoogleRating | null> {
  const page = await grab(MAPS_URL);
  const raw = page.match(/\/maps\/preview\/place\?[^"']+/);
  if (!raw) return null;
  let path = raw[0].replace(/&(?:amp;)+/gi, "&");
  const preview = await grab(`https://www.google.com${path}`);
  const jsonStart = preview.indexOf("[");
  if (jsonStart < 0) return null;
  try {
    return ratingFromTree(JSON.parse(preview.slice(jsonStart)));
  } catch {
    return null;
  }
}

async function grab(url: string) {
  const response = await fetch(url, {
    headers: {
      "Accept-Language": "en",
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
    },
    signal: AbortSignal.timeout(8000),
  });
  if (!response.ok) return "";
  return response.text();
}

function ratingFromTree(node: unknown): GoogleRating | null {
  if (!Array.isArray(node)) return null;
  for (const child of node) {
    if (!Array.isArray(child)) continue;
    const label = child.find(
      (item): item is string => typeof item === "string" && /^\d[\d,]*\s+reviews?$/i.test(item.trim()),
    );
    const isPlace = child.some(
      (item) => typeof item === "string" && item.includes("search.google.com/local/reviews?placeid="),
    );
    if (!label || !isPlace) continue;
    const count = Number(label.replace(/[^\d]/g, ""));
    const numbers = node.filter((item): item is number => typeof item === "number");
    const rating = numbers.find((n) => n >= 1 && n <= 5 && (n !== count || numbers.filter((x) => x === count).length > 1));
    if (count > 0 && rating !== undefined) {
      return { rating: Math.round(rating * 10) / 10, count };
    }
  }
  for (const child of node) {
    const nested = ratingFromTree(child);
    if (nested) return nested;
  }
  return null;
}

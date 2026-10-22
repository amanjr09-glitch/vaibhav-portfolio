export type Day = { date: string; level: number; count: number };

// Reads GitHub's public contribution calendar at build time.
// Returns null instead of throwing, so a GitHub hiccup never breaks the build.
export async function getContributions(user: string): Promise<Day[] | null> {
  try {
    const res = await fetch(`https://github.com/users/${user}/contributions`);
    if (!res.ok) return null;
    const html = await res.text();

    const counts = new Map<string, number>();
    for (const [, id, text] of html.matchAll(/<tool-tip[^>]*for="([^"]+)"[^>]*>([^<]*)<\/tool-tip>/g)) {
      const n = text.match(/^(\d+) contribution/);
      counts.set(id, n ? Number(n[1]) : 0);
    }

    const days: Day[] = [];
    for (const [tag] of html.matchAll(/<td[^>]*data-date="[^"]+"[^>]*>/g)) {
      const date = tag.match(/data-date="([^"]+)"/)![1];
      const level = Number(tag.match(/data-level="(\d)"/)?.[1] ?? 0);
      const id = tag.match(/id="([^"]+)"/)?.[1] ?? "";
      days.push({ date, level, count: counts.get(id) ?? 0 });
    }
    days.sort((a, b) => a.date.localeCompare(b.date));
    return days.length ? days : null;
  } catch {
    return null;
  }
}

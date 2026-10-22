// Spotify's official player. Visitors logged into Spotify hear full tracks, everyone else gets previews.
export default function SpotifyPanel({ url }: { url: string }) {
  const id = url.match(/playlist\/([A-Za-z0-9]+)/)?.[1];
  if (!id) return null;

  return (
    <div className="music">
      <div>
        <h3>On repeat</h3>
        <span className="hand note" aria-hidden="true">press play while you scroll</span>
        <p>The playlist that&apos;s usually on while I build. Pick anything.</p>
      </div>
      {/* Not lazy: Spotify's player sizes itself once, and lazy-loading made it render too narrow. */}
      <div className="player">
        <iframe
          title="Vaibhav's Spotify playlist"
          src={`https://open.spotify.com/embed/playlist/${id}?utm_source=generator&theme=0`}
          width="100%"
          height="352"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        />
      </div>
    </div>
  );
}

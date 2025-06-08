'use client'

export default function BackgroundMusic() {
  return (
    <div className="fixed bottom-4 right-4 z-50 shadow-xl rounded-xl overflow-hidden">
      <iframe
        src="https://open.spotify.com/embed/track/1UPB5rYJ0bzn6mNSoAHrZC?utm_source=generator&theme=0"
        width="250"
        height="152"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        style={{ borderRadius: '12px' }}
      ></iframe>
    </div>
  )
}

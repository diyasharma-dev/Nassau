<template>
  <section class="section video-testimonials-section" id="video-reviews">
    <div class="wrap">
      <div class="section-heading text-center">
        <span class="eyebrow-tag gold-tag">On-Site Client Walkthroughs</span>
        <h2 class="section-title">20+ Years. Mostly Word of Mouth.</h2>
        <p class="section-sub">
          Watch real Nassau County home buyers, investors, and families share their candid on-site experience immediately following their property walkthrough with Daren Koniuk.
        </p>
      </div>

      <!-- Exactly 3 Balanced Video Cards Grid (No Hanging Card) -->
      <div class="video-grid">
        <article
          v-for="video in videoTestimonials"
          :key="video.id"
          class="video-card"
        >
          <!-- Real HTML5 Video Player on Every Card -->
          <div class="video-player-wrap">
            <video
              controls
              playsinline
              preload="metadata"
              :poster="video.poster"
              class="testimonial-video-elem"
              :aria-label="video.title"
            >
              <source :src="video.videoSrc" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <span class="video-duration-pill">{{ video.duration }}</span>
          </div>

          <div class="video-card-body">
            <span class="video-town-tag">{{ video.town }}</span>
            <h3 class="video-card-title">"{{ video.title }}"</h3>
            <p class="video-card-quote">
              &ldquo;{{ video.quote }}&rdquo;
            </p>

            <div class="video-highlights-row">
              <span v-for="(hl, hIdx) in video.highlights" :key="hIdx" class="hl-badge">
                &#10003; {{ hl }}
              </span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { videoTestimonials } from '../data/videoTestimonialsData.js';
</script>

<style scoped>
.video-testimonials-section {
  background-color: #ffffff;
  padding: 88px 0;
  border-bottom: 1px solid #e5dfd5;
  position: relative;
}

.section-heading {
  margin-bottom: 52px;
}

.eyebrow-tag {
  display: inline-block;
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.72rem;
  font-weight: 700;
  padding: 5px 14px;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 14px;
}

.gold-tag {
  color: #8c6d46;
  background: #f6f2ec;
  border: 1px solid #dcd4c7;
}

.section-title {
  font-family: var(--font-display, 'Fraunces', Georgia, serif);
  font-size: clamp(2rem, 3.4vw, 2.75rem);
  font-weight: 700;
  color: #0c1424;
  line-height: 1.18;
  margin-bottom: 14px;
  letter-spacing: -0.02em;
}

.section-sub {
  font-family: var(--font-main, 'Plus Jakarta Sans', sans-serif);
  font-size: 1.05rem;
  color: #475569;
  max-width: 720px;
  margin: 0 auto;
  line-height: 1.65;
}

/* 3-Column Grid on Desktop - Perfectly Balanced */
.video-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
}

@media (min-width: 768px) {
  .video-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1040px) {
  .video-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.video-card {
  background: #fbf9f6;
  border: 1px solid #e5dfd5;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.04);
  display: flex;
  flex-direction: column;
  transition: all 0.25s ease;
}

.video-card:hover {
  transform: translateY(-4px);
  border-color: #8c6d46;
  box-shadow: 0 14px 32px rgba(140, 109, 70, 0.12);
}

.video-player-wrap {
  position: relative;
  aspect-ratio: 4 / 3;
  width: 100%;
  background: #000000;
  overflow: hidden;
  border-bottom: 1px solid #e5dfd5;
}

.testimonial-video-elem {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  background: #000000;
}

.video-duration-pill {
  position: absolute;
  bottom: 12px;
  right: 12px;
  background: rgba(12, 20, 36, 0.88);
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #ffffff;
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.72rem;
  font-weight: 600;
  padding: 4px 9px;
  border-radius: 4px;
  pointer-events: none;
}

.video-card-body {
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.video-town-tag {
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.72rem;
  font-weight: 700;
  color: #8c6d46;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 8px;
}

.video-card-title {
  font-family: var(--font-display, 'Fraunces', Georgia, serif);
  font-size: 1.25rem;
  font-weight: 700;
  color: #0c1424;
  line-height: 1.32;
  margin-bottom: 10px;
  letter-spacing: -0.01em;
}

.video-card-quote {
  font-family: var(--font-main, 'Plus Jakarta Sans', sans-serif);
  font-size: 0.92rem;
  color: #334155;
  line-height: 1.6;
  margin-bottom: 18px;
  font-style: italic;
  flex-grow: 1;
}

.video-highlights-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 0;
}

.hl-badge {
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.72rem;
  font-weight: 600;
  background: #ffffff;
  color: #6e5432;
  padding: 4px 10px;
  border-radius: 4px;
  border: 1px solid #dcd4c7;
}
</style>

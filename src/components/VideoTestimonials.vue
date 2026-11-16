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
  padding: 80px 0;
  border-bottom: 1.5px solid var(--border-soft, #d8dee6);
}

.section-heading {
  margin-bottom: 48px;
}

.eyebrow-tag {
  display: inline-block;
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.74rem;
  font-weight: 700;
  padding: 4px 12px;
  border-radius: 9999px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 12px;
}

.gold-tag {
  color: var(--nassau-gold-dark, #9d7718);
  background: #fdfaf2;
  border: 1px solid #e6ce8a;
}

.section-title {
  font-family: var(--font-display, 'Fraunces', Georgia, serif);
  font-size: clamp(1.8rem, 3.2vw, 2.5rem);
  font-weight: 800;
  color: var(--charcoal-950, #121820);
  line-height: 1.2;
  margin-bottom: 12px;
}

.section-sub {
  font-family: var(--font-sans, 'Inter', sans-serif);
  font-size: 1.02rem;
  color: var(--text-secondary, #475569);
  max-width: 720px;
  margin: 0 auto;
  line-height: 1.6;
}

/* 3-Column Grid on Desktop - Perfectly Balanced */
.video-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 28px;
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
  background: #ffffff;
  border: 1.5px solid var(--border-soft, #d8dee6);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(18, 24, 32, 0.05);
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.video-card:hover {
  transform: translateY(-2px);
  border-color: var(--nassau-gold, #c59b27);
  box-shadow: 0 8px 24px rgba(11, 26, 46, 0.09);
}

.video-player-wrap {
  position: relative;
  aspect-ratio: 4 / 3;
  width: 100%;
  background: #000000;
  overflow: hidden;
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
  bottom: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.75);
  color: #ffffff;
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.72rem;
  font-weight: 700;
  padding: 3px 8px;
  border-radius: 4px;
  pointer-events: none;
}

.video-card-body {
  padding: 22px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.video-town-tag {
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.72rem;
  font-weight: 700;
  color: var(--nassau-gold-dark, #9d7718);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-bottom: 6px;
}

.video-card-title {
  font-family: var(--font-display, 'Fraunces', Georgia, serif);
  font-size: 1.15rem;
  font-weight: 800;
  color: var(--charcoal-950, #121820);
  line-height: 1.3;
  margin-bottom: 10px;
}

.video-card-quote {
  font-size: 0.88rem;
  color: var(--text-secondary, #475569);
  line-height: 1.55;
  margin-bottom: 16px;
  font-style: italic;
  flex-grow: 1;
}

.video-highlights-row {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 0;
}

.hl-badge {
  font-size: 0.72rem;
  font-weight: 600;
  background: var(--surface-subtle, #eceef2);
  color: var(--charcoal-900, #1a222d);
  padding: 3px 8px;
  border-radius: 4px;
  border: 1px solid var(--border-soft, #d8dee6);
}
</style>

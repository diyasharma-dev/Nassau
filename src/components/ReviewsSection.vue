<template>
  <section class="section reviews-section" id="reviews">
    <div class="wrap">
      <!-- Section Head -->
      <div class="section-head text-center">
        <span class="section-tag">Google Reviews</span>
        <h2 class="section-title">Rated 4.9 Stars Across New York</h2>
        <p class="section-sub">
          Real Google-verified reviews from single-family home buyers, co-op purchasers, and real estate attorneys across New York &amp; Long Island.
        </p>
      </div>

      <!-- Rating Header Box -->
      <div class="rating-summary-card">
        <div class="rsc-left">
          <div class="rsc-brand">HomeStar Professional Home Inspections &bull; Across New York</div>
          <div class="rsc-badge">Google Verified</div>
        </div>
        <div class="rsc-center">
          <span class="rsc-score">4.9</span>
          <div class="rsc-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
          <span class="rsc-count">(150+ Google Reviews)</span>
        </div>
        <div class="rsc-right">
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-review-link"
          >
            Rate &amp; Review Us on Google &rarr;
          </a>
        </div>
      </div>

      <!-- Topic Filter Tabs -->
      <div class="review-filters">
        <button
          v-for="cat in categories"
          :key="cat"
          class="filter-pill"
          :class="{ active: selectedCategory === cat }"
          @click="selectedCategory = cat"
        >
          {{ cat }}
        </button>
      </div>

      <!-- Reviews Grid -->
      <div class="reviews-masonry">
        <article
          v-for="(r, idx) in filteredReviews"
          :key="idx"
          class="review-item"
        >
          <div class="review-item-header">
            <div class="review-avatar">{{ r.name[0] }}</div>
            <div class="review-author-meta">
              <strong class="author-name">{{ r.name }}</strong>
              <span class="author-sub">{{ r.time }} &bull; {{ r.meta }}</span>
            </div>
            <span class="review-topic-tag">{{ r.category }}</span>
          </div>
          <div class="review-stars-gold">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
          <h4 class="review-quote-title">{{ r.title }}</h4>
          <p class="review-quote-text">"{{ r.text }}"</p>
          <div class="review-verified-badge">
            <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span>Verified Google Review</span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';

const selectedCategory = ref('All');

const categories = [
  'All',
  'First-time buyers',
  'Fair pricing',
  'Timely report',
  'Condo / Co-op',
  'Thoroughness'
];

const reviews = [
  {
    name: 'Joanne Lin',
    time: '7 months ago',
    meta: '9 reviews • 1 photo',
    category: 'Thoroughness',
    title: 'Meticulous & Knowledgeable',
    text: 'Highly recommend working with Daren. We were able to schedule an inspection on a Saturday morning with no issues. He is meticulous and knowledgeable. We knew we were in good hands. His walkthrough of the property, exterior and interior, was comprehensive.'
  },
  {
    name: 'Michelle Lee',
    time: '2 months ago',
    meta: '8 reviews • 1 photo',
    category: 'First-time buyers',
    title: 'Home 101 Breakdown',
    text: 'Reasonable price. Daren was great! Professional, knowledgeable and nice. This was our first home inspection and he took his time to thoroughly inspect the house and to give us a breakdown of Home 101. Thank you Daren!'
  },
  {
    name: 'Kuei Fan',
    time: '6 months ago',
    meta: '1 review',
    category: 'Condo / Co-op',
    title: 'Patient & Honest',
    text: 'It was great working with Daren. We were able to setup a time for an inspection on a condo with less than a week\'s notice. He does a thorough job, very patient and honest.'
  },
  {
    name: 'Samantha Anderson',
    time: '9 months ago',
    meta: '4 reviews',
    category: 'Fair pricing',
    title: 'No Surprises, Respectful & Professional',
    text: 'Reasonable price. Daren was a pleasure to work with from the very first call. He was respectful and professional. The entire process was explained to me on the first call and there were no surprises. After completing a thorough inspection, he walked me through all findings.'
  },
  {
    name: 'Ka Shek Lee',
    time: '7 months ago',
    meta: '1 review',
    category: 'Timely report',
    title: 'Prompt & Courteous',
    text: 'Working with Daren was a smooth and easy experience. He arrived promptly, was professional and courteous, and took the time to explain what he was inspecting and any issues he found. He was very responsive and easy to work with. Highly recommended.'
  },
  {
    name: 'Daniel Kang',
    time: '8 months ago',
    meta: '2 reviews',
    category: 'First-time buyers',
    title: 'Made Home Purchase Much Smoother',
    text: 'Reasonable price. Daren has made our home purchasing process much smoother with his professionalism and skill. He answered our many questions thoughtfully and helped us navigate the process. We would definitely work with him again in the future!'
  },
  {
    name: 'Sebastian Cevallos',
    time: 'a year ago',
    meta: 'Local Guide • 26 reviews',
    category: 'Timely report',
    title: 'Detailed Report with High-Res Photos',
    text: 'Daren provided an excellent home inspection, was extremely thorough and meticulous in documenting everything he found. He provided an excellent report the following day with detailed descriptions of various issues & high quality photos.'
  },
  {
    name: 'Michael Gridin',
    time: 'a year ago',
    meta: '10 reviews',
    category: 'Thoroughness',
    title: 'Even My Realtor Was Impressed',
    text: 'Daren came earlier than scheduled time to make sure he\'s not late for the appointment. Super professional and thorough, even my realtor was impressed. He found the smallest things not seen to the naked eye. The report was created quickly and detailed.'
  },
  {
    name: 'Taylor A',
    time: '2 years ago',
    meta: '1 review',
    category: 'Thoroughness',
    title: 'Tradesman Family Approved',
    text: 'Daren was recommended by a friend, so my husband and I decided to hire him as our inspector. Daren showed up promptly and prepared. Being that my husband and father both work in trades, they weren\'t expecting him to catch some little things, but he caught everything!'
  },
  {
    name: 'Imran J.',
    time: '2 years ago',
    meta: '5 reviews • 1 photo',
    category: 'Fair pricing',
    title: 'Hired Twice for 2 Different Homes',
    text: 'Daren was referred to me by a friend for a home inspection. I have hired him twice to inspect two different homes. I was impressed by his professionalism, thoroughness and dedication each time.'
  },
  {
    name: 'Jonathan Ng',
    time: 'a year ago',
    meta: '1 review',
    category: 'First-time buyers',
    title: 'Meticulous, Understandable & Educational',
    text: 'As first-time homebuyers, Darren walked us through the home inspection process with insight, thoughtfulness, and clarity. His report was meticulous and thorough, while also being understandable and educational.'
  },
  {
    name: 'Charmaine Rice',
    time: '11 months ago',
    meta: 'Local Guide • 13 reviews',
    category: 'Condo / Co-op',
    title: 'Accommodated on Short Notice',
    text: 'Reasonable price. Daren was able to accommodate my co-op inspection on fairly short notice. He arrived early and demonstrated professionalism and expertise throughout the entire process. After completing a thorough inspection, he walked me through the entire property.'
  }
];

const filteredReviews = computed(() => {
  if (selectedCategory.value === 'All') return reviews;
  return reviews.filter(r => r.category === selectedCategory.value);
});
</script>

<style scoped>
.reviews-section {
  background: #ffffff;
  padding: 88px 0;
  border-bottom: 1px solid #e5dfd5;
  position: relative;
}

.section-head {
  margin-bottom: 48px;
}

.section-tag {
  display: inline-block;
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.72rem;
  font-weight: 700;
  color: #8c6d46;
  background: #f6f2ec;
  border: 1px solid #dcd4c7;
  padding: 5px 14px;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 14px;
}

.section-title {
  font-family: var(--font-display, 'Fraunces', Georgia, serif);
  font-size: clamp(2rem, 3.4vw, 2.75rem);
  font-weight: 700;
  color: #0c1424;
  line-height: 1.18;
  margin: 0 0 14px 0;
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

.rating-summary-card {
  background: #faf7f2;
  border: 1px solid #e5dfd5;
  border-radius: 12px;
  padding: 28px 36px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.04);
}

@media (min-width: 860px) {
  .rating-summary-card {
    flex-direction: row;
  }
}

.rsc-brand {
  font-family: var(--font-display, 'Fraunces', Georgia, serif);
  font-size: 1.1rem;
  font-weight: 700;
  color: #0c1424;
  margin-bottom: 8px;
  letter-spacing: -0.01em;
}

.rsc-badge {
  display: inline-block;
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.68rem;
  font-weight: 700;
  background: #ffffff;
  color: #059669;
  border: 1px solid #a7f3d0;
  padding: 3px 8px;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.rsc-center {
  display: flex;
  align-items: center;
  gap: 14px;
}

.rsc-score {
  font-family: var(--font-display, 'Fraunces', Georgia, serif);
  font-size: 2.8rem;
  font-weight: 800;
  color: #8c6d46;
  line-height: 1;
}

.rsc-stars {
  color: #8c6d46;
  font-size: 1.35rem;
  letter-spacing: 2px;
}

.rsc-count {
  font-size: 0.88rem;
  color: #64748b;
  font-weight: 600;
}

.btn-review-link {
  display: inline-flex;
  align-items: center;
  background: #0c1424;
  color: #ffffff;
  border: 1px solid #0c1424;
  border-radius: 6px;
  padding: 10px 22px;
  font-weight: 700;
  font-size: 0.88rem;
  text-decoration: none;
  transition: all 0.2s ease;
}

.btn-review-link:hover {
  background: #8c6d46;
  border-color: #8c6d46;
  color: #ffffff;
  transform: translateY(-1px);
}

.review-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin-bottom: 40px;
}

.filter-pill {
  background: #ffffff;
  border: 1px solid #e5dfd5;
  border-radius: 6px;
  padding: 7px 18px;
  font-size: 0.84rem;
  font-weight: 600;
  color: #475569;
  cursor: pointer;
  transition: all 0.2s ease;
}

.filter-pill:hover {
  border-color: #8c6d46;
  color: #0c1424;
}

.filter-pill.active {
  background: #0c1424;
  color: #ffffff;
  border-color: #0c1424;
  font-weight: 700;
}

.reviews-masonry {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 26px;
}

@media (min-width: 640px) {
  .reviews-masonry {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .reviews-masonry {
    grid-template-columns: repeat(3, 1fr);
  }
}

.review-item {
  background: #fbf9f6;
  border: 1px solid #e5dfd5;
  border-radius: 10px;
  padding: 26px;
  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.04);
  display: flex;
  flex-direction: column;
  transition: all 0.25s ease;
}

.review-item:hover {
  transform: translateY(-4px);
  border-color: #8c6d46;
  box-shadow: 0 14px 32px rgba(140, 109, 70, 0.12);
}

.review-item-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 14px;
}

.review-avatar {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: #f6f2ec;
  color: #0c1424;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.15rem;
  flex-shrink: 0;
  border: 1px solid #dcd4c7;
}

.review-author-meta {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.author-name {
  font-size: 0.96rem;
  font-weight: 700;
  color: #0c1424;
}

.author-sub {
  font-size: 0.74rem;
  color: #64748b;
}

.review-topic-tag {
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.65rem;
  font-weight: 700;
  background: #faf7f2;
  color: #8c6d46;
  border: 1px solid #dcd4c7;
  padding: 3px 8px;
  border-radius: 4px;
  text-transform: uppercase;
}

.review-stars-gold {
  color: #8c6d46;
  font-size: 0.95rem;
  letter-spacing: 2px;
  margin-bottom: 12px;
}

.review-quote-title {
  font-family: var(--font-display, 'Fraunces', Georgia, serif);
  font-size: 1.12rem;
  font-weight: 700;
  color: #0c1424;
  margin: 0 0 10px 0;
  line-height: 1.35;
  letter-spacing: -0.01em;
}

.review-quote-text {
  font-family: var(--font-main, 'Plus Jakarta Sans', sans-serif);
  font-size: 0.9rem;
  line-height: 1.65;
  color: #334155;
  margin: 0 0 18px 0;
  flex-grow: 1;
}

.review-verified-badge {
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.7rem;
  font-weight: 700;
  color: #059669;
  text-transform: uppercase;
  margin-top: auto;
  padding-top: 12px;
  border-top: 1px dashed #e5dfd5;
  letter-spacing: 0.04em;
}
</style>

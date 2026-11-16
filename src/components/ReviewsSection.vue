<template>
  <section class="section reviews-section" id="reviews">
    <div class="container">
      <div class="section-header text-center">
        <span class="section-tag">Client Feedback</span>
        <h2 class="section-title">What Long Island &amp; NYC Buyers Say About Daren</h2>
        <p class="section-subtitle">
          Over 98% of our business comes from direct referrals, repeat home buyers, and top local real estate attorneys who demand zero compromises.
        </p>
      </div>

      <div class="reviews-grid">
        <div class="review-card" v-for="(review, idx) in clientReviews" :key="idx">
          <div class="review-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
          <p class="review-text">"{{ review.text }}"</p>
          <div class="review-author">
            <div class="author-avatar">{{ review.initials }}</div>
            <div>
              <strong>{{ review.name }}</strong>
              <span>{{ review.town }} &bull; {{ review.property }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { clientReviews } from '../data/reviewsData.js';
</script>

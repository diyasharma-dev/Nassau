<template>
  <section class="section faq-section" id="faq">
    <div class="container">
      <div class="section-header text-center">
        <span class="section-tag">Got Questions?</span>
        <h2 class="section-title">Frequently Asked Nassau Home Inspection Questions</h2>
        <p class="section-subtitle">
          Everything you need to know about scheduling, pricing, attendance, and termite reports.
        </p>
      </div>

      <div class="faq-accordion-list">
        <div
          v-for="(faq, idx) in faqsData"
          :key="idx"
          class="faq-item"
          :class="{ active: openIndex === idx }"
        >
          <button class="faq-question" @click="toggleFaq(idx)">
            <span>{{ faq.question }}</span>
            <span class="faq-icon">&plus;</span>
          </button>
          <div class="faq-answer">
            <p>{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { faqsData } from '../data/faqsData.js';

const openIndex = ref(0);

const toggleFaq = (idx) => {
  openIndex.value = openIndex.value === idx ? -1 : idx;
};
</script>

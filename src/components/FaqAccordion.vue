<template>
  <section class="section faq-section" id="faq">
    <div class="wrap">
      <!-- Section Head -->
      <div class="section-head text-center">
        <span class="section-tag">Frequently Asked</span>
        <h2 class="section-title">Nassau County Home Inspection Questions</h2>
        <p class="section-sub">
          Direct answers to common questions about buying and inspecting homes in Nassau County.
        </p>
      </div>

      <!-- Interactive FAQ Accordion Container -->
      <div class="faq-container">
        <div
          v-for="(item, idx) in faqs"
          :key="idx"
          class="faq-card"
          :class="{ 'is-open': openIndex === idx }"
        >
          <!-- Clickable Header Button -->
          <button
            type="button"
            class="faq-question-btn"
            :aria-expanded="openIndex === idx"
            @click="toggleFaq(idx)"
          >
            <span class="faq-question-text">{{ item.question }}</span>
            <span class="faq-toggle-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </span>
          </button>

          <!-- Expandable Answer Body with Transition -->
          <transition name="faq-slide">
            <div
              v-show="openIndex === idx"
              class="faq-answer-wrapper"
            >
              <div class="faq-answer-content">
                <p class="faq-answer">
                  {{ item.answer }}
                </p>
              </div>
            </div>
          </transition>
        </div>
      </div>

      <!-- Direct Assistance Footer -->
      <div class="faq-footer-callout text-center">
        <p>Have a question about a specific Nassau County home or property type?</p>
        <a href="tel:7182087092" class="btn btn-call-direct" aria-label="Call Inspector Daren Koniuk at 718-208-7092">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
          <span>Call Inspector Daren Koniuk: (718) 208-7092</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

// By default open the first FAQ so users immediately see content
const openIndex = ref(0);

const toggleFaq = (idx) => {
  if (openIndex.value === idx) {
    openIndex.value = -1; // close if already open
  } else {
    openIndex.value = idx;
  }
};

const faqs = [
  {
    question: "How do you check for abandoned oil tanks in Nassau County?",
    answer: "We inspect basement foundation penetrations for disconnected copper fuel lines, patch marks, and exterior vent/fill pipes that suggest a buried tank on the property."
  },
  {
    question: "When do I receive my Nassau County inspection report?",
    answer: "You will receive your full digital inspection report with detailed color photos the next day."
  },
  {
    question: "Are all built-in kitchen and mechanical appliances tested?",
    answer: "Yes, we test built-in kitchen appliances, heating systems, water heaters, central AC units, and electrical safety disconnects."
  }
];
</script>

<style scoped>
.faq-section {
  background: #fafbfd;
  padding: 80px 0;
  border-bottom: 1.5px solid var(--border-soft, #d8dee6);
}

.section-head {
  margin-bottom: 44px;
}

.section-tag {
  display: inline-block;
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.74rem;
  font-weight: 700;
  color: var(--queens-blue, #0e5a8a);
  background: #e0f2fe;
  padding: 4px 12px;
  border-radius: 9999px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 12px;
}

.section-title {
  font-family: var(--font-display, 'Fraunces', Georgia, serif);
  font-size: clamp(1.8rem, 3.2vw, 2.5rem);
  font-weight: 800;
  color: var(--charcoal-950, #121820);
  line-height: 1.2;
  margin: 0 0 12px 0;
}

.section-sub {
  font-family: var(--font-sans, 'Inter', sans-serif);
  font-size: 1.05rem;
  color: var(--text-secondary, #475569);
  max-width: 720px;
  margin: 0 auto;
  line-height: 1.6;
}

.faq-container {
  max-width: 860px;
  margin: 0 auto 36px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.faq-card {
  background: #ffffff;
  border: 1.5px solid var(--border-soft, #d8dee6);
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(18, 24, 32, 0.03);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  overflow: hidden;
}

.faq-card:hover {
  border-color: var(--queens-blue, #0e5a8a);
}

.faq-card.is-open {
  border-color: var(--queens-blue, #0e5a8a);
  box-shadow: 0 4px 16px rgba(14, 90, 138, 0.08);
}

.faq-question-btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 22px 26px;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  outline: none;
  transition: background-color 0.15s ease;
}

.faq-question-btn:hover {
  background-color: #f8fafc;
}

.faq-question-text {
  font-family: var(--font-display, 'Fraunces', Georgia, serif);
  font-size: 1.15rem;
  font-weight: 800;
  color: var(--charcoal-950, #121820);
  line-height: 1.35;
  flex-grow: 1;
}

.faq-card.is-open .faq-question-text {
  color: var(--queens-blue, #0e5a8a);
}

.faq-toggle-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: #f1f5f9;
  color: var(--text-secondary, #475569);
  flex-shrink: 0;
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.2s ease, color 0.2s ease;
}

.faq-card:hover .faq-toggle-icon {
  background: #e2e8f0;
  color: var(--charcoal-950, #121820);
}

.faq-card.is-open .faq-toggle-icon {
  transform: rotate(180deg);
  background: #e0f2fe;
  color: var(--queens-blue, #0e5a8a);
}

.faq-answer-wrapper {
  overflow: hidden;
}

.faq-answer-content {
  padding: 0 26px 22px 26px;
  border-top: 1px solid #f1f5f9;
}

.faq-answer {
  font-family: var(--font-sans, 'Inter', sans-serif);
  font-size: 0.98rem;
  line-height: 1.7;
  color: var(--text-secondary, #475569);
  margin: 14px 0 0 0;
}

/* Slide Transition */
.faq-slide-enter-active,
.faq-slide-leave-active {
  transition: all 0.25s ease-out;
}

.faq-slide-enter-from,
.faq-slide-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

.faq-footer-callout {
  max-width: 600px;
  margin: 0 auto;
}

.faq-footer-callout p {
  font-size: 0.95rem;
  color: var(--text-secondary, #475569);
  margin-bottom: 14px;
}

.btn-call-direct {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #ffffff;
  color: var(--charcoal-950, #121820);
  border: 1.5px solid var(--border-soft, #d8dee6);
  padding: 10px 22px;
  border-radius: 9999px;
  font-weight: 700;
  font-size: 0.9rem;
  text-decoration: none;
  box-shadow: 0 2px 8px rgba(18, 24, 32, 0.04);
  transition: all 0.2s ease;
}

.btn-call-direct:hover {
  border-color: var(--queens-blue, #0e5a8a);
  color: var(--queens-blue, #0e5a8a);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(14, 90, 138, 0.1);
}
</style>

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

      <!-- Proper Single-Open Interactive FAQ Accordion -->
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
              class="faq-reply-wrapper"
            >
              <div class="faq-reply-box">
                <p class="faq-reply-para">
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

// By default only the first FAQ is open, like a proper professional accordion
const openIndex = ref(0);

const toggleFaq = (idx) => {
  openIndex.value = openIndex.value === idx ? null : idx;
};

const faqs = [
  {
    question: "How do you check for abandoned oil tanks in Nassau County?",
    answer: "We inspect basement foundation penetrations for disconnected copper fuel lines, patch marks in concrete slabs, and exterior vent or fill pipes that indicate an underground storage tank (UST). Every finding is documented with photographs and notes for municipal decommissioning certificates and soil testing."
  },
  {
    question: "When do I receive my Nassau County inspection report?",
    answer: "You will receive your comprehensive digital inspection report with detailed high-resolution color photos, defect severity ratings, and prioritized repair recommendations delivered directly to your inbox the next day."
  },
  {
    question: "Are all built-in kitchen and mechanical appliances tested?",
    answer: "Yes, we test all accessible built-in kitchen appliances (ranges, ovens, dishwashers, microwaves), hydronic boilers, furnaces, domestic water heaters, central AC units, and electrical safety disconnects."
  },
  {
    question: "Is the official NPMA-33 Termite (WDO) Report included?",
    answer: "Yes. As a NYS certified Wood Destroying Organism inspector, Daren Koniuk includes the official lender-required NPMA-33 Termite Inspection Form free of charge with all full residential inspections."
  },
  {
    question: "Can I attend the inspection and walk through the house with Daren?",
    answer: "Yes, we strongly encourage buyers to attend. Daren walks you through every major system, explains shut-off valves, demonstrates equipment operation, answers all questions on site, and highlights maintenance priorities."
  },
  {
    question: "How quickly can we schedule a Nassau County inspection?",
    answer: "HomeStar operates in Nassau County daily, 7 days a week. We offer same-day and next-day inspection slots to ensure you comfortably meet your attorney's pre-contract inspection deadlines."
  }
];
</script>

<style scoped>
.faq-section {
  background: #ffffff;
  padding: 88px 0;
  border-bottom: 1px solid #e5dfd5;
  position: relative;
}

.section-head {
  margin-bottom: 52px;
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

.faq-container {
  max-width: 860px;
  margin: 0 auto 40px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.faq-card {
  background: #faf7f2;
  border: 1px solid #e5dfd5;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.03);
  transition: all 0.25s ease;
  overflow: hidden;
}

.faq-card:hover {
  border-color: #8c6d46;
}

.faq-card.is-open {
  background: #ffffff;
  border-color: #8c6d46;
  box-shadow: 0 8px 24px rgba(140, 109, 70, 0.08);
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
  transition: background-color 0.2s ease;
}

.faq-question-btn:hover {
  background-color: rgba(140, 109, 70, 0.04);
}

.faq-question-text {
  font-family: var(--font-display, 'Fraunces', Georgia, serif);
  font-size: 1.18rem;
  font-weight: 700;
  color: #0c1424;
  line-height: 1.35;
  flex-grow: 1;
  letter-spacing: -0.01em;
}

.faq-card.is-open .faq-question-text {
  color: #8c6d46;
}

.faq-toggle-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: #ffffff;
  border: 1px solid #dcd4c7;
  color: #8c6d46;
  flex-shrink: 0;
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.2s ease, color 0.2s ease;
}

.faq-card:hover .faq-toggle-icon {
  background: #f6f2ec;
}

/* Rotate chevron 180 degrees when open */
.faq-card.is-open .faq-toggle-icon {
  transform: rotate(180deg);
  background: #0c1424;
  border-color: #0c1424;
  color: #ffffff;
}

.faq-reply-wrapper {
  overflow: visible !important;
}

.faq-reply-box {
  padding: 0 26px 22px 26px;
  border-top: 1px solid #f0ebe2;
}

.faq-reply-para {
  font-family: var(--font-main, 'Plus Jakarta Sans', sans-serif);
  font-size: 0.98rem;
  line-height: 1.72;
  color: #334155 !important;
  margin: 16px 0 0 0 !important;
  display: block !important;
  max-height: none !important;
  height: auto !important;
  overflow: visible !important;
  visibility: visible !important;
  opacity: 1 !important;
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
  max-width: 620px;
  margin: 0 auto;
}

.faq-footer-callout p {
  font-family: var(--font-main, 'Plus Jakarta Sans', sans-serif);
  font-size: 0.96rem;
  color: #475569;
  margin-bottom: 16px;
}

.btn-call-direct {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  background: #0c1424;
  color: #ffffff;
  border: 1px solid #0c1424;
  padding: 12px 24px;
  border-radius: 6px;
  font-weight: 700;
  font-size: 0.92rem;
  text-decoration: none;
  box-shadow: 0 2px 8px rgba(12, 20, 36, 0.12);
  transition: all 0.2s ease;
}

.btn-call-direct:hover {
  background: #8c6d46;
  border-color: #8c6d46;
  color: #ffffff;
  transform: translateY(-1px);
}
</style>

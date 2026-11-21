<template>
  <div class="app-root">
    <!-- Top Announcement Bar (Monospace License & 7-Day Contact) -->
    <TopAnnouncement />

    <!-- Site Header & Navigation (Official HomeStar Logo & Wordmark) -->
    <AppHeader @open-modal="handleOpenModal" @open-one-pager="openOnePager" />

    <!-- Main Content Strictly Aligned with Official HomeStar Nassau County Page -->
    <main>
      <!-- Section 1: Hero Section (Official Breadcrumb, Title, Lede & CTA) -->
      <HeroSection 
        @open-modal="handleOpenModal" 
        @open-one-pager="openOnePager"
      />

      <!-- Section 2: 3 Key Pillars (Owner On-Site, Next-Day Report, Free Termite Report) -->
      <MetricsRibbon />

      <!-- Real Client Video Walkthroughs (20+ Years. Verified Clients from Nassau & Queens) -->
      <VideoTestimonials />

      <!-- Section 3: Property Profiles (Common Housing Types in Nassau County) -->
      <NassauHyperlocal />

      <!-- Section 4: Defect Watchlist (Costly Issues We Uncover in Nassau County) -->
      <ReportPreview @open-modal="handleOpenModal" />

      <!-- Section 5: What's Checked (1,700+ Point Inspection Checklist in Nassau County) -->
      <ChecklistExplorer />

      <!-- Section 6: Frequently Asked (Nassau County Home Inspection Questions) -->
      <FaqAccordion />

      <!-- Section 7: Coverage Map (Areas We Inspect in Nassau County - 80 Neighborhoods) -->
      <NassauTowns />

      <!-- Section 8: Verified Client Feedback (Rated 4.9 Stars Across Nassau County) -->
      <ReviewsSection />

      <!-- Section 9: Final CTA Band (Know what you're buying before you buy it) -->
      <BookingSection @open-modal="handleOpenModal" />
    </main>

    <!-- Site Footer -->
    <AppFooter />

    <!-- Mobile Floating Action Bar -->
    <MobileContactBar @open-modal="handleOpenModal" />

    <!-- Floating Luxury One-Pager Pill -->
    <button class="floating-one-pager-pill no-print" @click="openOnePager" title="View Executive 1-Pager Document">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
      <span>Executive 1-Pager</span>
    </button>

    <!-- Executive 1-Pager Modal Sheet -->
    <ExecutiveOnePagerModal
      :is-open="onePagerOpen"
      @close="closeOnePager"
      @open-modal="handleOpenModal"
    />

    <!-- Booking Modal Dialog -->
    <BookingModal
      :is-open="modalOpen"
      :initial-service="selectedModalService"
      :custom-notes="modalNotes"
      @close="closeModal"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Official Components
import TopAnnouncement from './components/TopAnnouncement.vue';
import AppHeader from './components/AppHeader.vue';
import HeroSection from './components/HeroSection.vue';
import MetricsRibbon from './components/MetricsRibbon.vue';
import VideoTestimonials from './components/VideoTestimonials.vue';
import NassauHyperlocal from './components/NassauHyperlocal.vue';
import ReportPreview from './components/ReportPreview.vue';
import ChecklistExplorer from './components/ChecklistExplorer.vue';
import FaqAccordion from './components/FaqAccordion.vue';
import NassauTowns from './components/NassauTowns.vue';
import ReviewsSection from './components/ReviewsSection.vue';
import BookingSection from './components/BookingSection.vue';
import AppFooter from './components/AppFooter.vue';
import MobileContactBar from './components/MobileContactBar.vue';
import BookingModal from './components/BookingModal.vue';
import ExecutiveOnePagerModal from './components/ExecutiveOnePagerModal.vue';

// State
const modalOpen = ref(false);
const onePagerOpen = ref(false);
const selectedModalService = ref('Single Family Home');
const modalNotes = ref('');

const handleOpenModal = (serviceType = 'Single Family Home', notes = '') => {
  selectedModalService.value = serviceType;
  modalNotes.value = notes;
  modalOpen.value = true;
};

const closeModal = () => {
  modalOpen.value = false;
  modalNotes.value = '';
};

const openOnePager = () => {
  onePagerOpen.value = true;
};

const closeOnePager = () => {
  onePagerOpen.value = false;
};
</script>

<style>
/* Global styles imported via main.js */
.app-root {
  overflow-x: hidden;
  width: 100%;
  background-color: var(--bg-body, #fbf9f6);
  color: var(--text-main, #0f172a);
  min-height: 100vh;
}

.floating-one-pager-pill {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 998;
  display: flex;
  align-items: center;
  gap: 8px;
  background: #0c1424;
  color: #ffffff;
  border: 1px solid #8c6d46;
  border-radius: 9999px;
  padding: 10px 18px;
  font-family: var(--font-main, 'Plus Jakarta Sans', sans-serif);
  font-size: 0.82rem;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(12, 20, 36, 0.25);
  transition: all 0.2s ease;
}

.floating-one-pager-pill:hover {
  background: #8c6d46;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(140, 109, 70, 0.35);
}

@media (max-width: 992px) {
  .floating-one-pager-pill {
    bottom: 80px;
    right: 16px;
    padding: 8px 14px;
    font-size: 0.78rem;
  }
}
</style>

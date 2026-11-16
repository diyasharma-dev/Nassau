<template>
  <div class="app-root">
    <!-- Top Announcement Bar (Monospace License & 7-Day Contact) -->
    <TopAnnouncement />

    <!-- Site Header & Navigation (Official HomeStar Logo & Wordmark) -->
    <AppHeader @open-modal="handleOpenModal" />

    <!-- Main Content Strictly Aligned with Official HomeStar Nassau County Page -->
    <main>
      <!-- Section 1: Hero Section (Official Breadcrumb, Title, Lede & CTA) -->
      <HeroSection 
        @open-modal="handleOpenModal" 
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

// State
const modalOpen = ref(false);
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
</script>

<style>
/* Global styles imported via main.js */
.app-root {
  overflow-x: hidden;
  width: 100%;
}
</style>

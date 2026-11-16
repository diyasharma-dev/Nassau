<template>
  <div class="app-root">
    <!-- Top Announcement Bar (Monospace License & 7-Day Contact) -->
    <TopAnnouncement />

    <!-- Site Header & Navigation (Official HomeStar Logo & Wordmark) -->
    <AppHeader @open-modal="handleOpenModal" />

    <!-- Main Content -->
    <main>
      <!-- Hero Section (Full-Bleed Photographic Hero + Instant Quote) -->
      <HeroSection 
        @open-modal="handleOpenModal" 
        @quote-submitted="handleHeroQuote"
      />

      <!-- Metrics / Trust Ribbon with Official Badges & Seals -->
      <MetricsRibbon />

      <!-- Video Walkthrough Testimonials (20+ Years. Mostly Word of Mouth) -->
      <VideoTestimonials />

      <!-- Hyperlocal Nassau Architectural Dossiers (North Shore, Central, Levittown, South Shore) -->
      <NassauHyperlocal />

      <!-- Nassau Town Hall Certificate of Occupancy (CO) Traps & 5-Day Contingency -->
      <LocalChallenges />

      <!-- Costly Serious Defects We Uncover Before You Buy (Real Inspection Photos) -->
      <ReportPreview @open-modal="handleOpenModal" />

      <!-- Over 1,700 Items Inside & Out with Official Cross-Section Systems Diagram -->
      <ChecklistExplorer />

      <!-- Comprehensive Inspection Packages -->
      <ServicesGrid @open-modal="handleOpenModal" />

      <!-- Why Choose Daren Koniuk (Owner Personally Inspects) -->
      <WhyInspector />

      <!-- Nassau Towns & Hamlets Coverage Search -->
      <NassauTowns />

      <!-- Transparent Fee Calculator -->
      <FeeCalculator @open-modal="handleOpenModal" />

      <!-- Verified 5-Star Nassau Customer Reviews -->
      <ReviewsSection />

      <!-- Hyperlocal Nassau FAQs (COs, Termites, 5-Day Contingency) -->
      <FaqAccordion />

      <!-- Direct Scheduling / Booking Section -->
      <BookingSection @booking-submitted="handleFullBooking" />
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

// Components
import TopAnnouncement from './components/TopAnnouncement.vue';
import AppHeader from './components/AppHeader.vue';
import HeroSection from './components/HeroSection.vue';
import MetricsRibbon from './components/MetricsRibbon.vue';
import VideoTestimonials from './components/VideoTestimonials.vue';
import NassauHyperlocal from './components/NassauHyperlocal.vue';
import LocalChallenges from './components/LocalChallenges.vue';
import ReportPreview from './components/ReportPreview.vue';
import ChecklistExplorer from './components/ChecklistExplorer.vue';
import ServicesGrid from './components/ServicesGrid.vue';
import WhyInspector from './components/WhyInspector.vue';
import NassauTowns from './components/NassauTowns.vue';
import FeeCalculator from './components/FeeCalculator.vue';
import ReviewsSection from './components/ReviewsSection.vue';
import FaqAccordion from './components/FaqAccordion.vue';
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

const handleHeroQuote = (quoteData) => {
  handleOpenModal(
    quoteData.propType,
    `Instant Quote: $${quoteData.price} | Town: ${quoteData.town} | SqFt: ${quoteData.sqft} sq ft | Timeframe: ${quoteData.timeline}`
  );
};

const handleFullBooking = (bookingData) => {
  handleOpenModal(
    bookingData.serviceType,
    `Address: ${bookingData.address} | Town: ${bookingData.town || 'Nassau County'} | Date: ${bookingData.date || 'Flexible'}`
  );
};
</script>

<style>
/* Global styles imported via main.js */
</style>

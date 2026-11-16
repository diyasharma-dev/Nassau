<template>
  <div class="app-root">
    <!-- Top Announcement Bar -->
    <TopAnnouncement />

    <!-- Site Header & Navigation -->
    <AppHeader @open-modal="handleOpenModal" />

    <!-- Main Content -->
    <main>
      <!-- Hero Section -->
      <HeroSection 
        @open-modal="handleOpenModal" 
        @quote-submitted="handleHeroQuote"
      />

      <!-- Metrics Proof Ribbon -->
      <MetricsRibbon />

      <!-- Nassau Towns Coverage -->
      <NassauTowns />

      <!-- Nassau Housing Challenges -->
      <LocalChallenges />

      <!-- Inspection Services Grid -->
      <ServicesGrid @open-modal="handleOpenModal" />

      <!-- Interactive 1,700-Point Checklist Explorer -->
      <ChecklistExplorer />

      <!-- Why Choose Daren Koniuk & Comparison Table -->
      <WhyInspector />

      <!-- Instant Fee Calculator -->
      <FeeCalculator @open-modal="handleOpenModal" />

      <!-- Inspection Report Showcase Mockup -->
      <ReportPreview />

      <!-- Client Reviews -->
      <ReviewsSection />

      <!-- Frequently Asked Questions -->
      <FaqAccordion />

      <!-- Direct Booking Section -->
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
import NassauTowns from './components/NassauTowns.vue';
import LocalChallenges from './components/LocalChallenges.vue';
import ServicesGrid from './components/ServicesGrid.vue';
import ChecklistExplorer from './components/ChecklistExplorer.vue';
import WhyInspector from './components/WhyInspector.vue';
import FeeCalculator from './components/FeeCalculator.vue';
import ReportPreview from './components/ReportPreview.vue';
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
  handleOpenModal(quoteData.propType, `Requested timeframe: ${quoteData.timeline} in ${quoteData.town}`);
};

const handleFullBooking = (bookingData) => {
  handleOpenModal(bookingData.serviceType, `Address: ${bookingData.address} | Date: ${bookingData.date || 'Flexible'}`);
};
</script>

<style>
/* Global styles imported via main.js */
</style>

<template>
  <header class="site-header" id="header">
    <div class="container nav-container">
      <a href="#hero" class="brand-logo" aria-label="HomeStar Inspection Services - Nassau County Division">
        <div class="logo-mark">
          <svg viewBox="0 0 40 40" fill="none" class="brand-icon">
            <rect width="40" height="40" rx="10" fill="#0A2540"/>
            <path d="M20 9L9 18H13V30H18V24H22V30H27V18H31L20 9Z" fill="#F59E0B"/>
            <path d="M20 14L22.2 19.5L28 19.8L23.5 23.4L25 29L20 25.8L15 29L16.5 23.4L12 19.8L17.8 19.5L20 14Z" fill="#FFFFFF" opacity="0.9"/>
          </svg>
        </div>
        <div class="logo-text">
          <span class="brand-title">HomeStar <span class="text-gold">Inspections</span></span>
          <span class="brand-sub">Nassau County Division &bull; Long Island, NY</span>
        </div>
      </a>

      <!-- Desktop Nav -->
      <nav class="nav-menu">
        <a href="#coverage" class="nav-link">Nassau Towns</a>
        <a href="#services" class="nav-link">Services</a>
        <a href="#checklist" class="nav-link">1,700-Pt Scope</a>
        <a href="#why-daren" class="nav-link">Why Us</a>
        <a href="#calculator" class="nav-link">Estimator</a>
        <a href="#reviews" class="nav-link">Reviews</a>
        <a href="#faq" class="nav-link">FAQ</a>
      </nav>

      <div class="nav-actions">
        <a href="tel:7182087092" class="btn btn-outline nav-phone-btn">
          <svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
          <span>(718) 208-7092</span>
        </a>
        <button class="btn btn-primary nav-book-btn" @click="$emit('open-modal', 'General Inspection')">
          Book Inspection
        </button>
        <button class="mobile-toggle" @click="toggleMobileMenu" aria-label="Toggle navigation menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>

    <!-- Mobile Navigation Drawer -->
    <transition name="drawer">
      <div v-if="mobileMenuOpen" class="mobile-nav active">
        <a href="#coverage" class="mobile-nav-link" @click="closeMobileMenu">Nassau Towns Covered</a>
        <a href="#services" class="mobile-nav-link" @click="closeMobileMenu">Nassau Inspection Services</a>
        <a href="#checklist" class="mobile-nav-link" @click="closeMobileMenu">1,700-Point Checklist</a>
        <a href="#why-daren" class="mobile-nav-link" @click="closeMobileMenu">Why Daren Koniuk</a>
        <a href="#calculator" class="mobile-nav-link" @click="closeMobileMenu">Instant Nassau Fee Estimator</a>
        <a href="#reviews" class="mobile-nav-link" @click="closeMobileMenu">Client Reviews</a>
        <a href="#faq" class="mobile-nav-link" @click="closeMobileMenu">Common Questions</a>
        <div class="mobile-nav-cta">
          <a href="tel:7182087092" class="btn btn-outline btn-block">Call (718) 208-7092</a>
          <button class="btn btn-primary btn-block" @click="closeAndBook">Book Nassau Inspection</button>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const emit = defineEmits(['open-modal']);
const mobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
};

const closeAndBook = () => {
  mobileMenuOpen.value = false;
  emit('open-modal', 'General Inspection');
};
</script>

<style scoped>
.drawer-enter-active,
.drawer-leave-active {
  transition: all 0.25s ease-out;
}
.drawer-enter-from,
.drawer-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>

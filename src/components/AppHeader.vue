<template>
  <header class="site-header" id="header">
    <div class="wrap header-inner">
      <!-- Brand Logo -->
      <a href="#hero" class="brand-link" aria-label="HomeStar Inspections - Nassau County Division">
        <img
          src="/images/homestar-nassau-logo.svg"
          alt="HomeStar Inspections — Nassau County Division — NYS Licensed #16000009862"
          class="brand-img"
          width="220"
          height="42"
          fetchpriority="high"
        />
      </a>

      <!-- Desktop Navigation Menu (Streamlined 6 Core Links) -->
      <nav class="desktop-nav" aria-label="Primary site navigation">
        <a href="#why-daren" class="nav-item">Why Us</a>
        <a href="#nassau-hyperlocal" class="nav-item">Nassau Eras</a>
        <a href="#nassau-redflags" class="nav-item">6 Red Flags</a>
        <a href="#checklist" class="nav-item">1,700-Pt Scope</a>
        <a href="#nassau-guide" class="nav-item">Playbook</a>
        <a href="#calculator" class="nav-item">Pricing</a>
        <a href="#faq" class="nav-item">FAQ</a>
      </nav>

      <!-- Header Actions: Never Cut Off -->
      <div class="header-actions">
        <!-- Direct Phone Call Button -->
        <a href="tel:7182087092" class="header-call-btn" aria-label="Call Lead Inspector Daren Koniuk directly at 718-208-7092">
          <svg class="phone-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
          <span class="phone-number">718-208-7092</span>
        </a>

        <!-- Primary Booking Button -->
        <button class="header-book-btn" @click="$emit('open-modal', 'Single Family Home')">
          <span>Book Inspection</span>
        </button>

        <!-- Mobile Drawer Hamburger Toggle -->
        <button
          type="button"
          class="nav-toggle-btn"
          aria-label="Toggle navigation menu"
          :aria-expanded="mobileMenuOpen"
          @click="toggleMobileMenu"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round">
            <path v-if="!mobileMenuOpen" d="M3 6h18M3 12h18M3 18h18"/>
            <path v-else d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Drawer Navigation -->
    <transition name="drawer-slide">
      <div v-if="mobileMenuOpen" class="mobile-drawer">
        <nav class="mobile-nav-list">
          <a href="#why-daren" class="m-link" @click="closeMobileMenu">Why Choose Daren Koniuk</a>
          <a href="#nassau-hyperlocal" class="m-link" @click="closeMobileMenu">Nassau Housing Eras &amp; Architecture</a>
          <a href="#nassau-redflags" class="m-link" @click="closeMobileMenu">6 Costly Nassau Red Flags</a>
          <a href="#co-traps" class="m-link" @click="closeMobileMenu">Nassau Town Hall CO Traps</a>
          <a href="#checklist" class="m-link" @click="closeMobileMenu">1,700-Point Inspection Scope</a>
          <a href="#serious-defects" class="m-link" @click="closeMobileMenu">Serious Defects We Uncover</a>
          <a href="#video-reviews" class="m-link" @click="closeMobileMenu">On-Site Client Video Reviews</a>
          <a href="#nassau-guide" class="m-link" @click="closeMobileMenu">Pre-Contract Inspection Playbook</a>
          <a href="#calculator" class="m-link" @click="closeMobileMenu">Nassau Fee Calculator</a>
          <a href="#faq" class="m-link" @click="closeMobileMenu">Frequently Asked Questions</a>
        </nav>
        <div class="mobile-drawer-cta">
          <a href="tel:7182087092" class="btn btn-outline btn-block">
            Call Inspector: (718) 208-7092
          </a>
          <button class="btn btn-primary btn-block" @click="closeAndBook">
            Schedule Nassau Inspection
          </button>
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
  emit('open-modal', 'Single Family Home');
};
</script>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: #ffffff;
  border-bottom: 1.5px solid var(--border-soft, #d8dee6);
  box-shadow: 0 2px 8px rgba(18, 24, 32, 0.04);
  width: 100%;
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 68px;
  gap: 12px;
  padding: 0 16px;
  max-width: 1240px;
  margin: 0 auto;
  box-sizing: border-box;
}

.brand-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  flex-shrink: 0;
}

.brand-img {
  height: 40px;
  width: auto;
  max-width: 220px;
  object-fit: contain;
  display: block;
}

@media (max-width: 540px) {
  .brand-img {
    height: 34px;
    max-width: 175px;
  }
}

.desktop-nav {
  display: none;
  align-items: center;
  gap: 14px;
  white-space: nowrap;
}

.nav-item {
  font-family: var(--font-sans, 'Inter', sans-serif);
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--charcoal-900, #1a222d);
  text-decoration: none;
  padding: 4px 2px;
  position: relative;
  transition: color 0.15s ease;
}

.nav-item:hover {
  color: var(--brick, #d94828);
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  white-space: nowrap;
}

.header-call-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background-color: var(--surface-subtle, #eceef2);
  color: var(--charcoal-950, #121820);
  border: 1.5px solid var(--border-soft, #d8dee6);
  border-radius: 9999px;
  padding: 7px 12px;
  font-family: var(--font-sans, 'Inter', sans-serif);
  font-size: 0.82rem;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.2s ease;
  flex-shrink: 0;
}

.header-call-btn:hover {
  background-color: #ffffff;
  border-color: var(--queens-blue, #0e5a8a);
  color: var(--queens-blue, #0e5a8a);
}

.phone-svg {
  width: 14px;
  height: 14px;
  flex-shrink: 0;
}

.header-book-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: var(--brick, #d94828);
  color: #ffffff;
  border: none;
  border-radius: 9999px;
  padding: 8px 14px;
  font-family: var(--font-sans, 'Inter', sans-serif);
  font-size: 0.82rem;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(217, 72, 40, 0.25);
  transition: all 0.2s ease;
  flex-shrink: 0;
  white-space: nowrap;
}

.header-book-btn:hover {
  background-color: var(--brick-700, #b83619);
  transform: translateY(-1px);
  box-shadow: 0 4px 10px rgba(217, 72, 40, 0.35);
}

.nav-toggle-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: 1.5px solid var(--border-soft, #d8dee6);
  border-radius: 8px;
  padding: 6px;
  color: var(--charcoal-950, #121820);
  cursor: pointer;
  flex-shrink: 0;
}

/* Responsive breakpoint: Only display inline desktop nav when there is plenty of room */
@media (min-width: 1140px) {
  .desktop-nav {
    display: flex;
  }
  .nav-toggle-btn {
    display: none;
  }
}

/* Medium screens: Hide the phone number text on call button so button fits comfortably */
@media (max-width: 820px) {
  .phone-number {
    display: none;
  }
  .header-call-btn {
    padding: 7px 8px;
  }
}

/* Very narrow mobile: Hide call button, show Logo + Book Button + Hamburger */
@media (max-width: 420px) {
  .header-call-btn {
    display: none;
  }
  .header-inner {
    height: 60px;
    padding: 0 10px;
  }
  .header-book-btn {
    padding: 7px 10px;
    font-size: 0.76rem;
  }
}

/* Mobile Drawer */
.mobile-drawer {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: #ffffff;
  border-bottom: 2px solid var(--charcoal-900, #1a222d);
  padding: 20px 24px 28px;
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.15);
  z-index: 999;
}

.mobile-nav-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 20px;
}

.m-link {
  font-family: var(--font-sans, 'Inter', sans-serif);
  font-size: 0.94rem;
  font-weight: 600;
  color: var(--charcoal-950, #121820);
  text-decoration: none;
  padding: 6px 0;
  border-bottom: 1px solid var(--surface-subtle, #eceef2);
}

.mobile-drawer-cta {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.btn-block {
  width: 100%;
  text-align: center;
  justify-content: center;
}

/* Transitions */
.drawer-slide-enter-active,
.drawer-slide-leave-active {
  transition: all 0.25s ease-out;
}

.drawer-slide-enter-from,
.drawer-slide-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>

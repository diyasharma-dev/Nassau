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

      <!-- Desktop Navigation Menu (Matching Official Nassau Page) -->
      <nav class="desktop-nav" aria-label="Primary site navigation">
        <a href="#housing-types" class="nav-item">Housing Types</a>
        <a href="#costly-issues" class="nav-item">Costly Issues</a>
        <a href="#checklist" class="nav-item">1,700-Pt Scope</a>
        <a href="#neighborhoods" class="nav-item">80 Areas</a>
        <a href="#faq" class="nav-item">FAQs</a>
        <a href="#reviews" class="nav-item">Reviews</a>
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
          <a href="#hero" class="m-link" @click="closeMobileMenu">Home</a>
          <a href="#housing-types" class="m-link" @click="closeMobileMenu">Common Housing Types</a>
          <a href="#costly-issues" class="m-link" @click="closeMobileMenu">Costly Issues We Uncover</a>
          <a href="#checklist" class="m-link" @click="closeMobileMenu">1,700+ Point Checklist</a>
          <a href="#video-reviews" class="m-link" @click="closeMobileMenu">On-Site Client Video Reviews</a>
          <a href="#neighborhoods" class="m-link" @click="closeMobileMenu">80 Areas We Inspect</a>
          <a href="#faq" class="m-link" @click="closeMobileMenu">Nassau Inspection Questions</a>
          <a href="#reviews" class="m-link" @click="closeMobileMenu">Google Reviews (4.9 Stars)</a>
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
  background: rgba(255, 255, 255, 0.96);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid #e5dfd5;
  box-shadow: 0 2px 12px rgba(15, 23, 42, 0.04);
  width: 100%;
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 74px;
  gap: 16px;
  padding: 0 24px;
  max-width: 1240px;
  margin: 0 auto;
  box-sizing: border-box;
}

.brand-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  flex-shrink: 0;
  transition: opacity 0.2s ease;
}

.brand-link:hover {
  opacity: 0.88;
}

.brand-img {
  height: 42px;
  width: auto;
  max-width: 230px;
  object-fit: contain;
  display: block;
}

@media (max-width: 540px) {
  .brand-img {
    height: 34px;
    max-width: 180px;
  }
}

.desktop-nav {
  display: none;
  align-items: center;
  gap: 22px;
  white-space: nowrap;
}

.nav-item {
  font-family: var(--font-main, 'Plus Jakarta Sans', sans-serif);
  font-size: 0.88rem;
  font-weight: 600;
  color: #334155;
  text-decoration: none;
  padding: 8px 4px;
  position: relative;
  transition: all 0.2s ease;
  letter-spacing: 0.01em;
}

.nav-item::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: #8c6d46;
  transition: width 0.25s ease;
  border-radius: 2px;
}

.nav-item:hover {
  color: #0c1424;
}

.nav-item:hover::after {
  width: 100%;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
  white-space: nowrap;
}

.header-call-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #fbf9f6;
  color: #0c1424;
  border: 1px solid #dcd4c7;
  border-radius: 6px;
  padding: 9px 16px;
  font-family: var(--font-main, 'Plus Jakarta Sans', sans-serif);
  font-size: 0.86rem;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.2s ease;
  flex-shrink: 0;
}

.header-call-btn:hover {
  background: #f6f2ec;
  border-color: #8c6d46;
  color: #8c6d46;
  transform: translateY(-1px);
}

.phone-svg {
  width: 14px;
  height: 14px;
  flex-shrink: 0;
  color: #8c6d46;
}

.header-book-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #0c1424;
  color: #ffffff;
  border: 1px solid #0c1424;
  border-radius: 6px;
  padding: 10px 22px;
  font-family: var(--font-main, 'Plus Jakarta Sans', sans-serif);
  font-size: 0.86rem;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(12, 20, 36, 0.12);
  transition: all 0.2s ease;
  flex-shrink: 0;
  white-space: nowrap;
  letter-spacing: 0.02em;
}

.header-book-btn:hover {
  background: #8c6d46;
  border-color: #8c6d46;
  color: #ffffff;
  transform: translateY(-1px);
  box-shadow: 0 4px 14px rgba(140, 109, 70, 0.25);
}

.nav-toggle-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f6f2ec;
  border: 1px solid #dcd4c7;
  border-radius: 6px;
  padding: 8px;
  color: #0c1424;
  cursor: pointer;
  flex-shrink: 0;
  transition: all 0.2s ease;
}

.nav-toggle-btn:hover {
  background: #0c1424;
  color: #ffffff;
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
    padding: 8px 10px;
  }
}

/* Very narrow mobile: Hide call button, show Logo + Book Button + Hamburger */
@media (max-width: 420px) {
  .header-call-btn {
    display: none;
  }
  .header-inner {
    height: 62px;
    padding: 0 12px;
  }
  .header-book-btn {
    padding: 7px 12px;
    font-size: 0.78rem;
  }
}

/* Mobile Drawer */
.mobile-drawer {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: #ffffff;
  border-bottom: 1px solid #e5dfd5;
  padding: 24px 24px 32px;
  box-shadow: 0 20px 48px rgba(15, 23, 42, 0.12);
  z-index: 999;
}

.mobile-nav-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 24px;
}

.m-link {
  font-family: var(--font-main, 'Plus Jakarta Sans', sans-serif);
  font-size: 0.96rem;
  font-weight: 600;
  color: #1e293b;
  text-decoration: none;
  padding: 10px 0;
  border-bottom: 1px solid #f1ece4;
  transition: color 0.2s ease;
}

.m-link:hover {
  color: #8c6d46;
  padding-left: 6px;
}

.mobile-drawer-cta {
  display: flex;
  flex-direction: column;
  gap: 12px;
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

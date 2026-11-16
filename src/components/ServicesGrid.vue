<template>
  <section class="section services-section" id="services">
    <div class="container">
      <div class="section-header text-center">
        <span class="section-tag">Comprehensive Inspection Services</span>
        <h2 class="section-title">Tailored Inspections for Every Nassau Property</h2>
        <p class="section-subtitle">
          Whether you are purchasing your first single-family cape, investing in a multi-family property, or closing on a luxury North Shore colonial, we provide rigorous protection.
        </p>
      </div>

      <div class="services-grid">
        <div
          v-for="service in inspectionServices"
          :key="service.id"
          class="service-card"
          :class="{ 'highlighted-service': service.highlight }"
        >
          <!-- Card Image Thumbnail -->
          <div class="service-img-wrapper" v-if="service.image">
            <img :src="service.image" :alt="service.title" class="service-card-img" loading="lazy" />
            <div v-if="service.badge" class="service-badge">{{ service.badge }}</div>
          </div>

          <div class="service-card-body">
            <div class="service-icon">
              <svg v-if="service.icon === 'home'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
              <svg v-else-if="service.icon === 'building'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><line x1="9" y1="22" x2="9" y2="22.01"/><line x1="15" y1="22" x2="15" y2="22.01"/><line x1="9" y1="18" x2="9" y2="18.01"/><line x1="15" y1="18" x2="15" y2="18.01"/><line x1="9" y1="14" x2="9" y2="14.01"/><line x1="15" y1="14" x2="15" y2="14.01"/><line x1="9" y1="10" x2="9" y2="10.01"/><line x1="15" y1="10" x2="15" y2="10.01"/><line x1="9" y1="6" x2="9" y2="6.01"/><line x1="15" y1="6" x2="15" y2="6.01"/>
              </svg>
              <svg v-else-if="service.icon === 'users'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
              <svg v-else-if="service.icon === 'edit'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
              </svg>
              <svg v-else-if="service.icon === 'shield'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/><path d="M12 8v4"/><path d="M12 16h.01"/>
              </svg>
              <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
              </svg>
            </div>
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
            <ul class="service-features">
              <li v-for="(feat, fIdx) in service.features" :key="fIdx">{{ feat }}</li>
            </ul>
            <div class="service-footer">
              <button
                :class="service.highlight ? 'btn btn-primary btn-block' : 'btn btn-outline btn-block'"
                @click="$emit('open-modal', service.intent)"
              >
                {{ service.buttonText }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { inspectionServices } from '../data/servicesData.js';

defineEmits(['open-modal']);
</script>

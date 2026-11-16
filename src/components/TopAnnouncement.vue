<template>
  <aside class="utilbar" aria-label="Official Inspection Credentials">
    <div class="wrap utilbar-inner">
      <div class="utilbar-left">
        <span class="mono-label">
          <span class="hide-mobile">NYS Home Inspector License #16000009862</span>
          <span class="show-mobile">NYS Lic. #16000009862</span>
        </span>
        <span class="utilbar-sep">•</span>
        <span class="mono-label">InterNACHI Certified Professional Inspector</span>
      </div>
      <div class="utilbar-right">
        <span class="utilbar-scope">Serving All 3 Nassau Townships + Long Island Daily</span>
        <span class="utilbar-sep">•</span>
        <a href="tel:7182087092" class="utilbar-phone">Direct Line: 718-208-7092</a>
      </div>
    </div>
  </aside>
</template>

<script setup>
</script>

<style scoped>
.utilbar {
  background: var(--charcoal-950, #121820);
  color: #e2e8f0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 7px 0;
  font-size: 11.5px;
  line-height: 1;
}

.utilbar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
}

.utilbar-left,
.utilbar-right {
  display: flex;
  align-items: center;
  gap: 10px;
}

.mono-label {
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 11px;
  letter-spacing: 0.04em;
  color: #cbd5e1;
  font-weight: 600;
}

.utilbar-sep {
  color: #64748b;
  font-size: 10px;
}

.utilbar-scope {
  color: #94a3b8;
  font-size: 11.5px;
}

.utilbar-phone {
  color: #ffffff;
  font-weight: 700;
  text-decoration: none;
  transition: color 0.2s ease;
}

.utilbar-phone:hover {
  color: var(--hazard-gold, #c9a86a);
}

.show-mobile {
  display: none;
}

@media (max-width: 768px) {
  .hide-mobile {
    display: none;
  }
  .show-mobile {
    display: inline;
  }
  .utilbar-scope {
    display: none;
  }
  .utilbar-inner {
    justify-content: center;
  }
}
</style>

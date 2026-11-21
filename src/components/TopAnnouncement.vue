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
        <span class="utilbar-scope">Serving All 3 Nassau Townships &bull; Official Executive 1-Pager</span>
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
  background: #0c1424;
  color: #cbd5e1;
  border-bottom: 1px solid rgba(229, 223, 213, 0.15);
  padding: 9px 0;
  font-size: 11.5px;
  line-height: 1;
  position: relative;
  z-index: 1001;
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
  gap: 12px;
}

.mono-label {
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 11px;
  letter-spacing: 0.05em;
  color: #cbd5e1;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
}

.utilbar-sep {
  color: var(--bronze, #8c6d46);
  font-size: 10px;
  opacity: 0.8;
}

.utilbar-scope {
  color: #94a3b8;
  font-size: 11.5px;
  letter-spacing: 0.02em;
}

.utilbar-phone {
  color: #c5a880;
  font-weight: 600;
  text-decoration: none;
  letter-spacing: 0.03em;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
}

.utilbar-phone:hover {
  color: #ffffff;
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

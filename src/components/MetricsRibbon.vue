<template>
  <section class="metrics-ribbon">
    <div class="container metrics-grid">
      <div class="metric-card" v-for="(metric, idx) in metrics" :key="idx">
        <span class="metric-number">{{ metric.number }}</span>
        <span class="metric-label">{{ metric.label }}</span>
      </div>
    </div>
  </section>
</template>

<script setup>
const metrics = [
  { number: "1,700+", label: "Individual Points Evaluated Per Home" },
  { number: "20+", label: "Years of Building & Inspection Expertise" },
  { number: "24 Hr", label: "Guaranteed Digital Photo Report Delivery" },
  { number: "$0", label: "Free Termite/WDO Report Included (Single & Multi)" }
];
</script>

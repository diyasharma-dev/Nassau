<template>
  <div v-if="isOpen" class="modal-overlay active" @click="handleBackdropClick">
    <div class="modal-dialog">
      <button class="modal-close-btn" @click="$emit('close')" aria-label="Close dialog">&times;</button>

      <!-- Form State -->
      <div v-if="!isSubmitted">
        <div class="modal-header">
          <h3>Book Your Nassau County Home Inspection</h3>
          <p>Conducted personally by Daren Koniuk (NYS Lic #16000009862)</p>
        </div>

        <form @submit.prevent="submitModal">
          <div class="form-row">
            <div class="form-group">
              <label for="modalName">Your Name *</label>
              <input type="text" id="modalName" v-model="form.name" required placeholder="e.g. Rachel Adams" />
            </div>
            <div class="form-group">
              <label for="modalPhone">Phone Number *</label>
              <input type="tel" id="modalPhone" v-model="form.phone" required placeholder="(516) 000-0000" />
            </div>
          </div>

          <div class="form-group">
            <label for="modalEmail">Email Address *</label>
            <input type="email" id="modalEmail" v-model="form.email" required placeholder="rachel@example.com" />
          </div>

          <div class="form-group">
            <label for="modalPropertyTown">Property Address / Nassau Town *</label>
            <input type="text" id="modalPropertyTown" v-model="form.town" required placeholder="e.g. Garden City, Great Neck, Rockville Centre..." />
          </div>

          <div class="form-row">
            <div class="form-group">
              <label for="modalPropType">Property Type *</label>
              <select id="modalPropType" v-model="form.propType" required>
                <option value="Single Family Home">Single Family Home</option>
                <option value="Condominium">Condominium</option>
                <option value="Cooperative (Co-Op)">Cooperative (Co-Op)</option>
                <option value="2-Family House">2-Family House</option>
                <option value="3-4 Family House">3-4 Family House</option>
                <option value="Commercial / Other">Commercial / Other</option>
              </select>
            </div>
            <div class="form-group">
              <label for="modalTargetDate">Target Inspection Date</label>
              <input type="date" id="modalTargetDate" v-model="form.date" />
            </div>
          </div>

          <div class="form-group" v-if="customNotes">
            <label>Selected Fee / Calculation Notes</label>
            <input type="text" readonly :value="customNotes" style="background: #faf7f2; color: #8c6d46; border: 1px solid #dcd4c7; font-size: 0.85rem;" />
          </div>

          <button type="submit" class="btn btn-primary btn-block submit-modal-btn">
            <span>Submit Request &amp; Get Direct Confirmation</span>
            <svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </button>

          <p class="modal-footer-note">
            Prefer to talk right now? Call Daren at <a href="tel:7182087092" style="color: #8c6d46; text-decoration: underline;"><strong>(718) 208-7092</strong></a>
          </p>
        </form>
      </div>

      <!-- Success Confirmation State -->
      <div v-else class="modal-success-state">
        <div class="success-icon-wrap">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </div>
        <h3>Request Received!</h3>
        <p>
          Thank you, <strong>{{ form.name }}</strong>! Daren Koniuk has received your Nassau inspection details for <strong>{{ form.propType }}</strong> in <strong>{{ form.town }}</strong>. He will call or text you at <strong>{{ form.phone }}</strong> within 30 minutes to confirm your scheduled time and quote.
        </p>
        <button class="btn btn-primary" @click="$emit('close')">Done</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, watch } from 'vue';

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  },
  initialService: {
    type: String,
    default: 'Single Family Home'
  },
  customNotes: {
    type: String,
    default: ''
  }
});

const emit = defineEmits(['close']);

const isSubmitted = ref(false);

const form = reactive({
  name: '',
  phone: '',
  email: '',
  town: '',
  propType: 'Single Family Home',
  date: ''
});

watch(() => props.initialService, (newVal) => {
  if (newVal) {
    if (newVal.includes('Condo') || newVal.includes('Co-Op')) form.propType = 'Condominium';
    else if (newVal.includes('2-Family')) form.propType = '2-Family House';
    else if (newVal.includes('3-4 Family')) form.propType = '3-4 Family House';
    else form.propType = 'Single Family Home';
  }
}, { immediate: true });

watch(() => props.isOpen, (newVal) => {
  if (newVal) {
    isSubmitted.value = false;
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
});

const handleBackdropClick = (e) => {
  if (e.target.classList.contains('modal-overlay')) {
    emit('close');
  }
};

const submitModal = () => {
  isSubmitted.value = true;
};
</script>

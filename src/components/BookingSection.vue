<template>
  <section class="section booking-section" id="book-inspection">
    <div class="container">
      <div class="booking-grid">
        <div class="booking-info">
          <span class="section-tag tag-light">Direct Booking &amp; Fast Response</span>
          <h2 class="section-title text-white">Book Your Nassau County Home Inspection Today</h2>
          <p class="text-white-dim">
            Protect your investment and negotiate with total confidence. Speak directly with Daren Koniuk or reserve your preferred inspection date below.
          </p>

          <div class="direct-contact-blocks">
            <a href="tel:7182087092" class="direct-block">
              <div class="direct-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div>
                <span class="direct-label">Call or Text Daren Directly</span>
                <strong class="direct-val">(718) 208-7092</strong>
                <span class="direct-note">Available 7 Days A Week &bull; 7am - 9pm</span>
              </div>
            </a>

            <a href="mailto:daren@homestarinspectionsny.com" class="direct-block">
              <div class="direct-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div>
                <span class="direct-label">Direct Inspector Email</span>
                <strong class="direct-val">daren@homestarinspectionsny.com</strong>
                <span class="direct-note">Copy sent to dkoniuk@yahoo.com</span>
              </div>
            </a>
          </div>

          <div class="booking-guarantees">
            <div class="bg-item">
              <span class="bg-check">&#10003;</span>
              <span>Next-Day Detailed Photo Report</span>
            </div>
            <div class="bg-item">
              <span class="bg-check">&#10003;</span>
              <span>Free Lender-Approved NPMA-33 Termite Report</span>
            </div>
            <div class="bg-item">
              <span class="bg-check">&#10003;</span>
              <span>100% On-Site Satisfaction Guarantee</span>
            </div>
          </div>
        </div>

        <div class="booking-form-wrapper">
          <div class="booking-form-card">
            <h3>Schedule Nassau Inspection</h3>
            <p>Fill out the details below. We confirm time and fee within 30 minutes.</p>

            <form @submit.prevent="submitBooking">
              <div class="form-row">
                <div class="form-group">
                  <label for="bookName">Full Name *</label>
                  <input type="text" id="bookName" v-model="form.name" required placeholder="John Smith" />
                </div>
                <div class="form-group">
                  <label for="bookPhone">Phone Number *</label>
                  <input type="tel" id="bookPhone" v-model="form.phone" required placeholder="(516) 000-0000" />
                </div>
              </div>

              <div class="form-group">
                <label for="bookEmail">Email Address *</label>
                <input type="email" id="bookEmail" v-model="form.email" required placeholder="john@example.com" />
              </div>

              <div class="form-group">
                <label for="bookAddress">Property Address &amp; Nassau Town *</label>
                <input type="text" id="bookAddress" v-model="form.address" required placeholder="e.g. 25 Hilton Ave, Garden City, NY 11530" />
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="bookServiceType">Service / Property Type *</label>
                  <select id="bookServiceType" v-model="form.serviceType" required>
                    <option value="Single Family Home">Single Family Home</option>
                    <option value="Multi-Family (2-4 Units)">Multi-Family (2-4 Units)</option>
                    <option value="Condominium">Condominium</option>
                    <option value="Cooperative (Co-Op)">Cooperative (Co-Op)</option>
                    <option value="Townhouse">Townhouse</option>
                    <option value="Pre-Listing Inspection">Pre-Listing (Seller) Inspection</option>
                    <option value="11th-Month Warranty">11th-Month Builder Warranty</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="bookDate">Preferred Inspection Date</label>
                  <input type="date" id="bookDate" v-model="form.date" />
                </div>
              </div>

              <div class="form-group">
                <label for="bookNotes">Specific Questions or Areas of Concern (Optional)</label>
                <textarea id="bookNotes" v-model="form.notes" rows="3" placeholder="Tell us if you need special focus on the roof, basement water history, older boiler, etc."></textarea>
              </div>

              <button type="submit" class="btn btn-primary btn-block submit-book-btn">
                <span>Confirm &amp; Request Inspection Slot</span>
                <svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
              </button>

              <div class="booking-security-note">
                <svg class="icon-xs" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
                <span>Your information is strictly private and sent directly to Daren Koniuk.</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue';

const emit = defineEmits(['booking-submitted']);

const form = reactive({
  name: '',
  phone: '',
  email: '',
  address: '',
  serviceType: 'Single Family Home',
  date: '',
  notes: ''
});

const submitBooking = () => {
  emit('booking-submitted', { ...form });
};
</script>

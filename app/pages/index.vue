<template>
  <Transition name="fade-up">
    <div v-if="showPage" class="container mt-10 d-flex flex-column">
      <div class="up d-flex flex-row align-center pa-2 px-4 rounded-lg">
        <v-icon class="hero-icon">mdi-creation-outline</v-icon>
        <span class="hero">CREATIVE DESIGNER & DEVELOPER</span>
      </div>
      <div class="down d-flex flex-row mt-5">
        <div class="left d-flex flex-column">
          <h1 class="hero-title" style="font-size: 7rem; line-height: 8rem; color: #ffffff;">Bringing <br> <span
              class="magic">magic</span>
            to <br> modern web</h1>
          <v-btn append-icon="mdi-arrow-right" rounded="xl" color="black" class="custom-btn mt-5 font-weight-bold">Tell
            me
            more</v-btn>
        </div>
        <div class="right ml-8">
          <img src="@/assets/images/Shirin-mohebi.png" alt="Shirin-Mohebi" class="ocean-image" />
        </div>
      </div>
      <v-divider class="mt-10" color="white"></v-divider>
      <div class="d-flex flex-row mt-10">
        <div class="left" style="width: 40%;">
          <span class="quote">"Designing with <span class="magic">passion</span> makes technology feel alive."</span>
        </div>
        <div class="right" style="width: 60%;">
          <span style="color: #b0b0b0;">specialize in creating soft, meaningful digital solutions. My approach is rooted
            in
            warmth, ensuring that
            every user feels cared for while navigating the interface.
            <br>
            I believe that aesthetics are just as important as logic. A beautiful site is a usable site.</span>
        </div>
      </div>
      <v-divider class="mt-10" color="white"></v-divider>
      <div class="cards-section d-flex flex-row mt-10">
        <v-card class="card card-pink pa-4" rounded="xl">
          <v-card-text class="d-flex flex-column pa-4">
            <h3 class="card-title mb-2">Sweet Journey</h3>
            <p class="card-description mb-6">The story behind the screen.</p>
            <v-btn class="explore-btn align-self-start mt-auto" icon size="45" variant="flat">
              <v-icon size="18" color="#a855f7">mdi-arrow-right</v-icon>
            </v-btn>
          </v-card-text>
        </v-card>
        <v-card class="card card-beige pa-4" rounded="xl">
          <v-card-text class="d-flex flex-column pa-4">
            <h3 class="card-title mb-2">Craftsmanship</h3>
            <p class="card-description mb-6">Expertise built with passion and precision.</p>
            <v-btn class="explore-btn align-self-start mt-auto" icon size="45" variant="flat">
              <v-icon size="18" color="#a855f7">mdi-arrow-right</v-icon>
            </v-btn>
          </v-card-text>
        </v-card>
        <v-card class="card card-mint pa-4" rounded="xl">
          <v-card-text class="d-flex flex-column pa-4">
            <h3 class="card-title mb-2">Let's Chat</h3>
            <p class="card-description mb-6">Available for dreams and discussions.</p>
            <v-btn class="explore-btn align-self-start mt-auto" icon size="45" variant="flat">
              <v-icon size="18" color="#a855f7">mdi-arrow-right</v-icon>
            </v-btn>
          </v-card-text>
        </v-card>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const showPage = ref(false)

onMounted(() => {
  // Wait for layout loading to finish, then show page with transition
  setTimeout(() => {
    showPage.value = true
  }, 1000) // Slightly after layout loading finishes
})
</script>

<style scoped>
/* Fade Up Transition */
.fade-up-enter-active {
  transition: all 0.6s ease-out;
}

.fade-up-leave-active {
  transition: all 0.3s ease-in;
}

.fade-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.fade-up-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.fade-up-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.fade-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.container {
  margin-left: 10rem;
  margin-right: 10rem;
}

.up {
  background-color: rgba(168, 85, 247, 0.1);
  border: 1px solid rgba(168, 85, 247, 0.3);
  width: 29%;
  gap: 5px;
}

.hero {
  font-weight: bold;
  color: #a855f7;
  letter-spacing: 3px;
  font-size: 11px;
}

.hero-icon {
  color: #a855f7;
}

.quote {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: 2rem;
  line-height: 2.5rem;
  color: #ffffff;
}

.custom-btn {
  transition: background-color 0.3s ease;
  width: 40%;
  background-color: #ffffff !important;
  color: #000000 !important;
  border: 1px solid #000000;
}

.custom-btn:hover {
  background-color: #a855f7 !important;
  color: #ffffff !important;
}

.custom-btn :deep(.v-btn__append) {
  transition: transform 0.3s ease;
}

.custom-btn:hover :deep(.v-btn__append) {
  transform: translateX(5px);
}

.right {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ocean-image {
  width: 350px;
  height: 350px;
  border-radius: 50%;
  object-fit: cover;
  animation: floatVertical 4s ease-in-out infinite;
  overflow: hidden;
}

.ocean-image::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60%;
  background: linear-gradient(to bottom, #0d2b3d 0%, #1a4a5c 50%, #0d2b3d 100%);
  border-radius: 0 0 50% 50%;
}

.ocean-image::after {
  content: '';
  position: absolute;
  top: 40%;
  left: 0;
  right: 0;
  height: 20%;
  background: linear-gradient(to bottom,
      rgba(255, 255, 255, 0.9) 0%,
      rgba(255, 255, 255, 0.7) 30%,
      rgba(255, 255, 255, 0.3) 60%,
      transparent 100%);
  border-radius: 50% 50% 0 0;
  transform: translateY(-50%);
}

@keyframes floatVertical {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-15px);
  }
}

.cards-section {
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.card {
  flex: 1;
  min-height: 200px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: rgba(100, 100, 111, 0.35) 0px 10px 40px 0px;
}

.card-pink {
  background-color: rgba(168, 85, 247, 0.15);
  border: 1px solid rgba(168, 85, 247, 0.3);
}

.card-beige {
  background-color: rgba(168, 85, 247, 0.15);
  border: 1px solid rgba(168, 85, 247, 0.3);
}

.card-mint {
  background-color: rgba(168, 85, 247, 0.15);
  border: 1px solid rgba(168, 85, 247, 0.3);
}

.card-title {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: 1.75rem;
  font-weight: bold;
  color: #ffffff;
}

.card-description {
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  color: #b0b0b0;
  flex: 1;
}

.explore-btn {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: #ffffff !important;
}

.explore-btn:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 12px rgba(168, 85, 247, 0.4);
}
</style>
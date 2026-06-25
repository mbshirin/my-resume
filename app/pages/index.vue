<template>
  <Transition name="fade-up">
    <div v-if="showPage" class="container mt-6 mt-md-10 d-flex flex-column">
      <div class="up d-flex flex-row align-center pa-2 px-4 rounded-lg">
        <v-icon class="hero-icon" color="primary">mdi-creation-outline</v-icon>
        <span class="hero">CREATIVE DESIGNER & DEVELOPER</span>
      </div>

      <div class="hero-section d-flex flex-column flex-lg-row mt-5">
        <div class="hero-left d-flex flex-column">
          <h1 class="hero-title hero-headline">
            Bringing <br />
            <span class="magic">ideas</span>
            to life through <br /> code and design
          </h1>
          <v-btn append-icon="mdi-arrow-right" href="/about" rounded="xl" color="black"
            class="custom-btn mt-5 font-weight-bold">
            Tell me more
          </v-btn>
        </div>
        <div class="hero-right d-flex justify-center justify-lg-end mt-8 mt-lg-0">
          <img src="@/assets/images/shirin-mohebi.jpg" alt="Shirin-Mohebi" class="ocean-image" />
        </div>
      </div>

      <v-divider class="mt-8 mt-md-10" color="white" />

      <div class="quote-section d-flex flex-column flex-md-row mt-8 mt-md-10">
        <div class="quote-col">
          <span class="quote">
            "<span class="magic">Great</span> design is not just how it looks — <br /> it's how it feels and works."
          </span>
        </div>
        <div class="desc-col">
          <span class="desc-text text-medium-emphasis">
            I'm Shirin Mohebi, a Frontend Developer passionate about building modern and responsive web applications.

            I specialize in Vue.js and Nuxt.js, focusing on clean code, intuitive user experiences, and interfaces that
            bring ideas to life.
          </span>
        </div>
      </div>

      <v-divider class="mt-8 mt-md-10" color="white" />

      <div class="cards-section d-flex flex-column flex-md-row mt-8 mt-md-10">
        <v-card class="card pa-4" rounded="xl">
          <v-card-text class="d-flex flex-column pa-4">
            <h3 class="card-title mb-2">My Story</h3>
            <p class="card-description text-medium-emphasis mb-6">From curiosity to code — exploring the world of web
              development one project at a time.</p>
          </v-card-text>
        </v-card>
        <v-card class="card pa-4" rounded="xl">
          <v-card-text class="d-flex flex-column pa-4">
            <h3 class="card-title mb-2">Skills & Expertise</h3>
            <p class="card-description text-medium-emphasis mb-6">Building modern interfaces with Vue.js, Nuxt.js,
              JavaScript, and responsive design principles.</p>
          </v-card-text>
        </v-card>
        <v-card class="card pa-4" rounded="xl">
          <v-card-text class="d-flex flex-column pa-4">
            <h3 class="card-title mb-2">Get In Touch</h3>
            <p class="card-description text-medium-emphasis mb-6">Let's collaborate on ideas, projects, or opportunities
              to create something meaningful.</p>
          </v-card-text>
        </v-card>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref } from 'vue'

const showPage = ref(true)
</script>

<style scoped>
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
  padding: 0 10rem;
  max-width: 100%;
  overflow-x: hidden;
}

.up {
  background-color: rgba(var(--v-theme-primary), 0.1);
  border: 1px solid rgba(var(--v-theme-primary), 0.3);
  width: fit-content;
  max-width: 100%;
  gap: 5px;
}

.hero {
  font-weight: bold;
  color: rgb(var(--v-theme-primary));
  letter-spacing: 3px;
  font-size: 11px;
}

.hero-section {
  gap: 2rem;
  align-items: center;
}

.hero-left {
  flex: 1;
  min-width: 0;
}

.hero-right {
  flex: 1;
  min-width: 0;
  max-width: 34%;
}

.hero-headline {
  font-size: 5rem;
  line-height: 8rem;
  color: #ffffff;
}

.quote-section {
  gap: 2rem;
}

.quote-col,
.desc-col {
  width: 100%;
}

.desc-text {
  line-height: 1.7;
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
  width: fit-content;
  min-width: 200px;
  background-color: #ffffff !important;
  color: #000000 !important;
  border: 1px solid #000000;
}

.custom-btn:hover {
  background-color: rgb(var(--v-theme-primary)) !important;
  color: #ffffff !important;
}

.custom-btn :deep(.v-btn__append) {
  transition: transform 0.3s ease;
}

.custom-btn:hover :deep(.v-btn__append) {
  transform: translateX(5px);
}

.ocean-image {
  aspect-ratio: 1;
  border-radius: 50%;
  object-fit: cover;
  animation: floatVertical 4s ease-in-out infinite;
  border: 3px solid rgb(var(--v-theme-primary));
  box-shadow: 0 0 30px rgba(var(--v-theme-primary), 0.6), 0 0 60px rgba(var(--v-theme-primary), 0.3);
  transition: all 0.4s ease;
}

.ocean-image:hover {
  transform: scale(1.05);
  border-color: rgb(var(--v-theme-secondary));
  box-shadow: 0 0 50px rgba(var(--v-theme-primary), 0.8), 0 0 100px rgba(var(--v-theme-primary), 0.5), 0 0 150px rgba(var(--v-theme-primary), 0.3);
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
  background-color: rgba(20, 20, 20, 0.8) !important;
  border: 1px solid rgba(var(--v-theme-primary), 0.3) !important;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-8px);
    border-color: rgba(var(--v-theme-primary), 0.6) !important;
    box-shadow: 0 0 30px rgba(var(--v-theme-primary), 0.4), rgba(100, 100, 111, 0.35) 0px 10px 40px 0px !important;
    background-color: rgba(25, 25, 25, 0.9) !important;
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
  flex: 1;
}

.explore-btn {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: #ffffff !important;
}

.explore-btn:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 12px rgba(var(--v-theme-primary), 0.4);
}

@media (max-width: 1400px) {
  .container {
    padding: 0 6rem;
  }
}

@media (max-width: 1200px) {
  .container {
    padding: 0 4rem;
  }

  .hero-headline {
    font-size: 5rem;
    line-height: 5.5rem;
  }
}

@media (max-width: 960px) {
  .hero-headline {
    font-size: 4rem;
    line-height: 4.5rem;
  }

  .quote {
    font-size: 1.75rem;
    line-height: 2.25rem;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 1.5rem;
  }

  .hero {
    font-size: 10px;
    letter-spacing: 2px;
  }

  .hero-headline {
    font-size: 3rem;
    line-height: 3.5rem;
  }

  .quote {
    font-size: 1.5rem;
    line-height: 2rem;
  }

  .custom-btn {
    width: fit-content;
    min-width: 150px;
    max-width: 220px;
    min-height: 40px;
    padding-inline: 1rem;
    font-size: 0.8rem;
  }

  .ocean-image {
    max-width: 280px;
  }

  .card-title {
    font-size: 1.5rem;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 1rem;
  }

  .hero-headline {
    font-size: 2.5rem;
    line-height: 3rem;
  }

  .quote {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }

  .ocean-image {
    max-width: 220px;
  }
}
</style>

<template>
  <v-app>
    <div v-if="loading" class="loading-overlay d-flex align-center justify-center">
      <v-progress-circular indeterminate color="#a855f7" size="64" width="6"></v-progress-circular>
    </div>
    <div v-else>
      <Header />
      <slot />
      <Footer />
    </div>
  </v-app>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";

const loading = ref(true)

onMounted(() => {
  // Simulate page loading
  setTimeout(() => {
    loading.value = false
  }, 1000)
})
</script>

<style scoped>
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
}
</style>

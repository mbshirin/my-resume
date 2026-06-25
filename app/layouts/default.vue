<template>
  <v-app>
    <v-fade-transition>
      <div v-if="loading" class="loading-overlay d-flex flex-column align-center justify-center ga-4">
        <v-progress-circular indeterminate color="primary" size="64" width="6" />
        <span class="loading-text text-primary font-weight-bold">Loading</span>
      </div>
    </v-fade-transition>
    <div v-show="!loading" class="app-shell">
      <CursorTrail />
      <Header />
      <main class="page-content">
        <slot />
      </main>
      <Footer />
    </div>
  </v-app>
</template>

<script setup>
import { ref, onBeforeUnmount, onMounted } from 'vue'
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";
import CursorTrail from "@/components/layout/CursorTrail.vue";

const loading = ref(true)
const router = useRouter()
let loadingTimer
let removeBeforeEach
let removeAfterEach
let removeOnError

const finishLoading = (delay = 550) => {
  window.clearTimeout(loadingTimer)
  loadingTimer = window.setTimeout(() => {
    loading.value = false
  }, delay)
}

onMounted(() => {
  finishLoading(1000)

  removeBeforeEach = router.beforeEach((to, from) => {
    if (to.fullPath !== from.fullPath) {
      window.clearTimeout(loadingTimer)
      loading.value = true
    }
  })

  removeAfterEach = router.afterEach(() => {
    finishLoading()
  })

  removeOnError = router.onError(() => {
    finishLoading(0)
  })
})

onBeforeUnmount(() => {
  window.clearTimeout(loadingTimer)
  removeBeforeEach?.()
  removeAfterEach?.()
  removeOnError?.()
})
</script>

<style scoped>
.app-shell {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.page-content {
  flex: 1 0 auto;
}

.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  background:
    radial-gradient(circle at center, rgba(var(--v-theme-primary), 0.12), transparent 35%),
    rgba(0, 0, 0, 0.94);
  backdrop-filter: blur(10px);
}

.loading-text {
  letter-spacing: 0.35rem;
  text-transform: uppercase;
  font-size: 0.85rem;
}
</style>

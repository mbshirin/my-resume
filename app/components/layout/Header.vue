<template>
  <div class="header-spacer">
    <header class="glass-header d-flex align-center justify-space-between">
    <NuxtLink to="/" class="logo-link text-decoration-none" @click="handleLogoClick">
      <h1 class="logo ma-0">Shirin</h1>
    </NuxtLink>

    <v-btn
      class="menu-toggle d-md-none"
      icon
      variant="text"
      color="primary"
      :aria-expanded="menuOpen"
      aria-label="Toggle navigation menu"
      @click="menuOpen = !menuOpen"
    >
      <v-icon :icon="menuOpen ? 'mdi-close' : 'mdi-menu'" size="28" />
    </v-btn>

    <nav class="nav-menu d-none d-md-flex align-center" :class="{ 'nav-menu--open': menuOpen }">
      <NuxtLink
        v-for="link in navLinks"
        :key="link.to"
        :to="link.to"
        class="nav-link text-decoration-none font-weight-bold"
        @click="menuOpen = false"
      >
        {{ link.label }}
      </NuxtLink>
    </nav>

    <nav class="nav-menu nav-menu--mobile d-md-none" :class="{ 'nav-menu--open': menuOpen }">
      <NuxtLink
        v-for="link in navLinks"
        :key="link.to"
        :to="link.to"
        class="nav-link text-decoration-none font-weight-bold"
        @click="menuOpen = false"
      >
        {{ link.label }}
      </NuxtLink>
    </nav>
    </header>
  </div>
</template>

<script setup>
const route = useRoute();
const menuOpen = ref(false);

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/resume", label: "Resume" },
  { to: "/contact", label: "Contact" },
];

const handleLogoClick = (e) => {
  menuOpen.value = false;
  if (route.path === "/") {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

watch(
  () => route.path,
  () => {
    menuOpen.value = false;
  },
);
</script>

<style scoped>
.header-spacer {
  height: var(--header-height, 72px);
}

.glass-header {
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(var(--v-theme-primary), 0.2);
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 100;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  flex-wrap: wrap;
  gap: 1rem;
}

.logo-link {
  flex-shrink: 0;
}

.nav-menu {
  gap: 2rem;
}

.nav-menu--mobile {
  display: none;
  flex-direction: column;
  align-items: stretch;
  gap: 0;
  width: 100%;
  order: 3;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(var(--v-theme-primary), 0.15);
}

.nav-menu--mobile.nav-menu--open {
  display: flex;
}

.nav-link {
  color: #ffffff;
  font-size: 14px;
  position: relative;
  white-space: nowrap;
  transition: color 0.3s ease;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: rgb(var(--v-theme-primary));
}

.nav-link.router-link-active::after {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 0;
  right: 0;
  height: 2px;
  background-color: rgb(var(--v-theme-primary));
  box-shadow: 0 0 10px rgba(var(--v-theme-primary), 0.5);
}

@media (max-width: 768px) {
  .header-spacer {
    --header-height: 64px;
  }

  .glass-header {
    padding: 0.875rem 1.25rem;
  }

  .nav-menu--mobile .nav-link {
    padding: 0.875rem 0;
    font-size: 15px;
  }

  .nav-menu--mobile .nav-link.router-link-active::after {
    bottom: 0.5rem;
    left: 0;
    right: auto;
    width: 2rem;
  }
}

@media (max-width: 480px) {
  .header-spacer {
    --header-height: 60px;
  }

  .glass-header {
    padding: 0.75rem 1rem;
  }

  .logo {
    font-size: 1.25rem;
  }
}
</style>

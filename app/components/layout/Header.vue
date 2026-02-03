<template>
  <header class="glass-header">
    <NuxtLink to="/" @click="handleLogoClick" style="text-decoration: none">
      <h1 class="logo">Shirin</h1>
    </NuxtLink>
    <nav class="nav-menu">
      <NuxtLink to="/" class="nav-link">Home</NuxtLink>
      <NuxtLink to="/about" class="nav-link">About</NuxtLink>
      <NuxtLink to="/contact" class="nav-link">Contact</NuxtLink>
      <NuxtLink to="/resume" class="nav-link">Resume</NuxtLink>
    </nav>
  </header>
</template>

<script setup>
const route = useRoute();

const handleLogoClick = (e) => {
  if (route.path === "/") {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};
</script>

<style scoped>
.glass-header {
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(168, 85, 247, 0.2);
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.glass-header h1 {
  margin: 0;
}

.nav-menu {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-link {
  text-decoration: none;
  color: #ffffff;
  transition: opacity 0.3s ease;
  font-weight: bold;
  font-size: 14px;
  position: relative;
}

.nav-link:hover {
  color: #a855f7;
  transition: color 0.3s ease;
}

.nav-link.router-link-active {
  color: #a855f7;
}

.nav-link.router-link-active::after {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 0;
  right: 0;
  height: 2px;
  background-color: #a855f7;
  box-shadow: 0 0 10px rgba(168, 85, 247, 0.5);
}
</style>

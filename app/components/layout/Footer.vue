<template>
  <footer class="footer">
    <div class="footer-content d-flex flex-column flex-sm-row align-center justify-space-between">
      <div class="footer-left d-flex flex-column text-center text-sm-start">
        <span class="footer-text text-medium-emphasis">
          Designed & Developed by Shirin Mohebi
        </span>
        <span class="copyright text-disabled">© 2026 All rights reserved.</span>
      </div>
      <div class="footer-right d-flex flex-row justify-center mt-6 mt-sm-0">
        <v-btn
          v-for="social in socialLinks"
          :key="social.href"
          class="social-icon"
          :href="social.href"
          target="_blank"
          icon
          size="45"
          variant="flat"
        >
          <v-icon size="20" color="primary">{{ social.icon }}</v-icon>
        </v-btn>
      </div>
    </div>
  </footer>
</template>

<script setup>
const socialLinks = [
  { href: "https://www.linkedin.com/in/mbshirin/", icon: "mdi-linkedin" },
  { href: "https://github.com/mbshirin", icon: "mdi-github" },
];
</script>

<style scoped>
.footer {
  padding: 2rem 10rem;
  background-color: #000000;
  border-top: 1px solid rgba(var(--v-theme-primary), 0.2);
}

.footer-content {
  width: 100%;
  gap: 1.5rem;
}

.footer-text {
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.copyright {
  font-size: 0.85rem;
}

.footer-right {
  gap: 1rem;
  flex-shrink: 0;
}

.social-icon {
  background-color: rgba(var(--v-theme-primary), 0.2) !important;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.social-icon:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 12px rgba(var(--v-theme-primary), 0.4);
}

@media (max-width: 1200px) {
  .footer {
    padding: 2rem 4rem;
  }
}

@media (max-width: 768px) {
  .footer {
    padding: 2rem 1.5rem;
  }

  .footer-text {
    font-size: 0.8rem;
    line-height: 1.5;
  }

  .copyright {
    font-size: 0.75rem;
  }
}

@media (max-width: 480px) {
  .footer {
    padding: 1.5rem 1rem;
  }
}
</style>

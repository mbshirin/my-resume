<template>
  <footer class="footer">
    <div
      class="footer-content d-flex flex-row align-center justify-space-between"
    >
      <div class="footer-left d-flex flex-column">
        <span class="footer-text">
          HANDCRAFTED WITH <span class="heart">❤️</span> BY SHIRIN MOHEBBI
        </span>
        <span class="copyright">© 2026 All rights reserved.</span>
      </div>
      <div class="footer-right d-flex flex-row">
        <v-btn
          class="social-icon"
          icon
          size="45"
          variant="flat"
          href="https://www.linkedin.com/in/mbshirin/"
          target="_blank"
        >
          <v-icon size="20" color="#a855f7">mdi-linkedin</v-icon>
        </v-btn>
        <v-btn
          class="social-icon"
          icon
          size="45"
          variant="flat"
          href="https://instagram.com"
          target="_blank"
        >
          <v-icon size="20" color="#a855f7">mdi-instagram</v-icon>
        </v-btn>
        <v-btn
          class="social-icon"
          icon
          size="45"
          variant="flat"
          href="https://github.com/mbshirin"
          target="_blank"
        >
          <v-icon size="20" color="#a855f7">mdi-github</v-icon>
        </v-btn>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: 2rem 10rem;
  background-color: #000000;
  border-top: 1px solid rgba(168, 85, 247, 0.2);
}

.footer-content {
  width: 100%;
}

.footer-text {
  font-family: "Inter", sans-serif;
  font-size: 0.9rem;
  color: #b0b0b0;
  margin-bottom: 0.5rem;
}

.heart {
  color: #a855f7;
}

.copyright {
  font-family: "Inter", sans-serif;
  font-size: 0.85rem;
  color: #808080;
}

.footer-right {
  gap: 1rem;
}

.social-icon {
  background-color: rgba(168, 85, 247, 0.2) !important;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.social-icon:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 12px rgba(168, 85, 247, 0.4);
}
</style>

<template>
    <Transition name="fade-up">
        <div v-if="showPage" class="about-container">
            <div class="about-content d-flex flex-column flex-lg-row">
                <div class="left-section d-flex flex-column">
                    <div class="profile-image-wrapper">
                        <img src="@/assets/images/shirin-mohebi.jpg" alt="Shirin Mohebi" class="profile-image" />
                    </div>
                    <h1 class="profile-name">Shirin Mohebi</h1>
                    <p class="profile-tagline">FRONTEND DEVELOPER</p>
                </div>

                <div class="right-section d-flex flex-column">
                    <div class="greeting-section">
                        <h2 class="greeting">Hello,</h2>
                        <h2 class="greeting purple">I'm Shirin.</h2>
                    </div>

                    <div class="intro-section d-flex flex-column">
                        <p class="intro-text">
                            Frontend Developer with one year of professional experience in designing and developing
                            responsive web applications, specializing in Vue.js and Nuxt.js. Experienced in building
                            reusable components, enhancing user interfaces, and accurately implementing UI/UX designs. A
                            fast learner with the ability to quickly adapt to new tools and technologies when needed.
                            Familiar with leveraging AI-powered tools such as Cursor to accelerate development, improve
                            code quality, debug issues, and solve complex problems efficiently.
                        </p>
                    </div>

                    <div class="boxes-section d-flex flex-column flex-sm-row">
                        <v-card class="info-box" rounded="xl">
                            <v-card-text class="pa-6">
                                <div class="box-header d-flex align-center mb-4">
                                    <v-icon color="primary" size="20" class="mr-2">mdi-rocket-launch-outline</v-icon>
                                    <h3 class="box-title">What Drives Me</h3>
                                </div>
                                <ul class="box-list">
                                    <li class="box-item">Clean UI Design</li>
                                    <li class="box-item">User-Centered Thinking</li>
                                    <li class="box-item">Continuous Learning</li>
                                    <li class="box-item">Attention to Detail</li>
                                </ul>
                            </v-card-text>
                        </v-card>

                        <v-card class="info-box" rounded="xl">
                            <v-card-text class="pa-6">
                                <div class="box-header d-flex align-center mb-4">
                                    <v-icon color="primary" size="20" class="mr-2">mdi-code-braces</v-icon>
                                    <h3 class="box-title">Tech Stack</h3>
                                </div>
                                <div class="box-list-columns d-flex ga-4">
                                    <ul class="box-list flex-grow-1">
                                        <li class="box-item">Vue.js</li>
                                        <li class="box-item">Nuxt.js</li>
                                        <li class="box-item">JavaScript</li>
                                        <li class="box-item">Vuetify</li>
                                        <li class="box-item">Tailwind CSS</li>
                                    </ul>
                                    <ul class="box-list flex-grow-1">
                                        <li class="box-item">HTML/CSS</li>
                                        <li class="box-item">Git</li>
                                        <li class="box-item">TypeScript</li>
                                        <li class="box-item">Bootstrap 5</li>
                                    </ul>
                                </div>
                            </v-card-text>
                        </v-card>
                    </div>
                </div>
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

.about-container {
    padding: 4rem 10rem;
    min-height: calc(100vh - 200px);
    max-width: 100%;
    overflow-x: hidden;
}

.about-content {
    gap: 4rem;
    align-items: flex-start;
}

.left-section {
    flex: 0 0 auto;
    width: 35%;
    align-items: center;
}

.profile-image-wrapper {
    position: relative;
    margin-bottom: 2rem;
}

.profile-image {
    width: 100%;
    max-width: 400px;
    height: auto;
    border-radius: 30px;
    object-fit: cover;
    border: 3px solid rgb(var(--v-theme-primary));
    box-shadow: 0 0 30px rgba(var(--v-theme-primary), 0.6), 0 0 60px rgba(var(--v-theme-primary), 0.3);
    display: block;
    transition: all 0.4s ease;
    cursor: pointer;
}

.profile-image-wrapper:hover .profile-image {
    transform: scale(1.05);
    border-color: rgb(var(--v-theme-secondary));
    box-shadow: 0 0 50px rgba(var(--v-theme-primary), 0.8), 0 0 100px rgba(var(--v-theme-primary), 0.5), 0 0 150px rgba(var(--v-theme-primary), 0.3);
}

.profile-name {
    font-family: 'Playfair Display', serif;
    font-size: 3.5rem;
    font-weight: bold;
    font-style: italic;
    color: #ffffff;
    text-align: center;
    line-height: 1.2;
}

.profile-tagline {
    font-size: 11px;
    color: rgb(var(--v-theme-primary));
    letter-spacing: 2px;
    text-align: center;
    margin: 0;
}

.right-section {
    flex: 1;
    gap: 2.5rem;
}

.greeting-section {
    margin-bottom: 1rem;
}

.greeting {
    font-family: 'Playfair Display', serif;
    font-size: 4.5rem;
    font-weight: bold;
    color: #ffffff;
    margin: 0;
    line-height: 1.1;
}

.greeting.purple {
    color: rgb(var(--v-theme-primary));
    font-weight: bold;
    font-style: italic;
}

.intro-section {
    gap: 1.5rem;
}

.intro-text {
    font-size: 1rem;
    color: #ffffff;
    line-height: 1.7;
    margin: 0;
}

.boxes-section {
    gap: 1.5rem;
    margin-top: 1rem;
}

.info-box {
    flex: 1;
    background-color: rgba(20, 20, 20, 0.8) !important;
    border: 1px solid rgba(var(--v-theme-primary), 0.3) !important;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    min-height: 200px;
    transition: all 0.3s ease;
}

.info-box:hover {
    transform: translateY(-8px);
    border-color: rgba(var(--v-theme-primary), 0.6) !important;
    box-shadow: 0 0 30px rgba(var(--v-theme-primary), 0.4), rgba(100, 100, 111, 0.35) 0px 10px 40px 0px !important;
    background-color: rgba(25, 25, 25, 0.9) !important;
}

.box-title {
    font-size: 0.9rem;
    font-weight: 600;
    color: #ffffff;
    letter-spacing: 1px;
    margin: 0;
}

.box-list-columns {
    width: 100%;
}

.box-list-columns .box-list {
    min-width: 0;
}

.box-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

.box-item {
    font-size: 0.95rem;
    color: #ffffff;
    padding-left: 1.5rem;
    position: relative;
    line-height: 1.6;
}

.box-item::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: rgb(var(--v-theme-primary));
}

@media (max-width: 1200px) {
    .about-container {
        padding: 3rem 4rem;
    }

    .about-content {
        flex-direction: column;
        align-items: center;
        gap: 3rem;
    }

    .left-section {
        width: 100%;
        max-width: 500px;
    }

    .right-section {
        width: 100%;
    }

    .greeting {
        font-size: 3.5rem;
    }
}

@media (max-width: 960px) {
    .about-container {
        padding: 2.5rem 2rem;
    }

    .profile-name {
        font-size: 3rem;
    }

    .greeting {
        font-size: 3rem;
    }

    .boxes-section {
        flex-direction: column;
    }
}

@media (max-width: 768px) {
    .about-container {
        padding: 2rem 1.5rem;
    }

    .profile-name {
        font-size: 2.5rem;
    }

    .greeting {
        font-size: 2.5rem;
    }

    .intro-text {
        font-size: 0.95rem;
    }

    .profile-image {
        max-width: 320px;
    }
}

@media (max-width: 480px) {
    .about-container {
        padding: 1.5rem 1rem;
    }

    .profile-name {
        font-size: 2rem;
    }

    .greeting {
        font-size: 2rem;
    }

    .profile-image {
        max-width: 260px;
    }

    .info-box :deep(.v-card-text) {
        padding: 1.25rem !important;
    }
}
</style>

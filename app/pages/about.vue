<template>
    <Transition name="fade-up">
        <div v-if="showPage" class="about-container">
            <div class="about-content d-flex flex-row">
                <!-- Left Section: Profile -->
                <div class="left-section d-flex flex-column">
                    <div class="profile-image-wrapper">
                        <img src="@/assets/images/shirin-mohebi.jpg" alt="Shirin Mohebi" class="profile-image" />
                    </div>
                    <h1 class="profile-name">Shirin Mohebi</h1>
                    <p class="profile-tagline">DREAMER. DESIGNER. DEVELOPER.</p>
                </div>

                <!-- Right Section: Content -->
                <div class="right-section d-flex flex-column">
                    <div class="greeting-section">
                        <h2 class="greeting">Hello,</h2>
                        <h2 class="greeting purple">Sweetness.</h2>
                    </div>

                    <div class="intro-section">
                        <p class="intro-text">
                            I'm Shirin, a creative soul who believes that technology should be an extension of our
                            emotions. I don't just build websites; I craft digital sanctuaries that shine in the dark.
                        </p>
                        <p class="intro-text">
                            Every project I touch is a blend of logic and love. I find beauty in the contrast and
                            strength in the code. My goal is to make the web a more beautiful and intuitive place, one
                            glowing pixel at a time.
                        </p>
                    </div>

                    <div class="boxes-section d-flex flex-row">
                        <!-- VIBE CHECK Box -->
                        <v-card class="info-box" rounded="xl">
                            <v-card-text class="pa-6">
                                <div class="box-header d-flex align-center mb-4">
                                    <v-icon color="#a855f7" size="20" class="mr-2">mdi-star</v-icon>
                                    <h3 class="box-title">VIBE CHECK</h3>
                                </div>
                                <ul class="box-list">
                                    <li class="box-item">Bold Aesthetics</li>
                                    <li class="box-item">Human-First UX</li>
                                    <li class="box-item">Future Explorer</li>
                                    <li class="box-item">Quality Obsessed</li>
                                </ul>
                            </v-card-text>
                        </v-card>

                        <!-- DAILY FUEL Box -->
                        <v-card class="info-box" rounded="xl">
                            <v-card-text class="pa-6">
                                <div class="box-header d-flex align-center mb-4">
                                    <v-icon color="#a855f7" size="20" class="mr-2">mdi-coffee</v-icon>
                                    <h3 class="box-title">DAILY FUEL</h3>
                                </div>
                                <ul class="box-list">
                                    <li class="box-item">Hot Caramel Lattes</li>
                                    <li class="box-item">Retrowave Beats</li>
                                    <li class="box-item">Minimalist Interiors</li>
                                    <li class="box-item">Modern Typography</li>
                                </ul>
                            </v-card-text>
                        </v-card>
                    </div>
                </div>
            </div>
        </div>
    </Transition>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const showPage = ref(false)

onMounted(() => {
    setTimeout(() => {
        showPage.value = true
    }, 1000)
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

.about-container {
    padding: 4rem 10rem;
    min-height: calc(100vh - 200px);
}

.about-content {
    gap: 4rem;
    align-items: flex-start;
}

/* Left Section */
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
    border: 3px solid #a855f7;
    box-shadow: 0 0 30px rgba(168, 85, 247, 0.6), 0 0 60px rgba(168, 85, 247, 0.3);
    display: block;
    transition: all 0.4s ease;
    cursor: pointer;
}

.profile-image-wrapper:hover .profile-image {
    transform: scale(1.05);
    border-color: #c084fc;
    box-shadow: 0 0 50px rgba(168, 85, 247, 0.8), 0 0 100px rgba(168, 85, 247, 0.5), 0 0 150px rgba(168, 85, 247, 0.3);
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
    font-family: 'Inter', sans-serif;
    font-size: 11px;
    color: #a855f7;
    letter-spacing: 2px;
    text-align: center;
    margin: 0;
}

/* Right Section */
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
    color: #a855f7;
    font-weight: bold;
    font-style: italic;
}

.intro-section {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.intro-text {
    font-family: 'Inter', sans-serif;
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
    border: 1px solid rgba(168, 85, 247, 0.3) !important;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    min-height: 200px;
    transition: all 0.3s ease;
    cursor: pointer;
}

.info-box:hover {
    transform: translateY(-8px);
    border-color: rgba(168, 85, 247, 0.6) !important;
    box-shadow: 0 0 30px rgba(168, 85, 247, 0.4), rgba(100, 100, 111, 0.35) 0px 10px 40px 0px;
    background-color: rgba(25, 25, 25, 0.9) !important;
}

.box-header {
    margin-bottom: 1rem;
}

.box-title {
    font-family: 'Inter', sans-serif;
    font-size: 0.9rem;
    font-weight: 600;
    color: #ffffff;
    letter-spacing: 1px;
    margin: 0;
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
    font-family: 'Inter', sans-serif;
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
    background-color: #a855f7;
}

/* Responsive adjustments */
@media (max-width: 1400px) {
    .about-container {
        padding: 3rem 6rem;
    }
}

@media (max-width: 1200px) {
    .about-content {
        flex-direction: column;
        align-items: center;
    }

    .left-section {
        width: 100%;
        max-width: 500px;
    }

    .right-section {
        width: 100%;
    }

    .boxes-section {
        flex-direction: column;
    }
}

@media (max-width: 768px) {
    .about-container {
        padding: 2rem 2rem;
    }

    .profile-name {
        font-size: 2.5rem;
    }

    .greeting {
        font-size: 3rem;
    }
}
</style>

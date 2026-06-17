<template>
    <Transition name="fade-up">
        <div v-if="showPage" class="contact-container">
            <div class="d-flex flex-column mb-8 mb-md-12">
                <h1 class="contact-title text-white font-weight-bold">Contact.</h1>
                <p class="contact-subtitle font-italic mt-1">
                    Open to opportunities, collaborations, and meaningful conversations.
                </p>
            </div>

            <div class="contact-content d-flex flex-column ga-6">
                    <v-card class="contact-card" rounded="xl">
                        <v-card-text class="pa-6">
                            <div class="d-flex align-center mb-4">
                                <v-icon color="primary" size="20" class="mr-2">mdi-hand-wave</v-icon>
                                <h3 class="card-heading">Let's Connect</h3>
                            </div>
                            <p class="text-body-2 text-medium-emphasis mb-0">
                                Whether you have a project in mind, a job opportunity, or just want to say hello —
                                I'd love to hear from you. I typically respond within 1–2 business days.
                            </p>
                        </v-card-text>
                    </v-card>

                    <v-card
                        v-for="item in contactInfo"
                        :key="item.label"
                        class="contact-card"
                        rounded="xl"
                        :href="item.href"
                        :tag="item.href ? 'a' : 'div'"
                        :target="item.external ? '_blank' : undefined"
                        :rel="item.external ? 'noopener noreferrer' : undefined"
                        :class="{ 'contact-card--link': item.href }"
                    >
                        <v-card-text class="pa-6 d-flex align-center">
                            <v-avatar color="primary" variant="tonal" size="48" class="mr-4 flex-shrink-0">
                                <v-icon color="primary">{{ item.icon }}</v-icon>
                            </v-avatar>
                            <div class="min-width-0 flex-grow-1">
                                <span class="text-caption text-medium-emphasis d-block mb-1">{{ item.label }}</span>
                                <span class="text-body-1 text-white font-weight-medium contact-value">{{ item.value }}</span>
                            </div>
                            <v-btn
                                v-if="item.copyable"
                                icon
                                variant="text"
                                size="small"
                                color="primary"
                                class="copy-btn ml-auto flex-shrink-0"
                                :aria-label="copiedLabel === item.label ? 'Email copied' : 'Copy email address'"
                                @click.stop="copyText(item.value, item.label)"
                            >
                                <v-icon size="18">
                                    {{ copiedLabel === item.label ? 'mdi-check' : 'mdi-content-copy' }}
                                </v-icon>
                            </v-btn>
                            <v-icon
                                v-else-if="item.href"
                                color="primary"
                                size="18"
                                class="ml-auto flex-shrink-0"
                            >
                                mdi-arrow-top-right
                            </v-icon>
                        </v-card-text>
                    </v-card>

                    <v-card class="contact-card" rounded="xl">
                        <v-card-text class="pa-6">
                            <div class="d-flex align-center mb-4">
                                <v-icon color="primary" size="20" class="mr-2">mdi-share-variant-outline</v-icon>
                                <h3 class="card-heading">Social</h3>
                            </div>
                            <div class="d-flex ga-3">
                                <v-btn
                                    v-for="social in socialLinks"
                                    :key="social.href"
                                    :href="social.href"
                                    target="_blank"
                                    icon
                                    size="45"
                                    variant="flat"
                                    class="social-btn"
                                >
                                    <v-icon size="20" color="primary">{{ social.icon }}</v-icon>
                                </v-btn>
                            </div>
                        </v-card-text>
                    </v-card>
            </div>
        </div>
    </Transition>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const CONTACT_EMAIL = 'mbshirin01@gmail.com'

const showPage = ref(false)
const copiedLabel = ref(null)

const contactInfo = [
    {
        label: 'Email',
        value: CONTACT_EMAIL,
        icon: 'mdi-email-outline',
        copyable: true,
    },
    {
        label: 'Location',
        value: 'Yazd, Iran',
        icon: 'mdi-map-marker-outline',
    },
    {
        label: 'LinkedIn',
        value: 'linkedin.com/in/mbshirin',
        icon: 'mdi-linkedin',
        href: 'https://www.linkedin.com/in/mbshirin/',
        external: true,
    },
]

const socialLinks = [
    { href: 'https://www.linkedin.com/in/mbshirin/', icon: 'mdi-linkedin' },
    { href: 'https://github.com/mbshirin', icon: 'mdi-github' },
]

const copyText = async (text, label) => {
    try {
        await navigator.clipboard.writeText(text)
        copiedLabel.value = label
        setTimeout(() => {
            if (copiedLabel.value === label) {
                copiedLabel.value = null
            }
        }, 2000)
    } catch {
        const textarea = document.createElement('textarea')
        textarea.value = text
        document.body.appendChild(textarea)
        textarea.select()
        document.execCommand('copy')
        document.body.removeChild(textarea)
        copiedLabel.value = label
        setTimeout(() => {
            if (copiedLabel.value === label) {
                copiedLabel.value = null
            }
        }, 2000)
    }
}

onMounted(() => {
    setTimeout(() => {
        showPage.value = true
    }, 1000)
})
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

.contact-container {
    padding: 4rem 10rem;
    min-height: calc(100vh - 200px);
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
    overflow-x: hidden;
}

.contact-title {
    font-family: 'Playfair Display', serif;
    font-size: 4.5rem;
    line-height: 1.1;
    font-style: italic;
}

.contact-subtitle {
    font-size: 1rem;
    color: rgb(var(--v-theme-primary));
}

.contact-content {
    max-width: 640px;
}

.contact-card {
    background-color: rgba(20, 20, 20, 0.8) !important;
    border: 1px solid rgba(var(--v-theme-primary), 0.3) !important;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transition: all 0.3s ease;
}

.contact-card--link {
    text-decoration: none;
    cursor: pointer;
}

.contact-card--link:hover {
    transform: translateY(-4px);
    border-color: rgba(var(--v-theme-primary), 0.6) !important;
    box-shadow: 0 0 30px rgba(var(--v-theme-primary), 0.4), rgba(100, 100, 111, 0.35) 0px 10px 40px 0px;
    background-color: rgba(25, 25, 25, 0.9) !important;
}

.card-heading {
    font-size: 0.9rem;
    font-weight: 600;
    color: #ffffff;
    letter-spacing: 1px;
    margin: 0;
}

.contact-value {
    word-break: break-word;
}

.copy-btn {
    opacity: 0.85;
}

.copy-btn:hover {
    opacity: 1;
}

.social-btn {
    background-color: rgba(var(--v-theme-primary), 0.2) !important;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.social-btn:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 12px rgba(var(--v-theme-primary), 0.4);
}

@media (max-width: 1400px) {
    .contact-container {
        padding: 3rem 6rem;
    }
}

@media (max-width: 1200px) {
    .contact-container {
        padding: 3rem 4rem;
    }

    .contact-title {
        font-size: 3.5rem;
    }
}

@media (max-width: 960px) {
    .contact-content {
        max-width: 100%;
    }
}

@media (max-width: 768px) {
    .contact-container {
        padding: 2rem 1.5rem;
    }

    .contact-title {
        font-size: 2.75rem;
    }
}

@media (max-width: 480px) {
    .contact-container {
        padding: 1.5rem 1rem;
    }

    .contact-title {
        font-size: 2.25rem;
    }
}
</style>

<template>
    <Transition name="fade-up">
        <div v-if="showPage" class="resume-container">
            <div class="d-flex flex-column flex-sm-row align-sm-center justify-space-between mb-8 mb-md-12 ga-4">
                <div class="d-flex flex-column">
                    <h1 class="resume-title text-white font-weight-bold">Resume</h1>
                    <p class="resume-subtitle font-italic mt-1">Frontend development journey and professional growth.</p>
                </div>
            </div>

            <div class="section-wrapper">
                <div class="d-flex align-center mb-6">
                    <v-icon color="primary" size="24" class="mr-3">mdi-office-building</v-icon>
                    <h2 class="section-title text-white font-weight-bold">Career History</h2>
                </div>
                <v-timeline
                    side="end"
                    align="start"
                    density="comfortable"
                    dot-color="primary"
                    line-color="primary"
                    class="career-timeline"
                >
                    <v-timeline-item v-for="(entry, i) in careerHistory" :key="i" size="small">
                        <div
                            class="timeline-content timeline-item-anim"
                            :style="{ '--anim-order': i }"
                        >
                            <span class="text-caption text-medium-emphasis">{{ entry.period }}</span>
                            <h3 class="text-h5 text-white font-weight-bold mt-1 mb-1">{{ entry.role }}</h3>
                            <p v-if="entry.company" class="text-body-2 text-medium-emphasis mb-2">{{ entry.company }}</p>
                            <ul v-if="entry.highlights?.length" class="timeline-highlights mb-0">
                                <li
                                    v-for="(item, j) in entry.highlights"
                                    :key="j"
                                    class="text-body-2 text-medium-emphasis"
                                >
                                    {{ item }}
                                </li>
                            </ul>
                            <p v-else class="text-body-2 text-medium-emphasis mb-0">{{ entry.description }}</p>
                        </div>
                    </v-timeline-item>
                </v-timeline>
            </div>

            <div class="section-wrapper">
                <div class="d-flex align-center mb-6">
                    <v-icon color="primary" size="24" class="mr-3">mdi-flash</v-icon>
                    <h2 class="section-title text-white font-weight-bold">Core Expertise</h2>
                </div>
                <div class="d-flex flex-wrap ga-3">
                    <v-chip
                        v-for="skill in skills"
                        :key="skill"
                        class="expertise-chip"
                        variant="outlined"
                        color="primary"
                        size="large"
                        rounded="lg"
                    >
                        {{ skill }}
                    </v-chip>
                </div>
            </div>

            <div class="section-wrapper">
                <div class="d-flex align-center mb-6">
                    <v-icon color="primary" size="24" class="mr-3">mdi-school</v-icon>
                    <h2 class="section-title text-white font-weight-bold">Education</h2>
                </div>
                <v-row>
                    <v-col v-for="edu in education" :key="edu.degree" cols="12">
                        <v-card class="education-card" elevation="0" rounded="xl">
                            <v-card-text class="pa-5">
                                <span class="text-caption text-medium-emphasis d-block mb-2">{{ edu.period }}</span>
                                <h3 class="text-h6 text-white font-weight-bold mb-2">{{ edu.degree }}</h3>
                                <p class="text-body-2 text-medium-emphasis mb-3">{{ edu.institution }}</p>
                                <ul v-if="edu.highlights?.length" class="timeline-highlights mb-0">
                                    <li
                                        v-for="(item, j) in edu.highlights"
                                        :key="j"
                                        class="text-body-2 text-medium-emphasis"
                                    >
                                        {{ item }}
                                    </li>
                                </ul>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </div>
        </div>
    </Transition>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const showPage = ref(false)

const careerHistory = ref([
    {
        period: 'Jun 2025 — Present',
        role: 'Frontend Developer',
        company: 'Taamito · Yazd, Iran',
        highlights: [
            'Developing modern web applications using Vue.js, Nuxt.js, Vuetify, and WordPress.',
            'Building reusable components and improving UI architecture for maintainability and scalability.',
            'Creating responsive interfaces optimized for different devices and screen sizes.',
            'Collaborating on bug fixing, code optimization, and frontend quality improvements.',
            'Designing logos and visual content using Canva for digital products and marketing materials.',
            'Leveraging AI-powered tools such as Cursor to accelerate development, debug issues, review code, and improve productivity.',
        ],
    },
    {
        period: 'Jul 2024 — Sep 2024',
        role: 'Frontend Developer Intern',
        company: 'Paliz Communication Technologies · Tehran, Iran',
        highlights: [
            'Gained hands-on experience developing web pages using HTML, CSS, and JavaScript.',
            'Assisted in UI implementation and learned industry-standard development workflows.',
            'Collaborated with team members on frontend tasks and web projects.',
        ],
    },
])

const skills = ref([
    'Vue.js',
    'Nuxt.js',
    'JavaScript',
    'HTML5',
    'CSS3',
    'Vuetify',
    'WordPress',
    'Git',
    'Responsive Design',
    'REST APIs',
    'Canva',
    'Cursor AI',
])

const education = ref([
    {
        period: '2020 — 2024',
        degree: 'B.Sc. in Computer Engineering (Software)',
        institution: 'University of Yazd · Yazd, Iran',
        highlights: [
            'Member of the Scientific Association of the Faculty of Computer Engineering.',
            'Teaching Assistant for Data Structures course for three academic semesters.',
        ],
    },
])

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

.resume-container {
    padding: 4rem 10rem;
    min-height: calc(100vh - 200px);
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
    overflow-x: hidden;
}

.resume-title {
    font-family: 'Playfair Display', serif;
    font-size: 4.5rem;
    line-height: 1.1;
    font-style: italic;
}

.resume-subtitle {
    font-size: 1rem;
    color: rgb(var(--v-theme-primary));
}

.save-resume-btn {
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 1px;
    transition: background-color 0.3s ease, color 0.3s ease;
    width: 100%;
    max-width: 280px;
}

@media (min-width: 600px) {
    .save-resume-btn {
        width: auto;
        max-width: none;
    }
}

.save-resume-btn:hover {
    background-color: #ffffff !important;
    color: #000000 !important;
}

.section-wrapper {
    margin-bottom: 4rem;
}

.career-timeline :deep(.v-timeline-divider__dot) {
    box-shadow: 0 0 30px rgba(var(--v-theme-primary), 0.6), 0 0 60px rgba(var(--v-theme-primary), 0.3);
    background-color: #ffffff1f !important;
}

.section-title {
    font-size: 1.5rem;
}

.timeline-content {
    min-width: 0;
}

.timeline-highlights {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.timeline-highlights li {
    padding-left: 1.25rem;
    position: relative;
    line-height: 1.6;
}

.timeline-highlights li::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.55em;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: rgb(var(--v-theme-primary));
}

.timeline-item-anim {
    opacity: 0;
    animation: timeline-fade-up 0.6s ease-out forwards;
    animation-delay: calc(var(--anim-order) * 0.15s);
}

@keyframes timeline-fade-up {
    from {
        opacity: 0;
        transform: translateY(24px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.education-card {
    background-color: rgba(20, 20, 20, 0.8) !important;
    border: 1px solid rgba(var(--v-theme-primary), 0.3) !important;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px !important;
    transition: all 0.3s ease;
    min-height: 160px;
}

.education-card:hover {
    transform: translateY(-8px);
    border-color: rgba(var(--v-theme-primary), 0.6) !important;
    box-shadow: 0 0 30px rgba(var(--v-theme-primary), 0.4), rgba(100, 100, 111, 0.35) 0px 10px 40px 0px !important;
    background-color: rgba(25, 25, 25, 0.9) !important;
}

@media (max-width: 1400px) {
    .resume-container {
        padding: 3rem 6rem;
    }
}

@media (max-width: 1200px) {
    .resume-container {
        padding: 3rem 4rem;
    }

    .resume-title {
        font-size: 3.5rem;
    }
}

@media (max-width: 768px) {
    .resume-container {
        padding: 2rem 1.5rem;
    }

    .resume-title {
        font-size: 2.75rem;
    }

    .section-title {
        font-size: 1.25rem;
    }

    .section-wrapper {
        margin-bottom: 3rem;
    }

    .career-timeline :deep(.v-timeline-item__body) {
        padding-inline-start: 0 !important;
    }

    .career-timeline :deep(.v-timeline-divider) {
        min-width: 24px;
    }

    .career-timeline :deep(.text-h5) {
        font-size: 1.15rem !important;
    }
}

@media (max-width: 480px) {
    .resume-container {
        padding: 1.5rem 1rem;
    }

    .resume-title {
        font-size: 2.25rem;
    }
}
</style>

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

            <v-row class="resume-cards">
                <v-col cols="12" md="6">
                    <v-card class="resume-card h-100" elevation="0" rounded="xl">
                        <v-card-text class="pa-6">
                            <div class="d-flex align-center mb-5">
                                <v-icon color="primary" size="26" class="mr-3">mdi-code-tags</v-icon>
                                <h2 class="card-title text-white font-weight-bold">Technical Skills</h2>
                            </div>
                            <v-row>
                                <v-col
                                    v-for="group in technicalSkills"
                                    :key="group.title"
                                    cols="12"
                                    sm="6"
                                >
                                    <h3 class="skill-group-title text-primary mb-2">{{ group.title }}</h3>
                                    <ul class="card-list">
                                        <li
                                            v-for="item in group.items"
                                            :key="item"
                                            class="text-body-2 text-medium-emphasis"
                                        >
                                            {{ item }}
                                        </li>
                                    </ul>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>
                </v-col>

                <v-col cols="12" md="6">
                    <v-card class="resume-card h-100" elevation="0" rounded="xl">
                        <v-card-text class="pa-6">
                            <div class="d-flex align-center mb-5">
                                <v-icon color="primary" size="26" class="mr-3">mdi-account-heart-outline</v-icon>
                                <h2 class="card-title text-white font-weight-bold">Soft Skills</h2>
                            </div>
                            <div class="d-flex flex-column ga-4">
                                <div
                                    v-for="skill in softSkills"
                                    :key="skill.name"
                                    class="skill-progress"
                                >
                                    <div class="d-flex justify-space-between mb-2">
                                        <span class="text-body-2 text-white">{{ skill.name }}</span>
                                        <span class="text-caption text-medium-emphasis">{{ skill.value }}%</span>
                                    </div>
                                    <v-progress-linear
                                        :model-value="skill.value"
                                        color="primary"
                                        bg-color="surface"
                                        height="8"
                                        rounded
                                    />
                                </div>
                            </div>
                        </v-card-text>
                    </v-card>
                </v-col>

                <v-col cols="12" md="6">
                    <v-card class="resume-card h-100" elevation="0" rounded="xl">
                        <v-card-text class="pa-6">
                            <div class="d-flex align-center mb-5">
                                <v-icon color="primary" size="26" class="mr-3">mdi-translate</v-icon>
                                <h2 class="card-title text-white font-weight-bold">Languages</h2>
                            </div>
                            <div class="d-flex flex-column ga-5">
                                <div
                                    v-for="language in languages"
                                    :key="language.name"
                                    class="language-item"
                                >
                                    <div class="d-flex justify-space-between align-start mb-2">
                                        <div>
                                            <h3 class="text-white text-body-1 font-weight-bold">{{ language.name }}</h3>
                                            <p class="text-caption text-medium-emphasis mb-0">{{ language.level }}</p>
                                        </div>
                                        <span class="text-caption text-primary">{{ language.value }}%</span>
                                    </div>
                                    <v-progress-linear
                                        :model-value="language.value"
                                        color="primary"
                                        bg-color="surface"
                                        height="8"
                                        rounded
                                    />
                                </div>
                            </div>
                        </v-card-text>
                    </v-card>
                </v-col>

                <v-col cols="12" md="6">
                    <v-card class="resume-card mbti-card h-100" elevation="0" rounded="xl">
                        <v-card-text class="pa-6">
                            <div class="d-flex align-center mb-5">
                                <v-icon color="primary" size="26" class="mr-3">mdi-account-outline</v-icon>
                                <h2 class="card-title text-white font-weight-bold">MBTI Personality Type</h2>
                            </div>
                            <div class="d-flex flex-column flex-sm-row align-center ga-5">
                                <v-avatar class="mbti-avatar" size="112">
                                    <v-icon color="primary" size="70">mdi-account-tie</v-icon>
                                </v-avatar>
                                <div>
                                    <p class="mbti-type text-primary font-weight-bold mb-1">{{ mbti.type }}</p>
                                    <h3 class="text-white text-h6 font-weight-bold mb-3">{{ mbti.title }}</h3>
                                    <p class="text-body-2 text-medium-emphasis mb-4">{{ mbti.description }}</p>
                                    <div class="d-flex flex-wrap ga-2">
                                        <v-chip
                                            v-for="trait in mbti.traits"
                                            :key="trait"
                                            color="primary"
                                            variant="outlined"
                                            size="small"
                                            rounded="lg"
                                        >
                                            {{ trait }}
                                        </v-chip>
                                    </div>
                                </div>
                            </div>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </div>
    </Transition>
</template>

<script setup>
import { ref } from 'vue'

const showPage = ref(true)

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

const technicalSkills = ref([
    {
        title: 'Programming',
        items: ['JavaScript (ES6+)', 'TypeScript (Basic)', 'HTML5 / CSS3'],
    },
    {
        title: 'Frontend',
        items: ['Vue.js', 'Nuxt.js', 'Vuetify', 'Responsive Design'],
    },
    {
        title: 'Tools & Platforms',
        items: ['Git / GitHub', 'WordPress', 'REST APIs', 'Canva'],
    },
    {
        title: 'AI & Productivity',
        items: ['Cursor AI', 'ChatGPT', 'AI-Assisted Debugging', 'Prompt Engineering'],
    },
])

const softSkills = ref([
    { name: 'Problem Solving', value: 85 },
    { name: 'Communication', value: 78 },
    { name: 'Team Collaboration', value: 88 },
    { name: 'Time Management', value: 82 },
    { name: 'Adaptability', value: 84 },
    { name: 'Attention to Detail', value: 86 },
])

const languages = ref([
    { name: 'Persian (Farsi)', level: 'Native', value: 100 },
    { name: 'English', level: 'Intermediate', value: 50 },
])

const mbti = ref({
    type: 'ESTJ',
    title: 'The Executive',
    description:
        'Organized, practical, and decisive. I value clear structure, reliable execution, team accountability, and turning plans into measurable progress.',
    traits: ['Organized', 'Decisive', 'Practical', 'Responsible', 'Leadership', 'Structured Planning'],
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

.resume-cards {
    margin-bottom: 4rem;
}

.resume-card {
    background-color: rgba(20, 20, 20, 0.8) !important;
    border: 1px solid rgba(var(--v-theme-primary), 0.3) !important;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px !important;
    transition: all 0.3s ease;
    overflow: hidden;
}

.resume-card:hover {
    transform: translateY(-8px);
    border-color: rgba(var(--v-theme-primary), 0.6) !important;
    box-shadow: 0 0 30px rgba(var(--v-theme-primary), 0.4), rgba(100, 100, 111, 0.35) 0px 10px 40px 0px !important;
    background-color: rgba(25, 25, 25, 0.9) !important;
}

.card-title {
    font-size: 1.25rem;
}

.skill-group-title {
    font-size: 0.95rem;
}

.card-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.45rem;
}

.card-list li {
    padding-left: 1rem;
    position: relative;
}

.card-list li::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.55em;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: rgb(var(--v-theme-primary));
}

.skill-progress :deep(.v-progress-linear),
.language-item :deep(.v-progress-linear) {
    box-shadow: 0 0 18px rgba(var(--v-theme-primary), 0.25);
}

.mbti-card {
    position: relative;
}

.mbti-card::before {
    content: '';
    position: absolute;
    inset: auto auto -40px -40px;
    width: 160px;
    height: 160px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(var(--v-theme-primary), 0.25), transparent 70%);
}

.mbti-avatar {
    border: 1px solid rgba(var(--v-theme-primary), 0.5);
    background-color: rgba(var(--v-theme-primary), 0.08);
    box-shadow: 0 0 35px rgba(var(--v-theme-primary), 0.3);
    flex: 0 0 auto;
}

.mbti-type {
    font-size: 2rem;
    line-height: 1;
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

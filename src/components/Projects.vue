<script setup>
import { computed, ref } from 'vue'
import { reveal as vReveal } from '../directives/reveal.js'

const props = defineProps({
  // [{ title, context, summary, stack: [], categories: [], image?, link? }]
    projects: { type: Array, required: true },
    title: { type: String, default: 'Projects' },
})

const query = ref('')
const category = ref('')

// Filter options come from the data, so adding a category in profile.js is enough.
const categories = computed(() => [...new Set(props.projects.flatMap((p) => p.categories ?? []))])

// Search (title or tech stack) and category filter work together.
const filteredProjects = computed(() => {
    const q = query.value.trim().toLowerCase()
    return props.projects.filter((p) => {
        const inCategory = !category.value || p.categories?.includes(category.value)
        const matches = !q || [p.title, ...(p.stack ?? [])].join(' ').toLowerCase().includes(q)
        return inCategory && matches
    })
})
</script>

<template>
    <div class="mx-auto max-w-7xl px-6">
        <h2 class="mb-8 text-center font-display text-6xl">{{ title }}</h2>

        <!-- Search + category filter -->
        <div class="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <input
            v-model="query"
            type="search"
            placeholder="Search projects"
            aria-label="Search projects"
            class="w-full rounded-md border border-line bg-transparent px-3 py-2 placeholder:text-muted/60 sm:max-w-xs"
        />
        <select
            v-model="category"
            aria-label="Filter by category"
            class="w-full rounded-md border border-line bg-paper px-3 py-2 sm:w-auto">
            <option value="">All projects</option>
            <option v-for="c in categories" :key="c" :value="c">{{ c }}</option>
        </select>
        </div>

        <!-- Project cards -->
        <div v-if="filteredProjects.length" class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <article
            v-for="(project, i) in filteredProjects"
            :key="project.title"
            class="card overflow-hidden rounded-md border border-line"
            :style="{ animationDelay: `${(i % 3) * 100}ms` }"
            v-reveal
        >
            <img
            v-if="project.image"
            :src="project.image"
            :alt="`${project.title} screenshot`"
            loading="lazy"
            class="aspect-video w-full object-cover"
            
            />
            <div class="flex flex-1 flex-col p-5">
            <p class="text-sm text-muted">{{ project.context }}</p>
            <h3 class="mt-1 text-xl font-semibold">
                <a
                v-if="project.link"
                :href="project.link"
                target="_blank"
                rel="noopener"
                class="underline decoration-line underline-offset-4 hover:decoration-alt"
                >{{ project.title }}</a>
                <span v-else>{{ project.title }}</span>
            </h3>
            <p class="mt-3 text-muted">{{ project.summary }}</p>
            <button class="btn" @click="(e) => e.target.nextElementSibling.showModal()">Learn More...</button>
            <dialog class="modal">
                <div class="modal-box">
                    <h3 class="text-lg font-bold">{{ project.title }}</h3>
                    <ul class="list-disc pl-5 py-4 space-y-2">
                        <li v-for="(desc, index) in project.description" :key="index">
                            {{ desc }}
                        </li>
                    </ul>
                    <div class="modal-action">
                        <form method="dialog">
                            <!-- A form with method="dialog" automatically closes the dialog -->
                            <button class="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
            <ul class="mt-auto flex flex-wrap gap-2 pt-5">
                <li
                v-for="tag in project.stack"
                :key="tag"
                class="rounded-md border border-line px-2.5 py-1 text-sm hover:border-alt hover:text-alt motion-safe:transition motion-safe:duration-100 motion-safe:hover:-translate-y-0.5"
                >
                {{ tag }}
                </li>
            </ul>
            </div>
        </article>
        </div>

        <p v-else class="text-center text-muted">No projects match your search.</p>
    </div>
</template>



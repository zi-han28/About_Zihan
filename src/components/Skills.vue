<script setup>
defineProps({
    skills: { type: Array, required: true }, // [{ group: 'Frontend', items: ['React', ...] }]
})
</script>

<template>
    <section id="skills" class="mx-auto max-w-5xl scroll-mt-20 px-6 py-10">
        <h2 class="mb-8 font-display text-3xl">My Current Skills...</h2>

        <div class="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        <div
            v-for="(skill, i) in skills"
            :key="skill.group"
            class="list__item border-t border-line pt-4"
            :style="{ animationDelay: `${i * 100}ms` }">
            <h3 class="mb-4 text-sm text-muted">{{ skill.group }}</h3>
            <ul class="flex flex-wrap gap-2">
            <li
                v-for="item in skill.items"
                :key="item"
                class="rounded-md border border-line px-2.5 py-1 text-sm hover:border-accent hover:text-accent motion-safe:transition motion-safe:duration-100 motion-safe:hover:-translate-y-0.5"
            >
                {{ item }}
            </li>
            </ul>
        </div>
        </div>
    </section>
</template>
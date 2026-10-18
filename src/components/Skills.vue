<script setup>
import { reveal as vReveal } from '../directives/reveal.js'
import { ref } from 'vue'


defineProps({
    skills: { type: Array, required: true },
})
</script>

<template>
    <section class=" mx-auto max-w-7xl px-6 ">
        <h2 class="mb-8 font-display text-6xl text-center">My Current Skills...</h2>

        <div class="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        <div
            v-for="(skill, i) in skills"
            :key="skill.group"
            class="list__item pt-4"
            :style="{ animationDelay: `${i * 100}ms` }"
            v-reveal>
            <img
                :src="skill.photo"
                :alt="`${skill.group} icon`"
                class="aspect-4/5 w-full rounded-md object-contain h-48 sm:w-80 sm:h-64 md:w-96 md:h-80"
                />
            <h3 class="mb-4 text-[30px] text-muted">{{ skill.group }}</h3>
            <ul class="flex flex-wrap gap-2">
            <li
                v-for="item in skill.items"
                :key="item"
                class="rounded-md border px-2.5 py-1 text-sm hover:border-alt hover:text-alt motion-safe:transition motion-safe:duration-100 motion-safe:hover:-translate-y-0.5"
            >
                {{ item }}
            </li>
            </ul>
            <p class="mt-3 text-lg text-muted leading-relaxed">{{ skill.information }}</p>
        </div>
        </div>
    </section>
</template>
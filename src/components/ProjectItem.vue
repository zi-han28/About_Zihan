<script setup>
defineProps({
  project: { type: Object, required: true },
})
</script>

<template>
  <article class="grid gap-2 border-t border-line py-6 sm:grid-cols-[10rem_1fr] sm:gap-8">
    <p class="text-sm text-muted">{{ project.context }}</p>
    <div>
      <h3 class="text-lg font-semibold">
        <a
          v-if="project.link"
          :href="project.link"
          class="underline decoration-line underline-offset-4 hover:decoration-accent"
        >{{ project.title }}</a>
        <span v-else>{{ project.title }}</span>
      </h3>
      <p class="mt-2 max-w-prose text-muted">{{ project.summary }}</p>
      <p class="mt-2 text-sm">{{ project.stack.join(', ') }}</p>
    </div>
  </article>
</template>

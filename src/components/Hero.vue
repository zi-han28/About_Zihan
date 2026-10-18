<script setup>
import { ref } from 'vue'


defineProps({
  name: { type: String, required: true },
  role: { type: String, default: '' },
  introTeaser: { type: String, default: '' },
  intro: { type: String, default: '' }, // full text shown in the dialog
  photo: { type: String, default: '' }, // e.g. '/images/me.jpg' (put the file in public/images/)
})

const dialog = ref(null)

function openDialog() {
  dialog.value?.showModal()
}

function closeDialog() {
  dialog.value?.close()
}

// The dialog has no padding, so a click whose target is the dialog itself is a backdrop click.
function onDialogClick(e) {
  if (e.target === dialog.value) closeDialog()
}
</script>

<template>
  <section class="flex min-h-[calc(100svh-5rem)] items-center pt-12">
    <div class="flex w-full flex-col items-start gap-10 lg:flex-row-reverse lg:items-center lg:justify-between">
      <!-- Picture: on top on mobile, on the right from lg up -->
      <div v-if="photo" class="w-40 shrink-0 sm:w-56">
        <img
          :src="photo"
          :alt="`Portrait of ${name}`"
          class="aspect-4/5 w-full rounded-md border border-line object-cover"
        />
      </div>

      <div class="min-w-0">
        <h1 class="font-display text-6xl leading-none sm:text-8xl">{{ name }}</h1>
        <p class="mt-5 text-xl text-alt">{{ role }}</p>
        <p class="mt-4 text-lg text-muted">
          {{intro}}
        </p>
      </div>
    </div>
  </section>
</template>
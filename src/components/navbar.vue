<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

defineProps({
    title: { type: String, required: true },
    links: { type: Array, required: true }, // [{ label, href }]
    resumeHref: { type: String, default: '' },
})

const menuOpen = ref(false)
const hidden = ref(false)
let lastY = 0

function closeMenu() {
    menuOpen.value = false
}

// Hide the bar when scrolling down, show it when scrolling up.
// It stays visible near the top of the page and while the mobile menu is open.
function onScroll() {
    const y = window.scrollY
    hidden.value = !menuOpen.value && y > lastY && y > 80
    lastY = y
}

function onKeydown(e) {
    if (e.key === 'Escape') closeMenu()
}

onMounted(() => {
    lastY = window.scrollY
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
    window.removeEventListener('scroll', onScroll)
    window.removeEventListener('keydown', onKeydown)
})
</script>

<template>
    <header
        class="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur motion-safe:transition-transform motion-safe:duration-200": 
        class="hidden ? '-translate-y-full' : 'translate-y-0'">
        <div class="mx-auto flex h-20 max-w-3xl items-center justify-between px-6">
            <a href="#top" class="font-display text-xl">{{ title }}</a>

            <!-- Desktop links -->
            <nav aria-label="Primary" class="hidden items-center gap-8 md:flex">
                <a v-for="link in links" :key="link.href" :href="link.href" class="text-muted hover:text-accent">
                    {{ link.label }}
                </a>
            <a
                v-if="resumeHref"
                :href="resumeHref"
                download
                class="rounded-md border-2 border-accent px-5 py-1 text-accent hover:bg-accent hover:text-paper">Resume</a>
            </nav>

            <!-- Burger button (mobile) -->
            <button
                type="button"
                class="-mr-2 p-2 text-ink hover:text-accent md:hidden"
                aria-label="Menu"
                aria-controls="mobile-menu"
                :aria-expanded="menuOpen"
                @click="menuOpen = !menuOpen">

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="36" height="36" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round">
                    <path v-if="!menuOpen" d="M3 8h24M3 15h24M3 22h24" />
                    <path v-else d="M6 6l18 18M24 6L6 24" />
                </svg>
            </button>
        </div>
    </header>

    <!-- Mobile menu -->
    <div v-if="menuOpen" class="md:hidden">
        <div class="fixed inset-x-0 top-20 bottom-0 z-40 bg-ink/30" @click="closeMenu"></div>
        <nav
        id="mobile-menu"
        aria-label="Mobile"
        class="fixed top-20 right-0 bottom-0 z-40 flex w-[70%] flex-col items-center justify-center gap-8 bg-paper text-lg">
        <a v-for="link in links" :key="link.href" :href="link.href" class="hover:text-accent" @click="closeMenu">
            {{ link.label }}
        </a>
        <a
            v-if="resumeHref"
            :href="resumeHref"
            download
            class="rounded-md border-2 border-accent px-5 py-1 text-accent hover:bg-accent hover:text-paper"
            @click="closeMenu"
        >Resume</a>
        </nav>
    </div>
</template>
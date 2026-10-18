<script setup>
defineProps({
    name: { type: String, required: true },
    year: { type: Number, required: true },
    contact: {type: String, required: true},
})
</script>

<template>
    <footer id="contact" class="w-full mt-12 py-8 bg-navbar border-t-2 border-alt/50">
        <div class="mx-auto max-w-5xl px-6">
        <h2 class="mb-4 font-display text-3xl text-center">Contact</h2>

                <!-- Contact list -->
        <ul class="mt-8 space-y-2 text-center">
            <li v-for="item in contact" :key="item.label">
            <span class="text-muted">{{ item.label }}: </span>
            <a :href="item.href" class="underline decoration-line underline-offset-4 hover:decoration-alt">{{ item.text }}</a>
            </li>
        </ul>

        <!-- Social icons -->
        <ul class="mx-auto flex flex-row justify-center gap-8 mt-4">
            <li>
            <a href="https://github.com/zi-han28" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <svg class="fill-ink hover:fill-alt transition-colors" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="40px">
                <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3C22,6.1,16.9,1.4,10.9,2.1z"/>
                </svg>
            </a>
            </li>
            <li>
            <a href="mailto:xu_zihan@outlook.com" aria-label="Email">
                <svg class="fill-ink hover:fill-alt transition-colors" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="40px">
                <path d="M20,4H4C2.897,4,2,4.897,2,6v12c0,1.103,0.897,2,2,2h16c1.103,0,2-0.897,2-2V6C22,4.897,21.103,4,20,4z M20,6v0.511l-8,6.213L4,6.511V6H20z M4,18V8.044l7.386,5.736c0.36,0.28,0.868,0.28,1.228,0L20,8.044V18H4z"/>
                </svg>
            </a>
            </li>
        </ul>

        <!-- Signature -->
        <p class="w-full mx-auto mt-4 text-center text-muted select-none">
            Built by Xu Zihan <span class="hover:text-alt">&copy; {{ year }}</span>
            <br>Hosted by <span class="text-alt">AWS S3 free tier.</span>
        </p>
        </div>
    </footer>
</template>
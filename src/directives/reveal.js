let observer

function getObserver() {
    if (observer) return observer

    observer = new IntersectionObserver(
        (entries) => {
        for (const entry of entries) {
            if (!entry.isIntersecting) continue
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target) // animate once, then stop watching
        }
        },
        { threshold: 0.15, rootMargin: '0px 0px -10% 0px' },
    )

    return observer
    }

    export const reveal = {
    mounted(el) {
        // Without IntersectionObserver support the content simply stays visible.
        if (!('IntersectionObserver' in window)) return

        el.classList.add('reveal')
        getObserver().observe(el)
    },
    unmounted(el) {
        observer?.unobserve(el)
    },
}
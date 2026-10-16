<script setup>
import profile from './data/profile.js'
import ProjectItem from './components/ProjectItem.vue'
import Navbar from './components/navbar.vue'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]
const year = new Date().getFullYear()

</script>

<template>
  <Navbar :title="profile.title" :links="links" resumeHref="/resume.pdf"/>
  <div class="mx-auto max-w-3xl px-6 pb-20">

    <main id="top">
      <section class="pt-16 pb-20">
        <h1 class="font-display text-6xl leading-none sm:text-8xl">{{ profile.name }}</h1>
        <p class="mt-5 text-xl text-accent">{{ profile.role }}</p>
        <p class="mt-4 max-w-xl text-lg text-muted">{{ profile.intro }}</p>
      </section>


      <section id="skills" class="py-10">
        <h2 class="mb-6 font-display text-3xl">Skills</h2>
        <dl class="border-b border-line">
          <div
            v-for="group in profile.skills"
            :key="group.group"
            class="grid gap-1 border-t border-line py-4 sm:grid-cols-[10rem_1fr] sm:gap-8"
          >
            <dt class="text-sm text-muted">{{ group.group }}</dt>
            <dd>{{ group.items.join(', ') }}</dd>
          </div>
        </dl>
      </section>

      <section id="projects" class="py-10">
        <h2 class="mb-6 font-display text-3xl">Projects</h2>
        <div class="border-b border-line">
          <ProjectItem v-for="project in profile.projects" :key="project.title" :project="project" />
        </div>
      </section>

      <section id="contact" class="py-10">
        <h2 class="mb-4 font-display text-3xl">Contact</h2>
        <ul class="space-y-2">
          <li v-for="item in profile.contact" :key="item.label">
            <span class="text-muted">{{ item.label }}: </span>
            <a :href="item.href" class="underline decoration-line underline-offset-4 hover:decoration-accent">{{ item.text }}</a>
          </li>
        </ul>
      </section>
    </main>

    <footer class="pt-10 text-sm text-muted">&copy; {{ year }} {{ profile.name }}</footer>
  </div>
</template>

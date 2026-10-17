<script setup>
import profile from './data/profile.js'
import ProjectItem from './components/ProjectItem.vue'
import Navbar from './components/navbar.vue'
import Hero from './components/Hero.vue'
import Skills from './components/Skills.vue'

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
  <div class="mx-auto">
    <main id="top">
      <section id="about" class=" mx-auto max-w-5xl px-6 pb-5">
        <Hero
              :name="profile.name"
              :role="profile.role"
              :teaser="profile.introTeaser"
              :intro="profile.intro"
            />
      </section>
  
      <section id="skills" class="py-10 max-w-3xl">
        <Skills :skills="profile.skills" />
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
            <a :href="item.href" class="underline decoration-line underline-offset-4 hover:decoration-alt">{{ item.text }}</a>
          </li>
        </ul>
      </section>
    </main>

    <footer class="pt-10 text-sm text-muted">&copy; {{ year }} {{ profile.name }}</footer>
  </div>
</template>

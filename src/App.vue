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
      <section class="pt-16 pb-20 card">
        <h1 class="font-display text-6xl leading-none sm:text-8xl">{{ profile.name }}</h1>
        <p class="mt-5 text-xl text-alt">{{ profile.role }}</p>
        <p class="mt-4 max-w-xl text-lg text-muted">{{ profile.introTeaser}}
          <button class="btn btn-link" onclick="my_modal_1.showModal()">More...</button>
        </p>
        <dialog id="my_modal_1" class="modal">
          <div class="modal-box">
            <p class="py-4">{{ profile.intro }}</p>
            <div class="modal-action">
              <form method="dialog">
                <button class="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>

      </section>

      <section id="skills" class="py-10">
        <h2 class="mb-6 font-display text-3xl">Skills</h2>
        <dl class="border-b border-line">
          <div
            v-for="(group, i) in profile.skills"
            :key="group.group"
            class="list__item grid gap-1 border-t border-line py-4 sm:grid-cols-[10rem_1fr] sm:gap-8"
            :style="{ animationDelay: `${i * 100}ms` }"
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
            <a :href="item.href" class="underline decoration-line underline-offset-4 hover:decoration-alt">{{ item.text }}</a>
          </li>
        </ul>
      </section>
    </main>

    <footer class="pt-10 text-sm text-muted">&copy; {{ year }} {{ profile.name }}</footer>
  </div>
</template>

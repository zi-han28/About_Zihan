<script setup>
import profile from './data/profile.js'
import Projects from './components/Projects.vue'
import Navbar from './components/navbar.vue'
import Hero from './components/Hero.vue'
import Skills from './components/Skills.vue'
import Footer from './components/Footer.vue'



const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]
const year = new Date().getFullYear()
</script>

<template>
  <Navbar :title="profile.title" :links="links" resumeHref="/Resume_Xu_Zihan.pdf"/>
  <div class="mx-auto" >
    <main id="top">
      <section id="about" class=" mx-auto max-w-5xl px-6 pb-5">
        <Hero
              :name="profile.name"
              :role="profile.role"
              :teaser="profile.introTeaser"
              :intro="profile.intro"
            />
      </section>
  
      <section id="skills" class="section__break" >
        <Skills :skills="profile.skills"/>
      </section>

      <section id="projects" class="section__break">
        <Projects :projects="profile.projects" />
      </section>
    </main>

    <Footer id="contact" :name="profile.name" :year="year" :contact="profile.contact" />
  </div>
</template>

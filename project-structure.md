# Workspace Structure

Files listed in .gitignore will be excluded.

## Project Info
- Name: personal-site
- Version: 0.1.0
- Description: No description provided

## Configuration Files

### package.json
```
{
  "name": "personal-site",
  "private": true,
  "version": "0.1.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "vue": "^3.5.0"
  },
  "devDependencies": {
    "@tailwindcss/vite": "^4.1.0",
    "@vitejs/plugin-vue": "^6.0.0",
    "daisyui": "^5.7.50",
    "tailwindcss": "^4.1.0",
    "vite": "^7.0.0"
  }
}

```

## File Structure

- 📄 Proile.js
- 📄 README.md
- 📄 index.html
- 📄 package-lock.json
- 📄 package.json
- 📄 project-structure.md
- 📁 public/
  - 📄 Resume_Xu Zihan.pdf
  - 📁 images/
    - 📄 backend_icon.png
    - 📄 database_icon.png
    - 📄 frontend_icon.png
    - 📄 tools_icon.png
- 📁 src/
  - 📄 App.vue
  - 📁 components/
    - 📄 Hero.vue
    - 📄 ProjectItem.vue
    - 📄 Skills.vue
    - 📄 navbar.vue
  - 📁 data/
    - 📄 profile.js
  - 📁 directives/
    - 📄 reveal.js
      - Functions:
        - getObserver
      - Methods:
        - mounted
        - unmounted
  - 📄 main.js
    - Imports:
      - import { createApp } from 'vue'
      - import App from './App.vue'
  - 📄 style.css
- 📄 vite.config.js
  - Imports:
    - import { defineConfig } from 'vite'
    - import vue from '@vitejs/plugin-vue'
    - import tailwindcss from '@tailwindcss/vite'

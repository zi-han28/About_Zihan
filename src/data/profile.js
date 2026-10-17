// Edit this file to change the site's content. Layout lives in App.vue.
export default {
  title: 'Zihan Potfolio Website',
  name: 'My Name is Xu Zihan',
  role: 'Computer science student and web developer',
  intro:
    'Bachelor of Science (Honours) Computer Science student with hands-on experience in full-stack web development, data analysis, and machine learning. Skilled in modern web frameworks (Next.js, React, Django), REST APIs, and database management, with additional exposure to AI-powered applications and game development. Brings strong teamwork, communication, and event coordination experience from National Service and part-time roles, with a keen interest in pursuing a career in web development.',

  skills: [
    { group: 'Frontend', items: ['Next.js','EJS', 'React', 'TypeScript', 'Javascript', 'Tailwind CSS', 'HTML/CSS'] },  //Next.js, EJS, React, HTML/CSS, Tailwind CSS, JavaScript, Streamlit, Typescript
    { group: 'Backend', items: ['FastAPI', 'Django REST Framework', 'Node.js','Express', 'Flask'] }, 
    { group: 'Data and AI', items: ['PostgreSQL', 'MongoDB', 'SQLite', 'DuckDB', 'scikit-learn', 'OpenAI API'] },
    { group: 'Tools', items: ['Git', 'Docker', 'Redis', 'Celery', 'Power Automate'] },
  ],
  projects: [
    {
      title: 'Music recommendation app',
      context: 'Final year project',
      summary:
        'A recommender that matches songs by audio features, with a local Llama 3.2 model that describes your listening taste in plain language.',
      stack: ['Next.js', 'FastAPI', 'MongoDB', 'Docker'],
      link: '',
    },
    {
      title: 'Social platform with AI chat',
      context: 'Team of three',
      summary:
        'Posts, bookmarks and chatrooms, plus an assistant that answers using retrieval-augmented generation.',
      stack: ['Next.js', 'SQLite', 'OpenAI API'],
      link: '',
    },
    {
      title: 'E-learning platform',
      context: 'Academy project',
      summary:
        'Course creation, enrolment, teacher and student roles, and a real-time chat room for each course.',
      stack: ['Django', 'Django REST Framework', 'Redis', 'Channels', 'Celery'],
      link: '',
    },
    {
      title: 'Workflow automation at NVPC',
      context: 'Internship, 2026',
      summary:
        'Power Automate flows for client emails and FormSG responses, and a Python pipeline that verifies charities against public datasets.',
      stack: ['Power Automate', 'Python', 'SQL', 'DuckDB'],
      link: '',
    },
  ],
  contact: [
    { label: 'Email', text: 'xu_zihan@outlook.com', href: 'mailto:xu_zihan@outlook.com' },
    { label: 'GitHub', text: 'github.com/zi-han28', href: 'https://github.com/zi-han28' },
  ],
}

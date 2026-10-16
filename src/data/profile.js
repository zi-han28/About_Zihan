// Edit this file to change the site's content. Layout lives in App.vue.
export default {
  title: 'Zihan Potfolio Website',
  name: 'Xu Zihan',
  role: 'Computer science student and web developer',
  intro:
    'I build full-stack web apps and automation tools, from recommendation engines to production workflows.',
  about:
    'I am finishing a BSc (Honours) in Computer Science at the University of London. I like building things end to end: a frontend people can use, an API behind it, and a database that holds up. Most recently I interned at NVPC, automating workflows for the Digital Innovation team.',
  skills: [
    { group: 'Frontend', items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'HTML/CSS'] },
    { group: 'Backend', items: ['FastAPI', 'Django REST Framework', 'Node.js/Express', 'Flask'] },
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

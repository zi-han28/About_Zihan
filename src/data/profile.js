// Edit this file to change the site's content. Layout lives in App.vue.
export default {
  title: 'Zihan Potfolio Website',
  name: 'My Name is Xu Zihan',
  role: 'Computer science student and web developer',
  intro:
    'Bachelor of Science (Honours) Computer Science student with hands-on experience in full-stack web development, data analysis, and machine learning. Skilled in modern web frameworks (Next.js, React, Django), REST APIs, and database management, with additional exposure to AI-powered applications and game development. Brings strong teamwork, communication, and event coordination experience from National Service and part-time roles, with a keen interest in pursuing a career in web development.',

  skills: [
    { group: 'Frontend', items: ['Next.js','EJS', 'React', 'TypeScript', 'Javascript', 'Tailwind CSS', 'HTML/CSS'], photo:'/images/frontend_icon.png', information:'Although most of my notable projects are backend focused I am still passionate about designing web applications and websites. My style of programming is very product/user focused, designing web architecture to suit the convenient needs of users.'},
    { group: 'Backend', items: ['FastAPI', 'Django REST Framework', 'Node.js','Express', 'Flask'], photo:'/images/backend_icon.png', information: 'The backend is where most of my project work is focused on. I enjoy designing APIs that are clean, predictable, fast, and most importantly easy for the frontend.' }, 
    { group: 'Data and AI', items: ['PostgreSQL', 'MongoDB', 'SQLite', 'DuckDB', 'scikit-learn', 'LLM'], photo:'/images/database_icon.png', information:'With both my personal and internship projects have been mostly database oriented. I have trained pre-built models to detect specific patterns, implemented a recommendation system, integrated an LLM into a RAG pipeline, and written scripts to extract large datasets quickly.' },
    { group: 'Tools', items: ['Git', 'Docker', 'Redis', 'Celery', 'Power Automate'], photo:'/images/tools_icon.png', information:'I have used Git for version control, Docker for reproducible environments, Redis and Celery when work needs to happen asynchronously, and Power Automate (internship) when a process needs to escape the browser entirely.'},
  ],
  projects: [
    {
      title: 'Internship with NVPC',
      context: 'Software Engineer Intern, May – Jul 2026',
      summary:
        'Automated manual processes for the Digital Innovation team with Power Automate flows, and built a Python pipeline that verifies charities against official registries.',
      stack: ['Power Automate', 'Python', 'DuckDB', 'SQL', 'Excel', 'SharePoint'],
      link: '',
      categories: ['Automation', 'SQL'],
      modal: 'NVPC',
      description: [
        'Designed, built, and maintained multiple interconnected Power Automate flows across production systems for the Digital Innovation team, automating manual processes and conducting UAT testing for each automation operation before deployment.',
        'Built an email automation flow that sends personalised client emails driven by dynamic Excel sheet data.',
        'Developed a FormSG response automation flow that captures form submissions via email notifications and updates corresponding records in Excel, keeping downstream data in sync.',
        "Built a Python-based charity verification pipeline, cross-referencing data.gov.sg and NVPC's giving.sg datasets by using SQL and DuckDB to validate listed companies against official registries.",
        'Collaborated with other departments to understand their daily operations and identify automation opportunities, translating manual workflows into Power Automate solutions.',
        'Authored User Guide documentation for Power Automate flows to support adoption, troubleshooting, and handoff across departments.',
      ],
    },
    {
      title: 'Music recommendation app',
      context: 'Final year project',
      summary:
        'A recommender that matches songs by audio features, with a local Llama 3.2 model that describes your listening taste in plain language.',
      stack: ['Next.js', 'FastAPI', 'MongoDB', 'Docker'],
      link: '',
      categories: ['Web Development', 'Machine Learning'],
      image: './images/MusicReccomendation.png',
      modal:'music',
      description: ['Built a content-based recommendation engine using scikit-learn K-Nearest Neighbors (KNN) with cosine similarity and StandardScaler using 11-dimensional normalized audio feature vectors retrieved via Spotify and Reccobeats APIs.',
        'Integrated a local LLM (Llama 3.2 1B Instruct) containerized with llama-cpp-python and Docker, implementing few-shot prompt engineering to translate mathematical user taste profiles into natural-language listening personality summaries.',
        'Built a full-stack REST application with a Next.js frontend and FastAPI backend, featuring JWT bearer authorization, MongoDB state persistence, dynamic track searching, and Genius API lyrics integration.', 
        'Deployed backend on Railway and frontend on Vercel, with MongoDB Atlas for cloud database hosting'],
    },
    {
      title: 'Social platform with AI chat',
      context: 'Team of three',
      summary:
        'Posts, bookmarks and chatrooms, plus an assistant that answers using retrieval-augmented generation.',
      stack: ['Next.js', 'SQLite', 'OpenAI API'],
      link: '',
      categories: ['Web Development'],
      image: './images/SocialPlatform.png',
      modal:'Social',
      description: ['Worked in a team of 3 developers to develop and deploy a sophisticated social networking application that uses Next.js as the main frontend framework, Git for version control and DevOps practices to ensure reliability, scalability and automated deployments.',
        'Implemented a RAG system using OpenAI API to power intelligent responses in the project.',
        'Developed React components including PostList (with like, save, share, comment functionality) and dynamic navbar with user-specific rendering',
        'Implemented dynamic chatroom system with message persistence and room-specific routing using Next.js dynamic parameters',
        'Created profile management (bio editing), post creation area, bookmark saving, and interaction history tracking',
        'Proficient in feature branching, git pull, git merge, git rebase, resolving merge conflicts, conducting code reviews via pull requests, and maintaining a clean commit history in team environments'
      ],
    },
    {
      title: 'E-learning platform',
      context: 'Academy project',
      summary:
        'Course creation, enrolment, teacher and student roles, and a real-time chat room for each course.',
      stack: ['Django', 'Django REST Framework', 'Redis', 'Channels', 'Celery'],
      link: '',
      categories: ['Web Development', 'SQL', 'Django'],
      image: './images/Elearning.png',
      modal:'E-learning',
      description:['Built a full-featured Learning Management System (LMS) enabling course creation, enrollment, and interactive feedback systems with teacher/student role-based access control.',
        'Implemented a real-time course-specific chat rooms using redis-server and Django Channels.'
      ]
    },
  ],
  contact: [
    { label: 'Email', text: 'xu_zihan@outlook.com', href: 'mailto:xu_zihan@outlook.com' },
    { label: 'GitHub', text: 'github.com/zi-han28', href: 'https://github.com/zi-han28' },
  ],
}

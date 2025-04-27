export const projects = [
    {
        id: 'momentary',
        title: 'Momentary',
        description: 'Red social moderna con funcionalidades avanzadas de interacción, mensajería en tiempo real y compartición de contenidos multimedia.',
        image: '/momentary-screenshot.jpg', // Reemplaza con una captura de tu proyecto
        technologies: [
            'Next.js',
            'Node.js',
            'Express',
            'MongoDB Atlas',
            'Socket.io',
            'JWT',
            'Cloudinary',
            'Tailwind CSS'
        ],
        features: [
            'Autenticación segura con JWT',
            'Chat en tiempo real con Socket.io',
            'Sistema de notificaciones push',
            'Carga y visualización de imágenes y videos con Cloudinary',
            'Diseño responsive y moderno con Tailwind CSS'
        ],
        demoUrl: 'https://momentary-indol.vercel.app/',
        githubUrl: 'https://github.com/tuusername/momentary', // Reemplaza con tu URL de GitHub
        featured: true
    },
    // Puedes agregar más proyectos aquí
    {
        id: 'project-2',
        title: 'Proyecto 2',
        description: 'Descripción breve del proyecto 2.',
        image: '/project2-screenshot.jpg',
        technologies: ['React', 'Tailwind CSS', 'Firebase'],
        features: [
            'Característica 1',
            'Característica 2',
            'Característica 3'
        ],
        demoUrl: 'https://proyecto2.example.com',
        githubUrl: 'https://github.com/tuusername/proyecto2',
        featured: false
    },
    {
        id: 'project-3',
        title: 'Proyecto 3',
        description: 'Descripción breve del proyecto 3.',
        image: '/project3-screenshot.jpg',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        features: [
            'Característica 1',
            'Característica 2',
            'Característica 3'
        ],
        demoUrl: 'https://proyecto3.example.com',
        githubUrl: 'https://github.com/tuusername/proyecto3',
        featured: false
    }
];
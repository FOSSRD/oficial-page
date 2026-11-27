export interface RepoItem {
  name: string;
  description: string;
  language: string;
  category: 'systems' | 'software';
  url: string;
  stars: number;
  highlight?: boolean;
}

export interface RuleItem {
  number: string;
  title: string;
  description: string;
  accent: 'blue' | 'red';
}

export interface BlogPreviewItem {
  slug: string;
  title: string;
  excerpt: string;
  tag: string;
  readTime: string;
  status: string;
  externalUrl: string;
}

export const COMMUNITY = {
  name: 'FOSS-RD',
  fullName: 'Free Open Source Software RD',
  location: 'República Dominicana',
  tagline: 'Comunidad Open Source, Linux, Sistemas Operativos y Tecnología en República Dominicana.',
  description:
    'Somos una comunidad de profesionales y entusiastas de la computación en República Dominicana dispuestos a compartir conocimiento y ayudarte a crecer en tecnología, sistemas operativos y software Open Source a través de nuestro grupo de Telegram.',
  telegramUrl: 'https://t.me/foss_rd',
  telegramHandle: '@foss_rd',
  telegramMembers: '139+',
  githubUrl: 'https://github.com/FOSSRD',
  githubHandle: 'github.com/FOSSRD',
  rulesUrl: 'https://telegra.ph/FOSS-RD-Rules-v01-04-25',
  email: 'info@fossrd.com',
  existingBlogUrl: 'https://fossrd.com/posts',
} as const;

export const PILLARS = [
  {
    icon: 'terminal',
    title: 'Linux y Sistemas Operativos',
    description:
      'Todo sobre Linux, distribuciones, BSD, servidores, escritorios y otros sistemas operativos. Comparte configuraciones, trucos y experiencias reales.',
    tags: ['Linux', 'Sistemas Operativos', 'Servidores', 'Desktop'],
    accent: 'blue',
  },
  {
    icon: 'code',
    title: 'Cultura Open Source',
    description:
      'El corazón de la comunidad: software libre, herramientas abiertas, privacidad, licencias y proyectos creados por y para la comunidad.',
    tags: ['Open Source', 'Software Libre', 'Comunidad', 'Colaboración'],
    accent: 'red',
  },
  {
    icon: 'server',
    title: 'Desarrollo, Infraestructura y Tech',
    description:
      'Se habla de todo en computación: programación en cualquier lenguaje, redes, infraestructura, automatización, seguridad o hardware.',
    tags: ['Programación', 'Redes', 'Infraestructura', 'Seguridad'],
    accent: 'blue',
  },
  {
    icon: 'users',
    title: 'Mentoría & Networking en RD',
    description:
      'Un espacio activo en Telegram donde profesionales con experiencia y personas que están empezando comparten dudas, ideas y oportunidades.',
    tags: ['Telegram', 'Q&A', 'Carrera IT', 'RD'],
    accent: 'red',
  },
] as const;

export const REPOSITORIES: RepoItem[] = [
  {
    name: 'Bash',
    description: 'Archivo .bashrc práctico y optimizado para usuarios de Linux que quieren productividad desde la terminal.',
    language: 'Shell',
    category: 'systems',
    url: 'https://github.com/FOSSRD/Bash',
    stars: 2,
    highlight: true,
  },
  {
    name: 'Neovim',
    description: 'Configuración de Neovim enfocada a desarrollo moderno, flujo rápido y edición sin distracciones.',
    language: 'Lua / Vim',
    category: 'systems',
    url: 'https://github.com/FOSSRD/Neovim',
    stars: 0,
    highlight: true,
  },
  {
    name: 'gRPC-Example',
    description: 'Ejemplo práctico de comunicación entre servicios de alto rendimiento usando gRPC en Go.',
    language: 'Go',
    category: 'software',
    url: 'https://github.com/FOSSRD/gRPC-Example',
    stars: 1,
    highlight: true,
  },
  {
    name: 'PasswordGenerator',
    description: 'Generador simple y seguro de contraseñas desde línea de comandos escrito en Go.',
    language: 'Go',
    category: 'software',
    url: 'https://github.com/FOSSRD/PasswordGenerator',
    stars: 1,
  },
  {
    name: 'Mini-Proyecto-3',
    description: 'Aplicación TUI (Terminal User Interface) escrita en Go para inspeccionar y editar particiones de disco.',
    language: 'Go',
    category: 'software',
    url: 'https://github.com/FOSSRD/Mini-Proyecto-3',
    stars: 0,
    highlight: true,
  },
  {
    name: 'Mini-Proyecto-2',
    description: 'Wrapper y framework simplificado en Go sobre Nmap para auditorías y escaneos rápidos de red.',
    language: 'Go',
    category: 'software',
    url: 'https://github.com/FOSSRD/Mini-Proyecto-2',
    stars: 0,
  },
  {
    name: 'Zsh',
    description: 'Configuración base de Zsh pensada para entornos Linux limpios y productivos.',
    language: 'Shell',
    category: 'systems',
    url: 'https://github.com/FOSSRD/Zsh',
    stars: 0,
  },
  {
    name: 'Samba',
    description: 'Guía y configuración base de Samba para compartir archivos y carpetas en red local Linux/Windows.',
    language: 'Config',
    category: 'systems',
    url: 'https://github.com/FOSSRD/Samba',
    stars: 1,
  },
  {
    name: 'Vim',
    description: 'Configuraciones esenciales de Vim listas para servidores y estaciones de trabajo.',
    language: 'Vim Script',
    category: 'systems',
    url: 'https://github.com/FOSSRD/Vim',
    stars: 0,
  },
  {
    name: 'Nano',
    description: 'Configuración mejorada del editor Nano para editar archivos del sistema con mayor comodidad.',
    language: 'Shell',
    category: 'systems',
    url: 'https://github.com/FOSSRD/Nano',
    stars: 0,
  },
  {
    name: 'Mini-Proyecto-1-',
    description: 'Exploración comunitaria de Web Components estándar sin frameworks pesados.',
    language: 'Web',
    category: 'software',
    url: 'https://github.com/FOSSRD/Mini-Proyecto-1-',
    stars: 0,
  },
  {
    name: '.github',
    description: 'Perfil público oficial, misión y enlaces de bienvenida de la organización FOSS-RD.',
    language: 'Markdown',
    category: 'systems',
    url: 'https://github.com/FOSSRD/.github',
    stars: 0,
  },
];

export const COMMUNITY_RULES: RuleItem[] = [
  {
    number: '01',
    title: 'Respeto y trato profesional',
    description:
      'Cero discriminación, acoso o ataques personales. Debatimos ideas técnicas con respeto y altura.',
    accent: 'blue',
  },
  {
    number: '02',
    title: 'Mantén el foco técnico',
    description:
      'Cíñete a temas de tecnología, Open Source, sistemas operativos, computación e IT. Evita el off-topic excesivo.',
    accent: 'red',
  },
  {
    number: '03',
    title: 'Pregunta con contexto',
    description:
      'Comparte qué intentaste, qué error ves y tu entorno. Así la comunidad puede ayudarte más rápido.',
    accent: 'blue',
  },
  {
    number: '04',
    title: 'Sé útil y constructivo',
    description:
      'Todos fuimos principiantes alguna vez. Comparte soluciones, enlaces útiles y crea un ambiente acogedor.',
    accent: 'red',
  },
];

export const BLOG_PREVIEWS: BlogPreviewItem[] = [
  {
    slug: 'los-errores-vienen-de-todas-partes',
    title: 'Los errores vienen de todas partes',
    excerpt:
      'Reflexión técnica sobre resiliencia en sistemas, tecnología en producción y por qué diseñar asumiendo fallos inevitables marca la diferencia.',
    tag: 'Sistemas & Tech',
    readTime: 'Artículo publicado',
    status: 'Disponible en el blog actual',
    externalUrl: 'https://fossrd.com/posts/',
  },
  {
    slug: 'how-complex-systems-fail',
    title: 'How Complex Systems Fail',
    excerpt:
      'Lectura clásica fundamental sobre la naturaleza de los fallos en sistemas complejos, factores humanos y operación de infraestructura.',
    tag: 'Lectura Recomendada',
    readTime: 'Referencia técnica',
    status: 'Recurso archivado en fossrd.com',
    externalUrl: 'https://fossrd.com/HowComplexSystemsFail.html',
  },
];

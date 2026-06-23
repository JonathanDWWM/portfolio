

export const profile = {
  name: 'Jonathan Bous',
  roles: [
    "Concepteur d'applications",
    'Développeur web',
    "Créateur d'expériences digitales",
  ],
  tagline:
    "Je conçois et développe des applications web performantes, du concept à la mise en production.",
  location: 'France',
  email: 'jonathan.bous@hotmail.fr',
  socials: {
    github: '',
    linkedin: '',
  },
}

export const stats = [
  { value: 3, suffix: '+', label: "Années d'expérience" },
  { value: 10, suffix: '+', label: 'Projets livrés' },
]

export const about = {
  paragraphs: [
    "Passionné par la conception d'applications, j'aime transformer un besoin métier en produit clair, rapide et agréable à utiliser.",
    "De l'architecture back-end jusqu'aux moindres détails de l'interface, je porte une attention particulière à la qualité du code et à l'expérience utilisateur.",
  ],
}

export const skills = [
  {
    category: 'Front-end',
    items: [
      { name: 'React / Next.js' },
      { name: 'Vue 3 / Nuxt 4' },
      { name: 'React Native / Expo' },
      { name: 'Flutter / Dart' },
      { name: 'TypeScript' },
      { name: 'WordPress' },
    ],
  },
  {
    category: 'Back-end',
    items: [
      { name: 'Node.js / Express' },
      { name: 'Fastify' },
      { name: 'PostgreSQL / Prisma' },
      { name: 'Supabase' },
      { name: 'Socket.io / WebSocket' },
    ],
  },
  {
    category: 'Outils & Méthodes',
    items: [
      { name: 'Git / CI-CD' },
      { name: 'Docker / Coolify' },
      { name: 'Stripe' },
      { name: 'Jest / Playwright' },
      { name: 'Pinia / TanStack Query' },
    ],
  },
]

export const projects = [
  {
    title: 'SwiftPlays',
    subtitle: 'Plateforme compétitive gaming',
    year: '2025',
    tags: ['Nuxt 4', 'Express', 'Socket.io'],
    description: 'Plateforme de compétitions gaming avec ladder, matchmaking et chat en temps réel.',
    longDescription:
      "SwiftPlays est une plateforme fullstack dédiée aux compétitions gaming en ligne. Les joueurs peuvent rejoindre des ladders classés sur FC 25 et Call of Duty BO7, défier d'autres équipes, soumettre leurs résultats et suivre leur progression. Un système de chat temps réel (DM + équipes) et un bot Discord complètent l'expérience.",
    tech: ['Nuxt 4', 'Vue 3', 'TypeScript', 'Express 5', 'PostgreSQL', 'Prisma', 'Socket.io', 'Pinia', 'Turbo'],
    features: [
      'Ladder compétitif multi-jeux (FC 25 & Call of Duty)',
      'Système de défis, résultats et arbitrage des litiges',
      'Chat temps réel avec Socket.io (DM + conversations équipes)',
      'Discord OAuth + rôles (Joueur, Modérateur, Admin)',
      'Bot Discord intégré',
      'Monorepo Turbo avec frontend, backend et bot séparés',
    ],
    image: '',
    gallery: [],
    link: 'https://swiftplays.fr',
    repo: '',
  },
  {
    title: 'ThoréConv',
    subtitle: 'App mobile de messagerie pour club de foot',
    year: '2026',
    tags: ['React Native', 'Expo', 'Fastify'],
    description: 'Application mobile de communication interne pour le Thoré Football Club.',
    longDescription:
      "ThoréConv est une application mobile (iOS & Android) développée sur mesure pour le Thoré Football Club. Elle remplace les groupes WhatsApp par des canaux organisés par équipe (Seniors, U17, U15…) avec messagerie temps réel, convocations et notifications push. Le backend a été migré de Supabase vers un serveur Fastify self-hosted pour garder la maîtrise totale des données.",
    tech: ['React Native', 'Expo SDK 54', 'TypeScript', 'Fastify 5', 'PostgreSQL', 'Prisma', 'WebSocket', 'TanStack Query', 'Expo Router'],
    features: [
      'Messagerie temps réel par canal et par équipe (WebSocket)',
      'Notifications push via Expo Push Service',
      'Gestion des équipes et membres avec rôles (coach, joueur, parent)',
      'Déployé sur iOS et Android via EAS',
      'Migration Supabase → Fastify self-hosted',
      'Compression image côté client avant upload',
    ],
    image: '',
    gallery: [],
    link: '',
    repo: '',
  },
  {
    title: 'optiCoach',
    subtitle: 'SaaS de gestion d\'equipe de football',
    year: '2026',
    tags: ['Next.js', 'Flutter', 'Supabase'],
    description: 'Plateforme SaaS pour coaches amateurs : gestion d\'equipe, stats, tactiques et convocations.',
    longDescription:
      "optiCoach est un SaaS complet pour les coaches de football amateur. Il permet de gerir les joueurs, planifier les entrainements et matchs, saisir les stats en direct, creer des formations tactiques par drag-and-drop, et archiver les saisons. Une application mobile Flutter (iOS & Android) complete la version web. Le projet est en production sur opticoach.eu avec un systeme d\'abonnement Stripe a 3 paliers.",
    tech: ['Next.js 16', 'TypeScript', 'SCSS', 'Flutter', 'Dart', 'Supabase', 'PostgreSQL', 'Stripe', 'Playwright', 'Jest', 'Docker', 'Coolify'],
    features: [
      'Tableau de bord avec stats et KPIs animes',
      'Tableau tactique drag-and-drop (6+ formations)',
      'Calendrier avec recurrence (RRULE) et meteo en direct',
      'Systeme de convocations avec generateur SMS',
      'Archivage de saison avec rapport PDF complet',
      'Application mobile Flutter (iOS & Android)',
      'Abonnements Stripe (3 paliers, essai 14 jours)',
      'Mode hors-ligne avec sync IndexedDB (Premium)',
      '99 tests Jest + 62 tests E2E Playwright en CI',
    ],
    image: '',
    gallery: [],
    link: 'https://opticoach.eu',
    repo: '',
  },
  {
    title: 'Thore FC',
    subtitle: 'Site WordPress club de football',
    year: '2026',
    tags: ['WordPress', 'PHP', 'SEO local'],
    description: 'Site officiel du Thore Football Club 81 : actualites, equipes et evenements.',
    longDescription:
      "Site WordPress realise pour le Thore Football Club, club de football du Tarn (81). Le site presente les equipes (Seniors, U17, U15...), les actualites du club, le calendrier des matchs et evenements, ainsi que les informations pratiques. Design aux couleurs du club, oriente communaute et communication locale.",
    tech: ['WordPress', 'PHP', 'HTML/CSS'],
    features: [
      'Presentation des equipes par categorie',
      'Actualites et resultats des matchs',
      'Calendrier des evenements du club',
      'Informations pratiques et contact',
    ],
    image: '',
    gallery: [],
    link: 'https://thorefc81.fr',
    repo: '',
  },
  {
    title: 'RSPC81',
    subtitle: 'Site WordPress reparation electronique',
    year: '2024',
    tags: ['WordPress', 'PHP', 'SEO local'],
    description: 'Site vitrine pour un reparateur de smartphones, PC et consoles a Mazamet.',
    longDescription:
      "Site WordPress realise pour RSPC81, un service de reparation electronique base a Mazamet (81). Le site presente les prestations (smartphones, PC, consoles, deplacement a domicile), une galerie avant/apres des reparations effectuees, les temoignages clients, les horaires et un formulaire de contact. Design oriente confiance et conversion locale.",
    tech: ['WordPress', 'PHP', 'HTML/CSS'],
    features: [
      'Presentation des services par categorie (mobile, PC, consoles)',
      'Galerie avant/apres des reparations',
      'Temoignages clients',
      'Formulaire de contact et horaires d\'ouverture',
      'Integration reseaux sociaux (Facebook)',
    ],
    image: '',
    gallery: [],
    link: 'https://rspc81.fr',
    repo: '',
  },
]

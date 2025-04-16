import {
  ContactProps,
  FAQsProps,
  FeaturesProps,
  HeroProps,
  StatsProps,
  StepsProps,
  TeamProps,
  TestimonialsProps,
} from '~/shared/types';
import hero2Img from '~/assets/images/hero2.jpg';
import {
  IconAdjustments,
  IconAward,
  IconBook,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBulb,
  IconCirclesRelation,
  IconClock,
  IconFlame,
  IconHeartHandshake,
  IconHomeEco,
  IconMail,
  IconMapPin,
  IconNumber1,
  IconNumber2,
  IconNumber3,
  IconNumber4,
  IconNumber5,
  IconPalette,
  IconPhoneCall,
  IconPuzzle2,
  IconScale,
  IconThumbUp,
  IconUser,
} from '@tabler/icons-react';

// Hero2 data on About page *******************
export const hero2About: HeroProps = {
  title: 'Qui sommes-nous ?',
  subtitle:
    "Fondée en 2017 par une équipe d'ingénieurs, MHTC s'est progressivement construite une solide \
    réputation dans la conception de solutions high-tech innovantes. Implantée sur deux continents - l'Afrique et \
    l'Europe - notre entreprise allie expertise technique et approche multiculturelle pour répondre \
    aux défis technologiques les plus exigeants. Avec plus de 8 ans d'expérience cumulée dans divers \
    domaines de pointe, nos équipes pluridisciplinaires accompagnent les clients tout au long de leur projet.",
  tagline: 'A propos',
  callToAction: {
    text: 'Nous rejoindre',
    href: 'https://www.linkedin.com/',
    targetBlank: true,
  },
  callToAction2: {
    text: 'Nous contactez',
    href: '/contact',
  },
  image: {
    src: hero2Img,
    alt: 'Hero TailNext',
  },
};

// Stats data on About page *******************
export const statsAbout: StatsProps = {
  id: 'stats-on-about',
  hasBackground: true,
  items: [
    {
      title: 'Depuis 2017',
    },
    {
      title: 8,
      description: 'Ans',
    },
    {
      title: 2,
      description: 'Continent',
    },
    {
      title: 4,
      description: 'Agences',
    },

  ],
};

//  Avec une présence stratégique en Europe et en Afrique, \
//     nous combinons rigueur industrielle et agilité locale pour servir des clients diversifiés, des startups aux grands \
//     groupes, dans des secteurs aussi variés que l’IoT, la domotique, le ferroviaire ou les énergies renouvelables.
// FeaturesFour data on About page *******************
export const featuresFourAbout: FeaturesProps = {
  id: 'features-four-on-about',
  hasBackground: false,
  header: {
    title: 'Notre coeur de métier',
    subtitle:
      'Proposer des solutions technologiques performantes et adaptées, alliant expertise technique et innovation, \
      pour répondre aux défis les plus exigeants. Que ce soit pour le développement de systèmes embarqués avancés, \
      la réalisation de projets électroniques complexes ou l’optimisation de solutions logicielles, notre équipe \
      s’engage à fournir un accompagnement personnalisé et des résultats d’excellence. Chez nous, la technologie \
      rencontre l’expertise pour construire l’innovation de demain. Faites confiance à des passionnés, choisissez \
      l’excellence technique.',
    tagline: 'Savoir faire',
  },
};

// FeaturesFour data on About page (Two) *******************
export const featuresFourAboutTwo: FeaturesProps = {
  id: 'features-four-on-about-two',
  hasBackground: false,
  header: {
    title: 'Nos valeurs',
    subtitle: 'Découvrez les principes fondamentaux qui guident notre entreprise au quotidien.',
    tagline: 'Valeurs',
  },
  isAfterContent: true,
  columns: 2,
  items: [
    {
      title: 'Approche client',
      description:
        'Nous plaçons nos clients au cœur de nos préoccupations pour offrir des solutions adaptées à leurs besoins.',
      icon: IconUser,
    },
    {
      title: 'Innovation et adaptabilité',
      description:
        "Nous cultivons l'innovation et restons flexibles pour répondre aux évolutions du marché et des technologies.",
      icon: IconBulb,
    },
    {
      title: 'Garantie qualité',
      description:
        "Nous nous engageons à fournir des produits et services d'excellence grâce à des processus rigoureux.",
      icon: IconThumbUp,
    },
    {
      title: 'Accessibilité et personnalisation',
      description: 'Nos solutions sont conçues pour être accessibles à tous et personnalisables selon vos exigences.',
      icon: IconAdjustments,
    },
    {
      title: 'Collaboration et partenariat',
      description:
        "Nous croyons en la force du travail d'équipe et des partenariats durables pour créer une valeur partagée.",
      icon: IconHeartHandshake,
    },
    {
      title: 'Conception éthique et responsable',
      description: 'Nous intégrons des principes éthiques et durables dans toutes nos réalisations.',
      icon: IconHomeEco,
    },
  ],
};

// Steps data on About page *******************
export const stepsAbout: StepsProps = {
  id: 'steps-on-about',
  hasBackground: true,
  isImageDisplayed: false,
  header: {
    title: 'Histoire du MHTC',
    subtitle: 'Regroupement de jeunes ingénieurs passionnés par les technologies embarquées depuis 2017.',
    tagline: 'Notre parcours technologique',
  },
  items: [
    {
      title: 'Nos débuts',
      description:
        "Fondé par une équipe d'ingénieurs en systèmes embarqués, le MHTC démarre avec une vision : révolutionner \
        les bancs de test et solutions logicielles pour l'industrie high-tech.",
      icon: IconNumber1,
    },
    {
      title: 'Les premières années',
      description:
        'Développement de nos premiers prototypes de bancs de test automatisés et spécialisation dans les \
        architectures temps réel pour applications critiques.',
      icon: IconNumber2,
    },
    {
      title: 'Phase de croissance',
      description:
        'Élargissement de notre expertise aux systèmes IoT connectés et obtention de certifications qualité \
        pour nos solutions embarquées dans les secteurs ferroviaire et automobile.',
      icon: IconNumber3,
    },
    {
      title: 'Diversification',
      description:
        'Lancement de notre division R&D en intelligence embarquée et partenariats stratégiques avec des leaders \
        industriels pour des solutions sur mesure.',
      icon: IconNumber4,
    },
    {
      title: 'Notre engagement actuel',
      description:
        "Poursuite de l'innovation dans les systèmes cyber-physiques et développement de plateformes de test \
        intelligentes intégrant l'IA pour les systèmes critiques.",
      icon: IconNumber5,
    },
  ],
};

// Features3 data on About page *******************
export const features3About: FeaturesProps = {
  id: 'featuresThree-on-about',
  hasBackground: false,
  columns: 3,
  header: {
    title: "Notre culture d'entreprise",
    subtitle:
      'Découvrez les piliers fondamentaux qui façonnent notre identité et notre manière de travailler ensemble.',
    tagline: 'culture',
  },
  items: [
    {
      title: 'Engagement client',
      description: 'Nous développons des relations durables avec nos clients en écoutant activement leurs besoins.',
      icon: IconCirclesRelation,
    },
    {
      title: 'Créativité et excellence design',
      description: 'Nous combinons innovation esthétique et fonctionnelle pour des solutions à forte valeur ajoutée.',
      icon: IconPalette,
    },
    {
      title: 'Apprentissage continu',
      description: 'Nous encourageons la formation et le développement des compétences en permanence.',
      icon: IconBook,
    },
    {
      title: 'Collaboration transversale',
      description: 'Nos équipes pluridisciplinaires travaillent en synergie pour des résultats optimaux.',
      icon: IconPuzzle2,
    },
    {
      title: 'Esprit entrepreneurial',
      description: "Nous cultivons l'initiative et la prise d'actions pour faire grandir notre entreprise.",
      icon: IconFlame,
    },
    {
      title: 'Bien-être et équilibre',
      description: "Nous veillons à l'épanouissement professionnel et personnel de nos collaborateurs.",
      icon: IconScale,
    },
  ],
};

// Features data on About page *******************
export const featuresAbout: FeaturesProps = {
  id: 'features-on-about',
  hasBackground: true,
  header: {
    title: 'Our record of excellence',
    subtitle:
      'Etiam lobortis elementum ornare. Vestibulum lacinia magna ut eleifend facilisis. Cras ac mi nec diam auctor dictum.',
    tagline: 'Achievements',
  },
  columns: 1,
  items: [
    {
      title: 'Global recognition',
      description:
        'Nullam porttitor lacus elit, sed pellentesque eros aliquam eget. Phasellus interdum placerat enim sed vehicula. Ut tincidunt, magna in iaculis maximus, lectus ante dignissim neque, imperdiet sodales enim augue a quam.',
      icon: IconAward,
    },
    {
      title: 'Innovator of the year award',
      description:
        'Cras mollis elit massa, vel interdum libero molestie a. Nulla facilisi. Suspendisse cursus non sapien ut tincidunt. Sed non tortor sit amet nisl tristique facilisis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      icon: IconAward,
    },
    {
      title: 'Sustainability award',
      description:
        'Sed non tortor sit amet nisl tristique facilisis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent in tempor orci. Vestibulum velit justo, dignissim quis nisl nec, scelerisque ultrices mi sapien diam quis elit.',
      icon: IconAward,
    },
  ],
};

// Team data on About page *******************
export const teamAbout: TeamProps = {
  id: 'team-on-about',
  hasBackground: false,
  header: {
    title: 'Meet our executive team',
    subtitle:
      'Proin quis neque vehicula, sagittis felis ut, scelerisque mi. Nullam consequat, erat eu luctus sodales, ipsum tellus facilisis magna, eu condimentum lectus.',
    tagline: 'team',
  },
  teams: [
    {
      name: 'John Peterson',
      occupation: 'Founder & CEO',
      image: {
        src: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
        alt: 'John Peterson',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Sarah Mitchell',
      occupation: 'Chief Creative Officer',
      image: {
        src: 'https://images.unsplash.com/photo-1618835962148-cf177563c6c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
        alt: 'Sarah Mitchell',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'David Foster',
      occupation: 'Chief Technology Officer',
      image: {
        src: 'https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=250&q=80',
        alt: 'David Foster',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Mary Smith',
      occupation: 'Chief Marketing Office',
      image: {
        src: 'https://images.unsplash.com/photo-1607503873903-c5e95f80d7b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
        alt: 'Mary Smith',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Michael Turner',
      occupation: 'Chief Financial Officer',
      image: {
        src: 'https://images.unsplash.com/photo-1619380061814-58f03707f082?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
        alt: 'Michael Turner',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Laura Adams',
      occupation: 'Chief Customer Relations Officer',
      image: {
        src: 'https://images.unsplash.com/photo-1485893086445-ed75865251e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
        alt: 'Laura Adams',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Robert Williams',
      occupation: 'Chief Operations Officer',
      image: {
        src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
        alt: 'Robert Williams',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Emily Davis',
      occupation: 'Chief Strategy Officer',
      image: {
        src: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
        alt: 'Emily Davis',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
  ],
};

// Testimonial2 data on About page *******************
export const testimonials2About: TestimonialsProps = {
  id: 'testimonialsTwo-on-about',
  hasBackground: true,
  isTestimonialUp: true,
  header: {
    title: 'Our success stories',
    tagline: 'Customer comments',
  },
  testimonials: [
    {
      name: 'Verdino',
      job: 'Retired commander',
      testimonial: `اهل الشاقور - ras ytir`,
      image: {
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9VXxvUPP9sU-zorcs0pfqL_vGWVcLhBS1Rw&s',
        alt: 'Jane Smith',
      },
      href: '/',
    },
    {
      name: 'John Doe',
      job: 'Frontend Developer',
      testimonial: `I can't say enough good things about your Next.js and Tailwind CSS templates. As a frontend developer, I appreciate the clean and well-organized code. These templates have significantly sped up my development process, and the results are always impressive.`,
      image: {
        src: 'https://images.unsplash.com/photo-1565049786474-1dea82a8b995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'John Doe',
      },
      href: '/',
    },
    {
      name: 'Emily Turner',
      job: 'Marketing Manager',
      testimonial: `This templates have made our marketing campaigns stand out. The responsiveness and performance of the websites we've built with them have boosted our conversion rates. Thank you for helping us shine in the digital world!`,
      image: {
        src: 'https://images.unsplash.com/photo-1659057106920-da022cfbc0cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Emily Turner',
      },
      href: '/',
    },
    {
      name: 'Michael Clark',
      job: 'Startup Founder',
      testimonial: `I stumbled upon your templates while looking for a way to launch my startup quickly. Your templates not only saved me valuable time but also gave my business a professional and modern online presence. Highly recommended!`,
      image: {
        src: 'https://images.unsplash.com/photo-1572417884940-c24659be6068?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Michael Clark',
      },
      href: '/',
    },
    {
      name: 'Linda Johnson',
      job: 'Freelance Web Designer',
      testimonial: `I've been using your templates for my freelance projects, and my clients are always thrilled with the results. The templates are not only visually appealing but also user-friendly, making my job much easier.`,
      image: {
        src: 'https://images.unsplash.com/photo-1694287877106-ee22f764aef1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Linda Johnson',
      },
      href: '/',
    },
    {
      name: 'David Rogers',
      job: 'E-commerce Entrepreneur',
      testimonial: `The speed and SEO-friendliness of the websites I've built with these templates have led to increased traffic and sales. I couldn't be happier!`,
      image: {
        src: 'https://images.unsplash.com/photo-1665984867752-6370ab5ae35e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'David Rogers',
      },
      href: '/',
    },
  ],
};

// FAQS data on About page *******************
export const faqsAbout: FAQsProps = {
  id: 'faqs-on-faqs',
  hasBackground: false,
  header: {
    title: 'Questions Fréquemment Posées',
    subtitle: 'Retrouvez ici les réponses aux questions les plus courantes sur notre entreprise et nos activités.',
    tagline: 'FAQ',
  },
  items: [
    {
      title: 'Qui sommes-nous et que faisons-nous ?',
      description: `Nous sommes une équipe d'ingénieurs spécialisés dans les systèmes embarqués, les bancs de test \
      et le développement logiciel. Nous concevons des solutions high-tech pour des industries telles que \
      l'ferroviaire, l'automobile et l'IoT industriel.`,
    },
    {
      title: 'Quelles valeurs guident notre travail ?',
      description: `Notre approche s'appuie sur l'excellence technique, l'innovation constante et la qualité \
      des solutions. Nous privilégions des méthodes agiles et une approche orientée résultats pour répondre \
      aux besoins spécifiques de nos clients.`,
    },
    {
      title: 'Quelle est notre expérience ?',
      description: `Fort de plusieurs années d'expérience, nous avons réalisé de nombreux projets complexes \
      impliquant des systèmes temps réel, des architectures embarquées critiques et des plateformes de test \
      automatisées pour divers secteurs industriels.`,
    },
    {
      title: 'Comment est composée notre équipe ?',
      description: `Notre équipe pluridisciplinaire rassemble des ingénieurs en électronique, informatique \
      industrielle et automatisme, ainsi que des experts en validation logicielle et en cybersécurité des \
      systèmes embarqués.`,
    },
    {
      title: "Comment interagissons-nous avec l'écosystème technologique ?",
      description: `Nous collaborons activement avec des laboratoires de recherche, participons à des \
      conférences techniques et contribuons à des projets open-source dans notre domaine d'expertise. \
      Nous formons également des partenariats stratégiques avec des acteurs industriels.`,
    },
    {
      title: 'Quels canaux de support proposons-nous ?',
      description: `Nous offrons un support technique spécialisé 24/7 pour les systèmes critiques, une \
      assistance en ingénierie pour nos solutions, ainsi que des formations sur mesure pour nos clients \
      et partenaires.`,
    },
  ],
};

// Contact data on About page *******************
export const contactAbout: ContactProps = {
  id: 'contact-on-about',
  hasBackground: true,
  header: {
    title: 'Contactez-nous',
    tagline: 'Coordonnées',
  },
  content:
    "Notre équipe d'experts en systèmes embarqués est à votre disposition pour répondre à vos questions techniques et discuter de vos projets innovants.",
  items: [
    {
      title: 'Adresse',
      description: ['Parc Technologique High-Tech', 'Bâtiment A, 31000 Toulouse, France'],
      icon: IconMapPin,
    },
    {
      title: 'Contact direct',
      description: ['Tél : +33 (0)5 61 23 45 67', 'Email : contact@mhtc-embedded.com'],
      icon: IconPhoneCall,
    },
    {
      title: "Horaires d'ouverture",
      description: ['Lundi - Vendredi : 09h00 - 18h00', 'Samedi : 09h00 - 12h00 (support urgent uniquement)'],
      icon: IconClock,
    },
  ],
  form: {
    inputs: [
      {
        type: 'text',
        label: 'Nom complet',
        name: 'name',
        placeholder: 'Votre nom et prénom',
        autocomplete: 'off',
      },
      {
        type: 'email',
        label: 'Adresse email',
        name: 'email',
        placeholder: 'Votre email professionnel',
        autocomplete: 'on',
      },
    ],
    textarea: {
      cols: 30,
      rows: 5,
      label: 'Votre message',
      name: 'textarea',
      placeholder: 'Décrivez votre projet ou demande technique...',
    },
    checkboxes: [
      {
        label: "J'ai lu et accepte la politique de confidentialité",
        value: '',
      },
    ],
    btn: {
      title: 'Envoyer le message',
      type: 'submit',
    },
  },
};

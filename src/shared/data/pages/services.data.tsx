import {
  IconArrowsRightLeft,
  IconBrandTailwind,
  IconBulb,
  IconChevronsRight,
  IconComponents,
  IconCpu,
  IconFileAnalytics,
  IconGauge,
  IconHierarchy,
  IconListCheck,
  IconRocket,
  IconTrendingUp,
  IconZoomCheck,
} from '@tabler/icons-react';

import {
  CallToActionProps,
  ContentProps,
  FAQsProps,
  FeaturesProps,
  HeroProps,
  TestimonialsProps,
} from '~/shared/types';

import heroImg from '~/assets/images/hero.jpg';
import cameraFrontImg from '~/assets/images/camera-front.jpg';
import cameraBackImg from '~/assets/images/camera-back.jpg';

// Hero data on Services page *******************
export const heroServices: HeroProps = {
  title: 'Solutions clés en main pour vos projets',
  subtitle:
    'Donec aliquam pharetra nibh quis vestibulum. Praesent hendrerit sem at lacus ullamcorper egestas. Morbi lacinia ipsum in nulla gravida, ac sagittis turpis pretium. ',
  callToAction: {
    text: 'Start Exploring',
    href: 'https://github.com/onwidget/tailnext',
    targetBlank: true,
  },
  image: {
    src: heroImg,
    alt: 'Hero TailNext',
  },
};

// Feature2 data on Services page *******************
export const features2Services: FeaturesProps = {
  id: 'featuresTwo-on-services',
  header: {
    title: 'Nos Services d\'Ingénierie',
    subtitle: 'Des solutions complètes pour vos projets techniques'
  },
  items: [
    {
      title: 'Rédaction de cahier des charges technique',
      description: 'Notre équipe vous accompagne dans la formalisation précise de vos besoins techniques, fonctionnels et contraintes spécifiques.',
      icon: IconFileAnalytics, // Icône plus adaptée
    },
    {
      title: 'Développement de produits sur mesure',
      description: 'Conception et réalisation de systèmes embarqués clés en main, de l\'électronique au firmware.',
      icon: IconCpu, // Icône représentant l'électronique
    },
    {
      title: 'Audit technique et accompagnement',
      description: 'Évaluation de vos équipes et processus avec recommandations pour optimiser vos développements matériels et logiciels.',
      icon: IconZoomCheck, // Icône d'audit
    },
    {
      title: 'Optimisation des performances',
      description: 'Analyse et amélioration des critères temps-réel, consommation énergétique et fiabilité de vos systèmes.',
      icon: IconGauge, // Icône de performance
    },
    {
      title: 'Conseil en architecture technique',
      description: 'Sélection des meilleures technologies (microcontrôleurs, protocoles) pour votre application.',
      icon: IconHierarchy, // Icône d'architecture
    },
    {
      title: 'Veille technologique et innovation',
      description: 'Intégration des dernières avancées en IoT, edge computing et intelligence embarquée.',
      icon: IconTrendingUp, // Icône d'innovation
    },
  ],
};

// Content data on Services page *******************
export const contentServicesOne: ContentProps = {
  id: 'contentOne-on-services-one',
  header: {
    title: "Banc de test extensible",
    tagline: "Plateforme Modulaire d'Automatisation de Tests Industriels",
    subtitle: "Solution tout-en-un pour la validation complète de vos systèmes embarqués"
  },
  hasBackground: false,
  content:
    'Notre plateforme de test modulaire intègre tous les instruments nécessaires pour valider vos produits électroniques, avec une architecture ouverte permettant des extensions futures.',
  items: [
    {
      title: 'Interface Homme-Machine Complète',
      description:
        'IHM tactile avec :\n'
        + '- Tableau de bord personnalisable\n'
        + '- Visualisation des résultats en temps réel\n'
        + '- Gestion des séquences de test\n'
        + '- Rapports automatiques générables',
    },
    {
      title: 'Modules d\'Extension Standards',
      description:
        'Connectivité multi-protocoles :\n'
        + '- Bus industriels (Modbus RTU/TCP, CAN, CAN FD, PROFIBUS)\n'
        + '- Réseaux (Ethernet, WiFi 6, Bluetooth 5.2, LoRa)\n'
        + '- Entrées/Sorties (Numérique, Analogique, 4-20mA, 0-10V)\n'
        + '- Puissance (230V AC, 48V DC, charges programmables)',
    },
    {
      title: 'Système de Gestion des Tests',
      description:
        'Fonctionnalités avancées :\n'
        + '- Base de données centralisée des résultats\n'
        + '- Historique complet des campagnes de test\n'
        + '- Analyse statistique (CP/CPK, Six Sigma)\n'
        + '- Export vers Excel/LIMS/MES',
    },
    {
      title: 'Environnement de Développement Intégré',
      description:
        'Outils pour ingénieurs :\n'
        + '- Mode debug avec analyseur logique intégré\n'
        + '- Scripting Python pour tests complexes\n'
        + '- Simulation des défaillances\n'
        + '- Injection de défauts protocolaires',
    },
  ],
  // image: {
  //   src: testBenchSystemImg, // À remplacer par une image de votre banc
  //   alt: 'Plateforme de test modulaire avec interfaces multiples',
  // },
  isReversed: true,
  isAfterContent: false,
};

// Content data on Services page *******************
export const contentServicesTwo: ContentProps = {
  id: 'contentOne-on-services-two',
  header: {
    title: "Système de Cybersécurité USB Guardian",
    tagline: "Protection Avancée des Périphériques USB",
    subtitle: "Solution de contrôle d'accès matériel pour une protection maximale contre les menaces USB"
  },
  hasBackground: false,
  content:
    'Notre système breveté de blocage USB intelligent offre une protection proactive contre les menaces via les périphériques amovibles, tout en permettant un flux de travail sécurisé.',
  items: [
    {
      title: 'Filtrage Certificat-Based',
      description:
        'Fonctionnalités clés :\n'
        + '- Autorise uniquement les périphériques signés numériquement\n'
        + '- Liste blanche des fabricants certifiés\n'
        + '- Vérification cryptographique en temps réel\n'
        + '- Support des certificats X.509 et PKI',
    },
    {
      title: 'Protection Multi-Couche',
      description:
        'Défenses avancées :\n'
        + '- Détection des périphériques malveillants\n'
        + '- Blocage des BadUSB et Rubber Ducky\n'
        + '- Isolation des périphériques non autorisés\n'
        + '- Journalisation complète des événements',
    },
    {
      title: 'Gestion Centralisée',
      description:
        'Console d\'administration :\n'
        + '- Dashboard de sécurité unifié\n'
        + '- Politiques granulaires par groupe/utilisateur\n'
        + '- Alertes temps réel sur tentatives non autorisées\n'
        + '- Intégration SIEM (Splunk, QRadar)',
    },
    {
      title: 'Flexibilité de Déploiement',
      description:
        'Options d\'implémentation :\n'
        + '- Appliance réseau dédiée\n'
        + '- Solution endpoint légère\n'
        + '- Module pour pare-feu existants\n'
        + '- Version industrielle (OT/IEC 62443)',
    },
  ],
  // image: {
  //   src: usbSecurityDeviceImg, // À remplacer par une image du produit
  //   alt: 'Système de sécurité USB avec interface de gestion',
  // },
  isReversed: true,
  isAfterContent: false,
};

// Feature4 data on Services page *******************
export const features4Services: FeaturesProps = {
  id: 'featuresFour-on-services',
  hasBackground: true,
  columns: 2,
  header: {
    title: 'Main Features',
    subtitle:
      'Ne dicta praesent ocurreret has, diam theophrastus at pro. Eos etiam regione ut, persius eripuit quo id. Sit te euismod tacimates.',
  },
  isImageDisplayed: true,
  image: {
    src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
    alt: 'Hero TailNext',
  },
  items: [
    {
      title: 'Next.Js + Tailwind CSS Integration',
      description: 'Nullam non sodales massa. Ut justo neque, elementum et vehicula vel, pellentesque non orci.',
      icon: IconBrandTailwind,
    },
    {
      title: 'Ready-to-use Components',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      icon: IconComponents,
    },
    {
      title: 'Best Practices',
      description: 'Morbi sit amet arcu vitae metus molestie auctor sit amet in risus. Sed vel lacinia purus.',
      icon: IconListCheck,
    },
    {
      title: 'Excellent Page Speed',
      description: 'Phasellus id cursus urna. Nullam feugiat tellus sed euismod venenatis.',
      icon: IconRocket,
    },
    {
      title: 'Search Engine Optimization (SEO)',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla.',
      icon: IconArrowsRightLeft,
    },
    {
      title: 'Open to new ideas and contributions',
      description: 'Maecenas urna augue, commodo vitae lectus euismod, tempor aliquam arcu.',
      icon: IconBulb,
    },
  ],
};

// Testimonials data on Services page *******************
export const testimonialsServices: TestimonialsProps = {
  id: 'testimonials-on-home',
  hasBackground: false,
  isTestimonialUp: true,
  header: {
    title: 'Satisfied Client Experiences',
    subtitle:
      'Etiam sed odio et dolor auctor gravida. Curabitur tincidunt elit non risus pharetra sodales. Etiam sit amet mattis massa.',
  },
  testimonials: [
    {
      name: 'Silver Jordan',
      job: 'Senior Marketer',
      testimonial: `I had never found it so easy to customize a website. TailNext's templates are incredibly flexible, and with Tailwind CSS, I've managed to give my website the look and feel I always wanted. Highly recommended!`,
      image: {
        src: 'https://images.unsplash.com/photo-1565049786474-1dea82a8b995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Silver Jordan',
      },
      href: '/',
    },
    {
      name: 'Sarah Johnson',
      job: 'Business Owner',
      testimonial: `They've not only saved me a ton of time but have also made my websites look incredibly professional. The level of detail and thought that went into designing these templates is truly impressive.`,
      image: {
        src: 'https://images.unsplash.com/photo-1572417884940-c24659be6068?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Sarah Johnson',
      },
      href: '/',
    },
    {
      name: 'Lisa Gordon',
      job: 'Project Manager',
      testimonial: `Their templates are not only stunning but also user-friendly. The support I received from their community has been exceptional. I'm proud to say that I've built my dream website with TailNext.`,
      image: {
        src: 'https://images.unsplash.com/photo-1665984867752-6370ab5ae35e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Lisa Gordon',
      },
      href: '/',
    },
  ],
  callToAction: {
    targetBlank: true,
    text: 'More testimonials...',
    href: '/',
  },
};

// FAQS data on Services page *******************
export const faqsServices: FAQsProps = {
  id: 'faqs-on-services',
  hasBackground: true,
  header: {
    title: 'Answers to Common Queries',
    subtitle:
      'Etiam laoreet mi eros, vitae iaculis mi egestas blandit. Sed nisl diam, congue sed justo et, cursus sollicitudin ligula.',
  },
  columns: 1,
  items: [
    {
      title: 'Can I customize the templates to match my brand?',
      description: `Ut accumsan, massa at sagittis maximus, libero justo rhoncus metus, quis finibus neque justo quis nisi. Suspendisse sed sapien et justo iaculis faucibus.`,
      icon: IconChevronsRight,
    },
    {
      title: 'What if I need help customizing the template?',
      description: `Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent imperdiet ultricies ex consequat egestas.`,
      icon: IconChevronsRight,
    },
    {
      title: 'Are there setup guides available?',
      description: `Mauris vitae eros a dui varius luctus. Suspendisse rutrum, sapien nec blandit bibendum, justo sapien sollicitudin erat, id aliquam sapien purus quis leo. Aliquam vulputate vestibulum consectetur.`,
      icon: IconChevronsRight,
    },
    {
      title: 'Can I hire you for template customization?',
      description: `Phasellus est quam, mollis tincidunt dictum pulvinar, tempor vel justo. Mauris eu lobortis leo. Proin pretium arcu lectus, a mattis nisi fermentum quis.`,
      icon: IconChevronsRight,
    },
  ],
};

// CallToAction data on Services page *******************
export const callToActionServices: CallToActionProps = {
  id: 'callToAction-on-services',
  hasBackground: false,
  title: 'Besoin d\'un devis ?',
  subtitle:
    'Notre équipe d\'experts en systèmes embarqués est à votre disposition pour répondre à vos questions techniques et discuter de vos projets innovants.',
  callToAction: {
    text: 'Contactez-nous',
    href: '/contact',
  },
};

import { IconClock, IconHeadset, IconHelp, IconMapPin, IconMessages, IconPhoneCall } from '@tabler/icons-react';
import { ContactProps, FeaturesProps } from '~/shared/types';
import { HeroProps } from '~/shared/types';

// Hero data on Contact page *******************
export const heroContact: HeroProps = {
  title: 'Contactez notre équipe',
  subtitle: (
    <>
      <span className="hidden md:inline">{`Vous avez un projet en systèmes embarqués ? Nous sommes là pour vous accompagner.`}</span>{' '}
      {`Nos experts techniques sont à votre disposition pour discuter de vos besoins.`}
    </>
  ),
  tagline: 'Contactez MHTC',
};

// Contact data on Contact page *******************
export const contact2Contact: ContactProps = {
  id: 'contactTwo-on-contact',
  hasBackground: true,
  header: {
    title: 'Formulaire de contact',
    subtitle: (
      <>
        Remplissez ce formulaire pour nous faire part de votre projet.{' '}
        <span className="hidden md:inline">{`Nous reviendrons vers vous dans les plus brefs délais pour échanger sur vos besoins techniques.`}</span>
      </>
    ),
  },
  items: [
    {
      title: 'Notre adresse',
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
      description: ['Lundi - Vendredi : 09h00 - 18h00', 'Samedi : 09h00 - 12h00 (urgences)'],
      icon: IconClock,
    },
  ],
  form: {
    title: 'Prêt à démarrer votre projet ?',
    inputs: [
      {
        type: 'text',
        label: 'Prénom',
        name: 'name',
        autocomplete: 'off',
        placeholder: 'Votre prénom',
      },
      {
        type: 'text',
        label: 'Nom',
        name: 'lastName',
        autocomplete: 'off',
        placeholder: 'Votre nom',
      },
      {
        type: 'email',
        label: 'Adresse email',
        name: 'email',
        autocomplete: 'on',
        placeholder: 'Votre email professionnel',
      },
    ],
    radioBtns: {
      label: 'Motif de votre contact',
      radios: [
        {
          label: 'Demande générale',
        },
        {
          label: 'Support technique',
        },
        {
          label: 'Devis/projet',
        },
        {
          label: 'Autre demande',
        },
      ],
    },
    textarea: {
      cols: 30,
      rows: 5,
      label: 'Détails de votre demande',
      name: 'textarea',
      placeholder: 'Décrivez votre projet ou besoin technique...',
    },
    checkboxes: [
      {
        label: "J'ai lu et accepte la politique de confidentialité",
        value: '',
      },
      {
        label: 'Je souhaite recevoir les actualités techniques par email',
        value: '',
      },
    ],
    btn: {
      title: 'Envoyer le message',
      type: 'submit',
    },
  },
};

// Feature2 data on Contact page *******************
export const features2Contact: FeaturesProps = {
  columns: 3,
  header: {
    title: "Centre d'assistance",
    subtitle: "Besoin d'une information spécifique ?",
  },
  items: [
    {
      title: 'Questions techniques ?',
      description: 'Consultez notre foire aux questions',
      icon: IconHelp,
      callToAction: {
        text: 'Voir les FAQ',
        href: '/faqs',
      },
    },
    {
      title: 'Chat en direct',
      description: 'Discutez avec notre équipe support',
      icon: IconMessages,
      callToAction: {
        text: 'Ouvrir le chat',
        href: '/',
      },
    },
    {
      title: 'Support technique',
      description: 'Contactez nos ingénieurs',
      icon: IconHeadset,
      callToAction: {
        text: 'Nous appeler',
        href: '/',
      },
    },
  ],
};

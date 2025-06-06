import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import CandidatureForm from '~/components/widgets/CandidatureForm';
import Contact2 from '~/components/widgets/Contact2';
import { contact2Contact } from '~/shared/data/pages/contact.data';

export const metadata: Metadata = {
  title: 'Carrières',
};

const jobs = [
  {
    id: 1,
    link: "/carrieres/ee-f47ac10b-58cc-4372-a567-0e02b2c3d479",
    title: "Ingénieur embarqué",
    description: "Designer des systemes embarqués en C++ et C.",
    tags: ["Ingénierie", "Embarqué", "C++/C"]
  }
];

const frontendEngineerJob = {
  title: "Ingénieur Frontend",
  location: "Full remote (GMT+1)",
  type: "Temps plein",
  department: "Ingénierie",
  description: [
    "Nous recherchons un Ingénieur Frontend compétent pour rejoindre notre équipe en croissance. \
    Vous serez responsable de la construction et de la maintenance de nos applications web en \
    utilisant des technologies modernes comme React, Next.js et TypeScript.",
    "En tant que membre de notre équipe d'ingénierie, vous collaborerez avec les designers, \
    chefs de produit et ingénieurs backend pour offrir des expériences utilisateur exceptionnelles."
  ],
  responsibilities: [
    "Développer de nouvelles fonctionnalités frontend avec React.js et Next.js",
    "Créer des composants et bibliothèques réutilisables pour un usage futur",
    "Traduire les maquettes et wireframes en code de haute qualité",
    "Optimiser les composants pour des performances maximales sur tous les appareils et navigateurs",
    "Collaborer avec les ingénieurs backend pour intégrer les APIs",
    "Participer aux revues de code et contribuer aux discussions techniques"
  ],
  requirements: [
    "3+ ans d'expérience avec les frameworks JavaScript modernes (React, Angular ou Vue)",
    "Maîtrise approfondie de JavaScript/TypeScript, HTML5 et CSS3",
    "Expérience avec Next.js ou des frameworks SSR similaires",
    "Connaissance des APIs RESTful et GraphQL",
    "Maîtrise des mécanismes d'autorisation modernes (JWT, OAuth)",
    "Expérience avec les outils de développement frontend courants (Webpack, Babel, NPM, etc.)",
    "Connaissance des outils de gestion de versions (Git)"
  ]
};

export default async function Home({ }) {
  return (
    <section className="mx-auto min-h-screen max-w-6xl px-6 py-12 sm:px-6 sm:py-16 lg:py-20">
      <header>
        <h1 className="leading-tighter font-heading mb-8 text-center text-4xl font-bold tracking-tighter md:mb-16 md:text-5xl">
          Carrières
        </h1>
        <p className="text-center text-gray-600 mb-12">Renjoinez notre équipe</p>
      </header>

      <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">{frontendEngineerJob.title}</h1>
          <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
            <span>{frontendEngineerJob.location}</span>
            <span>•</span>
            <span>{frontendEngineerJob.type}</span>
            <span>•</span>
            <span>{frontendEngineerJob.department}</span>
          </div>

        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">A propos du poste</h2>
          {frontendEngineerJob.description.map((paragraph, index) => (
            <p key={index} className="mb-4 text-gray-700">{paragraph}</p>
          ))}
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Résponsabilités</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            {frontendEngineerJob.responsibilities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Prérequis</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            {frontendEngineerJob.requirements.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div id="apply" className="pt-8">
          <CandidatureForm position='Ingénieur Frontend' />
        </div>
      </div>


      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Postes ouverts</h2>
        <div className="grid grid-cols-1 gap-6 p-4 md:p-0 lg:grid-cols-2">
          {jobs.map(({ id, link, title, description, tags }) => (
            <div key={id} className="flex flex-col overflow-hidden  border bg-gray-100 border-gray-200  hover:shadow-lg transition-shadow duration-300">
              <Link href={link} className="h-full p-6 flex flex-col">
                <h2 className="text-xl font-bold mb-2">{title}</h2>
                <p className="text-gray-600 mb-4 flex-grow">{description}</p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1  bg-blue-800 text-white border-blue-900  text-sm rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Contact2 from '~/components/widgets/Contact2';
import { contact2Contact } from '~/shared/data/pages/contact.data';

export const metadata: Metadata = {
  title: 'Carrières',
};

const jobs = [
  {
    id: 1,
    link: "carrieres/frontend-engineer",
    title: "Ingénieur Frontend",
    description: "Rejoignez notre équipe pour développer des interfaces utilisateur élégantes et réactives avec React et Next.js.",
    tags: ["Ingénierie", "Frontend", "React"]
  },
  {
    id: 2,
    link: "carrieres/sales-manager",
    title: "Responsable Commercial",
    description: "Menez notre équipe commerciale et stimulez la croissance de l'entreprise grâce à des partenariats stratégiques.",
    tags: ["Ventes", "Management", "Business"]
  },
  {
    id: 3,
    link: "carrieres/backend-developer",
    title: "Développeur Backend",
    description: "Concevez et implémentez des services backend évolutifs avec Node.js et PostgreSQL.",
    tags: ["Ingénierie", "Backend", "Node.js"]
  },
  {
    id: 4,
    link: "carrieres/embedded-engineer",
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
          <Link
            href="#apply"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200"
          >
            Apply Now
          </Link>
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
          <h2 className="text-2xl font-bold mb-6">Candidater</h2>
          <Contact2 {...contact2Contact} />
        </div>
      </div>


      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Postes ouverts</h2>
        <div className="grid grid-cols-1 gap-6 p-4 md:p-0 lg:grid-cols-2">
          {jobs.map(({ id, link, title, description, tags }) => (
            <div key={id} className="flex flex-col overflow-hidden rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Link href={link} className="h-full p-6 flex flex-col">
                <h2 className="text-xl font-bold mb-2">{title}</h2>
                <p className="text-gray-600 mb-4 flex-grow">{description}</p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">
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

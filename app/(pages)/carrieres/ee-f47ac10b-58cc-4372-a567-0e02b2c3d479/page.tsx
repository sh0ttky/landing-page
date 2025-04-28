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
    link: "/carrieres/fe-550e8400-e29b-41d4-a716-446655440000",
    title: "Ingénieur Frontend",
    description: "Rejoignez notre équipe pour développer des interfaces utilisateur élégantes et réactives avec React et Next.js.",
    tags: ["Ingénierie", "Frontend", "React"]
  }
];

const embeddedEngineerJob = {
  title: "Ingénieur Embarqué",
  location: "Full remote (GMT+1)",
  type: "Temps plein",
  department: "Ingénierie",
  description: [
    "Nous recherchons un Ingénieur Embarqué talentueux pour rejoindre notre équipe en pleine expansion. " +
    "Vous serez responsable du développement et de l'optimisation de nos systèmes embarqués en utilisant " +
    "des technologies comme C, C++ et RTOS.",
    "En tant que membre clé de notre équipe d'ingénierie, vous collaborerez avec les architectes système, " +
    "les ingénieurs hardware et les équipes produit pour concevoir des solutions embarquées performantes et fiables."
  ],
  responsibilities: [
    "Développer et maintenir des logiciels embarqués en C/C++ pour nos produits",
    "Concevoir et optimiser des drivers pour périphériques matériels",
    "Mettre en œuvre des protocoles de communication (UART, SPI, I2C, CAN, etc.)",
    "Travailler avec des systèmes temps réel (RTOS) et des microcontrôleurs",
    "Collaborer avec les ingénieurs hardware pour le débogage et l'intégration système",
    "Participer aux revues de code et contribuer à l'amélioration des processus de développement"
  ],
  requirements: [
    "3+ ans d'expérience en développement embarqué",
    "Maîtrise approfondie du C/C++ pour systèmes embarqués",
    "Expérience avec les architectures ARM Cortex et/ou RISC-V",
    "Connaissance des protocoles de communication embarqués",
    "Expérience avec les outils de débogage (JTAG, oscilloscopes, analyseurs logiques)",
    "Familiarité avec les systèmes temps réel (FreeRTOS, Zephyr, etc.)",
    "Connaissance des outils de gestion de versions (Git) et de CI/CD pour l'embarqué"
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
          <h1 className="text-3xl font-bold mb-2">{embeddedEngineerJob.title}</h1>
          <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
            <span>{embeddedEngineerJob.location}</span>
            <span>•</span>
            <span>{embeddedEngineerJob.type}</span>
            <span>•</span>
            <span>{embeddedEngineerJob.department}</span>
          </div>

        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">A propos du poste</h2>
          {embeddedEngineerJob.description.map((paragraph, index) => (
            <p key={index} className="mb-4 text-gray-700">{paragraph}</p>
          ))}
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Résponsabilités</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            {embeddedEngineerJob.responsibilities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Prérequis</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            {embeddedEngineerJob.requirements.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div id="apply" className="pt-8">
          <h2 className="text-2xl font-bold mb-6">Candidater</h2>
          <CandidatureForm position='Ingénieur Embarqué' />
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

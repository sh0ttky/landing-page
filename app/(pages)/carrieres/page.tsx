import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Bonda from '~/components/widgets/Bonda';
import Hero from '~/components/widgets/Hero';

export const metadata: Metadata = {
  title: 'Carrières',
};

const jobs = [
  {
    id: 1,
    link: "carrieres/fe-550e8400-e29b-41d4-a716-446655440000",
    title: "Ingénieur Frontend",
    description: "Rejoignez notre équipe pour concevoir des interfaces utilisateur réactives et élégantes avec React et Next.js.",
    tags: ["Ingénierie", "Frontend", "React"]
  },
  {
    id: 2,
    link: "carrieres/sm-6ba7b810-9dad-11d1-80b4-00c04fd430c8",
    title: "Responsable Commercial",
    description: "Pilotez notre équipe commerciale et développez notre croissance grâce à des partenariats stratégiques.",
    tags: ["Ventes", "Management", "Business"]
  },
  {
    id: 3,
    link: "carrieres/be-f47ac10b-58cc-4372-a567-0e02b2c3d479",
    title: "Développeur Backend",
    description: "Concevez et implémentez des services backend scalables avec Node.js et PostgreSQL.",
    tags: ["Ingénierie", "Backend", "Node.js"]
  },
  {
    id: 4,
    link: "carrieres/sm-1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed",
    title: "Spécialiste Marketing",
    description: "Créez et déployez des campagnes de marketing digital pour étendre notre notoriété.",
    tags: ["Marketing", "Digital", "Contenu"]
  },

];

export default async function Home({ }) {
  return (


    <><Hero />
      <Bonda />
      <section className="mx-auto min-h-screen max-w-3xl px-6 py-12 sm:px-6 sm:py-16 lg:py-20">
        <header>
          <h1 className="leading-tighter font-heading mb-8 text-center text-4xl font-bold tracking-tighter md:mb-16 md:text-5xl">
            Carrières
          </h1>
          <p className="text-center text-gray-600 mb-12">Faites partie de notre équipe</p>
        </header>
        <div className="grid grid-cols-1 gap-6 p-4 md:p-0 lg:grid-cols-2">
          {jobs.map(({ id, link, title, description, tags }) => (
            <div key={id} className="flex flex-col overflow-hidden rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Link href={link} className="h-full p-6 flex flex-col">
                <h2 className="text-xl font-bold mb-2">{title}</h2>
                <p className="text-gray-600 mb-4 flex-grow">{description}</p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 border  bg-gray-200 text-gray-800 text-sm rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section></>
  );
}

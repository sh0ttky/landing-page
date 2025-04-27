import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Bonda from '~/components/widgets/Bonda';
import Hero from '~/components/widgets/Hero';
import Spontane from '~/components/widgets/Spontane';
import { CareerSection, SpontaneSection } from '~/shared/data/pages/about.data';
import { features2Services } from '~/shared/data/pages/services.data';

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
    id: 1,
    link: "carrieres/ee-f47ac10b-58cc-4372-a567-0e02b2c3d479",
    title: "Ingénieur embarqué",
    description: "Designer des systemes embarqués en C++ et C.",
    tags: ["Ingénierie", "Embarqué", "C++/C"]
  }
];

export default async function Home({ }) {
  return (


    <><Hero {...CareerSection} />
      <Bonda />
      <section className="mx-auto min-h-screen  bg-gray-50 px-6 py-12 sm:px-6 sm:py-16 lg:py-20">
        <header>
          <h1 className="leading-tighter font-heading mb-6 text-center text-4xl font-bold tracking-tighter md:mb-16 md:text-5xl">
            Nos offres d'emplois
          </h1>
          <p className="text-center text-gray-600 mb-12">Faites partie de notre équipe</p>
        </header>
        <div className="flex max-w-3xl  mx-auto  flex-col gap-6 p-4 md:p-0 lg:grid-cols-2">
          {jobs.map(({ id, link, title, description, tags }) => (
            <div key={id} className="flex flex-col overflow-hidden border bg-gray-100 p-6 hover:shadow-lg  border-gray-200 ">
              <Link href={link} className="h-full p-6 flex flex-col">
                <h2 className="text-xl font-bold mb-2">{title}</h2>
                <p className="text-gray-600 mb-4 flex-grow">{description}</p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 border  bg-blue-800 text-white border-blue-900 text-sm rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </div>
          ))}
        </div>


      </section>
      <Spontane {...SpontaneSection} /></>
  );
}

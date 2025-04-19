import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Carrières',
};

const jobs = [
  {
    id: 1,
    link: "carrieres/ingenieur-frontend",
    title: "Ingénieur Frontend",
    description: "Rejoignez notre équipe pour concevoir des interfaces utilisateur réactives et élégantes avec React et Next.js.",
    tags: ["Ingénierie", "Frontend", "React"]
  },
  {
    id: 2,
    link: "carrieres/manager-commercial",
    title: "Responsable Commercial",
    description: "Pilotez notre équipe commerciale et développez notre croissance grâce à des partenariats stratégiques.",
    tags: ["Ventes", "Management", "Business"]
  },
  {
    id: 3,
    link: "carrieres/developpeur-backend",
    title: "Développeur Backend",
    description: "Concevez et implémentez des services backend scalables avec Node.js et PostgreSQL.",
    tags: ["Ingénierie", "Backend", "Node.js"]
  },
  {
    id: 4,
    link: "carrieres/specialiste-marketing",
    title: "Spécialiste Marketing",
    description: "Créez et déployez des campagnes de marketing digital pour étendre notre notoriété.",
    tags: ["Marketing", "Digital", "Contenu"]
  },
  {
    id: 5,
    link: "carrieres/data-scientist",
    title: "Data Scientist",
    description: "Analysez des jeux de données complexes pour éclairer les décisions stratégiques.",
    tags: ["Données", "Analytique", "Machine Learning"]
  },
  {
    id: 6,
    link: "carrieres/chef-produit",
    title: "Chef de Produit",
    description: "Définissez la vision produit et collaborez avec des équipes pluridisciplinaires pour offrir une expérience utilisateur exceptionnelle.",
    tags: ["Produit", "Management", "Stratégie"]
  }
];

export default async function Home({ }) {
  return (
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
    </section>
  );
}

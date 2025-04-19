import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Carrières',
};

const jobs = [
    {
        id: 1,
        link: "carrieres/frontend-engineer",
        title: "Frontend Engineer",
        description: "Join our team to build beautiful, responsive user interfaces using React and Next.js.",
        tags: ["Engineering", "Frontend", "React"]
    },
    {
        id: 2,
        link: "carrieres/sales-manager",
        title: "Sales Manager",
        description: "Lead our sales team and drive business growth through strategic partnerships.",
        tags: ["Sales", "Management", "Business"]
    },
    {
        id: 3,
        link: "carrieres/backend-developer",
        title: "Backend Developer",
        description: "Design and implement scalable backend services with Node.js and PostgreSQL.",
        tags: ["Engineering", "Backend", "Node.js"]
    },
    {
        id: 4,
        link: "carrieres/marketing-specialist",
        title: "Marketing Specialist",
        description: "Create and execute digital marketing campaigns to expand our brand reach.",
        tags: ["Marketing", "Digital", "Content"]
    },
    {
        id: 5,
        link: "carrieres/data-scientist",
        title: "Data Scientist",
        description: "Extract insights from complex datasets to drive business decisions.",
        tags: ["Data", "Analytics", "Machine Learning"]
    },
    {
        id: 6,
        link: "carrieres/product-manager",
        title: "Product Manager",
        description: "Define product vision and work with cross-functional teams to deliver great user experiences.",
        tags: ["Product", "Management", "Strategy"]
    }
];

export default async function Home({ }) {
    return (
        <section className="mx-auto min-h-screen max-w-3xl px-6 py-12 sm:px-6 sm:py-16 lg:py-20">
            <header>
                <h1 className="leading-tighter font-heading mb-8 text-center text-4xl font-bold tracking-tighter md:mb-16 md:text-5xl">
                    Carrières
                </h1>
                <p className="text-center text-gray-600 mb-12">Join our team and help build the future</p>
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
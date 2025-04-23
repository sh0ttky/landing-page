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
    }
];

const frontendEngineerJob = {
    title: "Frontend Engineer",
    location: "Paris, France (Hybrid)",
    type: "Full-time",
    department: "Engineering",
    description: [
        "We're looking for a skilled Frontend Engineer to join our growing team. You'll be responsible for building and maintaining our web applications using modern technologies like React, Next.js, and TypeScript.",
        "As part of our engineering team, you'll collaborate with designers, product managers, and backend engineers to deliver exceptional user experiences."
    ],
    responsibilities: [
        "Develop new user-facing features using React.js and Next.js",
        "Build reusable components and front-end libraries for future use",
        "Translate designs and wireframes into high-quality code",
        "Optimize components for maximum performance across devices and browsers",
        "Collaborate with backend engineers to integrate APIs",
        "Participate in code reviews and contribute to technical discussions"
    ],
    requirements: [
        "3+ years of experience with modern JavaScript frameworks (React, Angular, or Vue)",
        "Strong proficiency in JavaScript/TypeScript, HTML5, and CSS3",
        "Experience with Next.js or similar SSR frameworks",
        "Familiarity with RESTful APIs and GraphQL",
        "Knowledge of modern authorization mechanisms (JWT, OAuth)",
        "Experience with common front-end development tools (Webpack, Babel, NPM, etc.)",
        "Familiarity with code versioning tools (Git)"
    ],
    perks: [
        "Competitive salary and equity",
        "Flexible work arrangements (hybrid model)",
        "Health insurance and wellness benefits",
        "Professional development budget",
        "Latest tech equipment",
        "Generous vacation policy"
    ]
};

export default async function Home({ }) {
    return (
        <section className="mx-auto min-h-screen max-w-6xl px-6 py-12 sm:px-6 sm:py-16 lg:py-20">
            <header>
                <h1 className="leading-tighter font-heading mb-8 text-center text-4xl font-bold tracking-tighter md:mb-16 md:text-5xl">
                    Carrières
                </h1>
                <p className="text-center text-gray-600 mb-12">Join our team and help build the future</p>
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
                    <h2 className="text-2xl font-bold mb-4">About the Role</h2>
                    {frontendEngineerJob.description.map((paragraph, index) => (
                        <p key={index} className="mb-4 text-gray-700">{paragraph}</p>
                    ))}
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Responsibilities</h2>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        {frontendEngineerJob.responsibilities.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Requirements</h2>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        {frontendEngineerJob.requirements.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Perks & Benefits</h2>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        {frontendEngineerJob.perks.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>

                <div id="apply" className="pt-8">
                    <h2 className="text-2xl font-bold mb-6">Apply for this position</h2>
                    <Contact2 {...contact2Contact} />
                </div>
            </div>

            <div className="mt-16">
                <h2 className="text-2xl font-bold mb-6">Current Openings</h2>
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
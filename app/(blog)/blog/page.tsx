import { ExternalLink, Link2Icon, LinkIcon } from 'lucide-react';
import type { Metadata } from 'next';

import Image from 'next/image';
import Link from 'next/link';
import Bonda from '~/components/widgets/Bonda';
import Contact2 from '~/components/widgets/Contact2';
import Hero from '~/components/widgets/Hero';
import { BlogSection } from '~/shared/data/pages/about.data';
import { contact2Contact } from '~/shared/data/pages/contact.data';

import { findLatestPosts } from '~/utils/posts';

export const metadata: Metadata = {
  title: 'Blog',
};

export default async function Home({ }) {
  const posts = await findLatestPosts();
  return (

    <><Hero {...BlogSection} />
      <Bonda />
      <section className="mx-auto min-h-screen max-w-3xl px-6 py-12 sm:px-6 sm:py-16 lg:py-20">
        <header>
          <h1 className="leading-tighter font-heading mb-8 text-center text-4xl font-bold tracking-tighter md:mb-16 md:text-5xl">
            Articles
          </h1>
        </header>
        <div className="grid grid-cols-1 gap-6  p-4 md:p-0 lg:grid-cols-2">
          {posts.map(({ slug, title, image }: { slug: string, title: string, image: string }) => (
            <div key={slug} className="flex flex-col overflow-hidden border bg-gray-100  hover:shadow-lg transition-all duration-300 ease-in-out   border-gray-200 ">
              <Link href={`/${slug}`}>
                <Image width={650} height={340} alt={title} src={`${image}`} />
                <h2 className="p-4 font-bold ">
                  {title}
                </h2>
              </Link>
            </div>
          ))}
        </div>
      </section>
      <Contact2 {...contact2Contact} />

    </>
  );
}

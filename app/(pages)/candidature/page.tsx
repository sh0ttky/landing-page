import type { Metadata } from 'next';
import Bonda from '~/components/widgets/Bonda';
import CandidatureForm from '~/components/widgets/CandidatureForm';

import Contact2 from '~/components/widgets/Contact2';
import Features2 from '~/components/widgets/Features2';
import Hero from '~/components/widgets/Hero';
import { heroCandidature } from '~/shared/data/pages/contact.data';

export const metadata: Metadata = {
  title: 'Candidature spontanée',
};

const Page = () => {
  return (
    <>
      <Hero {...heroCandidature} />
      <Bonda />
      <div id="apply" className="pt-8">
        <h2 className="text-2xl text-center font-bold mb-6">Candidature spontanée</h2>
        <CandidatureForm position='' />
      </div>
    </>
  );
};

export default Page;

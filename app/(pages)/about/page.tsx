import type { Metadata } from 'next';
import Bonda from '~/components/widgets/Bonda';
import Contact from '~/components/widgets/Contact';
import Contact2 from '~/components/widgets/Contact2';
import Content from '~/components/widgets/Content';

import FAQs from '~/components/widgets/FAQs';
import Features from '~/components/widgets/Features';
import Features3 from '~/components/widgets/Features3';
import Features4 from '~/components/widgets/Features4';
import Hero2 from '~/components/widgets/Hero2';
import { PartnerzCarousel } from '~/components/widgets/Partners';
import Stats from '~/components/widgets/Stats';
import Steps from '~/components/widgets/Steps';
import Team2 from '~/components/widgets/Team2';
import Testimonials2 from '~/components/widgets/Testimonials2';
import {
  contactAbout,
  faqsAbout,
  featuresFourAbout,
  featuresFourAboutTwo,
  features3About,
  hero2About,
  statsAbout,
  stepsAbout,
  testimonials2About,
} from '~/shared/data/pages/about.data';
import { contact2Contact } from '~/shared/data/pages/contact.data';

export const metadata: Metadata = {
  title: `A propos`,
};

const Page = () => {
  return (
    <>
      <Hero2 {...hero2About} />
      <Bonda />
      <Stats {...statsAbout} />
      <Content {...featuresFourAbout} />


      {/* <Features4 {...featuresFourAbout} /> */}
      <Features4 {...featuresFourAboutTwo} />
      <Steps {...stepsAbout} />
      <Features3 {...features3About} />
      {/* <Features {...featuresAbout} /> */}
      {/* <Team2 {...teamAbout} /> */}
      {/* <Testimonials2 {...testimonials2About} /> */}
      <FAQs {...faqsAbout} />
      <PartnerzCarousel />
      <Contact2 {...contact2Contact} />
    </>
  );
};

export default Page;

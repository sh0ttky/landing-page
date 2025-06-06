'use client'
import type { Metadata } from 'next';

import { SITE } from '~/config.js';

import Hero from '~/components/widgets/Hero';
import SocialProof from '../src/components/widgets/SocialProof';
import Features from '~/components/widgets/Features';
import Content from '~/components/widgets/Content';
import Steps from '~/components/widgets/Steps';
import Testimonials from '~/components/widgets/Testimonials';
import FAQs2 from '~/components/widgets/FAQs2';
import Pricing from '~/components/widgets/Pricing';
import Team from '~/components/widgets/Team';
import CallToAction2 from '~/components/widgets/CallToAction2';
import Contact from '~/components/widgets/Contact';
import {
  callToAction2Home,
  contactHome,
  contentHomeOne,
  contentHomeTwo,
  faqs2Home,
  featuresHome,
  heroHome,
  pricingHome,
  socialProofHome,
  stepsHome,
  teamHome,
  testimonialsHome,
} from '~/shared/data/pages/home.data';
import Hero2 from '~/components/widgets/Hero2';
import { CompaniezCarousel } from '~/components/widgets/Companiez';
import Bonda from '~/components/widgets/Bonda';
import Contact2 from '~/components/widgets/Contact2';
import { contact2Contact } from '~/shared/data/pages/contact.data';
import Content2 from '~/components/widgets/Content2';


export default function Page() {
  return (
    <>
      <Hero2 {...heroHome} />
      <Bonda />
      {/* <Features {...featuresHome} /> */}
      <Content {...contentHomeOne} />
      <Content2 {...contentHomeTwo} />
      {/* <Steps {...stepsHome} /> */}

      {/* <SocialProof {...socialProofHome} /> */}
      <CompaniezCarousel />

      {/* <Testimonials {...testimonialsHome} /> */}
      {/* <FAQs2 {...faqs2Home} />
      <Pricing {...pricingHome} />
      <Team {...teamHome} />*/}
      <Contact2 {...contact2Contact} />
      {/* <CallToAction2 {...callToAction2Home} /> */}
    </>
  );
}

import { Metadata } from 'next';
import Bonda from '~/components/widgets/Bonda';
import CallToAction from '~/components/widgets/CallToAction';
import Contact2 from '~/components/widgets/Contact2';
import Content from '~/components/widgets/Content';
import ContentServices from '~/components/widgets/ContentServices';
import FAQs from '~/components/widgets/FAQs';
import Features2 from '~/components/widgets/Features2';
import Features4 from '~/components/widgets/Features4';
import Hero from '~/components/widgets/Hero';
import Testimonials from '~/components/widgets/Testimonials';
import { contact2Contact } from '~/shared/data/pages/contact.data';
import {
  callToActionServices,
  contentServicesOne,
  contentServicesTwo,
  faqsServices,
  features2Services,
  features4Services,
  heroServices,
  testimonialsServices,
} from '~/shared/data/pages/services.data';

export const metadata: Metadata = {
  title: 'Services',
};

const Page = () => {
  return (
    <>
      <Hero {...heroServices} />
      <Bonda />
      <Features2 {...features2Services} />
      <ContentServices {...contentServicesOne} />
      <Content {...contentServicesTwo} />
      {/* <Features4 {...features4Services} /> */}
      {/* <Testimonials {...testimonialsServices} /> */}
      {/* <FAQs {...faqsServices} /> */}
      {/* <CallToAction {...callToActionServices} /> */}
      <Contact2 {...contact2Contact} />


    </>
  );
};

export default Page;

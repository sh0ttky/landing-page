import Image from 'next/image';
import { HeroProps } from '~/shared/types';
import CTA from '../common/CTA';


const Hero = ({ title, subtitle, tagline, callToAction, callToAction2, image }: HeroProps) => {
  return (
    <section
      id="heroTwo"
      className=" h-[600px] bg-fixed bg-white dark:bg-slate-800"
    >

      <div className="bg-[url('/bg.png')] bg-cover bg-no-repeat w-full h-full">
        <div className="mx-auto  max-w-7xl px-4 pt-[72px] sm:px-6 md:flex md:h-screen 2xl:h-auto">
          <div className="block py-12 text-center md:flex md:py-12 md:text-left lg:py-16">
            <div className="mx-auto flex max-w-5xl basis-[56%] items-center">
              <div className="max-w-3xl pb-12 pr-0 md:py-0 md:pr-8 md:pb-0 lg:pr-16">
                {tagline && (
                  <p className="text-base font-semibold uppercase tracking-wide text-gray-400 dark:text-primary-200">
                    {tagline}
                  </p>
                )}
                {title && (
                  <h1 className="leading-tighter truncate text-white font-heading mb-4 px-4 text-md font-bold tracking-tighter md:px-0 md:text-[2.48rem]">
                    {title}
                  </h1>
                )}
                <div className="mx-auto max-w-3xl">
                  {subtitle && <p className="mb-8 text-xl font-normal text-gray-300 dark:text-slate-400">{subtitle}</p>}
                  <div className="flex max-w-none flex-col flex-nowrap justify-center gap-4 sm:flex-row md:m-0 md:justify-start">
                    {callToAction2 && <CTA callToAction={callToAction2} linkClass=" bg-blue-900 text-white m-1 py-2 px-5 text-sm font-semibold shadow-none md:px-6"
                    />}
                  </div>
                </div>
              </div>
            </div>
            <div className="block flex-1 items-center md:flex">
              <div className="relative m-auto h-full max-w-4xl object-cover">

              </div>
            </div>
          </div>
        </div>

      </div>


    </section>
  );
};

export default Hero;

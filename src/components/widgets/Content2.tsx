'use client'
import Image from 'next/image';
import { IconCheck } from '@tabler/icons-react';

import { ContentProps } from '~/shared/types';
import Headline from '../common/Headline';
import WidgetWrapper from '../common/WidgetWrapper';
import ItemGrid from '../common/ItemGrid';
import { ModelViewer } from './3D';

const Content2 = ({
  header,
  content,
  items,
  image,
  isReversed,
  isAfterContent,
  id,
  hasBackground = false,
  modelPath,
}: ContentProps) => (
  <WidgetWrapper
    id={id ? id : ''}
    hasBackground={hasBackground}
    containerClass={`${isAfterContent ? 'py-0 md:py-4 lg:py-4 my-10 text-gray-300 bg-blue-900 pb-6 md:pb-6 lg:pb-10' : ''}`}
  >
    {header && <Headline header={header} titleClass="text-md text-white sm:text-2xl" />}
    <div className="mx-auto max-w-7xl">
      <div className={`md:flex ${isReversed ? 'md:flex-row-reverse' : ''} md:gap-4`}>
        <div className="self-center md:basis-1/2">
          {content && <div className="mb-1 lg:mb-2 text-md text-white dark:text-slate-400">{content}</div>}
          <ItemGrid
            items={items}
            columns={1}
            defaultIcon={IconCheck}
            containerClass="gap-1 md:gap-y-1"
            panelClass="flex max-w-full"
            titleClass="text-md font-medium leading-3 text-white dark:text-white mt-1 mb-2"
            descriptionClass="mt-1 text-gray-300 dark:text-slate-400"
            iconClass="flex-shrink-0 w-4 h-4 flex items-center font-bold justify-center rounded-full bg-white text-blue-900 font-bold mr-4 rtl:mr-0 rtl:ml-4 mt-1 p-1"
          />
        </div>
        <div aria-hidden="true" className="m-auto">
          {image && (
            <><div className="m-auto max-w-4xl hover:animate-out relative">
              {/* Main Image */}
              <Image
                className="m-auto rounded-t-sm  bg-gray-400 dark:bg-slate-700"
                src={"/picz/2.png"}
                width={750}
                height={950}
                alt={"/picz/2.png"}
                sizes=""
                quality={100} />

              {/* Rectangle with Random Text */}

            </div><div className="m-auto max-w-4xl relative">
                {/* Main Image */}
                <Image
                  className="m-auto rounded-b-sm  bg-gray-400 dark:bg-slate-700"
                  src={"/picz/1.png"}
                  width={750}
                  height={950}
                  alt={"/picz/2.png"}
                  sizes=""
                  quality={100} />

                {/* Rectangle with Random Text */}
                <div className="absolute bottom-0 left-0 right-0 bg-blue-900 bg-opacity-70 text-white p-4 rounded-b-lg">
                  <p className="text-center text-xl font-bold">

                    Des solutions pour le test et la mesure     </p>
                  <p className="text-center text-md ">

                    Plus de 7 ans d'experience     </p>
                </div>
              </div></>
          )}
        </div>
      </div>
    </div>
  </WidgetWrapper>
);

export default Content2;

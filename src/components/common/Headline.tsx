import { HeadlineProps } from '~/shared/types';
import { twMerge } from 'tailwind-merge';

const Headline = ({ header, containerClass, titleClass, subtitleClass }: HeadlineProps) => {
  const { title, subtitle, tagline, position } = header;

  return (
    <div className="mb-4 gap-6 ">
      {(title || subtitle || tagline) && (
        <div
          className={twMerge(
            `mb-6 mx-auto md:mb-12 ${position === 'left' ? 'text-left ml-0' : position === 'right' ? 'text-right mr-0' : 'text-center'
            }`,
            containerClass,
          )}
        >
          {tagline && (
            <p className="text-base font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-200">
              {tagline}
            </p>
          )}
          {title && <h2 className={twMerge(`font-heading mb-4 font-bold tracking-wide`, titleClass)}>{title}</h2>}
          {subtitle && (
            <p
              className={twMerge(
                `mx-auto mt-4 max-w-3xl text-lg text-gray-300 dark:text-slate-400 ${position === 'left' ? 'text-left ml-0' : position === 'right' ? 'text-right mr-0' : 'text-center'
                }`,
                subtitleClass,
              )}
            >
              {subtitle}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Headline;

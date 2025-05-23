import { footerData2 } from '~/shared/data/global.data';
import Logo from '../atoms/Logo';

const Footer2 = () => {
  const { links, columns, socials, footNote } = footerData2;

  return (
    <div className="w-full  bg-blue-900 px-4 sm:px-6">
      <div className='max-w-7xl mx-auto justify-center'>

        <div className="xs:gap-8  mx-auto flex gap-4 gap-y-8 pt-8 ">
          <Logo src={'/logo_white.png'} />
          {columns.map(({ title, texts }, index) => (
            <div
              key={`item-column-${index}`}
              className="col-span-4 sm:col-span-2 md:col-span-2 lg:col-span-1 xl:col-span-1"
            >
              <div className="mb-2 font-medium text-white dark:text-gray-300">{title}</div>
              {texts &&
                texts.map((text, index2) => (
                  <p key={`item-text-${index2}`} className="text-gray-200 dark:text-slate-400">
                    {text}
                  </p>
                ))}
            </div>
          ))}

        </div>
        <div className="text-muted  truncate pb-6 text-sm text-gray-700 dark:text-slate-400 md:flex md:items-center  md:py-8">
          <ul className="mb-4 flex pl-2 rtl:pl-0 rtl:pr-2 md:order-1 md:mb-0">
            {links &&
              links.map(({ label, href }, index) => (
                <li key={`item-link-${index}`}>
                  <a
                    className="duration-150 ease-in-out placeholder:transition hover:text-white hover:underline dark:text-white"
                    aria-label={label}
                    href={href}
                  >
                    {label}
                  </a>
                  {links.length - 1 !== index && <span className="mr-1 rtl:mr-0 rtl:ml-1"> · </span>}
                </li>
              ))}
          </ul>

        </div>

      </div>

    </div>
  );
};

export default Footer2;

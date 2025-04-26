import Form from '../common/Form';
import Headline from '../common/Headline';
import { ContactProps } from '~/shared/types';
import WidgetWrapper from '../common/WidgetWrapper';

const Contact2 = ({ header, content, items, form, id, hasBackground = false }: ContactProps) => (
  <WidgetWrapper id={id ? id : ''} hasBackground={hasBackground} containerClass="max-w-7xl bg-gray-50 mx-auto">
    {header && <Headline header={header} titleClass="text-md sm:text-2xl" />}
    <div className="flex flex-row p-14  bg-gray-200 justify-between rounded-md  items-stretch ">
      <div className="h-full my-auto ">
        {content && <p className="mt-3 mb-12 text-sm text-gray-600 dark:text-slate-400">{content}</p>}
        <ul className="mb-6 md:mb-0">
          {items &&
            items.map(({ title, description, icon: Icon }, index) => (
              <li key={`item-contact-${index}`} className="flex">
                <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                  {Icon && <Icon className="h-6 w-6" />}
                </div>
                <div className="ml-4 rtl:ml-0 rtl:mr-4 mb-4">
                  <h3 className="mb-2 text-md font-medium leading-6 text-gray-900 dark:text-white">{title}</h3>
                  {typeof description === 'string' ? (
                    <p key={`text-description-${index}`} className="text-gray-600 dark:text-slate-400">
                      {description}
                    </p>
                  ) : (
                    description &&
                    description.map((desc, index) => (
                      <p key={`text-description-${index}`} className="text-gray-600 dark:text-slate-400">
                        {desc}
                      </p>
                    ))
                  )}
                </div>
              </li>
            ))}
        </ul>
      </div>
      <Form {...form} containerClass="card h-fit max-w-2xl " btnPosition="right" />
    </div>
  </WidgetWrapper>
);

export default Contact2;

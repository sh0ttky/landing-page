import { FeaturesProps } from '~/shared/types';
import Headline from '../common/Headline';
import ItemGrid from '../common/ItemGrid';
import CTA from '../common/CTA';

const Spontane = ({ header, items, columns = 3, id, callToAction2 }: FeaturesProps) => (
    <section className="flex flex-col bg-gray-50 mx-auto py-12 md:py-16 lg:py-20" id="features2">
        <div className="pointer-events-none absolute inset-0 mb-36  dark:bg-slate-800"></div>
        <div className="relative mx-auto -mb-12 max-w-6xl  px-4 sm:px-6">
            {header && <Headline header={header} titleClass="text-4xl md:text-5xl" />}
            <ItemGrid
                id={id}
                items={items}
                columns={columns}
                defaultColumns={3}
                panelClass="card flex flex-start min-w-screen-sm border bg-gray-100 p-6 hover:shadow-sm transition-all duration-300 ease-in-out items-stretch h-full" iconClass="h-8 w-8 mr-4 text-blue-800 dark:text-primary-600"
                titleClass="text-xl font-bold"
                descriptionClass="text-md text-gray-500 dark:text-gray-400"
                actionClass="justify-start"
            />
        </div>
        {callToAction2 && <CTA callToAction={callToAction2} linkClass=" w-[400px]  mx-auto my-10 bg-blue-900 justify-center text-white py-3 px-5 text-sm font-semibold shadow-none "
        />}
    </section>

);

export default Spontane;


'use client'
import { cn } from "~/lib/utils";
import { Marquee } from "../magicui/marquee";


const partners = [
    {
        id: 1,
        img: "/partners/asus.png",
    },
    {
        id: 2,
        img: "/partners/intel.svg",
    },
    {
        id: 3,
        img: "/partners/micron.png",
    },
    {
        id: 4,
        img: "/partners/mouser.png",
    },
    {
        id: 5,
        img: "/partners/st.png",
    },
    {
        id: 6,
        img: "/partners/emitech.png",
    },
    {
        id: 7,
        img: "/partners/siemens.png",
    },
];


const Logoz = ({
    img,

}: {
    img: string;

}) => {
    return (
        <div
            className={cn(
                " flex h-full w-40 cursor-pointer mx-10  my-auto overflow-hidden",

            )}
        >
            <img className="my-auto" width="100%" height="100%" alt="" src={img} />

        </div>
    );
};

export function PartnerzCarousel() {
    return (

        <div className="relative flex w-full flex-col my-auto items-center justify-center overflow-hidden">

            <p className="text-base font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-200">
                Partenaires
            </p>

            <p className="font-heading mb-4 px-4 font-bold text-md sm:text-2xl text-center">
                Nos partenaires technologiques
            </p>

            <Marquee className=" [--duration:20s]">
                {partners.map((partner) => (
                    <Logoz key={partner.id} {...partner} />
                ))}
            </Marquee>

            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background/70"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background/70"></div>
        </div>
    );
}

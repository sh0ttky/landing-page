'use client'
import { cn } from "~/lib/utils";
import { Marquee } from "../magicui/marquee";


const companys = [
  {
    id: 1,
    img: "/companies/alstom.png",
  },
  {
    id: 2,
    img: "/companies/continental.svg",
  },
  {
    id: 3,
    img: "/companies/vitesco.png",
  },
  {

    id: 4,
    img: "/companies/skipper_ndt.png",
  },
  {
    id: 5,
    img: "/companies/poma.png",
  },
  {
    id: 6,
    img: "/companies/cactile.png",
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

export function CompaniezCarousel() {
  return (

    <div className="relative flex w-full flex-col my-auto items-center justify-center overflow-hidden">

      <p className="text-base font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-200">
        Clients
      </p>

      <p className="font-heading mb-4 px-4 font-bold text-md sm:text-2xl text-center">
        On a travaillé avec
      </p>

      <Marquee className=" [--duration:20s]">
        {companys.map((company) => (
          <Logoz key={company.id} {...company} />
        ))}
      </Marquee>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background/70"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background/70"></div>
    </div>
  );
}

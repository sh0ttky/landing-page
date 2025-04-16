import React from 'react'

type Props = {}


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



const Partners = (props: Props) => {
    return (

        <><div className='flex w-full flex-col my-auto items-center justify-center overflow-hidden'>


            <p className="font-heading mb-14 px-4 font-bold text-3xl md:text-4xl text-center">
                Nos partenaires technologiques
            </p>

        </div>


            <div className='flex  max-w-6xl flex-row gap-2 justify-center mx-auto'>
                {partners.map((partner) => (

                    <img key={partner.id} className="m-auto" width="130" height="130" alt="partners" src={partner.img} />



                ))}




            </div></>
    )
}

export default Partners
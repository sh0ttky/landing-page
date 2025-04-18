import Image from 'next/image';

interface LogoSource {
  src: string;
}



const Logo = ({ src }: LogoSource) => {

  const Invert = src === '/logo_white.png';
  const ImageClass = `mx-auto h-auto w-full rounded-m  ${Invert ? 'invert' : ''}`
  return (

    <span className="ml-2 self-center whitespace-nowrap 4xl:inline text-2xl font-bold text-gray-900 dark:text-white md:text-xl">
      <Image
        className={ImageClass}
        src={src}
        alt={"logo"}
        width={400}
        height={250}
        sizes="(max-width: 640px) 8rem, (max-width: 768px) 10rem, (max-width: 1024px) 12rem, (max-width: 1280px) 14rem, 16rem"
        loading="eager"
        priority
      />
    </span>
  );
};
export default Logo;

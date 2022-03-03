import NextImage from 'next/image';

const Image = ({ src, alt, ...props }) => (
  <div className="relative w-full overflow-hidden rounded aspect-[16/10] border border-stone-light shadow transition-all hover:-translate-y-0.5 hover:scale-[1.003] hover:shadow-yolk">
    <NextImage {...props} src={src} alt={alt} layout="fill" objectFit="cover" />
  </div>
);

export default Image;
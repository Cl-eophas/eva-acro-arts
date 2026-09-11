import { getImage } from '../data/images';

export default function Picture({ name, alt, className = '', loading = 'lazy', sizes, eager = false }) {
  const { jpg, webp } = getImage(name);
  if (!jpg) return null;
  return (
    <picture className="contents">
      {webp && <source srcSet={webp} type="image/webp" sizes={sizes} />}
      <img
        src={jpg}
        alt={alt}
        className={className}
        loading={eager ? 'eager' : loading}
        decoding="async"
        sizes={sizes}
      />
    </picture>
  );
}

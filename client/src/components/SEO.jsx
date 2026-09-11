import { Helmet } from 'react-helmet-async';
import { brand } from '../data/content';

export default function SEO() {
  const title = `${brand.fullName} | Movement, Training & Performance`;
  const description =
    'EVA ACRODANCE AND ART brings together movement training and professional aerial and acrobatic performance for children, teens and adults.';
  const url = typeof window !== 'undefined' ? window.location.origin + '/' : '/';
  const imageUrl = typeof window !== 'undefined' ? `${window.location.origin}${import.meta.env.BASE_URL}og-image.jpg` : 'og-image.jpg';

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={brand.fullName} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="EVA ACRODANCE AND ART aerial hoop performer mid-routine" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="#0a0611" />

      {/* Structured data — person / performing arts */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'PerformingGroup',
          name: brand.fullName,
          description,
          url,
          image: imageUrl,
          email: brand.email,
          telephone: brand.phone,
          address: { '@type': 'PostalAddress', streetAddress: brand.location, addressCountry: 'KE' },
        })}
      </script>
    </Helmet>
  );
}

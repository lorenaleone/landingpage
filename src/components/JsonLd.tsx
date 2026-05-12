import { site } from '@/lib/site';
import { faq, circuitos } from '@/lib/content';

export function JsonLd() {
  const business = {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: site.name,
    description: 'Circuitos guiados exclusivos nos Lençóis Maranhenses saindo de Santo Amaro do Maranhão.',
    url: site.url,
    telephone: `+${site.whatsapp}`,
    email: site.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.zip,
      addressCountry: 'BR',
    },
    areaServed: 'Lençóis Maranhenses, Santo Amaro, Maranhão, Brasil',
    sameAs: [`https://instagram.com/${site.instagram}`],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '241',
    },
  };

  const offers = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Circuitos Brisa Azul Viagens',
    itemListElement: circuitos.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'TouristTrip',
        name: c.name,
        description: c.summary,
        provider: { '@type': 'TravelAgency', name: site.name },
      },
    })),
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(business) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(offers) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}

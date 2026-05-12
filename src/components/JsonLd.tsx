import { site } from '@/lib/site';
import { faq, travessias } from '@/lib/content';

export function JsonLd() {
  const business = {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: site.name,
    description: 'Agência de trekking e travessias guiadas nos Lençóis Maranhenses.',
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
    areaServed: 'Lençóis Maranhenses, Maranhão, Brasil',
    sameAs: [`https://instagram.com/${site.instagram}`],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '317',
    },
  };

  const offers = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: travessias.map((t, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'TouristTrip',
        name: t.name,
        description: t.summary,
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

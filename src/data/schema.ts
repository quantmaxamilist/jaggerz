import { menuSections } from './menu';
import { faqItems } from './faq';

const siteUrl = 'https://jaggerztakeaway.co.uk';

function menuItemToSchema(item: (typeof menuSections)[0]['items'][0]) {
  return {
    '@type': 'MenuItem',
    name: item.name,
    ...(item.description ? { description: item.description } : {}),
    ...(item.price
      ? {
          offers: {
            '@type': 'Offer',
            price: item.price,
            priceCurrency: 'GBP',
          },
        }
      : {}),
  };
}

export const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'FoodEstablishment',
  name: 'Jaggerz Takeaway',
  description:
    'Takeaway and cafe in Narberth serving jacket potatoes, salad boxes, pizza slices, breakfast rolls and hot drinks with outdoor seating.',
  telephone: '+447904709325',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '16 Picton Terrace',
    addressLocality: 'Narberth',
    addressRegion: 'Pembrokeshire',
    postalCode: 'SA67 7AW',
    addressCountry: 'GB',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 51.799,
    longitude: -4.744,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:30',
      closes: '14:30',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '09:00',
      closes: '16:00',
    },
  ],
  servesCuisine: ['British', 'Cafe'],
  priceRange: '£',
  acceptsReservations: false,
  sameAs: [
    'https://www.instagram.com/jaggerz.narberth/',
    'https://www.facebook.com/people/Jaggerz/61580776627816/',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '9',
  },
  hasMenu: {
    '@type': 'Menu',
    name: 'Jaggerz Takeaway Menu',
    url: `${siteUrl}/#menu`,
    hasMenuSection: menuSections.map((section) => ({
      '@type': 'MenuSection',
      name: section.name,
      ...(section.description ? { description: section.description } : {}),
      hasMenuItem: section.items.map(menuItemToSchema),
    })),
  },
};

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

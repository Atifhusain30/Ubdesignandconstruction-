// Single source of truth for business facts. Everything here comes from
// UB's own brand materials (business card, logo) and its Google Business Profile.
export const company = {
  name: 'UB Design and Construction',
  tagline: 'Commercial Design • Build',
  phone: '(972) 477-0776',
  phoneHref: 'tel:+19724770776',
  email: 'ubdesignandconstruction@gmail.com',
  siteUrl: 'https://ubdesignandconstruction.com',
  serviceArea: 'Dallas–Fort Worth, Texas',
  social: [
    { name: 'Instagram', href: 'https://www.instagram.com/ubdesignandconstruction', icon: 'instagram' },
    { name: 'Facebook', href: 'https://www.facebook.com/p/UB-Design-Construction-61582434309672/', icon: 'facebook' },
  ] as const,
}

export const services = [
  {
    id: 'design',
    title: 'Interior Design',
    blurb:
      'Concept, layout, materials and 3D renderings for commercial spaces — so you see the finished space before anything is built.',
  },
  {
    id: 'commercial',
    title: 'Commercial Build-Outs',
    blurb:
      'Restaurants, bars, salons, cafés and retail — managed from demo to open doors with one crew, one schedule and one point of contact.',
  },
  {
    id: 'millwork',
    title: 'Custom Millwork & CNC',
    blurb:
      'Custom woodwork, cabinetry, accent walls, architectural finishes and CNC-cut decorative wall art fabricated for your space.',
  },
]

export type Project = {
  src: string
  alt: string
  w: number
  h: number
  type: string
}

// Real completed commercial projects (photos supplied by UB + Google Business Profile).
export const commercialProjects: Project[] = [
  { src: '/images/google/lounge.jpg', alt: 'Hookah lounge with CNC-cut decorative wall screens, red velvet seating and ornate ceiling lighting', w: 1600, h: 1200, type: 'Lounge' },
  { src: '/images/commercial/commercial-01.jpg', alt: 'Private dining room with marble table and textured stone wall', w: 1320, h: 1678, type: 'Restaurant' },
  { src: '/images/commercial/commercial-02.jpg', alt: 'Barbershop interior with marble floor and leather lounge seating', w: 1320, h: 1568, type: 'Barbershop' },
  { src: '/images/commercial/commercial-03.jpg', alt: 'Salon with arched mirror stations and chandelier', w: 1320, h: 1260, type: 'Salon' },
  { src: '/images/commercial/commercial-04.jpg', alt: 'Lounge with dark wood ceiling, pendant lights and booth seating', w: 1320, h: 1214, type: 'Lounge' },
  { src: '/images/commercial/commercial-05.jpg', alt: 'Café dining area with pink banquette and gallery wall', w: 1320, h: 988, type: 'Café' },
  { src: '/images/commercial/commercial-06.jpg', alt: 'Dessert shop display cases and counter', w: 1320, h: 891, type: 'Dessert shop' },
  { src: '/images/commercial/commercial-07.jpg', alt: 'Café seating with wood tables and display counter', w: 1320, h: 932, type: 'Café' },
  { src: '/images/commercial/commercial-08.jpg', alt: 'Café dining room with pink wainscot and pendant lighting', w: 1320, h: 945, type: 'Café' },
  { src: '/images/commercial/commercial-09.jpg', alt: 'Restaurant dining room with wood slat wall and sconce lighting', w: 1320, h: 1361, type: 'Restaurant' },
  { src: '/images/commercial/commercial-10.jpg', alt: 'Sports bar with long counter, TVs and bar stools', w: 1320, h: 910, type: 'Bar' },
  { src: '/images/commercial/commercial-11.jpg', alt: 'Restaurant bar area with neon sign and communal tables', w: 1320, h: 1433, type: 'Restaurant' },
  { src: '/images/commercial/commercial-12.jpg', alt: 'Restaurant counter seating with red stools', w: 1092, h: 928, type: 'Restaurant' },
  { src: '/images/commercial/commercial-13.jpg', alt: 'Café lounge with moon mural and leather chairs', w: 1041, h: 905, type: 'Café' },
  { src: '/images/commercial/commercial-14.jpg', alt: 'Nail salon with pedicure chairs and wood slat reception', w: 1320, h: 1394, type: 'Nail salon' },
  { src: '/images/commercial/commercial-15.jpg', alt: 'Nail salon with white pedicure stations and neon sign', w: 1320, h: 1291, type: 'Nail salon' },
]

// Design → build proof: a 3D design rendering next to the same space under construction.
export const designToBuild = {
  rendering: { src: '/images/google/design-rendering.jpg', alt: '3D design rendering of a restaurant lounge with slatted wood ceiling, stone wall and arched millwork', w: 930, h: 1600 },
  progress: { src: '/images/google/build-in-progress.jpg', alt: 'The same restaurant mid-construction: arched millwork framed, tile floor laid, counter and display case in place', w: 1200, h: 1600 },
}

export const process = [
  { step: '01', title: 'Consultation', text: 'We walk the space, talk through how you want it to work and feel, and set a budget range together.' },
  { step: '02', title: 'Design & renderings', text: 'Layout, materials and 3D renderings get approved before construction, so you know exactly what you are getting.' },
  { step: '03', title: 'Build & fabricate', text: 'Our crew builds it and our shop fabricates the millwork. One schedule, one point of contact, clean job site.' },
  { step: '04', title: 'Final walk-through', text: 'We walk the finished space with you and don’t call it done until you do.' },
]

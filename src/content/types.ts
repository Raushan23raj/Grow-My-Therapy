
export type Img = {
  src: string;
  alt: string;
  position?: string;
};

export type Link = { label: string; href: string };

export type NavItem = Link & { children?: Link[] };

export type SiteContent = {
  brand: {
    name: string;
    tagline: string;
    href: string;
    logo?: Img & { width: number; height: number };
  };
  nav: NavItem[];
  navCta: Link;

  hero: {
    eyebrow: string;
    title: string;
    text: string;
    button: Link;
    image: Img;
    sideImage: Img;
  };
  intro: {
    title: string;
    lead: string;
    body: [string, string];
    image: Img;
  };
  audiences: {
    id?: string;
    title: string;
    items: { id?: string; title: string; href?: string; text: string; image: Img }[];
  };
  quote: { text: string; image: Img };
  focus: { title: string; items: { label: string; href?: string }[] };
  approach: {
    id?: string;
    eyebrow: string;
    title: string;
    lead: string;
    body: [string, string];
    button: Link;
    image: Img;
  };
  journey: { title: string; image: Img };
  methods: {
    id?: string;
    title: string;
    items: { id?: string; title: string; text: string; link: Link }[];
  };
  office?: {
    eyebrow: string;
    title: string;
    text: string[];
    details: { label: string; value: string }[];
    button: Link;
    images: [Img, Img];
  };
  faq?: {
    title: string;
    items: { question: string; answer: string }[];
  };
  booking: {
    eyebrow: string;
    title: string;
    body: string[];
    button: Link;
    image: Img;
    sideImage: Img;
  };
  footer: {
    blurb: string;
    columns: { title: string; links: Link[] }[];
    contact: { title: string; lines: string[]; links: Link[]; note: string };
    legal: Link[];
    credit: string;
    crisisNote?: string;
  };
};

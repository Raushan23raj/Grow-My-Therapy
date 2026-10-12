import type { SiteContent } from "./types";

/**
 * Part 1: faithful copy of https://www.conejovalleycounseling.com/home, used to
 * check layout accuracy before the redesign. Photos load from the original CDN
 * and inner links point back at the original site.
 */

const CDN = "https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10";
const SITE = "https://www.conejovalleycounseling.com";

const photo = (path: string, alt = "", position?: string) => ({
  src: `${CDN}/${path}`,
  alt,
  position,
});

const team = [
  ["Jennifer Anderson", "LMFT", "jennifer-anderson"],
  ["Heather Williams-Baumgart", "AMFT", "heather-williams-baumgart"],
  ["Autumn Bodily", "AMFT", "autumn-bodily"],
  ["Candace Bletscher", "AMFT", "candace-bletscher"],
  ["Samantha Johnson", "AMFT", "samantha-johnson"],
  ["Rosa Gomez", "AMFT", "rosa-gomez"],
  ["Chad Flores", "AMFT", "chad-flores"],
  ["Simran Sidhu", "AMFT", "simran-sidhu"],
  ["Jessica Jauregui", "MA, AMFT", "jessica-jauregui"],
] as const;

export const conejo: SiteContent = {
  brand: {
    name: "Conejo Valley",
    tagline: "Family Counseling",
    href: "/clone",
    logo: {
      ...photo("7116bf54-a0e1-4128-81d8-24fd9960c7ed/Conejo+Valley+Counseling+Logo.png", "Conejo Valley Family Counseling"),
      width: 1500,
      height: 438,
    },
  },
  nav: [
    { label: "About", href: `${SITE}/therapists-newbury-park` },
    {
      label: "Our Team",
      href: `${SITE}/our-team`,
      children: team.map(([name, title, slug]) => ({ label: `${name}, ${title}`, href: `${SITE}/${slug}` })),
    },
    {
      label: "Specialties",
      href: `${SITE}/specialties`,
      children: [
        { label: "Dissociation", href: `${SITE}/dissociative-identity-disorder-therapist-newbury-park` },
        { label: "Trauma", href: `${SITE}/trauma-counseling-newbury-park` },
        { label: "Special Needs Parenting", href: `${SITE}/counseling-special-needs-parents-newbury-park` },
        { label: "Couples", href: `${SITE}/couples-therapy` },
        { label: "Children & Teens", href: `${SITE}/children-and-teens` },
        { label: "Anxiety & Depression", href: `${SITE}/anxiety-depression` },
        { label: "Adoption", href: `${SITE}/adoption-therapy-ventura-county-ca` },
      ],
    },
    {
      label: "Methods",
      href: `${SITE}/methods`,
      children: [
        { label: "EMDR", href: `${SITE}/emdr-therapy-newbury-park` },
        { label: "Brainspotting", href: `${SITE}/brainspotting` },
        { label: "Somatic Therapy", href: `${SITE}/somatic-therapy` },
        { label: "Parts Work Therapy", href: `${SITE}/parts-work-therapy` },
      ],
    },
    { label: "FAQs", href: `${SITE}/faqs` },
  ],
  navCta: { label: "Contact", href: `${SITE}/contact` },

  hero: {
    eyebrow: "Online & in-person counseling in Newbury Park & across CA",
    title: "Rebuild your foundation on solid ground and finally begin to *thrive*.",
    text: "Specialized therapy for adults, couples, teens, and children to reflect, heal, and grow.",
    button: { label: "Book an Appointment", href: `${SITE}/contact` },
    image: photo("80513bd1-30ee-4a2d-aaf6-782d9be095ce/Jennifer+A+-+Images+%2866%29.jpg", "Family playing together on the beach"),
    sideImage: photo("3643a7ac-ff62-4927-b96e-9e65ecff0521/Jennifer+A+-+Images+%2867%29.jpg", "Ocean waves"),
  },

  intro: {
    title: "You’re holding onto hope that life can be better than it is right now.",
    lead: "At Conejo Valley Family Counseling we want to make that hope a reality.",
    body: [
      "Whether you're an adult seeking personal growth, looking to work through your trauma, a couple working on your relationship, or a parent looking for support for your child, we provide a compassionate and safe space to help you navigate all of life’s ups and downs.",
      "First and foremost, we believe what you’re going through is real, valid, and worthy of support. Our team offers clients in the Newbury Park area and across CA an environment to discover a new life and a deeper sense of self in the midst of their struggles. As we tap into the power of connection and understanding, you can find your footing again and take a transformative path forward.",
    ],
    image: photo("7a40691c-70a5-4307-b9ae-974592087a8f/Jennifer+A+-+Images+%283%29.jpg", "Waves rolling onto the sand"),
  },

  audiences: {
    title: "Who we *help*",
    items: [
      {
        title: "Adults",
        text: "Feeling stuck or overwhelmed? We help adults find clarity, build resilience, and move forward with confidence by addressing the root causes of anxiety, stress, and emotional pain.",
        image: photo("066f60e6-1354-4d47-a586-ab3f2f2ba612/Jennifer+A+-+Images+%288%29.jpg", "Two friends sitting on the beach"),
      },
      {
        title: "Couples",
        href: `${SITE}/couples-therapy`,
        text: "Relationships require effort, and we’re here to help you strengthen yours. We guide couples through challenges like communication breakdowns and trust issues, helping you rebuild intimacy and strengthen your relationship.",
        image: photo("d0157712-388c-4800-aada-c78db97ee966/Jennifer+A+-+Images+%289%29.jpg", "Couple embracing on the beach"),
      },
      {
        title: "Children & Teens",
        href: `${SITE}/children-and-teens`,
        text: "Kids need support, too. We help them process big emotions, cope with challenging family situations, build coping skills, and feel understood, while also working closely with their parents to create a nurturing environment.",
        image: photo("d5d62bf4-34a7-4bf4-bf00-e1169863ace7/Jennifer+A+-+Images+%2810%29.jpg", "Siblings playing in the surf"),
      },
    ],
  },

  quote: {
    text: "You deserve a place where your story is heard, valued, and understood. _Nothing will be too heavy for us to carry together._",
    image: photo("27b4f80c-ca73-4d1f-824e-ec29a2211142/Jennifer+A+-+Images+%282%29.png", "Children running on the beach"),
  },

  focus: {
    title: "Our areas of *expertise*",
    items: [
      { label: "Dissociation", href: `${SITE}/dissociative-identity-disorder-therapist-newbury-park` },
      { label: "Trauma", href: `${SITE}/trauma-counseling-newbury-park` },
      { label: "Family conflict" },
      { label: "Special needs parenting", href: `${SITE}/counseling-special-needs-parents-newbury-park` },
      { label: "Depression", href: `${SITE}/anxiety-depression` },
      { label: "Marriage", href: `${SITE}/couples-therapy` },
      { label: "Anxiety", href: `${SITE}/anxiety-depression` },
      { label: "Relationships" },
      { label: "Children", href: `${SITE}/children-and-teens` },
      { label: "Teens", href: `${SITE}/children-and-teens` },
      { label: "Intimacy & connection", href: `${SITE}/couples-therapy` },
      { label: "…and more." },
    ],
  },

  approach: {
    eyebrow: "How we work",
    title: "We’re here to make a difference.",
    lead: "The clients we work with are balancing so many things at once, it’s often hard for them to put themselves first.",
    body: [
      "Here, your needs are always top priority. Our team takes the time to deeply listen to our clients in order to truly understand their story and their struggles. We recognize that no two people are the same and that personalized therapy means an intentional, tailored approach. (You won’t find anything “one-size-fits-all” here.) If you’re ready to do the work, we’re ready to help.",
      "Sometimes we may gently challenge you to look at things differently and other times we may explore your emotions, all while encouraging you to practice what you’ve learned in your daily life. We take what we do seriously because we know how important it is for you to heal from what’s hurting you, discover a fulfilling life, and build meaningful relationships. Our goal is to walk alongside you in this journey, offering support and guidance as you uncover your strengths and embrace what the future can hold for you.",
    ],
    button: { label: "Learn more about us", href: `${SITE}/therapists-newbury-park` },
    image: photo("389808ad-7273-4e03-a32b-c172aa735f12/Jennifer+A+-+Images+%286%29.jpg", "Mother and daughter dancing on the beach", "21% 46%"),
  },

  journey: {
    title: "Honoring where you’ve been *&* helping shape where you’re headed.",
    image: photo("6f1501bf-74a5-4c57-a957-8ce4c5876848/Jennifer+A+-+Images+%285%29.jpg", "Family holding hands at the water’s edge"),
  },

  methods: {
    title: "Our *specialties* include…",
    items: [
      {
        title: "Trauma",
        text: "We don’t always know when and how we’ve experienced trauma. In therapy, we’ll work together to help you process your past, understand what’s causing you to stay “stuck,” and regain a sense of safety, control, and hope. You don’t have to carry your burdens alone.",
        link: { label: "Learn more", href: `${SITE}/trauma-counseling-newbury-park` },
      },
      {
        title: "EMDR",
        text: "Eye Movement Desensitization and Reprocessing (EMDR) is a powerful therapeutic technique that helps process and heal trauma by reworking how painful memories are stored in your brain. This allows you to find relief and move toward lasting healing.",
        link: { label: "Learn more", href: `${SITE}/emdr-therapy-newbury-park` },
      },
      {
        title: "Dissociation",
        text: "The feeling of losing time, hearing conflicting voices, or questioning your sense of self can be overwhelming. In therapy, we’ll help you understand these experiences, recognize your own triggers, and create a sense of balance and identity so that you can feel more grounded.",
        link: { label: "Learn more", href: `${SITE}/dissociative-identity-disorder-therapist-newbury-park` },
      },
      {
        title: "Special Needs Parenting",
        text: "Parenting a child with special needs presents unique challenges and complex emotions. We provide compassionate support through lived experience and expertise to help you navigate this journey with tools, understanding, and self-care.",
        link: { label: "Learn more", href: `${SITE}/counseling-special-needs-parents-newbury-park` },
      },
    ],
  },

  booking: {
    eyebrow: "Schedule an appointment",
    title: "Find a therapist who is the right fit for *you*.",
    body: [
      "Coming to therapy is a courageous decision, and connecting with the right kind of therapist makes all the difference. We understand that your journey is personal, and we're here to support you with care and understanding every step of the way. Each member of our team brings dedicated expertise and a commitment to support you in your struggles. We want you to feel prioritized, understood, and empowered.",
      "Click the button below to schedule an appointment.",
    ],
    button: { label: "Book now", href: `${SITE}/contact` },
    image: photo("7557312a-044d-4489-a9d1-6f43ee9888b1/Jennifer+A+-+Images+%2811%29.jpg", "Parent and child drawing in the sand", "63% 53%"),
    sideImage: photo("1b9495e0-ce39-4826-9df9-e24de99da82f/Jennifer+A+-+Images+%2812%29.jpg", "Hand collecting shells in the sand"),
  },

  footer: {
    blurb:
      "We want to make getting started simple. You’re welcome to come into our office in Newbury Park or schedule virtual appointments from anywhere in CA—whatever works best for you.",
    columns: [
      {
        title: "Navigate",
        links: [
          { label: "Home", href: "/clone" },
          { label: "About", href: `${SITE}/therapists-newbury-park` },
          { label: "FAQs", href: `${SITE}/faqs` },
          { label: "Contact", href: `${SITE}/contact` },
        ],
      },
      {
        title: "Our Team",
        links: team.map(([name, , slug]) => ({ label: name, href: `${SITE}/${slug}` })),
      },
    ],
    contact: {
      title: "Contact",
      lines: ["925 Broadbeck Dr", "Suites 200 and 225", "Newbury Park, CA 91320"],
      links: [
        { label: "info@conejovalleycounseling.com", href: "mailto:info@conejovalleycounseling.com" },
        { label: "805.242.3120", href: "tel:8052423120" },
      ],
      note: "Serving Thousand Oaks, Westlake Village, Camarillo, Moorpark, & Simi Valley",
    },
    legal: [
      { label: "Terms", href: `${SITE}/terms` },
      { label: "Privacy Policy", href: `${SITE}/privacy-policy` },
      { label: "Disclaimer", href: `${SITE}/disclaimer` },
    ],
    credit: "Website by Walker Strategy Co.",
  },
};

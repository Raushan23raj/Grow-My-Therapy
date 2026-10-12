import type { SiteContent } from "./types";


export const OFFICE_ADDRESS = {
  street: "123th Street 45 W",
  city: "Santa Monica",
  region: "CA",
  postalCode: "90401",
};

const fullAddress = `${OFFICE_ADDRESS.street}, ${OFFICE_ADDRESS.city}, ${OFFICE_ADDRESS.region} ${OFFICE_ADDRESS.postalCode}`;

export const BOOKING_URL = "#contact";

const directions = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`;

export const maya: SiteContent = {
  brand: {
    name: "Maya Reynolds",
    tagline: "PsyD · Clinical Psychologist",
    href: "/",
  },
  nav: [
    { label: "About", href: "#about" },
    {
      label: "Specialties",
      href: "#services",
      children: [
        { label: "Anxiety & Panic", href: "#anxiety-therapy" },
        { label: "Trauma & EMDR", href: "#trauma-therapy" },
        { label: "Burnout & Perfectionism", href: "#burnout-therapy" },
      ],
    },
    {
      label: "Methods",
      href: "#methods",
      children: [
        { label: "CBT", href: "#cbt" },
        { label: "EMDR", href: "#emdr" },
        { label: "Mindfulness", href: "#mindfulness" },
        { label: "Body-Oriented Therapy", href: "#body-oriented-therapy" },
      ],
    },
    { label: "Office", href: "#office" },
    { label: "FAQs", href: "#faqs" },
  ],
  navCta: { label: "Contact", href: "#contact" },

  hero: {
    eyebrow: "In-person therapy in Santa Monica & online across California",
    title: "Anxiety & trauma therapy in Santa Monica, so you can finally *exhale*.",
    text: "Dr. Maya Reynolds, PsyD, is a licensed clinical psychologist helping thoughtful, high-achieving adults quiet the overthinking, heal from the past, and feel grounded again.",
    button: { label: "Book a consultation", href: BOOKING_URL },
    image: {
      src: "/images/hero-beach-calm.jpg",
      alt: "Woman sitting quietly on the sand watching a soft Santa Monica sunset",
      position: "50% 60%",
    },
    sideImage: {
      src: "/images/hero-palm-shadow.jpg",
      alt: "Palm frond shadows on a warm sand-colored wall",
    },
  },

  intro: {
    title: "You look “functional” on the outside, but inside you’re always bracing for something to go wrong.",
    lead: "Therapy can be the place where you finally set that weight down.",
    body: [
      "Maybe it shows up as constant worry, tension you carry in your body, or nights spent replaying the day instead of sleeping. Maybe earlier experiences still shape your relationships, your confidence, or your sense of safety. You’ve been pushing through for a long time, and you’re tired.",
      "From my Santa Monica office, I offer a warm, collaborative space to understand both the emotional and the physical sides of what you’re feeling. Together we’ll build practical tools for right now and do the deeper work that helps you feel steadier, more resilient, and more like yourself, in session and in daily life.",
    ],
    image: {
      src: "/images/intro-journaling-ocean.jpg",
      alt: "Woman journaling in an armchair beside an open window overlooking the ocean",
    },
  },

  audiences: {
    id: "services",
    title: "How I can *help*",
    items: [
      {
        id: "anxiety-therapy",
        title: "Anxiety & Panic Therapy",
        text: "When your mind won’t switch off, everything feels urgent. We’ll calm racing thoughts, ease panic and physical tension, and help you sleep, focus, and breathe more easily, using CBT, mindfulness, and body-based tools that work in real life.",
        image: {
          src: "/images/service-anxiety.jpg",
          alt: "Woman with eyes closed taking a slow breath in warm window light",
          position: "35% 50%",
        },
      },
      {
        id: "trauma-therapy",
        title: "Trauma Therapy & EMDR",
        text: "Whether it was a single event or years of childhood, relational, or chronic stress, the past can keep your body on high alert. My trauma work is carefully paced, with an emphasis on safety and stabilization, and uses EMDR to help painful memories lose their grip.",
        image: {
          src: "/images/service-trauma-emdr.jpg",
          alt: "Two people holding hands across a table in a moment of support",
        },
      },
      {
        id: "burnout-therapy",
        title: "Burnout & Perfectionism",
        text: "For entrepreneurs, creatives, and professionals running on empty. We’ll untangle the perfectionism and high internal pressure that keep you pushing, so you can slow down, reconnect with yourself, and build a more sustainable way of living and working.",
        image: {
          src: "/images/service-burnout.jpg",
          alt: "Tired professional working from a sofa with a laptop and a glass of water",
        },
      },
    ],
  },

  quote: {
    text: "You deserve a space where you feel respected, understood, and never rushed. _Healing can happen at a pace that feels safe._",
    image: {
      src: "/images/santa-monica-pier-sunset.jpg",
      alt: "Santa Monica Pier and beach at sunset",
      position: "50% 55%",
    },
  },

  focus: {
    title: "Areas of *focus*",
    items: [
      { label: "Anxiety", href: "#anxiety-therapy" },
      { label: "Panic attacks", href: "#anxiety-therapy" },
      { label: "Single-incident trauma", href: "#trauma-therapy" },
      { label: "Complex & childhood trauma", href: "#trauma-therapy" },
      { label: "Chronic stress" },
      { label: "Sleep difficulties" },
      { label: "Professional burnout", href: "#burnout-therapy" },
      { label: "Perfectionism", href: "#burnout-therapy" },
      { label: "Overthinking & worry" },
      { label: "Relationship patterns" },
      { label: "Confidence & self-worth" },
      { label: "…and more." },
    ],
  },

  approach: {
    id: "about",
    eyebrow: "Meet Dr. Maya Reynolds, PsyD",
    title: "A warm, grounded partner in your healing.",
    lead: "Therapy works best when you feel respected, understood, and actively involved in the process.",
    body: [
      "I’m a licensed clinical psychologist based in Santa Monica, California, working with adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences. Many of my clients are high-achieving and self-aware, yet internally exhausted, stuck in overthinking, or emotionally on edge.",
      "Sessions are structured enough to feel supportive while leaving room for reflection and depth. I combine practical tools with depth-oriented work, and I understand the realities of a fast-paced life. My goal isn’t only symptom relief, but lasting insight, resilience, and a stronger relationship with yourself over time.",
    ],
    button: { label: "Work with Dr. Reynolds", href: BOOKING_URL },
    image: {
      src: "/images/dr-maya-reynolds.jpg",
      alt: "Portrait of Dr. Maya Reynolds, PsyD, licensed clinical psychologist in Santa Monica",
      position: "50% 30%",
    },
  },

  journey: {
    title: "Making peace with where you’ve been *&* finding steadier ground ahead.",
    image: {
      src: "/images/golden-hour-walk.jpg",
      alt: "Woman walking barefoot along the shoreline at golden hour",
      position: "60% 50%",
    },
  },

  methods: {
    id: "methods",
    title: "How we’ll *work* together…",
    items: [
      {
        id: "cbt",
        title: "Cognitive-Behavioral Therapy",
        text: "CBT helps you notice the thought patterns that feed worry, panic, and self-criticism, then gently reshape them. You’ll leave sessions with practical, evidence-based tools you can use the moment anxiety shows up.",
        link: { label: "Ask about CBT", href: "#contact" },
      },
      {
        id: "emdr",
        title: "EMDR Therapy",
        text: "Eye Movement Desensitization and Reprocessing (EMDR) is an evidence-based approach to healing trauma. It helps your brain reprocess painful memories so they feel less charged, allowing your nervous system to finally settle.",
        link: { label: "Ask about EMDR", href: "#contact" },
      },
      {
        id: "mindfulness",
        title: "Mindfulness-Based Practices",
        text: "Mindfulness helps you step out of autopilot and endless overthinking. We’ll practice simple ways to slow down, stay present, and respond to stress with more calm and self-compassion.",
        link: { label: "Learn more", href: "#faqs" },
      },
      {
        id: "body-oriented-therapy",
        title: "Body-Oriented Techniques",
        text: "Anxiety and trauma live in the body too: tight shoulders, a racing heart, restless sleep. Body-oriented work helps you understand those signals and feel more regulated in daily life, not just during sessions.",
        link: { label: "Learn more", href: "#faqs" },
      },
    ],
  },

  office: {
    eyebrow: "The office · Santa Monica, CA",
    title: "A calm space for *healing*",
    text: [
      "My Santa Monica office is a quiet, private space designed to feel calm and grounding, with natural light and a comfortable, uncluttered environment.",
      "Clients often share that the space itself helps them feel more at ease the moment they arrive. Prefer to meet from home? Secure telehealth sessions are available anywhere in California.",
    ],
    details: [
      { label: "Location", value: fullAddress },
      { label: "Sessions", value: "In person in Santa Monica · Secure telehealth across California" },
      { label: "The space", value: "Natural light, quiet and private, comfortable seating" },
    ],
    button: { label: "Get directions", href: directions },
    images: [
      {
        src: "/images/office-window-light.jpg",
        alt: "Dr. Maya Reynolds’ Santa Monica therapy office with tall windows, exposed brick, a sofa and a swivel armchair",
        position: "52% 50%",
      },
      {
        src: "/images/office-sitting-area.jpg",
        alt: "Sitting area in the Santa Monica office with a gray sofa, leather armchair, olive tree and bookshelves",
        position: "50% 52%",
      },
    ],
  },

  faq: {
    title: "Frequently asked *questions*",
    items: [
      {
        question: "Do you offer online therapy?",
        answer: "Yes. Alongside in-person sessions at my Santa Monica office, I offer secure telehealth sessions for adults located anywhere in California.",
      },
      {
        question: "Who do you work with?",
        answer: "Adults, often thoughtful, high-achieving people such as entrepreneurs, creatives, and professionals, who are navigating anxiety, panic, trauma, burnout, perfectionism, or chronic stress.",
      },
      {
        question: "What is EMDR, and is it right for me?",
        answer: "EMDR is an evidence-based therapy that helps the brain reprocess painful memories so they feel less overwhelming. We’ll decide together whether it fits your goals, and the work always begins with safety and stabilization.",
      },
      {
        question: "What are sessions like?",
        answer: "Warm, collaborative, and structured enough to feel supportive, while leaving space for reflection and depth. Trauma work is paced carefully, and you’ll stay actively involved in shaping the process.",
      },
      {
        question: "Where is the office?",
        answer: `My office is at ${fullAddress}. It’s a quiet, private space with natural light, designed to help you feel calm and grounded from the moment you arrive.`,
      },
    ],
  },

  booking: {
    eyebrow: "Schedule a consultation",
    title: "Find steady ground and feel like *yourself* again.",
    body: [
      "Reaching out is a courageous step, especially when you’re used to handling everything on your own. If you’re looking for a therapist who combines practical tools with deeper work, and who understands the realities of living and working in a fast-paced environment, I may be a good fit.",
      "Sessions are available in person in Santa Monica and online across California.",
    ],
    button: { label: "Book now", href: BOOKING_URL },
    image: {
      src: "/images/cta-tea-journal.jpg",
      alt: "Sage-green mug of tea resting on an open journal and a soft knit blanket",
      position: "52% 50%",
    },
    sideImage: {
      src: "/images/cta-palm-wall.jpg",
      alt: "Palm leaves casting soft shadows on a warm wall",
      position: "52% 50%",
    },
  },

  footer: {
    blurb:
      "Therapy for anxiety, trauma, and burnout in Santa Monica. Meet in person at a calm, light-filled office or online from anywhere in California, whatever feels best for you.",
    columns: [
      {
        title: "Navigate",
        links: [
          { label: "Home", href: "#top" },
          { label: "About", href: "#about" },
          { label: "Office", href: "#office" },
          { label: "FAQs", href: "#faqs" },
          { label: "Contact", href: "#contact" },
        ],
      },
      {
        title: "Specialties",
        links: [
          { label: "Anxiety & Panic Therapy", href: "#anxiety-therapy" },
          { label: "Trauma Therapy & EMDR", href: "#trauma-therapy" },
          { label: "Burnout & Perfectionism", href: "#burnout-therapy" },
          { label: "CBT & Mindfulness", href: "#methods" },
          { label: "Telehealth in California", href: "#faqs" },
        ],
      },
    ],
    contact: {
      title: "Visit",
      lines: [OFFICE_ADDRESS.street, `${OFFICE_ADDRESS.city}, ${OFFICE_ADDRESS.region} ${OFFICE_ADDRESS.postalCode}`],
      links: [{ label: "Get directions", href: directions }],
      note: "In-person sessions in Santa Monica and secure telehealth for clients across California.",
    },
    legal: [
      { label: "Terms", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Disclaimer", href: "#" },
    ],
    credit: "© 2026 Maya Reynolds, PsyD",
    crisisNote: "If you are in crisis, call or text 988 or dial 911.",
  },
};

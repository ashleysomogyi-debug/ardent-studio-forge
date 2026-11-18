/**
 * Content for the Raleigh-Durham (Triangle) location pages.
 *
 * Every page says "serving", never "based in": Ardent Studio is not in North
 * Carolina yet. MOVE_NOTE is the one place the relocation wording lives, so it
 * can be updated (or given a date) without touching each page.
 */
export const MOVE_NOTE = "planning a move to the Triangle";

import caryPark from "@/assets/photos/downtown-cary-park.webp";
import chapelHillBellTower from "@/assets/photos/chapel-hill-bell-tower.jpg";

const pexels = (id: string) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=2000`;

const unsplash = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=2000&q=70`;

export interface TriangleFaq {
  q: string;
  a: string;
}

export interface TrianglePage {
  slug: string;
  /** Short name used in the eyebrow, cards and schema. */
  place: string;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  intro: string;
  hero: { src: string; alt: string; credit?: string; creditUrl?: string; position?: string };
  hoursHeading: string;
  hours: { who: string; what: string }[];
  /** A titled block of paragraphs: an example project or a starting point. */
  spotlight: { eyebrow: string; heading: string; body: string[] };
  /** Optional second block, same shape. */
  secondary?: { eyebrow: string; heading: string; body: string[] };
  areaHeading: string;
  area: string;
  faqHeading: string;
  faqs: TriangleFaq[];
  /** Hub page only. */
  isHub?: boolean;
}

const WHERE_WE_ARE = `Work runs over video now. Ardent Studio is based in South Florida today and is ${MOVE_NOTE}. In-person sessions start once we arrive.`;

export const hub: TrianglePage = {
  slug: "raleigh-durham",
  place: "Raleigh-Durham",
  isHub: true,
  metaTitle: "AI Consulting in Raleigh-Durham | Ardent Studio",
  metaDescription:
    "Practical AI consulting, custom builds and team training for small businesses across the Triangle. Free 15-minute scope call. No pitch.",
  headline: "Practical AI for Triangle small businesses",
  intro:
    "We find where AI saves your team time, build one tool for that job, and train your people to use it. Serving Raleigh, Durham, Cary, Chapel Hill and the towns in between.",
  hero: {
    src: pexels("5900810"),
    alt: "Aerial view of downtown Raleigh high-rises in autumn",
    credit: "Curtis Adams / Pexels",
    creditUrl: "https://www.pexels.com/photo/aerial-view-of-city-buildings-5900810/",
  },
  hoursHeading: "You already use AI. You suspect it could do more.",
  hours: [],
  spotlight: {
    eyebrow: "Where we are",
    heading: "Serving the Triangle from South Florida, for now",
    body: [
      `Ardent Studio is based in South Florida today and is ${MOVE_NOTE}. We work with clients over video already, so Triangle businesses can start now. In-person workshops in the Triangle begin once we arrive.`,
    ],
  },
  areaHeading: "Areas we serve",
  area: "",
  faqHeading: "Questions people ask",
  faqs: [
    {
      q: "Are you a local company?",
      a: `Not yet. We are in South Florida and ${MOVE_NOTE}. Everything we do works over video in the meantime.`,
    },
    {
      q: "Do I need to be technical?",
      a: "No. If you can describe the task that eats your week, we can take it from there.",
    },
    {
      q: "What does it cost?",
      a: "Every project is quoted at a fixed price after the scope call, so you know the number before you commit.",
    },
    {
      q: "Who owns what you build?",
      a: "You do. Code, accounts and documentation are handed over at the end.",
    },
    {
      q: "What if AI is the wrong answer for my business?",
      a: "Then we will tell you on the scope call. It takes fifteen minutes to find out.",
    },
  ],
};

export const raleigh: TrianglePage = {
  slug: "raleigh",
  place: "Raleigh",
  metaTitle: "AI Consultant in Raleigh, NC for Small Business | Ardent Studio",
  metaDescription:
    "AI setup, custom tools and team training for Raleigh small businesses. Fixed prices, plain English, and you own what we build. Free scope call.",
  headline: "AI consulting for Raleigh small businesses",
  intro:
    "Raleigh keeps growing, and so does the pile of inquiries, quotes and paperwork on your desk. We help small Raleigh teams hand the repetitive part of that pile to AI, so the people doing the work can get on with it.",
  hero: {
    src: pexels("30435314"),
    alt: "Monument in downtown Raleigh with skyscrapers and fall foliage",
    credit: "Andretti Brown / Pexels",
    creditUrl: "https://www.pexels.com/photo/historic-raleigh-monument-in-a-vibrant-cityscape-30435314/",
  },
  hoursHeading: "Where Raleigh businesses tend to lose hours",
  hours: [
    {
      who: "Law, accounting and advisory firms",
      what: "Client intake, first-draft letters, and summarizing long documents before anyone bills a minute.",
    },
    {
      who: "Contractors and trades",
      what: "Quotes that go out and never get a follow-up, because the crew is on the next job.",
    },
    {
      who: "Firms that work with state agencies",
      what: "Proposals and compliance paperwork with the same sections rewritten every time.",
    },
    {
      who: "Practices and service businesses",
      what: "Calls and messages that arrive after closing and wait until morning.",
    },
  ],
  spotlight: {
    eyebrow: "An example",
    heading: "What a first project looks like",
    body: [
      "Picture a Raleigh contractor who sends 20 quotes a month and hears back on half. We would build a follow-up assistant that drafts a personal check-in for each open quote, in the owner's voice, ready to approve and send. Two to four weeks, fixed price, and the owner keeps the tool.",
      "That is an example of the shape, and yours will be different. The scope call is where we find it.",
    ],
  },
  areaHeading: "Serving all of Wake County",
  area: `We serve businesses in downtown Raleigh, North Hills, Midtown and Brier Creek, and in Wake Forest, Garner, Knightdale and Holly Springs. ${WHERE_WE_ARE}`,
  faqHeading: "Raleigh questions",
  faqs: [
    {
      q: "Can you meet in person in Raleigh?",
      a: "Once we have moved, yes. Until then, scope calls, builds and training run over video.",
    },
    {
      q: "We already pay for Microsoft 365. Can you use that?",
      a: "Yes. AI Setup starts with the tools you already have, Copilot included, before anyone suggests buying something new.",
    },
    {
      q: "How long until we see a result?",
      a: "Most single builds take 2 to 4 weeks from the signed proposal to handoff.",
    },
  ],
};

export const durham: TrianglePage = {
  slug: "durham",
  place: "Durham",
  metaTitle: "AI Consultant in Durham, NC for Small Business | Ardent Studio",
  metaDescription:
    "Practical AI for Durham small businesses: one tool built for one job, plus training your team will use. Fixed price. Free 15-minute scope call.",
  headline: "AI consulting for Durham small businesses",
  intro:
    "Durham has no shortage of people who can explain how AI works. What a ten-person business needs is someone to make it do one useful thing by the end of the month. That is the whole service.",
  hero: {
    src: unsplash("photo-1636600489499-9f453f1af3e7"),
    alt: "Statue of Major the Bull in downtown Durham, North Carolina",
    credit: "Elijah Mears / Unsplash",
    creditUrl: "https://unsplash.com/photos/a-statue-of-a-bull-in-front-of-a-building-SPhH29dcv_Q",
  },
  hoursHeading: "Where Durham businesses tend to lose hours",
  hours: [
    {
      who: "Restaurants, caterers and event venues",
      what: "Event inquiries that need a fast, friendly, accurate reply while the kitchen is mid-service.",
    },
    {
      who: "Startups and small product teams",
      what: "Customer questions, onboarding emails and internal docs that one person is holding together.",
    },
    {
      who: "Suppliers and service firms around RTP",
      what: "Quotes, spec sheets and order follow-ups with a lot of copy and paste.",
    },
    {
      who: "Independent shops and studios",
      what: "Customer messages across email, the website and social, answered whenever someone gets a minute.",
    },
  ],
  spotlight: {
    eyebrow: "An example",
    heading: "What a first project looks like",
    body: [
      "Picture a Durham caterer who gets event inquiries at all hours. We would build an inquiry assistant that answers with real menu options, dates and pricing ranges, in the owner's tone, and passes anything unusual to a person. The owner approves the wording before it goes live and keeps every account and line of code.",
      "Your first project will look different. Fifteen minutes on a scope call is enough to find it.",
    ],
  },
  areaHeading: "Serving Durham and RTP",
  area: `We serve businesses downtown, around Ninth Street and Brightleaf, near Southpoint, and in and around Research Triangle Park. ${WHERE_WE_ARE}`,
  faqHeading: "Durham questions",
  faqs: [
    {
      q: "We are a small team with no IT person. Is that a problem?",
      a: "No. Most small businesses have no IT person. We set things up, write the guide, and stay on email for 30 days after handoff.",
    },
    {
      q: "Will the AI sound generic?",
      a: "It is trained on your own emails, menus, policies and phrasing, and you review the output before customers see any of it.",
    },
    {
      q: "Do you only build chatbots?",
      a: "No. Chatbots are one option. Proposal drafting, data dashboards and internal team assistants are on the list too.",
    },
  ],
};

export const cary: TrianglePage = {
  slug: "cary",
  place: "Cary",
  metaTitle: "AI Consulting in Cary, NC for Small Business | Ardent Studio",
  metaDescription:
    "AI setup and training for small businesses in Cary, Apex and Morrisville. Get more from the tools you already pay for. Free 15-minute scope call.",
  headline: "AI consulting for Cary, Apex and Morrisville businesses",
  intro:
    "Plenty of people in western Wake County work with advanced software all day, then go home to a family business that runs on sticky notes and a shared inbox. We close that gap for small teams, one practical tool at a time.",
  // Supplied by Ashley. Confirm usage rights and the correct credit before publishing.
  hero: {
    src: caryPark,
    alt: "Waterfall, pond and pavilion at Downtown Cary Park",
    position: "30% center",
  },
  hoursHeading: "Where businesses here tend to lose hours",
  hours: [
    {
      who: "Dental, medical and wellness practices",
      what: "Front desk questions about hours, services and forms, repeated all day.",
    },
    {
      who: "Home services",
      what: "HVAC, landscaping, cleaning and remodeling firms juggling estimates, scheduling and review requests.",
    },
    {
      who: "Professional offices",
      what: "Insurance, real estate, bookkeeping and financial planning teams writing the same client emails weekly.",
    },
    {
      who: "Tutoring, childcare and activity businesses",
      what: "Enrollment questions, waitlists and parent updates.",
    },
  ],
  spotlight: {
    eyebrow: "A good first step",
    heading: "Start with what you already pay for",
    body: [
      "Many offices here already have Microsoft 365 or Google Workspace, with AI features nobody has turned on. AI Setup is built for that: we switch on what you own, connect it to your systems, agree on a starter set of uses, and train the team in plain English. For plenty of small offices, that is enough for the first year.",
      "If one task still eats the week after that, we scope a single build for it.",
    ],
  },
  secondary: {
    eyebrow: "Training",
    heading: "Workshops for your team",
    body: [
      "Teach your team is a hands-on session where each person brings one task they repeat every week and leaves with a working way to do it faster. Quoted by team size. Live over video now, and in person once we are in the Triangle.",
    ],
  },
  areaHeading: "Serving western Wake County",
  area: `We serve businesses in Cary, Apex, Morrisville, Holly Springs and Fuquay-Varina. ${WHERE_WE_ARE}`,
  faqHeading: "Questions from Cary-area owners",
  faqs: [
    {
      q: "Is it safe to put client information into AI tools?",
      a: "It depends on the tool and the settings, which is exactly what AI Setup sorts out. We configure business accounts properly and write down what should never go in.",
    },
    {
      q: "My staff are nervous about AI. Will training help?",
      a: "Usually, yes. People relax quickly once they use it on their own work and see it is there to take the dull tasks.",
    },
    {
      q: "Can we start small?",
      a: "Yes. The scope call is free, and the smallest paid step is a single setup or one workshop.",
    },
  ],
};

export const chapelHill: TrianglePage = {
  slug: "chapel-hill",
  place: "Chapel Hill",
  metaTitle: "AI Consulting in Chapel Hill, NC for Small Business | Ardent Studio",
  metaDescription:
    "Practical AI help for independent businesses in Chapel Hill, Carrboro and Hillsborough. One useful tool, built and explained in plain English.",
  headline: "AI consulting for Chapel Hill and Carrboro businesses",
  intro:
    "In a university town, business comes in waves. Move-in week, game days, graduation, then a quiet stretch. A small team cannot staff up for every wave, but it can let AI absorb the repeat questions when one hits.",
  // Supplied by Ashley. File name credits Johnny Andrews, UNC-Chapel Hill: confirm usage rights before publishing.
  hero: {
    src: chapelHillBellTower,
    alt: "The UNC bell tower framed by autumn leaves in Chapel Hill",
    credit: "Johnny Andrews / UNC-Chapel Hill",
  },
  hoursHeading: "Where businesses here tend to lose hours",
  hours: [
    {
      who: "Independent shops and restaurants",
      what: "The same questions about hours, bookings, parking and large orders, multiplied on busy weekends.",
    },
    {
      who: "Property managers and housing services",
      what: "Leasing inquiries and maintenance requests that spike with the academic calendar.",
    },
    {
      who: "Health, therapy and wellness practices",
      what: "Intake paperwork and appointment questions that pull staff away from clients.",
    },
    {
      who: "Nonprofits and small organizations",
      what: "Grant drafts, donor updates and volunteer coordination done by two people with four jobs each.",
    },
  ],
  spotlight: {
    eyebrow: "An example",
    heading: "What a first project looks like",
    body: [
      "Picture a Chapel Hill property manager who answers the same twelve leasing questions hundreds of times each spring. We would build an assistant that answers them from the company's own listings and policies, at any hour, and flags the real leads for a person to call back.",
      "That is one shape a project can take. Yours comes out of the scope call.",
    ],
  },
  secondary: {
    eyebrow: "Your voice",
    heading: "Keeping it personal",
    body: [
      "Businesses here trade on knowing their customers, and a tool that sounds like a call center would cost more than it saves. Everything we build is written in your voice, from your own material, and you approve it before a customer sees a word.",
    ],
  },
  areaHeading: "Serving Orange County and nearby",
  area: `We serve businesses in Chapel Hill, Carrboro, Hillsborough and Pittsboro. ${WHERE_WE_ARE}`,
  faqHeading: "Chapel Hill questions",
  faqs: [
    {
      q: "We are a nonprofit. Do you work with organizations like ours?",
      a: "Yes. The process is the same: a free scope call, then a fixed-price proposal you can take to your board.",
    },
    {
      q: "We only need help a few months a year. Is a build worth it?",
      a: "Often it is, because the busy months are when slow replies cost the most. The scope call will give you an honest yes or no.",
    },
    {
      q: "Can you train student or part-time staff?",
      a: "Yes. Every build comes with a short how-to guide written so a new hire can follow it on day one.",
    },
  ],
};

/** Town pages linked from the hub, in display order. */
export const townPages = [raleigh, durham, cary, chapelHill];

export const townCards = [
  { page: raleigh, label: "Raleigh", note: "Including Wake Forest and Holly Springs" },
  { page: durham, label: "Durham", note: "Including Research Triangle Park" },
  { page: cary, label: "Cary, Apex and Morrisville", note: "Western Wake County" },
  { page: chapelHill, label: "Chapel Hill and Carrboro", note: "Including Hillsborough" },
];

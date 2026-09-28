// Single source of truth for every piece of content on the site.
// Editing this file changes the site; no copy lives in components.

export const site = {
  name: "Schimea Niyitwumva",
  role: "Backend-focused software engineer",
  location: "Kigali, Rwanda",
  email: "schimea@proton.me",
  github: "https://github.com/17070610",
  linkedin: "https://linkedin.com/in/schimea-niyitwumva-bb921229b",

  headline:
    "Backend-focused software engineer in Kigali, Rwanda — I build and ship web applications end to end, including the servers they run on.",
  support:
    "Two production web applications built and deployed solo — from first commit to HTTPS on a server I manage.",

  // TODO: confirm before launch.
  availability: "Available for freelance work and backend roles.",
} as const;

// Mwalimu Online moves from .cloud to .rw. Change it here, once.
const MWALIMU_DOMAIN = "https://mwalimuonline.cloud";

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  context: string;
  live: string;
  liveLabel: string;
  /** Both repos are private: render a live link only, never a disabled Code button. */
  repoPrivateNote: string;
  stack: string[];
  features: string[];
  /** Screenshot of the live site, in /public/projects. */
  image: string;
  imageAlt: string;
  caseStudy: {
    problem: string;
    built: string[];
    architecture: { heading: string; body: string }[];
    /** TODO: one hard problem per project, in your own words. */
    hardProblem?: string;
  };
};

export const projects: Project[] = [
  {
    slug: "typingpro",
    name: "TypingPro",
    tagline:
      "Typing and digital communication skills through lessons, tests, and certified competitions.",
    summary:
      "A platform teaching typing and digital communication skills through interactive lessons, timed tests, and “Typing Bees” — competitions where users earn certification based on their score. Built for individual learners and institutions.",
    context: "Freelance engagement · Sept–Dec 2025 · Sole engineer",
    live: "https://typingpro.net",
    liveLabel: "typingpro.net",
    repoPrivateNote: "Private client work",
    stack: ["Next.js", "TypeScript", "PostgreSQL (Neon)", "JWT", "Nginx", "VPS"],
    features: [
      "Interactive typing lessons",
      "Timed typing tests",
      "Typing Bee competitions",
      "Score-based certification",
    ],
    image: "/projects/typingpro.webp",
    imageAlt:
      "The TypingPro home page: the headline \u201cExcel in Typing \u2014 Type Fast, Excel Digitally\u201d over a classroom illustration, with Try Demo and Start Free buttons.",
    caseStudy: {
      problem:
        "The client needed a way to teach typing at scale and prove competence at the end of it — lessons and practice alone were not enough without credible certification.",
      built: [
        "Interactive lessons that build typing skill progressively.",
        "Timed tests measuring speed and accuracy.",
        "Typing Bees — competitions scored against other users.",
        "Certification issued based on competition performance.",
        "Accounts, authentication, and a personal progress dashboard.",
      ],
      architecture: [
        {
          heading: "Serverless Postgres",
          body: "Data runs on PostgreSQL via Neon. Usage is uneven — quiet stretches punctuated by competition activity — so a database that scales down when idle suited the traffic shape, and removed backup and tuning work from a solo build.",
        },
        {
          heading: "Protected routes",
          body: "The dashboard, lessons, tests, competitions, and certificates all sit behind authentication. Anonymous requests are redirected to login rather than partially rendering, so member content is never served to a signed-out visitor.",
        },
        {
          heading: "Self-managed deployment",
          body: "Next.js runs on a VPS behind Nginx as a reverse proxy, with SSL and PM2 keeping the process alive across restarts. I provisioned and maintain the server.",
        },
      ],
    },
  },
  {
    slug: "mwalimu-online",
    name: "Mwalimu Online",
    tagline: "Education for All. Anytime. Anywhere.",
    summary:
      "A platform for Rwanda's national curriculum — lessons, past papers, automated tests, teacher training, and live sessions, spanning Primary, O-Level and A-Level.",
    context: "2026 · Production",
    live: MWALIMU_DOMAIN,
    liveLabel: "mwalimuonline.cloud",
    repoPrivateNote: "Private repository",
    stack: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "JWT",
      "Nginx",
      "Linux",
    ],
    features: [
      "Courses across Primary, O-Level and A-Level",
      "Past-papers library",
      "Testing hub with automated tests",
      "Live sessions with teachers",
      "Teacher training",
    ],
    image: "/projects/mwalimu-online.webp",
    imageAlt:
      "The Mwalimu Online home page: \u201cEducation for All. Anytime. Anywhere.\u201d with navigation for Courses, Past Paper, Testing Hub, Live Sessions and Service Hub.",
    caseStudy: {
      problem:
        "Rwandan learners preparing for national exams need lessons and past papers in one reliable place, reachable on the devices and connections they actually have.",
      built: [
        "Course browsing across Primary, O-Level and A-Level.",
        "A past-papers library covering the national curriculum.",
        "A testing hub running automated tests.",
        "Live sessions with teachers.",
        "A teacher-training area alongside the learner experience.",
        "Registration, login, and a learner dashboard.",
      ],
      architecture: [
        {
          heading: "Postgres on my own server",
          body: "Unlike TypingPro, this runs PostgreSQL installed and administered directly on the server, with Prisma as the ORM. Educational content is long-lived and steadily accessed rather than bursty, and keeping the database on infrastructure I control avoids per-connection pricing and keeps learner data in one place.",
        },
        {
          heading: "JWT authentication",
          body: "Accounts are authenticated with JSON Web Tokens, guarding the dashboard and member routes.",
        },
        {
          heading: "Serving two audiences",
          body: "Learners and teachers use the same platform for different things — coursework and past papers on one side, training and live sessions on the other. Navigation is grouped so each audience reaches its own area without the other's sections getting in the way.",
        },
        {
          heading: "Planned domain migration",
          body: "The platform currently serves from mwalimuonline.cloud and moves to mwalimuonline.rw. Cutting a live service over to a new domain means sequencing DNS, certificates, and redirects so signed-in users are not interrupted.",
        },
      ],
    },
  },
];

export const services = [
  {
    title: "Backend & APIs",
    body: "REST APIs, authentication, database design, and the server logic behind them.",
  },
  {
    title: "Full-stack web applications",
    body: "Complete applications from interface to database, built to ship.",
  },
  {
    title: "Deployment & hosting",
    body: "VPS setup, Nginx, reverse proxying, SSL certificates, and production process management.",
  },
];

// Audited per the spec: no HTML/CSS as "languages", no Canva, databases grouped
// correctly, nothing listed that can't be discussed in an interview.
export const stack = [
  {
    group: "Languages",
    items: ["TypeScript", "JavaScript", "Java", "Python", "SQL"],
  },
  {
    group: "Frameworks & libraries",
    items: ["Next.js", "React", "Node.js", "Express", "Spring Boot"],
  },
  {
    group: "Databases & data",
    items: ["PostgreSQL", "Neon", "Prisma", "MongoDB", "PL/SQL"],
  },
  {
    group: "Auth & security",
    items: ["JWT authentication", "Protected routes", "SSL/HTTPS"],
  },
  {
    group: "DevOps & deployment",
    items: ["Linux", "VPS hosting", "Nginx", "PM2", "Database administration"],
  },
  { group: "Tools", items: ["Git", "Postman", "JetBrains IDEs", "Figma"] },
];

export const education = [
  {
    institution: "AUCA, Gishushu",
    credential: "BSc Software Engineering",
    period: "Sept 2024 – present",
  },
  {
    institution: "ALX Africa",
    credential: "Software Engineering Certificate — Backend specialization",
    period: "Oct 2023 – Jul 2025",
  },
];

export const about = [
  "I'm a software engineer based in Kigali, Rwanda, focused on backend development.",
  "I'm currently completing a Bachelor's in Software Engineering at AUCA (Adventist University of Central Africa), and I hold a Software Engineering certificate from ALX Africa, where I specialized in backend engineering.",
  "I like the parts of the job that other people hand off — the server, the deployment, the reason it broke at 2am.",
];

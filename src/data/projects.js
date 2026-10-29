export const projects = [
  {
    slug: "fitlog",
    number: "01",
    name: "FitLog",
    category: "Fitness & Workout Tracking",
    status: "Live",
    description:
      "A fitness companion for exploring workouts and organizing personal training plans with a clean, responsive interface.",
    longDescription:
      "FitLog is a workout-focused web experience built to help users explore fitness routines and organize training plans. The project emphasizes clear workout information, responsive layouts, and API-driven content.",
    image: "/images/fit-log.png",
    accent: "#b8f550",
    stack: ["Next.js", "React", "Tailwind CSS", "TypeScript", "REST API"],
    features: [
      "Workout discovery and browsing",
      "Workout detail views",
      "Personal plan interface",
      "Responsive design",
      "API data integration",
    ],
    challenges: [
      {
        title: "Working with API responses",
        detail:
          "Mapping API data into consistent UI states requires checking response shapes and handling loading, empty, and error cases.",
      },
      {
        title: "Responsive information layout",
        detail:
          "Workout details need to remain readable and easy to scan across mobile, tablet, and desktop screens.",
      },
    ],
    improvements: [
      "Add automated tests for important user flows",
      "Improve loading and error states",
      "Add richer workout filtering and search",
    ],
    liveUrl: "https://fit-log-app-25xh.vercel.app/",
    repoUrl: "https://github.com/Farez770/Fit-Log-app.git",
    repoLabel: "Add your client GitHub repository URL",
  },
  {
    slug: "bazardor",
    number: "02",
    name: "BazarDor",
    category: "Market Price Information",
    status: "Live",
    description:
      "A Bengali market-price experience that organizes everyday product information and category-based browsing.",
    longDescription:
      "BazarDor presents market and product information in a Bengali-friendly interface. It focuses on category navigation, readable product details, and a responsive experience for visitors browsing from different devices.",
    image: "/images/bazar-dor.png",
    accent: "#64e6a5",
    stack: ["Next.js", "React", "REST API", "TypeScript", "Tailwind CSS"],
    features: [
      "Product listing and detail pages",
      "Category-based browsing",
      "Bengali-language interface",
      "Responsive layout",
      "API-powered data",
    ],
    challenges: [
      {
        title: "Handling different response shapes",
        detail:
          "List endpoints and detail endpoints can return different data structures, so each page needs to handle its response correctly.",
      },
      {
        title: "Bengali content and readability",
        detail:
          "Product information and prices need clear typography and spacing to remain easy to scan.",
      },
    ],
    improvements: [
      "Add stronger loading and empty states",
      "Improve product search and filters",
      "Add accessibility and interaction tests",
      "Working on Real Api Which is change the Update Day after day",
    ],
    liveUrl: "https://bazar-dor-nextjs-app-ten.vercel.app/",
    repoUrl: "https://github.com/Farez770/bazar-dor-nextjs-app.git",
    repoLabel: "Add your client GitHub repository URL",
  },
  {
    slug: "taskpad",
    number: "03",
    name: "TaskPad",
    category: "Personal Productivity",
    status: "In development",
    description:
      "A personal task manager planned around secure authentication, task CRUD operations, due dates, and completion status.",
    longDescription:
      "TaskPad is an in-progress task management application. The intended experience includes account authentication, protected task pages, task creation and editing, due dates, completion controls, and confirmation before deletion.",
    image: "/images/taskpad.png",
    accent: "#72dff1",
    stack: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Better Auth",
      "daisyUI",
      "React Toastify",
    ],
    features: [
      "Sign-in and sign-up flows",
      "Protected task dashboard",
      "Create, edit, and delete tasks",
      "Due dates and completion status",
      "Feedback with toast notifications",
    ],
    challenges: [
      {
        title: "Authentication and protected routes",
        detail:
          "Only authenticated users should access their task environment, and the server must validate authorization rather than relying only on UI checks.",
      },
      {
        title: "Database configuration and CRUD",
        detail:
          "Environment variables, MongoDB connection setup, and consistent error handling are important for reliable task operations.",
      },
    ],
    improvements: [
      "Finish and deploy the complete application",
      "Add task filtering and sorting",
      "Add tests and improve form validation",
    ],
    liveUrl: "",
    repoUrl: "",
    repoLabel: "On progress",
  },
];

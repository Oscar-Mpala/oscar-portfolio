export const initialSiteInfo = {
  email: "oscaranashempala@gmail.com",
  instagram: "https://www.instagram.com/oscarmpala.dev/", // Cleaned up key name!
  linkedin: "https://linkedin.com/in/oscar-mpala-59201528a"
};

export const initialHeroData = {
  title: "Building Robust Full-Stack Web Applications",
  subtitle: "I am a Full-Stack Web Developer specializing in React, Node.js, and modern web architectures."
};

export const initialAboutData = {
  bio: "I am a passionate Full-Stack Web Developer with a strong foundation in building scalable, high-performance web applications. My expertise spans the entire development lifecycle, from designing intuitive user interfaces with React and Tailwind CSS to architecting robust backend APIs with Node.js and Express. I thrive on solving complex problems and continuously learning new technologies to deliver exceptional digital experiences."
};

export const initialSkillsData = [
  "HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", 
  "React.js", "Next.js", "Tailwind CSS", 
  "Node.js", "PostgreSQL", "MongoDB", "REST APIs", "WordPress", "WooCommerce", "Dokan", "Elementor",
];

export const initialProjectsData = [
  {
    id: "tradeaxis",
    title: "Trade Axis Multi-Vendor Marketplace",
    thumbnailUrl: "/projects/tradeaxis/thumbnail.webp",
    gallery: [
      "/projects/tradeaxis/thumbnail.webp", 
      "/projects/tradeaxis/gallery1.webp", 
      "/projects/tradeaxis/gallery2.webp"  
    ],
    shortDesc: "A multi-vendor e-commerce marketplace featuring localized payment integrations and decentralized vendor management.",
    longDesc: "Trade Axis is a comprehensive multi-vendor e-commerce platform designed to host multiple independent storefronts under one unified brand. The system utilizes Dokan and WooCommerce to empower vendors with individual frontend dashboards for managing inventory, dynamic shipping rules, and order fulfillment. The user interface is fully responsive, built with Elementor and the WoodMart theme. It also features a custom API integration with Paynow to securely process local Zimbabwean payment methods like EcoCash and Zimswitch, complete with automated commission splitting.",
    techStack: ["WordPress", "WooCommerce", "Dokan", "Elementor", "Paynow API", "PHP"],
    briefDocUrl: "/projects/tradeaxis/tradeaxis-brief.pdf", 
    githubUrl: "", 
    liveUrl: "https://tradeaxis.store"
  },
  {
    id: "crest-commercial",
    title: "Crest Commercial Real Estate",
    thumbnailUrl: "/projects/crest-commercial/thumbnail.webp", 
    gallery: [
      "/projects/crest-commercial/thumbnail.webp",
      "/projects/crest-commercial/gallery-1.webp", 
      "/projects/crest-commercial/gallery-2.webp"      
    ],
    shortDesc: "A premium, high-performance commercial real estate and logistics directory built for the SADC regional market.",
    longDesc: "Crest Commercial is a bespoke frontend application designed for a luxury commercial property brokerage. Built entirely with React and Tailwind CSS, the UI embodies a 'Silent Authority' aesthetic—relying on crisp typography, custom 4:3 cinematic image ratios, and complex responsive margins rather than heavy colors. The architecture features full multi-page routing via React Router and a modular component structure. It was specifically engineered to showcase complex state management (filtering mock property data) while maintaining pixel-perfect mobile responsiveness and flawless z-index handling for overlapping UI elements.",
    techStack: ["React", "Tailwind CSS", "React Router", "Lucide Icons", "Vite"],
    briefDocUrl: "/projects/crest-commercial/crest-commercial-brief.pdf", 
    githubUrl: "https://github.com/Oscar-Mpala/crest-commercial.git", 
    liveUrl: "https://crestcommercial.netlify.app" 
  },
  {
    id: "harrison-vance",
    title: "Harrison & Vance — Boutique Corporate Law Firm",
    thumbnailUrl: "/projects/hv-lawfirm/thumbnail.webp",
    gallery: [
      "/projects/hv-lawfirm/thumbnail.webp",
      "/projects/hv-lawfirm/gallery-1.webp",
      "/projects/hv-lawfirm/gallery-2.webp"
    ],
    shortDesc: "A high-converting, corporate lead-generation landing page built to establish immense trust and convert visitors into qualified legal clients.",
    longDesc: "Harrison & Vance is a premium, minimalist front-end web application engineered for elite corporate service providers. Built using Next.js and Tailwind CSS, the architecture prioritizes blazing-fast page load speeds, flawless mobile responsiveness, and high-impact SEO metrics. The design features a high-contrast dark navy header section, dynamic service grids, interactive floating trust metrics, and a strictly validated confidential case evaluation form designed to maximize lead conversion.",
    techStack: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Lucide React"],
    briefDocUrl: "", 
    githubUrl: "https://github.com/Oscar-Mpala/harrisonvance-law-landingpage.git", 
    liveUrl: "https://harrisonvance.netlify.app"
  },
  {
    id: "zenith",
    title: "ZENITH — Premium Mechanical Keyboard E-Commerce",
    thumbnailUrl: "/projects/zenith/thumbnail.webp",
    gallery: [
      "/projects/zenith/thumbnail.webp",
      "/projects/zenith/gallery-1.webp",
      "/projects/zenith/gallery-2.webp"
    ],
    shortDesc: "A premium, highly stylized niche e-commerce storefront for custom mechanical keyboards.",
    longDesc: "ZENITH is a sleek, dark-theme e-commerce frontend tailored for mechanical keyboard enthusiasts. It features a responsive product gallery showcasing curated hardware like the Portal-65 Gasket Kit and Cyberpunk Laser Keycaps. The application utilizes the React Context API for robust shopping cart state management, alongside Tailwind CSS for its premium grid and flexbox layouts. It includes simulated checkout processes, dynamic filtering, and strict form validation to ensure a seamless premium shopping experience.",
    techStack: ["React", "Tailwind CSS", "Context API", "Lucide React"],
    briefDocUrl: "/projects/zenith/zenith-brief.pdf",
    githubUrl: "https://github.com/Oscar-Mpala/zenith-mechanical-keyboards-ecommerce.git", 
    liveUrl: "" 
  },
  {
    id: "proflow",
    title: "ProFlow Enterprise",
    thumbnailUrl: "/projects/proflow/thumbnail.webp",
    gallery: [
      "/projects/proflow/thumbnail.webp",
      "/projects/proflow/gallery-2.webp",
      "/projects/proflow/gallery-3.webp"
    ],
    shortDesc: "A clean, enterprise-grade drag-and-drop Kanban board for project management.",
    longDesc: "ProFlow Enterprise is a robust project management tool built with a professional, highly accessible design language. It features a fully functional drag-and-drop interface utilizing React and @dnd-kit, allowing users to effortlessly move tasks between 'To Do', 'In Progress', and 'Done' states. The application strictly adheres to a clean enterprise aesthetic using Tailwind CSS utility classes, completely avoiding flashy trends in favor of functional clarity. It also includes custom hooks for localStorage state persistence to ensure task data remains intact across browser sessions.",
    techStack: ["React", "Tailwind CSS", "@dnd-kit", "localStorage"],
    briefDocUrl: "/projects/proflow/proflow-brief.pdf",
    githubUrl: "https://github.com/Oscar-Mpala/proflow.git", 
    liveUrl: "" 
  }
];
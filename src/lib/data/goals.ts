export const ROLES: string[] = [
  "Developer",
  "Content Creator",
  "Founder",
  "Marketer",
  "Writer",
  "Designer",
  "Researcher",
  "Consultant",
  "Student"
];

export interface RoleMeta {
  role: string;
  emoji: string;
  icon: string;
  description: string;
  categoryAffinities: string[];
  defaultGoal: string;
}

export const ROLE_METADATA: Record<string, RoleMeta> = {
  "Developer": {
    role: "Developer",
    emoji: "💻",
    icon: "terminal",
    description: "Code editors, autonomous SWE agents, and deployment tools",
    categoryAffinities: ["coding-assistants", "developer-tools", "productivity", "agents"],
    defaultGoal: "Write Better Code"
  },
  "Content Creator": {
    role: "Content Creator",
    emoji: "🎬",
    icon: "movie_creation",
    description: "Video generators, voice cloning, and content repurposing",
    categoryAffinities: ["ai-video-generators", "ai-voice-generators", "social-media", "content-creation"],
    defaultGoal: "Edit Videos"
  },
  "Founder": {
    role: "Founder",
    emoji: "🚀",
    icon: "rocket_launch",
    description: "Autonomous ops, sales pipelines, and rapid MVP building",
    categoryAffinities: ["sales-marketing", "productivity", "coding-assistants", "customer-support"],
    defaultGoal: "Build MVP"
  },
  "Marketer": {
    role: "Marketer",
    emoji: "📈",
    icon: "trending_up",
    description: "SEO writers, outbound enrichment, and ad campaign engines",
    categoryAffinities: ["sales-marketing", "seo-tools", "social-media", "ai-writing-tools"],
    defaultGoal: "Write SEO Content"
  },
  "Writer": {
    role: "Writer",
    emoji: "✍️",
    icon: "edit_note",
    description: "Long-form drafting, copy editing, and narrative structuring",
    categoryAffinities: ["ai-writing-tools", "copywriting", "productivity"],
    defaultGoal: "Overcome Writer's Block"
  },
  "Designer": {
    role: "Designer",
    emoji: "🎨",
    icon: "palette",
    description: "Image synthesis, vector generators, and 3D modeling",
    categoryAffinities: ["ai-image-generators", "design-assistants", "avatar-generators"],
    defaultGoal: "Generate UI Assets"
  },
  "Researcher": {
    role: "Researcher",
    emoji: "🔬",
    icon: "science",
    description: "Academic paper summarization and data synthesis",
    categoryAffinities: ["research-analysis", "productivity", "ai-writing-tools"],
    defaultGoal: "Summarize Articles"
  },
  "Consultant": {
    role: "Consultant",
    emoji: "💼",
    icon: "business_center",
    description: "Client pitch decks, meeting transcription, and proposal drafting",
    categoryAffinities: ["productivity", "sales-marketing", "customer-support"],
    defaultGoal: "Create Presentations"
  },
  "Student": {
    role: "Student",
    emoji: "🎓",
    icon: "school",
    description: "Exam prep, lecture summaries, and paper citation tools",
    categoryAffinities: ["research-analysis", "productivity", "ai-writing-tools"],
    defaultGoal: "Study For Exams"
  }
};

export const QUICK_PERSONAS = [
  { role: "Developer", goal: "Write Better Code", label: "Full-Stack Dev", emoji: "💻" },
  { role: "Content Creator", goal: "Edit Videos", label: "Video Creator", emoji: "🎬" },
  { role: "Founder", goal: "Build MVP", label: "Startup Founder", emoji: "🚀" },
  { role: "Marketer", goal: "Write SEO Content", label: "Growth Marketer", emoji: "📈" },
  { role: "Writer", goal: "Overcome Writer's Block", label: "Copywriter", emoji: "✍️" },
  { role: "Designer", goal: "Generate UI Assets", label: "UI/UX Designer", emoji: "🎨" }
];

export const GOALS: Record<string, string[]> = {
  "Developer": [
    "Write Better Code",
    "Fix Bugs",
    "Deploy Faster",
    "Learn New Stack",
    "Optimize Performance",
    "Write Tests"
  ],
  "Content Creator": [
    "Edit Videos",
    "Generate Ideas",
    "Grow Audience",
    "Design Thumbnails",
    "Repurpose Content",
    "Write Scripts"
  ],
  "Founder": [
    "Build MVP",
    "Automate Ops",
    "Market Research",
    "Pitch Deck Prep",
    "Hire Talent",
    "Manage Finances"
  ],
  "Marketer": [
    "Write SEO Content",
    "Generate Leads",
    "Create Email Campaigns",
    "Automate Socials",
    "Run Ad Campaigns",
    "Analyze Data"
  ],
  "Writer": [
    "Overcome Writer's Block",
    "Edit Drafts",
    "Outline Stories",
    "Check Grammar",
    "Publish Content",
    "Write Books"
  ],
  "Designer": [
    "Generate UI Assets",
    "Design Logos",
    "Edit Photos Faster",
    "Create Animations",
    "Create 3D Models",
    "Find Inspiration"
  ],
  "Researcher": [
    "Summarize Articles",
    "Analyze Papers",
    "Find Sources",
    "Collect Data",
    "Visualize Data",
    "Write Reports"
  ],
  "Consultant": [
    "Create Presentations",
    "Write Proposals",
    "Analyze Markets",
    "Manage Clients",
    "Schedule Meetings",
    "Streamline Communication"
  ],
  "Student": [
    "Study For Exams",
    "Summarize Lectures",
    "Research Papers",
    "Organize Notes",
    "Solve Math Problems",
    "Write Essays"
  ]
};

export interface WorkflowFAQItem {
  question: string;
  answer: string;
}

export const defaultWorkflowsFaqs: WorkflowFAQItem[] = [
  {
    question: "What is an AI workflow and how does it differ from using a single tool?",
    answer: "An AI workflow is a structured sequence of interconnected AI tools where the output of one application serves as the immediate input for the next. While a single tool provides isolated assistance (like drafting an article or generating an image), an automated workflow chains specialized models together—for example, converting a podcast transcript into SEO articles, social carousels, and narrated video shorts with minimal human intervention."
  },
  {
    question: "Do I need coding skills to build and deploy these AI workflows?",
    answer: "No. Most of the workflows featured on AIToolsHaven are designed for no-code and low-code implementation. You can connect these tools using intuitive drag-and-drop automation platforms like Zapier, Make, and n8n, or leverage native webhook integrations provided by the software."
  },
  {
    question: "What is the cost difference between Budget Mode and Premium Mode in workflows?",
    answer: "Every workflow on AIToolsHaven includes both a Budget Mode and a Premium Mode. Budget Mode utilizes free tiers, open-source models, or generous trial allocations to minimize operational costs. Premium Mode recommends enterprise-grade tools with uncapped concurrency, dedicated API access, and higher output fidelity for production agencies and scaling businesses."
  },
  {
    question: "How do I prevent hallucinations and maintain quality across multi-tool chains?",
    answer: "Quality assurance in multi-step AI pipelines relies on intermediate validation gates. We recommend incorporating human-in-the-loop review points at key milestones (such as approving an outline before generating final video scenes) and utilizing models with verified internet retrieval (RAG) to ensure factual grounding."
  },
  {
    question: "Which AI workflow delivers the fastest return on investment for small businesses?",
    answer: "Content repurposing and lead generation workflows consistently deliver the fastest ROI. Converting long-form executive recordings into omni-channel blog posts, newsletters, and social assets routinely reduces weekly marketing production time by 80% while dramatically expanding digital reach."
  },
  {
    question: "Can I customize the order of tools in an existing workflow blueprint?",
    answer: "Yes. Each workflow blueprint explains the architectural rationale behind tool sequencing in the 'Why This Order Works' section. However, you can freely swap individual tools for alternative software listed in our directory based on your existing subscriptions or interface preferences."
  }
];

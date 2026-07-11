export type WorkflowStep = {
    role: string;
    desc: string;
    tool: string; // the primary tool
    goal: string;
    whyNow: string;
    expectedOutput: string;
    estimatedTime: string;
    difficulty: "Beginner" | "Intermediate" | "Advanced";
    expertTip?: string;
    commonMistake?: string;
    alternatives: string[]; // slugs or names of alternative tools
};

export type Workflow = {
    slug: string;
    title: string;
    description: string;
    icon: string;
    audience: string;
    color: string;
    tools: string[]; // kept for backward compatibility (used in WorkflowCard)
    meta: {
        outcome: string;
        time: string;
        skill: string;
        cost: string;
        toolsCount?: number;
        deliverables?: string[];
        bestFor?: { audience: string; reason: string }[];
        steps: WorkflowStep[];
    };
    whyThisOrder?: {
        explanation: string;
        impact: string;
    };
    budgetMode?: {
        tools: string[];
        description: string;
    };
    premiumMode?: {
        tools: string[];
        description: string;
    };
    faqs?: { question: string; answer: string }[];
};

import workflowsJson from '../../data/workflows.json';

export const workflows: Workflow[] = workflowsJson as Workflow[];
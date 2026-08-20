import { ComponentType } from "react";
import LogoGeneratorsGuide from "./LogoGeneratorsGuide";
import AiWritingToolsGuide from "./AiWritingToolsGuide";
import AiImageGeneratorsGuide from "./AiImageGeneratorsGuide";
import AiVideoGeneratorsGuide from "./AiVideoGeneratorsGuide";
import AudioVoiceGuide from "./AudioVoiceGuide";
import CodingAssistantsGuide from "./CodingAssistantsGuide";
import MarketingSalesGuide from "./MarketingSalesGuide";
import ProductivityGuide from "./ProductivityGuide";
import AiSeoToolsGuide from "./AiSeoToolsGuide";
import AiSocialMediaGuide from "./AiSocialMediaGuide";
import AiChatbotsGuide from "./AiChatbotsGuide";
import AiAgentsGuide from "./AiAgentsGuide";
import AiPresentationMakersGuide from "./AiPresentationMakersGuide";
import AiResumeBuildersGuide from "./AiResumeBuildersGuide";
import AiMeetingAssistantsGuide from "./AiMeetingAssistantsGuide";
import AiTranscriptionToolsGuide from "./AiTranscriptionToolsGuide";
import AiResearchToolsGuide from "./AiResearchToolsGuide";
import AiCalendarSchedulingGuide from "./AiCalendarSchedulingGuide";
import AiNoteTakingKnowledgeGuide from "./AiNoteTakingKnowledgeGuide";
import AiEmailProductivityGuide from "./AiEmailProductivityGuide";
import AiProjectManagementGuide from "./AiProjectManagementGuide";

// Map of category slug to its long-form guide component
export const categoryGuides: Record<string, ComponentType> = {
  "logo-generators": LogoGeneratorsGuide,
  "ai-writing-tools": AiWritingToolsGuide,
  "ai-image-generators": AiImageGeneratorsGuide,
  "image-generation": AiImageGeneratorsGuide,
  "ai-video-generators": AiVideoGeneratorsGuide,
  "video-creation": AiVideoGeneratorsGuide,
  "audio-voice": AudioVoiceGuide,
  "ai-voice-generators": AudioVoiceGuide,
  "coding-assistants": CodingAssistantsGuide,
  "code-assistants": CodingAssistantsGuide,
  "marketing-sales": MarketingSalesGuide,
  "ai-marketing-tools": MarketingSalesGuide,
  "ai-sales-tools": MarketingSalesGuide,
  "productivity": ProductivityGuide,
  "ai-productivity-tools": ProductivityGuide,
  "task-management": ProductivityGuide,
  "ai-seo-tools": AiSeoToolsGuide,
  "seo-tools": AiSeoToolsGuide,
  "ai-social-media-tools": AiSocialMediaGuide,
  "ai-social-media": AiSocialMediaGuide,
  "social-media": AiSocialMediaGuide,
  "ai-chatbots": AiChatbotsGuide,
  "chatbots": AiChatbotsGuide,
  "ai-agents": AiAgentsGuide,
  "autonomous-agents": AiAgentsGuide,
  "ai-presentation-makers": AiPresentationMakersGuide,
  "presentation-makers": AiPresentationMakersGuide,
  "ai-presentations": AiPresentationMakersGuide,
  "ai-resume-builders": AiResumeBuildersGuide,
  "resume-builders": AiResumeBuildersGuide,
  "ai-resume": AiResumeBuildersGuide,
  "ai-meeting-assistants": AiMeetingAssistantsGuide,
  "meeting-assistants": AiMeetingAssistantsGuide,
  "ai-meeting-tools": AiMeetingAssistantsGuide,
  "ai-transcription-tools": AiTranscriptionToolsGuide,
  "transcription-tools": AiTranscriptionToolsGuide,
  "ai-transcription": AiTranscriptionToolsGuide,
  "ai-research-tools": AiResearchToolsGuide,
  "research-tools": AiResearchToolsGuide,
  "ai-research": AiResearchToolsGuide,
  "ai-calendar-scheduling": AiCalendarSchedulingGuide,
  "calendar-scheduling": AiCalendarSchedulingGuide,
  "ai-scheduling": AiCalendarSchedulingGuide,
  "ai-note-taking-knowledge": AiNoteTakingKnowledgeGuide,
  "note-taking-knowledge": AiNoteTakingKnowledgeGuide,
  "ai-notes": AiNoteTakingKnowledgeGuide,
  "ai-email-productivity": AiEmailProductivityGuide,
  "email-productivity": AiEmailProductivityGuide,
  "ai-email": AiEmailProductivityGuide,
  "ai-project-management": AiProjectManagementGuide,
  "project-management": AiProjectManagementGuide,
  "ai-pm": AiProjectManagementGuide,
};

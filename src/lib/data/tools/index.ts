import { textGenerationTools } from './text-generation';
import { imageGenerationTools } from './image-generation';
import { videoCreationTools } from './video-creation';
import { codingAssistantTools } from './coding-assistants';
import { productivityTools } from './productivity';
import { audioVoiceTools } from './audio-voice';
import { marketingSalesTools } from './marketing-sales';
import { extraTools } from './extra-tools';
import { extraTools2 } from './extra-tools-2';

// Re-export all tools as a single flat array
export const tools = [
  ...textGenerationTools,
  ...imageGenerationTools,
  ...videoCreationTools,
  ...codingAssistantTools,
  ...productivityTools,
  ...audioVoiceTools,
  ...marketingSalesTools,
  ...extraTools,
  ...extraTools2
];
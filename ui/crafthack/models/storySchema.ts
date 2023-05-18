import { z } from "zod";
import { scoreSchema } from "./scoreSchema";

export const storySchema = z.object({
  id: z.string().uuid(),
  summary: z.string().max(128).nonempty(),
  userScore: scoreSchema,
  aiScore: scoreSchema,
  specialistOpinion: z.boolean(),
});

export const storyDetailsSchema = storySchema.extend({
  userStory: z.string().max(1000).nonempty(),
  aiEvaluation: z.string().max(1000).nonempty(),
});

export const storiesSchema = z.array(storySchema);

export const newStorySchema = storyDetailsSchema.pick({
  summary: true,
  userStory: true,
});

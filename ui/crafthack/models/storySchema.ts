import { z } from "zod";
import { scoreSchema } from "./scoreSchema";

export const storySchema = z.object({
  id: z.string().uuid(),
  summary: z.string().max(128).nonempty(),
  userScore: scoreSchema,
  aiScore: scoreSchema,
  specialistOpinion: z.boolean().optional(),
  userStory: z.string().max(1000).nonempty(),
  postedBy: z.string().nonempty(),
  postedOn: z.date(),
});

export const storyDetailsSchema = storySchema.extend({
  aiEvaluation: z.string().max(1000).nonempty(),
});

export const storiesSchema = z.array(storySchema);

export const newStorySchema = storyDetailsSchema.pick({
  summary: true,
  userStory: true,
});

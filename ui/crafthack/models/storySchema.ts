import { z } from "zod";
import { scoreSchema } from "./scoreSchema";

export const storySchema = z.object({
  id: z.string().uuid(),
  summary: z.string().max(128).nonempty(),
  userScore: scoreSchema,
  userRatingCount: z.number().int().nonnegative(),
  aiScore: scoreSchema,
  specialistOpinion: z.boolean().optional(),
  userStory: z.string().max(1000).nonempty(),
  postedBy: z.string().nonempty(),
  postedOn: z.date(),
});

export const storiesSchema = z.array(storySchema);

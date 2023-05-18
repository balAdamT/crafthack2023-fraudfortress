import { z } from "zod";

export const ratingSchema = z.number().nonnegative().int();
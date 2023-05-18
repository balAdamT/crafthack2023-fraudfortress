import { z } from "zod";

export const scoreSchema = z.number().nonnegative().max(10);

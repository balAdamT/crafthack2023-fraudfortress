import { storiesSchema, storySchema } from "@/models/storySchema";
import { z } from "zod";


export const storyMock: z.infer<typeof storiesSchema> = [
    {
      id: "3b9d6b0d-6b22-4e7c-9e33-1306dff588bd",
      summary: "A story about a cat and a mouse",
      userScore: 7,
      aiScore: 8,
      specialistOpinion: true,
    },
    {
      id: "9e3509e3-7234-4b5a-8c2a-7220b9669c74",
      summary: "An epic adventure in space",
      userScore: 8,
      aiScore: 7,
      specialistOpinion: false,
    },
    {
      id: "3c4e0dde-27e4-4b50-8706-d85a3a8a95b2",
      summary: "A tale of two cities",
      userScore: 9,
      aiScore: 7,
      specialistOpinion: true,
    },
    {
      id: "34e53d54-96ea-4f33-85f7-9a4a3f5cd216",
      summary: "The mystery of the missing jewel",
      userScore: 6,
      aiScore: 8,
      specialistOpinion: false,
    },
    {
      id: "d4f24e4b-1d23-4e39-84af-9792f8a766a4",
      summary: "A detective story set in Victorian London",
      userScore: 7,
      aiScore: 8,
      specialistOpinion: true,
    },
    {
      id: "4c7e1b22-0a36-4a3e-8a8e-9a92b9a732a1",
      summary: "A futuristic tale about AI uprising",
      userScore: 7,
      aiScore: 9,
      specialistOpinion: true,
    },
    {
      id: "9c0e7c49-2c0a-461a-9f22-a1f3d0a52e2d",
      summary: "A romantic story in the backdrop of World War II",
      userScore: 8,
      aiScore: 7,
      specialistOpinion: false,
    },
    {
      id: "8e8db4e1-5eca-4a0c-8a52-a1d13c3e5c77",
      summary: "A children's story about friendship and courage",
      userScore: 7,
      aiScore: 8,
      specialistOpinion: true,
    },
    {
      id: "1e5db31e-59ea-4319-9a25-a1f3f0a4e4d3",
      summary: "A fantasy story set in a magical kingdom",
      userScore: 8,
      aiScore: 8,
      specialistOpinion: false,
    },
    {
      id: "a3c7f0a1-564e-4a1e-8a11-a1f3f0a4e4d6",
      summary: "A thriller about a mysterious disappearance",
      userScore: 9,
      aiScore: 7,
      specialistOpinion: true,
    }
  ];
  
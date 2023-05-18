"use client";

import { storiesSchema, storySchema } from "@/models/storySchema";
import { z } from "zod";

export function Stories(props: { stories: z.infer<typeof storiesSchema> }) {
  return (
    <div>
      {props.stories.map((story) => (
        <Story key={story.id} story={story} />
      ))}
    </div>
  );
}

function Story(props: { story: z.infer<typeof storySchema> }) {
  return <div>{props.story.id}</div>;
}

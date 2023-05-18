"use client";

import { storiesSchema, storySchema } from "@/models/storySchema";
import { z } from "zod";
import { ScoreBadge } from "./ScoreBadge";
import { LabeledElement } from "./LabeledElement";
import { Opinion } from "./Opinion";

export function Stories(props: { stories: z.infer<typeof storiesSchema> }) {
  return (
    <div className="flex justify-center">
      <div className="flex w-8/12 flex-col">
        {props.stories.map((story) => (
          <Story key={story.id} story={story} />
        ))}
      </div>
    </div>
  );
}

function Story({ story }: { story: z.infer<typeof storySchema> }) {
  return (
    <div className="m-4 rounded-lg bg-white p-4 text-2xl text-blue-800 shadow-lg ">
      <h2 className="mb-2 border-b-2 border-purple-800 pb-1 text-4xl font-bold">
        {story.summary}
      </h2>
      <p className="text-xl text-blue-700">{story.userStory}</p>
      <div className="mt-8 flex flex-col items-center justify-between  pt-4">
        <h3 className="text- inline-block rounded-full border-2 border-purple-800 bg-purple-200 p-2 font-bold">
          Is this a scam?
        </h3>
        <div className="mt-4 grid w-8/12 grid-cols-3 grid-rows-1">
          <LabeledElement label="AI evaluation">
            <ScoreBadge value={story.aiScore} />
          </LabeledElement>
          <LabeledElement label="Specialist review">
            <Opinion opinion={story.specialistOpinion} />
          </LabeledElement>
          <LabeledElement label="User opinion">
            <ScoreBadge value={story.userScore} />
          </LabeledElement>
        </div>
      </div>
      <div className="mt-4 flex flex-row text-sm font-extrabold">
        <p>{`Posted by ${
          story.postedBy
        } on ${story.postedOn.toLocaleDateString()}`}</p>
      </div>
    </div>
  );
}

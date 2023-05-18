import { storyMock as stories } from "@/db-mock/storyDB";

async function getData(story: string) {
  const res = await fetch("https://www.aiscamdetective.com/api/check", {
    method: "post",
    body: JSON.stringify({
      formData: { conversation: story },
    }),
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.text();
}

export default async function Page({ params }: { params: { id: string } }) {
  const story = stories.find((story) => story.id === params.id);
  const evaluation = await getData(story!.userStory);
  const parts = evaluation.split(/\r?\n/);

  return (
    <div className="mt-4 flex flex-col items-center">
      <div className="flex w-8/12 flex-col items-center rounded-lg bg-purple-100 p-8 shadow-lg">
        <h1 className=" text-2xl font-extrabold">Here is what happened</h1>
        <p className="mt-2 text-xl">{story?.userStory}</p>
        <h1 className="mt-4 text-2xl font-extrabold">
          And this is the evaluation of our anti-fraud AI
        </h1>
        <p className="mt-2 text-xl">{parts[2]}</p>
      </div>
    </div>
  );
}

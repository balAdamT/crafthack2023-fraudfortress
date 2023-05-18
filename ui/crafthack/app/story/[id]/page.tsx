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

  // TODO abalint Update AI score

  return <div>{evaluation}</div>;
}

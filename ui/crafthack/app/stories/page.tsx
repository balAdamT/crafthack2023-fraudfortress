import { Stories } from "@/components/Stories";
import { storyMock } from "@/db-mock/storyDB";

export default async function Page() {
  const stories = storyMock;

  return (
    <div>
      <Stories stories={stories} />
    </div>
  );
}

import { Stories } from "@/components/Stories";
import { storyMock } from "@/mocks/storyMock";

export default async function Home() {
  const stories = storyMock;
    
  return (
      <div>
        <Stories stories={stories} />
      </div>
  )
}

export default function Error() {
  return (
    <div className="mt-4 flex flex-col items-center">
      <div className="flex w-8/12 flex-col items-center rounded-lg bg-purple-100 p-8 shadow-lg">
        <p className="text-3xl text-blue-800">
          Unfortunately, our AI model takes too long to process data on this
          free-tier server. Please check out our DEMO video to see it working!
        </p>
      </div>
    </div>
  );
}

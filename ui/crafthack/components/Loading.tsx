export function Loading({ text }: { text: string }) {
  return (
    <div className="flex grow flex-col items-center justify-center">
      <div
        className="inline-block h-32 w-32 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-purple-800 motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
      <span className="mt-10 text-4xl">{text}</span>
    </div>
  );
}

export function Opinion({ opinion }: { opinion?: boolean }) {
  switch (opinion) {
    case undefined:
      return <p className="text-xl font-light text-gray-400">Pending</p>;
    case false:
      return <p className="text-xl font-bold text-green-600">Confirmed safe</p>;
    case true:
      return (
        <p className="text-xl font-extrabold uppercase text-red-800">
          Definitely scam
        </p>
      );
  }
}

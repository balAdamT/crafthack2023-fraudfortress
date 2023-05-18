import React from "react";

type Props = {
  value: number;
};

const computeClass = (value: number) => {
  if (value === 0) return "bg-gray-600 text-gray-200";
  if (value < 1) return "bg-green-600 text-green-300";
  if (value < 2) return "bg-green-500 text-green-200";
  if (value < 3) return "bg-green-400 text-green-700";
  if (value < 4) return "bg-yellow-200 text-green-500";
  if (value < 5) return "bg-yellow-300 text-green-600";
  if (value < 6) return "bg-orange-300 text-red-600";
  if (value < 7) return "bg-orange-400 text-red-100";
  if (value < 8) return "bg-red-400 text-red-700";
  if (value < 9) return "bg-red-600 text-red-900";

  return "bg-red-800 text-red-500";
};

export const ScoreBadge: React.FC<Props> = ({ value }) => {
  const colorClass = computeClass(value);
  const label = value > 0 ? `${value * 10} %` : "?";

  return (
    <div
      className={`flex h-12 w-20 flex-row items-center justify-center rounded-full ${colorClass}`}
    >
      <p className="text-center">{label}</p>
    </div>
  );
};

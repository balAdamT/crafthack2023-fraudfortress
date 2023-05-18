"use client";

import React, { FC, ReactNode, useState } from "react";

interface Props {
  text: ReactNode;
  children: ReactNode;
}

export function Tooltip({ text, children }: Props) {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <div
          className="absolute right-0 top-full z-10 mt-4 rounded border-4 border-yellow-200 bg-purple-800 p-2 text-lg text-yellow-200 shadow-lg"
          style={{ whiteSpace: "nowrap" }}
        >
          {text}
        </div>
      )}
    </div>
  );
}

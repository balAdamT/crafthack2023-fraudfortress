"use client";

import { useRouter } from "next/navigation";

export function NavigateButton({ text, to }: { text: string; to: string }) {
  const router = useRouter();

  return <button onClick={() => router.push(to)}>{text}</button>;
}

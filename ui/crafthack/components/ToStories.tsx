"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ToStories() {
  const router = useRouter();

  useEffect(() => router.push("/stories"), [router]);

  return null;
}

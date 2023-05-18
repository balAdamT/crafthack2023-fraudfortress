"use client";

import { MdOutlineCastle } from "react-icons/md";
import { useRouter } from "next/navigation";

export function NavBar() {
  const router = useRouter();

  return (
    <div
      className="flex cursor-pointer flex-row items-center bg-purple-900 p-4 text-yellow-200"
      onClick={() => router.push("/stories")}
    >
      <MdOutlineCastle size={64} className="mr-2" />
      <div className="text-3xl font-extrabold underline underline-offset-2">
        FraudFortress
      </div>
    </div>
  );
}

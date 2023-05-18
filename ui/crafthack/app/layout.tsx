import { SessionContextProvider } from "@/context/auth.context";
import "./globals.css";
import { Inter } from "next/font/google";
import { NavBar } from "@/components/NavBar";

export const metadata = {
  title: "FraudFortress",
  description:
    "FraudFortress - where the moat is filled with AI and community vigilance, and the drawbridge is always up against scams! Join us in laughing at the jester fraudsters!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SessionContextProvider>
          <div className="bg-purple-200 text-blue-800">
            <NavBar />
            {children}
          </div>
        </SessionContextProvider>
      </body>
    </html>
  );
}

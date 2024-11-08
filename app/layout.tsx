import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["400", "500", "900", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Chetan Dighole - Web Developer",
  description:
    "Chetan Dighole is a Full Stack Web Developer with 2 years of market experience in building full-stack applications, with expertise in front-end development. View his portfolio to see his projects and learn more about his skills.",
  authors: [{ name: "Chetan Dighole" }],
  keywords: [
    "Chetan Dighole",
    "Full Stack Web Developer",
    "React JS",
    "Express JS",
    "Node JS",
    "MongoDB",
    "Front End Developer",
    "Backend End Developer",
  ],
  openGraph: {
    title: "Chetan Dighole - Full Stack Web Developer",
    description:
      "Chetan Dighole is a Full Stack Web Developer with 2 years of market experience in building full-stack applications. View his portfolio to see his projects and learn more about his skills.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import Script from "next/script";
import { Roboto } from "next/font/google";
import "./globals.css";
import MainImg from "@/public/images/mainImage.png";

const roboto = Roboto({
  weight: ["400", "500", "900", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
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
  verification: {
    google: "9cx0r49SB9L_LQQ3DfcqFmilOs122J57Up3DrXG09tQ", // Replace with your actual verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "chetan dighole",
              url: "https://chetandighole.vercel.app",
              image: MainImg,
              sameAs: [
                "www.linkedin.com/in/chetandighole",
                "https://twitter.com/ChetanDighole",
                "https://github.com/ChetanDighole",
                "https://codewithchetan.hashnode.dev",
              ],
              jobTitle: [
                "Software Engineer",
                "Full Stack Developer",
                "Frontend Developer",
                "Backend Developer",
                "Web Developer",
              ],
              worksFor: {
                "@type": "Organization",
                name: ["lemon yellow", "cognizant"],
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Mumbai",
                addressRegion: "Maharashtra",
                postalCode: "421301",
                addressCountry: "India",
              },
            }),
          }}
        />
      </head>
      <body className={roboto.className}>{children}</body>
    </html>
  );
}

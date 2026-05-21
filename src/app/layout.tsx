import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mohammad Faiz Alam | Full Stack Developer",
  description:
    "Portfolio of Mohammad Faiz Alam - Full Stack Developer specializing in Java, Spring Boot, React.js, and Next.js.",
  keywords: [
    "Full Stack Developer",
    "Java Developer",
    "Spring Boot",
    "Next.js Portfolio",
    "React Developer",
  ],
  authors: [{ name: "Mohammad Faiz Alam" }],
  openGraph: {
    title: "Mohammad Faiz Alam Portfolio",
    description:
      "Full Stack Developer specializing in Java, Spring Boot, and Next.js",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
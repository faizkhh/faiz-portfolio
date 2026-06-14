import "./globals.css";
import type { Metadata } from "next";
import ScrollProgress from "@/components/ui/ScrollProgress";

export const metadata: Metadata = {
  title: "Mohammad Faiz Alam | Java Backend Developer",
  description:
    "Java Backend Developer specializing in Spring Boot, REST APIs, MySQL, React and Next.js.",

  keywords: [
    "Java Developer",
    "Spring Boot",
    "Backend Developer",
    "REST API",
    "Next.js",
    "React",
    "MySQL",
  ],

  authors: [
    {
      name: "Mohammad Faiz Alam",
    },
  ],

  openGraph: {
    title: "Mohammad Faiz Alam Portfolio",
    description:
      "Java Backend Developer specializing in Spring Boot and scalable web applications.",
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
      <body className="bg-black text-white">
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
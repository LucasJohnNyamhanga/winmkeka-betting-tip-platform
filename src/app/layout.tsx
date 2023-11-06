import "./styles/globals.scss";
import Navigation from "./components/Navigation";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sure Betting Tips",
  description: "Get free sure betting tips with high odds.",
  openGraph: {
    title: "Sure Betting Tips",
    description: "Get free sure betting tips with high odds.",
    url: "https://www.surebettip.com",
    siteName: "Sure Betting Tips",
    images: [
      {
        url: "/brainas.svg",
        width: 800,
        height: 600,
      },
      {
        url: "/brainas.svg",
        width: 1800,
        height: 1600,
        alt: "Sure Betting Tips",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  icons: {
    icon: "/brainas.svg",
    shortcut: "/brainas.svg",
    apple: "/brainas.svg",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/brainas.svg",
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    // google: "oN-oJx51JrDZi5ZxU2E682HRJ0dyDB2ZEe9bGQQy3Ds",
  },
  alternates: {
    canonical: "https://www.surebettip.com",
    languages: {
      "en-US": "https://www.surebettip.com",
    },
    media: {
      "only screen and (max-width: 600px)": "https://www.surebettip.com",
    },
    types: {
      "application/rss+xml": "https://www.surebettip.com",
    },
  },
  bookmarks: ["https://www.surebettip.com"],
  category: "technology",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Website",
    "React",
    "JavaScript",
    "Software",
    "web development",
    "tanzania",
    "datasoft",
    "system",
  ],
  authors: [
    { name: "Lucas John" },
    // { name: "Lucas John", url: "https://www.instagram.com/johnsavanter" },
  ],
  colorScheme: "light",
  creator: "Lucas John",
  publisher: "Lucas John",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body>
        {children}
        <Navigation />
      </body>
    </html>
  );
}

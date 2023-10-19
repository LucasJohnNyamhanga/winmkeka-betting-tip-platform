import "./styles/globals.scss";
import Navigation from "./components/Navigation";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DataSoft Tanzania",
  description:
    "Get a technological solution from the ideas you have, evolved into full efficient working solutions, that are customized to meet your company’s organizational needs, highlight its core competencies, and further its success.",
  openGraph: {
    title: "DataSoft Tanzania",
    description:
      "Get a technological solution from the ideas you have, evolved into full efficient working solutions, that are customized to meet your company’s organizational needs, highlight its core competencies, and further its success.",
    url: "https://www.datasoft.co.tz",
    siteName: "DataSoft Tanzania",
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
        alt: "Datasoft Tanzania",
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
    google: "oN-oJx51JrDZi5ZxU2E682HRJ0dyDB2ZEe9bGQQy3Ds",
  },
  alternates: {
    canonical: "https://www.datasoft.co.tz",
    languages: {
      "en-US": "https://www.datasoft.co.tz",
    },
    media: {
      "only screen and (max-width: 600px)": "https://www.datasoft.co.tz",
    },
    types: {
      "application/rss+xml": "https://www.datasoft.co.tz",
    },
  },
  bookmarks: ["https://www.datasoft.co.tz"],
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
        {/* <Check /> */}
        <Navigation />
        {children}
      </body>
    </html>
  );
}

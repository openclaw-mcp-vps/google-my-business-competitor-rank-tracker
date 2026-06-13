import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GMB Rank Tracker — Track Local Search Rankings vs Competitors",
  description: "Monitor your Google My Business rankings for local keywords and compare against competitors daily. Automated reports for local businesses and agencies."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="db80f46b-a1b8-46d1-9cdf-631d6297df0f"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  );
}

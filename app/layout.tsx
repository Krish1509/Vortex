import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import 'easymde/dist/easymde.min.css'

// Load custom Work Sans font with multiple weights
const workSans = localFont({
  src: [
    { path: "./fonts/WorkSans-ExtraLight.ttf", weight: "100", style: "normal" },
    { path: "./fonts/WorkSans-Thin.ttf", weight: "200", style: "normal" },
    { path: "./fonts/WorkSans-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/WorkSans-Medium.ttf", weight: "500", style: "normal" },
    { path: "./fonts/WorkSans-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./fonts/WorkSans-Bold.ttf", weight: "700", style: "normal" },
    { path: "./fonts/WorkSans-ExtraBold.ttf", weight: "800", style: "normal" },
    { path: "./fonts/WorkSans-Black.ttf", weight: "900", style: "normal" },
  ],
  variable: "--font-work-sans",
});

export const metadata: Metadata = {
  title: "Vortex",
  description: "Directory for the new era of startups",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${workSans.variable} font-work-sans`}>
        {children}
      </body>
    </html>
  );
}

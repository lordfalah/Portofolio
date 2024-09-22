import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css"
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import FireCharacter from "@/components/FireCharacter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  creator: "Irfin Falah",
  title: {
    template: "%s · Fal!",
    default: "It's me, Fal!",
  },
  description:
    "My personal blog and portfolio website built with passion and a lot of stress.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: [
      {
        url: "/favicons/favicon.ico",
      },
      {
        url: "/favicons/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],

    apple: [
      {
        url: "/favicons/apple-touch-icon.png",
        type: "image/png",
      },
    ],
    other: [
      {
        url: "/favicons/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        url: "/favicons/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <FireCharacter />
          <main className="h-full px-4 md:px-0">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

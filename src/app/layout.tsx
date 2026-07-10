import Footer from "@/components/Footer/Footer";
import "@/styles/globals.scss";
import { Playwrite_PE, Open_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: "Safe Space",
  description: "A calm place when things feel too much",
};

const headingFont = Playwrite_PE({
  weight: "400",
  variable: "--font-heading",
});

const bodyFont = Open_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body>
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}

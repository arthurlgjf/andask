import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ANDA — Mesačník pre každého",
  description:
    "Prvé vydanie mesačníka ANDA. Vráťme život zo sociálnych sietí do reality — Vydavateľstvo ANDA.",
  openGraph: {
    title: "ANDA — Mesačník pre každého",
    description:
      "Prvé vydanie mesačníka ANDA. Vráťme život zo sociálnych sietí do reality.",
    locale: "sk_SK",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sk"
      className={`${cormorant.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans text-ink">
        <a
          href="#hlavny-obsah"
          className="absolute left-4 top-4 z-[100] -translate-y-16 bg-paper px-4 py-2 text-sm text-ink opacity-0 outline outline-2 outline-offset-2 outline-ink transition-none focus:translate-y-0 focus:opacity-100"
        >
          Preskočiť na obsah
        </a>
        {children}
      </body>
    </html>
  );
}

import "./globals.css";
import clsx from "clsx";
import localFont from "next/font/local";
import { Kaisei_Tokumin } from "next/font/google";
const switzer = localFont({
  src: "../public/fonts/switzer-variable.woff2",
  variable: "--font-switzer",
  display: "swap",
});

const kaisei = Kaisei_Tokumin({
  weight: ["400", "700", "800"],
  variable: "--font-kaisei",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "Arth Tyagi",
    template: "%s | Arth Tyagi",
  },
  description: "Developer, Designer, Hobby Music Producer",
  icons: {
    shortcut: "/favicon.ico",
  },
  theme: {
    color: "#000000",
    background: "#ffffff",
  },
  twitter: {
    title: "Arth Tyagi",
    card: "summary_large_image",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={clsx(
        "text-black bg-white",
        `${switzer.variable} ${kaisei.variable}`
      )}
    >
      <body>{children}</body>
    </html>
  );
}

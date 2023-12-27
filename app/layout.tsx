import "./globals.css";
import clsx from "clsx";
import localFont from "next/font/local";
import { Kaisei_Tokumin, Space_Grotesk } from "next/font/google";
import Nav from "@/components/home/Nav";
import { cookies } from "next/headers";
import Footer from "@/components/Footer";
// import Footer from "@/components/Footer";
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


const space = Space_Grotesk({
  weight: ["400", "700"],
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});


export const metadata = {
  title: {
    default: "Arth Tyagi",
    template: "%s | Arth Tyagi",
  },
  description: "Developer, Designer, Producer",
  openGraph: {
    title: "Arth Tyagi",
    description: "Developer, Designer, Producer",
    url: "https://arthtyagi.com",
    siteName: "Arth Tyagi",
    images: [
      {
        url: "https://arthtyagi.com/og.png",
        width: 1230,
        height: 630,
      },
    ],
    locale: "en-US",
    type: "website",
  },
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
  const theme = cookies().get("theme");
  return (
    <html
      lang="en"
      className={clsx(
        "antialiased scrollbarDark scroll-smooth",
        `${switzer.variable} ${kaisei.variable} ${space.variable}`
      )}
    >
      <body className="text-black font-sans bg-black ">

        {children}
      </body>
    </html>
  );
}

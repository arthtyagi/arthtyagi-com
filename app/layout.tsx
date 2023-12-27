import "./globals.css";
import clsx from "clsx";
import localFont from "next/font/local";
import { Kaisei_Tokumin } from "next/font/google";
import Nav from "@/components/Nav";
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
        "antialiased scrollbar scroll-smooth",
        theme?.value === "dark" ? "dark" : "",
        `${switzer.variable} ${kaisei.variable}`
      )}
    >
      <body className="text-black font-sans dark:text-white from-cyan-50 via-rose-50 to-fuchsia-50  bg-gradient-to-br dark:from-black dark:via-black dark:to-zinc-950">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}

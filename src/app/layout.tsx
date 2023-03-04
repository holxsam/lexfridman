import "../tailwind/globals.css";
import { Inter, Fira_Code } from "next/font/google";
import { NavBar } from "@/components/NavBar/NavBar";
// import { NavBar } from "@/components/NavBar/NavBar";

export const metadata = {
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 10,
    minimumScale: 1,
  },
  title: "Lex Fridman",
  description: "All things Lex Fridman",
};

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const firacode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira_code",
});

const customFonts = [inter.variable, firacode.variable].join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={customFonts}>
      <body>
        <header className="stickyzztop-0 flex flex-col w-full">
          <NavBar />
        </header>
        <main className="-z-10 isolate flex-1">{children}</main>
        <footer className="-z-20 isolate ">{/* <Footer /> */}</footer>
      </body>
    </html>
  );
}

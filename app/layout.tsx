import Footer from "./(main)/_components/footer";
import Header from "./(main)/_components/header";
import LeftSidebar from "./(main)/_components/left-sidebar";
import RightSidebar from "./(main)/_components/right-sidebar";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

const font = Roboto({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "cnii-jest",
  description: "cnii-jest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={font.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="cnii-jest-theme"
        >
          <Header />
          <main className="mx-auto flex max-w-[1200px] flex-row px-8 pb-12">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

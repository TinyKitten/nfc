import Header from "@/components/Header";
import GlobalStyles from "@/globalStyle";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NFC by TinyKitten(Tsubasa SEKIGUCHI)",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <GlobalStyles />

        <Header />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Header from "../components/Header/Header";
import '../../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@radix-ui/themes/styles.css';
export const metadata: Metadata = {
  title: "Gym app",
  description: "Improving your workout",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={inter.className}>
          <Header />
          {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'

export const metadata: Metadata = {
  title: "Fasha Motors",
  description: "Spare Parts shop for motorbikes and three wheelers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
      <Navbar />
       <div className="flex ">
        <div className="w-[200px] md:w-[250px] ">
          <Sidebar />
        </div>
        <div className="flex-1">
        {children}
        </div>
       </div>
      <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "@/components/ui/Hoc/Provider";
import ResponsiveNav from "@/components/ui/Home/Navbar/ResponsiveNav";
import Footer from "@/components/ui/Home/Footer/Footer";
import ScrollToTop from "@/components/ui/helper/ScrollToTop";



const font = Inter({
  weight:['100','200','300','400','500','600','700','800'],
  subsets:["latin"],
})

export const metadata: Metadata = {
  title: "Ankit Gupta Web Portfolio",
  description: "Portfolio Website using Next js ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en" suppressHydrationWarning>
      <body className={`${font.className} antialiased`}> 
        <Provider>
            <ResponsiveNav/>
            {children}
            <Footer/> 
          </Provider>
          <ScrollToTop/>
      </body>
    </html>
  );
}

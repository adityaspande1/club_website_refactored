import type { Metadata } from "next";
import "./globals.css";
// import NavBar from "@/components/Navbar";
import NavBar from "@/components/Navbar2.0";
// import Driver from "@/components/Driver";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {/* <NavBar /> */}
        <NavBar/>
        {children}
        {/* <Driver/> */}
      </body>
    </html>
  );
}

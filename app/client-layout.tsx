"use client";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        
          <Navbar/>

          <div>{children}</div>

          <Footer/>
        {/* )} */}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "./client-layout";



export const metadata: Metadata = {
  title: "Tansen Holidays",
  description: "Tansen Holidays",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}

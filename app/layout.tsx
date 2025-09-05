import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bomi - BMI Calculator",
  description: "Track your BMI, understand your health risks, and get simple tips for a healthier lifestyle.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}

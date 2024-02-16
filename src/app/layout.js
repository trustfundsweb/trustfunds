import Fonts from "@/components/Fonts";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata = {
  title: "TrustFunds",
  description: "Crowdfunding platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Fonts />
      </head>
      <body>
        <Toaster />
        {children}
      </body>
    </html>
  );
}

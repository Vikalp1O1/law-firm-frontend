import "./globals.css";

export const metadata = {
  title: "AKT LAW FIRM",
  description: "A professional law firm dedicated to providing exceptional legal services.",
  keywords: "law firm, legal services, attorney, lawyer",
  icons: {
    icon: "/logo1.webp",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

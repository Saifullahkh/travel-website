import "./globals.css";
import Header from "@/component/Header/page";
import Footer from "@/component/Footer/page";

export const metadata = {
  title: "TravelX — World-Class Luxury Travel & Expeditions",
  description: "Experience hand-curated travel destinations, luxury island retreats, and bespoke tours with TravelX.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0f172a] text-slate-100 antialiased" suppressHydrationWarning>
        <Header />
        <main className="relative overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

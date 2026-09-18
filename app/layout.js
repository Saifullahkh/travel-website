import "./globals.css";
import Header from "@/component/Header/page";
import Footer from "@/component/Footer/page";

export const metadata = {
  title: "TravelX — World-Class Luxury Travel & Expeditions",
  description: "Experience hand-curated travel destinations, luxury island retreats, and bespoke tours with TravelX.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#0B0F19] text-slate-100 antialiased selection:bg-emerald-500 selection:text-white">
        <Header />
        <main className="relative overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

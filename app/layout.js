import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";
import Footer from "@/components/layout/Footer";
import MobileNav from "@/components/mobile/MobileNav";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { AuthProvider } from "@/context/AuthContext";
import { TransactionProvider } from "@/context/TransactionContext";
import { Analytics } from "@vercel/analytics/next"

config.autoAddCss = false;

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plus-jakarta",
});

export const metadata = {
  title: "Penny Pilot",
  description: "Financial dashboard tracking system",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased font-sans">
      <body
        className={`${plusJakartaSans.className} h-full min-h-screen pennypilot-bg`}
      >
        <div className="app-container">
          <AuthProvider>
            <TransactionProvider>
              <div className="app-layout">
                <Sidebar />
                <div className="app-main">
                  <Topbar />
                  <main className="app-content">
                    {children}
                  </main>
                  <Footer />
                </div>
                  <MobileNav />
              </div>
            </TransactionProvider>
          </AuthProvider>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
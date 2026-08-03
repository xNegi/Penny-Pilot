import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";
import Footer from "@/components/layout/Footer";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false; // Prevent Font Awesome from adding its CSS automatically

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Choose the weights you need
  variable: '--font-plus-jakarta',       // Optional: defining a CSS variable
});

export const metadata = {
  title: 'Penny Pilot',
  description: 'Financial dashboard tracking system',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en" className= "h-full antialiased font-sans">
      <body className={`${plusJakartaSans.className} h-full min-h-full pennypilot-bg`}>
        <div className="flex min-h-screen">

          {/* Sidebar (LEFT) */}
          <Sidebar />

          {/* RIGHT SECTION */}
          <div className="flex flex-1 flex-col min-w-0">

            {/* Topbar */}
            <Topbar />

            {/* Page Content */}
            <main className="flex-1 p-2 overflow-y-auto">
              {children}
            </main>

            {/* Footer */}
            <Footer />
          </div>

        </div>
      </body>
    </html>
  );
}

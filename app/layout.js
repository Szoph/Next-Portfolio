import { Inter, Jost, Poppins } from "next/font/google";
import "./globals.css";
import Header from "../components/Header"; 
import Footer from "../components/Footer";
import {ThemeProvider} from "../components/ThemeProvider"
 

const inter = Inter({ subsets: ["latin"] });
const jost = Jost({subsets: ["latin"]});
const poppins = Poppins({subsets: ["latin"], weight: ["500", "600", "700", "400"]});

export const metadata = {
  title: "Sophie's Portfolio",
  description: "Sophie's Nextjs Portfolio site. Built with Nextjs and styled with TailwindCSS.",
};

export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
    <html lang="en">
      
      <body className={`${poppins.className} dark:bg-medium dark:text-white relative`}>
        <Header />
        {children}
        <Footer />
        </body>
        
    </html>
    </ThemeProvider>
  );
}

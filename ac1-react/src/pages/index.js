import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import Menu from "@/components/Components/Menu";
import Hero from "@/components/Components/Hero";
import Projetos from "@/components/Components/Projects/Index";
import About from "@/components/Components/About";
import ContactForm from "@/components/Components/ContactForm";
import Footer from "@/components/Components/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return  (
     <>
      <Menu />
      <Hero />
      <Projetos></Projetos>
      <About />
      <ContactForm />
      <Footer />
    </>
  )

}

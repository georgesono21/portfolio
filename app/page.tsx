

import Image from "next/image";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import { TracingBeam } from "@/components/ui/TracingBeam";
import Connect from "@/components/Connect";

export default function Home() {
  return (
    <main className ="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10">
      <div className = "max-w-7xl w-full">
      
          <FloatingNav navItems = {navItems}
          />
          <Hero/>
        <TracingBeam>
          <Grid/>
          <Experience/>
          <RecentProjects/>
          <Connect/>
        </TracingBeam>
          <Footer/>
      </div>
    </main>
     );
}

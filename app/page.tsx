import BackToTop from "@/components/back-to-top";
import Banner from "@/components/sections/banner";
import Contact from "@/components/sections/contact";
import Footer from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import Project from "@/components/sections/project";
import Skills from "@/components/sections/skills";
import ScrollIndicator from "@/lib/util/scroll-indicator";

export default function Home() {
  return (
    <div className="w-full">
      <ScrollIndicator />
      <div className="text-center">
        <Navbar />
        <Banner />
        <Skills />
        <Project />
        <Contact />
        <Footer />
        <BackToTop />
      </div>
    </div>
  );
}

import BackToTop from "@/components/back-to-top";
import Banner from "@/components/banner";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";
import Project from "@/components/project";
import Skills from "@/components/skills";
import ScrollIndicator from "@/util/scroll-indicator";

export default function Home() {
  return (
    <>
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
    </>
  );
}

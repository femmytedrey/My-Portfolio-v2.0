"use client";
import { motion } from "motion/react";
import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { ArrowRightCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const detal = useRef(300 - Math.random() * 100);

  const toRotate = useMemo(
    () => ["Full-Stack Developer", "Frontend Developer", "Backend Developer"],
    [],
  );

  const tick = useCallback(() => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updateText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updateText);

    if (isDeleting) {
      detal.current /= 2;
    }

    if (!isDeleting && updateText === fullText) {
      setIsDeleting(true);
      detal.current = 2000;
    } else if (isDeleting && updateText === "") {
      setIsDeleting(false);
      setLoopNum((prev) => prev + 1);
      detal.current = 500;
    }
  }, [loopNum, isDeleting, text, toRotate]);

  useEffect(() => {
    const ticker = setTimeout(() => tick(), detal.current);
    return () => clearTimeout(ticker);
  }, [tick]);

  return (
    <section
      className="pt-16 sm:pt-20 md:pt-24 text-white relative overflow-hidden"
      style={{
        background: "#080808",
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
      }}
      id="home"
    >
      {/* Glow orbs */}
      <div className="absolute top-[-80px] right-[100px] w-[300px] h-[300px] rounded-full bg-[#7c6dfa] opacity-[0.08] blur-[80px] pointer-events-none" />
      <div className="absolute bottom-[-60px] left-[200px] w-[200px] h-[200px] rounded-full bg-[#aa367c] opacity-[0.08] blur-[80px] pointer-events-none" />

      {/* Floating dots */}
      <div className="absolute top-[15%] left-[8%] w-[3px] h-[3px] rounded-full bg-white/25 pointer-events-none" />
      <div className="absolute top-[60%] left-[15%] w-[2px] h-[2px] rounded-full bg-white/25 pointer-events-none" />
      <div className="absolute top-[30%] left-[45%] w-[3px] h-[3px] rounded-full bg-white/25 pointer-events-none" />
      <div className="absolute top-[75%] left-[55%] w-[2px] h-[2px] rounded-full bg-white/25 pointer-events-none" />
      <div className="absolute top-[20%] left-[70%] w-[4px] h-[4px] rounded-full bg-white/25 pointer-events-none" />
      <div className="absolute top-[85%] left-[80%] w-[2px] h-[2px] rounded-full bg-white/25 pointer-events-none" />

      {/* Floating code lines */}
      <span className="absolute top-[18%] left-[5%] font-mono text-[11px] text-[#7c6dfa]/40 pointer-events-none hidden lg:block">
        const dev = new FemiDev();
      </span>
      <span className="absolute bottom-[22%] left-[5%] font-mono text-[11px] text-[#7c6dfa]/40 pointer-events-none hidden lg:block">
        export default fullstack;
      </span>
      <span className="absolute top-[70%] right-[5%] font-mono text-[11px] text-[#7c6dfa]/40 pointer-events-none hidden lg:block -rotate-2">
        // building in prod
      </span>

      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto px-4 sm:px-10 xl:px-0 items-center min-h-[85vh] sm:min-h-[90vh]">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, translateX: -80 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex-1 space-y-4 sm:space-y-6 text-center lg:text-start order-2 lg:order-1 pb-10 md:pb-0"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="font-bold tracking-wide px-2 sm:px-3 py-1 sm:py-2 inline-block mb-2 sm:mb-4 text-sm sm:text-base md:text-lg border border-white/50 bg-gradient-to-r from-[#aa367c80] to-[#4a2fbd80] rounded-sm"
          >
            Welcome to my Portfolio
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
          >
            Hi, I&apos;m FemiDev!{" "}
            <span className="text-accent wrap block sm:inline mt-2 sm:mt-0">
              {text}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.7 }}
            className="max-w-xl mx-auto lg:mx-0 text-gray-200 text-base sm:text-lg leading-relaxed"
          >
            I&apos;m a web developer with expertise in both frontend, mobile app
            and backend development. From crafting intuitive user interfaces to
            building robust backend systems, I create seamless and scalable
            digital experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="pt-2 sm:pt-4"
          >
            <Link href="#connect">
              <button className="group relative overflow-hidden border border-white text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base hover:scale-105 transition-transform duration-300">
                <span className="relative z-10 transition-all group-hover:text-black flex items-center justify-center">
                  Let&apos;s Connect{" "}
                  <ArrowRightCircle className="inline ml-2" size={18} />
                </span>
                <span className="absolute inset-0 bg-white w-0 group-hover:w-full transition-all duration-500 ease-in-out z-0"></span>
              </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Astronaut */}
        <motion.div
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex-1 mt-6 sm:mt-8 lg:mt-0 justify-center lg:justify-end flex order-1 lg:order-2"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] flex items-center justify-center">
  {/* Rings */}
  <div className="absolute w-full h-full rounded-full border border-[#7c6dfa]/10" />
  <div className="absolute w-[80%] h-[80%] rounded-full border border-[#7c6dfa]/10" />
  <Image
    src="/assets/img/header-img.svg"
    alt="Header"
    fill
    className="updown-animation object-contain scale-75"
    priority
  />
</div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;

"use client";
import { motion, useScroll } from "motion/react";

const ScrollIndicator = () => {
  const { scrollYProgress } = useScroll();
  return (
    <div className="w-full z-50 fixed top-0">
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 10,
          originX: 0,
          background: "linear-gradient(to right, #4a2fbd, #aa367c)",
        }}
      />
    </div>
  );
};

export default ScrollIndicator;

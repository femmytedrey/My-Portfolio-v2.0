import { motion } from "motion/react";
import SectionBadge from "../ui/section_badge";

type HeaderSectionProps = {
  badge: string;
  title: string;
  subtitle: string;
};

const HeaderSection = ({ badge, title, subtitle }: HeaderSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-center mb-16"
    >
      <SectionBadge size="lg" className="mb-6">
        {badge}
      </SectionBadge>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight transition-all duration-1000 delay-200">
        {title}
      </h2>
      <p className="text-gray-300 text-lg max-w-3xl mx-auto transition-all duration-1000 delay-300">
        {subtitle}
      </p>
    </motion.div>
  );
};

export default HeaderSection;

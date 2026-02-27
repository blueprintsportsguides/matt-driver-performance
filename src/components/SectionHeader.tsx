"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({
  label,
  title,
  description,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`max-w-3xl ${centered ? "mx-auto text-center" : ""} mb-16 sm:mb-20`}
    >
      {label && (
        <span
          className={`inline-block px-5 py-2 rounded-full text-sm font-semibold mb-6 tracking-wide ${
            light
              ? "bg-white/10 text-white/90"
              : "bg-primary/10 text-primary"
          }`}
        >
          {label}
        </span>
      )}
      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-[1.15] ${
          light ? "text-white" : "text-gray-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-lg lg:text-xl leading-relaxed max-w-2xl ${centered ? "mx-auto" : ""} ${
            light ? "text-white/80" : "text-gray-600"
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}

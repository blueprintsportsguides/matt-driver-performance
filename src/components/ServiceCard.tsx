"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
  href?: string;
  delay?: number;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
  href,
  delay = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group bg-primary rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm border border-primary-dark/30 card-hover min-w-0"
    >
      <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
        <Icon className="w-8 h-8 text-white transition-colors" />
      </div>

      <h3 className="text-xl lg:text-2xl font-bold text-white mb-4">{title}</h3>
      <p className="text-white/90 mb-8 leading-relaxed">{description}</p>

      {features && features.length > 0 && (
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3 text-sm text-white/85">
              <span className="w-2 h-2 bg-white/80 rounded-full flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}

      {href && (
        <Link
          href={href}
          className="inline-flex items-center gap-2 text-white font-semibold group-hover:gap-4 transition-all hover:text-white/95"
        >
          Learn More
          <ArrowRight className="w-5 h-5" />
        </Link>
      )}
    </motion.div>
  );
}

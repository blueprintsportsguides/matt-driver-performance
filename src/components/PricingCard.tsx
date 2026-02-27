"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, LucideIcon } from "lucide-react";

interface PricingCardProps {
  icon: LucideIcon;
  title: string;
  price: string;
  unit?: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  delay?: number;
}

export default function PricingCard({
  icon: Icon,
  title,
  price,
  unit = "per session",
  description,
  features,
  highlighted = false,
  delay = 0,
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`relative rounded-2xl p-8 lg:p-10 card-hover ${
        highlighted
          ? "bg-primary text-white shadow-2xl shadow-primary/20 scale-105 z-10"
          : "bg-white text-gray-900 border border-gray-100"
      }`}
    >
      {highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 bg-secondary text-white text-sm font-semibold rounded-full whitespace-nowrap">
          Most Popular
        </div>
      )}

      <div
        className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${
          highlighted ? "bg-white/20" : "bg-primary/10"
        }`}
      >
        <Icon
          className={`w-8 h-8 ${highlighted ? "text-white" : "text-primary"}`}
        />
      </div>

      <h3 className="text-xl lg:text-2xl font-bold mb-3">{title}</h3>
      <p
        className={`text-sm lg:text-base mb-8 leading-relaxed ${
          highlighted ? "text-white/80" : "text-gray-600"
        }`}
      >
        {description}
      </p>

      <div className="mb-8">
        <span className="text-4xl lg:text-5xl font-bold">{price}</span>
        {unit && (
          <span
            className={`text-sm ml-2 ${
              highlighted ? "text-white/70" : "text-gray-500"
            }`}
          >
            {unit}
          </span>
        )}
      </div>

      <ul className="space-y-4 mb-10">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-4">
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                highlighted ? "bg-white/20" : "bg-primary/10"
              }`}
            >
              <Check
                className={`w-3.5 h-3.5 ${
                  highlighted ? "text-white" : "text-primary"
                }`}
              />
            </div>
            <span
              className={`text-sm lg:text-base leading-relaxed ${
                highlighted ? "text-white/90" : "text-gray-600"
              }`}
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <Link
        href="/contact"
        className={`block w-full py-4 px-6 text-center font-semibold rounded-xl transition-all duration-200 ${
          highlighted
            ? "bg-white text-primary hover:bg-gray-100"
            : "bg-primary text-white hover:bg-primary-dark"
        }`}
      >
        Get Started
      </Link>
    </motion.div>
  );
}

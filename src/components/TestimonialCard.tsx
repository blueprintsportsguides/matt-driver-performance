"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  rating?: number;
  delay?: number;
}

export default function TestimonialCard({
  quote,
  author,
  role,
  rating = 5,
  delay = 0,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-card-bg border border-card-border rounded-2xl p-8 lg:p-10 relative"
    >
      <Quote className="absolute top-8 right-8 w-12 h-12 text-primary/10" />

      <div className="flex gap-1.5 mb-6">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
        ))}
      </div>

      <p className="text-foreground/90 text-lg leading-relaxed mb-6 italic">&quot;{quote}&quot;</p>

      <div>
        <div className="font-semibold text-foreground text-lg">{author}</div>
        {role && <div className="text-sm text-muted mt-1">{role}</div>}
      </div>
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play, Award, Users, TrendingUp } from "lucide-react";

interface HeroProps {
  videoSrc?: string;
  imageSrc?: string;
  title: string;
  subtitle?: string;
  description: string;
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  showStats?: boolean;
}

const stats = [
  { icon: Award, value: "100+", label: "Athletes Trained" },
  { icon: Users, value: "U9-U21", label: "Age Range" },
  { icon: TrendingUp, value: "Elite", label: "Academy Level" },
];

export default function Hero({
  videoSrc,
  imageSrc,
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  showStats = true,
}: HeroProps) {
  return (
    <section className="relative min-h-[72vh] flex items-center justify-center overflow-hidden">
      {/* Video/Image Background */}
      <div className="absolute inset-0 z-0">
        {videoSrc ? (
          <div className="video-container h-full">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
          </div>
        ) : imageSrc ? (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${imageSrc})` }}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark" />
        )}
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* Content - wider on desktop to use more of the space */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-40 sm:py-48">
        <div className="max-w-3xl lg:max-w-5xl">
          {subtitle && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/10 backdrop-blur-sm rounded-full mb-8"
            >
              <span className="w-2.5 h-2.5 bg-secondary rounded-full animate-pulse" />
              <span className="text-white/90 text-sm font-medium tracking-wide">{subtitle}</span>
            </motion.div>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-8 max-w-5xl"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl lg:text-2xl text-white/80 mb-10 leading-relaxed max-w-2xl lg:max-w-3xl"
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4 sm:gap-5"
          >
            {primaryCta && (
              <Link
                href={primaryCta.href}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-8 sm:py-4 min-h-[48px] bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all duration-200 btn-shine group"
              >
                <span className="text-center">{primaryCta.text}</span>
                <ArrowRight className="w-5 h-5 shrink-0 group-hover:translate-x-1 transition-transform" />
              </Link>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-8 sm:py-4 min-h-[48px] bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-200 border border-white/20"
              >
                <Play className="w-5 h-5 shrink-0" />
                <span className="text-center">{secondaryCta.text}</span>
              </Link>
            )}
          </motion.div>
        </div>

        {/* Stats */}
        {showStats && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-20 grid grid-cols-3 gap-6 max-w-2xl lg:max-w-4xl"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-8 text-center border border-white/10 min-w-0"
              >
                <stat.icon className="w-6 h-6 sm:w-7 sm:h-7 text-secondary mx-auto mb-2 sm:mb-3" />
                <div className="text-xl sm:text-3xl font-bold text-white mb-1 sm:mb-2 whitespace-nowrap">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-white/70 leading-tight">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        )}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}

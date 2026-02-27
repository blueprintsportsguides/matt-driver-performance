"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Activity,
  Target,
  Users,
  Gauge,
  Trophy,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import CTASection from "@/components/CTASection";

const services = [
  {
    icon: Gauge,
    title: "Performance Profiling",
    description:
      "Using state-of-the-art technology, we measure key physical qualities including speed, strength, and power. We also monitor growth and maturation data to mitigate injury risk.",
    features: [
      "Speed & agility testing",
      "Strength & power assessment",
      "Growth & maturation tracking",
      "Injury risk analysis",
    ],
    href: "/services#profiling",
  },
  {
    icon: Target,
    title: "1-1 Training",
    description:
      "Individualised, bespoke sessions designed to optimise your specific performance targets and accelerate your athletic development.",
    features: [
      "Personalised training plans",
      "Technique refinement",
      "Position-specific work",
      "Progress tracking",
    ],
    href: "/services#one-to-one",
  },
  {
    icon: Users,
    title: "Small Group Training",
    description:
      "Competitive and enjoyable sessions that develop a range of physical qualities and movement skills in a dynamic group environment.",
    features: [
      "Competitive atmosphere",
      "Team dynamics",
      "Movement skills",
      "Social development",
    ],
    href: "/services#group",
  },
];

const whyChooseUs = [
  {
    icon: Trophy,
    title: "Premier League Experience",
    description:
      "Trained hundreds of players at the highest level of academy football, from U9 through to U21.",
  },
  {
    icon: GraduationCap,
    title: "Elite Education",
    description:
      "BSc from Loughborough University and MSc from St Mary's University, Twickenham - the UK's leading sports institutions.",
  },
  {
    icon: Activity,
    title: "Evidence-Based Methods",
    description:
      "Every session is built on the latest sports science research and proven methodologies.",
  },
  {
    icon: Sparkles,
    title: "Youth Development Focus",
    description:
      "Specialised in long-term athletic development tailored to growing athletes.",
  },
];

const testimonials = [
  {
    quote:
      "Matt's professionalism and expertise have been instrumental in my son's development. The improvement in his speed and confidence has been remarkable.",
    author: "James T.",
    role: "Parent of U14 Academy Player",
    rating: 5,
  },
  {
    quote:
      "The attention to detail in every session is incredible. Matt understands exactly what young footballers need to reach the next level.",
    author: "Sarah M.",
    role: "Parent of U12 Academy Player",
    rating: 5,
  },
  {
    quote:
      "Working with Matt has transformed my game. The personalised training helped me secure a scholarship to a top academy.",
    author: "Ben R.",
    role: "U16 Academy Player",
    rating: 5,
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        imageSrc="/images/matt-stadium.jpeg"
        subtitle="Premier League Academy Experience"
        title="Unlock Your Athletic Potential"
        description="Elite-level strength and conditioning for youth athletes. Helping the next generation of footballers reach their full potential through evidence-based training methods."
        primaryCta={{ text: "Start Training", href: "/contact" }}
        secondaryCta={{ text: "Our Services", href: "/services" }}
      />

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-5 py-2 rounded-full text-sm font-semibold mb-6 bg-primary/10 text-primary tracking-wide">
                Our Mission
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-[1.15]">
                Making Elite Training{" "}
                <span className="gradient-text">Accessible For All</span>
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 mb-10 leading-relaxed">
                To make elite-level strength and conditioning accessible for all
                youth athletes, fostering long-term athletic development and
                career success. Every young athlete deserves the opportunity to
                train like a professional.
              </p>
              <div className="space-y-5">
                {[
                  "Evidence-based training methods",
                  "Personalised development plans",
                  "Long-term athletic growth focus",
                  "Injury prevention strategies",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-3 mt-10 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors group"
              >
                Learn More About Me
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/coaching-session.jpeg"
                  alt="Matt Driver coaching a young athlete"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-xl p-8">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                    <Trophy className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900">100+</div>
                    <div className="text-base text-gray-600">Athletes Trained</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionHeader
            label="What We Offer"
            title="Services Designed For Success"
            description="Comprehensive training programmes tailored to develop every aspect of your athletic performance."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} delay={index * 0.1} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-16"
          >
            <Link
              href="/pricing"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors group"
            >
              View Pricing
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
                {whyChooseUs.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-50 rounded-2xl p-8"
                  >
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                      <item.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-3">
                      {item.title}
                    </h3>
                    <p className="text-base text-gray-600 leading-relaxed">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <span className="inline-block px-5 py-2 rounded-full text-sm font-semibold mb-6 bg-primary/10 text-primary tracking-wide">
                Why Choose Us
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-[1.15]">
                Experience That{" "}
                <span className="gradient-text">Makes The Difference</span>
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed">
                With years of experience at the highest level of academy
                football and world-class education from the UK&apos;s top sports
                science institutions, I bring unparalleled expertise to every
                session.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Having coached hundreds of players ranging from U9 to U21, I
                understand the unique challenges and opportunities that come
                with developing young athletes. My approach combines
                cutting-edge sports science with practical, engaging training
                methods.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Training Facility Section */}
      <section className="section-padding bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/training-facility.jpeg"
            alt="Training facility"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionHeader
            label="Training Environment"
            title="State-of-the-Art Facilities"
            description="Access to premium performance labs equipped with the latest technology for comprehensive athletic assessment and training."
            light
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/training-facility.jpeg"
              alt="Advance Performance Lab - Youth Strength & Conditioning"
              fill
              className="object-cover"
            />
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6 lg:gap-8 mt-16">
            {[
              { label: "Speed Tracks", value: "Pro-Grade" },
              { label: "Equipment", value: "Elite Level" },
              { label: "Technology", value: "State-of-Art" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center"
              >
                <div className="text-2xl lg:text-3xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-white/70 text-base">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionHeader
            label="Testimonials"
            title="What Parents & Athletes Say"
            description="Hear from the families and athletes who have experienced the Matt Driver Performance difference."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Elevate Your Game?"
        description="Book your free initial consultation today and take the first step towards unlocking your athletic potential."
        primaryCta={{ text: "Book Free Consultation", href: "/contact" }}
        secondaryCta={{ text: "Call Now", href: "tel:07938244735" }}
      />
    </>
  );
}

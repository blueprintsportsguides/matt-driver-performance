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
      "I always look forward to sessions with Matt, he is enthusiastic and I feel lucky to have such a supportive coach.",
    author: "WSL Academy Player",
    role: "",
    rating: 5,
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        imageSrc="/images/matt-stadium.jpeg"
        subtitle="Strength & conditioning for young athletes"
        title="Unlock Your Child's Potential"
        description="Elite-level training for youth footballers. Evidence-based, supportive coaching at Advance Guildford. Book a free consultation."
        primaryCta={{ text: "Book free consultation", href: "/contact" }}
        secondaryCta={{ text: "Services", href: "/services" }}
      />

      {/* Mission Section */}
      <section className="section-padding bg-surface">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1 min-w-0"
            >
              <span className="inline-block px-5 py-2 rounded-full text-sm font-semibold mb-6 bg-primary/20 text-primary tracking-wide">
                For parents
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 leading-[1.15]">
                Elite training,{" "}
                <span className="gradient-text">supportive environment</span>
              </h2>
              <p className="text-foreground/80 mb-8 leading-relaxed">
                Evidence-based strength and conditioning for youth footballers. Personalised plans, injury awareness, and long-term development. Your child trains in a safe, professional setting at Advance Guildford.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Evidence-based methods",
                  "Personalised development",
                  "Injury prevention focus",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/services"
                className="inline-flex items-center gap-3 px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors group shrink-0"
              >
                <span className="whitespace-nowrap">Services & pricing</span>
                <ArrowRight className="w-5 h-5 shrink-0 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative max-w-md mx-auto lg:mx-0 order-1 lg:order-2"
            >
              <div className="relative aspect-[4/5] max-h-[320px] sm:max-h-[380px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/coaching-session.jpeg"
                  alt="Matt Driver coaching a young athlete"
                  fill
                  className="object-cover"
                  sizes="(max-width: 448px) 100vw, 448px"
                />
              </div>
              <div className="mt-4 lg:mt-0 lg:absolute lg:-bottom-4 lg:-left-4 bg-card-bg border border-card-border rounded-xl shadow-lg p-5 w-fit">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center shrink-0">
                    <Trophy className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">100+</div>
                    <div className="text-sm text-muted">Athletes trained</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionHeader
            label="Services"
            title="What we offer"
            description="Performance profiling, 1-1 and small group sessions. All at Advance Guildford."
            light
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} delay={index * 0.1} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-3 px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors group"
            >
              Full details & pricing
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Us - concise */}
      <section className="section-padding bg-surface">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-10 text-center">
            Why Matt Driver Performance
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="bg-card-bg border border-card-border rounded-xl p-6"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location / Facility */}
      <section className="section-padding bg-background text-white relative overflow-hidden">
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
            label="Location"
            title="Advance Guildford"
            description="Main training base. Pro-grade facilities for profiling and sessions."
            light
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link
              href="/location"
              className="inline-flex items-center gap-3 px-6 py-3 bg-white text-primary font-semibold rounded-xl hover:bg-white/90 transition-colors"
            >
              All locations
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-padding bg-surface">
        <div className="max-w-2xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            What athletes say
          </h2>
          <div className="flex justify-center">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to get started?"
        description="Free consultation for parents and athletes. Discuss goals and how we can help."
        primaryCta={{ text: "Book free consultation", href: "/contact" }}
        secondaryCta={{ text: "Call 07938 244 735", href: "tel:07938244735" }}
      />
    </>
  );
}

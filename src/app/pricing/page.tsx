"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Phone,
  Gauge,
  Target,
  Users,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import PricingCard from "@/components/PricingCard";
import CTASection from "@/components/CTASection";

const pricingPlans = [
  {
    icon: Phone,
    title: "Initial Consultation",
    price: "FREE",
    unit: "",
    description:
      "A no-obligation phone call to discuss your goals and how we can help.",
    features: [
      "Discuss your athletic goals",
      "Understand your current level",
      "Learn about our services",
      "Get personalised recommendations",
      "No commitment required",
    ],
    highlighted: false,
  },
  {
    icon: Gauge,
    title: "Performance Profiling",
    price: "£60",
    unit: "per session",
    description:
      "Comprehensive athletic assessment using state-of-the-art technology.",
    features: [
      "Speed & agility testing",
      "Strength & power assessment",
      "Growth & maturation monitoring",
      "Injury risk screening",
      "Detailed written report",
      "Training recommendations",
    ],
    highlighted: false,
  },
  {
    icon: Target,
    title: "1-1 Training",
    price: "£50",
    unit: "per session",
    description:
      "Individualised sessions tailored to your specific performance goals.",
    features: [
      "100% personalised attention",
      "Tailored training programme",
      "Technique coaching",
      "Progress tracking",
      "Flexible scheduling",
      "Position-specific work",
    ],
    highlighted: true,
  },
  {
    icon: Users,
    title: "Small Group Training",
    price: "£30",
    unit: "per person",
    description:
      "Dynamic group sessions with competitive and enjoyable training.",
    features: [
      "Train with peers",
      "Competitive environment",
      "Team dynamics",
      "Movement skills focus",
      "Social development",
      "Cost-effective option",
    ],
    highlighted: false,
  },
];

const faqs = [
  {
    question: "What age groups do you work with?",
    answer:
      "I work with youth athletes from U9 through to U21, tailoring every session to the appropriate developmental stage and individual needs.",
  },
  {
    question: "How often should my child train?",
    answer:
      "This depends on their current training load and goals. During our initial consultation, we'll discuss the optimal frequency based on their schedule and objectives.",
  },
  {
    question: "What should my child bring to a session?",
    answer:
      "Athletes should wear appropriate sportswear and trainers, and bring water. For outdoor sessions, please dress for the weather conditions.",
  },
  {
    question: "Do you offer package deals?",
    answer:
      "Yes, we offer discounted packages for block bookings. Please get in touch to discuss the options that best suit your needs.",
  },
  {
    question: "Where do sessions take place?",
    answer:
      "Sessions can take place at various locations including professional training facilities, local pitches, or parks. We'll agree on the most convenient location for you.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "We require 24 hours notice for cancellations. Sessions cancelled with less notice may be charged at the full rate.",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        imageSrc="/images/matt-trophy.jpeg"
        subtitle="Pricing"
        title="Transparent, Simple Pricing"
        description="Invest in your athletic development with our clear, straightforward pricing structure. Elite training made accessible."
        primaryCta={{ text: "Book Free Consultation", href: "/contact" }}
        showStats={false}
      />

      {/* Pricing Cards */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionHeader
            label="Our Pricing"
            title="Choose Your Training Path"
            description="All sessions are 1 hour and include professional coaching, progress tracking, and ongoing support."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 items-start">
            {pricingPlans.map((plan, index) => (
              <PricingCard key={index} {...plan} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Value Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-5 py-2 rounded-full text-sm font-semibold mb-6 bg-primary/10 text-primary tracking-wide">
                Why Invest
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-[1.15]">
                The Value of{" "}
                <span className="gradient-text">Professional Coaching</span>
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 mb-10 leading-relaxed">
                Investing in professional strength and conditioning coaching
                provides benefits that extend far beyond the training session.
                You&apos;re investing in your child&apos;s athletic future,
                confidence, and long-term health.
              </p>
              <div className="space-y-5">
                {[
                  "Accelerated athletic development",
                  "Reduced injury risk through proper training",
                  "Improved confidence and mental resilience",
                  "Better performance in matches and trials",
                  "Long-term healthy habits and movement patterns",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gray-50 rounded-3xl p-8 lg:p-10"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900">
                  Package Deals Available
                </h3>
              </div>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Save money when you commit to your development with our
                discounted training packages. Block bookings provide better value
                and ensure consistent progress.
              </p>
              <div className="space-y-4 mb-10">
                <div className="flex justify-between items-center p-5 bg-white rounded-xl">
                  <span className="font-medium text-gray-900 text-lg">
                    4-Session Block
                  </span>
                  <span className="text-primary font-bold text-lg">5% OFF</span>
                </div>
                <div className="flex justify-between items-center p-5 bg-white rounded-xl">
                  <span className="font-medium text-gray-900 text-lg">
                    8-Session Block
                  </span>
                  <span className="text-primary font-bold text-lg">10% OFF</span>
                </div>
                <div className="flex justify-between items-center p-5 bg-white rounded-xl">
                  <span className="font-medium text-gray-900 text-lg">
                    12-Session Block
                  </span>
                  <span className="text-primary font-bold text-lg">15% OFF</span>
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 text-primary font-semibold text-lg hover:gap-4 transition-all"
              >
                Enquire about packages
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionHeader
            label="FAQs"
            title="Frequently Asked Questions"
            description="Got questions? We've got answers. If you can't find what you're looking for, get in touch."
          />

          <div className="space-y-5">
            {faqs.map((faq, index) => (
              <motion.details
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group bg-white rounded-2xl shadow-sm"
              >
                <summary className="flex items-center justify-between p-6 lg:p-8 cursor-pointer list-none">
                  <span className="font-semibold text-gray-900 text-lg pr-6">
                    {faq.question}
                  </span>
                  <span className="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center group-open:bg-primary group-open:text-white transition-colors">
                    <ArrowRight className="w-5 h-5 transform group-open:rotate-90 transition-transform" />
                  </span>
                </summary>
                <div className="px-6 lg:px-8 pb-6 lg:pb-8">
                  <p className="text-gray-600 text-lg leading-relaxed">{faq.answer}</p>
                </div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Get Started?"
        description="Book your free consultation today - no commitment required. Let's discuss how we can help you reach your goals."
        primaryCta={{ text: "Book Free Consultation", href: "/contact" }}
        secondaryCta={{ text: "Call Now", href: "tel:07938244735" }}
      />
    </>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Gauge,
  Target,
  Users,
  Activity,
  TrendingUp,
  Shield,
  Zap,
  BarChart3,
  Clock,
  CheckCircle2,
  ArrowRight,
  Dumbbell,
  Footprints,
  Heart,
} from "lucide-react";
import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import CTASection from "@/components/CTASection";

const services = [
  {
    id: "profiling",
    icon: Gauge,
    title: "Performance Profiling",
    price: "£60",
    duration: "1 Hour",
    description:
      "Using state-of-the-art technology, we measure a number of physical qualities to create a comprehensive athletic profile. This data-driven approach ensures training is precisely targeted to your needs.",
    features: [
      {
        icon: Zap,
        title: "Speed Testing",
        description: "Measure acceleration, top speed, and sprint mechanics",
      },
      {
        icon: Dumbbell,
        title: "Strength Assessment",
        description: "Evaluate muscular strength and identify imbalances",
      },
      {
        icon: Activity,
        title: "Power Analysis",
        description: "Test explosive power and reactive strength",
      },
      {
        icon: TrendingUp,
        title: "Growth Monitoring",
        description: "Track maturation data to optimise training loads",
      },
      {
        icon: Shield,
        title: "Injury Prevention",
        description: "Identify risk factors and movement dysfunctions",
      },
      {
        icon: BarChart3,
        title: "Detailed Report",
        description: "Comprehensive analysis with actionable recommendations",
      },
    ],
    benefits: [
      "Understand your current physical capabilities",
      "Identify strengths and areas for improvement",
      "Create targeted training programmes",
      "Track progress over time",
      "Reduce injury risk through early identification",
    ],
    image: "/images/training-facility.jpeg",
  },
  {
    id: "one-to-one",
    icon: Target,
    title: "1-1 Training",
    price: "£50",
    duration: "1 Hour",
    description:
      "Individualised, bespoke sessions designed to optimise your specific performance targets. Every session is tailored to your unique needs, goals, and stage of development.",
    features: [
      {
        icon: Target,
        title: "Personalised Plans",
        description: "Training programmes designed specifically for you",
      },
      {
        icon: Footprints,
        title: "Movement Skills",
        description: "Develop fundamental and sport-specific movement patterns",
      },
      {
        icon: Dumbbell,
        title: "Strength Development",
        description: "Age-appropriate resistance training protocols",
      },
      {
        icon: Zap,
        title: "Speed & Agility",
        description: "Enhance acceleration, change of direction, and quickness",
      },
      {
        icon: Heart,
        title: "Conditioning",
        description: "Build the fitness base required for your sport",
      },
      {
        icon: Clock,
        title: "Flexible Scheduling",
        description: "Sessions arranged around your commitments",
      },
    ],
    benefits: [
      "100% focus on your development",
      "Faster progress through individualised attention",
      "Technique refinement and correction",
      "Position-specific training for footballers",
      "Build confidence alongside physical capabilities",
    ],
    image: "/images/coaching-session.jpeg",
  },
  {
    id: "group",
    icon: Users,
    title: "Small Group Training",
    price: "£30",
    duration: "1 Hour / Per Person",
    description:
      "Competitive and enjoyable sessions that develop a range of physical qualities and movement skills. Train alongside peers in a dynamic, motivating environment.",
    features: [
      {
        icon: Users,
        title: "Team Dynamics",
        description: "Build camaraderie and healthy competition",
      },
      {
        icon: Activity,
        title: "Varied Training",
        description: "Diverse sessions covering all physical qualities",
      },
      {
        icon: Zap,
        title: "Game-Based Learning",
        description: "Fun, engaging activities that develop athleticism",
      },
      {
        icon: TrendingUp,
        title: "Progressive Overload",
        description: "Structured progression to ensure continuous improvement",
      },
      {
        icon: Shield,
        title: "Safe Environment",
        description: "Professional supervision in every session",
      },
      {
        icon: Heart,
        title: "Social Development",
        description: "Build friendships and social skills alongside fitness",
      },
    ],
    benefits: [
      "Cost-effective training solution",
      "Learn through competition with peers",
      "Develop teamwork and communication skills",
      "High-energy, motivating sessions",
      "Perfect for friends or teammates to train together",
    ],
    image: "/images/training-facility.jpeg",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        imageSrc="/images/training-facility.jpeg"
        subtitle="Our Services"
        title="Elite Training For Every Athlete"
        description="Comprehensive training programmes designed to develop speed, strength, power, and athletic performance using evidence-based methods."
        primaryCta={{ text: "Book Now", href: "/contact" }}
        secondaryCta={{ text: "View Pricing", href: "/pricing" }}
        showStats={false}
      />

      {/* Services Overview */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionHeader
            label="What We Offer"
            title="Services Tailored To Your Goals"
            description="From comprehensive athletic assessments to personalised training sessions, we have the perfect solution for every athlete."
          />

          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {services.map((service, index) => (
              <motion.a
                key={service.id}
                href={`#${service.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-gray-50 rounded-2xl p-8 lg:p-10 hover:bg-primary hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-primary/10 group-hover:bg-white/20 rounded-2xl flex items-center justify-center mb-8 transition-colors">
                  <service.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 group-hover:text-white mb-4 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 group-hover:text-white/80 mb-6 leading-relaxed transition-colors">
                  {service.description.slice(0, 100)}...
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-200 group-hover:border-white/20">
                  <span className="text-2xl lg:text-3xl font-bold text-primary group-hover:text-white transition-colors">
                    {service.price}
                  </span>
                  <span className="text-base text-gray-500 group-hover:text-white/70 transition-colors">
                    {service.duration}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      {services.map((service, serviceIndex) => (
        <section
          key={service.id}
          id={service.id}
          className={`section-padding ${
            serviceIndex % 2 === 0 ? "bg-gray-50" : "bg-white"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={serviceIndex % 2 === 1 ? "lg:order-2" : ""}
              >
                <div className="flex items-center gap-5 mb-8">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                      {service.title}
                    </h2>
                    <div className="flex items-center gap-3 mt-2">
                      <span className="text-2xl lg:text-3xl font-bold text-primary">
                        {service.price}
                      </span>
                      <span className="text-gray-500 text-lg">/ {service.duration}</span>
                    </div>
                  </div>
                </div>

                <p className="text-lg lg:text-xl text-gray-600 mb-10 leading-relaxed">
                  {service.description}
                </p>

                <div className="grid sm:grid-cols-2 gap-5 mb-10">
                  {service.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-base mb-1">
                          {feature.title}
                        </h4>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors group"
                >
                  Book {service.title}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className={serviceIndex % 2 === 1 ? "lg:order-1" : ""}
              >
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Benefits Card */}
                <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">
                  <h4 className="font-bold text-gray-900 text-xl mb-6">Key Benefits</h4>
                  <ul className="space-y-4">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-4">
                        <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-base leading-relaxed">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Process Section */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionHeader
            label="How It Works"
            title="Your Journey With Us"
            description="From initial consultation to ongoing development, we're with you every step of the way."
            light
          />

          <div className="grid md:grid-cols-4 gap-8 lg:gap-12">
            {[
              {
                step: "01",
                title: "Free Consultation",
                description:
                  "Discuss your goals and current level in a no-obligation phone call.",
              },
              {
                step: "02",
                title: "Assessment",
                description:
                  "Complete a comprehensive performance profile to establish your baseline.",
              },
              {
                step: "03",
                title: "Programme Design",
                description:
                  "Receive a tailored training plan based on your assessment results.",
              },
              {
                step: "04",
                title: "Train & Progress",
                description:
                  "Execute your programme with ongoing support and regular progress reviews.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <span className="text-7xl lg:text-8xl font-bold text-white/10">
                  {item.step}
                </span>
                <h3 className="text-xl lg:text-2xl font-bold text-white mt-4 mb-4">
                  {item.title}
                </h3>
                <p className="text-white/70 text-base lg:text-lg leading-relaxed">{item.description}</p>
                {index < 3 && (
                  <ArrowRight className="hidden md:block absolute top-10 -right-6 w-10 h-10 text-white/20" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Transform Your Performance?"
        description="Book your free consultation today and let's discuss how we can help you reach your goals."
        primaryCta={{ text: "Book Free Consultation", href: "/contact" }}
        secondaryCta={{ text: "View Pricing", href: "/pricing" }}
      />
    </>
  );
}

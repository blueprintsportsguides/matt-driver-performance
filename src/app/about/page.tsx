"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Trophy,
  Users,
  Target,
  Award,
  Briefcase,
  BookOpen,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import CTASection from "@/components/CTASection";

const timeline = [
  {
    year: "Education",
    title: "Loughborough University",
    description:
      "BSc in Sport and Exercise Science from one of the UK's leading sports universities, building a strong foundation in athletic performance.",
    icon: GraduationCap,
  },
  {
    year: "Education",
    title: "St Mary's University, Twickenham",
    description:
      "MSc in Strength and Conditioning, developing advanced expertise in athletic development and performance optimisation.",
    icon: BookOpen,
  },
  {
    year: "Career",
    title: "Premier League Academy",
    description:
      "Multiple years working at the highest level of academy football, coaching players from U9 through to U21 age groups.",
    icon: Trophy,
  },
  {
    year: "Present",
    title: "Matt Driver Performance",
    description:
      "Bringing elite-level training methods to youth athletes across all levels, making professional-quality coaching accessible to everyone.",
    icon: Target,
  },
];

const credentials = [
  "BSc Sport and Exercise Science - Loughborough University",
  "MSc Strength and Conditioning - St Mary's University",
  "UKSCA Accredited Strength and Conditioning Coach",
  "FA Level 2 Football Coaching Qualification",
  "First Aid and Safeguarding Certified",
];

const stats = [
  { value: "100+", label: "Athletes Trained", icon: Users },
  { value: "U9-U21", label: "Age Groups Coached", icon: Target },
  { value: "5+", label: "Years Experience", icon: Briefcase },
  { value: "2", label: "University Degrees", icon: Award },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        imageSrc="/images/matt-trophy.jpeg"
        subtitle="About Matt Driver"
        title="Passionate About Developing Young Athletes"
        description="With years of experience at the highest level of academy football and world-class education, I'm dedicated to helping every athlete reach their full potential."
        primaryCta={{ text: "Get In Touch", href: "/contact" }}
        showStats={false}
      />

      {/* Introduction Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/matt-graduation.jpeg"
                  alt="Matt Driver - Graduation from Loughborough University"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-primary text-white rounded-2xl shadow-xl p-8">
                <div className="flex items-center gap-4">
                  <GraduationCap className="w-10 h-10" />
                  <div>
                    <div className="font-bold text-lg">Elite Education</div>
                    <div className="text-base text-white/80">BSc + MSc Qualified</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-block px-5 py-2 rounded-full text-sm font-semibold mb-6 bg-primary/10 text-primary tracking-wide">
                My Story
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-[1.15]">
                Built on <span className="gradient-text">Education & Experience</span>
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed">
                I have multiple years of experience working at the highest level
                of academy football, coaching hundreds of players ranging from U9
                to U21. My journey in sports science began at Loughborough
                University, one of the UK&apos;s most prestigious sports institutions.
              </p>
              <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                I furthered my expertise with a Master&apos;s degree from St Mary&apos;s
                University, Twickenham, specialising in Strength and Conditioning.
                This combination of elite education and hands-on Premier League
                academy experience has shaped my evidence-based approach to
                athletic development.
              </p>
              <div className="space-y-4">
                {credentials.slice(0, 3).map((credential, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{credential}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 text-center shadow-sm"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <stat.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-base text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionHeader
            label="My Journey"
            title="Education & Experience"
            description="A path built on world-class education and elite-level practical experience."
          />

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-10 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block" />

            <div className="space-y-10 lg:space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative flex gap-8 md:gap-10"
                >
                  <div className="relative z-10 w-20 h-20 bg-primary rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <item.icon className="w-9 h-9 text-white" />
                  </div>
                  <div className="flex-1 bg-gray-50 rounded-2xl p-8">
                    <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
                      {item.year}
                    </span>
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/matt-stadium.jpeg"
            alt="Stadium background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-5 py-2 rounded-full text-sm font-semibold mb-6 bg-white/10 text-white tracking-wide">
                My Philosophy
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 leading-[1.15]">
                Every Athlete Deserves{" "}
                <span className="text-secondary">Elite Training</span>
              </h2>
              <p className="text-lg lg:text-xl text-white/80 mb-8 leading-relaxed">
                I believe that every young athlete, regardless of their current
                level, deserves access to the same quality of training that
                professional athletes receive. My mission is to bridge that gap.
              </p>
              <p className="text-white/70 text-lg mb-10 leading-relaxed">
                Through evidence-based methods, personalised attention, and a
                genuine passion for youth development, I create an environment
                where athletes can thrive both physically and mentally.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-primary font-semibold rounded-xl hover:bg-gray-100 transition-colors group"
              >
                Explore Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative aspect-square rounded-3xl overflow-hidden"
            >
              <Image
                src="/images/matt-stadium.jpeg"
                alt="Matt at Stamford Bridge"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionHeader
            label="Qualifications"
            title="Professional Credentials"
            description="Fully qualified and accredited to deliver the highest standard of athletic development."
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-3xl p-8 lg:p-10"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              {credentials.map((credential, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-white rounded-xl p-6"
                >
                  <Award className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-lg">{credential}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Start Your Journey?"
        description="Let's work together to unlock your athletic potential and take your game to the next level."
        primaryCta={{ text: "Book Free Consultation", href: "/contact" }}
        secondaryCta={{ text: "View Services", href: "/services" }}
      />
    </>
  );
}

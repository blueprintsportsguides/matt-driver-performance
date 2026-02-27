"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Instagram,
  Linkedin,
  Twitter,
  CheckCircle2,
} from "lucide-react";
import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";

const contactMethods = [
  {
    icon: Phone,
    title: "Phone",
    description: "Give me a call for a free consultation",
    value: "07938 244 735",
    href: "tel:07938244735",
    action: "Call Now",
  },
  {
    icon: Mail,
    title: "Email",
    description: "Drop me an email anytime",
    value: "matthewdriver1759@gmail.com",
    href: "mailto:matthewdriver1759@gmail.com",
    action: "Send Email",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Message me on WhatsApp",
    value: "07938 244 735",
    href: "https://wa.me/447938244735",
    action: "Open WhatsApp",
  },
];

const services = [
  { name: "Initial Consultation", price: "FREE" },
  { name: "Performance Profiling", price: "£60/session" },
  { name: "1-1 Training", price: "£50/session" },
  { name: "Small Group Training", price: "£30/person" },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        imageSrc="/images/matt-stadium.jpeg"
        subtitle="Get In Touch"
        title="Let's Start Your Journey"
        description="Ready to take your athletic performance to the next level? Get in touch today for a free, no-obligation consultation."
        showStats={false}
      />

      {/* Contact Methods */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionHeader
            label="Contact"
            title="How to Reach Me"
            description="Choose your preferred method of contact. I aim to respond to all enquiries within 24 hours."
          />

          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  method.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-gray-50 rounded-2xl p-8 lg:p-10 hover:bg-primary transition-all duration-300 card-hover text-center"
              >
                <div className="w-20 h-20 bg-primary/10 group-hover:bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-8 transition-colors">
                  <method.icon className="w-10 h-10 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 group-hover:text-white mb-3 transition-colors">
                  {method.title}
                </h3>
                <p className="text-gray-600 group-hover:text-white/80 mb-5 text-lg transition-colors">
                  {method.description}
                </p>
                <p className="font-semibold text-primary group-hover:text-white text-lg mb-6 transition-colors">
                  {method.value}
                </p>
                <span className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 group-hover:bg-white/20 text-primary group-hover:text-white rounded-full font-semibold text-base transition-colors">
                  {method.action}
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Quick Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-10">
                Quick Information
              </h2>

              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">Location</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      Based in London, United Kingdom. Sessions available at
                      various locations including professional training facilities
                      and local pitches.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">
                      Availability
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      Flexible scheduling to work around school, training, and
                      match commitments. Weekday and weekend sessions available.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-8">
                  <h3 className="font-semibold text-gray-900 text-xl mb-6">
                    Services & Pricing
                  </h3>
                  <div className="space-y-4">
                    {services.map((service, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
                      >
                        <span className="text-gray-600 text-lg">{service.name}</span>
                        <span className="font-semibold text-primary text-lg">
                          {service.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* What to Expect */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-10">
                What to Expect
              </h2>

              <div className="bg-white rounded-2xl p-8 lg:p-10 mb-8">
                <h3 className="font-semibold text-gray-900 text-xl mb-8">
                  Your Free Consultation
                </h3>
                <div className="space-y-5">
                  {[
                    "A friendly, no-pressure phone call",
                    "Discussion of your goals and current level",
                    "Overview of how we can help",
                    "Personalised recommendations",
                    "Answers to any questions you have",
                    "No commitment required",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                      <span className="text-gray-600 text-lg">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-primary rounded-2xl p-8 lg:p-10 text-white">
                <h3 className="font-semibold text-xl mb-4">Connect on Social Media</h3>
                <p className="text-white/80 text-lg mb-8">
                  Follow for training tips, insights, and updates.
                </p>
                <div className="flex gap-5">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center hover:bg-white/30 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-7 h-7" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center hover:bg-white/30 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-7 h-7" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center hover:bg-white/30 transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-7 h-7" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="relative h-[500px] md:h-[600px]">
        <Image
          src="/images/training-facility.jpeg"
          alt="Training facility"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-10 md:p-20 text-white">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Train Like a Professional
            </h2>
            <p className="text-white/80 text-lg lg:text-xl leading-relaxed">
              Access the same training methods and facilities used by elite
              academy athletes. Your journey to peak performance starts here.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

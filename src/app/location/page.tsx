"use client";

import { motion } from "framer-motion";
import { MapPin, CheckCircle2, Clock } from "lucide-react";
import Hero from "@/components/Hero";
import Link from "next/link";

const locations = [
  {
    name: "Advance Guildford",
    status: "Main",
    description: "Primary training base. Full facilities for profiling and sessions.",
    address: "Guildford, Surrey",
    available: true,
  },
  {
    name: "Windsor",
    status: "Pending",
    description: "Coming soon.",
    address: "Windsor area",
    available: false,
  },
  {
    name: "South East London",
    status: "Pending",
    description: "Coming soon.",
    address: "South East London",
    available: false,
  },
];

export default function LocationPage() {
  return (
    <>
      <Hero
        imageSrc="/images/training-facility.jpeg"
        subtitle="Where we train"
        title="Locations"
        description="Elite strength and conditioning for young athletes. Main base at Advance Guildford."
        primaryCta={{ text: "Book a session", href: "/contact" }}
        showStats={false}
      />

      <section className="section-padding bg-surface">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="space-y-6">
            {locations.map((loc, index) => (
              <motion.div
                key={loc.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`rounded-2xl p-8 border ${
                  loc.available
                    ? "bg-card-bg border-primary/30"
                    : "bg-card-bg/50 border-card-border opacity-80"
                }`}
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                        loc.available ? "bg-primary/20" : "bg-muted/20"
                      }`}
                    >
                      <MapPin
                        className={`w-6 h-6 ${
                          loc.available ? "text-primary" : "text-muted"
                        }`}
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h2 className="text-xl font-bold text-foreground">
                          {loc.name}
                        </h2>
                        <span
                          className={`text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                            loc.available
                              ? "bg-primary/20 text-primary"
                              : "bg-muted/20 text-muted"
                          }`}
                        >
                          {loc.status}
                        </span>
                      </div>
                      <p className="text-muted mt-1">{loc.address}</p>
                      <p className="text-foreground/80 mt-2 text-sm">
                        {loc.description}
                      </p>
                    </div>
                  </div>
                  {loc.available && (
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white font-medium rounded-xl hover:bg-primary-dark transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      Book here
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-10 text-muted text-sm flex items-center gap-2"
          >
            <Clock className="w-4 h-4" />
            Sessions at Advance Guildford by arrangement. Get in touch to
            confirm availability.
          </motion.p>
        </div>
      </section>
    </>
  );
}

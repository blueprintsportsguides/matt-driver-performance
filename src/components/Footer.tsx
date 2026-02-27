import Link from "next/link";
import { Zap, Mail, Phone, MapPin, Instagram, Linkedin, Twitter } from "lucide-react";

const footerLinks = {
  navigation: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
  ],
  services: [
    { href: "/services#profiling", label: "Performance Profiling" },
    { href: "/services#one-to-one", label: "1-1 Training" },
    { href: "/services#group", label: "Small Group Training" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Main Footer */}
        <div className="py-20 lg:py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-8">
              <div className="p-2.5 bg-primary rounded-xl">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight">Matt Driver</span>
                <span className="text-xs font-medium uppercase tracking-wider text-secondary">
                  Performance
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-base leading-relaxed mb-8">
              Elite-level strength and conditioning for youth athletes. Helping the next generation reach their full potential.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-xl hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-xl hover:bg-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-xl hover:bg-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-lg mb-8">Navigation</h3>
            <ul className="space-y-4">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-base"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-8">Services</h3>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-base"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-8">Get In Touch</h3>
            <ul className="space-y-5">
              <li>
                <a
                  href="mailto:matthewdriver1759@gmail.com"
                  className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-base">matthewdriver1759@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:07938244735"
                  className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-base">07938 244 735</span>
                </a>
              </li>
              <li className="flex items-center gap-4 text-gray-400">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-base">London, United Kingdom</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-gray-500 text-base">
            © {new Date().getFullYear()} Matt Driver Performance. All rights reserved.
          </p>
          <div className="flex gap-8 text-base">
            <Link href="/privacy" className="text-gray-500 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

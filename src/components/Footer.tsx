import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import Logo from "@/components/Logo";

const footerLinks = {
  navigation: [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/location", label: "Location" },
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
            <div className="mb-8">
              <Logo scrolled={false} />
            </div>
            <p className="text-muted text-base leading-relaxed mb-8">
              Elite strength and conditioning for young athletes. Advance Guildford &mdash; Windsor and South East London coming soon.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-lg mb-8">Navigation</h3>
            <ul className="space-y-4">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted hover:text-white transition-colors text-base"
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
                    className="text-muted hover:text-white transition-colors text-base"
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
                  className="flex items-center gap-4 text-muted hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-base">matthewdriver1759@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:07938244735"
                  className="flex items-center gap-4 text-muted hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-base">07938 244 735</span>
                </a>
              </li>
              <li className="flex items-center gap-4 text-muted">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-base">Advance Guildford (main)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-card-border text-center">
          <p className="text-muted text-base">
            © {new Date().getFullYear()} Matt Driver Performance. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

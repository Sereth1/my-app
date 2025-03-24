import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="relative pt-24 pb-12 bg-navy-950">
      {/* Background Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-navy-950 to-transparent"></div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 mb-12">
          <div>
            <a href="#" className="flex items-center gap-2 mb-6">
              <span className="text-2xl font-bold text-white">
                AI<span className="text-aqua-500">Agents</span>
              </span>
            </a>

            <p className="text-white/70 mb-6">
              Revolutionize your business operations with intelligent AI
              chat-bot agents powered by n8n. Drive efficiency, reduce costs,
              and enhance customer experiences.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-aqua-500" />
                <a
                  href="mailto:contact@aiagents.com"
                  className="text-white/70 hover:text-aqua-500 transition-colors"
                >
                  contact@aiagents.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-aqua-500" />
                <a
                  href="tel:+15555555555"
                  className="text-white/70 hover:text-aqua-500 transition-colors"
                >
                  +1 (555) 555-5555
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-aqua-500" />
                <span className="text-white/70">
                  123 Innovation Drive, Tech City
                </span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "Benefits", "Stats", "Case Studies", "Features"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${
                        item === "Home"
                          ? ""
                          : item.toLowerCase().replace(" ", "-")
                      }`}
                      className="text-white/70 hover:text-aqua-500 transition-colors animated-underline"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="lg:pl-8">
            <h4 className="text-xl font-semibold mb-6">
              Subscribe to Our Newsletter
            </h4>
            <p className="text-white/70 mb-4">
              Stay updated with the latest trends in AI business automation.
            </p>

            <form className="space-y-4">
              <div>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-aqua-500/50"
                  required
                />
              </div>

              <button type="submit" className="w-full btn-primary">
                Subscribe
              </button>
            </form>

            <p className="text-white/50 text-sm mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>

        <div className="pt-8 mt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} AI Agents. All rights reserved.
          </p>

          <div className="flex space-x-6">
            <a
              href="#"
              className="text-white/50 hover:text-aqua-500 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-white/50 hover:text-aqua-500 transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-white/50 hover:text-aqua-500 transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

"use client";

import { Linkedin, Mail, MapPin } from "lucide-react";
import dasensLogo from "@/app/assets/dasensai_logo.jpeg";
import inventGenieLogo from "@/app/assets/inventgenie_logo.png";
import smartSREDLogo from "@/app/assets/smartsred_logo.png";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const links = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Ventures", id: "ventures" },
    { label: "Services", id: "services" },
    { label: "Contact", id: "contact" },
  ];

  const ventures = [
    { name: "InventGenie", logo: inventGenieLogo, url: "https://www.inventgenie.com/" },
    { name: "SmartSRED", logo: smartSREDLogo, url: "https://www.smartsred.ca/" },
  ];

  return (
    <footer className="bg-gradient-to-b from-white via-white to-mint text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-mint rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-mint rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Logo and Brand */}
          <div className="space-y-4">
            <button
              onClick={() => scrollToSection("hero")}
              className="flex items-center hover:opacity-90 transition-opacity group"
            >
              <img 
                src={dasensLogo.src} 
                alt="Dasens - AI Powered Innovation Assistant" 
                className="h-16 w-auto"
              />
            </button>
            <p className="text-foreground/70 text-sm leading-relaxed font-medium">
              Empowering Innovation. Engineering the Future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-foreground/70 hover:text-mint-selected transition-colors text-sm font-medium hover:translate-x-1 transform duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-mint/40 group-hover:bg-mint transition-colors"></span>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Ventures */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">Our Ventures</h3>
            <ul className="space-y-4">
              {ventures.map((venture, index) => (
                <li key={index}>
                  <a
                    href={venture.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-start hover:opacity-80 transition-opacity"
                  >
                    <img 
                      src={venture.logo.src} 
                      alt={`${venture.name} logo`}
                      className={venture.name === "InventGenie" ? "h-9 w-auto" : "h-8 w-auto"}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* LinkedIn */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">Connect</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/in/simonpark007/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-mint/20 hover:bg-mint/30 flex items-center justify-center transition-all hover:scale-110 shrink-0"
                  aria-label="Founder LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-mint-selected" />
                </a>
                <span className="text-foreground/70 text-sm font-medium">Founder</span>
              </li>
              <li className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/company/dasens-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-mint/20 hover:bg-mint/30 flex items-center justify-center transition-all hover:scale-110 shrink-0"
                  aria-label="Dasens AI LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-mint-selected" />
                </a>
                <span className="text-foreground/70 text-sm font-medium">Dasens AI</span>
              </li>
              <li className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/company/inventgenie/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-mint/20 hover:bg-mint/30 flex items-center justify-center transition-all hover:scale-110 shrink-0"
                  aria-label="InventGenie LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-mint-selected" />
                </a>
                <span className="text-foreground/70 text-sm font-medium">InventGenie</span>
              </li>
              <li className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/company/smartsred/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-mint/20 hover:bg-mint/30 flex items-center justify-center transition-all hover:scale-110 shrink-0"
                  aria-label="SmartSRED LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-mint-selected" />
                </a>
                <span className="text-foreground/70 text-sm font-medium">SmartSRED</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-mint-selected/60 mt-0.5 shrink-0" />
                <div>
                  <p className="text-foreground/70 text-sm font-medium">Calgary, Alberta</p>
                  <p className="text-foreground/50 text-xs">Canada (Global Operations)</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-mint-selected/60 shrink-0" />
                <a
                  href="mailto:info@inventgenie.com"
                  className="text-foreground/70 hover:text-mint-selected text-sm font-medium transition-colors"
                >
                  info@inventgenie.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-mint/20 pt-8">
          <p className="text-foreground/50 text-sm text-center">
            © 2025 Dasens Inc. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

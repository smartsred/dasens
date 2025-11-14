"use client";

import { Button } from "@/app/components/ui/button";
import { MapPin, Mail, Linkedin } from "lucide-react";

const ContactUs = () => {

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
            Let's Build the Future Together
          </h2>
          <p className="text-lg text-foreground/90 max-w-3xl mx-auto leading-relaxed font-medium">
            Whether you're a startup, research organization, or enterprise, Dasens
            partners with you to turn bold ideas into real-world impact.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white/20 backdrop-blur-sm p-6 rounded-lg border border-mint/20">
              <h3 className="font-heading text-xl font-bold text-card-foreground mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-mint mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Headquarters</p>
                    <p className="text-muted-foreground text-sm">Calgary, Alberta, Canada</p>
                    <p className="text-muted-foreground text-sm">(Global Operations)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-mint mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <a
                      href="mailto:info@inventgenie.com"
                      className="text-mint hover:underline text-sm"
                    >
                      info@inventgenie.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Linkedin className="w-5 h-5 text-mint mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Connect</p>
                    <a
                      href="https://www.linkedin.com/in/simonpark007/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-mint hover:underline text-sm"
                    >
                      Simon Park - LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/20 backdrop-blur-sm p-6 rounded-lg border border-mint/20">
              <h3 className="font-heading text-xl font-bold text-card-foreground mb-4">
                Our Ventures
              </h3>
              <div className="space-y-2">
                <p className="text-muted-foreground text-sm">
                  <span className="font-semibold text-mint">InventGenie</span> - AI-powered
                  innovation management
                </p>
                <p className="text-muted-foreground text-sm">
                  <span className="font-semibold text-mint">SmartsRED</span> - Smart renewable
                  energy devices
                </p>
              </div>
            </div>
          </div>

          {/* Contact Message */}
          <div className="bg-white/20 backdrop-blur-sm p-8 rounded-lg border border-mint/20">
            <h3 className="font-heading text-xl font-bold text-card-foreground mb-4">
              Get in Touch
            </h3>
            <p className="text-foreground/90 text-base leading-relaxed mb-6">
              Send us an email to connect. We'd love to hear from you and discuss how we can help bring your ideas to life.
            </p>
            <a href="mailto:info@inventgenie.com">
              <Button variant="default" size="lg" className="w-full group">
                Send Email
                <Mail className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

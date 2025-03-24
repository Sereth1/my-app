import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, CheckCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-primary text-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white text-sm font-medium mb-6">
              <Bot size={16} />
              <span>Ready to Transform Your Business?</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              Start Your AI Journey Today
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Join the thousands of businesses already benefiting from our AI
              chatbot solutions. Get started with a free 14-day trial.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-5">
              <div className="flex gap-3">
                <CheckCircle className="h-6 w-6 text-white flex-shrink-0" />
                <div>
                  <p className="font-medium">No credit card required</p>
                  <p className="text-white/70">
                    Start your free trial without any payment information
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="h-6 w-6 text-white flex-shrink-0" />
                <div>
                  <p className="font-medium">Full-featured experience</p>
                  <p className="text-white/70">
                    Access all features during your trial period
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="h-6 w-6 text-white flex-shrink-0" />
                <div>
                  <p className="font-medium">Dedicated support</p>
                  <p className="text-white/70">
                    Our team will help you every step of the way
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="h-6 w-6 text-white flex-shrink-0" />
                <div>
                  <p className="font-medium">Easy integration</p>
                  <p className="text-white/70">
                    Seamless implementation with your existing systems
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-xl font-medium mb-4">
                Start your free trial
              </h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
                <input
                  type="email"
                  placeholder="Work Email"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
                <Button
                  size="lg"
                  className="w-full bg-white text-primary hover:bg-white/90 group"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <p className="text-xs text-center text-white/70">
                  By signing up, you agree to our Terms and Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

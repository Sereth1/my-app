import React, { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = heroRef.current?.querySelectorAll(".reveal");
    revealElements?.forEach((el) => observer.observe(el));

    return () => {
      revealElements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-24 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-navy-900 via-navy-900 to-navy-950"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,rgba(100,255,218,0.15),transparent_65%)]"></div>
        <div className="absolute top-40 left-1/4 w-64 h-64 rounded-full bg-accent/20 blur-[100px]"></div>
        <div className="absolute bottom-40 right-1/4 w-72 h-72 rounded-full bg-aqua-500/10 blur-[120px]"></div>
      </div>

      <div className="container-custom relative z-10 pt-10 md:pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 text-center lg:text-left">
            <div className="space-y-6">
              <div className="reveal delay-1">
                <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-aqua-500/10 text-aqua-500 mb-4">
                  AI-Powered Business Transformation
                </span>
              </div>

              <h1 className="heading-xl reveal delay-2">
                Revolutionize Your{" "}
                <span className="text-gradient">Business</span> with AI Chat-Bot
                Agents
              </h1>

              <p className="body-lg text-white/70 max-w-2xl mx-auto lg:mx-0 reveal delay-3">
                Enhance operational efficiency, reduce costs, and deliver
                exceptional customer experiences with intelligent automation
                powered by n8n.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8 reveal delay-4">
                <a href="#benefits" className="btn-primary">
                  Explore Benefits
                </a>
                <a href="#case-studies" className="btn-outline">
                  View Case Studies
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 reveal delay-3">
            <div className="relative w-full h-full flex items-center justify-center">
              {/* 3D Visual Element */}
              <div className="relative w-80 h-80 md:w-[400px] md:h-[400px]">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/20 to-aqua-500/20 animate-pulse-slow"></div>
                <div className="absolute inset-4 rounded-full bg-navy-900/80 backdrop-blur-sm border border-white/10 flex items-center justify-center overflow-hidden glass">
                  {/* AI Animation */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-40 h-40 rounded-full bg-accent/5 animate-float flex items-center justify-center">
                        <div className="w-24 h-24 rounded-full bg-aqua-500/10 animate-pulse-slow flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-aqua-500/20"></div>
                        </div>
                      </div>
                    </div>

                    {/* Data Flow Animation */}
                    <div className="absolute inset-0">
                      {Array.from({ length: 6 }).map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-1 h-16 bg-gradient-to-b from-aqua-500/0 via-aqua-500/30 to-aqua-500/0"
                          style={{
                            left: `${10 + i * 16}%`,
                            top: `${20 + (i % 3) * 15}%`,
                            animationDelay: `${i * 0.5}s`,
                            animation: "flowDown 2s infinite",
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2 animate-bounce">
          <span className="text-white/50 text-sm">Scroll Down</span>
          <ArrowDown className="h-4 w-4 text-aqua-500" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

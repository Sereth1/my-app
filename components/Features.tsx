import React, { useEffect, useRef } from "react";
import {
  MessageCircle,
  Settings,
  Zap,
  BarChart,
  Bot,
  Shield,
} from "lucide-react";

const featureGroups = [
  {
    title: "Intelligent Customer Engagement",
    description:
      "Our AI chat-bot agents deliver exceptional customer experiences across all touchpoints.",
    features: [
      {
        icon: MessageCircle,
        title: "Natural Conversations",
        description:
          "Advanced natural language processing enables human-like interactions that customers appreciate.",
      },
      {
        icon: Bot,
        title: "Personalized Responses",
        description:
          "AI agents learn from previous interactions to provide tailored solutions to individual customer needs.",
      },
      {
        icon: Zap,
        title: "Instant Availability",
        description:
          "Provide immediate assistance to customers at any time, eliminating wait times entirely.",
      },
    ],
  },
  {
    title: "Operational Excellence",
    description:
      "Streamline internal processes and empower your team with AI-driven workflow automation.",
    features: [
      {
        icon: Settings,
        title: "Seamless Integration",
        description:
          "Our n8n-powered AI agents integrate with your existing systems and software stack.",
      },
      {
        icon: BarChart,
        title: "Data-Driven Insights",
        description:
          "Gather valuable customer interaction data to inform business decisions and product improvements.",
      },
      {
        icon: Shield,
        title: "Secure Operations",
        description:
          "Enterprise-grade security ensures your customer data remains protected at all times.",
      },
    ],
  },
];

const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);

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

    const revealElements = featuresRef.current?.querySelectorAll(".reveal");
    revealElements?.forEach((el) => observer.observe(el));

    return () => {
      revealElements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section
      id="features"
      ref={featuresRef}
      className="py-24 relative overflow-hidden bg-navy-950"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(100,255,218,0.03),transparent_70%)] opacity-70"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-aqua-500/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-aqua-500/20 to-transparent"></div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="reveal">
            <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-aqua-500/10 text-aqua-500 mb-4">
              Powerful Capabilities
            </span>
          </div>

          <h2 className="heading-lg reveal delay-1">
            Advanced Features that Drive{" "}
            <span className="text-gradient">Business Growth</span>
          </h2>

          <p className="body-md text-white/70 mt-6 reveal delay-2">
            Our AI chat-bot agents combine cutting-edge technology with
            practical business applications to deliver measurable results.
          </p>
        </div>

        <div className="space-y-24">
          {featureGroups.map((group, groupIndex) => (
            <div
              key={groupIndex}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
            >
              <div
                className="lg:col-span-4 reveal"
                style={{ transitionDelay: `${0.2}s` }}
              >
                <h3 className="heading-md mb-4">{group.title}</h3>
                <p className="text-white/70">{group.description}</p>
              </div>

              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                {group.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="reveal p-6 rounded-xl glass border border-white/5 hover:border-aqua-500/20 transition-all duration-300 group"
                    style={{ transitionDelay: `${0.3 + featureIndex * 0.1}s` }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-aqua-500/10 flex items-center justify-center mb-5 group-hover:bg-aqua-500/20 transition-colors duration-300">
                      <feature.icon className="h-6 w-6 text-aqua-500" />
                    </div>

                    <h4 className="text-xl font-semibold mb-3 group-hover:text-aqua-500 transition-colors duration-300">
                      {feature.title}
                    </h4>

                    <p className="text-white/70 text-sm">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center reveal delay-4">
          <div className="inline-block glass border border-white/10 rounded-xl p-8 max-w-3xl">
            <h3 className="heading-md mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-white/70 mb-6">
              Start implementing AI chat-bot agents in your business operations
              today and experience the immediate impact on efficiency and
              customer satisfaction.
            </p>
            <a href="#contact" className="btn-primary">
              Get Started Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

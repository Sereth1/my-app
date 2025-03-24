import React, { useEffect, useRef, useState } from "react";

const caseStudies = [
  {
    company: "Global E-commerce Platform",
    title: "Reduced Support Costs by 60%",
    description:
      "By implementing AI chat-bot agents to handle routine customer inquiries, this e-commerce giant reduced their customer service overhead while improving response times from hours to seconds.",
    metrics: [
      { label: "Cost Reduction", value: "60%" },
      { label: "Response Time", value: "<5 seconds" },
      { label: "Customer Satisfaction", value: "94%" },
    ],
    bgColor: "bg-gradient-to-br from-blue-500/10 to-violet-500/10",
  },
  {
    company: "Healthcare Provider Network",
    title: "24/7 Patient Support System",
    description:
      "This healthcare network implemented AI agents to provide round-the-clock appointment scheduling, medication reminders, and basic medical information, freeing up medical staff for critical care tasks.",
    metrics: [
      { label: "Staff Time Saved", value: "45 hrs/week" },
      { label: "Appointment No-shows", value: "-35%" },
      { label: "Patient Satisfaction", value: "91%" },
    ],
    bgColor: "bg-gradient-to-br from-green-500/10 to-emerald-500/10",
  },
  {
    company: "Financial Services Firm",
    title: "Streamlined Customer Onboarding",
    description:
      "By automating their customer onboarding process with AI agents, this financial institution reduced application processing time from 2 days to just 20 minutes, dramatically improving conversion rates.",
    metrics: [
      { label: "Processing Time", value: "-96%" },
      { label: "Conversion Rate", value: "+38%" },
      { label: "Human Error", value: "Eliminated" },
    ],
    bgColor: "bg-gradient-to-br from-amber-500/10 to-orange-500/10",
  },
];

const CaseStudies = () => {
  const caseStudiesRef = useRef<HTMLDivElement>(null);
  const [activeCase, setActiveCase] = useState(0);

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

    const revealElements = caseStudiesRef.current?.querySelectorAll(".reveal");
    revealElements?.forEach((el) => observer.observe(el));

    return () => {
      revealElements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Auto-rotate case studies
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCase((prev) => (prev + 1) % caseStudies.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="case-studies"
      ref={caseStudiesRef}
      className="py-24 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-3/4 h-full bg-gradient-radial from-accent/5 via-transparent to-transparent opacity-50"></div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="reveal">
            <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-aqua-500/10 text-aqua-500 mb-4">
              Success Stories
            </span>
          </div>

          <h2 className="heading-lg reveal delay-1">
            Real Companies, <span className="text-gradient">Real Results</span>
          </h2>

          <p className="body-md text-white/70 mt-6 reveal delay-2">
            Discover how businesses across various industries have transformed
            their operations with AI chat-bot agent implementation.
          </p>
        </div>

        <div className="relative mt-12 overflow-hidden">
          <div className="flex flex-wrap items-center justify-center mb-6 reveal delay-2">
            {caseStudies.map((study, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 mx-2 mb-2 ${
                  activeCase === index
                    ? "bg-aqua-500 text-navy-900"
                    : "bg-white/5 text-white/70 hover:bg-white/10"
                }`}
                onClick={() => setActiveCase(index)}
              >
                {study.company}
              </button>
            ))}
          </div>

          <div className="relative h-[480px] reveal delay-3">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className={`absolute inset-0 p-8 md:p-12 rounded-2xl glass border border-white/10 transition-all duration-500 ${
                  index === activeCase
                    ? "opacity-100 transform translate-x-0"
                    : "opacity-0 transform translate-x-full"
                } ${study.bgColor}`}
              >
                <div className="h-full flex flex-col">
                  <div className="mb-6">
                    <span className="text-sm font-medium text-white/60">
                      {study.company}
                    </span>
                    <h3 className="heading-md mt-2">{study.title}</h3>
                  </div>

                  <p className="text-white/80 body-md mb-8">
                    {study.description}
                  </p>

                  <div className="mt-auto grid grid-cols-1 md:grid-cols-3 gap-4">
                    {study.metrics.map((metric, mIndex) => (
                      <div
                        key={mIndex}
                        className="bg-white/5 p-4 rounded-lg text-center"
                      >
                        <p className="text-2xl font-bold text-aqua-500">
                          {metric.value}
                        </p>
                        <p className="text-sm text-white/70">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2 reveal delay-3">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeCase === index ? "bg-aqua-500 scale-125" : "bg-white/20"
                }`}
                onClick={() => setActiveCase(index)}
                aria-label={`View case study ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;

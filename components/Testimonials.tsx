import React from "react";
import { Star } from "lucide-react";

interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
  company: string;
  rating: number;
}

const TestimonialCard = ({
  quote,
  author,
  position,
  company,
  rating,
}: TestimonialProps) => {
  return (
    <div className="feature-card">
      <div className="flex space-x-1 mb-4">
        {Array(rating)
          .fill(0)
          .map((_, index) => (
            <Star key={index} className="h-5 w-5 fill-primary text-primary" />
          ))}
      </div>
      <blockquote className="text-lg mb-6">{quote}</blockquote>
      <div>
        <p className="font-semibold">{author}</p>
        <p className="text-sm text-muted-foreground">
          {position}, {company}
        </p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="section-heading mb-6">Customer Feedback</span>
          <h2 className="text-3xl md:text-4xl font-medium mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover how our AI chatbot solutions have transformed businesses
            across industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard
            quote="The AI chatbot has transformed our customer service operation. We've reduced response times by 85% while increasing customer satisfaction scores."
            author="Sarah Johnson"
            position="Customer Success Director"
            company="GlobalTech"
            rating={5}
          />

          <TestimonialCard
            quote="Implementing this AI solution was seamless. The ROI was immediately apparent - our support staff now handles 3x more strategic issues."
            author="Michael Chen"
            position="CTO"
            company="Innovex Solutions"
            rating={5}
          />

          <TestimonialCard
            quote="Our conversion rates increased by 42% after deploying the AI chatbot on our e-commerce site. The 24/7 availability made a huge difference."
            author="Jessica Rodriguez"
            position="Digital Marketing Head"
            company="StyleMart"
            rating={5}
          />

          <TestimonialCard
            quote="The ability to automate workflows with n8n integration has saved us countless hours and eliminated error-prone manual processes."
            author="David Wilson"
            position="Operations Manager"
            company="Logistic Partners"
            rating={4}
          />

          <TestimonialCard
            quote="Our small team was overwhelmed with support queries. This AI solution has allowed us to scale without additional hiring costs."
            author="Emily Taylor"
            position="Founder & CEO"
            company="GrowFast Startup"
            rating={5}
          />

          <TestimonialCard
            quote="The continuous learning capability means the AI gets better every day. It now handles 92% of all inquiries without human intervention."
            author="Robert Patel"
            position="IT Director"
            company="Financial Services Inc"
            rating={5}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

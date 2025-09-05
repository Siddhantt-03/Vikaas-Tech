import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Users, Brain, Lightbulb, Target } from "lucide-react";

const aboutData = {
  hero: {
    title: "Revolutionizing Career Discovery",
    description:
      "CareerCompass combines cutting-edge AI technology with personalized guidance to help you navigate your professional journey with confidence.",
  },
  challenges: [
    "Millions struggle to identify career paths matching their strengths, interests, and aspirations in today’s fast-changing market.",
    "Traditional career counseling is often generic, outdated, or hard to access—leaving people to navigate critical decisions alone.",
  ],
  solutions: [
    "AI-powered analytics provide hyper-personalized recommendations aligned with your unique profile and future market opportunities.",
    "Guidance is accessible, data-driven, and continuously updated to reflect dynamic industry trends.",
  ],
  steps: [
    {
      stepNumber: 1,
      icon: Users,
      title: "Tell Us About You",
      description:
        "Complete our assessment covering interests, skills, education, and aspirations.",
      details: [
        "Personal interests",
        "Current skills",
        "Educational background",
        "Career goals",
      ],
      extraTitle: "Comprehensive Profiling",
      extraDesc:
        "Adaptive questionnaires dig deeper into what really drives you—not just what you know.",
    },
    {
      stepNumber: 2,
      icon: Brain,
      title: "AI Analysis",
      description:
        "Our engine matches your profile with thousands of career paths, considering demand, growth, and compatibility.",
      details: [
        "Market trend analysis",
        "Skill-career compatibility",
        "Growth potential",
        "Salary evaluation",
      ],
      extraTitle: "AI-Powered Insights",
      extraDesc:
        "Millions of data points analyzed—market trends, salaries, required skills, and career progression.",
    },
    {
      stepNumber: 3,
      icon: Target,
      title: "Get Your Roadmap",
      description:
        "Receive personalized career recommendations with step-by-step guidance and resources.",
      details: [
        "Ranked matches",
        "Skill gap analysis",
        "Learning paths",
        "Industry insights",
      ],
      extraTitle: "Personalized Roadmap",
      extraDesc:
        "Actionable insights with next steps, courses, and a realistic timeline to reach your goals.",
    },
  ],
  team: {
    title: "Built by Team V-KAAST",
    description:
      "A passionate team of engineers, data scientists, and career counselors democratizing guidance through technology.",
    mission: {
      icon: Lightbulb,
      title: "Our Mission",
      subtitle: "Empowering everyone to find their ideal career path",
      details:
        "We believe everyone deserves personalized career guidance—combining AI technology with human expertise to help you thrive.",
    },
  },
  cta: {
    title: "Ready to Discover Your Path?",
    description: "Join thousands who’ve transformed their careers with CareerCompass.",
    button: { label: "Start Your Assessment", link: "/signup" },
  },
};

export default function About() {
  const { hero, challenges, solutions, steps, team, cta } = aboutData;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/20">
      {/* HERO */}
      <section className="pt-20 pb-16 px-4 text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {hero.title}
        </motion.h1>
        <motion.p
          className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {hero.description}
        </motion.p>
      </section>

      {/* PROBLEM + SOLUTION */}
      <section className="py-16 px-4 max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
          {challenges.map((c, i) => (
            <p key={i} className="text-lg text-muted-foreground mb-4">
              {c}
            </p>
          ))}
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6">Our Solution</h2>
          {solutions.map((s, i) => (
            <p key={i} className="text-lg text-muted-foreground mb-4">
              {s}
            </p>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">How CareerCompass Works</h2>
          <p className="text-xl text-muted-foreground text-center mb-16">
            Our AI-powered three-step process
          </p>

          <div className="space-y-20">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const reverse = idx % 2 === 1;

              return (
                <motion.div
                  key={step.stepNumber}
                  className={`grid md:grid-cols-2 gap-12 items-center ${
                    reverse ? "md:flex-row-reverse" : ""
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                >
                  <Card
                    className="bg-gradient-card shadow-elevation border-0"
                    style={{ order: reverse ? 2 : 1 }}
                  >
                    <CardContent className="p-8">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mr-4">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <span className="text-2xl font-bold text-primary">
                          Step {step.stepNumber}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                      <p className="text-muted-foreground mb-6">{step.description}</p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {step.details.map((d, i) => (
                          <li key={i}>• {d}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                  <div className="text-center md:text-left" style={{ order: reverse ? 1 : 2 }}>
                    <h3 className="text-3xl font-bold mb-4">{step.extraTitle}</h3>
                    <p className="text-lg text-muted-foreground">{step.extraDesc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-20 px-4 text-center max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">{team.title}</h2>
        <p className="text-xl text-muted-foreground mb-12">{team.description}</p>
        <Card className="bg-gradient-card shadow-elevation border-0 p-8">
          <CardContent>
            <div className="flex items-center justify-center mb-6">
              <team.mission.icon className="h-12 w-12 text-primary mr-4" />
              <div className="text-left">
                <h3 className="text-2xl font-bold">{team.mission.title}</h3>
                <p className="text-muted-foreground">{team.mission.subtitle}</p>
              </div>
            </div>
            <p className="text-lg text-muted-foreground">{team.mission.details}</p>
          </CardContent>
        </Card>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-hero text-center text-white">
        <h2 className="text-4xl font-bold mb-6">{cta.title}</h2>
        <p className="text-xl mb-8">{cta.description}</p>
        <Link to={cta.button.link}>
          <Button variant="secondary" size="lg" className="text-lg px-8 py-4">
            {cta.button.label} <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </section>
    </div>
  );
}

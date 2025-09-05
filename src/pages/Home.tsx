import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Target, BookOpen, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100">
      {/* Hero Section */}
      <section className="pt-28 pb-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl text-blue-500 font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent leading-tight">
  Guiding Aspirations,<br />Shaping Futures
</h1>
            <p className="text-lg md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover your perfect career path with AI-powered insights,
              personalized recommendations, and expert guidance tailored just for you.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
          >
            <Link to="/signup">
              <Button
                variant="default"
                size="lg"
                className="text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/about">
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-4 rounded-full border-2"
              >
                Learn More
              </Button>
            </Link>
          </motion.div>

          {/* Feature Highlights */}
          <motion.div
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: <Target className="h-8 w-8 text-white" />,
                title: "Personalized Recommendations",
                desc: "AI analyzes your skills, interests, and goals to suggest perfect career matches tailored to your unique profile.",
              },
              {
                icon: <TrendingUp className="h-8 w-8 text-white" />,
                title: "Career Roadmaps",
                desc: "Step-by-step guidance with skills to develop, courses to take, and milestones to achieve your dream career.",
              },
              {
                icon: <BookOpen className="h-8 w-8 text-white" />,
                title: "Learning Resources",
                desc: "Curated courses, certifications, and educational content from top institutions to accelerate your growth.",
              },
            ].map((feature, i) => (
              <motion.div key={i} variants={fadeUp} custom={i + 2}>
                <Card className="bg-white/70 backdrop-blur-md shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-200 rounded-2xl">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-blue-600 text-white relative">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10"></div>
        <div className="max-w-6xl mx-auto px-4 relative">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { stat: "50K+", label: "Users Guided" },
              { stat: "500+", label: "Career Paths" },
              { stat: "95%", label: "Success Rate" },
              { stat: "24/7", label: "AI Support" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
              >
                <div className="text-4xl font-extrabold mb-2">{item.stat}</div>
                <div className="text-indigo-200">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-slate-50 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              How CareerCompass Works
            </h2>
            <p className="text-xl text-gray-600">
              Three simple steps to discover your ideal career path
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                num: "1",
                title: "Tell Us About You",
                desc: "Share your interests, skills, education, and career goals through our comprehensive assessment.",
              },
              {
                num: "2",
                title: "AI Analysis",
                desc: "Our advanced AI algorithms analyze your profile against thousands of career paths and market trends.",
              },
              {
                num: "3",
                title: "Get Your Roadmap",
                desc: "Receive personalized recommendations with actionable steps to achieve your career objectives.",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white shadow-lg">
                  {step.num}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
        <motion.div
          className="max-w-4xl mx-auto text-center px-4 relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">
            Ready to Shape Your Future?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have discovered their perfect career path with CareerCompass.
          </p>
          <Link to="/signup">
            <Button
              variant="secondary"
              size="lg"
              className="text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              Start Your Journey Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;

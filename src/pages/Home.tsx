import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Target, BookOpen, TrendingUp, Users, Award, Globe } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/20">
      {/* Hero Section */}
      <section className="pt-20 pb-32 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent leading-tight">
              Guiding Aspirations,<br />Shaping Futures
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover your perfect career path with AI-powered insights, personalized recommendations, and expert guidance tailored just for you.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link to="/signup">
              <Button variant="default" size="lg" className="text-lg px-8 py-4 shadow-glow hover:shadow-elevation transition-all duration-300 hover:-translate-y-1">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                Learn More
              </Button>
            </Link>
          </div>

          {/* Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-gradient-card shadow-card hover:shadow-elevation transition-all duration-300 hover:-translate-y-2 border-0">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Personalized Recommendations</h3>
                <p className="text-muted-foreground leading-relaxed">
                  AI analyzes your skills, interests, and goals to suggest perfect career matches tailored to your unique profile.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card hover:shadow-elevation transition-all duration-300 hover:-translate-y-2 border-0">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Career Roadmaps</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Step-by-step guidance with skills to develop, courses to take, and milestones to achieve your dream career.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card hover:shadow-elevation transition-all duration-300 hover:-translate-y-2 border-0">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Learning Resources</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Curated courses, certifications, and educational content from top institutions to accelerate your growth.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-primary-glow">Users Guided</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-primary-glow">Career Paths</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-primary-glow">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-primary-glow">AI Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">How CareerCompass Works</h2>
            <p className="text-xl text-muted-foreground">Three simple steps to discover your ideal career path</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">1</div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Tell Us About You</h3>
              <p className="text-muted-foreground">Share your interests, skills, education, and career goals through our comprehensive assessment.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">2</div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">AI Analysis</h3>
              <p className="text-muted-foreground">Our advanced AI algorithms analyze your profile against thousands of career paths and market trends.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">3</div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Get Your Roadmap</h3>
              <p className="text-muted-foreground">Receive personalized recommendations with actionable steps to achieve your career objectives.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6 text-white">Ready to Shape Your Future?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have discovered their perfect career path with CareerCompass.
          </p>
          <Link to="/signup">
            <Button variant="secondary" size="lg" className="text-lg px-8 py-4 shadow-elevation hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
              Start Your Journey Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
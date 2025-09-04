import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Users, Brain, Lightbulb, Target } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/20">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            Revolutionizing Career Discovery
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            CareerCompass combines cutting-edge AI technology with personalized guidance to help you navigate your professional journey with confidence.
          </p>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">The Challenge</h2>
              <div className="space-y-4 text-muted-foreground text-lg">
                <p>
                  In today's rapidly evolving job market, millions of students and professionals struggle to identify career paths that align with their unique strengths, interests, and aspirations.
                </p>
                <p>
                  Traditional career counseling is often generic, outdated, or inaccessible, leaving people to navigate complex career decisions without proper guidance.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Our Solution</h2>
              <div className="space-y-4 text-muted-foreground text-lg">
                <p>
                  CareerCompass leverages AI-powered analytics to provide hyper-personalized career recommendations based on your unique profile, market trends, and future opportunities.
                </p>
                <p>
                  We make career guidance accessible, data-driven, and continuously updated to reflect the dynamic nature of modern industries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Detailed */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">How CareerCompass Works</h2>
            <p className="text-xl text-muted-foreground">Our AI-powered three-step process</p>
          </div>

          <div className="space-y-16">
            {/* Step 1 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <Card className="bg-gradient-card shadow-elevation border-0">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mr-4">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-primary">Step 1</div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Tell Us About You</h3>
                  <p className="text-muted-foreground mb-6">
                    Complete our comprehensive assessment covering your interests, skills, educational background, personality traits, and career aspirations.
                  </p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div>• Personal interests and passions</div>
                    <div>• Current skills and expertise</div>
                    <div>• Educational background</div>
                    <div>• Career goals and preferences</div>
                  </div>
                </CardContent>
              </Card>
              <div className="text-center md:text-left">
                <h3 className="text-3xl font-bold mb-4 text-foreground">Comprehensive Profiling</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our intelligent questionnaire adapts to your responses, diving deeper into areas that matter most for your career journey. We consider not just what you know, but who you are and what drives you.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-center md:text-left md:order-2">
                <h3 className="text-3xl font-bold mb-4 text-foreground">AI-Powered Analysis</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our advanced machine learning algorithms process your profile against millions of data points, including job market trends, salary data, skill requirements, and career progression paths.
                </p>
              </div>
              <Card className="bg-gradient-card shadow-elevation border-0 md:order-1">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mr-4">
                      <Brain className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-primary">Step 2</div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">AI Analysis</h3>
                  <p className="text-muted-foreground mb-6">
                    Our AI engine analyzes your profile against thousands of career paths, considering market demand, growth potential, and compatibility.
                  </p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div>• Market trend analysis</div>
                    <div>• Skill-career compatibility</div>
                    <div>• Growth opportunity assessment</div>
                    <div>• Salary potential evaluation</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Step 3 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <Card className="bg-gradient-card shadow-elevation border-0">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mr-4">
                      <Target className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-primary">Step 3</div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Get Your Roadmap</h3>
                  <p className="text-muted-foreground mb-6">
                    Receive personalized career recommendations with detailed roadmaps, skill development plans, and curated learning resources.
                  </p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div>• Ranked career matches</div>
                    <div>• Skill gap analysis</div>
                    <div>• Learning path recommendations</div>
                    <div>• Industry insights</div>
                  </div>
                </CardContent>
              </Card>
              <div className="text-center md:text-left">
                <h3 className="text-3xl font-bold mb-4 text-foreground">Personalized Roadmap</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Get actionable insights with clear next steps, recommended courses, skill development priorities, and timeline for achieving your career goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-foreground">Built by Team V-KAAST</h2>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            A passionate team of engineers, data scientists, and career counselors dedicated to democratizing career guidance through technology.
          </p>
          
          <Card className="bg-gradient-card shadow-elevation border-0 p-8">
            <CardContent>
              <div className="flex items-center justify-center mb-6">
                <Lightbulb className="h-12 w-12 text-primary mr-4" />
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
                  <p className="text-muted-foreground">Empowering every individual to find their ideal career path</p>
                </div>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe that everyone deserves access to personalized career guidance. By combining AI technology with human expertise, we're making it possible for anyone, anywhere, to discover and pursue their dream career.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6 text-white">Ready to Discover Your Path?</h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands who have transformed their careers with CareerCompass
          </p>
          <Link to="/signup">
            <Button variant="secondary" size="lg" className="text-lg px-8 py-4">
              Start Your Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Search,
  TrendingUp,
  DollarSign,
  Users,
  BookOpen,
  Star,
  Filter,
  ExternalLink,
} from "lucide-react";
import careers from "../data/careers.json";
import courses from "../data/courses.json";

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState(searchTerm);
  const [filterIndustry, setFilterIndustry] = useState("all");

  // debounce searchTerm
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedTerm(searchTerm), 300);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  const filteredCareers = careers.filter((career) => {
    const matchesSearch =
      career.title.toLowerCase().includes(debouncedTerm.toLowerCase()) ||
      career.industry.toLowerCase().includes(debouncedTerm.toLowerCase());
    const matchesFilter =
      filterIndustry === "all" ||
      career.industry.toLowerCase().includes(filterIndustry);
    return matchesSearch && matchesFilter;
  });

  const recommendedSkills = [
    { name: "Python Programming", progress: 75, priority: "High" },
    { name: "Data Analysis", progress: 60, priority: "High" },
    { name: "Machine Learning", progress: 40, priority: "Medium" },
    { name: "SQL", progress: 80, priority: "Medium" },
    { name: "Statistics", progress: 35, priority: "High" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/20">
      {/* Header */}
      <section className="pt-8 pb-6 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-1">
                Your Career Dashboard
              </h1>
              <p className="text-lg text-muted-foreground">
                Personalized recommendations based on your assessment
              </p>
            </div>
            <Link to="/assessment">
              <Button variant="outline">Retake Assessment</Button>
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            {[
              { icon: <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />, value: "95%", label: "Best Career Match" },
              { icon: <Users className="h-8 w-8 text-secondary mx-auto mb-2" />, value: "5", label: "Career Options" },
              { icon: <BookOpen className="h-8 w-8 text-success mx-auto mb-2" />, value: "12", label: "Recommended Courses" },
              { icon: <DollarSign className="h-8 w-8 text-primary mx-auto mb-2" />, value: "$140K", label: "Avg. Salary Potential" },
            ].map((stat, idx) => (
              <Card
                key={idx}
                className="bg-gradient-card shadow-card border-0 transition hover:scale-105"
              >
                <CardContent className="p-6 text-center">
                  {stat.icon}
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 pb-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-8">
            <Card className="bg-gradient-card shadow-card border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="h-5 w-5" />
                  Career Matches
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Search & Filter */}
                <div className="flex gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      aria-label="Search careers"
                      placeholder="Search careers or industries..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Select value={filterIndustry} onValueChange={setFilterIndustry}>
                    <SelectTrigger className="w-48">
                      <Filter className="h-4 w-4 mr-2" />
                      <SelectValue placeholder="Filter" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Industries</SelectItem>
                      <SelectItem value="technology">Technology</SelectItem>
                      <SelectItem value="design">Design</SelectItem>
                      <SelectItem value="business">Business</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Career Cards */}
                {filteredCareers.length === 0 && (
                  <p className="text-sm text-muted-foreground">
                    No careers match your criteria.
                  </p>
                )}
                <div className="space-y-4">
                  {filteredCareers.map((career) => (
                    <Card
                      key={career.id}
                      className="border hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
                    >
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-xl font-semibold text-foreground">
                                {career.title}
                              </h3>
                              <Badge variant="secondary" className="text-sm">
                                {career.match}% match
                              </Badge>
                            </div>
                            <p className="text-muted-foreground mb-3">
                              {career.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-3">
                              <Badge variant="outline">{career.industry}</Badge>
                              <Badge variant="outline">Growth: {career.growthRate}</Badge>
                            </div>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <p className="text-sm font-medium text-muted-foreground">
                              Average Salary
                            </p>
                            <p className="font-semibold text-foreground">
                              {career.averageSalary}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-muted-foreground">
                              Education Required
                            </p>
                            <p className="font-semibold text-foreground">
                              {career.education}
                            </p>
                          </div>
                        </div>

                        <div className="mb-4">
                          <p className="text-sm font-medium text-muted-foreground mb-2">
                            Key Skills Required
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {career.requiredSkills.map((skill: string, index: number) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <Button size="sm" className="flex-1">
                            View Details
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </Button>
                          <Link to="/learning" className="flex-1">
                            <Button size="sm" variant="outline" className="w-full">
                              Find Courses
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6 lg:sticky lg:top-6 h-fit">
            <Card className="bg-gradient-card shadow-card border-0">
              <CardHeader>
                <CardTitle className="text-lg">Recommended Skills</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Focus on these skills to reach your career goals
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                {recommendedSkills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <Badge
                        variant={skill.priority === "High" ? "destructive" : "secondary"}
                        className="text-xs"
                      >
                        {skill.priority}
                      </Badge>
                    </div>
                    <Progress value={skill.progress} className="h-2 rounded-full" />
                    <p className="text-xs text-muted-foreground">
                      {skill.progress}% proficiency
                    </p>
                  </div>
                ))}
                <Link to="/learning">
                  <Button size="sm" className="w-full mt-4">
                    Browse Skill Courses
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card border-0">
              <CardHeader>
                <CardTitle className="text-lg">Quick Picks</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Courses that match your career goals
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                {courses.slice(0, 3).map((course) => (
                  <div
                    key={course.id}
                    className="border-b border-border pb-4 last:border-0"
                  >
                    <h4 className="font-medium text-sm mb-1">{course.title}</h4>
                    <p className="text-xs text-muted-foreground mb-2">
                      {course.provider}
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 text-yellow-500 fill-current" />
                        <span className="text-xs">{course.rating}</span>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {course.difficulty}
                      </Badge>
                    </div>
                  </div>
                ))}
                <Link to="/learning">
                  <Button size="sm" variant="outline" className="w-full">
                    View All Courses
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, Clock, Star, Bookmark, ExternalLink, Users } from "lucide-react";
import courses from "../data/courses.json";

const Learning = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");
  const [filterDifficulty, setFilterDifficulty] = useState("all");
  const [bookmarkedCourses, setBookmarkedCourses] = useState<number[]>([]);

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.provider.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.topics.some(topic => topic.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = filterCategory === "all" || course.category.toLowerCase() === filterCategory;
    const matchesDifficulty = filterDifficulty === "all" || course.difficulty.toLowerCase() === filterDifficulty;
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  const toggleBookmark = (courseId: number) => {
    setBookmarkedCourses(prev =>
      prev.includes(courseId)
        ? prev.filter(id => id !== courseId)
        : [...prev, courseId]
    );
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case "beginner": return "success";
      case "intermediate": return "default";
      case "advanced": return "destructive";
      default: return "secondary";
    }
  };

  const categories = ["Technology", "Design", "Analytics", "Business", "Security"];
  const difficulties = ["Beginner", "Intermediate", "Advanced"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/20">
      {/* Header */}
      <section className="pt-8 pb-6 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">Learning Hub</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover courses and resources to build the skills you need for your dream career
            </p>
          </div>

          {/* Search and Filters */}
          <Card className="bg-gradient-card shadow-card border-0 mb-8">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-4 gap-4">
                <div className="md:col-span-2 relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search courses, topics, or providers..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                
                <Select value={filterCategory} onValueChange={setFilterCategory}>
                  <SelectTrigger>
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {categories.map(category => (
                      <SelectItem key={category} value={category.toLowerCase()}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={filterDifficulty} onValueChange={setFilterDifficulty}>
                  <SelectTrigger>
                    <SelectValue placeholder="Difficulty" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Levels</SelectItem>
                    {difficulties.map(difficulty => (
                      <SelectItem key={difficulty} value={difficulty.toLowerCase()}>
                        {difficulty}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Course Grid */}
      <section className="pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <Card key={course.id} className="bg-gradient-card shadow-card hover:shadow-elevation transition-all duration-200 border-0">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline" className="text-xs">
                      {course.category}
                    </Badge>
                    <button
                      onClick={() => toggleBookmark(course.id)}
                      className={`p-1 rounded transition-colors ${
                        bookmarkedCourses.includes(course.id)
                          ? "text-primary"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <Bookmark className={`h-4 w-4 ${bookmarkedCourses.includes(course.id) ? "fill-current" : ""}`} />
                    </button>
                  </div>
                  
                  <CardTitle className="text-lg leading-tight mb-2">
                    {course.title}
                  </CardTitle>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>{course.provider}</span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {course.description}
                  </p>

                  {/* Course Details */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span>{course.rating}</span>
                    </div>
                  </div>

                  {/* Difficulty and Price */}
                  <div className="flex justify-between items-center">
                    <Badge variant={getDifficultyColor(course.difficulty) as any} className="text-xs">
                      {course.difficulty}
                    </Badge>
                    <span className="font-bold text-primary">{course.price}</span>
                  </div>

                  {/* Topics */}
                  <div>
                    <p className="text-xs font-medium text-muted-foreground mb-2">What you'll learn:</p>
                    <div className="flex flex-wrap gap-1">
                      {course.topics.slice(0, 3).map((topic, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                      {course.topics.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{course.topics.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-2">
                    <Button size="sm" className="flex-1">
                      Enroll Now
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => toggleBookmark(course.id)}
                      className={bookmarkedCourses.includes(course.id) ? "text-primary border-primary" : ""}
                    >
                      {bookmarkedCourses.includes(course.id) ? "Saved" : "Save"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground mb-4">No courses found matching your criteria</p>
              <Button 
                onClick={() => {
                  setSearchTerm("");
                  setFilterCategory("all");
                  setFilterDifficulty("all");
                }}
                variant="outline"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Learning Path CTA */}
      <section className="py-16 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-foreground mb-4">Need a Structured Learning Path?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get a personalized learning roadmap based on your career goals and current skills
          </p>
          <Button size="lg" className="shadow-glow">
            Create My Learning Path
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Learning;
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { X, ArrowRight } from "lucide-react";

const Profile = () => {
  const [formData, setFormData] = useState({
    age: "",
    educationLevel: "",
    currentRole: "",
  });

  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const interests = [
    "Technology", "Design", "Business", "Arts", "Healthcare", "Education", 
    "Finance", "Marketing", "Engineering", "Science", "Writing", "Management",
    "Data Analysis", "Customer Service", "Sales", "Research", "Social Work"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleInterestToggle = (interest: string) => {
    setSelectedInterests(prev => 
      prev.includes(interest) 
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission - redirect to assessment
    window.location.href = "/assessment";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/20 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <Card className="bg-gradient-card shadow-elevation border-0">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-3xl font-bold text-foreground mb-2">Tell Us About Yourself</CardTitle>
            <p className="text-muted-foreground">Help us understand your background and preferences to provide better recommendations</p>
          </CardHeader>
          
          <CardContent className="space-y-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="age" className="text-sm font-medium">Age</Label>
                  <Input
                    id="age"
                    name="age"
                    type="number"
                    value={formData.age}
                    onChange={handleInputChange}
                    placeholder="Enter your age"
                    min="16"
                    max="70"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Education Level</Label>
                  <Select value={formData.educationLevel} onValueChange={(value) => setFormData({...formData, educationLevel: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select education level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="high-school">High School</SelectItem>
                      <SelectItem value="associate">Associate Degree</SelectItem>
                      <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                      <SelectItem value="master">Master's Degree</SelectItem>
                      <SelectItem value="phd">PhD</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="currentRole" className="text-sm font-medium">Current Role/Status</Label>
                <Input
                  id="currentRole"
                  name="currentRole"
                  type="text"
                  value={formData.currentRole}
                  onChange={handleInputChange}
                  placeholder="e.g., Student, Software Developer, Career Changer"
                />
              </div>

              {/* Interests Selection */}
              <div className="space-y-4">
                <div>
                  <Label className="text-sm font-medium mb-2 block">Interests & Areas of Focus</Label>
                  <p className="text-sm text-muted-foreground mb-4">Select all areas that interest you (choose at least 3)</p>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {interests.map((interest) => (
                    <button
                      key={interest}
                      type="button"
                      onClick={() => handleInterestToggle(interest)}
                      className={`p-3 rounded-lg border-2 text-sm font-medium transition-all duration-200 ${
                        selectedInterests.includes(interest)
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border hover:border-primary/50 hover:bg-accent/50"
                      }`}
                    >
                      {interest}
                    </button>
                  ))}
                </div>

                {selectedInterests.length > 0 && (
                  <div className="mt-4">
                    <Label className="text-sm font-medium mb-2 block">Selected Interests:</Label>
                    <div className="flex flex-wrap gap-2">
                      {selectedInterests.map((interest) => (
                        <Badge key={interest} variant="secondary" className="px-3 py-1">
                          {interest}
                          <button
                            type="button"
                            onClick={() => handleInterestToggle(interest)}
                            className="ml-2 hover:text-destructive"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Skill Level */}
              <div className="space-y-4">
                <Label className="text-sm font-medium">Overall Experience Level</Label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { value: "beginner", label: "Beginner", desc: "Just starting out or changing careers" },
                    { value: "intermediate", label: "Intermediate", desc: "Some experience in chosen field" },
                    { value: "advanced", label: "Advanced", desc: "Experienced professional" }
                  ].map((level) => (
                    <label
                      key={level.value}
                      className="flex flex-col p-4 border-2 border-border rounded-lg cursor-pointer hover:border-primary/50 transition-all duration-200"
                    >
                      <input
                        type="radio"
                        name="skillLevel"
                        value={level.value}
                        className="mb-2"
                        required
                      />
                      <span className="font-medium text-foreground">{level.label}</span>
                      <span className="text-sm text-muted-foreground">{level.desc}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 pt-6">
                <Link to="/signup" className="flex-1">
                  <Button type="button" variant="outline" className="w-full">
                    Back
                  </Button>
                </Link>
                <Button 
                  type="submit" 
                  className="flex-1" 
                  disabled={selectedInterests.length < 3}
                >
                  Continue to Assessment
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
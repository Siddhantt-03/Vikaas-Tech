import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { X, ArrowRight } from "lucide-react";

export default function Profile() {
  const [formData, setFormData] = useState({
    age: "",
    educationLevel: "",
    currentRole: "",
    skillLevel: "",
  });
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [submitting, setSubmitting] = useState(false);

  const interests = [
    "Technology","Design","Business","Arts","Healthcare","Education",
    "Finance","Marketing","Engineering","Science","Writing","Management",
    "Data Analysis","Customer Service","Sales","Research","Social Work",
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleInterestToggle = (interest: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // simulate submit
    setTimeout(() => (window.location.href = "/assessment"), 900);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/20 px-4 py-12 flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-2xl"
      >
        <Card className="bg-gradient-card shadow-lg border-0">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-3xl font-bold text-foreground mb-2">
              Tell Us About Yourself
            </CardTitle>
            <p className="text-muted-foreground text-sm">
              Help us understand your background and preferences to provide better recommendations.
            </p>
          </CardHeader>

          <CardContent className="space-y-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* BASIC INFO */}
              <section className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="age">Age</Label>
                  <Input
                    id="age"
                    name="age"
                    type="number"
                    min="16"
                    max="70"
                    value={formData.age}
                    onChange={handleInputChange}
                    placeholder="Enter your age"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label>Education Level</Label>
                  <Select
                    value={formData.educationLevel}
                    onValueChange={(v) =>
                      setFormData((prev) => ({ ...prev, educationLevel: v }))
                    }
                  >
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
              </section>

              <div className="space-y-2">
                <Label htmlFor="currentRole">Current Role/Status</Label>
                <Input
                  id="currentRole"
                  name="currentRole"
                  type="text"
                  value={formData.currentRole}
                  onChange={handleInputChange}
                  placeholder="e.g., Student, Software Developer, Career Changer"
                />
              </div>

              {/* INTERESTS */}
              <section className="space-y-4">
                <div>
                  <Label className="block mb-1">Interests & Areas of Focus</Label>
                  <p className="text-sm text-muted-foreground">
                    Select at least 3 areas that excite you.
                  </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {interests.map((interest) => (
                    <button
                      key={interest}
                      type="button"
                      onClick={() => handleInterestToggle(interest)}
                      className={`p-3 rounded-lg border-2 text-sm font-medium transition-colors duration-200 ${
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
                    <Label className="block mb-1">Selected:</Label>
                    <div className="flex flex-wrap gap-2">
                      {selectedInterests.map((interest) => (
                        <Badge
                          key={interest}
                          variant="secondary"
                          className="px-3 py-1 flex items-center"
                        >
                          {interest}
                          <button
                            type="button"
                            onClick={() => handleInterestToggle(interest)}
                            className="ml-2 hover:text-destructive transition"
                            aria-label={`Remove ${interest}`}
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
                {selectedInterests.length < 3 && (
                  <p className="text-xs text-destructive">
                    Please select at least 3 interests.
                  </p>
                )}
              </section>

              {/* EXPERIENCE LEVEL */}
              <section className="space-y-4">
                <Label>Overall Experience Level</Label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { value: "beginner", label: "Beginner", desc: "Just starting out or changing careers" },
                    { value: "intermediate", label: "Intermediate", desc: "Some experience in chosen field" },
                    { value: "advanced", label: "Advanced", desc: "Experienced professional" },
                  ].map((level) => (
                    <label
                      key={level.value}
                      className={`flex flex-col p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                        formData.skillLevel === level.value
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <input
                        type="radio"
                        name="skillLevel"
                        value={level.value}
                        checked={formData.skillLevel === level.value}
                        onChange={handleInputChange}
                        className="sr-only"
                        required
                      />
                      <span className="font-medium">{level.label}</span>
                      <span className="text-sm text-muted-foreground">{level.desc}</span>
                    </label>
                  ))}
                </div>
              </section>

              {/* ACTIONS */}
              <div className="flex gap-4 pt-4">
                <Link to="/signup" className="flex-1">
                  <Button type="button" variant="outline" className="w-full">
                    Back
                  </Button>
                </Link>
                <Button
                  type="submit"
                  className="flex-1"
                  disabled={selectedInterests.length < 3 || submitting}
                >
                  {submitting ? "Saving..." : "Continue to Assessment"}
                  {!submitting && <ArrowRight className="ml-2 h-4 w-4" />}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

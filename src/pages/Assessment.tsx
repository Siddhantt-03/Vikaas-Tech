import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";

const Assessment = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});

  const questions = [
    {
      id: 1,
      question: "How much do you enjoy working with data and analytics?",
      options: [
        "Not at all - I prefer creative or people-focused work",
        "Somewhat - I can work with data when needed",
        "Quite a bit - I find patterns and insights interesting", 
        "Very much - I love diving deep into data analysis"
      ]
    },
    {
      id: 2,
      question: "How comfortable are you with public speaking and presentations?",
      options: [
        "Very uncomfortable - I avoid it whenever possible",
        "Somewhat uncomfortable - I can do it but don't enjoy it",
        "Comfortable - I can present well when needed",
        "Very comfortable - I enjoy presenting and speaking publicly"
      ]
    },
    {
      id: 3,
      question: "How important is work-life balance to you?",
      options: [
        "Not very important - I'm willing to work long hours for career growth",
        "Somewhat important - I want balance but can be flexible",
        "Very important - I need clear boundaries between work and personal time",
        "Extremely important - Work-life balance is my top priority"
      ]
    },
    {
      id: 4,
      question: "What type of work environment energizes you most?",
      options: [
        "Fast-paced, dynamic environments with constant change",
        "Collaborative team settings with regular interaction",
        "Quiet, focused environments where I can work independently",
        "Structured environments with clear processes and procedures"
      ]
    },
    {
      id: 5,
      question: "How do you prefer to solve problems?",
      options: [
        "Through creative brainstorming and innovative approaches",
        "By analyzing data and using logical reasoning",
        "Through collaboration and gathering diverse perspectives",
        "By following proven methods and best practices"
      ]
    },
    {
      id: 6,
      question: "What motivates you most in your career?",
      options: [
        "Financial success and earning potential",
        "Making a positive impact on others or society",
        "Personal growth and continuous learning",
        "Recognition and professional achievement"
      ]
    },
    {
      id: 7,
      question: "How do you handle stress and pressure?",
      options: [
        "I thrive under pressure and perform my best",
        "I handle it well but prefer manageable stress levels",
        "I can manage it but need good support systems",
        "I prefer low-stress environments to do my best work"
      ]
    },
    {
      id: 8,
      question: "What's your preferred learning style?",
      options: [
        "Hands-on experience and learning by doing",
        "Reading, research, and theoretical study",
        "Visual learning through diagrams and demonstrations",
        "Discussion and learning from others' experiences"
      ]
    }
  ];

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswer = (optionIndex: number) => {
    setAnswers({
      ...answers,
      [currentQuestion]: optionIndex
    });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Assessment complete - redirect to dashboard
      window.location.href = "/dashboard";
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const isAnswered = answers[currentQuestion] !== undefined;
  const isLastQuestion = currentQuestion === questions.length - 1;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/20 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Progress Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold text-foreground">Career Assessment</h1>
            <span className="text-sm text-muted-foreground">
              Question {currentQuestion + 1} of {questions.length}
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <Card className="bg-gradient-card shadow-elevation border-0">
          <CardHeader className="pb-8">
            <CardTitle className="text-2xl text-foreground">
              {questions[currentQuestion].question}
            </CardTitle>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <div className="space-y-3">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${
                    answers[currentQuestion] === index
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border hover:border-primary/50 hover:bg-accent/50"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{option}</span>
                    {answers[currentQuestion] === index && (
                      <CheckCircle className="h-5 w-5 text-primary" />
                    )}
                  </div>
                </button>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex gap-4 pt-8">
              <Button
                onClick={handlePrevious}
                variant="outline"
                disabled={currentQuestion === 0}
                className="flex-1"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>
              
              <Button
                onClick={handleNext}
                disabled={!isAnswered}
                className="flex-1"
                variant={isLastQuestion ? "success" : "default"}
              >
                {isLastQuestion ? "Complete Assessment" : "Next Question"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Help Text */}
            <p className="text-center text-sm text-muted-foreground mt-6">
              {isLastQuestion 
                ? "Complete your assessment to receive personalized career recommendations"
                : "Answer honestly - there are no right or wrong answers"
              }
            </p>
          </CardContent>
        </Card>

        {/* Progress Indicator */}
        <div className="mt-8 text-center">
          <div className="flex justify-center space-x-2">
            {questions.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentQuestion
                    ? "bg-primary scale-125"
                    : index < currentQuestion
                    ? "bg-success"
                    : "bg-muted"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assessment;
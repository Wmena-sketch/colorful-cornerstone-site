import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { GraduationCap, Clock, Users, Play, BookOpen, Award, Zap } from "lucide-react";

const AISkillsHub = () => {
  const skillCourses = [
    {
      title: "Machine Learning Fundamentals",
      description: "Learn the core concepts of ML algorithms and their applications",
      level: "Beginner",
      duration: "6 weeks", 
      students: "15.2K",
      rating: 4.8,
      progress: 0,
      category: "Machine Learning"
    },
    {
      title: "Prompt Engineering Mastery", 
      description: "Master the art of crafting effective prompts for AI models",
      level: "Intermediate",
      duration: "4 weeks",
      students: "8.9K", 
      rating: 4.9,
      progress: 35,
      category: "AI Prompting"
    },
    {
      title: "Computer Vision with Python",
      description: "Build image recognition and processing applications",
      level: "Advanced",
      duration: "8 weeks",
      students: "5.1K",
      rating: 4.7,
      progress: 0, 
      category: "Computer Vision"
    }
  ];

  const skillPaths = [
    {
      name: "AI Developer",
      description: "Complete learning path to become an AI developer",
      courses: 12,
      duration: "6 months",
      icon: "🤖"
    },
    {
      name: "Data Scientist", 
      description: "Master data analysis and machine learning techniques",
      courses: 15,
      duration: "8 months",
      icon: "📊"
    },
    {
      name: "AI Product Manager",
      description: "Lead AI product development and strategy", 
      courses: 8,
      duration: "4 months",
      icon: "🎯"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 bg-primary/10 text-primary border-primary/20">
            <GraduationCap className="h-4 w-4 mr-2" />
            AI Skills Hub
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Master{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              AI Skills
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn from industry experts and build the skills needed to excel in the AI-driven future
          </p>
        </div>

        {/* Featured Courses */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {skillCourses.map((course, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-3">
                  <Badge variant={course.level === 'Beginner' ? 'default' : course.level === 'Intermediate' ? 'secondary' : 'outline'}>
                    {course.level}
                  </Badge>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Award className="h-4 w-4" />
                    {course.rating}
                  </div>
                </div>
                <CardTitle className="text-xl">{course.title}</CardTitle>
                <Badge variant="outline" className="w-fit">{course.category}</Badge>
                <CardDescription>{course.description}</CardDescription>
              </CardHeader>
              <CardContent>
                {course.progress > 0 && (
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span>Progress</span>
                      <span>{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                  </div>
                )}
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {course.students}
                  </div>
                </div>

                <Button className="w-full" variant={course.progress > 0 ? "default" : "outline"}>
                  <Play className="h-4 w-4 mr-2" />
                  {course.progress > 0 ? "Continue Learning" : "Start Course"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Learning Paths */}
        <div className="bg-card rounded-2xl p-8 border shadow-sm mb-12">
          <h3 className="text-2xl font-bold mb-8 text-center">Career Learning Paths</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {skillPaths.map((path, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors group">
                <div className="text-4xl mb-4">{path.icon}</div>
                <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{path.name}</h4>
                <p className="text-muted-foreground text-sm mb-4">{path.description}</p>
                <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <BookOpen className="h-4 w-4" />
                    {path.courses} courses
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {path.duration}
                  </div>
                </div>
                <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Explore Path
                </Button>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-gradient-accent hover:opacity-90">
            <Zap className="h-5 w-5 mr-2" />
            Browse All Courses
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AISkillsHub;
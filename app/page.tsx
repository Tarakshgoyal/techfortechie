import Link from "next/link";
import { Code, BookOpen, Brain, Award, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import CourseCard from "@/components/CourseCard";

const featuredCourses = [
  {
    id: "1",
    title: "Full Stack Web Development",
    description: "Master modern web development with React, Node.js, and MongoDB",
    instructor: "Sarah Johnson",
    duration: "12 weeks",
    students: 5420,
    rating: 4.8,
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
  },
  {
    id: "2",
    title: "Python for Data Science",
    description: "Learn Python programming and data analysis fundamentals",
    instructor: "Michael Chen",
    duration: "10 weeks",
    students: 3890,
    rating: 4.9,
    thumbnail: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&h=600&fit=crop",
  },
  {
    id: "3",
    title: "Cloud Computing with AWS",
    description: "Complete guide to AWS services and cloud architecture",
    instructor: "David Martinez",
    duration: "8 weeks",
    students: 2750,
    rating: 4.7,
    thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
  },
];

const features = [
  {
    icon: Code,
    title: "Hands-on Projects",
    description: "Build real-world applications and strengthen your portfolio",
  },
  {
    icon: Brain,
    title: "Interactive Quizzes",
    description: "Test your knowledge with engaging quizzes and assessments",
  },
  {
    icon: BookOpen,
    title: "Expert-Led Courses",
    description: "Learn from industry professionals with years of experience",
  },
  {
    icon: Award,
    title: "Certificates",
    description: "Earn recognized certificates upon course completion",
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Connect with fellow learners and mentors",
  },
  {
    icon: Zap,
    title: "Latest Tech",
    description: "Stay updated with cutting-edge technologies",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{
          backgroundImage: `url(/assets/hero-bg.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Master Tech Skills Today
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-fade-in-delay">
              Join thousands of learners advancing their careers with industry-leading courses, 
              interactive quizzes, and expert insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
              <Link href="/courses">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                  Explore Courses
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-lg px-8 border-2">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose TechForTechie?</h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to succeed in your tech journey
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Courses</h2>
            <p className="text-xl text-muted-foreground">
              Start learning with our most popular courses
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
          <div className="text-center">
            <Link href="/courses">
              <Button size="lg" variant="outline" className="border-2">
                View All Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-primary-foreground">
            Ready to Start Learning?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Join our community of learners and take the first step towards your tech career
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8">
            Sign Up Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 TechForTechie. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

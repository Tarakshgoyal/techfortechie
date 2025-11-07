"use client";

import { use, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Clock, Users, Star, BookOpen, CheckCircle, PlayCircle, ArrowLeft, Loader2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRazorpay } from "@/hooks/useRazorpay";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";

const coursesData = {
  "1": {
    title: "Full Stack Web Development",
    description: "Master modern web development with React, Node.js, and MongoDB. Build full-stack applications from scratch.",
    instructor: "Sarah Johnson",
    duration: "12 weeks",
    students: 5420,
    rating: 4.8,
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=600&fit=crop",
    price: "$99",
    level: "Intermediate",
    modules: [
      "Introduction to Web Development",
      "HTML, CSS & JavaScript Fundamentals",
      "React.js Deep Dive",
      "State Management with Redux",
      "Node.js & Express Backend",
      "MongoDB Database Design",
      "RESTful API Development",
      "Authentication & Security",
      "Deployment & DevOps",
      "Final Project",
    ],
    skills: ["React", "Node.js", "MongoDB", "REST APIs", "Git", "JavaScript"],
    overview: "This comprehensive course will take you from beginner to professional full-stack developer. You'll learn to build modern, scalable web applications using industry-standard tools and best practices.",
  },
  "2": {
    title: "Python for Data Science",
    description: "Learn Python programming and data analysis fundamentals. Work with pandas, NumPy, and visualization libraries.",
    instructor: "Michael Chen",
    duration: "10 weeks",
    students: 3890,
    rating: 4.9,
    thumbnail: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=1200&h=600&fit=crop",
    price: "$89",
    level: "Beginner",
    modules: [
      "Python Basics",
      "Data Types & Structures",
      "NumPy for Numerical Computing",
      "Pandas for Data Analysis",
      "Data Visualization with Matplotlib",
      "Statistical Analysis",
      "Machine Learning Intro",
      "Real-world Projects",
    ],
    skills: ["Python", "Pandas", "NumPy", "Data Analysis", "Matplotlib", "Statistics"],
    overview: "Perfect for aspiring data scientists! Learn Python from scratch and master the essential libraries for data analysis, visualization, and basic machine learning.",
  },
  "3": {
    title: "Cloud Computing with AWS",
    description: "Complete guide to AWS services and cloud architecture. Learn EC2, S3, Lambda, and more.",
    instructor: "David Martinez",
    duration: "8 weeks",
    students: 2750,
    rating: 4.7,
    thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop",
    price: "$119",
    level: "Advanced",
    modules: [
      "Cloud Computing Fundamentals",
      "AWS Account Setup & IAM",
      "EC2 & Compute Services",
      "S3 Storage Solutions",
      "Serverless with Lambda",
      "Database Services (RDS, DynamoDB)",
      "Networking & Security",
      "Cost Optimization",
    ],
    skills: ["AWS", "Cloud Architecture", "EC2", "S3", "Lambda", "DevOps"],
    overview: "Master Amazon Web Services and learn to design, deploy, and manage scalable cloud applications. Perfect for aspiring cloud architects and DevOps engineers.",
  },
};

export default function CourseDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const course = coursesData[id as keyof typeof coursesData];
  const { initializePayment } = useRazorpay();
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleEnrollment = async () => {
    setIsProcessing(true);
    
    // Extract numeric price from string (e.g., "$99" -> 99)
    const priceAmount = parseInt(course.price.replace(/[^0-9]/g, ""));

    try {
      await initializePayment({
        amount: priceAmount,
        currency: "INR",
        courseId: id,
        courseTitle: course.title,
        onSuccess: (response) => {
          setIsProcessing(false);
          toast({
            title: "Payment Successful! 🎉",
            description: `You have successfully enrolled in ${course.title}. Payment ID: ${response.paymentId}`,
            variant: "default",
          });
          // You can redirect to a success page or update user enrollment status here
          console.log("Payment successful:", response);
        },
        onFailure: (error) => {
          setIsProcessing(false);
          toast({
            title: "Payment Failed",
            description: error.message || "Something went wrong. Please try again.",
            variant: "destructive",
          });
          console.error("Payment failed:", error);
        },
      });
    } catch (error: any) {
      setIsProcessing(false);
      toast({
        title: "Error",
        description: error.message || "Failed to initialize payment. Please try again.",
        variant: "destructive",
      });
    }
  };

  if (!course) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 pt-32 text-center">
          <h1 className="text-4xl font-bold mb-4">Course Not Found</h1>
          <Link href="/courses">
            <Button>Back to Courses</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <Toaster />

      {/* Hero Section */}
      <div className="relative pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-secondary/5 to-background">
        <div className="container mx-auto">
          <Link href="/courses" className="inline-flex items-center text-primary hover:underline mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Courses
          </Link>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <div className="inline-block px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-semibold mb-4">
                  {course.level}
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{course.title}</h1>
                <p className="text-xl text-muted-foreground mb-6">{course.description}</p>
                
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-accent fill-accent" />
                    <span className="font-semibold">{course.rating}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    <span>{course.students.toLocaleString()} students</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-secondary" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    <span>{course.modules.length} modules</span>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full h-[400px] object-cover"
                />
              </div>

              {/* Overview */}
              <Card>
                <CardHeader>
                  <CardTitle>Course Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{course.overview}</p>
                </CardContent>
              </Card>

              {/* Skills */}
              <Card>
                <CardHeader>
                  <CardTitle>Skills You&apos;ll Learn</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {course.skills.map((skill, index) => (
                      <div
                        key={index}
                        className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Modules */}
              <Card>
                <CardHeader>
                  <CardTitle>Course Curriculum</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {course.modules.map((module, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                      >
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                          {index + 1}
                        </div>
                        <span className="flex-1">{module}</span>
                        <PlayCircle className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24 shadow-lg">
                <CardContent className="p-6 space-y-6">
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">{course.price}</div>
                    <p className="text-muted-foreground">One-time payment</p>
                  </div>

                  <Button 
                    size="lg" 
                    className="w-full bg-accent hover:bg-accent/90 text-lg"
                    onClick={handleEnrollment}
                    disabled={isProcessing}
                  >
                    {isProcessing ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      "Enroll Now"
                    )}
                  </Button>

                  <div className="pt-4 border-t border-border space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Lifetime access</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Certificate of completion</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Access on mobile and desktop</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Downloadable resources</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Community support</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <h4 className="font-semibold mb-3">Instructor</h4>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-lg">
                        {course.instructor.charAt(0)}
                      </div>
                      <div>
                        <div className="font-medium">{course.instructor}</div>
                        <div className="text-sm text-muted-foreground">Expert Instructor</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border mt-12">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 TechForTechie. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

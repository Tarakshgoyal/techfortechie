import Link from "next/link";
import { Code, BookOpen, Brain, Award, Users, Zap, TrendingUp, Clock, CheckCircle, ArrowRight, Star, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import CourseCard from "@/components/CourseCard";

const featuredCourses = [
  {
    id: "c-programming",
    title: "C Programming Zero-to-Hero in 4 Hours — Live Bootcamp",
    description: "Learn real C programming: variables, logic, functions, pointers, memory, arrays, strings & file handling. English/Hindi. Nov 9, 2025 | 10 AM - 2 PM",
    instructor: "Expert Instructor",
    duration: "4 hours",
    students: 0,
    rating: 5.0,
    thumbnail: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&h=600&fit=crop",
  },
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
];

const stats = [
  { value: "50K+", label: "Active Students" },
  { value: "100+", label: "Expert Instructors" },
  { value: "200+", label: "Courses Available" },
  { value: "98%", label: "Success Rate" },
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
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section - Modern & Professional */}
      <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 pt-12">
            {/* Live Badge for C Programming */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
              <span className="text-sm font-semibold text-red-600 dark:text-red-400">
                Live Bootcamp on Nov 9, 2025 • C Programming
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight">
              Learn Tech Skills from
              <span className="block mt-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Industry Experts
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Transform your career with hands-on courses in programming, web development, 
              data science, and more. Join <strong>50,000+ students</strong> learning online.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link href="/courses">
                <Button size="lg" className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all">
                  Browse All Courses
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/courses/c-programming">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-full border-2 hover:bg-accent">
                  <Play className="mr-2 h-5 w-5" />
                  Join Live Bootcamp - ₹499
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-8 pt-8 text-sm text-muted-foreground">
              {[
                { icon: Star, text: "4.9/5 Average Rating" },
                { icon: Users, text: "50K+ Happy Students" },
                { icon: CheckCircle, text: "Certificate Included" },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <item.icon className="h-5 w-5 text-primary" />
                  <span className="font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-2 hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Clean Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-2 text-sm font-semibold">
              WHY CHOOSE US
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              World-class learning experience with comprehensive support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="relative p-8 border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl group overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses - Modern Cards */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <Badge variant="outline" className="mb-4 px-4 py-2 text-sm font-semibold">
                POPULAR COURSES
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Start Your Learning Journey
              </h2>
              <p className="text-xl text-muted-foreground">
                Hand-picked courses from industry experts
              </p>
            </div>
            <Link href="/courses" className="hidden md:block">
              <Button variant="outline" size="lg" className="border-2">
                View All Courses
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>

          <div className="text-center mt-12 md:hidden">
            <Link href="/courses">
              <Button variant="outline" size="lg" className="border-2">
                View All Courses
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-2 text-sm font-semibold">
              STUDENT SUCCESS
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Loved by 50,000+ Students
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See what our students have to say about their learning experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Priya Sharma",
                role: "Software Engineer at Google",
                content: "The C Programming bootcamp was excellent! Clear explanations and hands-on projects helped me land my dream job.",
                rating: 5,
              },
              {
                name: "Rahul Verma",
                role: "Full Stack Developer",
                content: "Best investment I made in my career. The instructors are knowledgeable and the content is up-to-date with industry standards.",
                rating: 5,
              },
              {
                name: "Ananya Patel",
                role: "Data Scientist",
                content: "TechForTechie transformed my career. From basics to advanced concepts, everything is well-structured and easy to follow.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="p-8 border-2 hover:shadow-xl transition-shadow">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  &quot;{testimonial.content}&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Modern Design */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10" />
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-3xl mx-auto space-y-8">
            <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
              LIMITED TIME OFFER
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Start Your Tech Career Today
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              Join thousands of students who have transformed their careers with TechForTechie. 
              Get instant access to all courses with our special launch offer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/courses">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-6 rounded-full shadow-2xl hover:scale-105 transition-transform">
                  Enroll Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/courses/c-programming">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-full border-2 border-white text-white hover:bg-white/10">
                  Join Live Bootcamp
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Professional */}
      <footer className="bg-slate-950 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">TechForTechie</h3>
              <p className="text-slate-400 leading-relaxed">
                Empowering learners worldwide with quality tech education and practical skills.
              </p>
              <div className="flex gap-4">
                {/* Social Media Icons */}
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 hover:bg-primary flex items-center justify-center transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 hover:bg-primary flex items-center justify-center transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 hover:bg-primary flex items-center justify-center transition-colors">
                  <span className="sr-only">GitHub</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-lg">Courses</h4>
              <ul className="space-y-3 text-slate-400">
                <li><Link href="/courses" className="hover:text-white transition-colors">Web Development</Link></li>
                <li><Link href="/courses" className="hover:text-white transition-colors">Data Science</Link></li>
                <li><Link href="/courses" className="hover:text-white transition-colors">Programming</Link></li>
                <li><Link href="/courses" className="hover:text-white transition-colors">Cloud Computing</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-lg">Company</h4>
              <ul className="space-y-3 text-slate-400">
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-lg">Support</h4>
              <ul className="space-y-3 text-slate-400">
                <li><Link href="/help" className="hover:text-white transition-colors">Help Center</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/refund" className="hover:text-white transition-colors">Refund Policy</Link></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              &copy; 2025 TechForTechie. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-slate-400">
              <span>Made with ❤️ in India</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

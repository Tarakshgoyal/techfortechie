"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import CourseCard from "@/components/CourseCard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const allCourses = [
  {
    id: "c-programming",
    title: "🌟 C Programming Zero-to-Hero in 4 Hours — Live Bootcamp",
    description: "Learn real C programming with hands-on coding: variables, logic, functions, pointers, memory, arrays, strings & file handling. Live session on Nov 9, 2025 (10 AM - 2 PM). English/Hindi. Certificate included!",
    instructor: "Expert Instructor",
    duration: "4 hours",
    students: 0,
    rating: 5.0,
    thumbnail: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&h=600&fit=crop",
    category: "Programming",
    available: true,
  },
  {
    id: "1",
    title: "Full Stack Web Development",
    description: "Master modern web development with React, Node.js, and MongoDB. Build full-stack applications from scratch.",
    instructor: "Sarah Johnson",
    duration: "12 weeks",
    students: 5420,
    rating: 4.8,
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
    category: "Web Development",
    available: false,
  },
  {
    id: "2",
    title: "Python for Data Science",
    description: "Learn Python programming and data analysis fundamentals. Work with pandas, NumPy, and visualization libraries.",
    instructor: "Michael Chen",
    duration: "10 weeks",
    students: 3890,
    rating: 4.9,
    thumbnail: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&h=600&fit=crop",
    category: "Data Science",
    available: false,
  },
  {
    id: "3",
    title: "Cloud Computing with AWS",
    description: "Complete guide to AWS services and cloud architecture. Learn EC2, S3, Lambda, and more.",
    instructor: "David Martinez",
    duration: "8 weeks",
    students: 2750,
    rating: 4.7,
    thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
    category: "Cloud",
    available: false,
  },
  {
    id: "4",
    title: "Machine Learning Fundamentals",
    description: "Dive into ML algorithms, neural networks, and AI applications with practical projects.",
    instructor: "Dr. Emily Watson",
    duration: "14 weeks",
    students: 4200,
    rating: 4.9,
    thumbnail: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&h=600&fit=crop",
    category: "AI/ML",
    available: false,
  },
  {
    id: "5",
    title: "Mobile App Development",
    description: "Build native mobile apps for iOS and Android using React Native and modern tools.",
    instructor: "James Park",
    duration: "10 weeks",
    students: 3100,
    rating: 4.6,
    thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
    category: "Mobile",
    available: false,
  },
  {
    id: "6",
    title: "Cybersecurity Essentials",
    description: "Learn security fundamentals, ethical hacking, and how to protect systems from threats.",
    instructor: "Alex Thompson",
    duration: "9 weeks",
    students: 2890,
    rating: 4.8,
    thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop",
    category: "Security",
    available: false,
  },
  {
    id: "7",
    title: "DevOps Engineering",
    description: "Master CI/CD, Docker, Kubernetes, and automation tools for modern software delivery.",
    instructor: "Rachel Green",
    duration: "11 weeks",
    students: 3450,
    rating: 4.7,
    thumbnail: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=600&fit=crop",
    category: "DevOps",
    available: false,
  },
  {
    id: "8",
    title: "UI/UX Design Mastery",
    description: "Create stunning user interfaces and experiences. Learn Figma, design systems, and user research.",
    instructor: "Nina Patel",
    duration: "8 weeks",
    students: 4100,
    rating: 4.9,
    thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
    category: "Design",
    available: false,
  },
  {
    id: "9",
    title: "Blockchain Development",
    description: "Build decentralized applications and smart contracts on Ethereum and other platforms.",
    instructor: "Chris Anderson",
    duration: "12 weeks",
    students: 2340,
    rating: 4.6,
    thumbnail: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop",
    category: "Blockchain",
    available: false,
  },
];

export default function Courses() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCourses, setFilteredCourses] = useState(allCourses);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const filtered = allCourses.filter(
      (course) =>
        course.title.toLowerCase().includes(query.toLowerCase()) ||
        course.description.toLowerCase().includes(query.toLowerCase()) ||
        course.category.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCourses(filtered);
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">Explore Our Courses</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose from our comprehensive collection of tech courses designed to advance your career
            </p>
          </div>

          {/* Search and Filter */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search courses by name, topic, or category..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="pl-12 pr-4 h-14 text-lg"
              />
            </div>
          </div>

          {/* Course Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="text-center p-6 rounded-xl bg-card border border-border">
              <div className="text-3xl font-bold text-primary mb-1">{allCourses.length}</div>
              <div className="text-sm text-muted-foreground">Total Courses</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-card border border-border">
              <div className="text-3xl font-bold text-secondary mb-1">50+</div>
              <div className="text-sm text-muted-foreground">Expert Instructors</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-card border border-border">
              <div className="text-3xl font-bold text-accent mb-1">32K+</div>
              <div className="text-sm text-muted-foreground">Students</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-card border border-border">
              <div className="text-3xl font-bold text-primary mb-1">4.8</div>
              <div className="text-sm text-muted-foreground">Avg Rating</div>
            </div>
          </div>

          {/* Course Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">
                No courses found matching your search. Try different keywords.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 TechForTechie. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

"use client";

import Link from "next/link";
import { BookOpen, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="p-2 bg-primary rounded-lg group-hover:scale-110 transition-transform">
              <BookOpen className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              TechForTechie
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/courses" className="text-foreground hover:text-primary transition-colors">
              Courses
            </Link>
            <Link href="/quizzes" className="text-foreground hover:text-primary transition-colors">
              Quizzes
            </Link>
            <Link href="/blogs" className="text-foreground hover:text-primary transition-colors">
              Blogs
            </Link>
            <Button size="sm" className="bg-accent hover:bg-accent/90">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-3 animate-fade-in">
            <Link
              href="/"
              className="block px-4 py-2 rounded-lg hover:bg-muted transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/courses"
              className="block px-4 py-2 rounded-lg hover:bg-muted transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Courses
            </Link>
            <Link
              href="/quizzes"
              className="block px-4 py-2 rounded-lg hover:bg-muted transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Quizzes
            </Link>
            <Link
              href="/blogs"
              className="block px-4 py-2 rounded-lg hover:bg-muted transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Blogs
            </Link>
            <Button className="w-full bg-accent hover:bg-accent/90">Get Started</Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

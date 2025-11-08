"use client";

import Link from "next/link";
import { Clock, Users, Star, TrendingUp, Award } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  students: number;
  rating: number;
  thumbnail: string;
}

const CourseCard = ({
  id,
  title,
  description,
  instructor,
  duration,
  students,
  rating,
  thumbnail,
}: CourseCardProps) => {
  const isLiveCourse = id === "c-programming";
  
  return (
    <Card className="group overflow-hidden border-2 hover:border-primary/50 hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
      <div className="relative overflow-hidden h-56">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Rating Badge */}
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-bold">{rating}</span>
        </div>

        {/* Live Badge */}
        {isLiveCourse && (
          <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1.5 rounded-full flex items-center gap-2 shadow-lg animate-pulse">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            <span className="text-xs font-bold uppercase">LIVE</span>
          </div>
        )}

        {/* Bottom Info */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-sm">
          <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full">
            <Users className="h-4 w-4" />
            <span className="font-medium">{students > 0 ? students.toLocaleString() : "New"}</span>
          </div>
          <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full">
            <Clock className="h-4 w-4" />
            <span className="font-medium">{duration}</span>
          </div>
        </div>
      </div>

      <CardContent className="p-6 flex-1 flex flex-col">
        {/* Instructor */}
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-xs font-bold text-primary">{instructor.charAt(0)}</span>
          </div>
          <span className="text-sm text-muted-foreground font-medium">{instructor}</span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors leading-tight">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-1 leading-relaxed">
          {description}
        </p>

        {/* CTA Button */}
        <Link href={`/courses/${id}`} className="w-full mt-auto">
          <Button className="w-full bg-primary hover:bg-primary/90 shadow-md hover:shadow-lg transition-all group/btn">
            {isLiveCourse ? "Join Bootcamp →" : "View Details →"}
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default CourseCard;

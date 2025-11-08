"use client";

import Link from "next/link";
import { Clock, Users, Star } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Button } from "./ui/button";

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  students: number;
  rating: number;
  thumbnail: string;
  available?: boolean;
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
  available = true,
}: CourseCardProps) => {
  return (
    <Card className={`group overflow-hidden hover:shadow-[var(--shadow-elevated)] transition-all duration-300 hover:-translate-y-1 ${!available ? 'opacity-75' : ''}`}>
      <div className="relative overflow-hidden h-48">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {!available && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <span className="bg-red-500 text-white px-4 py-2 rounded-full font-semibold text-lg">
              Currently Unavailable
            </span>
          </div>
        )}
        <div className="absolute top-3 right-3 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
          ⭐ {rating}
        </div>
      </div>

      <CardHeader>
        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground">by {instructor}</p>
      </CardHeader>

      <CardContent>
        <p className="text-muted-foreground line-clamp-2">{description}</p>
        <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{students.toLocaleString()}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter>
        {available ? (
          <Link href={`/courses/${id}`} className="w-full">
            <Button className="w-full bg-primary hover:bg-primary/90">View Course</Button>
          </Link>
        ) : (
          <Button disabled className="w-full bg-muted text-muted-foreground cursor-not-allowed">
            Coming Soon
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default CourseCard;

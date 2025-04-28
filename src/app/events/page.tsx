"use client";
import React from "react";
import { motion } from "framer-motion";
import { BentoGrid, BentoGridItem } from "../../components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function EventsPage() {
  return (
    <div className="max-w-7xl mx-auto mt-12">
      {/* Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 mb-4">
          Our Events
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Join us for these exciting events and activities at Social Shelf
        </p>
      </motion.div>

      <BentoGrid className="max-w-7xl mx-auto mt-8">
        {items.map((item, i) => (
          <div key={i} className={i === 3 || i === 6 ? "md:col-span-2" : ""}>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <div className="w-full h-full cursor-pointer">
                  <BentoGridItem
                    title={item.title}
                    description={item.description}
                    header={item.header}
                    icon={item.icon}
                    className="h-full"
                  />
                </div>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>{item.title}</AlertDialogTitle>
                  <AlertDialogDescription>
                    {item.description}
                  </AlertDialogDescription>
                  {item.longDescription && (
                    <p className="mt-4 text-sm text-muted-foreground">
                      {item.longDescription}
                    </p>
                  )}
                  {item.date && (
                    <p className="mt-4 font-semibold text-sm text-muted-foreground">
                      Date: {item.date}
                    </p>
                  )}
                  {item.location && (
                    <p className="font-semibold text-sm text-muted-foreground">
                      Location: {item.location}
                    </p>
                  )}
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Close</AlertDialogCancel>
                  <AlertDialogAction>Register</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        ))}
      </BentoGrid>
    </div>
  );
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[10rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    longDescription:
      "Join us for an immersive exhibition showcasing the most influential innovations of the past century. From the first computers to modern smartphones, witness the evolution of technology that shaped our world.",
    date: "March 15, 2024",
    location: "Tech Innovation Center",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    longDescription:
      "Experience how digital technologies have revolutionized every aspect of our lives. This event features interactive displays, keynote speakers, and workshops on emerging tech trends.",
    date: "April 10, 2024",
    location: "Digital Hub Conference Center",
    header: <Skeleton />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    longDescription:
      "A celebration of design excellence across disciplines. Meet renowned designers, participate in design thinking workshops, and explore the intersection of aesthetics and functionality.",
    date: "May 22, 2024",
    location: "Design District Gallery",
    header: <Skeleton />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    longDescription:
      "From ancient writing systems to modern digital communication, explore how humans have evolved ways to connect and share ideas throughout history.",
    date: "June 8, 2024",
    location: "Metropolitan Cultural Center",
    header: <Skeleton />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    longDescription:
      "A symposium bringing together thought leaders, researchers, and educators to discuss the future of learning and knowledge creation in the digital age.",
    date: "July 15, 2024",
    location: "University Grand Hall",
    header: <Skeleton />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Joy of Creation",
    description: "Experience the thrill of bringing ideas to life.",
    longDescription:
      "A hands-on festival celebrating creativity in all its forms. Participate in workshops, demonstrations, and collaborative projects across various creative disciplines.",
    date: "August 3, 2024",
    location: "Makers' Pavilion",
    header: <Skeleton />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
    longDescription:
      "An inspirational gathering featuring explorers, adventurers, and risk-takers who have pushed boundaries and discovered new frontiers both physically and metaphorically.",
    date: "September 18, 2024",
    location: "Explorers' Club",
    header: <Skeleton />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];

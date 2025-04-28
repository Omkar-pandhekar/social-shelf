"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useInView,
  useAnimation,
} from "framer-motion";
import { TracingBeam } from "@/components/ui/tracing-beam";

const categories = [
  "All",
  "Workshops",
  "Book Launches",
  "Author Visits",
  "Reading Clubs",
  "Competitions",
];

const galleryItems = [
  {
    id: 1,
    title: "Annual Literary Festival",
    date: "March 2023",
    description:
      "A celebration of literature with author talks and interactive workshops that drew over 500 attendees.",
    image:
      "https://images.unsplash.com/photo-1540224485413-4c7939106f3a?q=80&w=2798&auto=format&fit=crop",
    category: "Book Launches",
    featured: true,
    orientation: "landscape",
    attendees: 520,
    highlights: ["Famous author panels", "Book signings", "Writing workshops"],
  },
  {
    id: 2,
    title: "Children's Story Hour",
    date: "August 2023",
    description:
      "Young readers were captivated by storytelling sessions featuring puppets and interactive elements.",
    image:
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=3546&auto=format&fit=crop",
    category: "Reading Clubs",
    featured: false,
    orientation: "portrait",
    attendees: 85,
    highlights: ["Puppet shows", "Character costumes", "Interactive stories"],
  },
  {
    id: 3,
    title: "Author Meet & Greet: Maya Johnson",
    date: "October 2023",
    description:
      "Bestselling author Maya Johnson signed copies of her latest thriller and answered fan questions.",
    image:
      "https://images.unsplash.com/photo-1511988617509-a57c8a288659?q=80&w=3271&auto=format&fit=crop",
    category: "Author Visits",
    featured: true,
    orientation: "landscape",
    attendees: 215,
    highlights: ["Book signing", "Q&A session", "Reading from latest work"],
  },
  {
    id: 4,
    title: "Poetry Workshop",
    date: "January 2023",
    description:
      "Aspiring poets developed their craft through guided exercises and constructive feedback.",
    image:
      "https://images.unsplash.com/photo-1470754260170-299cf9c5ffb5?q=80&w=3087&auto=format&fit=crop",
    category: "Workshops",
    featured: false,
    orientation: "square",
    attendees: 42,
    highlights: [
      "Writing exercises",
      "Peer reviews",
      "Published poets as mentors",
    ],
  },
  {
    id: 5,
    title: "Summer Reading Challenge",
    date: "June-July 2023",
    description:
      "Over 200 participants completed our summer reading challenge, with prizes awarded to top readers.",
    image:
      "https://images.unsplash.com/photo-1568667256549-094345857637?q=80&w=3270&auto=format&fit=crop",
    category: "Competitions",
    featured: false,
    orientation: "portrait",
    attendees: 230,
    highlights: ["Weekly check-ins", "Theme-based reading", "Award ceremony"],
  },
  {
    id: 6,
    title: "Book to Movie Night",
    date: "September 2023",
    description:
      "We screened film adaptations of popular novels followed by comparative discussions.",
    image:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2825&auto=format&fit=crop",
    category: "Reading Clubs",
    featured: true,
    orientation: "landscape",
    attendees: 78,
    highlights: [
      "Film screenings",
      "Book vs. movie debates",
      "Themed refreshments",
    ],
  },
  {
    id: 7,
    title: "Local Authors Showcase",
    date: "November 2023",
    description:
      "Supporting our community's literary talent with readings and networking opportunities.",
    image:
      "https://images.unsplash.com/photo-1588666309990-d68f08e3d4a6?q=80&w=2960&auto=format&fit=crop",
    category: "Author Visits",
    featured: false,
    orientation: "square",
    attendees: 95,
    highlights: ["Author readings", "Book sales", "Networking"],
  },
  {
    id: 8,
    title: "Creative Writing Workshop",
    date: "February 2023",
    description:
      "Professional authors led sessions on character development, plot structure, and dialogue.",
    image:
      "https://images.unsplash.com/photo-1516383740770-fbcc5ccbece0?q=80&w=3174&auto=format&fit=crop",
    category: "Workshops",
    featured: false,
    orientation: "portrait",
    attendees: 55,
    highlights: [
      "Character development",
      "Plot structures",
      "Dialogue techniques",
    ],
  },
  {
    id: 9,
    title: "Book Art Exhibition",
    date: "April 2023",
    description:
      "Artists showcased creative works made from and inspired by books, drawing art enthusiasts and readers alike.",
    image:
      "https://images.unsplash.com/photo-1533669955142-6a73332af4db?q=80&w=2874&auto=format&fit=crop",
    category: "Book Launches",
    featured: true,
    orientation: "landscape",
    attendees: 163,
    highlights: ["Book sculptures", "Paper art", "Interactive installations"],
  },
  {
    id: 10,
    title: "Literacy Fundraiser Gala",
    date: "December 2023",
    description:
      "Our end-of-year gala raised funds for literacy programs while celebrating the year's literary achievements.",
    image:
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=3269&auto=format&fit=crop",
    category: "Book Launches",
    featured: true,
    orientation: "portrait",
    attendees: 180,
    highlights: ["Silent auction", "Author speeches", "Award presentations"],
  },
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: false, amount: 0.3 });
  const headerControls = useAnimation();

  useEffect(() => {
    if (isHeaderInView) {
      headerControls.start("visible");
    }
  }, [isHeaderInView, headerControls]);

  const filteredItems =
    selectedCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="w-full min-h-screen overflow-hidden">
      <TracingBeam className="px-4 py-12 md:px-8 lg:px-16 lg:py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            ref={headerRef}
            className="text-center mb-16"
            variants={staggerContainer}
            initial="hidden"
            animate={headerControls}
          >
            <motion.div variants={fadeInUp}>
              <h1 className="text-5xl pb-7 md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 mb-4">
                Memory Gallery
              </h1>
            </motion.div>
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
            >
              Explore our past events, community activities, and literary
              celebrations
            </motion.p>

            {/* Stats Section */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap justify-center items-center gap-8 mt-8"
            >
              <motion.div
                variants={fadeInUp}
                className="flex flex-col items-center"
              >
                <span className="text-4xl font-bold text-blue-600">10+</span>
                <span className="text-gray-600 dark:text-gray-400">Events</span>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="flex flex-col items-center"
              >
                <span className="text-4xl font-bold text-purple-600">
                  1.5K+
                </span>
                <span className="text-gray-600 dark:text-gray-400">
                  Attendees
                </span>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="flex flex-col items-center"
              >
                <span className="text-4xl font-bold text-pink-600">6</span>
                <span className="text-gray-600 dark:text-gray-400">
                  Categories
                </span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Category Filters */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 hover:scale-105"
                }`}
                variants={fadeInUp}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Dynamic Masonry Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-auto mx-auto"
              style={{ maxWidth: "calc(100vw - 2rem)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {filteredItems.map((item, index) => {
                const isHovered = hoveredId === item.id;

                // Dynamic grid positioning
                let gridClass = "";
                if (item.featured) {
                  // Feature items take more space
                  gridClass =
                    index % 2 === 0 ? "sm:col-span-2" : "xl:col-span-2";
                  if (index % 5 === 0) {
                    gridClass += " sm:row-span-2";
                  }
                } else if (item.orientation === "portrait") {
                  // Portrait images are taller
                  gridClass = "sm:row-span-2";
                }

                // Calculate image height based on orientation and position
                let imageHeight = "h-64";
                if (item.orientation === "portrait") {
                  imageHeight = "h-80 sm:h-96";
                } else if (item.orientation === "landscape" && item.featured) {
                  imageHeight = "h-64 sm:h-80";
                } else if (item.featured && index % 5 === 0) {
                  imageHeight = "h-72 sm:h-[32rem]";
                }

                return (
                  <motion.div
                    key={item.id}
                    className={`group relative overflow-hidden rounded-2xl shadow-lg transform transition-all duration-500 ${gridClass}`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    whileHover={{
                      scale: 1.02,
                      boxShadow:
                        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    }}
                    layoutId={`card-${item.id}`}
                    onClick={() => setSelectedItem(item.id)}
                    onHoverStart={() => setHoveredId(item.id)}
                    onHoverEnd={() => setHoveredId(null)}
                  >
                    <div
                      className={`relative w-full ${imageHeight} overflow-hidden`}
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        priority={index < 4}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className={`object-cover transition-transform duration-700 ${
                          isHovered ? "scale-110" : "scale-100"
                        }`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80" />

                      <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-all duration-500 ease-in-out">
                        <div className="flex justify-between items-start">
                          <div>
                            <motion.span
                              className="inline-block px-3 py-1 text-xs font-semibold bg-blue-600 text-white rounded-full mb-3"
                              whileHover={{ scale: 1.05 }}
                            >
                              {item.category}
                            </motion.span>
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                              {item.title}
                            </h3>
                            <div className="flex items-center text-sm text-gray-300 mb-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 mr-1"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              {item.date}
                              <span className="mx-2">•</span>
                              <span>{item.attendees} attendees</span>
                            </div>
                          </div>
                        </div>

                        <div
                          className={`overflow-hidden transition-all duration-500 ease-in-out ${
                            isHovered
                              ? "max-h-36 opacity-100"
                              : "max-h-0 opacity-0"
                          }`}
                        >
                          <p className="text-sm text-gray-200 mb-3">
                            {item.description}
                          </p>
                          <ul className="flex flex-wrap gap-2 mb-3">
                            {item.highlights.map((highlight, idx) => (
                              <li
                                key={idx}
                                className="text-xs bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-md"
                              >
                                {highlight}
                              </li>
                            ))}
                          </ul>
                          <motion.button
                            className="mt-2 text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center"
                            whileHover={{ x: 5 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            View details
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 ml-1"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {/* Modal for selected item */}
          <AnimatePresence>
            {selectedItem && (
              <>
                <motion.div
                  className="fixed inset-0 bg-black/80 z-50"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setSelectedItem(null)}
                />
                <motion.div
                  layoutId={`card-${selectedItem}`}
                  className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 max-w-3xl bg-white dark:bg-gray-900 rounded-2xl overflow-hidden z-50 shadow-2xl"
                >
                  {(() => {
                    const item = galleryItems.find(
                      (item) => item.id === selectedItem
                    );
                    if (!item) return null;

                    return (
                      <>
                        <div className="relative h-72 sm:h-96 w-full">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            priority
                            className="object-cover"
                          />
                          <button
                            className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedItem(null);
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </button>
                        </div>
                        <div className="p-6 sm:p-8">
                          <span className="inline-block px-3 py-1 text-xs font-semibold bg-blue-600 text-white rounded-full mb-3">
                            {item.category}
                          </span>
                          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                            {item.title}
                          </h2>
                          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-6">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 mr-1"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                clipRule="evenodd"
                              />
                            </svg>
                            {item.date}
                            <span className="mx-2">•</span>
                            <span>{item.attendees} attendees</span>
                          </div>

                          <p className="text-gray-600 dark:text-gray-300 mb-6">
                            {item.description}
                          </p>

                          <div className="mb-6">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                              Event Highlights
                            </h3>
                            <ul className="space-y-2">
                              {item.highlights.map((highlight, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-center text-gray-600 dark:text-gray-300"
                                >
                                  <svg
                                    className="h-5 w-5 text-blue-500 mr-2"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M5 13l4 4L19 7"
                                    />
                                  </svg>
                                  {highlight}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="flex justify-end">
                            <motion.button
                              className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedItem(null);
                              }}
                            >
                              Close
                            </motion.button>
                          </div>
                        </div>
                      </>
                    );
                  })()}
                </motion.div>
              </>
            )}
          </AnimatePresence>

          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <button className="px-10 py-4 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1">
              Explore Our Archives
            </button>
          </motion.div>
        </div>
      </TracingBeam>
    </div>
  );
}

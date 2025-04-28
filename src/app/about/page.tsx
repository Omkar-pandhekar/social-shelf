"use client";
import React from "react";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <TracingBeam className="px-6 py-12">
        <div className="max-w-4xl mx-auto space-y-8 pb-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
            About Social Shelf
          </h1>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Our Mission
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              At Social Shelf, we&apos;re building a community where book lovers
              can connect, discover new reads, and share their literary
              journeys. We believe that reading is both a personal adventure and
              a social experience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Our Story
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Social Shelf started as a passion project by a small team of
              readers and developers who wanted to create a dedicated space for
              bibliophiles. We launched in 2023 with the goal of combining the
              best features of social networks with the unique needs of book
              enthusiasts.
            </p>
            <div className="mt-6 rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2090&q=80"
                alt="Books on shelves"
                className="w-full h-auto"
              />
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              What We Offer
            </h2>
            <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-400">
              <li className="flex items-start">
                <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300 mr-3">
                  •
                </span>
                <span>Virtual bookshelves to organize your collection</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300 mr-3">
                  •
                </span>
                <span>Reading challenges and tracking</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300 mr-3">
                  •
                </span>
                <span>Book recommendations based on your taste</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300 mr-3">
                  •
                </span>
                <span>Community discussions and reading groups</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Our Team
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              The passionate individuals behind Social Shelf are book
              enthusiasts, tech lovers, and community builders.
            </p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
                    alt="Team Member"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 text-center">
                  Sarah Johnson
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                  Founder & CEO
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
                    alt="Team Member"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 text-center">
                  David Chen
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                  Lead Developer
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
                    alt="Team Member"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 text-center">
                  Maya Patel
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                  Community Manager
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Our Values
            </h2>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100">
                  Community First
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  We believe that readers thrive in supportive communities.
                  Every feature we build is designed to foster connections and
                  meaningful discussions.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100">
                  Diversity in Reading
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  We promote diverse voices and perspectives in literature,
                  helping readers discover books from authors of all backgrounds
                  and cultures.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100">
                  Privacy Respect
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Your reading habits are personal. We respect your privacy and
                  give you control over what you share with others.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100">
                  Continuous Learning
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Books are about growth and learning. We constantly improve our
                  platform based on community feedback and changing needs.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Frequently Asked Questions
            </h2>
            <div className="mt-6 space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                  Is Social Shelf free to use?
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Yes, Social Shelf is free to join and use. We offer premium
                  features for subscribers, but the core functionality is
                  available to everyone.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                  How do I track my reading progress?
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  You can easily update your reading status for any book in your
                  library. Mark books as &quot;Want to Read,&quot;
                  &quot;Currently Reading,&quot; or &quot;Read,&quot; and track
                  your page progress.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                  Can I import my books from other platforms?
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Yes, Social Shelf allows you to import your library from
                  Goodreads, StoryGraph, and other platforms to make your
                  transition seamless.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                  How do reading groups work?
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  You can create or join reading groups based on genres,
                  authors, or specific books. Each group has discussion boards,
                  reading schedules, and virtual meetups.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Join Our Community
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Whether you&apos;re a casual reader or a dedicated bibliophile,
              there&apos;s a place for you on Social Shelf. Join us today and
              connect with readers from around the world.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <button className="inline-flex justify-center items-center px-4 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                Sign Up
              </button>
              <button className="inline-flex justify-center items-center px-4 py-2.5 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700">
                Learn More
              </button>
            </div>
          </section>
        </div>
      </TracingBeam>
    </div>
  );
}

export function TracingBeamDemo() {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <p className="text-xl mb-4">{item.title}</p>

            <div className="text-sm prose prose-sm dark:prose-invert">
              {item?.image && (
                <img
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
          Sit duis est minim proident non nisi velit non consectetur. Esse
          adipisicing laboris consectetur enim ipsum reprehenderit eu deserunt
          Lorem ut aliqua anim do. Duis cupidatat qui irure cupidatat incididunt
          incididunt enim magna id est qui sunt fugiat. Laboris do duis pariatur
          fugiat Lorem aute sit ullamco. Qui deserunt non reprehenderit dolore
          nisi velit exercitation Lorem qui do enim culpa.
        </p>
      </>
    ),
    badge: "React",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
          Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
          deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
          non voluptate qui aliquip esse tempor.
        </p>
      </>
    ),
    badge: "Changelog",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
          Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
          deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
          non voluptate qui aliquip esse tempor.
        </p>
      </>
    ),
    badge: "Launch Week",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

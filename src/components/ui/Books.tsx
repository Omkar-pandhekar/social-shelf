import React from "react";

const Books = () => {
  return (
    <section className="py-12 sm:py-16">
      <div className="container p-6 mx-auto space-y-8">
        <div className="space-y-4 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-primary dark:text-white">
            Featured Books
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            Discover our collection of best-selling books and literary
            masterpieces
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <article className="flex flex-col overflow-hidden transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 bg-white dark:bg-black">
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label="The Midnight Library"
              className="relative block overflow-hidden group"
            >
              <img
                alt="The Midnight Library cover"
                className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-105"
                src="https://source.unsplash.com/400x600/?book,library"
              />
            </a>
            <div className="flex flex-col flex-1 p-6">
              <a
                rel="noopener noreferrer"
                href="#"
                className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-primary uppercase hover:underline"
              >
                Fiction
              </a>
              <h3 className="mb-3 text-xl font-semibold leading-snug text-primary dark:text-white">
                The Midnight Library
              </h3>
              <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                By Matt Haig
              </p>
              <div className="flex items-center justify-between pt-4 mt-auto border-t border-gray-200 dark:border-gray-700">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Available
                </span>
                <button className="px-4 py-2 text-sm font-medium text-black transition-colors duration-200 bg-primary rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                  Rent Now
                </button>
              </div>
            </div>
          </article>
          <article className="flex flex-col overflow-hidden transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 bg-white dark:bg-black">
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label="Atomic Habits"
              className="relative block overflow-hidden group"
            >
              <img
                alt="Atomic Habits cover"
                className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-105"
                src="https://source.unsplash.com/400x600/?book,self-help"
              />
            </a>
            <div className="flex flex-col flex-1 p-6">
              <a
                rel="noopener noreferrer"
                href="#"
                className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-primary uppercase hover:underline"
              >
                Self-Help
              </a>
              <h3 className="mb-3 text-xl font-semibold leading-snug text-primary dark:text-white">
                Atomic Habits
              </h3>
              <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                By James Clear
              </p>
              <div className="flex items-center justify-between pt-4 mt-auto border-t border-gray-200 dark:border-gray-700">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Available
                </span>
                <button className="px-4 py-2 text-sm font-medium text-white transition-colors duration-200 bg-primary rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                  Rent Now
                </button>
              </div>
            </div>
          </article>
          <article className="flex flex-col overflow-hidden transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 bg-white dark:bg-black">
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label="Project Hail Mary"
              className="relative block overflow-hidden group"
            >
              <img
                alt="Project Hail Mary cover"
                className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-105"
                src="https://source.unsplash.com/400x600/?book,science-fiction"
              />
            </a>
            <div className="flex flex-col flex-1 p-6">
              <a
                rel="noopener noreferrer"
                href="#"
                className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-primary uppercase hover:underline"
              >
                Sci-Fi
              </a>
              <h3 className="mb-3 text-xl font-semibold leading-snug text-primary dark:text-white">
                Project Hail Mary
              </h3>
              <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                By Andy Weir
              </p>
              <div className="flex items-center justify-between pt-4 mt-auto border-t border-gray-200 dark:border-gray-700">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Available
                </span>
                <button className="px-4 py-2 text-sm font-medium text-white transition-colors duration-200 bg-primary rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                  Rent Now
                </button>
              </div>
            </div>
          </article>
          <article className="flex flex-col overflow-hidden transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 bg-white dark:bg-black">
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label="Klara and the Sun"
              className="relative block overflow-hidden group"
            >
              <img
                alt="Klara and the Sun cover"
                className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-105"
                src="https://source.unsplash.com/400x600/?book,literature"
              />
            </a>
            <div className="flex flex-col flex-1 p-6">
              <a
                rel="noopener noreferrer"
                href="#"
                className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-primary uppercase hover:underline"
              >
                Literary Fiction
              </a>
              <h3 className="mb-3 text-xl font-semibold leading-snug text-primary dark:text-white">
                Klara and the Sun
              </h3>
              <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                By Kazuo Ishiguro
              </p>
              <div className="flex items-center justify-between pt-4 mt-auto border-t border-gray-200 dark:border-gray-700">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Available
                </span>
                <button className="px-4 py-2 text-sm font-medium text-white transition-colors duration-200 bg-primary rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                  Rent Now
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Books;

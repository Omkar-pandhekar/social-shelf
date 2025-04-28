"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.button
      aria-label="Toggle Dark Mode"
      type="button"
      whileTap={{
        scale: 0.7,
        rotate: 360,
        transition: { duration: 0.2 },
      }}
      whileHover={{ scale: 1.2 }}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {mounted && (theme === "dark" || theme === "dark") ? (
        <BsSunFill size={24} />
      ) : (
        <BsMoonFill size={24} />
      )}
    </motion.button>
  );
}

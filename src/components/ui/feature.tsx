import React from "react";
import { useId } from "react";
import { grid } from "../constants/data";

export default function FeaturesSection() {
  return (
    <div className="py-10 lg:py-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-2 max-w-7xl mx-auto">
        {grid.map((feature) => (
          <div
            key={feature.id}
            className="relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden"
          >
            <Gridp size={20} />
            <p className="text-base font-bold text-neutral-800 dark:text-white relative z-20">
              {feature.title}
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 mt-4 text-base font-normal relative z-20">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

type Square = {
  id: number;
  x: number;
  y: number;
};

export const Gridp = ({
  pattern,
  size,
}: {
  pattern?: Square[];
  size?: number;
}) => {
  // Generate 5 random squares with unique IDs
  const p =
    pattern ??
    Array.from({ length: 5 }, (_, index) => ({
      id: index,
      x: Math.floor(Math.random() * 4) + 7,
      y: Math.floor(Math.random() * 6) + 1,
    }));

  return (
    <div className="pointer-events-none absolute left-1/2 top-0  -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r  [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 from-zinc-100/30 to-zinc-300/30 dark:to-zinc-900/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full  mix-blend-overlay dark:fill-white/10 dark:stroke-white/10 stroke-black/10 fill-black/10"
        />
      </div>
    </div>
  );
};

interface GridPatternProps {
  width: number;
  height: number;
  x: string | number;
  y: string | number;
  squares?: Square[];
  className?: string;
  [key: string]: unknown;
}

export function GridPattern({
  width,
  height,
  x,
  y,
  squares,
  ...props
}: GridPatternProps) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map((square) => (
            <rect
              strokeWidth="0"
              key={square.id}
              width={width + 1}
              height={height + 1}
              x={square.x * width}
              y={square.y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}

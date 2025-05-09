"use client";

import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationLinks } from "./constants";
import MobileNav from "./mobile-nav";
import { ModeToggle } from "./modeToggle";
import SectionContainer from "./SectionContainer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  const pathName = usePathname();

  return (
    <SectionContainer>
      <header className="z-40 bg-transparent md:pb-10 md:pt-10">
        <div className="mx-auto flex items-center justify-between">
          <div className="flex-1">
            <Link
              href="/"
              className=" text-3xl font-extrabold flex items-center"
              aria-label="Social Shelf"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              <span className="ml-2">Social Shelf</span>
            </Link>
          </div>
          <div className="flex-1 flex items-center justify-center space-x-6 text-base leading-2">
            <div className="hidden space-x-12 sm:flex">
              {navigationLinks.map(({ title, href }) => {
                const active = pathName?.includes(href);
                return (
                  <Link
                    prefetch
                    key={title}
                    href={href}
                    className={classNames(
                      "horizontal-underline text-base mx-10",
                      {
                        "horizontal-underline-active": active,
                      }
                    )}
                    aria-label={title}
                  >
                    <span className="font-semibold tracking-wide">{title}</span>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="flex-1 flex items-center justify-end space-x-6">
            <DropdownMenu>
              <DropdownMenuTrigger
                className={classNames("horizontal-underline text-base mx-10", {
                  "horizontal-underline-active":
                    pathName === "/login" || pathName === "/register",
                })}
              >
                Login
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <Link href="/login">
                  <DropdownMenuItem>Login</DropdownMenuItem>
                </Link>
                <DropdownMenuSeparator />
                <Link href="/register">
                  <DropdownMenuItem>Sign Up</DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
            <ModeToggle />
            <MobileNav />
          </div>
        </div>
      </header>
    </SectionContainer>
  );
}

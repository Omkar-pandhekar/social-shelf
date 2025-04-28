import Link from "next/link";
import { Suspense } from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import SectionContainer from "./SectionContainer";
import { siteMetadata } from "./constants";
import { SiLeetcode } from "react-icons/si";

export default function Footer() {
  return (
    <SectionContainer>
      <footer>
        <div className="mb-0 flex flex-col justify-start space-y-1.5 space-x-0 py-10 text-black dark:text-gray-500">
          <Suspense fallback={<div className="h-6" />}></Suspense>
          <div className="flex flex-col items-center space-y-2 text-sm sm:flex-row sm:justify-between sm:text-base">
            <ul className="flex space-x-2">
              <li>{`© ${new Date().getFullYear()}`}</li>
              <li>{` • `}</li>
              <li>
                <Link href="/">{siteMetadata.title}</Link>
              </li>
            </ul>
            <ul className="flex cursor-pointer items-center space-x-5">
              <li>
                <a
                  href={siteMetadata.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="linkedin"
                >
                  <AiFillLinkedin className="sm:text-lg" />
                </a>
              </li>
              <li>
                <a
                  href={siteMetadata.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="github"
                >
                  <FaGithub className="sm:text-lg" />
                </a>
              </li>
              <li>
                <a
                  href={siteMetadata.twitter}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="twitter"
                >
                  <FaXTwitter className="sm:text-lg" />
                </a>
              </li>
              <li>
                <a
                  href={siteMetadata.leetcode}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="steam"
                >
                  <SiLeetcode className="sm:text-lg" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </SectionContainer>
  );
}

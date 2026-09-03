import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareGithub,
  faSquareLinkedin,
  faInstagramSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="shrink-0 border-t border-gray-200 py-4 mt-2 mx-8 ">
      <div className="flex flex-col items-center justify-center">
        <p className="flex items-center justify-center gap-3 text-sm text-gray-500 text-center">
          <span>© 2026 Penny Pilot</span>
          <span>•</span>
          <span>Developed by Aryan Negi</span>
          <span>•</span>
          <span>Every penny has a story</span>
        </p>

        <ul className="flex items-center gap-6 py-3">
          <li>
            <Link href="https://github.com/xNegi">
              <FontAwesomeIcon
                icon={faSquareGithub}
                className="text-3xl text-gray-600 hover:text-black transition"
              />
            </Link>
          </li>

          <li>
            <Link href="https://www.linkedin.com/in/aryan-negi-69934328b/">
              <FontAwesomeIcon
                icon={faSquareLinkedin}
                className="text-3xl text-gray-600 hover:text-black transition"
              />
            </Link>
          </li>

          <li>
            <Link href="https://www.instagram.com/_aryan_negi__/">
              <FontAwesomeIcon
                icon={faInstagramSquare}
                className="text-3xl text-gray-600 hover:text-black transition"
              />
            </Link>
          </li>

          <li>
            <Link href="https://x.com/negiop550">
              <FontAwesomeIcon
                icon={faTwitterSquare}
                className="text-3xl text-gray-600 hover:text-black transition"
              />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

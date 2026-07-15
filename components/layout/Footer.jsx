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
    <footer className="h-26 border-t border-gray-200 py-6 mt-8">
      <div className="flex flex-col items-center justify-center">
        <p className="text-sm text-gray-500 text-center">
          © 2026 Penny Pilot • Developed by Aryan Negi • Every penny has a story
        </p>

        <ul className="flex items-center gap-6 py-3">
          <li>
            <Link href="https://github.com/xNegi">
              <FontAwesomeIcon 
                icon={faSquareGithub} 
                className="text-2xl text-gray-600 hover:text-black transition" />
            </Link>
          </li>

          <li>
            <Link href="https://www.linkedin.com/in/aryan-negi-69934328b/">
              <FontAwesomeIcon 
                icon={faSquareLinkedin} 
                className="text-2xl text-gray-600 hover:text-black transition" />
            </Link>
          </li>

          <li>
            <Link href="https://www.instagram.com/_aryan_negi__/">
              <FontAwesomeIcon 
                icon={faInstagramSquare} 
                className="text-2xl text-gray-600 hover:text-black transition" />
            </Link>
          </li>

          <li>
            <Link href="https://x.com/negiop550">
              <FontAwesomeIcon 
              icon={faTwitterSquare} 
              className="text-2xl text-gray-600 hover:text-black transition"/>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

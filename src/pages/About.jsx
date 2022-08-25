import Heading from "../components/Heading";
import TechnologyCard from "../components/TechnologyCard";
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiFigma,
} from "react-icons/si";
import { FaGit, FaNpm } from "react-icons/fa";

const technologyCards = [
  { title: "React.js", icon: <SiReact className="w-auto h-10" /> },
  { title: "Javascript", icon: <SiJavascript className="w-auto h-10" /> },
  { title: "HTML", icon: <SiHtml5 className="w-auto h-10" /> },
  { title: "CSS", icon: <SiCss3 className="w-auto h-10" /> },
  { title: "TailwindCSS", icon: <SiTailwindcss className="w-auto h-10" /> },
  { title: "Figma", icon: <SiFigma className="w-auto h-10" /> },
  { title: "git", icon: <FaGit className="w-auto h-10" /> },
  { title: "npm", icon: <FaNpm className="w-auto h-10" /> },
];

const About = () => {
  return (
    <div className="flex flex-col mx-24 gap-36">
      <div className="grid grid-cols-1">
        <div className="mt-10">
          <Heading title="Celine Holvert" />
          <p className="text-base">
            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
            tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrum exercitationem ullam corporis suscipit
            laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute
            iure reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt
            in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div className="relative mt-14 w-min place-self-center">
          <img
            src=".\images\portrait.png"
            alt="Portræt af Celine Holvert"
            className="min-w-[298px] min-h-[298px]"
          />
          <svg
            className="absolute bottom-0 left-4 -z-10"
            width="270"
            height="168"
            viewBox="0 0 270 168"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M270 63.603C270 145.36 237.514 168 155.5 168C73.4857 168 0 134.757 0 53C0 -28.7572 54.9855 10.103 137 10.103C219.014 10.103 270 -18.1542 270 63.603Z"
              fill="#F9FAFB"
            />
          </svg>
          <svg
            className="absolute -bottom-9 -right-10"
            width="172"
            height="161"
            viewBox="0 0 172 161"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M153.757 49.9641C163.202 75.913 149.823 104.605 123.874 114.05C97.9249 123.494 69.2328 110.115 59.7882 84.1661C50.3436 58.2172 89.0083 17.1295 114.957 7.68486C140.906 -1.75977 144.313 24.0152 153.757 49.9641Z"
              fill="#E9D5FF"
            />
            <path
              d="M86.0198 69.2467C103.956 79.602 110.101 102.537 99.7457 120.473C89.3904 138.409 66.4557 144.554 48.5198 134.199C30.5838 123.843 34.2423 71.9279 44.5977 53.9919C54.953 36.0559 68.0838 58.8914 86.0198 69.2467Z"
              fill="#F3E8FF"
            />
            <path
              d="M41.533 104.635C54.5075 109.357 61.1971 123.703 56.4748 136.677C51.7525 149.652 37.4065 156.342 24.432 151.619C11.4576 146.897 9.30051 117.174 14.0228 104.199C18.7451 91.2248 28.5586 99.9123 41.533 104.635Z"
              fill="#FAF5FF"
            />
          </svg>
        </div>
      </div>
      <div>
        <Heading title="Teknologier" />
        <div className="flex flex-wrap gap-10">
          {technologyCards.map((technologyCard) => (
            <TechnologyCard
              title={technologyCard.title}
              icon={technologyCard.icon}
              key={technologyCard.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;

import heroImg from "../assets/hero.svg";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="bg-emerald-100 py-24">
      <div className="mx-auto max-w-7xl px-8 grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-7xl font-bold tracking-wider">I'm Sushrut</h1>
          <p className="mt-4 3-xl text-slate-700 capitalize tracking-wide">
            Front-End Developer (React)
          </p>
          <p className="mt-4 3-xl text-slate-700 capitalize tracking-wide">
            turning ideas into reality
          </p>
          <div className="flex gap-x-4 mt-4">
            <a href="https://www.linkedin.com/in/sushrut-gabhane-5a3695196/">
              <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a href="https://github.com/Sush25N">
              <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a href="https://twitter.com/Sushrut861">
              <FaTwitterSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
          </div>
        </article>
        <article>
          <img src={heroImg} className="h-80 lg:h-96" />
        </article>
      </div>
    </div>
  );
};

export default Hero;

import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillInstagram,
  AiOutlineClose,
} from "react-icons/ai";
import { HiDownload } from "react-icons/hi";
import Image from "next/image";
import PrathamMathurProfilePic from "../public/assets/PrathamMathurProfilePic-removebg-preview.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import allProjectsData from "../AllImages";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import DisplayCard from "../components/DisplayCard";
import useScreenWidth from "../components/hook";

export default function Home() {
  const getSystemTheme = () => window.matchMedia("(prefers-color-scheme: light)").matches;

  const isDark = typeof window !== "undefined"
    ? window.localStorage.getItem("darkMode") !== null
      ? window.localStorage.getItem("darkMode") === "false"
      : getSystemTheme()
    : true;

  const [darkMode, setDarkMode] = useState(isDark);

  useEffect(() => {
    window.localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);
  const [projects, setProjects] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const screenWidth = useScreenWidth();

  useEffect(() => {
    setProjects(allProjectsData);
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
    });
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    const menuList = document.querySelector(".mobile-menu");
    menuList?.classList.toggle("show-menu");
  };

  return (
    <div className={darkMode ? "dark bg-gray-900" : "bg-white"}>
      <Head>
        <title>Pratham Mathur | Software Engineer</title>
        <meta name="description" content="Pratham Mathur - Software Engineer Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header Section with Modern Navigation */}
      <header id="home" className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 shadow-sm border-b-[1px] border-white-800/100 dark:border-gray-800/100">
        <nav className="flex justify-between items-center max-w-7xl mx-auto py-10 px-6">
          <a href="#home" className="text-xl font-bold bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">
            Pratham Mathur
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#info-section" className="hover:text-teal-500 dark:text-white transition-all">About</a>
            <a href="#skills-section" className="hover:text-teal-500 dark:text-white transition-all">Skills</a>
            <a href="#work-section" className="hover:text-teal-500 dark:text-white transition-all">Experience</a>
            <a href="#personal-projects-section" className="hover:text-teal-500 dark:text-white transition-all">Projects</a>
            <a href="#contact" className="hover:text-teal-500 dark:text-white transition-all">Contact</a>
            <a
              onClick={() => {
                window.open("https://drive.google.com/file/d/1XRm8B4W3DYDOZLRzwP76rVL3gu7tJe-5/view?usp=drive_link", "_blank");
              }}
              className="flex items-center gap-2 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white px-4 py-2 rounded-lg transition-all"
            >
              Resume <HiDownload />
            </a>
          </div>

          {/* Theme Toggle and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
              aria-label="Toggle dark mode"
            >
              <BsFillMoonStarsFill className="text-xl dark:text-white" />
            </button>

            <button
              className="md:hidden p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <AiOutlineClose className="text-2xl dark:text-white" />
              ) : (
                <BiMenu className="text-2xl dark:text-white" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Menu */}
        <div className={`mobile-menu fixed inset-0 z-40 bg-white dark:bg-gray-900 transition-all duration-300 ${menuOpen ? 'opacity-100 visible h-100vh' : 'opacity-0 invisible'} md:hidden`}>
          <div className="flex flex-col items-center justify-center h-full space-y-8 text-xl">
            <a href="#info-section" onClick={toggleMenu} className="hover:text-teal-500 dark:text-white">About</a>
            <a href="#skills-section" onClick={toggleMenu} className="hover:text-teal-500 dark:text-white">Skills</a>
            <a href="#work-section" onClick={toggleMenu} className="hover:text-teal-500 dark:text-white">Experience</a>
            <a href="#personal-projects-section" onClick={toggleMenu} className="hover:text-teal-500 dark:text-white">Projects</a>
            <a href="#contact" onClick={toggleMenu} className="hover:text-teal-500 dark:text-white">Contact</a>
            <a
              href="https://drive.google.com/file/d/1AxOW_xXVet1L9jwtn5--AUloO0ffQvq5/view?usp=sharing"
              onClick={toggleMenu}
              className="flex items-center gap-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-6 py-3 rounded-lg"
            >
              Resume <HiDownload />
            </a>
          </div>
        </div>
      </header>

      <main className="bg-white dark:bg-gray-900">
        {/* Hero Section */}
        <section
          className="min-h-screen max-w-7xl mx-auto px-6 md:px-10 pt-20 pb-32 flex flex-col items-center justify-center"
          id="info-section"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full gap-16">
            <div className="md:w-1/2 text-center md:text-left grid place-items-center md:place-items-start">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200 mb-6">
                <span className="relative flex h-3 w-3 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-500"></span>
                </span>
                Available for work
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-4 dark:text-white">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">Pratham</span>
              </h1>

              <h2 className="text-2xl md:text-3xl mb-6 text-gray-700 dark:text-gray-300">
                Software Engineer
              </h2>

              <p className="text-lg mb-8 text-gray-600 dark:text-gray-400 max-w-xl text-center md:text-start">
                I'm a <span className="font-semibold text-teal-500">MERN Stack Developer</span> with 1+ year of experience, focused on building responsive UIs using React, Redux Toolkit, and modern JavaScript frameworks.
              </p>

              <div className="flex justify-center md:justify-start gap-4 mb-10">
                <a
                  href="https://www.linkedin.com/in/pratham-mathur-5b99681ab/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full text-gray-700 hover:text-blue-500 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:text-blue-400 transition-all"
                  aria-label="LinkedIn"
                >
                  <AiFillLinkedin className="text-2xl" />
                </a>
                <a
                  href="https://github.com/PrathamMathur11"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full text-gray-700 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:text-white transition-all"
                  aria-label="GitHub"
                >
                  <AiFillGithub className="text-2xl" />
                </a>
                <a
                  href="https://www.instagram.com/pratham_mathur11/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full text-gray-700 hover:text-pink-600 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:text-pink-400 transition-all"
                  aria-label="Instagram"
                >
                  <AiFillInstagram className="text-2xl" />
                </a>
              </div>

              <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                <a href="#contact" className="px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-medium shadow-lg shadow-teal-500/20 transition-all">
                  Contact Me
                </a>
                <a href="#personal-projects-section" className="px-6 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-white font-medium transition-all">
                  View Projects
                </a>
              </div>
            </div>

            <div className="md:w-1/2 mt-16 md:mt-0">
              <div className="relative mx-auto w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 animate-pulse blur-xl opacity-30"></div>
                <div className="relative bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full overflow-hidden w-full h-full">
                  <Image
                    src={PrathamMathurProfilePic}
                    style={{
                      objectFit: "cover",
                      scale: "1.5",
                      filter: "drop-shadow(-7px 4px 4px rgba(0,0,0,0.3))",
                    }}
                    layout="fill"
                    alt="Pratham Mathur"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Display Card Section */}
        <section id="display-section" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <DisplayCard />
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills-section" className="py-20 max-w-7xl mx-auto px-6 md:px-10" data-aos="fade-up">
          <div className="mb-16 text-center">
            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200 mb-4">
              Skillset
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white">My Expertise</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Working in a fast-paced <span className="text-teal-500">agile work environment</span>, I value teamwork and continuous learning. With extensive <span className="text-teal-500">MERN stack</span> experience, I can quickly adapt to new technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Frontend Stack */}
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all border border-gray-100 dark:border-gray-800 hover:border-teal-200 dark:hover:border-teal-800 group"
            >
              <div className="w-16 h-16 mb-6 rounded-2xl bg-teal-50 dark:bg-teal-900/30 flex items-center justify-center group-hover:bg-teal-100 dark:group-hover:bg-teal-900/50 transition-all">
                <Image
                  src={design}
                  width={40}
                  height={40}
                  alt="Frontend Development"
                />
              </div>

              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Frontend Stack</h3>

              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Creating elegant, responsive designs with modern frameworks and tools.
              </p>

              <h4 className="text-sm font-semibold uppercase text-teal-600 dark:text-teal-400 mb-4">Tech I Use</h4>

              <div className="flex flex-wrap align-items-center gap-4">
                <div className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-teal-500 mr-2"></span>
                  <span className="text-gray-700 dark:text-gray-300">ReactJS / React 17/18</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-teal-500 mr-2"></span>
                  <span className="text-gray-700 dark:text-gray-300">NextJS</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-teal-500 mr-2"></span>
                  <span className="text-gray-700 dark:text-gray-300">Bootstrap</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-teal-500 mr-2"></span>
                  <span className="text-gray-700 dark:text-gray-300">Figma</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-teal-500 mr-2"></span>
                  <span className="text-gray-700 dark:text-gray-300">Material UI</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-teal-500 mr-2"></span>
                  <span className="text-gray-700 dark:text-gray-300">TailwindCSS</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-teal-500 mr-2"></span>
                  <span className="text-gray-700 dark:text-gray-300">State Management (Redux Toolkit / Context API)</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-teal-500 mr-2"></span>
                  <span className="text-gray-700 dark:text-gray-300">Responsive Web Design</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-teal-500 mr-2"></span>
                  <span className="text-gray-700 dark:text-gray-300">Problem Solving & Debugging</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-teal-500 mr-2"></span>
                  <span className="text-gray-700 dark:text-gray-300">Security & Authentication (JWT, OAuth)</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-teal-500 mr-2"></span>
                  <span className="text-gray-700 dark:text-gray-300">API Integration (REST)</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-teal-500 mr-2"></span>
                  <span className="text-gray-700 dark:text-gray-300">React Query</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-teal-500 mr-2"></span>
                  <span className="text-gray-700 dark:text-gray-300">Chart.js</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-teal-500 mr-2"></span>
                  <span className="text-gray-700 dark:text-gray-300">Payment Gateway (Razorpay)</span>
                </div>
              </div>
            </div>

            {/* Backend Stack */}
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all border border-gray-100 dark:border-gray-800 hover:border-teal-200 dark:hover:border-teal-800 group"
            >
              <div className="w-16 h-16 mb-6 rounded-2xl bg-teal-50 dark:bg-teal-900/30 flex items-center justify-center group-hover:bg-teal-100 dark:group-hover:bg-teal-900/50 transition-all">
                <Image
                  src={code}
                  width={40}
                  height={40}
                  alt="Backend Development"
                />
              </div>

              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Backend Stack</h3>

              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Building robust server-side solutions and database architecture for scalable applications.
              </p>

              <h4 className="text-sm font-semibold uppercase text-teal-600 dark:text-teal-400 mb-4">Tech I Use</h4>

              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-teal-500 mr-2"></span>
                  <span className="text-gray-700 dark:text-gray-300">NodeJS</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-teal-500 mr-2"></span>
                  <span className="text-gray-700 dark:text-gray-300">ExpressJS</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-teal-500 mr-2"></span>
                  <span className="text-gray-700 dark:text-gray-300">MongoDB</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-teal-500 mr-2"></span>
                  <span className="text-gray-700 dark:text-gray-300">FIREBASE</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-teal-500 mr-2"></span>
                  <span className="text-gray-700 dark:text-gray-300">SQL</span>
                </div>
              </div>
            </div>

            {/* Other Skills */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all border border-gray-100 dark:border-gray-800 hover:border-teal-200 dark:hover:border-teal-800 group md:col-span-2 lg:col-span-1"
            >
              <div className="w-16 h-16 mb-6 rounded-2xl bg-teal-50 dark:bg-teal-900/30 flex items-center justify-center group-hover:bg-teal-100 dark:group-hover:bg-teal-900/50 transition-all">
                <Image
                  src={consulting}
                  width={40}
                  height={40}
                  alt="Additional Skills"
                />
              </div>

              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Other Skills</h3>

              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Additional technical and soft skills that enhance my development capabilities.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-semibold uppercase text-teal-600 dark:text-teal-400 mb-4">Tech Skills</h4>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-teal-500 mr-2"></span>
                      <span className="text-gray-700 dark:text-gray-300">C / C++ / Java</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-teal-500 mr-2"></span>
                      <span className="text-gray-700 dark:text-gray-300">HTML / CSS / JS</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-teal-500 mr-2"></span>
                      <span className="text-gray-700 dark:text-gray-300">Typescript</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-teal-500 mr-2"></span>
                      <span className="text-gray-700 dark:text-gray-300">Git / GitHub</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-teal-500 mr-2"></span>
                      <span className="text-gray-700 dark:text-gray-300">Deployment (CI/CD)</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold uppercase text-teal-600 dark:text-teal-400 mb-4">Soft Skills</h4>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-teal-500 mr-2"></span>
                      <span className="text-gray-700 dark:text-gray-300">Problem Solving</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-teal-500 mr-2"></span>
                      <span className="text-gray-700 dark:text-gray-300">Team Work</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-teal-500 mr-2"></span>
                      <span className="text-gray-700 dark:text-gray-300">Leadership</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-teal-500 mr-2"></span>
                      <span className="text-gray-700 dark:text-gray-300">Agile</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Work Experience Section */}
        <section id="work-section" className="py-20 px-6 bg-gray-50 dark:bg-gray-800" data-aos="fade-up">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="mb-16 text-center">
              <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200 mb-4">
                Experience
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white">Work History</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                My professional journey and the skills I've developed along the way
              </p>
            </div>
          </div>

          {/* Current Job */}
          <div className="max-w-[1440px] mx-auto mb-16 bg-white dark:bg-gray-900 rounded-2xl p-6 md:p-10 shadow-xl border border-gray-100 dark:border-gray-800" data-aos="fade-up">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 mb-4">
                  Current Position
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900 dark:text-white">Software Developer</h3>
                <h4 className="text-xl font-medium mb-3 text-teal-600 dark:text-teal-400">Wedig Tech Solutions</h4>
                <p className="text-gray-500 dark:text-gray-400 mb-6">12/2023 - Present</p>
              </div>

              <div className="md:w-2/3">
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 dark:bg-teal-900 flex items-center justify-center text-teal-600 dark:text-teal-400 mt-1">•</span>
                    <p className="text-gray-700 dark:text-gray-300">
                      Developed a <span className="text-teal-500 font-medium">scalable Fund SaaS platform</span>, owning frontend responsibilities and collaborating in an Agile environment.
                    </p>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 dark:bg-teal-900 flex items-center justify-center text-teal-600 dark:text-teal-400 mt-1">•</span>
                    <p className="text-gray-700 dark:text-gray-300">
                      Designed frontend architecture with <span className="text-teal-500 font-medium">React 18, Redux Toolkit, and Vite</span>, creating reusable UI components.
                    </p>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 dark:bg-teal-900 flex items-center justify-center text-teal-600 dark:text-teal-400 mt-1">•</span>
                    <p className="text-gray-700 dark:text-gray-300">
                      Integrated <span className="text-teal-500 font-medium">Razorpay and Stripe</span> for subscription billing and secure checkout flows.
                    </p>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 dark:bg-teal-900 flex items-center justify-center text-teal-600 dark:text-teal-400 mt-1">•</span>
                    <p className="text-gray-700 dark:text-gray-300">
                      Implemented <span className="text-teal-500 font-medium">RBAC</span> for route and component-level access control.
                    </p>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 dark:bg-teal-900 flex items-center justify-center text-teal-600 dark:text-teal-400 mt-1">•</span>
                    <p className="text-gray-700 dark:text-gray-300">
                      Built a secure <span className="text-teal-500 font-medium">document management system</span> with nested folders and metadata tagging.
                    </p>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 dark:bg-teal-900 flex items-center justify-center text-teal-600 dark:text-teal-400 mt-1">•</span>
                    <p className="text-gray-700 dark:text-gray-300">
                      Developed real-time <span className="text-teal-500 font-medium">analytics dashboards</span> using Chart.js.
                    </p>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 dark:bg-teal-900 flex items-center justify-center text-teal-600 dark:text-teal-400 mt-1">•</span>
                    <p className="text-gray-700 dark:text-gray-300">
                      Integrated <span className="text-teal-500 font-medium">social login</span> (Google, LinkedIn) and JWT-based session management.
                    </p>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 dark:bg-teal-900 flex items-center justify-center text-teal-600 dark:text-teal-400 mt-1">•</span>
                    <p className="text-gray-700 dark:text-gray-300">
                      Implemented <span className="text-teal-500 font-medium">custom SSO</span> for seamless navigation across modules.
                    </p>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 dark:bg-teal-900 flex items-center justify-center text-teal-600 dark:text-teal-400 mt-1">•</span>
                    <p className="text-gray-700 dark:text-gray-300">
                      Optimized performance with <span className="text-teal-500 font-medium">React Query</span> and Vite for faster builds.
                    </p>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 dark:bg-teal-900 flex items-center justify-center text-teal-600 dark:text-teal-400 mt-1">•</span>
                    <p className="text-gray-700 dark:text-gray-300">
                      Collaborated in Agile sprints, contributing to planning, demos, and code reviews.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="max-w-[1440px] mx-auto mb-16 bg-white dark:bg-gray-900 rounded-2xl p-6 md:p-10 shadow-xl border border-gray-100 dark:border-gray-800" data-aos="fade-up">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 mb-4">
                  Previous Position
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900 dark:text-white">ReactJS Developer Intern</h3>
                <h4 className="text-xl font-medium mb-3 text-teal-600 dark:text-teal-400">Penthara Technologies</h4>
                <p className="text-gray-500 dark:text-gray-400 mb-6">03/2023 - 11/2023</p>
              </div>

              <div className="md:w-2/3">
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 dark:bg-teal-900 flex items-center justify-center text-teal-600 dark:text-teal-400 mt-1">•</span>
                    <p className="text-gray-700 dark:text-gray-300">
                      Worked on the development and deployment of <span className="text-teal-500 font-medium">PowerApps</span> for internal use.
                    </p>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 dark:bg-teal-900 flex items-center justify-center text-teal-600 dark:text-teal-400 mt-1">•</span>
                    <p className="text-gray-700 dark:text-gray-300">
                      Collaborated with senior developers to design and implement <span className="text-teal-500 font-medium">canvas apps</span>.
                    </p>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 dark:bg-teal-900 flex items-center justify-center text-teal-600 dark:text-teal-400 mt-1">•</span>
                    <p className="text-gray-700 dark:text-gray-300">
                      Implemented the feature of <span className="text-teal-500 font-medium">Interdependent Filtering Options</span> in PowerApps Canvas Apps.
                    </p>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 dark:bg-teal-900 flex items-center justify-center text-teal-600 dark:text-teal-400 mt-1">•</span>
                    <p className="text-gray-700 dark:text-gray-300">
                      Using the <span className="text-teal-500 font-medium">SharePoint Framework (SPFx)</span>, created and modified web parts for SharePoint Online and SharePoint Server.
                    </p>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 dark:bg-teal-900 flex items-center justify-center text-teal-600 dark:text-teal-400 mt-1">•</span>
                    <p className="text-gray-700 dark:text-gray-300">
                      Successfully developed and deployed <span className="text-teal-500 font-medium">custom web parts</span> that interacted with SharePoint lists and libraries, which could be synced to Microsoft Teams tabs and channels.
                    </p>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 dark:bg-teal-900 flex items-center justify-center text-teal-600 dark:text-teal-400 mt-1">•</span>
                    <p className="text-gray-700 dark:text-gray-300">
                      Worked on creating <span className="text-teal-500 font-medium">custom Teams Tabs</span> using Teams Toolkit.
                    </p>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 dark:bg-teal-900 flex items-center justify-center text-teal-600 dark:text-teal-400 mt-1">•</span>
                    <p className="text-gray-700 dark:text-gray-300">
                      Completed <span className="text-teal-500 font-medium">Azure Training</span>, including LAMP stack installation in Ubuntu and WordPress setup.
                    </p>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 dark:bg-teal-900 flex items-center justify-center text-teal-600 dark:text-teal-400 mt-1">•</span>
                    <p className="text-gray-700 dark:text-gray-300">
                      Contributed to <span className="text-teal-500 font-medium">Penthara's Webpage</span> using WordPress with HTML, CSS, JavaScript, and PHP.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="achievements-section" className="py-24 max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-16">
            <div className="flex flex-col items-center">
              <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200 mb-5">
                Achievements
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white text-center">My Achievements</h2>
              <div className="h-1 w-20 bg-teal-500 mb-8"></div>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl text-center">
                Highlights of my contributions and accomplishments in software development
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4 mb-4">
                <span className="w-10 h-10 rounded-lg bg-teal-500 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <p className="text-gray-700 dark:text-gray-300 font-medium">
                  Collaborated in Agile teams by participating in sprint planning, code reviews, and delivering clean, scalable code in fast-paced environments.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4 mb-4">
                <span className="w-10 h-10 rounded-lg bg-teal-500 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </span>
                <p className="text-gray-700 dark:text-gray-300 font-medium">
                  Improved frontend performance by migrating projects to Vite, reducing dev server startup time and improving build speeds.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4 mb-4">
                <span className="w-10 h-10 rounded-lg bg-teal-500 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <p className="text-gray-700 dark:text-gray-300 font-medium">
                  Delivered 5+ full-stack features (e.g., payment integration, social login, subscription flows) in production-ready MERN apps within tight sprint deadlines.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4 mb-4">
                <span className="w-10 h-10 rounded-lg bg-teal-500 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
                <p className="text-gray-700 dark:text-gray-300 font-medium">
                  Built a secure document drive system with role-based access control (RBAC), file uploads, and protected routes for a SaaS product.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="certificates-section" className="py-24 px-6 md:px-10 bg-gray-50 dark:bg-gray-800">
          <div className="mb-16 max-w-7xl mx-auto">
            <div className="flex flex-col items-center">
              <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200 mb-5">
                Certifications
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white text-center">Certificates</h2>
              <div className="h-1 w-20 bg-teal-500 mb-8"></div>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl text-center">
                A showcase of my certifications and accomplishments in various technical domains
              </p>
            </div>
          </div>

          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg dark:text-white">Full Stack Web Development</h3>
                  <p className="text-gray-500 dark:text-gray-400">DevTown</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg dark:text-white">MERN and Redux Training</h3>
                  <p className="text-gray-500 dark:text-gray-400">DevTown</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg dark:text-white">HTML/CSS and JavaScript Training</h3>
                  <p className="text-gray-500 dark:text-gray-400">DevTown</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg dark:text-white">Letter Of Recommendation</h3>
                  <p className="text-gray-500 dark:text-gray-400">DevTown</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg dark:text-white">Microsoft Power Platform Fundamentals</h3>
                  <p className="text-gray-500 dark:text-gray-400">Microsoft (PL-900)</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg dark:text-white">Microsoft 365 Fundamentals</h3>
                  <p className="text-gray-500 dark:text-gray-400">Microsoft (MS-900)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="competitions-section" className="py-24 max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-16">
            <div className="flex flex-col items-center">
              <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200 mb-5">
                Competitions
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white text-center">Competition Achievements</h2>
              <div className="h-1 w-20 bg-teal-500 mb-8"></div>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl text-center">
                Recognition and awards from various competitions and events
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-teal-500 rotate-12 opacity-10"></div>
              <div className="flex flex-col gap-4 relative z-10">
                <div className="flex items-center gap-4 mb-2">
                  <span className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </span>
                  <h3 className="font-bold text-xl dark:text-white">SoftTech-Hack Hackathon</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300">Participated in the SoftTech-Hack Hackathon sponsored by RTU</p>
                <div className="mt-2 text-teal-600 dark:text-teal-400 font-medium">
                  RTU
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-teal-500 rotate-12 opacity-10"></div>
              <div className="flex flex-col gap-4 relative z-10">
                <div className="flex items-center gap-4 mb-2">
                  <span className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </span>
                  <h3 className="font-bold text-xl dark:text-white">1st Prize - Bhajan Singing</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300">Won 1st prize in Bhajan Singing Competition</p>
                <div className="mt-2 text-teal-600 dark:text-teal-400 font-medium">
                  Rotary Club
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-teal-500 rotate-12 opacity-10"></div>
              <div className="flex flex-col gap-4 relative z-10">
                <div className="flex items-center gap-4 mb-2">
                  <span className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </span>
                  <h3 className="font-bold text-xl dark:text-white">2nd Position - Robo Race</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300">Achieved 2nd position in Robo Race competition</p>
                <div className="mt-2 text-teal-600 dark:text-teal-400 font-medium">
                  Aadhar Tech Fest
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="personal-projects-section" className="py-20 px-6 md:px-10 bg-gray-50 dark:bg-gray-800" data-aos="fade-up">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="mb-16 text-center">
              <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200 mb-4">
                Portfolio
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white">Projects</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Explore my latest work and the technologies I've been working with
              </p>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects
                .sort(() => Math.random() - 0.5)
                .map((item, index) => {
                  const direction = screenWidth > 1024 ? index % 2 === 0 ? "fade-right" : "fade-left" : "fade-up";

                  return (
                    <div
                      key={index}
                      className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-800 transition-all duration-300 hover:shadow-2xl hover:translate-y-[-5px]"
                      data-aos={direction}
                      data-aos-delay={index * 100}
                    >
                      <div className="relative aspect-video">
                        <Image
                          src={item.imageURL}
                          alt={item.title}
                          fill
                          className="object-cover transition-all duration-500 grayscale hover:grayscale-0"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent">
                          <div className="absolute bottom-4 left-4">
                            <span className="bg-teal-500 text-white px-3 py-1 rounded-lg font-medium">
                              {item.title}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="p-6">
                        <p className="text-gray-700 dark:text-gray-300 mb-6 line-clamp-3">
                          {item.description || "A creative project showcasing modern design and technical skills."}
                        </p>

                        <button
                          onClick={() => window.open(item.redirectLink, "_blank")}
                          // href={item.redirectLink}
                          // target="_blank"
                          // rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-teal-600 dark:text-teal-400 font-medium hover:text-teal-800 dark:hover:text-teal-300 transition-colors"
                        >
                          View Project
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20" data-aos="fade-up">
          <div className="max-w-7xl mx-auto px-6 md:px-10">

            <div className="mb-16 text-center">
              <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200 mb-4">
                Get in Touch
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white">Contact Me</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Have a project in mind or just want to say hello? Feel free to reach out
              </p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto px-6 md:px-10">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-10 shadow-xl border border-gray-100 dark:border-gray-800" data-aos="fade-up">
              <form
                action="https://formspree.io/f/mgebvaqr"
                method="POST"
                className="space-y-6"
              >
                <div>
                  <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                  <input
                    id="username"
                    type="text"
                    name="username"
                    placeholder="Your name"
                    autoComplete="off"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-teal-500 focus:border-transparent dark:text-white bg-transparent dark:bg-gray-800 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                  <input
                    id="email"
                    type="email"
                    name="Email"
                    placeholder="your.email@example.com"
                    autoComplete="off"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-teal-500 focus:border-transparent dark:text-white bg-transparent dark:bg-gray-800 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Write your message here..."
                    autoComplete="off"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-teal-500 focus:border-transparent dark:text-white bg-transparent dark:bg-gray-800 transition-all"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
                >
                  Send Message
                </button>
              </form>

              <div className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-700">
                <div className="flex flex-wrap justify-center md:justify-between items-center gap-6">
                  <p className="text-gray-600 dark:text-gray-400 text-center md:text-left">
                    I'll get back to you as soon as possible
                  </p>

                  <div className="flex justify-center space-x-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-teal-100 dark:hover:bg-teal-900 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-teal-100 dark:hover:bg-teal-900 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-teal-100 dark:hover:bg-teal-900 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <footer className="dark:text-white mt-8">Footer</footer> */}
      </main>
    </div>
  );
}

import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillInstagram,
  AiOutlineClose,
} from "react-icons/ai";

import Image from "next/image";
import PrathamMathurProfilePic from "../public/assets/PrathamMathurProfilePic-removebg-preview.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import allProjectsData from "../AllImages";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import DisplayCard from "../components/DisplayCard";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [projects, setProjects] = useState([]);
  const [menu, setMenu] = useState(true);

  // const typedTextSpan = document.querySelector(".typed-text");
  // const cursorSpan = document.querySelector(".cursor");

  // const textArray = ["hard", "fun", "a journey", "LIFE"];
  // const textArray = ["Fun Skill"];
  // const typingDelay = 200;
  // const erasingDelay = 100;
  // const newTextDelay = 2000; // Delay between current and next text
  // let textArrayIndex = 0;
  // let charIndex = 0;

  // const type = () => {
  //   const typedTextSpan = document.querySelector(".typed-text");
  //   const cursorSpan = document.querySelector(".cursor");
  //   if (charIndex < textArray[textArrayIndex].length) {
  //     if (!cursorSpan.classList.contains("typing"))
  //       cursorSpan.classList.add("typing");
  //     typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
  //     charIndex++;
  //     setTimeout(type, typingDelay);
  //   } else {
  //     cursorSpan.classList.remove("typing");
  //     setTimeout(erase, newTextDelay);
  //   }
  // };

  // const erase = () => {
  //   const typedTextSpan = document.querySelector(".typed-text");
  //   const cursorSpan = document.querySelector(".cursor");
  //   if (charIndex > 0) {
  //     if (!cursorSpan.classList.contains("typing"))
  //       cursorSpan.classList.add("typing");
  //     typedTextSpan.textContent = textArray[textArrayIndex].substring(
  //       0,
  //       charIndex - 1
  //     );
  //     charIndex--;
  //     setTimeout(erase, erasingDelay);
  //   } else {
  //     cursorSpan.classList.remove("typing");
  //     textArrayIndex++;
  //     if (textArrayIndex >= textArray.length) textArrayIndex = 0;
  //     setTimeout(type, typingDelay + 1100);
  //   }
  // };

  // const onDOMLoad = () => {
  //   // On DOM Load initiate the effect
  //   if (textArray.length) setTimeout(type, newTextDelay + 250);
  // };

  useEffect(() => {
    setProjects(allProjectsData);
    AOS.init();
  }, []);

  return (
    <div className={darkMode ? "dark" : ""} 
    // onLoad={() => onDOMLoad()}
    >
      <Head>
        <title>Pratham Mathur Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header id="home" className="sticky top-0 pt-6 pb-2 dark:text-white  bg-white dark:bg-gray-900">
        <nav className="flex justify-around items-center mb-1 max-w-7xl mr-auto ml-auto pl-5 pr-5">
          <a href="#home" className="text-xl font-burtons title cursor-pointer">Code by Pratham</a>
          <div className="navbar-links bg-white dark:bg-gray-900">
            <div className="absolute top-6 right-6">
              {menu ? (
                <BiMenu
                  onClick={() => {
                    setMenu(!menu);
                    const menuList = document.querySelector(".navbar-links");
                    menuList.classList.add("show-menu");
                  }}
                  className="text-4xl cursor-pointer"
                />
              ) : (
                <AiOutlineClose
                  onClick={() => {
                    setMenu(!menu);
                    const menuList = document.querySelector(".navbar-links");
                    menuList.classList.remove("show-menu");
                  }}
                  className="text-4xl cursor-pointer"
                />
              )}
            </div>
            <ul className="flex items-center text-center">
              <li className="hover:-translate-y-2 transition-all hover:underline">
                <a href="#info-section" onClick={() => {
                  setMenu(!menu);
                  const menuList = document.querySelector(".navbar-links");
                  menuList.classList.remove("show-menu");
                }} className="hover:text-teal-500">
                  Info
                </a>
              </li>
              <li className="hover:-translate-y-2 transition-all hover:underline">
                <a href="#skills-section" onClick={() => {
                  setMenu(!menu);
                  const menuList = document.querySelector(".navbar-links");
                  menuList.classList.remove("show-menu");
                }} className="hover:text-teal-500">
                  Skills
                </a>
              </li>
              <li className="hover:-translate-y-2 transition-all hover:underline">
                <a href="#work-section" onClick={() => {
                  setMenu(!menu);
                  const menuList = document.querySelector(".navbar-links");
                  menuList.classList.remove("show-menu");
                }} className="hover:text-teal-500">
                  Work Experience
                </a>
              </li>
              <li className="hover:-translate-y-2 transition-all hover:underline">
                <a
                  href="#personal-projects-section"
                  onClick={() => {
                    setMenu(!menu);
                    const menuList = document.querySelector(".navbar-links");
                    menuList.classList.remove("show-menu");
                  }}
                  className="hover:text-teal-500"
                >
                  Projects
                </a>
              </li>
              <li className="hover:-translate-y-2 transition-all hover:underline">
                <a href="#contact" onClick={() => {
                  setMenu(!menu);
                  const menuList = document.querySelector(".navbar-links");
                  menuList.classList.remove("show-menu");
                }} className="hover:text-teal-500">
                  Contact
                </a>
              </li>
              <li className="hover:scale-110 transition-all">
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-full"
                  onClick={() => {
                    setMenu(!menu);
                    const menuList = document.querySelector(".navbar-links");
                    menuList.classList.remove("show-menu");
                  }}
                  href="https://drive.google.com/file/d/1AxOW_xXVet1L9jwtn5--AUloO0ffQvq5/view?usp=sharing"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
          <ul className="navigation flex items-center justify-between gap-8 h-full">
            <li>
              <BsFillMoonStarsFill
                onClick={() => setDarkMode(!darkMode)}
                className="cursor-pointer text-2xl"
              />
            </li>
            <li>
              {menu ? (
                <BiMenu
                  onClick={() => {
                    setMenu(!menu);
                    const menuList = document.querySelector(".navbar-links");
                    menuList.classList.add("show-menu");
                  }}
                  className="text-3xl cursor-pointer"
                />
              ) : (
                <AiOutlineClose
                  onClick={() => {
                    setMenu(!menu);
                    const menuList = document.querySelector(".navbar-links");
                    menuList.classList.remove("show-menu");
                  }}
                  className="text-3xl cursor-pointer"
                />
              )}
            </li>
          </ul>
        </nav>
      </header>

      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900 z-10">
        {/* Home Section */}
        <section
          className="min-h-screen"
          id="info-section"
          data-aos="fade-left"
          data-aos-delay="250"
        >
          <span className="text-teal-500 new-font">&lt;Info&gt;</span>
          <div className="text-center p-10">
            <span className="text-2xl dark:text-white">Hello, it's me</span>
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Pratham Mathur.
            </h2>
            <h3
              className="text-2xl py-2 dark:text-white  md:text-3xl"
            // data-rotate='[ "FrontEnd Developer.", "Student." ]'
            >
              Student | FrontEnd Developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-200">
              I'm a<span className="text-teal-500"> front-end developer </span>
              with a lot of ambition searching for a position at a reputable IT
              firm where I can use the newest technologies on interesting and
              varied projects. I'm naturally interested, quite self-assured, and
              constantly trying to sharpen my skills by solving one design issue
              at a time.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillLinkedin
              cursor="pointer"
              onClick={() =>
              (window.location.href =
                "https://www.linkedin.com/in/pratham-mathur-5b99681ab/")
              }
              className="hover:fill-blue-500"
            />
            <AiFillGithub
              cursor="pointer"
              onClick={() =>
                (window.location.href = "https://github.com/PrathamMathur11")
              }
              className="dark:hover:fill-red-100  hover:fill-black"
            />
            <AiFillInstagram
              cursor="pointer"
              onClick={() =>
              (window.location.href =
                "https://www.instagram.com/pratham_mathur11/")
              }
              // fill='#E4405F'
              className="hover:fill-pink-600"
            />
          </div>
          <div
            data-aos="fade-in"
            className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96"
          >
            <Image
              src={PrathamMathurProfilePic}
              style={{
                objectFit: "cover",
                scale: "1.3",
                filter: "drop-shadow(-7px 4px 4px black)",
              }}
              layout="fill"
              // objectFit='cover'
              alt="pp"
            />
          </div>
          {/* <span className="text-teal-500 new-font">&lt;/Info&gt;</span> */}
        </section>

        {/* DisplaySection */}
        <section id="display-section">
          <DisplayCard />
        </section>
        {/* Skills Section */}
        <section id="skills-section" data-aos="fade-right" data-aos-delay="250">
          <span className="text-teal-500 new-font">&lt;Skills&gt;</span>
          <div>
            {/* <h1 className="text-4xl py-1 dark:text-white">Skills</h1> */}
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200">
              Furthermore, I have experience working in a fast-paced yet
              <span className="text-teal-500"> agile work setting</span>, and I
              appreciate teamwork and maintaining a healthy work environment. I
              have a good amount of experience and knowledge working with
              <span className="text-teal-500"> MERN </span>
              Stack and can rapidly learn new technologies. I'm searching for an
              opportunity to work with a variety of technologies.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div
              data-aos="fade-right"
              data-aos-delay="250"
              className="text-center cursor-pointer shadow-lg p-10 rounded-xl my-10 flex-1 dark:bg-white hover:bg-slate-100 dark:hover:bg-slate-100 border-teal-200 border-solid border-8"
            >
              <Image
                src={design}
                width={100}
                height={100}
                className="m-auto"
                alt=""
              />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                FRONT END STACK
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">ReactJS</p>
              <p className="text-gray-800 py-1">Bootstrap</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Material UI</p>
              <p className="text-gray-800 py-1">TailwindCSS</p>
            </div>
            <div
              data-aos="fade-in"
              data-aos-delay="250"
              className="text-center cursor-pointer shadow-lg p-10 rounded-xl my-10  flex-1 dark:bg-white hover:bg-slate-100 dark:hover:bg-slate-100 border-teal-200 border-solid border-8"
            >
              <Image
                src={code}
                width={100}
                height={100}
                className="m-auto"
                alt=""
              />
              <h3 className="text-lg font-medium pt-8 pb-2 ">BACK END STACK</h3>
              <p className="py-2">
                Do you have an idea for your next great website? Let's make it a
                reality.
              </p>
              <h4 className="py-4 text-teal-600">Tools I Use</h4>
              <p className="text-gray-800 py-1">NodeJS</p>
              <p className="text-gray-800 py-1"> ExpressJS</p>
              <p className="text-gray-800 py-1">MongoDB</p>
              <p className="text-gray-800 py-1">FIREBASE</p>
              <p className="text-gray-800 py-1">SQL</p>
            </div>
            <div
              data-aos="fade-left"
              data-aos-delay="250"
              className="text-center cursor-pointer shadow-lg p-10 rounded-xl my-10 flex-1 dark:bg-white hover:bg-slate-100 dark:hover:bg-slate-100 border-teal-200 border-solid border-8"
            >
              <Image
                src={consulting}
                width={100}
                height={100}
                className="m-auto"
                alt=""
              />
              <h3 className="text-lg font-medium pt-8 pb-2 ">OTHER SKILLS</h3>
              <p className="py-2">Some Soft but very Important skills</p>
              <h4 className="py-4 text-teal-600">Tech Skills</h4>
              <p className="text-gray-800 py-1">C / C++ / Java </p>
              <p className="text-gray-800 py-1">HTML / CSS / JavaScript</p>
              <p className="text-gray-800 py-1">Git / GitHub</p>
              <h4 className="py-4 text-teal-600">Soft Skills</h4>
              <p className="text-gray-800 py-1">
                Analytical / Problem Solving Skills
              </p>
              <p className="text-gray-800 py-1">Team Work</p>
              <p className="text-gray-800 py-1">Leadership</p>
            </div>
          </div>
          {/* <span className="text-teal-500 new-font">&lt;/Skills&gt;</span> */}
        </section>
        {/* Work Experience */}
        <section id="work-section" data-aos="fade-right" data-aos-delay="250">
          <span className="text-teal-500 new-font">
            &lt;Work Experience&gt;
          </span>
          <div className="details text-center grid md:flex md:justify-center md:items-center shadow-lg p-10 rounded-xl my-10  flex-1 dark:bg-white hover:bg-slate-100 dark:hover:bg-slate-100 cursor-pointer">
            <div className="w-full p-0">
              <h2 className="text-4xl">Full Stack Developer Intern</h2>
              <h2 className="text-2xl">WeDigTech</h2>
              <span className="text-xs">07 / 2022 - 08 / 2022</span>
            </div>
            <ul className="w-full">
              <li className="text-start p-4">
                I had a great experience learning and using React and Node JS
                while using MongoDB as a database and for data fetching to
                develop Ecommerce as well as Video Streaming Service.
              </li>
              <li className="text-start p-4">
                worked with interactive code, numerous functionality, and
                learned many strategies for code optimization and their
                practical use in projects to address various issues.
              </li>
              <li className="text-start p-4">
                Built reusable code for future use and optimized web pages for
                maximum speed and scalability.
              </li>
            </ul>
          </div>
          {/* <span className="text-teal-500 new-font">
            &lt;Portfolio Projects&gt;
          </span> */}
        </section>

        {/* Personal Projects Section */}
        <section id="personal-projects-section">
          <span className="text-teal-500 new-font">
            &lt;Projects&gt;
          </span>
          <div className="">
            {/* <h3 className="text-3xl py-1 dark:text-white">
              Portfolio Projects
            </h3> */}
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200">
              These are my projects listed below
            </p>
          </div>
          <div className="flex flex-col py-10 lg:flex-row lg:flex-wrap projects-wrapper">
            {projects
              .sort(() => Math.random() - 0.5)
              .map((item, index) => {
                let direct = "up-right";
                if (index % 2 == 0) {
                  direct = "up-right";
                } else {
                  direct = "in";
                }
                return (
                  <div
                    className="basis-1/3 flex-1 rounded-lg hover:scale-105 transition-all"
                    key={index}
                  // style={{ boxShadow: 'rgb(0 0 0 / 25%) 0px 0px 15px' }}
                  >
                    <div
                      data-aos={`fade-${direct}`}
                      data-aos-delay={index * 150}
                      className="relative container"
                    >
                      <Image
                        src={item.imageURL}
                        alt="images"
                        className="rounded-lg object-fill grayscale hover:grayscale-0 hover:shadow-lg cursor-pointer md:-skew-y-6"
                        width={"100%"}
                        height={"100%"}
                        layout="responsive"
                        onClick={() =>
                          (window.location.href = `${item.redirectLink}`)
                        }
                      />
                      <span className="absolute names md:-skew-y-6 left-0 bg-teal-500 text-white w-auto h-auto rounded px-4 py-0.5">
                        {item.title}
                      </span>
                    </div>
                  </div>
                );
              })}
          </div>
          {/* <span className="text-teal-500 new-font">
            &lt;/Portfolio Projects&gt;
          </span> */}
        </section>
        <section id="contact">
          {/* <Contact /> */}
          <div className='wrapper text-3xl pt-36 px-0 pb-20 text-center'>
            <h2 className='dark:text-white mb-10'>Contact Me</h2>
            <div className="container">
              <div className="contact-form m-auto" style={{ maxWidth: '50rem' }} >
                <form action="https://formspree.io/f/mgebvaqr" className='form-inputs flex flex-col gap-10' method='POST'>
                  <input
                    className="dark:text-white bg-transparent border pl-2 pt-1"
                    type="text"
                    name="username"
                    placeholder='username'
                    autoComplete='off'
                    required
                  />
                  <input
                    className="dark:text-white bg-transparent border pl-2 pt-1"
                    type="email"
                    name="Email"
                    placeholder='Email'
                    autoComplete='off'
                    required
                  />
                  <textarea
                    className="dark:text-white bg-transparent border pl-2 pt-1"
                    name="message"
                    cols="30"
                    rows="6"
                    placeholder='Write your message here'
                    autoComplete='off'
                    required
                  ></textarea>
                  <input type="submit" className="text-white cursor-pointer hover:scale-95 transition-all" style={{ background: "#14b8a6" }} value="send" />
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* <footer className="dark:text-white mt-8">Footer</footer> */}
      </main>
    </div>
  );
}

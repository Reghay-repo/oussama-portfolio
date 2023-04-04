import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";
import { Url } from "url";

interface IProject {
  name: string;
  description: string;
  image: string;
  github?: string;
  link?: string;
}

const projects: IProject[] = [
  {
    name: "Porfolio",
    description:
      "My personal Porfolio. I build it with Next js and Tailwind css ",
    image: "/portfolio-website.png",
    github: "https://github.com/Reghay-repo/oussama-portfolio",
    link: "https://oussama-reghay-portfolio.netlify.app/",
  },
  {
    name: "Petalens",
    description:
      "Petalens is a Media Monitoring and Social Listening tool, developed by using Vuejs and Vuetify as the core UI technologies and Laravel, PostgresSql for the backend and deployed with Docker to the cloud.  ",
    image: "/petalens.png",
    github: "#",
    link: "https://www.petalens.com/",
  },
  {
    name: "Easyom",
    description:
      "EasyOM's landing page showcases their various business services, including bookkeeping, tax preparation, payroll processing, and financial consulting. It features a clean and modern design, customer testimonials, and a satisfaction guarantee to build trust with potential customers. uses Express js for the backend",
    image: "/easyom.png",
    github: "https://github.com/Reghay-repo/easy-home",
    link: "https://easyom.up.railway.app/",
  },
  {
    name: "DevBootcamp",
    description:
      "This dev bootcamp API provides developers with a comprehensive list of bootcamp locations and the various courses included, along with pricing information. Users can easily locate bootcamps near them with the help of an interactive map feature. The API allows for easy integration into any application, making it a convenient resource for those looking to find and compare different dev bootcamps. developed with Expressjs and Mondodb for database and uses MapQuest for The map API",
    image: "/bootcamp.png",
    github: "https://github.com/Reghay-repo/devbootcamp_api",
    link: "#",
  },
  {
    name: "YouRent",
    description:
      "YouRent is a website for booking vacation rentals, apartments, and houses worldwide. It offers a wide range of rental options, detailed property information. developed using Express and Mongodb for database and uses Mapbox Api for maps and Cloudinary for storing images",
    image: "/yourent.png",
    github: "https://github.com/Reghay-repo/you-rent",
    link: "#",
  },
  {
    name: "Meuseum candy",
    description: "A simple web page made with HTMl and CSS",
    image: "/candy.png",
    github: "https://github.com/Reghay-repo/meuseum-candy",
    link: "https://meuseum-candy.netlify.app/",
  },
  {
    name: "Startup website",
    description: "A simple web page for a Startup with HTMl and CSS",
    image: "/startup.png",
    github: "https://github.com/Reghay-repo/startup-website",
    link: "https://startup-website-re.netlify.app/",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <a href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </a>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <a href={project.github} rel="noreferrer" target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </a>
                      <a href={project.link} rel="noreferrer" target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;

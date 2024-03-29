"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/work/1.png",
    category: "Web app",
    name: "Website maintenance for Secundo.no",
    description:
      "This project aimed at ongoing website maintenance, where an experienced developer identified and fixed errors to enhance functionality and user experience, ensuring the site's long-term reliability and performance.",
    link: "https://secundo.no/",
    stack: [
      "PHPUnit",
      "Laravel9",
      "MySQL", 
      "PHP",
      "Bootstrap", 
      "CSS3",
    ],
    github: "#",
  },
  {
    image: "/work/2.png",
    category: "Web app",
    name: "Project Matchmaking Platform",
    description:
      "A web application to connect students, professors, and companies for project collaborations, featuring personal accounts, project postings by companies, and professor vetting.",
    link: "https://gurjotsinghaulakh.github.io/SIM-WebApp/",
    stack: [
      "Docker",
      "Laravel9",
      "MySQL", 
      "GitHub",
      "PHP", 
      "Bootstrap",
    ],
    github: "https://github.com/GurjotSinghAulakh/SIM-WebApp",
  },
  {
    image: "/work/3.png",
    category: "AI",
    name: "MVP: Image Recognition Software",
    description:
      "An MVP image recognition software for Secundo to identify objects like furniture and appliances, using Google's 'teachable machine' for model training and a website for user testing.",
    link: "https://gurjotsinghaulakh.github.io/Image-recognition-using-tensorflow/gate1.html",
    stack: [
      "Tensorflow",
      "Python",
      "JavaScript", 
      "HTML5",
      "API",
    ],
    github: "https://github.com/GurjotSinghAulakh/Image-recognition-using-tensorflow",
  },
  {
    image: "/work/4.png",
    category: "Web app",
    name: "MVP: Stock Trading Web Application",
    description:
      "An accessible, user-friendly web application for real-time monitoring, buying, and selling of stocks, ensuring a secure and convenient platform for users to manage their investment portfolios.",
    link: "https://github.com/GurjotSinghAulakh/TradingWebApplication",
    stack: [
      "HTML5",
      "JavaScript",
      "API", 
      "HTML5",
      "CSS3"
    ],
    github: "https://github.com/GurjotSinghAulakh/TradingWebApplication",
  },
  {
    image: "/work/5.png",
    category: "Automation",
    name: "Data processing using Zapier",
    description:
      "The project aimed to optimize data processing through automation, leveraging Zapier for email parsing, Gmail for email services, Google Sheets for spreadsheets, and Mailchimp for email marketing, thus streamlining data collection, processing, and marketing efforts.",
    link: "/",
    stack: [
      "Zapier",
      "Google Sheets",
      "Mailchimp", 
      "Gmail",
    ],
    github: "/",
  },
  {
    image: "/work/6.png",
    category: "Automation",
    name: "Web Scraper for finn.no",
    description:
      "This project aimed to create a web scraper for finn.no, focusing on appliances and furniture to extract details like product type, brand, condition, price, description, finn code, and location, enabling the company to make informed decisions through comprehensive data analysis and reporting.",
    link: "/",
    stack: [
      "Python",
      "API",
      "openpyxl", 
    ],
    github: "https://github.com/GurjotSinghAulakh/Web-Scraper-API",
  },
  {
    image: "/work/7.webp",
    category: "Automation",
    name: "Analyzing Data with Google Analytics",
    description:
      "This project aimed to perform comprehensive data analysis through Google Analytics, focusing on deriving actionable insights to enhance website performance. It leveraged data-driven strategies to optimize user engagement.",
    link: "/",
    stack: [
      "Google Analytics",
      "API",
    ],
    github: "/",
  },
  {
    image: "/work/8.webp",
    category: "Testing",
    name: "Quality assurance for the online banking app",
    description:
      "The project involved testing a simplified online banking app using Spring Boot, leveraging tools like IntelliJ, SoapUI, Selenium, Excel, and MTM on Azure for comprehensive unit, integration, and system testing.",
    link: "/",
    stack: [
      "Java",
      "JUnit",
      "JavaScript",
      "HTML5",
      "CSS3"
    ],
    github: "https://github.com/GurjotSinghAulakh/TestingAvProgramvare",
  },
];

//  remove category duplicates
const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");

  const filteredProjects = projectData.filter((project) => {
    // if category is all projects then return all projects , else filter by category.
    return category === "all projects"
      ? project
      : project.category === category;
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        {/* tabs  */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-5 lg:max-w-[800px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs content  */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;

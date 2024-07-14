import React from "react";
import {
  Briefcase,
  GraduationCap,
  HomeIcon,
  MailIcon,
  PhoneCall,
  User2,
} from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";


const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Ali hazime",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+961 70999302",
  },
  {
    icon: <MailIcon size={20} />,
    text: "ali.k.hazime@gmail.com",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "MBA in Management Information System",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Beirut - Lebanon",
  },
];

const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "IUL Lebanon",
        qualification:
          "MBA IN MANAGEMENT INFORMATION SYSTEMS (INCOMPLETE - THESIS PENDING) I",
        years: "2019 – 2021",
      },
      {
        university: "IUL Lebanon",
        qualification: "BS IN MANAGEMENT INFORMATION SYSTEMS",
        years: "2015 – 2017",
      },
      {
        university: "IUL Lebanon",
        qualification: "BS IN COMPUTER SCIENCE(INCOMPLETE)",
        years: "2012 – 2014",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "MONTY MOBILE",
        role: "SENIOR SYSTEM & CLOUD ENGINEER",
        years: "03/2022 – CURRENT",
      },
      {
        company: "MONTY MOBILE",
        role: "SYSTEM ENGINEER",
        years: "02/2020 – 02/2022",
      },
      {
        company: "GLOBAL FOODS S.A.L",
        role: "SYSTEM ENGINEER/IT ASSISTANT MANAGER",
        years: "09/2017 – 02/2020",
      },
      {
        company: "BIT SOLUTIONS",
        role: "CUSTOMER SERVICE/IT SUPPORT",
        years: "03/2015 – 09/2017",
      },
      {
        company: "MINDFIELD SOLUTIONS",
        role: "QA INTERN",
        years: "2014 – 2014",
      },
    ],
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      {
        name: "Cloud : AWS & GCP",
      },
      {
        name: "Kubernetes",
      },
      {
        name: "Docker",
      },
      {
        name: "IaC: Terraform, Ansible",
      },
      {
        name: "Service Mesh",
      },
      {
        name: "Next.js",
      },
      {
        name: "VMWare",
      },
      {
        name: " Monitoring(Grafana, Prometheus, Loki)",
      },
      {
        name: "GitOPS",
      },
      {
        name: "Argocd",
      },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className=" xl:h-full w-full pb-12 xl:py-24">
      <div className="container mx-auto ">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About Me
        </h2>
        {/* tabs */}
        <div className="">
          <Tabs defaultValue="personal">
            <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
              <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                Personal Info
              </TabsTrigger>
              <TabsTrigger
                className="w-[162px] xl:w-auto"
                value="qualification"
              >
                Qualifications
              </TabsTrigger>
              <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                Skills
              </TabsTrigger>
            </TabsList>
            {/* tabs content */}
            <div className="text-lg mt-12 xl:mt-8">
              {/* personal */}
              <TabsContent value="personal">
                <div className="text-center xl:text-left">
                  <h3 className="h3 mb-4">
                    Elevating System Performance with Expertise and Precision
                  </h3>
                  <p className="subtitle max-w-xl mx-auto xl:mx-0">
                    With over 7 years of experience, I excel in optimizing and
                    managing complex systems using the latest technologies to
                    enhance efficiency and drive innovation.
                  </p>
                  {/* icons */}
                  <div className="grid xl:grid-cols-2 gap-4 mb-12">
                    {infoData.map((item, index) => {
                      return (
                        <div
                          className="flex items-center gap-x-4 mx-auto xl:mx-0"
                          key={index}
                        >
                          <div className="text-primary">{item.icon}</div>
                          <div>{item.text}</div>
                        </div>
                      );
                    })}
                  </div>
                  {/* language */}
                  <div className="flex flex-col gap-y-2">
                    <div className="text-primary">Language Skill</div>
                    <div className="border-b border-border"></div>
                    <div>French, English, Arabic</div>
                  </div>
                </div>
              </TabsContent>
              {/* qualifications */}
              <TabsContent value="qualification">
                <div>
                  <h3 className="h3 mb-8 text-center xl:text-left">
                    My Awesome Journey
                  </h3>

                  {/* experience and education wrapper */}
                  <div className="grid xl:grid-cols-2 gap-y-8 justify-center">
                    {/* experience */}
                    <div className="flex flex-col gap-y-6">
                      <div className="flex gap-x-4 items-center text-[22px] text-primary">
                        <Briefcase />
                        <h4 className="capitalize font-medium">
                          {getData(qualificationData, "experience").title}
                        </h4>
                      </div>
                      {/*list  */}
                      <div className="flex flex-col gap-y-8">
                        {getData(qualificationData, "experience").data.map(
                          (item, index) => {
                            const { company, role, years } = item;
                            return (
                              <div className="flex gap-x-8 group" key={index}>
                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                  <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                </div>
                                <div>
                                  <div className="font-semibold text-xl leading-none mb-2">
                                    {company}
                                  </div>

                                  <div className="text-muted-foreground text-lg leading-none mb-4">
                                    {role}
                                  </div>

                                  <div className="text-base font-meduim">
                                    {years}
                                  </div>
                                </div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>

                    {/* education */}
                    <div className="flex flex-col gap-y-6">
                      <div className="flex gap-x-4 items-center text-[22px] text-primary">
                        <GraduationCap />
                        <h4 className="capitalize font-medium">
                          {getData(qualificationData, "education").title}
                        </h4>
                      </div>
                      {/*list  */}
                      <div className="flex flex-col gap-y-8">
                        {getData(qualificationData, "education").data.map(
                          (item, index) => {
                            const { university, qualification, years } = item;
                            return (
                              <div className="flex gap-x-8 group" key={index}>
                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                  <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                </div>
                                <div>
                                  <div className="font-semibold text-xl leading-none mb-2">
                                    {university}
                                  </div>

                                  <div className="text-muted-foreground text-lg leading-none mb-4">
                                    {qualification}
                                  </div>

                                  <div className="text-base font-meduim">
                                    {years}
                                  </div>
                                </div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              {/* Skills */}
              <TabsContent value="skills">
                <div className="text-center xl:text-left">
                  <h3 className="h3 mb-8">What I Use EveryDay</h3>
                  {/* skill list */}
                  <div className="mb-16">
                    <h4 className="text-xl font-semibold mb-2">Skills</h4>
                    <div className="border-b border-border mb-4"></div>
                    {/* skill list */}
                    <div>
                      {getData(skillData, "skills").data.map((item, index) => {
                        return (
                          <div
                            className=" text-center xl:text-left mx-auto"
                            key={index}
                          >
                            <div className="font-medium">{item.name}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default About;

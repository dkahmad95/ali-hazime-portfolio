"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";
import { TabsList } from "@radix-ui/react-tabs";

const projectData = [
  {
    image: "/certi/AWS-Certified-Solutions-Architect-Associate-certificate.png",
    category: "AWS",
    name: "AWS Certified Solutions Architect",
    link1: "https://www.credly.com/badges/2ca651e7-76c4-4f07-b82d-6947f86eae54",

    download:'AWS-Certified-Solutions-Architect.pdf',
    href: "/certi/certi-pdf/AWS-Certified-Solutions-Architect.pdf",
  },
  {
    image: "/certi/certificate-gitops-fundamentals.png",
    category: "GitOps",
    name: "GitOps Fundamentals",
    link1: "https://www.credly.com/badges/b5eff471-89fa-4e83-8fa5-31f195a9e275",
    download:'certificate-gitops-fundamentals.pdf',
    href: "/certi/certi-pdf/certificate-gitops-fundamentals.pdf",
  },
  {
    image: "/certi/nse3.png",
    category: "nse",
    name: "Network Security Associate 3.0",
    link1: "",
    download:'NSE_3_Certificate.pdf',
    href: "/certi/certi-pdf/NSE_3_Certificate.pdf",
  },
  {
    image: "/certi/gitlab-certi.png",
    category: "GitLab",
    name: "GitLab CI Fundamentals",
    link1: "",
    download:'gitlabcert.pdf',
    href: "/certi/certi-pdf/gitlabcert.pdf",
  },
  {
    image:
      "/certi/AWS-Certified-SysOps-Administrator-Associate-certificate.png",
    category: "AWS",
    name: "AWS Certified SysOps Administrator",
    link1: "https://www.credly.com/badges/6508239b-7602-41ef-9e8e-5e479a09700a",
    download:'AWS-Certified-SysOps-Administrator.pdf',
    href: "/certi/certi-pdf/AWS-Certified-SysOps-Administrator.pdf",
  },
 

  {
    image: "/certi/certified-kubernetes-administrator.png",
    category: "Kubernetes",
    name: "Certified Kubernetes Administrator",
    link1: "https://www.credly.com/badges/bd7809fa-33ed-4fc8-a306-9cae86c5bd28",
    download:'CKA.pdf',
    href: "/certi/certi-pdf/CKA.pdf",
  },
 
  {
    image: "/certi/GitOPS_Intro_Certification.png",
    category: "GitOps",
    name: "Introduction to GitOps",
    link1: "https://www.credly.com/badges/6f776c0f-9800-4429-9ec8-a010d9b16896",
    download:'GitOPS_Intro_Certification.pdf',
    href: "/certi/certi-pdf/GitOPS_Intro_Certification.pdf",
  },
  {
    image: "/certi/nse1.png",
    category: "nse",
    name: "Network Security Associate 1.0",
    link1: "https://www.credly.com/badges/e999fa90-1d26-454c-8586-cd154ee147e1",
    download:'NSE_1_Certification.pdf',
    href: "/certi/certi-pdf/NSE_1_Certification.pdf",
  },
  {
    image: "/certi/nse2.png",
    category: "nse",
    name: "Network Security Associate 2.0",
    link1: "",
    download:'NSE_2_Certification.pdf',
    href: "/certi/certi-pdf/NSE_2_Certification.pdf",
  },


];


const uniqueCats = [
  "all",
  ...new Set(projectData.map((cat) => cat.category)),
];

const Projects = () => {
  const [cats, setCats] = useState(uniqueCats);
  const [category, setCategory] = useState("all");

  const filterdProjects = projectData.filter((project) => {
    // if category is 'all projects' return all project, else filter by category
    return category === "all" ? project : project.category === category;
  });

  
  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Certifications
        </h2>
        {/* tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full p-4 justify-center md:grid-cols-2 lg:max-w-max mb-12 mx-auto md:border md:rounded-[30px] dark:border-none">
            {cats.map((cat, index) => {
              return (
                <TabsTrigger
                  value={cat}
                  key={index}
                  className="capitalize w-auto"
                  onClick={() => setCategory(cat)}
                >
                  {cat}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">{filterdProjects.map((project , index)=>{
            return (
              <TabsContent value={category} key={index}>
                <ProjectCard project={project}/>
              </TabsContent>
            )
          })}</div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;

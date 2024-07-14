"use client";

import Link from "next/link";
import { Button } from "./ui/button";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import ProjectCard from "./ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";

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

const Work = () => {
  return (
    <section className="relative my-12 xl:mb-48">
      <div className="container mx-auto">
        {/* text */}
        <div className="max-w-[300px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className={`section-title  text-center`}>My Certifications</h2>
          <p className="subtitle m-3 ">
            Get a glimpse of my recent certifications.
          </p>
          <Link href="/projects">
            <Button>View All</Button>
          </Link>
        </div>
        {/* slider */}
        <div className="xl:max-w-[900px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[600px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: "true" }}
          >
            {/* show only the first 4 projects for the slider */}
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;

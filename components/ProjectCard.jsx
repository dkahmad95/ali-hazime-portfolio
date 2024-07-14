import React from "react";
import { Card, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import Image from "next/image";

const ProjectCard = ({ project }) => {
  return (
    <Card className="group overflow-hidden relative h-[500px]">
      <CardHeader className="p-0">
        {/* image */}
        <div className="relative w-full h-[300px] flex items-center justify-center bg-tertiary dark:bg-secondary/40  xl:bg-[110%] xl:bg-no-repeat overflow-hidden">
          <Image
            className="absolute bottom-0 shadow-2xl object-cover w-auto h-auto"
            src={project.image}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"	
            alt=""
            priority
          />
        </div>
      </CardHeader>
      <div className="h-full px-8 py-6">
        <Badge className="uppercase text-sm font-medium mb-2 absolute top-4 left-5 ">
          {project.category}
        </Badge>
        <div className="flex flex-col justify-between  h-[100px] ">
          <h4 className="h4 mb-1">{project.name}</h4>
          <div className="flex flex-row justify-between ">
            <a href={project.href} download={project.download}>
              <span className="text-sm border p-2 rounded-full border-black dark:border-white dark:text-white cursor-pointer">
                download
              </span>
            </a>
            {project.link1 != "" && <a href={project.link1} target="_blank">
              <span className="text-sm border p-2 rounded-full border-black dark:border-white dark:text-white  cursor-pointer ">
                more details
              </span>
            </a>
            }
            
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;

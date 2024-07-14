"use client";
import React from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import Link from "next/link";

import DevImg from "./DevImg";
import { lusitana } from "@/components/ui/fonts";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24  xl:pt-10 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none ">
      <div className="container mx-auto flex flex-col md:flex-row gap-8 w-full  justify-between ">
        {/* image */}
        <div className="flex mx-auto relative">
          <DevImg
            containerStyles=" w-[320px] h-[462px] bg-no-repeat relative bg-bottom"
            imgSrc="/hazimePP.jpg"
          />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1, duration: 0.4, ease: "easeIn" },
          }}
          className="flex w-full flex-col justify-center items-center mx-auto xl:mx-0 text-center "
        >
          <h2
            className="text-primary h2 mb-4 uppercase  tracking-[3px]"
          >
            SENIOR SYSTEM & CLOUD ENGINEER
          </h2>
          <p className="subtitle max-w-[550px]  mt-6 mx-auto xl:mx-0">
          IT Specialist, 2x AWS, CKA, GitOps Certified. Experienced in Linux & Windows System and Cloud Engineering with a demonstrated
          history of working in the tech & telecom industry
          </p>
          <div className=" flex gap-3">
         <a href="/hazimeCv.pdf" download="hazimeCv.pdf" >
              <Button><span className="uppercase">Download CV</span></Button>
         </a>
         <Link href='/contact'>
         <Button><span className="uppercase">Contact</span></Button>
         </Link>
         </div>
        </motion.div>
      </div>

      <div className="flex justify-center mt-8 left-2/4 bottom-44 xl:bottom-12 animate-bounce">
        <RiArrowDownSLine className="text-3xl text-primary" />
      </div>
    </section>
  );
};

export default Hero;

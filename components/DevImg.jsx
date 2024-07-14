"use client";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
const DevImg = () => {
  const { theme } = useTheme();

  
  const [strokeColor, setStrokeColor] = useState("#000000"); 
  const [fillcolor, setFillcolor] = useState("#a0a0923e"); 

  useEffect(() => {
   
    if (theme) {
      setStrokeColor(theme === "light" ? "#000000" : "#FFFFFF");
      setFillcolor(theme === "light" ? "#a0a0923e" :"#77716940");
    }
  }, [theme]);
 
  return (
    <div className=" w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1, duration: 0.4, ease: "easeIn" },
        }}
      >
        {/* image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
          }}
          className=" w-[280px] h-[280px] xl:w-[480px] xl:h-[480px] mix-blend-normal absolute top-[29px] xl:top-10  "
        >
          <Image
            src="/hazimePP1.png"
            priority
            quality={100}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"	
            alt="profile picture"
            className="object-contain w-auto h-auto"
          />
        </motion.div>

        {/* cricle */}
        <motion.svg
          className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
          fill={fillcolor}
          viewBox="0 0 506 506"
          xmlns='http"//www.w3.org/2000/svg'
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke={strokeColor}
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default DevImg;

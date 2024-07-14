import Link from "next/link";
import React from "react";
import {
  
  RiInstagramFill, RiWhatsappFill, RiLinkedinFill
} from "react-icons/ri";

const icons = [


 
  {
     path: "https://www.linkedin.com/in/ali-k-hazime/",
     name: <RiLinkedinFill />,
   },
   {
     path: "https://wa.me/+96170999302",
     name: <RiWhatsappFill />,
    },
    {
      path: "https://www.instagram.com/ali_hazime/",
      name: <RiInstagramFill />,
    },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;

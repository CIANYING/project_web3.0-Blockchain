import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { BsShieldFillCheck } from "react-icons/bs";
import publicity from "../../images/futuristic-play-earn-concept-rv.png";

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
    <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-white text-lg">{title}</h3>
      <p className="mt-1 text-white text-sm md:w-9/10">
        {subtitle}
      </p>
    </div>
  </div>
);

const Services = () => (
  <div className="flex w-full justify-center items-center gradient-bg-services">
    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
      <div className="flex-1 flex flex-col justify-start items-start">
      <img width="800" height="798" src={publicity } className="attachment-large size-large" alt="" loading="lazy"  sizes="(max-width: 800px) 100vw, 800px"/>
      </div>

      <div className="flex-1 flex flex-col justify-start items-center">
      <div className="flex-1 flex flex-col justify-start items-start">
        <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient " >
         Main advantages
        </h1>
        <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
          The best choice for buying and selling your crypto assets, with the
          various super friendly services we offer
        </p>
      </div>
      <ServiceCard
          color="bg-[#2952E3]"
          title="PROTECTION FROM HACKING"
          icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
          subtitle="On a decentralized platform, all user accounts are independent; if one account is hacked, this won’t breach the security of."
        />
        <ServiceCard
          color="bg-[#8945F8]"
          title="HIGH SPEED AND LOW COSTS"
          icon={<BiSearchAlt fontSize={21} className="text-white" />}
          subtitle="Immediate funding without third-parties. Smart contracts autonomously perform funding – collect and release payments"
        />
      </div>
    </div>
  </div>
);

export default Services;
import { motion, useScroll } from "framer-motion"
import React, { useRef } from "react"
import {
  AzureAdministratorImage,
  CybersecurityArchitectImage,
  DevopsEngineerImage,
  IamAdministratorImage,
  IstioExpertImage,
  NetworkEngineerImage,
  SecurityEngineerImage,
  SecurityOperationsAnalystImage,
  SolutionArchitectImage,
  TerraformAssociateImage
} from "./CertImages"
import LiIcon from "./LiIcon"

const Details = ({ title, iconComponnet }) => {
  const ref = useRef(null)
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col
    items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {title}&nbsp;
        </h3>
        {/* <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time}
        </span> */}
        <div className="font-medium w-full flex md:text-sm place-items-start">
          <div className="w-28 h-auto mt-2">{iconComponnet}</div>
        </div>
      </motion.div>
    </li>
  )
}

const Certifications = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  })
  return (
    <div className="mt-32">
      <h2 className="font-bold text-8xl mb-4 w-full text-center md:text-6xl md:mb-16 xs:text-4xl">
        Certifications
      </h2>
      <p className="w-full mb-28 text-center">
        View full certification profile at{" "}
        <a
          className="underline text-primary dark:text-primaryDark"
          href="https://www.credly.com/users/hao-chen.c4b252a3"
          target="_blank"
        >
          Credly
        </a>
      </p>

      <div ref={ref} className="w-[80%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
          md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul
          className="w-full flex flex-col items-start justify-between ml-4
          xs:ml-2
          "
        >
          <Details
            title="Microsoft Certified: Azure Solutions Architect Expert"
            iconComponnet={<SolutionArchitectImage className="" />}
          />
          <Details
            title="Microsoft Certified: DevOps Engineer Expert"
            iconComponnet={<DevopsEngineerImage className="" />}
          />
          <Details
            title="Microsoft Certified: Cybersecurity Architect Expert"
            iconComponnet={<CybersecurityArchitectImage className="" />}
          />
          <Details
            title="Microsoft Certified: Azure Administrator Associate"
            iconComponnet={<AzureAdministratorImage className="" />}
          />
          <Details
            title="Microsoft Certified: Azure Security Engineer Associate"
            iconComponnet={<SecurityEngineerImage className="" />}
          />
          <Details
            title="Microsoft Certified: Security Operations Analyst Associate"
            iconComponnet={<SecurityOperationsAnalystImage className="" />}
          />
          <Details
            title="Microsoft Certified: Identity and Access Administrator Associate"
            iconComponnet={<IamAdministratorImage className="" />}
          />
          <Details
            title="Microsoft Certified: Azure Network Engineer Associate"
            iconComponnet={<NetworkEngineerImage className="" />}
          />
          <Details
            title="Expert for Istio by Solo.io"
            iconComponnet={<IstioExpertImage className="" />}
          />
          <Details
            title="HashiCorp Certified: Terraform Associate (002)"
            iconComponnet={<TerraformAssociateImage className="" />}
          />
        </ul>
      </div>
    </div>
  )
}

export default Certifications

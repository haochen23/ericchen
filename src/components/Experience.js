import { motion, useScroll } from "framer-motion"
import React, { useRef } from "react"
import LiIcon from "./LiIcon"

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null)
  const workArray = work.split("\n").map((item) => item.trim())
  const workList = workArray.filter((item) => item !== "")
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col
    items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="capitalize text-primary dark:text-primaryDark"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        {workList.map((item, index) => (
          <p key={index} className="text-lg text-dark dark:text-light">
            {item}
          </p>
        ))}
        {/* <p className="font-medium w-full md:text-sm">{work}</p> */}
      </motion.div>
    </li>
  )
}

const Experience = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  })
  return (
    <div className="mt-32">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl md:mb-16 xs:text-4xl">
        Experience
      </h2>
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
            position="Senior Cloud & DevOps Engineer"
            company="Lab3"
            time="2022.4-Present"
            companyLink="https://www.lab3.com.au/"
            address="Auckland, New Zealand"
            work={`• Lead design + delivery solutions including system design, infrastructure design
            • Design + implement platform components to meet clients’ business requirements
            • Design and deliver Azure Landing Zone, Cloud Adoption Framework assessment
            • DR planning, failover and failback pipelines’ delivery
            • Enterprise RHEL management solution, CIS hardening using packer and ansible
            • design Azure Policies enforced backup solution for cloud environments
            • engage with customers, support and mentor junior level engineers
            Tech stack:
            • IaC: Terraform, ARM template, Bicep, packer, ansible, python, powershell, bash.
            • DevOps & GitOps: Azure DevOps pipelines, Azure Container Registry, ArgoCD
            • Microservices: Kubernetes, AKS, Istio, workload identities`}
          />
          <Details
            position="Solution Architect & DevOps Engineer"
            company="Auckland Trasnport"
            time="2021.3-2022.4"
            companyLink="https://at.govt.nz/"
            address="Auckland, New Zealand"
            work={`• high-level system/sub-system design and implementation
            • plan and implement deployment, failover, and recovery strategies
            • architect and implement a microservice-based real-time computer vision application with high availability and scalability.
            • automate everything with CI/CD pipelines, including infrastructure and app
            • provide knowledge to teammates on model training, fine-tuning, optimization
            Tech stack:
            • Container Orchestration and Monitoring: Kubernetes, OpenShift, Istio, Helm Charts, Prometheus, Grafana, Kiali, EFK, docker, podman
            • DevOps & GitOps: Azure DevOps, Azure Container Registry, ArgoCD, FluxCD, Flagger, Terraform, Ansible, multi-stage Dockerfiles
            • Deep Learning: Tensorflow, Pytorch, OpenCV, OpenVino, Python
            • Video Stream Processing: Gstreamer, DeepStream, DL_streamer
            • Web Dev: fastapi, quart, flask, nodejs, express, react, typescript`}
          />
          <Details
            position="AI/Deep Learning Engineer"
            company="RealityVirtual.co"
            time="2020.7-2021.4"
            companyLink="https://www.realityvirtual.co/"
            address="Auckland, New Zealand"
            work={`• streamlined AWS infrastructure deployment using AWS CDK
            • leading computer vision and NLP tasks, pipelines and architectures design
            • GAN model training, boost speed 3-5 times with 10x smaller compressed model
            Tech stack:
            • Deep Learning: Tensorflow, Pytorch, Tensorboard, OpenCV, OpenGL, Python, 
            • Cloud Computing: AWS EC2, S3, SQS, Lambda, DynamoDB, CloudWatch, CDK
            • DevOps and CI/CD: Git, Github Actions, Docker, Linux
          `}
          />
          <Details
            position="Computer Vision/Data Scientist"
            company="BCF Ultrasound"
            time="2019.7-2020.7"
            companyLink="https://www.bcfultrasound.com/"
            address="Auckland, New Zealand"
            work={`• end-to-end data pipelines from data collection to model training and deployment
            • deep learning model for ultrasound and natural images training and optimization
            • model deployment and inference acceleration on IoT devices (Raspberry Pi, Nvidia Jetson Nano) with Movidius NCS2 and openvino
            Tech stack:
            • Machine Learning: Tensorflow, Keras, Sckit-learn, OpenCV, XGBoost, python
            • DevOps: Git, Gitlab CI/CD, Embedded Linux
          `}
          />
        </ul>
      </div>
    </div>
  )
}

export default Experience

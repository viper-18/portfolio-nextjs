import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import aws from "@/public/aws.jpeg";
import jenkins from "@/public/jenkins.jpeg";
import { CgAirplane } from "react-icons/cg";
import { BsPersonWorkspace } from "react-icons/bs";
import k8s from "@/public/k8s.png";
import prometheus from "@/public/prometheus.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "High School Graduate",
    location: "JSS Private School Dubai, UAE 🇦🇪",
    description:
      "I have finished my high school specialising in Computer Science including Physics, Chemistry, Mathematics",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2021",
  },
  {
    title: "B.Tech Computer Science",
    location: "VIT Univeristy, India (Rank 8) 🇮🇳",
    description:
      "I worked as a front-end developer for initially but slowly moved into server side taking me into DevOps. Confident with Data Structures and Software Architecture principles",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - 2025 (present)",
  },
  {
    title: "National Team Captain",
    location: "Team Vimaanas Inc, India 🇮🇳",
    description:
      "Competed in SAE Aerodesign East held at Lakeland, Florida 🇺🇸 representing the University and India",
    icon: React.createElement(CgAirplane),
    date: "2023 - 2024",
  },
  {
    title: "DevOps Engineer (Intern)",
    location: "Mphasis Ltd, Remote 🇮🇳/🇺🇸",
    description:
      "Managed end-to-end automated deployment pipelines using enterprise Jenkins in Client Network and maintained infrastructure in AWS",
    icon: React.createElement(BsPersonWorkspace),
    date: "2023 Sept - 2024 Dec (4 months)",
  },
  {
    title: "Vice-Chairperson",
    location: "IEEE - Computer Society VIT",
    description:
      "As a technical senior at the student chapter i have initiated collegiate projects involving crucial techniques like Load Balancing and Distributed Systems",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - 2025 (present)",
  },
] as const;

export const projectsData = [
  {
    title: "Python Django App deployment on AWS",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["Python", "Docker", "EKS", "Kubernertes"],
    imageUrl: aws,
  },
  {
    title: "Jenkins Shared Library Project",
    description:
      "Developed a Jenkins Shared Library Project, optimizing CI/CD pipelines organization-wide",
    tags: ["Jenkins", "CI/CD", "AWS", "EC2", "Linux"],
    imageUrl: jenkins,
  },
  {
    title: "K8s Deployment on EKS",
    description:
      "Orchestrated Kubernetes deployment on Amazon EKS, ensuring seamless container orchestration and scaling for mission-critical applications.",
    tags: ["Kubernetes", "YAML", "AWS", "EKS"],
    imageUrl: k8s,
  },
  {
    title: "Cluster & Pod monitoring",
    description:
      "Kubernetes Cluster and Pod/Container monitoring with Grafana Prometheus using HELM CHARTS and RBAC",
    tags: ["Kubernetes", "Prometheus", "Grafanna", "HELM"],
    imageUrl: prometheus,
  },
] as const;

export const skillsData = [
  "Jenkins CI/CD",
  "Redhat Linux",
  "Python",
  "C++",
  "Golang",
  "Docker",
  "Ansible",
  "Kubernetes",
  "ArgoCD",
  "Git",
  "AWS",
  "Terraform (IaC)",
  "HTML",
  "CSS",
  "JavaScript",
  "Tailwind CSS",
  "GitOps",
  "Grafanna",
  "Prometheus",
  "HELM Charts"
] as const;

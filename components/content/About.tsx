"use client";
import {
  generalKnowledge,
  organizationExperience,
  professionalCertificate,
  workExperience,
} from "@/constants";
import { motion } from "framer-motion";
import Link from "next/link";
import { AiOutlineLink } from "react-icons/ai";

type Props = {};

export default function About({}: Props) {
  return (
    <div>
      <h1
        className="text-7xl underline underline-offset-8 
      mx-5
      md:mx-0
      "
      >
        About Me
      </h1>

      {/* Graduate */}
      <motion.section
        initial={{ x: -50 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1 }}
        className=" font-medium 
        text-3xl mx-5 mt-20 
      md:mx-0 md:w-5/6"
      >
        Graduate at December 2022 of Information System majoring in Business
        Information Technology at Bina Nusantara University with a Professional
        Certificate of Front-End developer at Meta.
      </motion.section>

      {/* Focus */}
      <motion.section
        initial={{ x: -50 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1 }}
        className="text-xl text-gray-700 font-medium mx-5
      md:mx-0 pt-10 md:w-5/6"
      >
        With around two years of working experience, I have decided to fully
        commit on becoming a <b className="font-bold text-black">Full-Stack</b>{" "}
        Developer that Specialized on{" "}
        <b className="font-bold text-black">Front-End</b>.
      </motion.section>

      {/* General Knowledge */}
      <section
        className="
        mx-5 mt-20 
        mx:mx-0 "
      >
        <motion.h1
          initial={{ x: -50, opacity: 0.5 }}
          transition={{ duration: 1 }}
          whileInView={{ x: 0, opacity: 1 }}
          className="flex items-start text-5xl gap-3 relative"
        >
          <span>General Knowledge</span>
          <motion.span
            initial={{ x: -50, opacity: 0.5 }}
            transition={{ duration: 1 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="w-[100px] h-[30px] bg-teal-700/50 backdrop-blur-[.5px] absolute "
          ></motion.span>

          {/* <AiFillLinkedin className="text-yellow-500 text-2xl"></AiFillLinkedin> */}
        </motion.h1>

        <ul className="flex flex-col gap-5 pt-10 text-xl ">
          {generalKnowledge.map((v, i, a) => {
            return (
              <>
                {" "}
                <motion.li
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  {v.list}
                </motion.li>
                <motion.li
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="h-[1px] w-full bg-gray-400"
                />
              </>
            );
          })}
        </ul>
      </section>

      {/* Profesional Certifications */}
      <section
        className="
        mx-5 mt-20 
        mx:mx-0 "
      >
        <motion.h1
          initial={{ x: -50, opacity: 0.5 }}
          transition={{ duration: 1 }}
          whileInView={{ x: 0, opacity: 1 }}
          className="flex items-start text-5xl gap-3 relative"
        >
          <span>Professional Certificate</span>
          <motion.span
            initial={{ x: -50, opacity: 0.5 }}
            transition={{ duration: 1 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="w-[100px] h-[30px] bg-teal-700/50 backdrop-blur-[.5px] absolute "
          ></motion.span>

          {/* <AiFillLinkedin className="text-yellow-500 text-2xl"></AiFillLinkedin> */}
        </motion.h1>

        <div className="flex flex-col gap-5 pt-10 text-xl ">
          {professionalCertificate.map((v, i, a) => {
            return (
              <>
                <a target="_blank" href={v.link}>
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="hover:black hover:font-extrabold transition-all ease-in-out duration-500"
                  >
                    {v.list}
                  </motion.span>
                </a>
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="h-[1px] w-full bg-gray-400"
                />
              </>
            );
          })}
        </div>
      </section>

      {/* Work Experience */}
      <section
        className=" 
        mt-20 mx-5"
      >
        <motion.h1
          initial={{ x: -50, opacity: 0.5 }}
          transition={{ duration: 1 }}
          whileInView={{ x: 0, opacity: 1 }}
          className="flex items-start text-5xl gap-3 relative"
        >
          <span>Work Experience</span>
          <motion.span
            initial={{ x: -50, opacity: 0.5 }}
            transition={{ duration: 1 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="w-[100px] h-[30px] bg-teal-700/50 backdrop-blur-[.5px] absolute "
          ></motion.span>
        </motion.h1>
        <ul className="flex flex-col gap-5 pt-10 text-xl">
          {workExperience.map((v, i, a) => {
            return (
              <>
                <motion.li
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <p className="font-semibold">{v.list}</p>
                  <p>{v.desc}</p>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="h-[1px] w-full bg-gray-400"
                />
              </>
            );
          })}
        </ul>
      </section>

      {/* Organization Experience */}
      <section
        className=" 
        mt-20 mx-5"
      >
        <motion.h1
          initial={{ x: -50, opacity: 0.5 }}
          transition={{ duration: 1 }}
          whileInView={{ x: 0, opacity: 1 }}
          className="flex items-start text-5xl gap-3 relative"
        >
          <span>Organization Experience</span>
          <motion.span
            initial={{ x: -50, opacity: 0.5 }}
            transition={{ duration: 1 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="w-[100px] h-[30px] bg-teal-700/50 backdrop-blur-[.5px] absolute "
          ></motion.span>
        </motion.h1>
        <ul className="flex flex-col gap-5 pt-10 text-xl">
          {organizationExperience.map((v, i, a) => {
            return (
              <>
                <motion.li
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <p className="font-semibold">{v.list}</p>
                  <p>{v.desc}</p>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="h-[1px] w-full bg-gray-400"
                />
              </>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

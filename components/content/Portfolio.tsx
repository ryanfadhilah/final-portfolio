"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import {
  SiGraphql,
  SiMongodb,
  SiNextdotjs,
  SiPrisma,
  SiFigma,
} from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { TbBrandFramerMotion } from "react-icons/tb";
import { portfolio } from "@/constants";

type Props = {};

export default function Portfolio({}: Props) {
  return (
    <div>
      <h1
        className="text-7xl underline underline-offset-8
      mx-5
      md:mx-0"
      >
        Portfolio
      </h1>

      {/* React Hooks */}
      {portfolio.map((v, i, a) => {
        return (
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="group
  mx-5 mt-20
  md:mx-0"
          >
            <h1 className="text-5xl">{v.title}</h1>
            <div
              className="flex mt-10
    flex-col gap-5
    md:flex-row-reverse"
            >
              <a
                href={v.link}
                target="_blank"
                className="bg-black shadow-lg hover:shadow-black/80 transition-all ease-out duration-500
      w-full
      md:w-1/2"
              >
                <Image
                  src={`${v.image}`}
                  alt="foto"
                  width={500}
                  height={500}
                ></Image>
              </a>
              <span
                className=" flex flex-col gap-5 
      w-full 
      md:w-1/2"
              >
                <h2>{v.desc}</h2>
                <h3 className="text-2xl">Stack</h3>
                <p className="flex gap-3">
                  {v.stack.includes("figma") && <SiFigma></SiFigma>}
                  {v.stack.includes("fmotion") && (
                    <TbBrandFramerMotion></TbBrandFramerMotion>
                  )}
                  {v.stack.includes("react") && <FaReact></FaReact>}
                  {v.stack.includes("next") && <SiNextdotjs></SiNextdotjs>}
                  {v.stack.includes("mongodb") && <SiMongodb></SiMongodb>}
                  {v.stack.includes("prisma") && <SiPrisma></SiPrisma>}
                  {v.stack.includes("gql") && <SiGraphql></SiGraphql>}
                </p>

                <span className="flex">
                  <a
                    href={v.link}
                    target="_blank"
                    className="px-7 py-3 bg-black text-white flex hover:bg-black/70 transition-all ease-out duration-300"
                  >
                    Visit
                  </a>
                </span>
              </span>
            </div>
          </motion.section>
        );
      })}
    </div>
  );
}

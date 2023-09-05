"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function Intro({}: Props) {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex 
      flex-col gap-10
      md:flex-row md:gap-5"
    >
      {/* Profile */}
      <div
        className="flex flex-col gap-5
      items-center
      md:items-start "
      >
        <motion.h1
          initial={{ y: -300 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1.5, ease: [0.6, 0.01, -0.05, 0.9] }}
          className="font-bold
        text-4xl 
        md:text-8xl "
        >
          Software Engineer<br></br> & Designer
        </motion.h1>

        <motion.p
          initial={{ y: -200 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1.5, ease: [0.6, 0.01, -0.05, 0.9] }}
          className="text-2xl font-medium"
        >
          Front-End, Indonesia
        </motion.p>

        <div className="pt-5">
          <Link href={"/about"} className="bg-black text-white py-4 px-7">
            About Me
          </Link>
        </div>
      </div>

      <motion.div
        initial={{ scale: 0.5 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.5, ease: [0.6, 0.01, -0.05, 0.9] }}
        className="flex items-center justify-center bg-black 
        px-5 py-10
      md:px-10 md:py-20"
      >
        <Image
          src={"/ProfilePicturePhoto.jpg"}
          alt="photo"
          width={400}
          height={400}
        ></Image>
      </motion.div>
    </motion.main>
  );
}

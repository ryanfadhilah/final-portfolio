"use client";

import Image from "next/image";
import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

type Props = {};

export default function Intro({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Indonesia", "Jakarta"],
    loop: true,
    delaySpeed: 3000,
  });
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
        mx-5
      md:mx-0 "
      >
        <motion.h1
          initial={{ y: -300 }}
          animate={{ y: 0 }}
          transition={{ duration: 1.5, ease: [0.6, 0.01, -0.05, 0.9] }}
          className="font-bold
        text-6xl 
        md:text-8xl "
        >
          Software Engineer
        </motion.h1>

        <motion.p
          initial={{ y: -200 }}
          animate={{ y: 0 }}
          transition={{ duration: 1.5, ease: [0.6, 0.01, -0.05, 0.9] }}
          className="text-4xl font-medium"
        >
          <span className="text-gray-500">Specialized in </span>Front-End
        </motion.p>
        <motion.p
          initial={{ y: -200 }}
          animate={{ y: 0 }}
          transition={{ duration: 1.5, ease: [0.6, 0.01, -0.05, 0.9] }}
          className="text-2xl font-medium"
        >
          {/*  indonesia */}
          {text}
          <Cursor cursorColor="#F7AB0A" />
          <span className=" text-transparent">.</span>
        </motion.p>

        <div className="pt-5">
          <Link href={"/about"} className="bg-black text-white py-4 px-7">
            About Me
          </Link>
        </div>
      </div>

      <motion.div
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: [0.6, 0.01, -0.05, 0.9] }}
        className="flex flex-col items-center justify-center bg-black 
        px-5 pt-10 gap-5
      md:gap-10 md:px-10 md:py-20"
      >
        <Image
          src={"/profiles.jpeg"}
          alt="photo"
          width={400}
          height={400}
        ></Image>
        <h1 className="text-white text-xl flex w-full">Ryan Fadhilah</h1>
      </motion.div>
    </motion.main>
  );
}

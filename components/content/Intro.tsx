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
          <a
            href="/CV_Ryan.pdf"
            download
            className="bg-black text-white py-4 px-7 hover:bg-black/70 transition-all ease-out duration-200"
          >
            Curriculum Vitae
          </a>
        </div>
      </div>

      {/* Photo Large */}
      <motion.div
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: [0.6, 0.01, -0.05, 0.9] }}
        className="hidden bg-black 
        px-5 pt-10 gap-5 mt-40
      md:gap-10 md:px-10 md:py-20 md:mt-0 md:flex md:flex-col md:items-center md:justify-center"
      >
        <Image
          src={"/profiles.jpeg"}
          alt="photo"
          width={400}
          height={400}
        ></Image>
        <h1 className="text-white text-xl flex w-full">Ryan Fadhilah</h1>
      </motion.div>

      {/* Photo Small */}
      <motion.div
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: [0.6, 0.01, -0.05, 0.9] }}
        className="flex  justify-center items-center gap-5
        md:hidden"
      >
        <h1 className="text-2xl font-bold">Ryan Fadhilah</h1>
        <Image
          src={"/profiles.jpeg"}
          alt="photo"
          width={150}
          height={150}
          className="rounded-full"
        ></Image>
      </motion.div>
    </motion.main>
  );
}

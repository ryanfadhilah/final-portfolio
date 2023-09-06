"use client";

import { motion } from "framer-motion";
import { BsLinkedin } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

type Props = {};

export default function Contact({}: Props) {
  return (
    <section>
      <h1 className="text-7xl underline underline-offset-8">Contact</h1>

      <div
        className="mt-14 w-full flex gap-5
      flex-col
      md:flex-row
      "
      >
        {/* White */}
        <span
          className="flex items-start
        mx-5 py-5
        md:mx-0"
        >
          <span className="flex items-center gap-5">
            <h1 className="text-5xl font-semibold">Fast</h1>
            <BsLinkedin className="text-xl"></BsLinkedin>
          </span>
        </span>

        {/* Black */}
        <motion.span
          initial={{ x: -150 }}
          whileInView={{ x: 0 }}
          transition={{
            duration: 1.5,
            ease: [0.43, 0.13, 0.23, 0.96],
            delay: 0.5,
          }}
          className="w-5/6 text-white bg-black 
          h-80 p-5
          md:h-96"
        >
          <span className="flex items-center gap-2 ">
            <h1 className="text-5xl ">E-mail</h1>
            {/* <FcGoogle className="text-xl"></FcGoogle> */}
          </span>
        </motion.span>
      </div>
    </section>
  );
}

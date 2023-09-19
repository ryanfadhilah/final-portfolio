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
          <a
            href="https://www.linkedin.com/in/ryan-fadhilah-03146918a/"
            target="_blank"
            className="flex items-center gap-5"
          >
            <BsLinkedin className="text-3xl"></BsLinkedin>
            <span className="md:hidden text-2xl ">Fast Response</span>
          </a>
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
            <motion.a
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2 }}
              href="mailto:ryan.fadhilah.acc@gmail.com"
              target="_blank"
              className="text-xl "
            >
              ryan.fadhilah.acc@gmail.com
            </motion.a>
            {/* <FcGoogle className="text-xl"></FcGoogle> */}
          </span>
        </motion.span>
      </div>
    </section>
  );
}

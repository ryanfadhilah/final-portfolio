"use client";

import { motion } from "framer-motion";

type Props = {};

export default function Contact({}: Props) {
  return (
    <section>
      <h1 className="text-7xl underline underline-offset-8">Contact</h1>

      <div
        className="mt-14 w-full flex
      flex-col
      md:flex-row
      "
      >
        <span
          className="w-1/6 flex p-5
        flex-col"
        >
          <h1 className="text-5xl">Fast</h1>
          <ul
            className="flex
          flex-row
          md:flex-col"
          >
            <li>React</li>
            <li>next</li>
            <li>GQL</li>
          </ul>
        </span>

        <motion.span
          initial={{ x: -200 }}
          whileInView={{ x: 0 }}
          transition={{
            duration: 1.5,
            ease: [0.43, 0.13, 0.23, 0.96],
            delay: 0.5,
          }}
          className="w-5/6 text-white bg-black h-96 text-4xl 
          
          p-5"
        >
          Formal
        </motion.span>
      </div>
    </section>
  );
}

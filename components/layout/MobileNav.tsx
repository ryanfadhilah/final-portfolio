"use client";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { CgMenuRight } from "react-icons/cg";

import { useState } from "react";

type Props = {};
const variants = {
  // open: { opacity: 1, x: 0 },
  // closed: { opacity: 0, x: "-100%" },
  closed: {
    x: 500,
  },
  open: {
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.9],
    },
  },
};

export default function MobileNav({}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" flex md:hidden text-white font-medium">
      {/* Nav */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="text-3xl cursor-pointer text-black"
      >
        <CgMenuRight></CgMenuRight>
      </div>

      {/* opened */}
      <motion.div
        variants={variants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        className=" bg-white shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen z-20 flex flex-col
        // bg-gray-100/90 backdrop-blur-3xl
        "
      >
        <span
          onClick={() => setIsOpen(!isOpen)}
          className="text-4xl absolute z-30 left-4 top-5 cursor-pointer"
        >
          <IoMdClose className="text-gray-700"></IoMdClose>
        </span>
        <ul className="h-full flex flex-col justify-center items-center gap-y-8 text-3xl  text-black">
          <Link
            href="/"
            className="custom-hover hover:underline hover:underline-offset-8"
          >
            Home
          </Link>
          <Link href="/about" className="custom-hover hover:text-black">
            About
          </Link>
          <Link href="/portfolio" className="custom-hover hover:text-black">
            Portfolio
          </Link>
          {/* <Link href="/learn" className="custom-hover hover:text-black">
            How I learn ?
          </Link> */}
          <Link href="/contact" className="custom-hover hover:text-black">
            Collaborate
          </Link>
        </ul>
      </motion.div>
    </nav>
    // <motion.nav animate={isOpen ? "open" : "closed"} variants={variants}>
    //   {/* <Toggle onClick={() => setIsOpen(isOpen => !isOpen)} /> */}
    //   {/* <Items /> */}
    // </motion.nav>
  );
}
import React from "react";
import Link from "next/link";

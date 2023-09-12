"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { SiGraphql, SiMongodb, SiNextdotjs, SiPrisma } from "react-icons/si";
import { FaReact } from "react-icons/fa";

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
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="group
      mx-5 mt-20
      md:mx-0"
      >
        <h1 className="text-5xl">React-Hooks</h1>
        <div
          className="flex mt-10
        flex-col gap-5
        md:flex-row-reverse"
        >
          <a
            href="https://hooks-next-ryanfadhilahacc-gmailcom.vercel.app/"
            target="_blank"
            className="bg-black shadow-lg hover:shadow-black/80 transition-all ease-out duration-500
          w-full
          md:w-1/2"
          >
            <Image
              src={"/next.png"}
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
            <h2>
              Next.js is built on top of React. Understanding hooks is essential
              for effective component development and state management. React
              hooks such as useState, useEffect, and useTransition allow
              developer to manage component state and side effects such as
              loading state, dark mode and many more.
            </h2>
            <h3 className="text-2xl">Stack</h3>
            <p className="flex gap-3">
              <SiNextdotjs></SiNextdotjs>
              <FaReact></FaReact>
            </p>

            <span className="flex">
              <a
                href="https://hooks-next-ryanfadhilahacc-gmailcom.vercel.app/"
                target="_blank"
                className="px-7 py-3 bg-black text-white flex hover:bg-black/70 transition-all ease-out duration-300"
              >
                Visit
              </a>
            </span>
          </span>
        </div>
      </motion.section>

      {/* Todo List */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="
      mx-5 mt-20
      md:mx-0"
      >
        <h1 className="text-5xl">Todo-List</h1>
        <div
          className="flex mt-10 group
        flex-col gap-5
        md:flex-row-reverse"
        >
          <a
            href="https://next-todo-ryanfadhilahacc-gmailcom.vercel.app/"
            target="_blank"
            className="bg-black shadow-lg hover:shadow-black/80 transition-all ease-out duration-500
          w-full
          md:w-1/2"
          >
            <Image
              src={"/next.png"}
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
            <h2>
              Todo List is developer first app in every framework, it is
              commonly used as a method to introduce how a CRUD operations being
              implement in certain framework.
            </h2>
            <h3 className="text-2xl">Stack</h3>
            <p className="flex gap-3">
              <SiNextdotjs></SiNextdotjs>
              <FaReact></FaReact>
              <SiMongodb></SiMongodb>
              <SiPrisma></SiPrisma>
            </p>
            <span className="flex">
              <a
                href="hhttps://next-todo-ryanfadhilahacc-gmailcom.vercel.app/"
                target="_blank"
                className="px-7 py-3 bg-black text-white flex hover:bg-black/70 transition-all ease-out duration-300"
              >
                Visit
              </a>
            </span>
          </span>
        </div>
      </motion.section>

      {/* Blog */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="
      mx-5 mt-20
      md:mx-0"
      >
        <h1 className="text-5xl">Simple-Blog</h1>
        <div
          className="flex mt-10 group
        flex-col gap-5
        md:flex-row-reverse"
        >
          <a
            href="https://next-blog-grafbase-ryanfadhilahacc-gmailcom.vercel.app/"
            target="_blank"
            className="bg-black shadow-lg hover:shadow-black/90 transition-all ease-out duration-500
          w-full
          md:w-1/2"
          >
            <Image
              src={"/next.png"}
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
            <h2>
              Just like Todo-List, creating a Simple Blog App help us to dive
              deeper in learning CRUD operations & more advance concept into
              Next.js framework such as, handling Image, authentication,
              metadata, and more complex database.
            </h2>
            <h3 className="text-2xl">Stack</h3>
            <p className="flex gap-3">
              <SiNextdotjs></SiNextdotjs>
              <FaReact></FaReact>
              <SiGraphql></SiGraphql>
            </p>
            <span className="flex">
              <a
                href="https://next-blog-grafbase-ryanfadhilahacc-gmailcom.vercel.app/"
                target="_blank"
                className="px-7 py-3 bg-black text-white flex hover:bg-black/70 transition-all ease-out duration-300"
              >
                Visit
              </a>
            </span>
          </span>
        </div>
      </motion.section>

      {/* E-commerce */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="
      mx-5 mt-20
      md:mx-0"
      >
        <h1 className="text-5xl">E-commerce</h1>
        <div
          className="flex mt-10 group
        flex-col gap-5
        md:flex-row-reverse"
        >
          <a
            href="https://tokopedia-lite-ryanfadhilahacc-gmailcom.vercel.app/"
            target="_blank"
            className="bg-black shadow-lg hover:shadow-black/80 transition-all ease-out duration-500
          w-full
          md:w-1/2"
          >
            <Image
              src={"/next.png"}
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
            <h2>
              Track and Merge data. Using cookies to temporarily handle data as
              an anonymous cart. The anonymous cart will be merged into the
              database once the user finally logged in / create their account.
            </h2>
            <h3 className="text-2xl">Stack</h3>
            <p className="flex gap-3">
              <SiNextdotjs></SiNextdotjs>
              <FaReact></FaReact>
              <SiMongodb></SiMongodb>
              <SiPrisma></SiPrisma>
            </p>
            <span className="flex">
              <a
                href="https://tokopedia-lite-ryanfadhilahacc-gmailcom.vercel.app/"
                target="_blank"
                className="px-7 py-3 bg-black text-white flex hover:bg-black/70 transition-all ease-out duration-300"
              >
                Visit
              </a>
            </span>
          </span>
        </div>
      </motion.section>

      {/* Social Media */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="
      mx-5 mt-20
      md:mx-0"
      >
        <h1 className="text-5xl">Social-Media</h1>
        <div
          className="flex mt-10 group
        flex-col gap-5
        md:flex-row-reverse"
        >
          <span
            className="bg-black shadow-lg hover:shadow-black/80 transition-all ease-out duration-500
          w-full
          md:w-1/2"
          >
            <Image
              src={"/next.png"}
              alt="foto"
              width={500}
              height={500}
            ></Image>
          </span>
          <span
            className=" flex flex-col gap-5
          w-full 
          md:w-1/2"
          >
            <h2>
              Learning more complex database for comments & replied
              sub-comments, making the sub-comments as a new parent. User can
              now comment another sub comments and make them as a new
              thread/tweet. This logic can be implemented using recrusion.
            </h2>
            <h3 className="text-2xl">Stack</h3>
            <p className="flex gap-3">
              <SiNextdotjs></SiNextdotjs>
              <FaReact></FaReact>
              <SiMongodb></SiMongodb>
            </p>
            <span className="flex">
              <a
                href="https://twitter-lite-ryanfadhilahacc-gmailcom.vercel.app/"
                target="_blank"
                className="px-7 py-3 bg-black text-white flex hover:bg-black/70 transition-all ease-out duration-300"
              >
                Visit
              </a>
            </span>
          </span>
        </div>
      </motion.section>
    </div>
  );
}

"use client";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <div>
      {/* Graduate */}
      <motion.section
        initial={{ x: -100 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl font-medium mx-5
      md:mx-0 md:w-5/6"
      >
        Graduate (Dec 22) of Information System majoring in Business Information
        Technology at Bina Nusantara University with a Professional Certificate
        of SAP Technology Consultant and Google Data Analytics.
      </motion.section>

      {/* Focus */}
      <motion.section
        initial={{ x: -100 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1 }}
        className="text-1xl font-medium mx-5
      md:mx-0 pt-10 md:w-5/6"
      >
        With around two years of working experience, I have decided to fully
        commit on becoming a Full-Stack that Specialized on Front-End
      </motion.section>

      <section
        className=" 
        mt-20 mx-5"
      >
        <motion.h1
          initial={{ x: -100, opacity: 0.5 }}
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
        <ul className="flex flex-col gap-5 pt-10 text-xl">
          <motion.li
            initial={{ scale: 0.9, opacity: 0.5 }}
            transition={{ duration: 1 }}
            whileInView={{ scale: 1, opacity: 1 }}
          >
            UI/UX
          </motion.li>
          <motion.li
            initial={{ scale: 0.9, opacity: 0.5 }}
            transition={{ duration: 1 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="h-[2px] w-full bg-teal-950"
          />
          <motion.li
            initial={{ scale: 0.9, opacity: 0.5 }}
            transition={{ duration: 1 }}
            whileInView={{ scale: 1, opacity: 1 }}
          >
            UML Diagram
          </motion.li>
          <motion.li
            initial={{ scale: 0.9, opacity: 0.5 }}
            transition={{ duration: 1 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="h-[2px] w-full bg-teal-950"
          />
          <motion.li
            initial={{ scale: 0.9, opacity: 0.5 }}
            transition={{ duration: 1 }}
            whileInView={{ scale: 1, opacity: 1 }}
          >
            Programming
          </motion.li>
          <motion.li
            initial={{ scale: 0.9, opacity: 0.5 }}
            transition={{ duration: 1 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="h-[2px] w-full bg-teal-950"
          />
          <motion.li
            initial={{ scale: 0.9, opacity: 0.5 }}
            transition={{ duration: 1 }}
            whileInView={{ scale: 1, opacity: 1 }}
          >
            Data Analytic
          </motion.li>
          <motion.li
            initial={{ scale: 0.9, opacity: 0.5 }}
            transition={{ duration: 1 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="h-[2px] w-full bg-teal-950"
          />
          <motion.li
            initial={{ scale: 0.9, opacity: 0.5 }}
            transition={{ duration: 1 }}
            whileInView={{ scale: 1, opacity: 1 }}
          >
            Project Management
          </motion.li>
          <motion.li
            initial={{ scale: 0.9, opacity: 0.5 }}
            transition={{ duration: 1 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="h-[2px] w-full bg-teal-950"
          />
          <motion.li
            initial={{ scale: 0.9, opacity: 0.5 }}
            transition={{ duration: 1 }}
            whileInView={{ scale: 1, opacity: 1 }}
          ></motion.li>
        </ul>
      </section>

      <section>
        <ul>
          <li>CONSULTANT ASSISTANCE</li>
          <li>WEBSITE ASSISTANCE</li>
          <li>IT SUPPORT</li>
          <li>GRAPHIC DESIGNER</li>
          <li>DESIGN TEAM</li>
        </ul>
      </section>
    </div>
  );
}

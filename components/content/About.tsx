"use client";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <div>
      <h1
        className="text-7xl underline underline-offset-8 
      mx-5
      md:mx-0
      "
      >
        About Me
      </h1>

      {/* Graduate */}
      <motion.section
        initial={{ x: -50 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1 }}
        className=" font-medium 
        text-3xl mx-5 mt-20 
      md:mx-0 md:w-5/6"
      >
        Graduate (Dec 22) of Information System majoring in Business Information
        Technology at Bina Nusantara University with a Professional Certificate
        of SAP Technology Consultant and Google Data Analytics.
      </motion.section>

      {/* Focus */}
      <motion.section
        initial={{ x: -50 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1 }}
        className="text-1xl font-medium mx-5
      md:mx-0 pt-10 md:w-5/6"
      >
        With around two years of working experience, I have decided to fully
        commit on becoming a Full-Stack that Specialized on Front-End
      </motion.section>

      {/* General Knowledge */}
      <section
        className="
        mx-5 mt-20 
        mx:mx-0 "
      >
        <motion.h1
          initial={{ x: -50, opacity: 0.5 }}
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

        <ul className="flex flex-col gap-5 pt-10 text-xl ">
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            UI/UX
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="h-[2px] w-full bg-teal-950"
          />
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            UML Diagram
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="h-[2px] w-full bg-teal-950"
          />
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Programming
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="h-[2px] w-full bg-teal-950"
          />
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Data Analytic
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="h-[2px] w-full bg-teal-950"
          />
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Project Management
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="h-[2px] w-full bg-teal-950"
          />
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          ></motion.li>
        </ul>
      </section>

      {/* Work Experience */}
      <section
        className=" 
        mt-20 mx-5"
      >
        <motion.h1
          initial={{ x: -50, opacity: 0.5 }}
          transition={{ duration: 1 }}
          whileInView={{ x: 0, opacity: 1 }}
          className="flex items-start text-5xl gap-3 relative"
        >
          <span>Work Experience</span>
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
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <p className="font-semibold">PricewaterhouseCoopers Indonesia</p>
            <p>Consultant Asistance</p>
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="h-[2px] w-full bg-teal-950"
          />
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <p className="font-semibold">PricewaterhouseCoopers Indonesia</p>
            <p>Website Asistance</p>
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="h-[2px] w-full bg-teal-950"
          />
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <p className="font-semibold">Suntory Garuda Beverage</p>
            <p>IT SUPPORT</p>
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="h-[2px] w-full bg-teal-950"
          />
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <p className="font-semibold">Nature-E</p>
            <p>GRAPHIC DESIGNER</p>
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="h-[2px] w-full bg-teal-950"
          />
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <p className="font-semibold">Bina Nusantara University</p>
            <p>GRAPHIC DESIGNER</p>
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="h-[2px] w-full bg-teal-950"
          />
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          ></motion.li>
        </ul>
      </section>
    </div>
  );
}

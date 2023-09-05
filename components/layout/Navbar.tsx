"use client";
import { motion } from "framer-motion";
import Link from "next/link";
// import { SocialIcon } from "react-social-icons";
import MobileNav from "./MobileNav";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className=" fixed backdrop-blur-sm top-0 z-30 flex w-full items-center justify-end md:justify-center  px-3 py-5 tracking-[2px] text-black bg-white/70 text-sm">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="md:flex flex-row items-center gap-5 hidden "
      >
        <Link href="/" className="custom-hover hover:text-black">
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
          Contact
        </Link>
      </motion.div>
      <MobileNav></MobileNav>
    </nav>
  );
};

export default Navbar;

{
  /* <SocialIcon
  fgColor="gray"
  bgColor="transparent"
  url="https://github.com/ryanfadhilah"
></SocialIcon>
<SocialIcon
  fgColor="gray"
  bgColor="transparent"
  url="https://twitter.com/rynflh"
></SocialIcon>
<SocialIcon
  fgColor="gray"
  bgColor="transparent"
  url="https://www.linkedin.com/in/ryan-fadhilah-03146918a/"
></SocialIcon> */
}

"use client";
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const AnimatedNavbar = () => (
  <nav className="p-4 flex justify-between items-center">
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <Link href="/" className="text-2xl font-bold text-black">VarotP</Link>
    </motion.div>
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="space-x-5"
    >
      <Link
        href="Varot_Pavaritpong___Resume__.pdf"
        className="px-4 py-2 bg-white text-black text-[20px] rounded-lg hover:shadow-lg transition"
      >
        Resume
      </Link>
      <Link
        href="projects"
        className="px-4 py-2 bg-white text-black text-[20px] rounded-lg hover:shadow-lg transition"
      >
        Projects
      </Link>
      <Link
        href="https://github.com/VarotP"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
          className="inline-block h-10 w-10 mb-2"
          alt="GitHub"
          width={10}
          height={10}
        />
      </Link>
      <Link
        href="https://www.linkedin.com/in/varot-pavaritpong/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg"
          className="inline-block h-10 w-10 mb-2"
          alt="linkedIn"
          width={10}
          height={10}
        />
      </Link>
      <Link
        href="https://www.instagram.com/val12.ig/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/Instagram.svg"
          className="inline-block h-10 w-10 mb-2"
          alt="Instagram"
          width={10}
          height={10}
        />
      </Link>
    </motion.div>
  </nav>
);

export default AnimatedNavbar; 
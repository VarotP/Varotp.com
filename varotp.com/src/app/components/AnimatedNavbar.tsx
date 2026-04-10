"use client";
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const navLinks = [
  { href: 'resume.pdf', label: 'Resume' },
  { href: 'projects', label: 'Projects' },
];

const socialLinks = [
  { href: 'mailto:varotpava@gmail.com', src: '/email.svg', alt: 'Email' },
  { href: 'https://github.com/VarotP', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg', alt: 'GitHub' },
  { href: 'https://www.linkedin.com/in/varot-pavaritpong/', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg', alt: 'LinkedIn' },
  { href: 'https://www.instagram.com/val12.ig/', src: '/Instagram.svg', alt: 'Instagram' },
];

const AnimatedNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // // Dark mode disabled for now - will add new graphics later
  // const toggleDarkMode = () => {
  //   // Do nothing for now
  // };

  return (
    <nav className="relative p-4 flex justify-between items-center font-plus-jakarta-sans font-medium">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <Link href="/">
          <Image
            src="/whitefavIcon.png"
            alt="VarotP Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
        </Link>
      </motion.div>

      {/* Desktop nav */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="hidden md:flex items-center space-x-5"
      >
        <div className="flex items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-black text-[20px] rounded-lg hover:bg-black/10 transition"
            >
              {link.label}
            </Link>
          ))}
        </div>
        {socialLinks.map((link) => (
          <Link
            key={link.alt}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={link.src}
              className="inline-block h-10 w-10"
              alt={link.alt}
              width={40}
              height={40}
            />
          </Link>
        ))}
        {/* <button
          onClick={toggleDarkMode}
          className="p-2 rounded-lg hover:bg-black/10 transition"
          aria-label="Toggle dark mode"
        >
          <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        </button> */}
      </motion.div>

      {/* Mobile menu button */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="md:hidden flex items-center space-x-2"
      >
        {/* <button
          onClick={toggleDarkMode}
          className="p-2 rounded-lg hover:bg-black/10 transition"
          aria-label="Toggle dark mode"
        >
          <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        </button> */}
        <button
          className="p-2 rounded-lg hover:bg-black/10 transition"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </motion.div>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute left-0 right-0 top-[73px] bg-white shadow-lg border-b border-gray-200 z-50 overflow-hidden"
          >
            <div className="flex flex-col p-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 text-black text-lg rounded-lg hover:bg-gray-100 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex gap-4 pt-3 border-t border-gray-200">
                {socialLinks.map((link) => (
                  <Link
                    key={link.alt}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Image
                      src={link.src}
                      className="h-10 w-10"
                      alt={link.alt}
                      width={40}
                      height={40}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default AnimatedNavbar;

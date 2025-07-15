'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import AnimatedNavbar from './components/AnimatedNavbar';
import Footer from './components/Footer';

export default function Home() {
      return (
      <div className="bg-white">
        <div
          className="bg-no-repeat bg-center bg-cover w-full pb-20"
          style={{ backgroundImage: "url('/background.png')" }}
        >
            <AnimatedNavbar />
        <div className="flex flex-col items-center justify-center p-6 space-y-6 md:flex-row md:h-[calc(100vh)] md:space-y-0 md:space-x-45 md:px-50 md:py-10">
          <div className="text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <p className="text-[40px] md:text-[64px] text-black">
                Varot Pavaritpong
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            >
              <p className="text-[24px] md:text-[64px] text-black">
                4th year BA CS @ UBC
              </p>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
          >
            <Image
              src="/myPhoto.png"
              alt="My Photo"
              className="mx-auto mt-4"
              width={256}
              height={256}
              quality={100}
            />
          </motion.div>
        </div>
        <div className="flex flex-col items-center md:mb-75 mb-25">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <div className="text-[48px] text-black font-poppins text-center mb-5">
              About Me
            </div>
            <div className="text-[20px] text-black font-poppins md:w-1/2 w-3xs mx-auto text-justify mt-4">
              I’m a full stack developer who believes great ideas come to life
              through curiosity, creativity, and clean code. Currently, I’m a
              third-year Computer Science student at UBC, where I’m honing my
              skills in building scalable, thoughtful applications. Outside of
              coding, I’m passionate about photography and exploring how visual
              storytelling and technology intersect. Whether I’m developing a
              new project, writing a guide, or capturing a moment through my
              lens, I’m driven by a love for learning, creating, and sharing
              ideas with the world.
            </div>
          </motion.div>
        </div>
        <div className="md:mb-50 mb-25">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <div className="text-[48px] text-black font-poppins text-center mb-10">
              Projects
            </div>
            <div className="flex flex-col justify-center items-center md:flex-row mb-10">
              <div>
                <div className="relative bg-gray-100 p-4 rounded-lg shadow-md m-4 w-75 h-75">
                  <Link href="projects" className="flex flex-col items-center">
                    <Image
                      src="/airbnb.png"
                      alt="airbnb-project-image"
                      fill
                      sizes="(max-width: 768px) 50vw, 256px"
                    />
                  </Link>
                </div>
                <div className="text-[20px] text-black font-poppins text-center">
                  Airbnb Popularity Predictor
                </div>
              </div>
              <div>
                <div className="relative bg-gray-100 p-4 rounded-lg shadow-md m-4 w-75 h-75">
                  <Link
                    href="projects"
                    className="flex flex-col items-center"
                  >
                    <Image
                      src="/catclicker.png"
                      alt="catclicker-image"
                      fill
                      sizes="(max-width: 768px) 50vw, 256px"
                    />
                  </Link>
                </div>
                <div className="text-[20px] text-black font-poppins text-center">
                  Cat Clicker
                </div>
              </div>
              <div>
                <div className="relative bg-gray-100 p-4 rounded-lg shadow-md m-4 w-75 h-75">
                  <Link
                    href="projects"
                    className="flex flex-col items-center"
                  >
                    <Image
                      src="/forecast.png"
                      alt="dailyplan-forecast-image"
                      fill
                      sizes="(max-width: 768px) 50vw, 256px"
                    />
                  </Link>
                </div>
                <div className="text-[20px] text-black font-poppins text-center">
                  DailyPlan Forecast
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center md:flex-row mt-10">
              <div>
                <div className="relative bg-gray-100 p-4 rounded-lg shadow-md m-4 w-75 h-75">
                  <Link
                    href="projects"
                    className="flex flex-col items-center"
                  >
                    <Image
                      src="/Plantis.png"
                      alt="airbnb-project-image"
                      fill
                      sizes="(max-width: 768px) 50vw, 256px"
                    />
                  </Link>
                </div>
                <div className="text-[20px] text-black font-poppins text-center">
                  Plantis
                </div>
              </div>
              <div>
                <div className="relative bg-gray-100 p-4 rounded-lg shadow-md m-4 w-75 h-75">
                  <Link
                    href="projects"
                    className="flex flex-col items-center"
                  >
                    <Image
                      src="/Plannify.png"
                      alt="catclicker-image"
                      fill
                      sizes="(max-width: 768px) 50vw, 256px"
                    />
                  </Link>
                </div>
                <div className="text-[20px] text-black font-poppins text-center">
                  Plannify
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="whatIworkWith mb-50">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <div className="text-[48px] text-black font-poppins text-center mb-15">
              What I Work With
            </div>
            <div className="flex flex-col justify-center items-center space-y -10 md:flex-row md:space-x-10 md:space-y-0">
              <div>
                <div className="text-[20px] text-black font-poppins text-center">
                  Languages
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                    className="h-20 w-20"
                    alt="javascript"
                    width={20}
                    height={20}
                  />
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                    className="h-20 w-20"
                    alt="typescript"
                    width={20}
                    height={20}
                  />
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
                    className="h-20 w-20"
                    alt="python"
                    width={20}
                    height={20}
                  />
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scala/scala-original.svg"
                    className="h-20 w-20"
                    alt="scala"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
              <div>
                <div className="text-[20px] text-black font-poppins text-center">
                  Back-end
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg"
                    className="h-20 w-20"
                    alt="spring"
                    width={20}
                    height={20}
                  />
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
                    className="h-20 w-20"
                    alt="node"
                    width={20}
                    height={20}
                  />
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
                    className="h-20 w-20"
                    alt="mysql"
                    width={20}
                    height={20}
                  />
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
                    className="h-20 w-20"
                    alt="java"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
              <div>
                <div className="text-[20px] text-black font-poppins text-center">
                  Front-end
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                    className="h-20 w-20"
                    alt="react"
                    width={20}
                    height={20}
                  />
                  <Image
                    src="/react-native-1.svg"
                    className="h-20 w-20"
                    alt="react-native"
                    width={20}
                    height={20}
                  />
                  <Image
                    src="/expo.svg"
                    className="h-20 w-20"
                    alt="expo"
                    width={20}
                    height={20}
                  />
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                    className="h-20 w-20"
                    alt="html"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
              <div>
                <div className="text-[20px] text-black font-poppins text-center">
                  Tools
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg"
                    className="h-20 w-20"
                    alt="gitlab"
                    width={20}
                    height={20}
                  />
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
                    className="h-20 w-20"
                    alt="docker"
                    width={20}
                    height={20}
                  />
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
                    className="h-20 w-20"
                    alt="figma"
                    width={20}
                    height={20}
                  />
                  <Image
                    src="/aws.svg"
                    className="h-20 w-20"
                    alt="aws"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
              <div>
                <div className="text-[20px] text-black font-poppins text-center">
                  Others
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg"
                    className="h-20 w-20"
                    alt="oracle"
                    width={20}
                    height={20}
                  />
                  <Image
                    src="/c++.svg"
                    className="h-20 w-20"
                    alt="c++"
                    width={20}
                    height={20}
                  />
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg"
                    className="h-20 w-20"
                    alt="postman"
                    width={20}
                    height={20}
                  />
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg"
                    className="h-20 w-20"
                    alt="jest"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

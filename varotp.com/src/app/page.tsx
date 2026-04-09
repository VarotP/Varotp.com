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
          style={{ backgroundImage: "url('/background.png')", backgroundPosition: "center 25%" }}
        >
            <AnimatedNavbar />
        <div className="flex flex-col items-center justify-center p-6 space-y-6 md:flex-row md:h-[calc(100vh)] md:space-y-0 md:space-x-24 md:px-12 md:py-10 md:-mt-5">
          <div className="text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <p className="text-[40px] md:text-[64px] text-black font-plus-jakarta-sans font-medium">
                Varot Pavaritpong
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            >
              <p className="text-[24px] md:text-[64px] text-black font-plus-jakarta-sans font-medium">
                4th year CS @ UBC
              </p>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
          >
            <Image
              src="/myPhoto.jpeg"
              alt="My Photo"
              className="mx-auto mt-4 border-2 border-white w-64 h-64 md:w-80 md:h-80"
              width={340}
              height={340}
              quality={100}
            />
          </motion.div>
        </div>
        <div className="flex flex-col items-center md:mb-20 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <div className="text-3xl md:text-[48px] text-black font-poppins text-center mb-5">
              About Me
            </div>
            <div className="text-base md:text-[20px] text-black font-poppins w-[90%] max-w-xl mx-auto text-justify mt-4 px-1">
           As a fourth-year Computer Science student at the University of British Columbia, I’ve spent my time mastering the balance between clean code and creative problem-solving. Having completed internships in cloud infrastructure and AI, I specialize in building robust, scalable systems that solve complex problems. I believe the best technology is rooted in curiosity, a principle I carry into both my development projects and my work as a photographer.
            </div>
          </motion.div>
        </div>
        <div className="md:mb-16 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <div className="text-3xl md:text-[48px] text-black font-poppins text-center mb-10">
              Projects
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
              <Link href="projects" className="group">
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                  <div className="relative h-40 bg-gray-100">
                    <Image
                      src="/pipelie.jpg"
                      alt="pipelie-project-image"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-4">
                    <div className="text-[18px] text-black font-poppins font-semibold">
                      PipeLie
                    </div>
                    <p className="text-sm text-gray-600 mt-1">Production-grade URL shortener with K8s</p>
                  </div>
                </div>
              </Link>
              <Link href="projects" className="group">
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                  <div className="relative h-40 bg-gray-100">
                    <Image
                      src="/phishpatrol.png"
                      alt="phishpatrol-project-image"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-4">
                    <div className="text-[18px] text-black font-poppins font-semibold">
                      PhishPatrol
                    </div>
                    <p className="text-sm text-gray-600 mt-1">Cybersecurity phishing simulation platform</p>
                  </div>
                </div>
              </Link>
              <Link href="projects" className="group">
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                  <div className="relative h-40 bg-gray-100">
                    <Image
                      src="/airbnb.png"
                      alt="airbnb-project-image"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-4">
                    <div className="text-[18px] text-black font-poppins font-semibold">
                      Airbnb Popularity Predictor
                    </div>
                    <p className="text-sm text-gray-600 mt-1">ML model for listing popularity</p>
                  </div>
                </div>
              </Link>
              <Link href="projects" className="group">
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                  <div className="relative h-40 bg-gray-100">
                    <Image
                      src="/Plantis.png"
                      alt="plantis-project-image"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-4">
                    <div className="text-[18px] text-black font-poppins font-semibold">
                      Plantis
                    </div>
                    <p className="text-sm text-gray-600 mt-1">Plant care tracking application</p>
                  </div>
                </div>
              </Link>
              <Link href="projects" className="group">
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                  <div className="relative h-40 bg-gray-100">
                    <Image
                      src="/Plannify.png"
                      alt="plannify-project-image"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-4">
                    <div className="text-[18px] text-black font-poppins font-semibold">
                      Plannify
                    </div>
                    <p className="text-sm text-gray-600 mt-1">Task management with calendar integration</p>
                  </div>
                </div>
              </Link>
              <Link href="projects" className="group">
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                  <div className="relative h-40 bg-gray-100">
                    <Image
                      src="/forecast.png"
                      alt="dailyplan-forecast-image"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-4">
                    <div className="text-[18px] text-black font-poppins font-semibold">
                      DailyPlan Forecast
                    </div>
                    <p className="text-sm text-gray-600 mt-1">Weather-based planning app</p>
                  </div>
                </div>
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="whatIworkWith mb-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <div className="text-3xl md:text-[48px] text-black font-poppins text-center mb-8">
              What I Work With
            </div>
            <div className="flex flex-col justify-center items-center space-y-10 md:flex-row md:space-x-10 md:space-y-0">
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

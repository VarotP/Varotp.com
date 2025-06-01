import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white">
      <div
        className="bg-no-repeat bg-center bg-cover w-full"
        style={{ backgroundImage: "url('/background.png')" }}
      >
        <nav className="p-4 flex justify-end items-center">
          <div className="space-x-5">
            <a href="Varot_Pavaritpong___Resume__.pdf" className="px-4 py-2 bg-white text-black text-[20px] rounded-lg transition">
              Resume
            </a>
            <a href="projects" className="px-4 py-2 bg-white text-black text-[20px] rounded-lg transition">
              Projects
            </a>
            <a href="blog" className="px-4 py-2 bg-white text-black text-[20px] rounded-lg transition">
              Blog
            </a>
            <a href="https://github.com/VarotP" target="_blank" rel="noopener noreferrer">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                className="inline-block h-10 w-10 mb-2"
                alt="GitHub"
              />
            </a>
            <a href="https://www.linkedin.com/in/varot-pavaritpong/" target="_blank" rel="noopener noreferrer">
            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg" className="inline-block h-10 w-10 mb-2" alt="linkedIn"/>
            </a>
            <a href="https://www.instagram.com/val12.ig/" target="_blank" rel="noopener noreferrer">
              <Image src="/Instagram.svg" className="inline-block h-10 w-10 mb-2" alt="Instagram"/>   
            </a>
          </div>
        </nav>
        <div className="flex flex-row items-center space-around h-screen p-50 max-h-250 space-x-45">
          <div>
            <p className="text-[64px] text-black font-poppins">Varot Pavaritpong</p>
            <p className="text-[64px] text-black">4th year BA CS @ UBC</p>
          </div>
          <Image src="myPhoto.png" alt="My Photo" className="w-64 h-64 mx-auto mt-4"/>
        </div>
        <div className="flex flex-col items-center mb-75">
          <div className="text-[48px] text-black font-poppins text-center mb-5">
            About Me
          </div>
          <div className="text-[20px] text-black font-poppins w-1/2 mx-auto text-justify mt-4">
            I’m a full stack developer who believes great ideas come to life through curiosity, creativity, and clean code. Currently, I’m a third-year Computer Science student at UBC, where I’m honing my skills in building scalable, thoughtful applications. Outside of coding, I’m passionate about photography and exploring how visual storytelling and technology intersect. Whether I’m developing a new project, writing a guide, or capturing a moment through my lens, I’m driven by a love for learning, creating, and sharing ideas with the world.
          </div>
        </div>
        <div className="mb-75">
        <div className="text-[48px] text-black font-poppins text-center mb-10">
          Projects
        </div>
        <div className="flex flex-row justify-center items-center">
          <div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-md m-4 w-75 h-75">
              <a href="projects" className="flex flex-col items-center">
                <Image src="/airbnb.png" alt="airbnb-project-image"/>
              </a>
            </div>
            <div className="text-[20px] text-black font-poppins text-center">
              Airbnb Popularity Predictor 
            </div>
          </div>
          <div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-md m-4 w-75 h-75">
              <a href="https://github.com/VarotP/CatClicker" className="flex flex-col items-center">
                  <Image src="/catclicker.png" alt="catclicker-image"/>
              </a>
            </div>
            <div className="text-[20px] text-black font-poppins text-center">
              Cat Clicker
            </div>
          </div>
          <div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-md m-4 w-75 h-75">
              <a href="https://github.com/VarotP/DailyPlan-Forecast" className="flex flex-col items-center">
                  <Image src="/forecast.png" alt="dailyplan-forecast-image"/>
              </a>
            </div>
            <div className="text-[20px] text-black font-poppins text-center">
              DailyPlan Forecast
            </div>
          </div>
        </div>
      </div>
      <div className="whatIworkWith mb-75">
        <div className="text-[48px] text-black font-poppins text-center mb-15">
          What I Work With
        </div>
        <div className="flex flex-row justify-center items-center space-x-10">
          <div>
            <div className="text-[20px] text-black font-poppins text-center">
              Languages
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" className="h-20 w-20" alt="javascript"/>
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" className="h-20 w-20" alt="typescript"/>
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" className="h-20 w-20" alt="python"/>
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scala/scala-original.svg" className="h-20 w-20" alt="scala"/>
            </div>
          </div>
          <div>
            <div className="text-[20px] text-black font-poppins text-center">
              Back-end
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" className="h-20 w-20" alt="spring"/>
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" className="h-20 w-20" alt="node"/>
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" className="h-20 w-20" alt="mysql"/>
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" className="h-20 w-20" alt="java"/>
            </div>
          </div>
          <div>
            <div className="text-[20px] text-black font-poppins text-center">
              Front-end
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" className="h-20 w-20" alt="react"/>
              <Image src="/react-native-1.svg" className="h-20 w-20" alt="react-native"/>
              <Image src="/expo.svg" className="h-20 w-20" alt="expo"/>
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" className="h-20 w-20" alt="html"/>
            </div>
          </div>
          <div>
            <div className="text-[20px] text-black font-poppins text-center">
              Tools
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg" className="h-20 w-20" alt="gitlab"/>
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" className="h-20 w-20" alt="docker"/>
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" className="h-20 w-20" alt="figma"/>
              <Image src="/aws.svg" className="h-20 w-20" alt="aws"/>
            </div>
          </div>
          <div>
            <div className="text-[20px] text-black font-poppins text-center">
              Others
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg" className="h-20 w-20" alt="oracle"/>
              <Image src="/c++.svg" className="h-20 w-20" alt="c++"/>
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" className="h-20 w-20" alt="postman"/>
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg" className="h-20 w-20" alt="jest"/>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
      <hr className="border-t border-blue-300 mtop-6 mx-20" />
        <div className="flex flex-row items-center justify-between px-20 py-10">
          <p className="text-center text-gray-500 text-sm">
            Built with Next.js and Tailwind CSS, Deployed on Vercel.
          </p>
          <p className="text-center text-gray-500 text-sm">
            © 2023 Varot Pavaritpong. All rights reserved.
          </p>
        </div>
      </div>
      </div>
    </div>
  );
}

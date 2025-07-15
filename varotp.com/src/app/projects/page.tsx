'use client';

import AnimatedNavbar from '../components/AnimatedNavbar';
import ProjectsListClient from './components/ProjectsListClient';
import Footer from '../components/Footer';
import { Project } from './components/ProjectsListClient';
import { motion } from 'framer-motion';

// Sample projects data
const projects: Project[] = [
  {
    id: '1',
    title: 'Airbnb Popularity Predictor',
    description: 'A machine learning model that predicts the popularity of Airbnb listings based on various features like location, amenities, and pricing.',
    image: '/airbnb.png',
    technologies: ['Python', 'Machine Learning', 'Pandas', 'Scikit-learn'],
    githubUrl: 'https://github.com/VarotP/airbnb-predictor',
    category: 'Machine Learning'
  },
  {
    id: '2',
    title: 'Cat Clicker',
    description: 'A fun browser game where players click on cats to earn points and unlock new features and upgrades.',
    image: '/catclicker.png',
    technologies: ['JavaScript', 'HTML', 'CSS', 'Game Development'],
    githubUrl: 'https://github.com/VarotP/CatClicker',
    liveUrl: 'https://catclicker-game.vercel.app',
    category: 'Game Development'
  },
  {
    id: '3',
    title: 'DailyPlan Forecast',
    description: 'A weather-based planning application that helps users organize their daily activities based on weather conditions.',
    image: '/forecast.png',
    technologies: ['React', 'Node.js', 'Weather API', 'MongoDB'],
    githubUrl: 'https://github.com/VarotP/DailyPlan-Forecast',
    category: 'Web Application'
  },
  {
    id: '4',
    title: 'Plantis',
    description: 'A plant care application that helps users track and maintain their indoor plants with watering schedules and care tips.',
    image: '/Plantis.png',
    technologies: ['React Native', 'Firebase', 'Plant API'],
    githubUrl: 'https://github.com/RandoNandoz/nwhacks-project',
    category: 'Mobile App'
  },
  {
    id: '5',
    title: 'Plannify',
    description: 'A comprehensive planning and task management application with calendar integration and team collaboration features.',
    image: '/Plannify.png',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    githubUrl: 'https://github.com/ThienB2/Plannify-React',
    category: 'Productivity'
  },
  {
    id: '6',
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website built with Next.js, featuring a blog with Notion integration and smooth animations.',
    image: '/myPhoto.png',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Notion API'],
    githubUrl: 'https://github.com/VarotP/varotp.dev',
    liveUrl: 'https://varotp.dev',
    category: 'Web Development'
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-white">
      <div
        className="bg-no-repeat bg-center bg-cover w-full min-h-screen"
        style={{ backgroundImage: "url('/background.png')" }}
      >
        <AnimatedNavbar />
        <div className="max-w-7xl mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Projects</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Here are some of the projects I&apos;ve worked on. Each one represents a unique challenge 
              and learning experience in my journey as a developer.
            </p>
          </motion.div>
          <ProjectsListClient projects={projects} />
        </div>
        <Footer />
      </div>
    </div>
  );
}

import type { Metadata } from 'next';
import ProjectsClient from './ProjectsClient';

export const metadata: Metadata = {
  title: 'Projects | Varot Pavaritpong',
  description: 'Explore Varot Pavaritpong’s software projects: EVAres Mars EVA planner, FloodBeacon disaster response, PipeLie, PhishPatrol, and more.',
  alternates: { canonical: '/projects' },
  openGraph: {
    title: 'Projects | Varot Pavaritpong',
    description: 'Software projects spanning web development, machine learning, cybersecurity, and Kubernetes infrastructure.',
    url: '/projects',
    type: 'website',
    images: ['/meta.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects | Varot Pavaritpong',
    description: 'Explore my software projects in web development, machine learning, cybersecurity, and infrastructure.',
    images: ['/meta.png'],
  },
};

export default function Projects() {
  return <ProjectsClient />;
}

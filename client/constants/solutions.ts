import { technologies } from '@/constants/technologies';
import { ISolution } from '@/types';

export const solutions: ISolution[] = [
  {
    id: 'checkinator',
    projectName: 'Checkinator',
    about: 'A simple MERN app for testing Stripe with user and subscription management, for taking React architecture I used to know to the next level with advanced usage of unit tests and also for improving my knowledge in backend with help of nodejs as a frontend developer. Also created an admin panel for having a full control over the app.',
    image: '/images/projects/checkinator.png',
    ogImage: '/images/projects/checkinator.png', // TODO add og image
    imageAlt: 'Checkinator',
    repositories: [
      {
        name: 'checkinator-frontend',
        url: 'https://github.com/AlbertArakelyan/checkinator-frontend',
      },
      {
        name: 'checkinator-backend',
        url: 'https://github.com/AlbertArakelyan/checkinator-backend',
      },
      {
        name: 'checkinator-admin',
        url: 'https://github.com/AlbertArakelyan/checkinator-admin',
      },
    ],
    authors: [
      {
        username: 'AlbertArakelyan',
        fullName: 'Albert Arakelyan',
        avatar: 'https://avatars.githubusercontent.com/u/61713118?v=4',
        profileUrl: 'https://github.com/AlbertArakelyan',
      },
    ],
    technologies: [
      technologies.typescript,
      technologies.react,
      technologies.redux,
      technologies.testingLibrary,
      technologies.sass,
      technologies.nodejs,
      technologies.express,
      technologies.mongodb,
      technologies.mongoose,
      technologies.stripe,
    ],
    keywords: [],
  },
  {
    id: 'exoplanet-project',
    projectName: 'Exoplanet Project',
    about: 'Simple MERN with ready frontend part for focusing on Node.js by getting data from external sources, working with CSV files and parsing them and of course working with databases such as MongoDB with mongoose.',
    image: '/images/projects/exoplanet-project.png',
    ogImage: '/images/projects/exoplanet-project.png', // TODO add og image
    imageAlt: 'Exoplanet Project',
    repositories: [
      {
        name: 'react-express-exoplanet-project',
        url: 'https://github.com/AlbertArakelyan/react-express-exoplanet-project',
      },
    ],
    authors: [
      {
        username: 'AlbertArakelyan',
        fullName: 'Albert Arakelyan',
        avatar: 'https://avatars.githubusercontent.com/u/61713118?v=4',
        profileUrl: 'https://github.com/AlbertArakelyan',
      },
    ],
    technologies: [
      technologies.react,
      technologies.nodejs,
      technologies.express,
      technologies.mongodb,
      technologies.mongoose,
      technologies.docker,
    ],
    keywords: [],
  },
];
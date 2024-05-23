import { technologies } from '@/constants/technologies';
import { ISolution } from '@/types';

export const solutions: ISolution[] = [
  {
    id: '1',
    projectName: 'Checkinator',
    about: 'A simple MERN app for testing Stripe with user and subscription management, for taking React architecture I used to know to the next level with advanced usage of unit tests and also for improving my knowledge in backend with help of nodejs as a frontend developer. Also created an admin panel for having a full control over the app.',
    image: '/images/projects/checkinator.png',
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
  },
  {
    id: '2',
    projectName: 'Exoplanet Project',
    about: 'Simple MERN with ready frontend part for focusing on Node.js by getting data from external sources, working with CSV files and parsing them and of course working with databases such as MongoDB with mongoose.',
    image: '/images/projects/exoplanet-project.png',
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
  },
];
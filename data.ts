import html from './src/assets/html.png'
import css from './src/assets/css.png'
import tail from './src/assets/tail.png'
import sass from './src/assets/sass.png'
import figma from './src/assets/figma.png'
import java from './src/assets/javascript.png'
import mongo from '/src/assets/mongo.png'
import motion from '/src/assets/motion.png'
import next from '/src/assets/next.png'
import mui from '/src/assets/mui.png'
import react from '/src/assets/react.png'
import typescript from '/src/assets/typescript.png'
import prisma from '/src/assets/prisma.png'
import project from '/src/assets/project1.png'
import project1 from '/src/assets/project2.png'
import project2 from '/src/assets/project3.png'

export interface NavLink {
  id: number
  title: string
  url: string
}

export const navLinks: NavLink[] = [
  { id: 1, title: 'about-me', url: '/about' },
  { id: 3, title: 'resume', url: '/resume' },
  { id: 2, title: 'works', url: '/portfolio' },
]

export const skills = [
  {
    id: '1',
    img: html,
    name: 'html',
    category: 'frontend',
  },
  {
    id: '2',
    img: css,
    name: 'css',
    category: 'frontend',
  },
  {
    id: '3',
    img: tail,
    name: 'tail',
    category: 'framework',
  },
  {
    id: '4',
    img: sass,
    name: 'sass',
    category: 'framework',
  },
  {
    id: '5',
    img: figma,
    name: 'figma',
    category: 'tools',
  },
  {
    id: '6',
    img: java,
    name: 'javascript',
    category: 'language',
  },
  {
    id: '7',
    img: mongo,
    name: 'mongo',
    category: 'backend',
  },
  {
    id: '8',
    img: motion,
    name: 'motion',
    category: 'tools',
  },
  {
    id: '8',
    img: next,
    name: 'next',
    category: 'framework',
  },
  {
    id: '9',
    img: mui,
    name: 'mui',
    category: 'tools',
  },
  {
    id: '10',
    img: react,
    name: 'react',
    category: 'framework',
  },
  {
    id: '11',
    img: typescript,
    name: 'type',
    category: 'language',
  },
  {
    id: '12',
    img: prisma,
    name: 'prisma',
    category: 'backend',
  },
]

export interface MyProjects {
  id: number
  name: string
  img: any
  stack: string
  desc: string
}

export const myProjects: MyProjects[] = [
  {
    id: 1,
    name: 'spyro fitness app',
    img: project,
    stack: 'next.js tailwind api typescript mui react-query',
    desc: 'a fitness app to get to gym next.js tailwind api typescript mui react-query',
  },
  {
    id: 2,
    name: 'spyro fitness app',
    img: project1,
    stack: 'next.js tailwind api typescript mui react-query',
    desc: 'a fitness app to get to gym next.js tailwind api typescript mui react-query',
  },
  {
    id: 3,
    name: 'spyro fitness app',
    img: project2,
    stack: 'next.js tailwind api typescript mui react-query',
    desc: 'a fitness app to get to gym ',
  },
  {
    id: 4,
    name: 'spyro fitness app',
    img: project,
    stack: 'next.js tailwind api typescript mui react-query',
    desc: 'a fitness app to get to gym next.js tailwind api typescript mui react-query',
  },
  {
    id: 5,
    name: 'spyro fitness app',
    img: project,
    stack: 'next.js tailwind api typescript mui react-query',
    desc: 'a fitness app to get to gym next.js tailwind api typescript mui react-query',
  },
  {
    id: 6,
    name: 'spyro fitness app',
    img: project1,
    stack: 'next.js tailwind api typescript mui react-query',
    desc: 'a fitness app to get to gym next.js tailwind api typescript mui react-query',
  },
  {
    id: 7,
    name: 'spyro fitness app',
    img: project2,
    stack: 'next.js tailwind api typescript mui react-query',
    desc: 'a fitness app to get to gym next.js tailwind api typescript mui react-query',
  },
  {
    id: 8,
    name: 'spyro fitness app',
    img: project,
    stack: 'next.js tailwind api typescript mui react-query',
    desc: 'a fitness app to get to gym next.js tailwind api typescript mui react-query',
  },
]

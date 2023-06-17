'use client'

import { useState } from 'react'

import AboutMe from '@/components/home/AboutMe'
import Contact from '@/components/home/Contact'
import Header from '@/components/home/Header'
import Projects from '@/components/home/Projects'
import Quote from '@/components/home/Quote'
import Skills from '@/components/home/Skills'

import { skills } from '../../data'

// skills filter buttons using the spread operator and Set
const allCategories = ['all', ...new Set(skills.map((skill) => skill.category))]

export default function Home() {
  // state values
  const [mySkills, setMySkills] = useState(skills)
  const [categories, setCategories] = useState(allCategories)

  // filter function
  const filterItems = (category: any) => {
    if (category === 'all') {
      setMySkills(skills)
      return
    }
    const newItems = skills.filter((item) => item.category === category)
    setMySkills(newItems)
  }

  return (
    <>
      <Header />
      <Quote />
      <Skills
        items={mySkills}
        categories={categories}
        filterItems={filterItems}
      />
      <Projects />
      <AboutMe />
      <Contact />
    </>
  )
}

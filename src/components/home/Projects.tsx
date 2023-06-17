'use client'

import Link from 'next/link'
import Image from 'next/image'

import { useState } from 'react'

import {
  BsArrowRightShort,
  BsCaretRightFill,
  BsCaretLeftFill,
} from 'react-icons/bs'

import { myProjects, MyProjects } from '../../../data'
import Button from '../Button'

export default function Projects() {
  const [currentItem, setCurrentItem] = useState(0)
  const slideCount = myProjects.length

  const nextSlide = () => {
    setCurrentItem((prevSlide) =>
      prevSlide === slideCount - 1 ? 0 : prevSlide + 1
    )
  }

  const prevSlide = () => {
    setCurrentItem((prevSlide) =>
      prevSlide === 0 ? slideCount - 1 : prevSlide - 1
    )
  }

  return (
    <section className="w-full h-fit lg:h-[45rem] py-4 mt-12 lg:mt-24">
      <div className="w-sm mx-auto h-fit md:w-md lg:w-lg lg:h-full flex flex-col items-start gap-8 overflow-x-hidden">
        {/* top */}
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h4 className="text-2xl lg:3xl text-primary">
              <span className="text-gray">#</span>projects
            </h4>
            <div className="w-24 lg:w-60 h-1 bg-primary"></div>
          </div>
          <Button
            text="see more"
            className="w-fit h-fit p-3 border border-purple-500 bg-transparent"
          />
        </div>

        {/* bottom */}
        <div
          className="flex gap-4 items-start"
          style={{
            transform: `translateX(-${currentItem * (50 / slideCount)}%)`,
            transition: 'transform 0.5s ease-in-out',
          }}
        >
          {myProjects.map((project: MyProjects) => {
            const { id, name, desc, img, stack } = project
            return (
              <div
                className="w-80 lg:w-72 h-fit flex flex-col items-start gap-4 border border-gray rounded-sm pb-1"
                key={id}
              >
                <Image src={img} alt={name} className="" />
                <div className="w-full h-fit p-1">
                  <span className="text-xs">{stack}</span>
                </div>
                <div className="w-full flex flex-col items-start gap-2 border border-t-gray px-1">
                  <h4 className="text-2xl lg:text-3xl">{name}</h4>
                  <p className="text-sm">{desc}</p>
                  <div className="w-full flex gap-12">
                    <Link
                      href=""
                      className="w-fit h-fit p-3 rounded-sm flex items-center gap-2 border border-primary"
                    >
                      live
                      <BsArrowRightShort />
                    </Link>
                    <Link
                      href=""
                      className="w-fit h-fit p-3 rounded-sm flex items-center gap-2 border border-primary"
                    >
                      live
                      <BsArrowRightShort />
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <div className="flex items-center gap-8">
          <button
            className="w-12 aspect-square grid place-items-center rounded-full shadow-md shadow-gray bg-primary cursor-pointer"
            onClick={prevSlide}
            disabled={currentItem === 0}
          >
            <BsCaretLeftFill size={25} className="text-gray" />
          </button>
          <button
            className="w-12 aspect-square grid place-items-center rounded-full shadow-md shadow-gray bg-primary cursor-pointer"
            onClick={nextSlide}
            disabled={currentItem === slideCount - 1}
          >
            <BsCaretRightFill size={25} className="text-gray" />
          </button>
        </div>
      </div>
    </section>
  )
}

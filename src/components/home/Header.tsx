import Image from 'next/image'
import Button from '../Button'

import person from '../../assets/person.png'
import dot from '../../assets/Dots.png'
import dott from '../../assets/dotts.png'
import pattern from '../../assets/pattern.png'

export default function Header() {
  return (
    <header className="w-full h-fit lg:h-[30rem] mt-20">
      <div className="w-sm mx-auto md:w-md lg:w-lg py-8 flex flex-col items-center gap-12 lg:flex lg:flex-row">
        {/* left --- top */}
        <div className="w-full lg:w-[45%] h-full flex flex-col items-start gap-8">
          <h2 className="text-4xl font-semibold first-letter:capitalize">
            bermuda is a{' '}
            <span className="text-primary">frontend developer </span>&{' '}
            <span className="text-primary">ux engineer</span>
          </h2>
          <span className="text-lg lg:text-sm">
            I craft responsive web apps where technologies meet creativity
          </span>
          <Button
            text="contact me"
            className="w-fit h-fit p-3 border border-purple-500 bg-transparent"
          />
        </div>

        {/* right -- bottom */}
        <div className="w-full lg:w-[45%] h-full relative">
          <Image src={person} alt="" />
          <Image src={dot} alt="" className="bottom-1 right-16 absolute" />
          <Image src={dott} alt="" className="top-0 right-20 absolute" />
          <Image
            src={pattern}
            alt=""
            className="top-20 left-4 absolute -z-10"
          />

          {/* div */}
          <div className="w-fit h-fit py-1 px-3 flex items-center gap-2 -bottom-7 left-4 lg:left-8 absolute border border-gray bg-transparent z-10">
            <div className="w-2 aspect-square bg-primary"></div>
            <span className="text-xs">currently working on my portfolio</span>
          </div>
        </div>
      </div>
    </header>
  )
}

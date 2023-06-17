import Image from 'next/image'

import pattern from '../../assets/pattern.png'
import dot from '../../assets/dotts.png'
import dots from '../../assets/Dots.png'
import rect from '../../assets/rect.png'
import rec from '../../assets/rec.png'

import Button from '../Button'

export default function AboutMe() {
  return (
    <section className="w-full h-fit lg:h-[30rem] mt-16 py-3">
      <div className="w-sm mx-auto h-fit md:w-md lg:w-lg lg:h-full flex flex-col items-start gap-8 overflow-x-hidden">
        {/* top */}
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h4 className="text-2xl lg:3xl text-primary">
              <span className="text-gray">#</span>about me
            </h4>
            <div className="w-24 lg:w-60 h-1 bg-primary"></div>
          </div>
          <Button
            text="see more"
            className="w-fit h-fit p-3 border border-purple-500 bg-transparent"
          />
        </div>

        {/* bottom */}
        <div className="w-full h-fit flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-[45%] flex flex-col items-start gap-4">
            <h6 className="text-sm">Design System</h6>
            <p className="text-sm">
              Highly skilled at progressive enhancement, design systems & UI
              Engineering.
            </p>
            <p className="text-sm">
              Proven experience building successful products for clients across
              several countries.
            </p>
            <Button
              text="read more"
              className="w-fit h-fit p-3 border border-purple-500 bg-transparent"
            />
          </div>

          {/* image */}
          <div className="hidden lg:grid w-full lg:w-[45%]  place-items-center relative">
            <Image src={pattern} alt="me" className="top-4 left-0 absolute" />
            <Image src={rec} alt="me" className="top-10 right-4 absolute" />
            <Image src={rect} alt="me" className="bottom-1/2 right-1/2 absolute" />
            <Image src={dots} alt="me" className="bottom-4 right-0 absolute" />
            <Image src={dot} alt="me" className="bottom 10 left-10 absolute" />
          </div>
        </div>
      </div>
    </section>
  )
}

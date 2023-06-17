import Image from 'next/image'

import quote from '../../assets/quote.svg'

export default function Quote() {
  return (
    <section className="w-full h-52 mt-8">
      <div className="w-sm mx-auto h-full  md:w-md lg:w-lg grid place-items-center relative">
        <div className="w-fit h-fit p-4 border border-gray">
          <span className="text-sm lg:text-lg text-primary">
            Good UX delights, engages, and simplifies the user journey.
          </span>
        </div>
        <div className="w-40 h-fit p-4 border border-gray right-0 lg:right-48 bottom-5 absolute py-3 grid place-items-center">
          <span className="text-sm lg:text-lg text-primary">Bermuda</span>
        </div>
        <Image
          src={quote}
          alt=""
          className="top-14 lg:top-16 left-16 lg:left-52 absolute"
        />
        <Image
          src={quote}
          alt=""
          className="bottom-14 lg:bottom-16 right-16 lg:right-72 absolute"
        />
      </div>
    </section>
  )
}

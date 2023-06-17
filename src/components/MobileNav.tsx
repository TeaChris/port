import { ReactNode, Dispatch, SetStateAction } from 'react'

import Link from 'next/link'
import { NavLink, navLinks } from '../../data'
import Image from 'next/image'

import { motion } from 'framer-motion'
import { GrClose } from 'react-icons/gr'

import telegram from '../assets/Telegram.svg'
import linkedin from '../assets/Linkedin.svg'
import twitter from '../assets/Twitter.svg'
import github from '../assets/Github.svg'

type MobileNavProps = {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, setIsOpen }) => {
  // close navigation on link click
  const handleClose = () => {
    setIsOpen(false)
  }

  //   framer variants
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '100%' },
  }

  return (
    <motion.div
      className="w-screen h-screen lg:w-96 lg:h-screen top-0 right-0 absolute bg-background shadow-none lg:shadow-2xl pl-0 lg:pl-4"
      animate={isOpen ? 'open' : 'closed'}
      variants={variants}
    >
      <div className="w-full h-full flex flex-col items-center lg:items-start gap-8 relative pt-60 lg:pt-36">
        <ul className="w-full h-fit flex flex-col items-center justify-center lg:items-start gap-8">
          {navLinks.map((navlink: NavLink) => {
            const { id, title, url } = navlink
            return (
              <li key={id} className="">
                <Link href={url} className="">
                  {title}
                </Link>
              </li>
            )
          })}
        </ul>
        <div className="w-fit h-fit py-2 flex flex-col items-center lg:items-start gap-4">
          <h5 className="text-2xl capitalize text-purple-500">say hello</h5>
          <div className="flex flex-col items-center lg:items-start gap-3">
            <a href="" target="_blank">
              hello@bermuda.dev
            </a>
            <a href="" target="_blank">
              t.me/yourdevbermuda
            </a>
          </div>
        </div>

        <div className="w-fit h-fit flex items-center gap-4">
          <Link href="https://github.com/TeaChris">
            <Image src={github} alt="github" />
          </Link>
          <Link href="https://twitter.com/yourdevbermuda?t=7tvbSam_L0jzuTQdkKkoOw&s=09">
            <Image src={twitter} alt="github" />
          </Link>
          <Link href="https://www.linkedin.com/in/boluwatife-olasunkanmi-104307232">
            <Image src={linkedin} alt="github" />
          </Link>
          <Link href="t.me/yourdevbermuda">
            <Image src={telegram} alt="github" />
          </Link>
        </div>

        <button
          className="w-10 h-10 grid justify-center place-items-center p-3 bg-gray rounded-md top-4 right-4 absolute"
          onClick={handleClose}
        >
          <GrClose size={25} style={{ color: '#fff' }} />
        </button>
      </div>
    </motion.div>
  )
}
export default MobileNav

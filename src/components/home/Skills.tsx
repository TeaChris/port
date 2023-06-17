import { motion } from 'framer-motion'

import Image from 'next/image'
import Button from '../Button'

export default function Skills({
  items,
  filterItems,
  categories,
}: {
  items: any
  filterItems: any
  categories: any
}) {
  return (
    <section className="w-full h-fit mt-24 py-4">
      <div className="w-sm mx-auto h-fit md:w-md lg:w-lg flex flex-col items-center gap-8">
        {/* top */}
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h4 className="text-2xl lg:3xl text-primary">
              <span className="text-gray">#</span>Skills
            </h4>
            <div className="w-24 lg:w-60 h-1 bg-primary"></div>
          </div>
          <Button
            text="see more"
            className="w-fit h-fit p-3 border border-purple-500 bg-transparent"
          />
        </div>

        {/* bottom */}

        <div className="w-full flex flex-col items-center gap-12">
          <div className="w-[80%] lg:w-fit h-fit flex flex-wrap gap-4 items-center">
            {categories.map((category: any, index: number) => {
              return (
                <button
                  key={index}
                  type="button"
                  className="w-fit h-fit p-2 bg-primary rounded-md text-sm capitalize"
                  onClick={() => filterItems(category)}
                >
                  {category}
                </button>
              )
            })}
          </div>
          <div className="w-[90%] lg:w-[28rem] flex flex-wrap items-center gap-4">
            {items.map((skills: any) => {
              const { id, img, name } = skills
              return (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={img}
                    alt={name}
                    className="w-14 lg:w-12 h-14 lg:h-12 object-cover"
                  />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

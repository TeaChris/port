'use client'

import { motion } from 'framer-motion'

interface ButtonProps {
  className: string
  text: string
  children?: any
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({
  className,
  text,
  onClick,
  children,
}) => {
  return (
    <motion.button
      className={className}
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {`${text}`}
      {children}
    </motion.button>
  )
}

export default Button

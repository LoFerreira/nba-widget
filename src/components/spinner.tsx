import React from 'react'
import { colors } from 'theme'
import { Size } from 'typings'

type SpinnerProps = {
  size?: Size
  color?: 'primary' | 'secondary' | 'accent' | 'light' | 'info'
}
const Spinner = ({ size = 'md', color = 'primary' }: SpinnerProps) => {
  return (
    <svg
      className={`${sizeMap[size]} animate-spin`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke={colorMap[color]}
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill={colorMap[color]}
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  )
}

export default Spinner

const sizeMap = {
  xs: 'w-2 h-2',
  sm: 'w-3 h-3',
  md: 'w-4 h-4',
  lg: 'w-6 h-6',
  xl: 'w-8 h-8'
}

const colorMap = {
  primary: '#eb6466',
  secondary: '#898989',
  accent: '#ffcc00',
  light: '#fff',
  info: colors.info[400]
}

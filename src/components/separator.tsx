import React from 'react'
import { Size } from '../typings'

export interface SeparatorProps {
  size?: Size
}
const Separator: React.FC<SeparatorProps> = ({ size = 'md' }) => {
  return <div className={`${SeparatorSizeMap[size]}`} />
}

export default Separator

const SeparatorSizeMap = {
  xs: 'w-1 h-1',
  sm: 'w-3 h-3',
  md: 'w-4 h-4',
  lg: 'w-9 h-9',
  xl: 'w-12 h-12'
}

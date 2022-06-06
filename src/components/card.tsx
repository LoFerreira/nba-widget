import React from 'react'
import Column from './column'

export interface CardProps {}

const Card = ({ children }: React.PropsWithChildren<CardProps>) => {
  return (
    <Column className="w-full h-full shadow-md rounded-md p-3 bg-white">
      {children}
    </Column>
  )
}

export default Card

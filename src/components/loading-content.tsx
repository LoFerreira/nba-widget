import React from 'react'
import Spinner from './spinner'

type LoadingContentProps = {}
const LoadingContent = ({}: LoadingContentProps) => {
  return (
    <div className="flex justify-center items-center h-full">
      <Spinner size="xl" />
    </div>
  )
}

export default LoadingContent

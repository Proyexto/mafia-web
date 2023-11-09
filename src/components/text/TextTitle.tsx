import React from 'react'

export const TextTitle = ({
  children, className
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h1 className={`mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white ${className}`}>{children}</h1>
  )
}

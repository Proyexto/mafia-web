import React from 'react'

export const TextSubTitle = ({
  children, className
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h1 className={`text-4xl font-extrabold dark:text-white ${className}`}>{children}</h1>
  )
}

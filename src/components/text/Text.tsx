import React from 'react'

export const Text = ({
  children, className
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h1 className={`text-2xl ${className}`}>{children}</h1>
  )
}

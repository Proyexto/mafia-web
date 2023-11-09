export const MainLayout = ({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <section className={`min-h-[70vh] ${className}`}>
        {children}
    </section>
  )
}

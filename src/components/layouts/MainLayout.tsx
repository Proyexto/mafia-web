export const MainLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <section className="min-h-[60vh]">
        {children}
    </section>
  )
}

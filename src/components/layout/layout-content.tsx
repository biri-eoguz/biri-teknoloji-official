export default function LayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col w-full h-full gap-8 md:gap-18 pt-4 md:pt-8 lg:pt-12 overflow-x-hidden">
      {children}
    </main>
  );
}

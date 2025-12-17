export default function LayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col w-full h-full gap-[72px] pt-[72px] overflow-x-hidden">
      {children}
    </main>
  );
}

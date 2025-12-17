export default function LayoutPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col bg-[linear-gradient(85deg,#442063,#2b233c_50%,#1d3263_100%)] w-full min-h-screen">
      {children}
    </div>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen font-mono bg-nursolo bg-no-repeat bg-cover">
      {children}
    </div>
  );
}

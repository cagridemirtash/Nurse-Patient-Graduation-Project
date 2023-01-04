export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
      {children}
    </div>
  );
}

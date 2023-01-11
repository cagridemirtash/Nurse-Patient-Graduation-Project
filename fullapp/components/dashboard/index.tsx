export default function DashboardView({
  componentType,
}: {
  componentType: string;
}) {
  return (
    <>
      <h1>{componentType.toUpperCase()}</h1>
    </>
  );
}

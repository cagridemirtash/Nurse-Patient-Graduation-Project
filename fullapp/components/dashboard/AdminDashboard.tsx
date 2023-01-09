import Sidebar from "../sidebar/Sidebar";
export default function AdminDashboard() {
  return (
    <>
      <div className="flex flex-row">
        <Sidebar />
        <div className="h-auto bg-gray-900 basis-3/4 rounded-lg">
          <div className="block text-center text-cyan-600">Admin Dashboard</div>
        </div>
      </div>
    </>
  );
}

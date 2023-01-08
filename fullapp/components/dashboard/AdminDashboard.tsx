import Sidebar from "../sidebar/Sidebar";
export default function AdminDashboard() {
  return (
    <>
      <div className="flex flex-row">
        <Sidebar />
        <div className="basis-3/4">
          This is a content which add or remove situation
        </div>
      </div>
    </>
  );
}

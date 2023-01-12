import { SidebarData } from "./SidebarDummyData";

export default function Sidebar() {
  const sideItemArr = SidebarData;

  //Set data to local storage for get a component from who is -> Admin, User, Patient

  return (
    <aside
      className="h-screen w-52 basis-1/4 bg-gray-800 rounded-md"
      aria-label="Sidebar"
    >
      <div className="px-3 py-4 overflow-y-auto rounded ">
        <ul className="space-y-2">
          {sideItemArr.map((item, index) => (
            <li
              key={index}
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <span className="bg-white rounded-lg h-4 w-4">{item.icon}</span>
              <span className="ml-3">{item.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

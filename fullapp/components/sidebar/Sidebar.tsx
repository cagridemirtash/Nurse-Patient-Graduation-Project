import Link from "next/link";

export default function Sidebar() {
  const sideItemArr = ["User", "Admin", "Patient"];
  return (
    <aside
      className="h-screen w-52 basis-1/4 bg-gray-800 rounded-md"
      aria-label="Sidebar"
    >
      <div className="px-3 py-4 overflow-y-auto rounded ">
        <ul className="space-y-2">
          {sideItemArr.map((item, index) => (
            <li key={index}>
              <Link
                href="#"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <span className="ml-3">{item}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

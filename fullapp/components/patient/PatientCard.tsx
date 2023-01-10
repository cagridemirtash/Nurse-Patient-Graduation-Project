import Link from "next/link";

export default function PatientCard({ id, detail, fullName }: any) {
  const handleClick = (fullName: string, detail: string) => {
    const url = "http://localhost:3000/api/patient/update-patient";
    const fetchPatient = async () => {
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ fullName, detail }),
        });
        const json = await response.json();
        console.log(json);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchPatient();
  };
  return (
    <>
      <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {detail}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          <div className="grid grid-cols-2">
            <h1 className="text-xl">{fullName}</h1>
            <button
              type="button"
              className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-900"
              onClick={() => handleClick(fullName, detail)}
            >
              Update
            </button>
          </div>
        </p>
      </div>
    </>
  );
}

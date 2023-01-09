import { useEffect, useState } from "react";

export default function NurseDashboard() {
  const [patients, setPatients] = useState<Patient[]>([]);

  type Patient = {
    id: number;
    full_name: string;
    bed_number: string;
    patient_complaint: string;
    description: string;
  };

  useEffect(() => {
    const url = "http://localhost:3000/api/patient/fetch-patient";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setPatients(json);
      } catch (error) {
        console.log("error", error);
      }
    };
    setInterval(fetchData, 5000);
  }, []);

  const handleClick = (id: number) => {
    console.log(id);
    const url = "http://localhost:3000/api/patient/delete-patient";
    const fetchPatient = async () => {
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id }),
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
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Patient Name
              </th>
              <th scope="col" className="px-6 py-3">
                Bed Number
              </th>
              <th scope="col" className="px-6 py-3">
                Complaint
              </th>
              <th scope="col" className="px-6 py-3">
                Detail
              </th>
              <th scope="col" className="px-6 py-3">
                Discharge
              </th>
            </tr>
          </thead>
          <tbody>
            {patients.map((item, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.full_name}
                </th>
                <td className="px-6 py-4">{item.bed_number}</td>
                <td className="px-6 py-4">{item.patient_complaint}</td>
                <td className="px-6 py-4">{item.description}</td>
                <td className="px-6 py-4">
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    onClick={() => {
                      handleClick(item.id);
                    }}
                  >
                    Yes
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

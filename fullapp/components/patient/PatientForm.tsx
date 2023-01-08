import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import { render } from "react-dom";
import PatientSelectDetail from "./PatientSelectDetail";

export default function PatientForm() {
  const router = useRouter();
  const [detail, setDetail] = useState(false);
  const [fullName, setFullName] = useState("");
  const handleSubmit = async (event: FormEvent) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    // Cast the event target to an html form
    const form = event.target as HTMLFormElement;

    // Get data from the form.
    const data = {
      fullName: form.fullName.value as string,
      bedNumber: form.bedNumber.value as string,
      patientComplaint: form.patientComplaint.value as string,
      description: form.detail.value as string,
    };
    setFullName(form.fullName.value);
    // Send the form data to our API and get a response.
    const response = await fetch("/api/form", {
      // Body of the request is the JSON data we created above.
      body: JSON.stringify(data),
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    //Set local storage for click and the detail page
    if (response.ok) {
      setDetail(true);
    }
  };

  return (
    <>
      {detail ? (
        <PatientSelectDetail fullName={fullName} />
      ) : (
        <div className="flex flex-col justify-center items-center border-2 md:my-36 rounded-3xl  border- bg-emerald-300">
          <form onSubmit={handleSubmit} method="post">
            {/* Hasta adı */}
            <div className="mb-6">
              <label
                htmlFor="fullName"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                FullName
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className="bg-gray-50 border border-gray-300
           text-gray-900 text-sm rounded-lg focus:ring-gray-500
           focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700
           dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
            dark:focus:ring-gray-500 dark:focus:border-gray-500"
                placeholder="Patient Name"
                required
              />
            </div>
            {/* Hasta yatak numarası */}
            <div className="mb-6">
              <label
                htmlFor="bedNumber"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Bed Number
              </label>
              <input
                type="text"
                id="bedNumber"
                name="bedNumber"
                className="bg-gray-50 border border-gray-300 
          text-gray-900 text-sm rounded-lg focus:ring-gray-500 
          focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700
          dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
          dark:focus:ring-gray-500 dark:focus:border-gray-500"
                placeholder="Bed Number"
              />
            </div>
            {/*  Hasta Şikayeti*/}
            <div className="mb-6">
              <label
                htmlFor="patientComplaint"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Patient Complaint
              </label>
              <input
                type="text"
                id="patientComplaint"
                name="patientComplaint"
                className="bg-gray-50 border border-gray-300 
          text-gray-900 text-sm rounded-lg focus:ring-gray-500 
          focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700
          dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
          dark:focus:ring-gray-500 dark:focus:border-gray-500"
                placeholder="Patient Complaint"
              />
            </div>
            {/* Açıklama */}
            <div className="mb-6">
              <label
                htmlFor="detail"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Description
              </label>
              <input
                type="text"
                id="detail"
                name="detail"
                className="bg-gray-50 border border-gray-300 
          text-gray-900 text-sm rounded-lg focus:ring-gray-500 
          focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700
          dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
          dark:focus:ring-gray-500 dark:focus:border-gray-500"
                placeholder="Detail Complaint Description"
              />
            </div>
            <div className="mb-6 flex justify-center">
              <button
                type="submit"
                className="text-white bg-gray-300 hover:bg-gray-800 
          focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium 
          rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-600 
          dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                Create Patient
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

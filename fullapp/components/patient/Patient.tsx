import { FormEvent } from "react";

export default function PatientForm() {
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
    // Send the form data to our API and get a response.
    const response = await fetch("/api/form", {
      // Body of the request is the JSON data we created above.
      body: JSON.stringify(data),
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // The method is POST because we are sending data.
      method: "POST",
    });

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    console.log(response);
  };

  return (
    <form onSubmit={handleSubmit} method="post">
      {/* Hasta adı */}
      <input
        type="text"
        id="fullName"
        name="fullName"
        placeholder="Patient Name"
      />
      {/* Hasta yatak numarası */}
      <input
        type="text"
        id="bedNumber"
        name="bedNumber"
        placeholder="Bed Number"
      />
      {/*  Hasta Şikayeti*/}
      <input
        type="text"
        id="patientComplaint"
        name="patientComplaint"
        placeholder="Patient Complaint"
      />
      {/* Açıklama */}
      <input
        type="text"
        id="detail"
        name="detail"
        placeholder="Detail Complaint Description"
      />
      <button type="submit">Create Patient</button>
    </form>
  );
}

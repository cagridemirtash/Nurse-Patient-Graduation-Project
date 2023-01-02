import Auth from "../../components/auth/Auth";
import PatientForm from "../../components/patient/Patient";

export default function Patient() {
  return (
    <>
      <h1>This is a patient page</h1>
      {/* TODO: Patient fill the form and save the database */}
      <PatientForm />
    </>
  );
}

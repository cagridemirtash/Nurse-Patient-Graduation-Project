import Link from "next/link";
import PatientCard from "./PatientCard";

export default function PatientSelectDetail({ fullName }: any) {
  const detailArr = [
    "Ağrım var",
    "Midem bulanıyor",
    "Karnım Acıktı",
    "Başım ağrıyor",
    "Boşaltım sorunlarım var",
    "Ateşim var",
  ];
  return (
    <>
      <div className="grid grid-cols-5 text-center">
        {detailArr.map((detail) => (
          <PatientCard key={detail} fullName={fullName} detail={detail} />
        ))}
      </div>
    </>
  );
}

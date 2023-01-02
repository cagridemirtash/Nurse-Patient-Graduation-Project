import Head from "next/head";
import { Inter } from "@next/font/google";
import Button from "../components/buttons/IndexButton";

const inter = Inter({ subsets: ["latin"] });

function Home() {
  return (
    <>
      <Head>
        <title>Nurso</title>
        <meta
          name="description"
          content="Nurso is a application which is related to hospital management system"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4">
        <Button name="Nurse" link="nurse" />
        <Button name="Patient" link="patient" />
        <Button name="Admin" link="admin" />
      </main>
    </>
  );
}

export default Home;

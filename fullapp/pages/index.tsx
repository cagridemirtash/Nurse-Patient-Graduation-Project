import Head from "next/head";
import { Inter } from "@next/font/google";
import Button from "../components/buttons/IndexButton";

const inter = Inter({ subsets: ["latin"] });
const users = ["Nurse", "Patient", "Admin"];
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

      <main>
        <div className="flex justify-evenly">
          {users.map((value: string) => (
            <Button key={value} name={value} link={value.toLowerCase()} />
          ))}
        </div>
      </main>
    </>
  );
}

export default Home;

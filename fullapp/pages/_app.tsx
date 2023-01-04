import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import Navbar from "../components/navbar/Navbar";
import bg from "../public/brandon-holmes-unsplash.jpg";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Navbar />
      <Component {...pageProps} />
    </Layout>
  );
}

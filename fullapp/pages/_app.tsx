import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import Navbar from "../components/navbar/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Navbar />
      <Component {...pageProps} />
    </Layout>
  );
}

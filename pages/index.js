import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Index page</h1>
      <Link href="/notes">
        <a>Note</a>
      </Link>
    </div>
  );
}

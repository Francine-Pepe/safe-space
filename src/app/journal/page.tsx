import React from "react";
import styles from "./page.module.scss";
import Background from "@/components/Background/Background";
import ThoughtsSpace from "@/components/ThoughtsSpace/ThoughtsSpace";

function Page() {
  return (
    <main className={styles.container}>
      <Background variant="notebook" />
      <h1> Let it out.</h1>
      <h2>You do not have to carry everything</h2>
      <p>You do not have to make sense. Nobody will judge this. Just write.</p>
      <ThoughtsSpace />
    </main>
  );
}

export default Page;

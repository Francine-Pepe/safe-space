import Notebook from "@/components/Notebook/Notebook";
import React from "react";
import styles from "./page.module.scss";

function Page() {
  return (
    <main className={styles.container}>
      <h1> Empty your mind</h1>
      <p>You do not have to make sense. Nobody will judge this. Just write.</p>
      <Notebook />
    </main>
  );
}

export default Page;

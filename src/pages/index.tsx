import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { motion } from "framer-motion";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import { AnimatePresence, MotionConfig } from "framer-motion";


export default function Home() {

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.AppHeader}>
          <h1>To do List</h1>
        </div>
        <div className={styles.Input}>
        </div>
        <div className={styles.ItemsContainer}>
        </div>
      </main>
    </>
  );
}

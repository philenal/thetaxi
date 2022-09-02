import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { motion, AnimatePresence } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  // Create reference to store the DOM element containing the animation
  const elTitle = useRef(null);
  const elHeader = useRef(null);
  // Create reference to store the Typed instance itself
  const typedTitle = useRef(null);
  const typedHeader = useRef(null);

  useEffect(() => {
    const optionsTitle = {
      strings: [`THETA XI`],
      typeSpeed: 50,
      backSpeed: 50,
      showCursor: false,
    };

    const optionsHeader = {
      strings: [`PRESENTS`],
      typeSpeed: 50,
      backSpeed: 50,
      startDelay: 1000,
      showCursor: false,
    };

    // elRef refers to the <span> rendered below
    typedTitle.current = new Typed(elTitle.current, optionsTitle);
    typedHeader.current = new Typed(elHeader.current, optionsHeader);
    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typedTitle.current.destroy();
      typedHeader.current.destroy();
    };
  }, []);
  return (
    <div className="pageContainer">
      <Head>
        <title>Theta Xi</title>
        {/* TODO: Find good icon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.videoContainer}>
        <video autoPlay muted loop id="txi_formal">
          <source src="./txi_formal.mp4" type="video/mp4" />
        </video>
      </div>
      <div className={styles.title}>
        <span ref={elTitle} />
      </div>
      <div className={styles.header}>
        <span ref={elHeader} />
      </div>
      <AnimatePresence className="Home-menuItems">
        <motion.div
          key={"home"}
          initial={{ opacity: 0 }}
          transition={{ delay: 1.8, duration: 1.5 }}
          animate={{ opacity: 1 }}
          className="Home-menuItem"
        >
          <Link href="">HOME</Link>
        </motion.div>
        <motion.div
          key={"house"}
          initial={{ opacity: 0 }}
          transition={{ delay: 1.8, duration: 1.5 }}
          animate={{ opacity: 1 }}
          className="Home-menuItem"
        >
          <Link href="/House">HOUSE</Link>
        </motion.div>
        <motion.div
          key={"brothers"}
          initial={{ opacity: 0 }}
          transition={{ delay: 1.8, duration: 1.5 }}
          animate={{ opacity: 1 }}
          className="Home-menuItem"
        >
          <Link href="/Brothers">BROTHERS</Link>
        </motion.div>
        <motion.div
          key={"rush"}
          initial={{ opacity: 0 }}
          transition={{ delay: 1.8, duration: 1.5 }}
          animate={{ opacity: 1 }}
          className="Home-menuItem"
        >
          <Link href="/Rush">RUSH</Link>
        </motion.div>
        <motion.div
          key={"summer"}
          initial={{ opacity: 0 }}
          transition={{ delay: 1.8, duration: 1.5 }}
          animate={{ opacity: 1 }}
          className="Home-menuItem"
        >
          <Link href="/Summer">SUMMER</Link>
        </motion.div>
      </AnimatePresence>
      <div className="Home-menuItems"></div>
    </div>
  );
}

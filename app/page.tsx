"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className={styles.scene}>
      <p className={styles.hint}>Cliquez pour ouvrir 🎀</p>

      <div
        className={`${styles.envelopeWrap} ${isOpen ? styles.open : ""}`}
        onClick={() => setIsOpen((v) => !v)}
      >
        {/* Lettre */}
        <div className={styles.letter}>
          <div className={styles.letterDeco}>🌸 ✿ 🌸</div>
          <div className={styles.letterGreeting}>Bonjour ma chérie, 💕</div>
          <div className={styles.letterContent}>
            Tu es trop belle aujourd&apos;hui...
            <br />
            Vraiment, tu rayonnes comme
            <br />
            le soleil au printemps 🌷
            <br />
            <br />
            Ne l&apos;oublie jamais, ok ? ✨
          </div>
          <div className={styles.letterSign}>avec tout mon amour 🎀</div>
          <div className={styles.letterDecoBottom}>· · ♡ · ·</div>
        </div>

        {/* Enveloppe */}
        <div className={styles.envelope}>
          <div className={styles.envBody}>
            <div className={styles.envSideLeft} />
            <div className={styles.envSideRight} />
            <div className={styles.envBottomFlap} />

            <div className={styles.postmark}>
              <span className={styles.postmarkText}>
                PARIS
                <br />
                2025
              </span>
            </div>

            <div className={styles.stamp}>
              <div className={styles.stampInner}>🌸</div>
              <div className={styles.stampText}>POST</div>
            </div>

            <div className={styles.address}>
              <div className={styles.addrLine} />
              <div className={styles.addrLine} />
              <div className={styles.addrLine} />
            </div>
          </div>

          <div className={styles.seal}>♡</div>

          <div className={styles.envFlapWrap}>
            <div className={styles.envFlapFront} />
            <div className={styles.envFlapBack} />
          </div>
        </div>
      </div>

      <button className={styles.cta} onClick={() => setIsOpen((v) => !v)}>
        {isOpen ? "Fermer 💌" : "Ouvrir la lettre 💌"}
      </button>
    </main>
  );
}
"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className={styles.scene}>
      <p className={styles.hint}>Cliquez pour ouvrir</p>

      <div
        className={`${styles.envelopeWrap} ${isOpen ? styles.open : ""}`}
        onClick={() => setIsOpen((v) => !v)}
      >
        {/* Lettre cachée */}
        <div className={styles.letter}>
          <div className={styles.letterGreeting}>Cher visiteur,</div>
          <div className={styles.letterContent}>
            Bienvenue dans cet espace.
            <br />
            Chaque grande aventure commence
            <br />
            par une simple lettre.
          </div>
          <div className={styles.letterSign}>— avec amour ✦</div>
        </div>

        {/* Corps de l'enveloppe */}
        <div className={styles.envelope}>
          <div className={styles.envBody}>
            <div className={styles.envSideLeft} />
            <div className={styles.envSideRight} />
            <div className={styles.envBottomFlap} />

            {/* Cachet postal */}
            <div className={styles.postmark}>
              <span className={styles.postmarkText}>
                PARIS
                <br />
                2025
              </span>
            </div>

            {/* Timbre */}
            <div className={styles.stamp}>
              <div className={styles.stampInner}>✉</div>
              <div className={styles.stampText}>POST</div>
            </div>

            {/* Lignes adresse */}
            <div className={styles.address}>
              <div className={styles.addrLine} />
              <div className={styles.addrLine} />
              <div className={styles.addrLine} />
            </div>
          </div>

          {/* Sceau de cire */}
          <div className={styles.seal}>✦</div>

          {/* Rabat du haut */}
          <div className={styles.envFlapWrap}>
            <div className={styles.envFlapFront} />
            <div className={styles.envFlapBack} />
          </div>
        </div>
      </div>

      <button className={styles.cta} onClick={() => setIsOpen((v) => !v)}>
        {isOpen ? "Fermer" : "Ouvrir la lettre"}
      </button>
    </main>
  );
}
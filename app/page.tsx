"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className={styles.scene}>
      <div
        className={`${styles.cardWrap} ${isOpen ? styles.open : ""}`}
        onClick={() => setIsOpen((v) => !v)}
      >
        {/* Inner content revealed on open */}
        <div className={styles.inner}>
          <div className={styles.innerRule} />
          <div className={styles.innerName}>Sarah</div>
          <div className={styles.innerAmpersand}>&amp;</div>
          <div className={styles.innerName}>Lamin</div>
          <div className={styles.innerTitle}>
            Nous avons le plaisir de vous inviter à notre mariage
          </div>
          <div className={styles.innerDivider} />
          <div className={styles.innerInviteText}>
            En présence de vos proches,
            <br />
            venez partager notre bonheur
          </div>
          <div className={styles.dateBox}>
            <div className={styles.dateMain}>Samedi 04 Avril 2026</div>
            <div className={styles.dateTime}>15h00 — 20h00</div>
          </div>
          <div className={styles.innerDivider} />
          <div className={styles.locationLabel}>Lieu de la cérémonie</div>
          <div className={styles.locationName}>Salle des Fêtes El Rayen</div>
          <div className={styles.locationAddr}>Alger, Algérie</div>
          <a
            href="https://maps.app.goo.gl/tTmQts5s4V54LQTL8"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mapBtn}
            onClick={(e) => e.stopPropagation()}
          >
            <svg
              className={styles.mapIcon}
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
              <circle cx="12" cy="9" r="2.5" />
            </svg>
            Voir la localisation
          </a>
          <div className={styles.innerRuleBottom} />
          <button
            className={styles.cta}
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(false);
            }}
          >
            Fermer
          </button>
        </div>

        {/* Left panel */}
        <div className={styles.panelLeft}>
          <svg
            className={styles.branchSvg}
            viewBox="0 0 200 600"
            preserveAspectRatio="xMidYMid slice"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g stroke="#c9973e" strokeWidth="1" strokeLinecap="round" opacity="0.65">
              <path d="M30 600 Q60 520 50 450 Q40 380 80 300 Q100 240 85 160 Q75 100 90 30" />
              <path d="M50 450 Q15 430 5 400" />
              <path d="M50 450 Q75 440 80 410" />
              <path d="M65 370 Q30 355 15 325" />
              <path d="M80 300 Q105 285 110 255" />
              <path d="M80 300 Q52 285 40 255" />
              <path d="M85 160 Q65 140 70 110" />
              <path d="M85 160 Q108 145 115 118" />
              <path d="M90 30 Q75 10 80 -10" />
              <path d="M90 30 Q110 12 118 -5" />
              <path d="M5 400 Q-5 378 2 355" />
              <path d="M15 325 Q5 305 8 280" />
              <path d="M110 255 Q125 238 122 215" />
              <path d="M40 255 Q25 238 28 215" />
              <path d="M160 580 Q175 530 165 490 Q155 450 175 400 Q185 370 178 330" />
              <path d="M165 490 Q148 478 142 460" />
              <path d="M175 400 Q192 390 196 372" />
              <path d="M178 330 Q162 318 158 300" />
              <path d="M178 330 Q193 320 197 303" />
            </g>
            <g fill="#c9973e" opacity="0.55">
              <ellipse cx="5" cy="400" rx="4" ry="6.5" transform="rotate(-20 5 400)" />
              <ellipse cx="15" cy="325" rx="4" ry="6.5" transform="rotate(10 15 325)" />
              <ellipse cx="110" cy="255" rx="4" ry="6.5" transform="rotate(-30 110 255)" />
              <ellipse cx="40" cy="255" rx="4" ry="6.5" transform="rotate(15 40 255)" />
              <ellipse cx="70" cy="110" rx="3.5" ry="6" transform="rotate(-10 70 110)" />
              <ellipse cx="115" cy="118" rx="3.5" ry="6" transform="rotate(20 115 118)" />
              <ellipse cx="2" cy="355" rx="3.5" ry="5.5" transform="rotate(-8 2 355)" />
              <ellipse cx="8" cy="280" rx="3.5" ry="5.5" transform="rotate(18 8 280)" />
              <ellipse cx="122" cy="215" rx="3.5" ry="5.5" transform="rotate(-22 122 215)" />
              <ellipse cx="28" cy="215" rx="3.5" ry="5.5" transform="rotate(12 28 215)" />
              <ellipse cx="142" cy="460" rx="3.5" ry="5.5" transform="rotate(-15 142 460)" />
              <ellipse cx="196" cy="372" rx="3.5" ry="5.5" transform="rotate(8 196 372)" />
              <ellipse cx="158" cy="300" rx="3.5" ry="5.5" transform="rotate(-12 158 300)" />
              <ellipse cx="197" cy="303" rx="3.5" ry="5.5" transform="rotate(20 197 303)" />
            </g>
          </svg>
          <div className={styles.coverCenter}>
            <span className={styles.coverMonogram}>S &amp; L</span>
            <span className={styles.coverSub}>Mariage · 2026</span>
          </div>
        </div>

        {/* Right panel */}
        <div className={styles.panelRight}>
          <svg
            className={styles.branchSvg}
            viewBox="0 0 200 600"
            preserveAspectRatio="xMidYMid slice"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g stroke="#c9973e" strokeWidth="1" strokeLinecap="round" opacity="0.65">
              <path d="M170 600 Q140 520 150 450 Q160 380 120 300 Q100 240 115 160 Q125 100 110 30" />
              <path d="M150 450 Q185 430 195 400" />
              <path d="M150 450 Q125 440 120 410" />
              <path d="M135 370 Q170 355 185 325" />
              <path d="M120 300 Q95 285 90 255" />
              <path d="M120 300 Q148 285 160 255" />
              <path d="M115 160 Q135 140 130 110" />
              <path d="M115 160 Q92 145 85 118" />
              <path d="M110 30 Q125 10 120 -10" />
              <path d="M110 30 Q90 12 82 -5" />
              <path d="M195 400 Q205 378 198 355" />
              <path d="M185 325 Q195 305 192 280" />
              <path d="M90 255 Q75 238 78 215" />
              <path d="M160 255 Q175 238 172 215" />
              <path d="M40 580 Q25 530 35 490 Q45 450 25 400 Q15 370 22 330" />
              <path d="M35 490 Q52 478 58 460" />
              <path d="M25 400 Q8 390 4 372" />
              <path d="M22 330 Q38 318 42 300" />
              <path d="M22 330 Q7 320 3 303" />
            </g>
            <g fill="#c9973e" opacity="0.55">
              <ellipse cx="195" cy="400" rx="4" ry="6.5" transform="rotate(20 195 400)" />
              <ellipse cx="185" cy="325" rx="4" ry="6.5" transform="rotate(-10 185 325)" />
              <ellipse cx="90" cy="255" rx="4" ry="6.5" transform="rotate(30 90 255)" />
              <ellipse cx="160" cy="255" rx="4" ry="6.5" transform="rotate(-15 160 255)" />
              <ellipse cx="130" cy="110" rx="3.5" ry="6" transform="rotate(10 130 110)" />
              <ellipse cx="85" cy="118" rx="3.5" ry="6" transform="rotate(-20 85 118)" />
              <ellipse cx="198" cy="355" rx="3.5" ry="5.5" transform="rotate(8 198 355)" />
              <ellipse cx="192" cy="280" rx="3.5" ry="5.5" transform="rotate(-18 192 280)" />
              <ellipse cx="78" cy="215" rx="3.5" ry="5.5" transform="rotate(22 78 215)" />
              <ellipse cx="172" cy="215" rx="3.5" ry="5.5" transform="rotate(-12 172 215)" />
              <ellipse cx="58" cy="460" rx="3.5" ry="5.5" transform="rotate(15 58 460)" />
              <ellipse cx="4" cy="372" rx="3.5" ry="5.5" transform="rotate(-8 4 372)" />
              <ellipse cx="42" cy="300" rx="3.5" ry="5.5" transform="rotate(12 42 300)" />
              <ellipse cx="3" cy="303" rx="3.5" ry="5.5" transform="rotate(-20 3 303)" />
            </g>
          </svg>
        </div>

        {/* Wax seal */}
        <div className={styles.seal}>
          <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="36" cy="36" r="34" fill="url(#waxOuter)" />
            <ellipse cx="36" cy="4" rx="5" ry="3.5" fill="#b8760a" opacity="0.7" transform="rotate(0 36 36) translate(0 -32)" />
            <ellipse cx="36" cy="4" rx="4" ry="3" fill="#b8760a" opacity="0.6" transform="rotate(45 36 36) translate(0 -32)" />
            <ellipse cx="36" cy="4" rx="4.5" ry="3" fill="#b8760a" opacity="0.65" transform="rotate(90 36 36) translate(0 -32)" />
            <ellipse cx="36" cy="4" rx="4" ry="3.5" fill="#b8760a" opacity="0.6" transform="rotate(135 36 36) translate(0 -32)" />
            <ellipse cx="36" cy="4" rx="5" ry="3" fill="#b8760a" opacity="0.7" transform="rotate(180 36 36) translate(0 -32)" />
            <ellipse cx="36" cy="4" rx="4" ry="3" fill="#b8760a" opacity="0.65" transform="rotate(225 36 36) translate(0 -32)" />
            <ellipse cx="36" cy="4" rx="4.5" ry="3.5" fill="#b8760a" opacity="0.6" transform="rotate(270 36 36) translate(0 -32)" />
            <ellipse cx="36" cy="4" rx="4" ry="3" fill="#b8760a" opacity="0.7" transform="rotate(315 36 36) translate(0 -32)" />
            <circle cx="36" cy="36" r="26" fill="url(#waxInner)" />
            <ellipse cx="28" cy="26" rx="8" ry="5" fill="white" opacity="0.12" transform="rotate(-20 28 26)" />
            <text
              x="36" y="41"
              textAnchor="middle"
              fontFamily="Cormorant Garamond, Georgia, serif"
              fontSize="14"
              fontStyle="italic"
              fontWeight="600"
              fill="#5c3000"
              opacity="0.85"
            >S&amp;L</text>
            <defs>
              <radialGradient id="waxOuter" cx="40%" cy="35%" r="60%">
                <stop offset="0%" stopColor="#e8a83a" />
                <stop offset="50%" stopColor="#c9793e" />
                <stop offset="100%" stopColor="#8b4e10" />
              </radialGradient>
              <radialGradient id="waxInner" cx="38%" cy="33%" r="65%">
                <stop offset="0%" stopColor="#d4972e" />
                <stop offset="60%" stopColor="#b87020" />
                <stop offset="100%" stopColor="#7a4408" />
              </radialGradient>
            </defs>
          </svg>
        </div>

        {!isOpen && <div className={styles.hint}>Appuyez pour ouvrir</div>}
      </div>
    </main>
  );
}
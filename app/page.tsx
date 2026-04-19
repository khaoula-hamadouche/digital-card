"use client";

import { useState, useCallback } from "react";
import styles from "./page.module.css";

interface Balloon {
  id: number;
  x: number;
  fill: string;
  dark: string;
  size: number;
  dur: number;
  delay: number;
}

const COLORS: [string, string][] = [
  ["#ffb3d1", "#e0527a"],
  ["#ffcce0", "#cc4070"],
  ["#ffd6e8", "#d46090"],
  ["#ff99c0", "#c03060"],
  ["#ffc0d8", "#e07898"],
  ["#ffe0ee", "#d080a0"],
];

function BalloonSVG({ fill, dark, size, uid }: { fill: string; dark: string; size: number; uid: string }) {
  const w = size, h = size * 1.28, cx = w / 2;
  return (
    <svg width={w} height={h + 28} viewBox={`0 0 ${w} ${h + 28}`} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id={`rg${uid}`} cx="32%" cy="28%" r="68%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.5" />
          <stop offset="100%" stopColor={fill} />
        </radialGradient>
      </defs>
      <ellipse cx={cx} cy={h / 2} rx={cx - 2} ry={h / 2 - 2} fill={`url(#rg${uid})`} stroke={dark} strokeWidth="1.2" />
      <circle cx={cx} cy={h - 2} r={3} fill={dark} />
      <path d={`M${cx} ${h + 1} Q${cx + 8} ${h + 14} ${cx} ${h + 28}`} fill="none" stroke={dark} strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [balloons, setBalloons] = useState<Balloon[]>([]);

  const launch = useCallback(() => {
    const W = window.innerWidth;
    const fracs = [0.07, 0.17, 0.27, 0.37, 0.47, 0.57, 0.67, 0.77, 0.87, 0.12, 0.42, 0.62, 0.82];
    const list: Balloon[] = fracs.map((f, i) => {
      const [fill, dark] = COLORS[i % COLORS.length];
      const size = 48 + Math.random() * 26;
      return { id: Date.now() + i, x: f * W - size / 2, fill, dark, size, dur: 3.6 + Math.random() * 2, delay: i * 0.14 };
    });
    setBalloons(list);
    setTimeout(() => setBalloons([]), 8000);
  }, []);

  const toggle = useCallback(() => {
    setIsOpen((v) => {
      if (!v) launch();
      return !v;
    });
  }, [launch]);

  return (
    <main className={styles.scene}>
      {/* Balloons */}
      <div className={styles.bc}>
        {balloons.map((b) => (
          <div key={b.id} className={styles.balloon} style={{ left: b.x, animationDuration: `${b.dur}s`, animationDelay: `${b.delay}s` }}>
            <BalloonSVG fill={b.fill} dark={b.dark} size={b.size} uid={String(b.id)} />
          </div>
        ))}
      </div>

      {/* Static birthday title — always visible */}
      <div className={styles.title}> ❤️</div>

      {/* Envelope + Letter wrapper */}
      <div className={`${styles.wrap} ${isOpen ? styles.open : ""}`} onClick={toggle}>

        {/* LETTER — z-index higher than flap */}
        <div className={styles.letter}>
          <div className={styles.lStars}>✦ ★ ✦ ★ ✦</div>
          <div className={styles.lGreet}>Chère Nada , 🎀</div>
          <div className={styles.lBody}>
            Un an de plus, mais t’inquiète… tu restes toujours jeune ❤️ <br />
            Aujourd&apos;hui c&apos;est TON jour, et tu le mérites<br />
            plus que quiconque... ✨<br />
            Joyeux Anniversaire ! 🎉 <br />
            Nous te souhaitons une année remplie <br />
            de bonheur, de réussite et de moments <br />
            inoubliable . <br />
          </div>
          <div className={styles.lSign}>avec tout notre amour 🎁</div>
          <div className={styles.lFoot}>· · ✦ Les deux Khaoula✦ · ·</div>
        </div>

        {/* ENVELOPE BODY — behind letter */}
        <div className={styles.envelope}>
          <div className={styles.envBody}>
            <div className={styles.envL} />
            <div className={styles.envR} />
            <div className={styles.envBot} />
            <div className={styles.postmark}><span className={styles.pmText}>Alger<br />2026</span></div>
            <div className={styles.stamp}><div className={styles.stampI}>🎂</div><div className={styles.stampT}>POST</div></div>
            <div className={styles.address}><div className={styles.addrLine} /><div className={styles.addrLine} /><div className={styles.addrLine} /></div>
          </div>
          <div className={styles.seal}>🎀</div>
          {/* FLAP — z-index LOWER than letter so letter appears in front */}
          <div className={styles.flapWrap}>
            <div className={styles.flapF} />
            <div className={styles.flapB} />
          </div>
        </div>

        <div className={styles.star} style={{ top: -18, left: -28 }}>✦</div>
        <div className={styles.star} style={{ top: -26, right: -18 }}>★</div>
        <div className={styles.star} style={{ top: 52, left: -36, fontSize: 9 }}>✧</div>
        <div className={styles.star} style={{ top: 58, right: -32, fontSize: 9 }}>✧</div>
      </div>

      {/* Static click hint below */}
      <p className={styles.hint} onClick={toggle}>
        {isOpen ? "✦ Joyeux Anniversaire Nada 🎀  ✦" : "✦ Cliquez pour ouvrir ✦"}
      </p>
    </main>
  );
}
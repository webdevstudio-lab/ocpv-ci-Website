"use client";
import { useEffect, useRef, useState } from "react";

/* ── Hook animation compteur ── */
function useCounter(target, duration = 1800, started = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [started, target, duration]);
  return count;
}

/* ── Stat principale (carte orange) ── */
function MainStat({ started }) {
  const count = useCounter(97, 1600, started);
  return (
    <div
      style={{
        background: "#f97316",
        borderRadius: 12,
        padding: "40px 32px",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: 220,
      }}
    >
      {/* Icone déco fond */}
      <div
        style={{ position: "absolute", right: -10, bottom: -10, opacity: 0.12 }}
      >
        <svg
          width="120"
          height="120"
          fill="none"
          stroke="#fff"
          strokeWidth="1.2"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
          <circle cx="12" cy="9" r="2.5" />
        </svg>
      </div>
      <div>
        <p
          style={{
            fontFamily: "'Barlow Condensed',sans-serif",
            fontWeight: 900,
            fontSize: "clamp(3.5rem,7vw,5rem)",
            color: "#fff",
            margin: 0,
            lineHeight: 1,
          }}
        >
          {count}%
        </p>
        <p
          style={{
            fontFamily: "'Barlow Condensed',sans-serif",
            fontWeight: 800,
            fontSize: 18,
            color: "#fff",
            textTransform: "uppercase",
            margin: "10px 0 0",
            letterSpacing: 0.5,
          }}
        >
          Satisfaction Client
        </p>
      </div>
      <p
        style={{
          fontFamily: "'Barlow',sans-serif",
          fontSize: 13,
          color: "rgba(255,255,255,0.8)",
          lineHeight: 1.6,
          margin: "14px 0 0",
        }}
      >
        Basé sur l'évaluation de nos services dans 14 régions, avec des milliers
        de bénéficiaires qui font confiance à l'OCPV.
      </p>
    </div>
  );
}

/* ── Stat secondaire (fond vert sombre) ── */
function StatItem({ icon, value, suffix, label, started, duration }) {
  const count = useCounter(value, duration, started);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "32px 28px",
        borderRight: "1px solid rgba(255,255,255,0.07)",
        gap: 12,
      }}
    >
      {/* Icone */}
      <div style={{ color: "rgba(255,255,255,0.55)", marginBottom: 4 }}>
        {icon}
      </div>
      {/* Valeur */}
      <p
        style={{
          fontFamily: "'Barlow Condensed',sans-serif",
          fontWeight: 900,
          fontSize: "clamp(2.4rem,5vw,3.8rem)",
          color: "#fff",
          margin: 0,
          lineHeight: 1,
        }}
      >
        {count}
        {suffix}
      </p>
      {/* Label */}
      <p
        style={{
          fontFamily: "'Barlow Condensed',sans-serif",
          fontWeight: 700,
          fontSize: 14,
          color: "rgba(255,255,255,0.65)",
          textTransform: "uppercase",
          letterSpacing: 0.8,
          margin: 0,
          lineHeight: 1.4,
        }}
      >
        {label}
      </p>
    </div>
  );
}

const secondaryStats = [
  {
    value: 14,
    suffix: "",
    label: "Antennes Régionales en Côte d'Ivoire",
    duration: 1200,
    icon: (
      <svg
        width="44"
        height="44"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        viewBox="0 0 24 24"
      >
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
  },
  {
    value: 40,
    suffix: "+",
    label: "Années d'Expérience Dans Le Vivrier",
    duration: 1500,
    icon: (
      <svg
        width="44"
        height="44"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        viewBox="0 0 24 24"
      >
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
        <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
      </svg>
    ),
  },
  {
    value: 3,
    suffix: "",
    label: "Plateformes Numériques Au Service Du Vivrier",
    duration: 800,
    icon: (
      <svg
        width="44"
        height="44"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        viewBox="0 0 24 24"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <path d="M7 10l3 3 4-4" />
      </svg>
    ),
  },
];

const cards = [
  {
    icon: (
      <svg
        width="28"
        height="28"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M18 20V10M12 20V4M6 20v-6" />
      </svg>
    ),
    title: "Suivi des prix",
    desc: "Publication hebdomadaire des prix à la consommation des produits vivriers dans toutes les régions.",
    img: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=600&q=70",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: "Organisation des marchés",
    desc: "Encadrement et modernisation des marchés de gros et de détail pour garantir disponibilité et qualité.",
    img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=70",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: "Assistance commerciale",
    desc: "Appui aux commerçants de produits vivriers et coordination des aides de l'État en leur faveur.",
    img: "https://images.unsplash.com/photo-1520453803296-c39eabe2dab4?w=600&q=70",
  },
];

export default function Features() {
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  /* Déclenche l'animation quand la section devient visible */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .stat-card-wrap:last-child > div { border-right: none !important; }
        @media (max-width: 768px) {
          .stats-grid { grid-template-columns: 1fr !important; }
          .secondary-stats { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .secondary-stats { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* ── SECTION STATS ── */}
      <section
        ref={ref}
        style={{ background: "#f8f9fa", padding: "60px 24px 0" }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div
            className="stats-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 3fr",
              borderRadius: 12,
              overflow: "hidden",
              boxShadow: "0 16px 48px rgba(0,0,0,0.12)",
            }}
          >
            {/* Carte orange principale */}
            <MainStat started={started} />

            {/* 3 stats secondaires sur fond vert sombre */}
            <div
              className="secondary-stats"
              style={{
                background: "#1a3a24",
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
              }}
            >
              {secondaryStats.map((s, i) => (
                <div key={s.label} className="stat-card-wrap">
                  <StatItem {...s} started={started} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3 CARDS SERVICES ── */}
      <section style={{ background: "#f8f9fa", padding: "0 24px 90px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span
              style={{
                fontFamily: "'Barlow Condensed',sans-serif",
                fontWeight: 700,
                fontSize: 12,
                textTransform: "uppercase",
                letterSpacing: 3,
                color: "#f97316",
              }}
            >
              Ce que nous faisons
            </span>
            <h2
              style={{
                fontFamily: "'Barlow Condensed',sans-serif",
                fontWeight: 900,
                fontSize: "clamp(1.6rem,3vw,2.4rem)",
                textTransform: "uppercase",
                color: "#1a5c2a",
                marginTop: 10,
              }}
            >
              Des services fiables pour le vivrier ivoirien
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
              gap: 28,
            }}
          >
            {cards.map((c) => (
              <div
                key={c.title}
                style={{
                  background: "#fff",
                  borderRadius: 12,
                  overflow: "hidden",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
                }}
              >
                <div
                  style={{
                    height: 180,
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <img
                    src={c.img}
                    alt={c.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(13,53,24,0.6), transparent)",
                    }}
                  />
                </div>
                <div style={{ padding: 24 }}>
                  <div
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 10,
                      background: "rgba(249,115,22,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#f97316",
                      marginBottom: 14,
                    }}
                  >
                    {c.icon}
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Barlow Condensed',sans-serif",
                      fontWeight: 800,
                      fontSize: 18,
                      textTransform: "uppercase",
                      color: "#1a5c2a",
                      marginBottom: 10,
                    }}
                  >
                    {c.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Barlow',sans-serif",
                      fontSize: 14,
                      color: "#6b7280",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {c.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

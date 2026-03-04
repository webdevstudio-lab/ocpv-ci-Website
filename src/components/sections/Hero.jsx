"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const slides = [
  {
    img: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1800&q=85",
    title: "Des Marchés Mieux Approvisionnés Pour La Côte d'Ivoire !",
    desc: "L'OCPV assure la réglementation et la modernisation des systèmes de commercialisation des produits vivriers à travers tout le territoire national.",
    cta1: "Nos Services",
    cta2: "En savoir plus",
    href1: "/#services",
    href2: "/#about",
  },
  {
    img: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=1800&q=85",
    title: "Suivi Des Prix Et Organisation Des Marchés Vivriers !",
    desc: "Publication hebdomadaire des prix à la consommation dans toutes les régions de Côte d'Ivoire pour une meilleure transparence du marché.",
    cta1: "Voir les Prix",
    cta2: "Documentation",
    href1: "#",
    href2: "#",
  },
  {
    img: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1800&q=85",
    title: "Une Infrastructure Commerciale Moderne Et Performante !",
    desc: "14 antennes régionales et 5 directions techniques au service du développement du commerce vivrier en Côte d'Ivoire depuis 1984.",
    cta1: "Découvrir",
    cta2: "Nous Contacter",
    href1: "/#services",
    href2: "/#contact",
  },
];

const prix =
  "🌽 Maïs grain – Abidjan: 440 F | Bouaké: 180 F   •   🍚 Riz local – Abidjan: 700 F | Bouaké: 600 F   •   🍌 Banane plantain – Abidjan: 490 F | Man: 140 F   •   🍅 Tomate – Abidjan: 720 F | Korhogo: 970 F   •   🌶 Piment – Abidjan: 680 F | Man: 1 710 F   •   🥔 Manioc doux – Abidjan: 470 F | Gagnoa: 330 F";

const cards = [
  {
    color: "#1a5c2a",
    icon: (
      <svg
        width="40"
        height="40"
        fill="none"
        stroke="rgba(255,255,255,0.7)"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
    title: "97% de satisfaction",
    desc: "Nous nous engageons à améliorer continuellement la qualité de nos services pour les acteurs du vivrier.",
  },
  {
    color: "#f97316",
    icon: (
      <svg
        width="40"
        height="40"
        fill="none"
        stroke="rgba(255,255,255,0.7)"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Gestion durable",
    desc: "14 antennes régionales mobilisées quotidiennement pour soutenir le commerce vivrier national.",
  },
];

export default function Hero() {
  const [cur, setCur] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const t = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setCur((p) => (p + 1) % slides.length);
        setAnimating(false);
      }, 400);
    }, 6000);
    return () => clearInterval(t);
  }, []);

  const goTo = (i) => {
    setAnimating(true);
    setTimeout(() => {
      setCur(i);
      setAnimating(false);
    }, 300);
  };

  const prev = () => goTo((cur - 1 + slides.length) % slides.length);
  const next = () => goTo((cur + 1) % slides.length);

  const s = slides[cur];

  return (
    <>
      {/* ─── Import Google Font Barlow Condensed ─── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800;900&family=Barlow:wght@400;500;600&display=swap');

        .hero-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -0.5px;
          text-transform: uppercase;
          font-size: clamp(2.6rem, 6vw, 4.8rem);
          color: #fff;
          margin: 0 0 20px;
          opacity: 1;
          transition: opacity 0.3s ease;
        }
        .hero-title.fade { opacity: 0; }

        .hero-desc {
          font-family: 'Barlow', sans-serif;
          font-weight: 400;
          font-size: clamp(14px, 1.6vw, 17px);
          color: rgba(255,255,255,0.85);
          line-height: 1.65;
          max-width: 540px;
          margin: 0 0 36px;
          transition: opacity 0.3s ease;
        }
        .hero-desc.fade { opacity: 0; }

        .hero-btn-primary {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 700;
          font-size: 15px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          background: #f97316;
          color: #fff;
          border: none;
          padding: 14px 30px;
          border-radius: 4px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          transition: background 0.2s;
          box-shadow: 0 4px 20px rgba(249,115,22,0.4);
        }
        .hero-btn-primary:hover { background: #ea6c0a; }

        .hero-btn-secondary {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 700;
          font-size: 15px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          background: #fff;
          color: #1a1a1a;
          border: none;
          padding: 14px 30px;
          border-radius: 4px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          transition: background 0.2s, color 0.2s;
        }
        .hero-btn-secondary:hover { background: #f0f0f0; }

        .hero-card-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 700;
          font-size: 18px;
          color: #fff;
          margin: 0 0 8px;
          text-transform: uppercase;
          letter-spacing: 0.3px;
        }

        .hero-card-desc {
          font-family: 'Barlow', sans-serif;
          font-size: 13px;
          color: rgba(255,255,255,0.82);
          line-height: 1.6;
          margin: 0;
        }

        .hero-nav-btn {
          width: 44px; height: 44px;
          border-radius: 50%;
          border: 2px solid rgba(255,255,255,0.5);
          background: rgba(255,255,255,0.1);
          color: #fff;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s;
        }
        .hero-nav-btn:hover {
          background: #f97316;
          border-color: #f97316;
        }

        .hero-card-link {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 700;
          font-size: 13px;
          color: #fff;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: 14px;
          opacity: 0.9;
        }

        .contact-strip-text {
          font-family: 'Barlow', sans-serif;
          font-size: 14px;
          color: #374151;
          font-weight: 500;
          line-height: 1.5;
        }

        .contact-strip-link {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 700;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: #1a5c2a;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        @keyframes marquee { from { transform: translateX(100%); } to { transform: translateX(-100%); } }
        .ticker-text { animation: marquee 50s linear infinite; }

        @media (max-width: 768px) {
          .hero-floating-cards { display: none !important; }
          .hero-contact-strip .contact-avatars { display: none !important; }
        }
      `}</style>

      <section
        style={{
          position: "relative",
          height: "100vh",
          minHeight: 620,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        {/* ── Backgrounds ── */}
        {slides.map((sl, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `url(${sl.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: i === cur ? 1 : 0,
              transition: "opacity 0.8s ease",
            }}
          />
        ))}

        {/* ── Overlay sombre à gauche comme le template ── */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(100deg, rgba(20,30,15,0.88) 0%, rgba(20,30,15,0.72) 45%, rgba(20,30,15,0.25) 75%, transparent 100%)",
          }}
        />

        {/* ── Contenu principal ── */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            flex: 1,
            display: "flex",
            alignItems: "center",
            padding: "0 48px",
          }}
        >
          <div
            style={{
              maxWidth: 1280,
              width: "100%",
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 32,
            }}
          >
            {/* Texte gauche */}
            <div style={{ maxWidth: 600 }}>
              <h1 className={`hero-title${animating ? " fade" : ""}`}>
                {s.title}
              </h1>
              <p className={`hero-desc${animating ? " fade" : ""}`}>{s.desc}</p>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                <Link href={s.href1} className="hero-btn-primary">
                  {s.cta1}
                  <svg
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </Link>
                <Link href={s.href2} className="hero-btn-secondary">
                  {s.cta2}
                </Link>
              </div>

              {/* Navigation prev/next + "Next" label */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  marginTop: 40,
                }}
              >
                <button
                  onClick={prev}
                  className="hero-nav-btn"
                  aria-label="Précédent"
                >
                  <svg
                    width="18"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 12H5M11 6l-6 6 6 6" />
                  </svg>
                </button>
                <span
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    color: "rgba(255,255,255,0.75)",
                    fontSize: 14,
                    letterSpacing: 1,
                    textTransform: "uppercase",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                  onClick={next}
                >
                  Suivant
                  <svg
                    width="14"
                    height="14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </div>
            </div>

            {/* Cards flottantes droite bas (comme le template) */}
            <div
              className="hero-floating-cards"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 16,
                alignSelf: "flex-end",
                paddingBottom: 80,
              }}
            >
              {cards.map((c, i) => (
                <div
                  key={i}
                  style={{
                    background: c.color,
                    borderRadius: 4,
                    padding: "22px 24px",
                    maxWidth: 280,
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* Icone déco fond */}
                  <div
                    style={{
                      position: "absolute",
                      right: 12,
                      bottom: 8,
                      opacity: 0.15,
                    }}
                  >
                    {c.icon}
                  </div>
                  <p className="hero-card-title">{c.title}</p>
                  <p className="hero-card-desc">{c.desc}</p>
                  <a href="/#services" className="hero-card-link">
                    <div
                      style={{
                        width: 26,
                        height: 26,
                        borderRadius: "50%",
                        background: "rgba(255,255,255,0.25)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <svg
                        width="12"
                        height="12"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </div>
                    Explorer
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Bande contact bas gauche + Ticker prix ── */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            display: "flex",
            alignItems: "stretch",
            minHeight: 64,
          }}
        >
          {/* Strip contact (blanc) */}
          <div
            className="hero-contact-strip"
            style={{
              background: "#fff",
              padding: "14px 32px",
              display: "flex",
              alignItems: "center",
              gap: 16,
              flexShrink: 0,
              minWidth: 340,
            }}
          >
            {/* Avatars empilés */}
            <div className="contact-avatars" style={{ display: "flex" }}>
              {[
                "/assets/img/dg_ocpv.jpg",
                "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=80&q=70",
              ].map((src, i) => (
                <div
                  key={i}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    border: "3px solid #fff",
                    overflow: "hidden",
                    marginLeft: i === 0 ? 0 : -12,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                    background: "#e5e7eb",
                  }}
                >
                  <img
                    src={src}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              ))}
              {/* Icone téléphone */}
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  border: "3px solid #fff",
                  background: "#1a5c2a",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginLeft: -12,
                }}
              >
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.08 1.18 2 2 0 012.06 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.27 7.68a16 16 0 006.06 6.06l1.05-1.05a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
              </div>
            </div>
            <div>
              <p className="contact-strip-text">
                Des marchés fiables pour tous, <br />
                contactez-nous dès aujourd'hui !
              </p>
              <Link href="/#contact" className="contact-strip-link">
                Nous Contacter
                <div
                  style={{
                    width: 22,
                    height: 22,
                    borderRadius: "50%",
                    background: "#1a5c2a",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    width="10"
                    height="10"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </div>
              </Link>
            </div>
          </div>

          {/* Ticker prix (orange) */}
          <div
            style={{
              background: "#f97316",
              flex: 1,
              display: "flex",
              alignItems: "center",
              gap: 0,
              overflow: "hidden",
            }}
          >
            <span
              style={{
                flexShrink: 0,
                margin: "0 16px",
                background: "#1a5c2a",
                color: "#fff",
                fontSize: 11,
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 800,
                padding: "4px 14px",
                borderRadius: 3,
                whiteSpace: "nowrap",
                letterSpacing: 1,
              }}
            >
              PRIX SEMAINE
            </span>
            <div style={{ overflow: "hidden", flex: 1 }}>
              <p
                className="ticker-text"
                style={{
                  color: "#fff",
                  fontSize: 18,
                  fontFamily: "'Barlow', sans-serif",
                  fontWeight: 500,
                  whiteSpace: "nowrap",
                  margin: 0,
                }}
              >
                {prix}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

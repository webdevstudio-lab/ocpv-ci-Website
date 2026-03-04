"use client";
import { useState } from "react";
import Link from "next/link";

const company = [
  { label: "Présentation", href: "/#about" },
  { label: "Direction Générale", href: "/#services" },
  { label: "Organigramme", href: "#" },
  { label: "Actualités", href: "#" },
  { label: "Recrutement", href: "#" },
];

const services = [
  { label: "Suivi des Prix Vivriers", href: "#" },
  { label: "Organisation des Marchés", href: "#" },
  { label: "Assistance Commerciale", href: "#" },
  { label: "Infrastructures Marchandes", href: "#" },
  { label: "Plateformes Numériques", href: "/#platforms" },
  { label: "Documentation", href: "#" },
];

const partners = [
  { label: "Partenaires Techniques", href: "#" },
  { label: "Partenaires Financiers", href: "#" },
  { label: "Min. du Commerce", href: "https://www.commerce.gouv.ci/" },
  { label: "Min. des Finances", href: "#" },
  {
    label: "Banque Mondiale",
    href: "https://www.banquemondiale.org/fr/country/cotedivoire",
  },
  { label: "Union Européenne", href: "#" },
  { label: "BAD", href: "https://www.afdb.org/fr" },
];

const socials = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    label: "Twitter",
    href: "#",
    icon: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
        <polygon
          fill="#0d3518"
          points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"
        />
      </svg>
    ),
  },
];

// Motif hexagone SVG encodé
const HEX_PATTERN = `url("data:image/svg+xml,%3Csvg width='60' height='52' viewBox='0 0 60 52' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 2L58 17.5V34.5L30 50L2 34.5V17.5L30 2Z' stroke='rgba(255,255,255,0.035)' stroke-width='1.5'/%3E%3C/svg%3E")`;

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <style>{`
        .footer-root {
          background: #0a2a14;
          position: relative;
          overflow: hidden;
        }
        /* Motif hexagones sur tout le footer */
        .footer-root::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: ${HEX_PATTERN};
          background-size: 60px 52px;
          pointer-events: none;
        }

        /* Séparateur de couleur entre contact (#0d3518) et footer (#0a2a14) */
        .footer-divider {
          height: 4px;
          background: linear-gradient(to right, #f97316 0%, #1a5c2a 50%, #f97316 100%);
        }

        .footer-col-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 800;
          font-size: 16px;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: #fff;
          margin: 0 0 20px;
          padding-bottom: 10px;
          border-bottom: 2px solid #f97316;
          display: inline-block;
        }

        .footer-link {
          font-family: 'Barlow', sans-serif;
          font-size: 13px;
          font-weight: 500;
          color: rgba(255,255,255,0.55);
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 5px 0;
          transition: color 0.2s, gap 0.2s;
          line-height: 1.4;
        }
        .footer-link:hover { color: #f97316; gap: 12px; }
        .footer-link:hover .fl-dot { background: #f97316; }

        .fl-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: rgba(255,255,255,0.25);
          flex-shrink: 0;
          transition: background 0.2s;
        }

        .footer-contact-link {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 700;
          font-size: 15px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: #f97316;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: color 0.2s;
        }
        .footer-contact-link:hover { color: #fff; }

        .newsletter-input {
          flex: 1;
          background: rgba(255,255,255,0.06);
          border: 1.5px solid rgba(255,255,255,0.12);
          border-radius: 6px 0 0 6px;
          padding: 12px 16px;
          font-family: 'Barlow', sans-serif;
          font-size: 13px;
          color: #fff;
          outline: none;
          transition: border-color 0.2s;
        }
        .newsletter-input::placeholder { color: rgba(255,255,255,0.35); }
        .newsletter-input:focus { border-color: #f97316; }

        .newsletter-btn {
          background: #f97316;
          border: none;
          border-radius: 0 6px 6px 0;
          padding: 12px 16px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s;
        }
        .newsletter-btn:hover { background: #ea6c0a; }

        .social-btn {
          width: 36px; height: 36px;
          border-radius: 6px;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.1);
          display: flex; align-items: center; justify-content: center;
          color: rgba(255,255,255,0.6);
          text-decoration: none;
          transition: background 0.2s, color 0.2s, border-color 0.2s;
        }
        .social-btn:hover {
          background: #f97316;
          border-color: #f97316;
          color: #fff;
        }

        .back-top-btn {
          position: fixed;
          bottom: 28px; right: 28px;
          width: 46px; height: 46px;
          border-radius: 6px;
          background: #f97316;
          border: none;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 4px 20px rgba(249,115,22,0.45);
          transition: background 0.2s, transform 0.2s;
          z-index: 998;
        }
        .back-top-btn:hover { background: #ea6c0a; transform: translateY(-3px); }

        .footer-bottom-bar {
          background: rgba(0,0,0,0.25);
          border-top: 1px solid rgba(255,255,255,0.06);
          padding: 16px 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 10px;
        }
        .footer-bottom-text {
          font-family: 'Barlow', sans-serif;
          font-size: 12px;
          color: rgba(255,255,255,0.3);
        }
        .footer-bottom-text span { color: rgba(255,255,255,0.6); font-weight: 600; }

        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          .footer-grid { grid-template-columns: 1fr !important; }
          .footer-bottom-bar { justify-content: center; text-align: center; }
        }
      `}</style>

      {/* Séparateur coloré entre Contact et Footer */}
      <div className="footer-divider" />

      <footer className="footer-root">
        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: 1280,
            margin: "0 auto",
            padding: "64px 32px 0",
          }}
        >
          <div
            className="footer-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1.6fr 1fr 1fr 1fr 1.4fr",
              gap: 40,
            }}
          >
            {/* ── Col 1 : Identité ── */}
            <div>
              {/* Logo */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 20,
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg,#1a5c2a,#2d7a40)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 4px 16px rgba(26,92,42,0.4)",
                    flexShrink: 0,
                  }}
                >
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2a10 10 0 100 20A10 10 0 0012 2z" />
                    <path d="M12 8v4l3 3" />
                  </svg>
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "'Barlow Condensed',sans-serif",
                      fontWeight: 900,
                      fontSize: 18,
                      textTransform: "uppercase",
                      color: "#fff",
                      margin: 0,
                    }}
                  >
                    OCPV
                  </p>
                  <p
                    style={{
                      fontFamily: "'Barlow',sans-serif",
                      fontSize: 10,
                      color: "rgba(255,255,255,0.4)",
                      margin: "2px 0 0",
                      textTransform: "uppercase",
                      letterSpacing: 0.5,
                    }}
                  >
                    Côte d'Ivoire
                  </p>
                </div>
              </div>

              <p
                style={{
                  fontFamily: "'Barlow',sans-serif",
                  fontSize: 13,
                  color: "rgba(255,255,255,0.5)",
                  lineHeight: 1.75,
                  marginBottom: 24,
                  maxWidth: 260,
                }}
              >
                Nous reconnaissons que des marchés bien approvisionnés sont
                essentiels pour une Côte d'Ivoire bien nourrie. L'OCPV s'engage
                à moderniser le commerce vivrier national.
              </p>

              {/* Contacts oranges */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  marginBottom: 0,
                }}
              >
                <a
                  href="mailto:info@ocpv-ci.com"
                  className="footer-contact-link"
                >
                  <svg
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  info@ocpv-ci.com
                </a>
                <a href="tel:+2252724391874" className="footer-contact-link">
                  <svg
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.08 1.18 2 2 0 012.06 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.27 7.68a16 16 0 006.06 6.06l1.05-1.05a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  +225 27 24 39 18 74
                </a>
              </div>
            </div>

            {/* ── Col 2 : Entreprise ── */}
            <div>
              <p className="footer-col-title">Entreprise</p>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {company.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="footer-link">
                      <span className="fl-dot" /> {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Col 3 : Services ── */}
            <div>
              <p className="footer-col-title">Services</p>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {services.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="footer-link">
                      <span className="fl-dot" /> {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Col 4 : Partenaires ── */}
            <div>
              <p className="footer-col-title">Partenaires</p>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {partners.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className="footer-link"
                    >
                      <span className="fl-dot" /> {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Col 5 : Newsletter ── */}
            <div>
              <p className="footer-col-title">Newsletter</p>
              <p
                style={{
                  fontFamily: "'Barlow',sans-serif",
                  fontSize: 13,
                  color: "rgba(255,255,255,0.5)",
                  lineHeight: 1.7,
                  marginBottom: 20,
                }}
              >
                Inscrivez-vous pour recevoir les alertes de prix, actualités et
                publications de l'OCPV.
              </p>

              {subscribed ? (
                <div
                  style={{
                    background: "rgba(26,92,42,0.3)",
                    border: "1px solid rgba(26,92,42,0.5)",
                    borderRadius: 8,
                    padding: "14px 16px",
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <svg
                    width="18"
                    height="18"
                    fill="none"
                    stroke="#4ade80"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span
                    style={{
                      fontFamily: "'Barlow',sans-serif",
                      fontSize: 13,
                      color: "#4ade80",
                    }}
                  >
                    Inscription confirmée !
                  </span>
                </div>
              ) : (
                <div style={{ display: "flex", marginBottom: 24 }}>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Votre adresse email"
                    className="newsletter-input"
                  />
                  <button
                    onClick={() => email && setSubscribed(true)}
                    className="newsletter-btn"
                  >
                    <svg
                      width="16"
                      height="16"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </button>
                </div>
              )}

              {/* Réseaux sociaux */}
              <div>
                <p
                  style={{
                    fontFamily: "'Barlow Condensed',sans-serif",
                    fontWeight: 700,
                    fontSize: 13,
                    textTransform: "uppercase",
                    letterSpacing: 1,
                    color: "rgba(255,255,255,0.5)",
                    marginBottom: 12,
                  }}
                >
                  Nous Suivre
                </p>
                <div style={{ display: "flex", gap: 10 }}>
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="social-btn"
                      title={s.label}
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div style={{ position: "relative", zIndex: 1, marginTop: 48 }}>
          <div className="footer-bottom-bar">
            <p className="footer-bottom-text">
              © {new Date().getFullYear()} <span>OCPV – Côte d'Ivoire</span>.
              Tous droits réservés. Office d'aide à la Commercialisation des
              Produits Vivriers.
            </p>
            <p className="footer-bottom-text">
              Placé sous la tutelle du <span>Ministère du Commerce</span>
            </p>
          </div>
        </div>
      </footer>

      {/* ── Bouton retour en haut ── */}
      <button
        onClick={scrollTop}
        className="back-top-btn"
        aria-label="Retour en haut"
      >
        <svg
          width="20"
          height="20"
          fill="none"
          stroke="#fff"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
        >
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </button>
    </>
  );
}

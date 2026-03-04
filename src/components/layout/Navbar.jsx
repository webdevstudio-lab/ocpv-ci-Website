"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Présentation", href: "/#about" },
  { label: "Actualités", href: "/actualites" },
  { label: "Direction Générale", href: "/#services" },
  {
    label: "Documentation",
    href: "#",
    children: [
      { label: "Prix à la Consommation", href: "#" },
      { label: "Note de Conjoncture N°09", href: "#" },
      { label: "Décret n°2023-771", href: "#" },
      { label: "Organigramme", href: "#" },
    ],
  },
  { label: "Plateformes", href: "/#platforms" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <style>{`
        .nav-link {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 700;
          font-size: 15px;
          text-transform: uppercase;
          letter-spacing: 0.6px;
          color: #1a1a1a;
          text-decoration: none;
          padding: 8px 14px;
          display: block;
          transition: color 0.2s;
          position: relative;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0; left: 14px; right: 14px;
          height: 2px;
          background: #f97316;
          transform: scaleX(0);
          transition: transform 0.2s;
          transform-origin: left;
        }
        .nav-link:hover { color: #f97316; }
        .nav-link:hover::after { transform: scaleX(1); }

        .nav-dropdown-btn {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 700;
          font-size: 15px;
          text-transform: uppercase;
          letter-spacing: 0.6px;
          color: #1a1a1a;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px 14px;
          display: flex;
          align-items: center;
          gap: 5px;
          transition: color 0.2s;
        }
        .nav-dropdown-btn:hover { color: #f97316; }

        .nav-group { position: relative; }

        .nav-dropdown {
          display: none;
          position: absolute;
          /* Suppression du gap : le dropdown colle directement au nav */
          top: 100%;
          left: 0;
          background: #fff;
          min-width: 250px;
          border-radius: 0 0 6px 6px;
          border-top: 3px solid #f97316;
          box-shadow: 0 12px 40px rgba(0,0,0,0.12);
          z-index: 100;
        }
        .nav-group:hover .nav-dropdown { display: block; }
        .nav-group:hover .nav-dropdown-btn { color: #f97316; }

        .nav-dropdown ul {
          list-style: none;
          margin: 0;
          padding: 6px 0;
        }

        .nav-dropdown a {
          font-family: 'Barlow', sans-serif;
          font-size: 13px;
          font-weight: 500;
          color: #374151;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 18px;
          text-decoration: none;
          transition: background 0.15s, color 0.15s;
        }
        .nav-dropdown a:hover {
          background: #f97316;
          color: #fff;
        }
        .nav-dropdown a:hover .dd-dot { background: #fff; }

        .dd-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #f97316;
          flex-shrink: 0;
          transition: background 0.15s;
        }

        .nav-cta {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 800;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          background: #f97316;
          color: #fff;
          padding: 11px 24px;
          border-radius: 4px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          transition: background 0.2s;
          box-shadow: 0 4px 14px rgba(249,115,22,0.35);
        }
        .nav-cta:hover { background: #ea6c0a; }

        .topbar-text {
          font-family: 'Barlow', sans-serif;
          font-size: 12px;
          font-weight: 500;
          color: rgba(255,255,255,0.85);
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .topbar-contact {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 700;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: #fff;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: color 0.2s;
        }
        .topbar-contact:hover { color: #f97316; }

        .logo-name {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 900;
          font-size: 18px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: #1a5c2a;
          margin: 0;
          line-height: 1.1;
        }
        .logo-sub {
          font-family: 'Barlow', sans-serif;
          font-size: 10px;
          color: #9ca3af;
          font-weight: 500;
          margin: 2px 0 0;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .mobile-link {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 700;
          font-size: 16px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: #1a1a1a;
          text-decoration: none;
          display: block;
          padding: 13px 0;
          border-bottom: 1px solid #f3f4f6;
          transition: color 0.2s;
        }
        .mobile-link:hover { color: #f97316; }

        .burger-btn {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 6px;
          color: #1a5c2a;
        }

        @media (max-width: 960px) {
          .desktop-nav { display: none !important; }
          .burger-btn { display: flex !important; }
        }
      `}</style>

      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 999,
          background: "#fff",
          boxShadow: scrolled
            ? "0 4px 24px rgba(0,0,0,0.10)"
            : "0 2px 8px rgba(0,0,0,0.05)",
          transition: "box-shadow 0.3s",
        }}
      >
        {/* ── Top bar ── */}
        <div style={{ background: "#1a5c2a", padding: "7px 0" }}>
          <div
            style={{
              maxWidth: 1280,
              margin: "0 auto",
              padding: "0 32px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 8,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
              <span className="topbar-text">
                <svg
                  width="13"
                  height="13"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
                ABOBO PK 18, Route d'Anyama, Carrefour AGRIPAC – Abidjan
              </span>
              <span className="topbar-text" style={{ display: "flex" }}>
                <svg
                  width="13"
                  height="13"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                info@ocpv-ci.com
              </span>
            </div>
            <a href="tel:+22527243918 74" className="topbar-contact">
              <svg
                width="13"
                height="13"
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

        {/* ── Nav principale ── */}
        <nav
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 64,
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              textDecoration: "none",
            }}
          >
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #1a5c2a 0%, #2d7a40 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 12px rgba(26,92,42,0.3)",
                flexShrink: 0,
              }}
            >
              <svg
                width="22"
                height="22"
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
              <p className="logo-name">OCPV</p>
              <p className="logo-sub">Côte d'Ivoire</p>
            </div>
          </Link>

          {/* Links desktop */}
          <ul
            className="desktop-nav"
            style={{
              display: "flex",
              listStyle: "none",
              margin: 0,
              padding: 0,
              alignItems: "center",
              gap: 0,
            }}
          >
            {navLinks.map((link) =>
              link.children ? (
                <li key={link.label} className="nav-group">
                  <button className="nav-dropdown-btn">
                    {link.label}
                    <svg
                      width="12"
                      height="12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                  <div className="nav-dropdown">
                    <ul
                      style={{ listStyle: "none", margin: 0, padding: "6px 0" }}
                    >
                      {link.children.map((c) => (
                        <li key={c.label}>
                          <Link href={c.href}>
                            <span className="dd-dot" />
                            {c.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ) : (
                <li key={link.label}>
                  <Link href={link.href} className="nav-link">
                    {link.label}
                  </Link>
                </li>
              ),
            )}
          </ul>

          {/* CTA + Burger */}
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <Link
              href="/#contact"
              className="nav-cta desktop-nav"
              style={{ display: "inline-flex" }}
            >
              <svg
                width="15"
                height="15"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.08 1.18 2 2 0 012.06 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.27 7.68a16 16 0 006.06 6.06l1.05-1.05a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
              </svg>
              Nous Contacter
            </Link>

            <button
              onClick={() => setOpen(!open)}
              className="burger-btn"
              aria-label="Menu"
            >
              {open ? (
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 12h18M3 6h18M3 18h18" />
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* ── Menu mobile ── */}
        {open && (
          <div
            style={{
              background: "#fff",
              borderTop: "3px solid #f97316",
              padding: "8px 32px 24px",
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="mobile-link"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                marginTop: 16,
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 800,
                fontSize: 15,
                textTransform: "uppercase",
                letterSpacing: 0.8,
                background: "#f97316",
                color: "#fff",
                padding: "13px 0",
                borderRadius: 4,
                textDecoration: "none",
                textAlign: "center",
                boxShadow: "0 4px 14px rgba(249,115,22,0.35)",
              }}
            >
              Nous Contacter
            </Link>
          </div>
        )}
      </header>
    </>
  );
}

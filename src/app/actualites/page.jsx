"use client";
import { useState } from "react";
import Link from "next/link";

// ── Données de démonstration ──────────────────────────────────────────────────
const categories = [
  "Toutes",
  "Marchés",
  "Prix",
  "Réglementation",
  "Événements",
  "Rapports",
];

const actualites = [
  {
    id: 1,
    categorie: "Prix",
    titre:
      "Évolution des prix des denrées alimentaires au marché d'Adjamé – Février 2026",
    extrait:
      "L'Observatoire publie son bulletin mensuel sur l'évolution des prix à la consommation. Les prix du riz local enregistrent une légère hausse de 3% tandis que les légumes frais restent stables.",
    date: "28 Février 2026",
    image: null,
    featured: true,
  },
  {
    id: 2,
    categorie: "Marchés",
    titre: "Ouverture officielle du nouveau marché de gros de Yopougon",
    extrait:
      "Le ministre du Commerce a procédé à l'inauguration du nouveau marché de gros de Yopougon, une infrastructure moderne de 4 500 m² dédiée aux produits vivriers.",
    date: "22 Février 2026",
    image: null,
    featured: false,
  },
  {
    id: 3,
    categorie: "Rapports",
    titre:
      "Note de conjoncture N°09 : Analyse des filières maraîchères en Côte d'Ivoire",
    extrait:
      "Cette note présente une analyse approfondie de la performance des filières maraîchères ivoiriennes pour le second semestre 2025, avec des perspectives pour 2026.",
    date: "15 Février 2026",
    image: null,
    featured: false,
  },
  {
    id: 4,
    categorie: "Réglementation",
    titre:
      "Application du Décret n°2023-771 : bilan et perspectives six mois après",
    extrait:
      "Six mois après l'entrée en vigueur du décret portant réglementation des prix des produits de grande consommation, l'OCPV dresse un premier bilan encourageant.",
    date: "10 Février 2026",
    image: null,
    featured: false,
  },
  {
    id: 5,
    categorie: "Événements",
    titre: "Forum National sur la Sécurité Alimentaire – Abidjan, Mars 2026",
    extrait:
      "L'OCPV participera activement au Forum National sur la Sécurité Alimentaire prévu du 12 au 14 mars 2026 au Sofitel Abidjan Hôtel Ivoire.",
    date: "5 Février 2026",
    image: null,
    featured: false,
  },
  {
    id: 6,
    categorie: "Prix",
    titre:
      "Bulletin hebdomadaire des prix – Semaine du 27 janvier au 2 février 2026",
    extrait:
      "Le relevé hebdomadaire indique une stabilisation générale des prix sur les marchés de détail d'Abidjan, avec une baisse notable sur les tubercules.",
    date: "3 Février 2026",
    image: null,
    featured: false,
  },
  {
    id: 7,
    categorie: "Marchés",
    titre:
      "Digitalisation des marchés : lancement de la plateforme de collecte de données en temps réel",
    extrait:
      "L'OCPV annonce le déploiement d'une nouvelle plateforme numérique permettant la collecte et la publication en temps réel des données de prix sur 45 marchés.",
    date: "25 Janvier 2026",
    image: null,
    featured: false,
  },
  {
    id: 8,
    categorie: "Rapports",
    titre: "Rapport annuel 2025 : résultats et perspectives de l'Observatoire",
    extrait:
      "Le rapport annuel 2025 de l'OCPV est désormais disponible. Il retrace les activités de l'Observatoire et présente les indicateurs clés du secteur des prix et marchés.",
    date: "18 Janvier 2026",
    image: null,
    featured: false,
  },
];

// Icônes de catégorie
const catIcon = {
  Marchés: "🏪",
  Prix: "📊",
  Réglementation: "📋",
  Événements: "📅",
  Rapports: "📁",
};

export default function ActualitesPage() {
  const [activeCat, setActiveCat] = useState("Toutes");
  const [search, setSearch] = useState("");

  const filtered = actualites.filter((a) => {
    const matchCat = activeCat === "Toutes" || a.categorie === activeCat;
    const matchSearch =
      search === "" ||
      a.titre.toLowerCase().includes(search.toLowerCase()) ||
      a.extrait.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const featured = filtered.find((a) => a.featured) || filtered[0];
  const rest = filtered.filter((a) => a.id !== featured?.id);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800;900&family=Barlow:wght@400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .actu-page {
          font-family: 'Barlow', sans-serif;
          background: #f8f7f4;
          min-height: 100vh;
        }

        /* ── Hero banner ── */
        .actu-hero {
          background:
            linear-gradient(135deg, rgba(10,42,19,0.93) 0%, rgba(15,61,28,0.87) 50%, rgba(26,92,42,0.80) 100%),
            url('https://images.unsplash.com/photo-1542838132-92c53300491e?w=1600&q=80&auto=format&fit=crop') center/cover no-repeat;
          padding: 100px 0 72px;
          padding-top: calc(64px + 36px + 72px); /* navbar (64) + topbar (36) + espace */
          position: relative;
          overflow: hidden;
        }
        .actu-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            radial-gradient(ellipse 700px 400px at 85% 50%, rgba(249,115,22,0.18) 0%, transparent 65%),
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 40px,
              rgba(255,255,255,0.015) 40px,
              rgba(255,255,255,0.015) 41px
            );
        }
        .actu-hero-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 32px;
          position: relative;
          z-index: 1;
        }
        .actu-hero-label {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 3px;
          color: #f97316;
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 16px;
        }
        .actu-hero-label::before {
          content: '';
          display: block;
          width: 32px;
          height: 2px;
          background: #f97316;
        }
        .actu-hero h1 {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: clamp(36px, 5vw, 58px);
          font-weight: 900;
          text-transform: uppercase;
          color: #fff;
          letter-spacing: 1px;
          line-height: 1.05;
          max-width: 600px;
        }
        .actu-hero h1 span { color: #f97316; }
        .actu-hero-sub {
          font-size: 15px;
          color: rgba(255,255,255,0.65);
          margin-top: 14px;
          max-width: 480px;
          line-height: 1.6;
        }

        /* ── Barre recherche + filtres ── */
        .actu-toolbar {
          background: #fff;
          border-bottom: 1px solid #e8e6e0;
          position: sticky;
          top: 64px;
          z-index: 90;
          box-shadow: 0 2px 12px rgba(0,0,0,0.06);
        }
        .actu-toolbar-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 32px;
          display: flex;
          align-items: center;
          gap: 24px;
          height: 64px;
          flex-wrap: wrap;
        }
        .actu-search {
          display: flex;
          align-items: center;
          gap: 10px;
          background: #f8f7f4;
          border: 1.5px solid #e0ddd6;
          border-radius: 6px;
          padding: 0 14px;
          height: 40px;
          min-width: 260px;
          transition: border-color 0.2s;
        }
        .actu-search:focus-within { border-color: #1a5c2a; }
        .actu-search input {
          border: none;
          background: transparent;
          font-family: 'Barlow', sans-serif;
          font-size: 13px;
          color: #1a1a1a;
          outline: none;
          width: 100%;
        }
        .actu-search input::placeholder { color: #b0aa9e; }
        .actu-search svg { color: #9ca3af; flex-shrink: 0; }

        .actu-cats {
          display: flex;
          align-items: center;
          gap: 6px;
          flex-wrap: wrap;
        }
        .cat-btn {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 700;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          padding: 6px 14px;
          border-radius: 4px;
          border: 1.5px solid transparent;
          cursor: pointer;
          transition: all 0.18s;
          background: transparent;
          color: #6b6560;
          border-color: #e0ddd6;
        }
        .cat-btn:hover { border-color: #1a5c2a; color: #1a5c2a; }
        .cat-btn.active {
          background: #1a5c2a;
          color: #fff;
          border-color: #1a5c2a;
        }
        .cat-count {
          font-size: 10px;
          background: #f97316;
          color: #fff;
          border-radius: 10px;
          padding: 1px 6px;
          margin-left: 4px;
          font-weight: 800;
        }

        /* ── Contenu principal ── */
        .actu-main {
          max-width: 1280px;
          margin: 0 auto;
          padding: 48px 32px 80px;
        }

        /* ── Article à la une ── */
        .actu-featured {
          display: grid;
          grid-template-columns: 1fr 420px;
          gap: 0;
          background: #fff;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 32px rgba(0,0,0,0.09);
          margin-bottom: 48px;
          transition: box-shadow 0.25s;
        }
        .actu-featured:hover { box-shadow: 0 8px 48px rgba(0,0,0,0.14); }

        .actu-featured-img {
          background: linear-gradient(135deg, #1a5c2a 0%, #0f3d1c 100%);
          min-height: 360px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }
        .actu-featured-img::after {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 30% 60%, rgba(249,115,22,0.25) 0%, transparent 60%),
            repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 30px,
              rgba(255,255,255,0.03) 30px,
              rgba(255,255,255,0.03) 31px
            );
        }
        .featured-icon-wrap {
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }
        .featured-big-icon {
          width: 80px; height: 80px;
          border-radius: 50%;
          background: rgba(249,115,22,0.2);
          border: 2px solid rgba(249,115,22,0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 36px;
        }
        .featured-une-label {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 3px;
          color: rgba(255,255,255,0.5);
        }

        .actu-featured-body {
          padding: 40px 40px 36px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .actu-featured-body .badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #f97316;
          background: rgba(249,115,22,0.08);
          border: 1px solid rgba(249,115,22,0.2);
          border-radius: 4px;
          padding: 4px 10px;
          width: fit-content;
          margin-bottom: 16px;
        }
        .actu-featured-body h2 {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 26px;
          font-weight: 800;
          color: #111;
          line-height: 1.2;
          margin-bottom: 14px;
          text-transform: uppercase;
          letter-spacing: 0.3px;
        }
        .actu-featured-body p {
          font-size: 14px;
          color: #555;
          line-height: 1.7;
          flex-grow: 1;
          margin-bottom: 28px;
        }
        .actu-featured-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .actu-date {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: #9ca3af;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .actu-read-btn {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 800;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          background: #1a5c2a;
          color: #fff;
          padding: 10px 22px;
          border-radius: 4px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: background 0.2s;
          box-shadow: 0 4px 14px rgba(26,92,42,0.25);
        }
        .actu-read-btn:hover { background: #14471f; }
        .actu-read-btn svg { transition: transform 0.2s; }
        .actu-read-btn:hover svg { transform: translateX(3px); }

        /* ── Grille articles ── */
        .actu-section-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 13px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: #1a5c2a;
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
        }
        .actu-section-title::after {
          content: '';
          flex: 1;
          height: 1px;
          background: #e0ddd6;
        }

        .actu-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .actu-card {
          background: #fff;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 16px rgba(0,0,0,0.07);
          display: flex;
          flex-direction: column;
          transition: box-shadow 0.22s, transform 0.22s;
          cursor: pointer;
          text-decoration: none;
          color: inherit;
          animation: fadeUp 0.4s ease both;
        }
        .actu-card:hover {
          box-shadow: 0 8px 40px rgba(0,0,0,0.13);
          transform: translateY(-3px);
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .actu-card-img {
          height: 140px;
          background: linear-gradient(135deg, #1a5c2a 0%, #0f3d1c 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          flex-shrink: 0;
        }
        .actu-card-img::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 70% 30%, rgba(249,115,22,0.18) 0%, transparent 60%);
        }
        .card-emoji { font-size: 40px; z-index: 1; }

        .actu-card-body {
          padding: 20px 20px 18px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .actu-card-badge {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 10px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #f97316;
          background: rgba(249,115,22,0.08);
          border: 1px solid rgba(249,115,22,0.2);
          border-radius: 3px;
          padding: 3px 8px;
          width: fit-content;
          margin-bottom: 10px;
        }
        .actu-card h3 {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 16px;
          font-weight: 800;
          text-transform: uppercase;
          color: #111;
          line-height: 1.25;
          margin-bottom: 10px;
          letter-spacing: 0.2px;
        }
        .actu-card p {
          font-size: 13px;
          color: #666;
          line-height: 1.6;
          flex-grow: 1;
          margin-bottom: 16px;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .actu-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 12px;
          border-top: 1px solid #f0ede8;
        }
        .actu-card-date {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.4px;
          color: #b0aa9e;
          display: flex;
          align-items: center;
          gap: 5px;
        }
        .actu-card-lire {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          color: #1a5c2a;
          display: flex;
          align-items: center;
          gap: 4px;
          transition: gap 0.2s;
        }
        .actu-card:hover .actu-card-lire { gap: 8px; }

        /* ── Empty state ── */
        .actu-empty {
          text-align: center;
          padding: 80px 20px;
          color: #9ca3af;
        }
        .actu-empty svg { margin-bottom: 16px; opacity: 0.4; }
        .actu-empty p {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 18px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* ── Pagination ── */
        .actu-pagination {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          margin-top: 48px;
        }
        .pg-btn {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 700;
          font-size: 13px;
          width: 36px; height: 36px;
          border-radius: 4px;
          border: 1.5px solid #e0ddd6;
          background: #fff;
          color: #555;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.18s;
        }
        .pg-btn:hover { border-color: #1a5c2a; color: #1a5c2a; }
        .pg-btn.active { background: #1a5c2a; border-color: #1a5c2a; color: #fff; }

        @media (max-width: 960px) {
          .actu-featured { grid-template-columns: 1fr; }
          .actu-featured-img { min-height: 200px; }
          .actu-grid { grid-template-columns: repeat(2, 1fr); }
          .actu-toolbar-inner { height: auto; padding: 12px 20px; gap: 12px; }
          .actu-main { padding: 32px 20px 60px; }
          .actu-hero-inner { padding: 0 20px; }
        }
        @media (max-width: 640px) {
          .actu-grid { grid-template-columns: 1fr; }
          .actu-search { min-width: 100%; }
        }
      `}</style>

      <div className="actu-page">
        {/* ── Hero ── */}
        <section className="actu-hero">
          <div className="actu-hero-inner">
            <div className="actu-hero-label">Actualités</div>
            <h1>
              Toute l'actualité
              <br />
              de l'<span>OCPV</span>
            </h1>
            <p className="actu-hero-sub">
              Suivez nos dernières publications, rapports de marché, décrets
              réglementaires et événements.
            </p>
          </div>
        </section>

        {/* ── Toolbar ── */}
        <div className="actu-toolbar">
          <div className="actu-toolbar-inner">
            {/* Recherche */}
            <div className="actu-search">
              <svg
                width="14"
                height="14"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
              <input
                type="text"
                placeholder="Rechercher une actualité…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            {/* Filtres catégories */}
            <div className="actu-cats">
              {categories.map((cat) => {
                const count =
                  cat === "Toutes"
                    ? actualites.length
                    : actualites.filter((a) => a.categorie === cat).length;
                return (
                  <button
                    key={cat}
                    className={`cat-btn${activeCat === cat ? " active" : ""}`}
                    onClick={() => setActiveCat(cat)}
                  >
                    {cat}
                    {cat !== "Toutes" && count > 0 && (
                      <span className="cat-count">{count}</span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── Contenu ── */}
        <main className="actu-main">
          {filtered.length === 0 ? (
            <div className="actu-empty">
              <svg
                width="48"
                height="48"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
              <p>Aucun résultat pour votre recherche</p>
            </div>
          ) : (
            <>
              {/* Article à la une */}
              {featured && (
                <>
                  <div className="actu-section-title">À la une</div>
                  <div className="actu-featured">
                    <div className="actu-featured-img">
                      <div className="featured-icon-wrap">
                        <div className="featured-big-icon">
                          {catIcon[featured.categorie] || "📰"}
                        </div>
                        <span className="featured-une-label">À la une</span>
                      </div>
                    </div>
                    <div className="actu-featured-body">
                      <div>
                        <span className="badge">
                          {catIcon[featured.categorie]} {featured.categorie}
                        </span>
                        <h2>{featured.titre}</h2>
                        <p>{featured.extrait}</p>
                      </div>
                      <div className="actu-featured-footer">
                        <span className="actu-date">
                          <svg
                            width="12"
                            height="12"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                          >
                            <rect
                              x="3"
                              y="4"
                              width="18"
                              height="18"
                              rx="2"
                              ry="2"
                            />
                            <line x1="16" y1="2" x2="16" y2="6" />
                            <line x1="8" y1="2" x2="8" y2="6" />
                            <line x1="3" y1="10" x2="21" y2="10" />
                          </svg>
                          {featured.date}
                        </span>
                        <Link
                          href={`/actualites/${featured.id}`}
                          className="actu-read-btn"
                        >
                          Lire l'article
                          <svg
                            width="14"
                            height="14"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* Grille des autres articles */}
              {rest.length > 0 && (
                <>
                  <div className="actu-section-title">
                    Dernières actualités
                    <span
                      style={{
                        fontFamily: "'Barlow', sans-serif",
                        fontSize: 12,
                        fontWeight: 500,
                        textTransform: "none",
                        letterSpacing: 0,
                        color: "#9ca3af",
                      }}
                    >
                      {rest.length} article{rest.length > 1 ? "s" : ""}
                    </span>
                  </div>
                  <div className="actu-grid">
                    {rest.map((actu, i) => (
                      <Link
                        key={actu.id}
                        href={`/actualites/${actu.id}`}
                        className="actu-card"
                        style={{ animationDelay: `${i * 60}ms` }}
                      >
                        <div className="actu-card-img">
                          <span className="card-emoji">
                            {catIcon[actu.categorie] || "📰"}
                          </span>
                        </div>
                        <div className="actu-card-body">
                          <span className="actu-card-badge">
                            {actu.categorie}
                          </span>
                          <h3>{actu.titre}</h3>
                          <p>{actu.extrait}</p>
                          <div className="actu-card-footer">
                            <span className="actu-card-date">
                              <svg
                                width="11"
                                height="11"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                              >
                                <rect
                                  x="3"
                                  y="4"
                                  width="18"
                                  height="18"
                                  rx="2"
                                  ry="2"
                                />
                                <line x1="16" y1="2" x2="16" y2="6" />
                                <line x1="8" y1="2" x2="8" y2="6" />
                                <line x1="3" y1="10" x2="21" y2="10" />
                              </svg>
                              {actu.date}
                            </span>
                            <span className="actu-card-lire">
                              Lire
                              <svg
                                width="12"
                                height="12"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                viewBox="0 0 24 24"
                              >
                                <path d="M5 12h14M12 5l7 7-7 7" />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </>
              )}

              {/* Pagination */}
              <div className="actu-pagination">
                <button className="pg-btn">
                  <svg
                    width="14"
                    height="14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                {[1, 2, 3].map((n) => (
                  <button
                    key={n}
                    className={`pg-btn${n === 1 ? " active" : ""}`}
                  >
                    {n}
                  </button>
                ))}
                <button className="pg-btn">
                  <svg
                    width="14"
                    height="14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>
            </>
          )}
        </main>
      </div>
    </>
  );
}

"use client";
import { useState } from "react";
import Link from "next/link";

const missions = [
  "D'assurer la coordination, le contrôle et le suivi-évaluation de la mise en œuvre des politiques de commercialisation des produits vivriers ;",
  "De proposer toutes actions concrètes tendant à assurer une meilleure commercialisation de ces produits ;",
  "De contribuer à l'organisation des marchés des produits vivriers, notamment les marchés de gros et de détail, en vue d'une meilleure performance du mécanisme et des infrastructures de ces marchés ;",
  "De participer à la définition et à l'application de toute politique visant à l'amélioration de l'approvisionnement et de la distribution des produits vivriers en Côte d'Ivoire, et de coordonner les appuis de l'État en faveur des commerçants et des distributeurs de produits vivriers ;",
  "D'assurer la promotion et l'organisation d'infrastructures et de logistiques adaptées à la mise en marché des produits vivriers, notamment les marchés de gros et de détail, les véhicules de transport et les systèmes de conditionnement ;",
  "D'apporter son assistance aux commerçants des produits vivriers et, d'une manière générale, de favoriser l'expansion du commerce de ces produits en Côte d'Ivoire ;",
  "De représenter l'État dans les organismes sous régionaux et internationaux en matière de commerce des produits vivriers.",
];

const HEX_LIGHT = `url("data:image/svg+xml,%3Csvg width='60' height='52' viewBox='0 0 60 52' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 2L58 17.5V34.5L30 50L2 34.5V17.5L30 2Z' stroke='%231a5c2a' stroke-opacity='0.05' stroke-width='1.5'/%3E%3C/svg%3E")`;

export default function AboutIntro() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <>
      <style>{`
        /* ── Modal vidéo ── */
        .video-modal-overlay {
          position: fixed; inset: 0; z-index: 9999;
          background: rgba(0,0,0,0.85);
          display: flex; align-items: center; justify-content: center;
          padding: 24px;
          animation: fadeIn 0.25s ease;
        }
        @keyframes fadeIn { from { opacity:0 } to { opacity:1 } }

        .video-modal-box {
          position: relative;
          width: 100%; max-width: 900px;
          background: #000;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 24px 80px rgba(0,0,0,0.6);
          animation: scaleIn 0.25s ease;
        }
        @keyframes scaleIn { from { transform:scale(0.93); opacity:0 } to { transform:scale(1); opacity:1 } }

        .video-modal-close {
          position: absolute; top: 12px; right: 12px; z-index: 10;
          width: 38px; height: 38px; border-radius: 6px;
          background: #f97316; border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: background 0.2s;
        }
        .video-modal-close:hover { background: #ea6c0a; }

        .video-modal-minimize {
          position: absolute; top: 12px; right: 58px; z-index: 10;
          width: 38px; height: 38px; border-radius: 6px;
          background: rgba(255,255,255,0.15); border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: background 0.2s;
        }
        .video-modal-minimize:hover { background: rgba(255,255,255,0.25); }

        /* Miniature flottante */
        .video-pip {
          position: fixed; bottom: 90px; right: 28px; z-index: 9998;
          width: 280px;
          background: #000;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 8px 32px rgba(0,0,0,0.5);
          border: 2px solid #f97316;
          animation: slideUp 0.3s ease;
        }
        @keyframes slideUp { from { transform:translateY(20px); opacity:0 } to { transform:translateY(0); opacity:1 } }
        .video-pip-bar {
          background: #1a1a1a;
          padding: 6px 10px;
          display: flex; align-items: center; justify-content: space-between;
        }
        .video-pip-bar span {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px; font-weight: 700; text-transform: uppercase;
          color: rgba(255,255,255,0.6); letter-spacing: 0.5px;
        }
        .pip-btn {
          background: none; border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          padding: 3px; color: rgba(255,255,255,0.6);
          transition: color 0.2s;
        }
        .pip-btn:hover { color: #f97316; }

        /* Mission item */
        .mission-item {
          display: flex; align-items: flex-start; gap: 12px;
          padding: 10px 0;
          border-bottom: 1px solid rgba(26,92,42,0.08);
          font-family: 'Barlow', sans-serif;
          font-size: 13px; color: #374151; line-height: 1.65;
        }
        .mission-item:last-child { border-bottom: none; }

        .play-btn {
          position: absolute; top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 60px; height: 60px; border-radius: 50%;
          background: #f97316; border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 0 0 14px rgba(249,115,22,0.2);
          transition: background 0.2s, transform 0.2s;
        }
        .play-btn:hover { background: #ea6c0a; transform: translate(-50%, -50%) scale(1.08); }

        .dg-name-band {
          background: #1a5c2a; color: #fff;
          text-align: center; padding: 14px 16px;
          border-radius: 0 0 8px 8px;
        }

        @media (max-width: 900px) {
          .about-dg-grid { grid-template-columns: 1fr !important; }
          .about-missions-grid { grid-template-columns: 1fr !important; }
          .video-pip { width: 220px; bottom: 80px; right: 16px; }
        }
      `}</style>

      {/* ══════════ MODAL VIDÉO ══════════ */}
      {videoOpen === "full" && (
        <div
          className="video-modal-overlay"
          onClick={(e) => e.target === e.currentTarget && setVideoOpen(false)}
        >
          <div className="video-modal-box">
            {/* Bouton minimiser */}
            <button
              className="video-modal-minimize"
              onClick={() => setVideoOpen("pip")}
              title="Réduire"
            >
              <svg
                width="16"
                height="16"
                fill="none"
                stroke="#fff"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path d="M8 3H5a2 2 0 00-2 2v3M21 8V5a2 2 0 00-2-2h-3M3 16v3a2 2 0 002 2h3M16 21h3a2 2 0 002-2v-3" />
              </svg>
            </button>
            {/* Bouton fermer */}
            <button
              className="video-modal-close"
              onClick={() => setVideoOpen(false)}
              title="Fermer"
            >
              <svg
                width="16"
                height="16"
                fill="none"
                stroke="#fff"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            {/* iFrame YouTube */}
            <div
              style={{
                position: "relative",
                paddingBottom: "56.25%",
                height: 0,
              }}
            >
              <iframe
                src="https://www.youtube.com/embed/Yqae_kPdGGk?autoplay=1&rel=0"
                title="Présentation OCPV"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  border: "none",
                }}
              />
            </div>
          </div>
        </div>
      )}

      {/* ══════════ PIP (miniature flottante) ══════════ */}
      {videoOpen === "pip" && (
        <div className="video-pip">
          <div className="video-pip-bar">
            <span>Présentation OCPV</span>
            <div style={{ display: "flex", gap: 4 }}>
              <button
                className="pip-btn"
                onClick={() => setVideoOpen("full")}
                title="Agrandir"
              >
                <svg
                  width="14"
                  height="14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                </svg>
              </button>
              <button
                className="pip-btn"
                onClick={() => setVideoOpen(false)}
                title="Fermer"
              >
                <svg
                  width="14"
                  height="14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div
            style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}
          >
            <iframe
              src="https://www.youtube.com/embed/Yqae_kPdGGk?autoplay=1&rel=0"
              title="Présentation OCPV"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                border: "none",
              }}
            />
          </div>
        </div>
      )}

      {/* ══════════ SECTION ══════════ */}
      <section
        id="about"
        style={{
          background: "#fff",
          backgroundImage: HEX_LIGHT,
          backgroundSize: "60px 52px",
          padding: "90px 24px",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          {/* Label + titre section */}
          <div style={{ marginBottom: 56, textAlign: "center" }}>
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
              Présentation Officielle
            </span>
            <h2
              style={{
                fontFamily: "'Barlow Condensed',sans-serif",
                fontWeight: 900,
                fontSize: "clamp(1.8rem,4vw,2.8rem)",
                textTransform: "uppercase",
                color: "#1a1a1a",
                marginTop: 10,
                lineHeight: 1.1,
              }}
            >
              Office d'Aide À La Commercialisation
              <br />
              Des Produits Vivriers
            </h2>
          </div>

          {/* ── BLOC 1 : Photo DG + texte présentation ── */}
          <div
            className="about-dg-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 56,
              alignItems: "start",
              marginBottom: 64,
            }}
          >
            {/* Photo DG */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  borderRadius: "8px 8px 0 0",
                  overflow: "hidden",
                  width: "100%",
                  maxWidth: 360,
                  boxShadow: "0 12px 40px rgba(0,0,0,0.12)",
                  border: "4px solid #f0f0f0",
                  borderBottom: "none",
                }}
              >
                <img
                  src="/assets/img/dg_ocpv.jpg"
                  alt="M. GNENYE Adou Bernard – DG OCPV"
                  style={{
                    width: "100%",
                    display: "block",
                    objectFit: "cover",
                    objectPosition: "top",
                  }}
                />
              </div>
              {/* Bandeau nom */}
              <div
                className="dg-name-band"
                style={{ width: "100%", maxWidth: 360 }}
              >
                <p
                  style={{
                    fontFamily: "'Barlow Condensed',sans-serif",
                    fontWeight: 900,
                    fontSize: 18,
                    textTransform: "uppercase",
                    margin: 0,
                    letterSpacing: 0.5,
                  }}
                >
                  M. GNENYE Adou Bernard
                </p>
                <p
                  style={{
                    fontFamily: "'Barlow',sans-serif",
                    fontSize: 12,
                    color: "rgba(255,255,255,0.7)",
                    margin: "4px 0 0",
                  }}
                >
                  Directeur Général de l'OCPV
                </p>
              </div>
            </div>

            {/* Texte officiel */}
            <div>
              {/* Drapeau déco */}
              <div
                style={{
                  width: 48,
                  height: 4,
                  background: "#f97316",
                  borderRadius: 2,
                  marginBottom: 20,
                }}
              />

              <p
                style={{
                  fontFamily: "'Barlow',sans-serif",
                  fontSize: 14,
                  color: "#374151",
                  lineHeight: 1.85,
                  marginBottom: 18,
                }}
              >
                Créé par le décret 84-934 du 27 juillet 1984, réorganisé par le
                décret n°2023-771 du 23 septembre 2023, l'Office d'aide à la
                Commercialisation des produits vivriers (OCPV) est un
                établissement public (EPN) à caractère administratif, placé sous
                tutelle administrative et technique du Ministère chargé du
                Commerce et sous la tutelle économique et financière du
                Ministère chargé du Budget.
              </p>
              <p
                style={{
                  fontFamily: "'Barlow',sans-serif",
                  fontSize: 14,
                  color: "#374151",
                  lineHeight: 1.85,
                  marginBottom: 18,
                }}
              >
                Elle est dirigée par un Directeur Général nommé par décret pris
                en Conseil des Ministres, sur proposition du Ministre chargé du
                Commerce. Il a rang de Directeur Général d'Administration
                Centrale.
              </p>
              <p
                style={{
                  fontFamily: "'Barlow',sans-serif",
                  fontSize: 14,
                  color: "#374151",
                  lineHeight: 1.85,
                  marginBottom: 28,
                }}
              >
                <strong
                  style={{
                    color: "#1a5c2a",
                    fontFamily: "'Barlow Condensed',sans-serif",
                    fontSize: 15,
                    textTransform: "uppercase",
                    letterSpacing: 0.3,
                  }}
                >
                  L'OCPV a pour mission
                </strong>{" "}
                d'assurer la réglementation et la modernisation des systèmes de
                commercialisation des produits vivriers.
              </p>

              {/* Boutons */}
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                <Link
                  href="#"
                  style={{
                    fontFamily: "'Barlow Condensed',sans-serif",
                    fontWeight: 800,
                    fontSize: 14,
                    textTransform: "uppercase",
                    letterSpacing: 0.5,
                    background: "#1a5c2a",
                    color: "#fff",
                    padding: "12px 24px",
                    borderRadius: 6,
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    boxShadow: "0 4px 16px rgba(26,92,42,0.3)",
                  }}
                >
                  <svg
                    width="14"
                    height="14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                  Voir le Décret
                </Link>
                <Link
                  href="#"
                  style={{
                    fontFamily: "'Barlow Condensed',sans-serif",
                    fontWeight: 800,
                    fontSize: 14,
                    textTransform: "uppercase",
                    letterSpacing: 0.5,
                    border: "2px solid #1a5c2a",
                    color: "#1a5c2a",
                    padding: "12px 24px",
                    borderRadius: 6,
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <svg
                    width="14"
                    height="14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M3 9h18M9 21V9" />
                  </svg>
                  Organigramme
                </Link>
              </div>
            </div>
          </div>

          {/* ── BLOC 2 : Missions + Vidéo ── */}
          <div
            style={{
              background: "#f8f9fa",
              borderRadius: 12,
              padding: "48px",
              border: "1px solid rgba(26,92,42,0.07)",
            }}
          >
            <div
              className="about-missions-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 56,
                alignItems: "center",
              }}
            >
              {/* Missions */}
              <div>
                <span
                  style={{
                    fontFamily: "'Barlow Condensed',sans-serif",
                    fontWeight: 700,
                    fontSize: 11,
                    textTransform: "uppercase",
                    letterSpacing: 2,
                    color: "#f97316",
                    display: "block",
                    marginBottom: 8,
                  }}
                >
                  À ce titre, l'OCPV est chargé :
                </span>
                <div>
                  {missions.map((m, i) => (
                    <div key={i} className="mission-item">
                      <span style={{ flexShrink: 0, marginTop: 2 }}>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <circle
                            cx="10"
                            cy="10"
                            r="10"
                            fill="rgba(26,92,42,0.08)"
                          />
                          <circle
                            cx="10"
                            cy="10"
                            r="9"
                            fill="none"
                            stroke="#1a5c2a"
                            strokeWidth="1"
                          />
                          <polyline
                            points="6,10 9,13 14,7"
                            stroke="#f97316"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      {m}
                    </div>
                  ))}
                </div>
              </div>

              {/* Vidéo thumbnail cliquable */}
              <div>
                <span
                  style={{
                    fontFamily: "'Barlow Condensed',sans-serif",
                    fontWeight: 700,
                    fontSize: 11,
                    textTransform: "uppercase",
                    letterSpacing: 2,
                    color: "#f97316",
                    display: "block",
                    marginBottom: 8,
                  }}
                >
                  Vidéo de présentation
                </span>
                <div
                  onClick={() => setVideoOpen("full")}
                  style={{
                    position: "relative",
                    borderRadius: 8,
                    overflow: "hidden",
                    cursor: "pointer",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
                  }}
                >
                  {/* Thumbnail YouTube */}
                  <img
                    src="https://img.youtube.com/vi/Yqae_kPdGGk/maxresdefault.jpg"
                    alt="Vidéo de présentation OCPV"
                    style={{
                      width: "100%",
                      display: "block",
                      aspectRatio: "16/9",
                      objectFit: "cover",
                    }}
                    onError={(e) => {
                      e.target.src =
                        "https://img.youtube.com/vi/Yqae_kPdGGk/hqdefault.jpg";
                    }}
                  />
                  {/* Overlay sombre */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "rgba(13,53,24,0.45)",
                      transition: "background 0.2s",
                    }}
                  />
                  {/* Bouton play */}
                  <button className="play-btn">
                    <svg width="22" height="22" fill="#fff" viewBox="0 0 24 24">
                      <polygon points="5,3 19,12 5,21" />
                    </svg>
                  </button>
                  {/* Label bas */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background:
                        "linear-gradient(to top, rgba(13,53,24,0.9), transparent)",
                      padding: "28px 18px 16px",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "'Barlow Condensed',sans-serif",
                        fontWeight: 800,
                        fontSize: 15,
                        textTransform: "uppercase",
                        color: "#fff",
                        margin: 0,
                        letterSpacing: 0.3,
                      }}
                    >
                      Présentation Officielle de l'OCPV
                    </p>
                    <p
                      style={{
                        fontFamily: "'Barlow',sans-serif",
                        fontSize: 12,
                        color: "rgba(255,255,255,0.6)",
                        margin: "4px 0 0",
                      }}
                    >
                      Cliquez pour lancer la vidéo →
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

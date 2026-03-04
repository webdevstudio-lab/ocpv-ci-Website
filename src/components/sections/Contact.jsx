"use client";
import { useState } from "react";

const services = [
  { label: "Suivi des Prix Vivriers", icon: "📊" },
  { label: "Organisation des Marchés", icon: "🏪" },
  { label: "Assistance Commerciale", icon: "🤝" },
];

const tabs = ["Demande Info", "Partenariat", "Signalement"];

const inputStyle = {
  width: "100%",
  border: "1.5px solid #e5e7eb",
  borderRadius: 6,
  padding: "12px 16px",
  fontSize: 13,
  fontFamily: "'Barlow', sans-serif",
  fontWeight: 500,
  color: "#1a1a1a",
  background: "#fff",
  boxSizing: "border-box",
  outline: "none",
  transition: "border-color 0.2s",
};

const selectStyle = {
  ...inputStyle,
  appearance: "none",
  backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' fill='none' stroke='%236b7280' stroke-width='2' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right 14px center",
  paddingRight: 36,
  cursor: "pointer",
};

export default function Contact() {
  const [activeTab, setActiveTab] = useState(0);
  const [freq, setFreq] = useState("unique");
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    type: "",
    region: "",
    prenom: "",
    nom: "",
    email: "",
    telephone: "",
    message: "",
  });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <style>{`
        .contact-section {
          background: #0d3518;
          padding: 90px 24px;
          position: relative;
          overflow: hidden;
        }
        /* Motif hexagone déco fond */
        .contact-section::before {
          content: '';
          position: absolute;
          top: -60px; right: -60px;
          width: 420px; height: 420px;
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='52' viewBox='0 0 60 52' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 2L58 17.5V34.5L30 50L2 34.5V17.5L30 2Z' stroke='rgba(255,255,255,0.04)' stroke-width='1.5'/%3E%3C/svg%3E");
          background-size: 60px 52px;
          opacity: 1;
          pointer-events: none;
        }

        .contact-label {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 700; font-size: 12px;
          text-transform: uppercase; letter-spacing: 2px;
          color: #f97316; display: block; margin-bottom: 6px;
        }
        .contact-field-label {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 700; font-size: 12px;
          text-transform: uppercase; letter-spacing: 1px;
          color: #374151; display: block; margin-bottom: 6px;
        }
        .contact-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 900; font-size: clamp(1.6rem, 3vw, 2.2rem);
          text-transform: uppercase; color: #1a5c2a;
          margin: 0 0 6px; line-height: 1.1;
        }
        .contact-title-white {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 900; font-size: clamp(1.4rem, 2.5vw, 1.9rem);
          text-transform: uppercase; color: #fff;
          margin: 0 0 12px; line-height: 1.1;
        }
        .tab-btn {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 700; font-size: 13px;
          text-transform: uppercase; letter-spacing: 0.5px;
          background: none; border: none; cursor: pointer;
          padding: 10px 18px;
          color: rgba(255,255,255,0.5);
          border-bottom: 2px solid transparent;
          transition: color 0.2s, border-color 0.2s;
        }
        .tab-btn.active { color: #fff; border-bottom-color: #f97316; }
        .tab-btn:hover { color: #fff; }

        .freq-label {
          font-family: 'Barlow', sans-serif;
          font-size: 13px; font-weight: 500;
          color: #374151; display: flex; align-items: center; gap: 7px;
          cursor: pointer;
        }

        .submit-btn {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 800; font-size: 16px;
          text-transform: uppercase; letter-spacing: 0.8px;
          background: #1a5c2a; color: #fff;
          border: none; cursor: pointer;
          width: 100%; padding: 16px;
          border-radius: 6px;
          display: flex; align-items: center; justify-content: center; gap: 12px;
          transition: background 0.2s;
          margin-top: 8px;
        }
        .submit-btn:hover { background: #0d3518; }

        .service-item {
          display: flex; align-items: center; gap: 14px;
          padding: 16px 0;
          border-bottom: 1px solid rgba(255,255,255,0.07);
        }
        .service-item:last-child { border-bottom: none; }

        .service-name {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 700; font-size: 16px;
          text-transform: uppercase; color: #fff; letter-spacing: 0.3px;
        }

        .info-card {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 10px;
          padding: 16px 18px;
          display: flex; align-items: flex-start; gap: 14px;
        }
        .info-card-label {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 700; font-size: 11px;
          text-transform: uppercase; letter-spacing: 1.5px;
          color: #f97316; margin: 0 0 3px;
        }
        .info-card-value {
          font-family: 'Barlow', sans-serif;
          font-size: 13px; font-weight: 500;
          color: rgba(255,255,255,0.75); margin: 0; line-height: 1.5;
        }

        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <section className="contact-section" id="contact">
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div
            className="contact-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 48,
              alignItems: "start",
            }}
          >
            {/* ══ COLONNE GAUCHE : Formulaire ══ */}
            <div>
              {/* Card header orange — comme le template */}
              <div
                style={{
                  background: "#f97316",
                  borderRadius: "10px 10px 0 0",
                  padding: "22px 28px",
                  display: "flex",
                  alignItems: "center",
                  gap: 20,
                }}
              >
                <div
                  style={{
                    flexShrink: 0,
                    width: 56,
                    height: 56,
                    borderRadius: 8,
                    background: "rgba(255,255,255,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    width="32"
                    height="32"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "'Barlow Condensed',sans-serif",
                      fontWeight: 900,
                      fontSize: 22,
                      textTransform: "uppercase",
                      color: "#fff",
                      margin: "0 0 4px",
                      letterSpacing: 0.5,
                    }}
                  >
                    Nous Contacter
                  </p>
                  <p
                    style={{
                      fontFamily: "'Barlow',sans-serif",
                      fontSize: 13,
                      color: "rgba(255,255,255,0.85)",
                      margin: 0,
                      lineHeight: 1.5,
                    }}
                  >
                    Complétez le formulaire ci-dessous ou appelez-nous
                    directement, nos équipes vous répondront rapidement.
                  </p>
                </div>
              </div>

              {/* Formulaire blanc */}
              <div
                style={{
                  background: "#fff",
                  borderRadius: "0 0 10px 10px",
                  padding: "28px 28px 32px",
                  boxShadow: "0 16px 48px rgba(0,0,0,0.25)",
                }}
              >
                {/* Tabs */}
                <div
                  style={{
                    display: "flex",
                    borderBottom: "1px solid #e5e7eb",
                    marginBottom: 24,
                    gap: 0,
                  }}
                >
                  {tabs.map((t, i) => (
                    <button
                      key={t}
                      onClick={() => setActiveTab(i)}
                      className={`tab-btn${activeTab === i ? " active" : ""}`}
                      style={{
                        color: activeTab === i ? "#1a5c2a" : "#9ca3af",
                        borderBottomColor:
                          activeTab === i ? "#f97316" : "transparent",
                      }}
                    >
                      {t}
                    </button>
                  ))}
                </div>

                {sent ? (
                  <div style={{ textAlign: "center", padding: "40px 0" }}>
                    <div
                      style={{
                        width: 64,
                        height: 64,
                        borderRadius: "50%",
                        background: "#1a5c2a",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto 16px",
                      }}
                    >
                      <svg
                        width="28"
                        height="28"
                        fill="none"
                        stroke="#fff"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <p
                      style={{
                        fontFamily: "'Barlow Condensed',sans-serif",
                        fontWeight: 900,
                        fontSize: 22,
                        textTransform: "uppercase",
                        color: "#1a5c2a",
                        margin: "0 0 8px",
                      }}
                    >
                      Message Envoyé !
                    </p>
                    <p
                      style={{
                        fontFamily: "'Barlow',sans-serif",
                        fontSize: 14,
                        color: "#6b7280",
                      }}
                    >
                      Notre équipe vous répondra dans les plus brefs délais.
                    </p>
                    <button
                      onClick={() => setSent(false)}
                      style={{
                        marginTop: 20,
                        background: "none",
                        border: "none",
                        color: "#f97316",
                        fontFamily: "'Barlow Condensed',sans-serif",
                        fontWeight: 700,
                        fontSize: 14,
                        textTransform: "uppercase",
                        cursor: "pointer",
                        letterSpacing: 0.5,
                      }}
                    >
                      ← Nouveau message
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={onSubmit}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 18,
                    }}
                  >
                    {/* Row 1 */}
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: 16,
                      }}
                    >
                      <div>
                        <label className="contact-field-label">
                          Type de demande
                        </label>
                        <select
                          name="type"
                          value={form.type}
                          onChange={onChange}
                          style={selectStyle}
                        >
                          <option value="">Sélectionner</option>
                          <option>Information sur les prix</option>
                          <option>Partenariat institutionnel</option>
                          <option>Assistance commerciale</option>
                          <option>Infrastructure marché</option>
                        </select>
                      </div>
                      <div>
                        <label className="contact-field-label">Région</label>
                        <select
                          name="region"
                          value={form.region}
                          onChange={onChange}
                          style={selectStyle}
                        >
                          <option value="">Sélectionner</option>
                          <option>Abidjan</option>
                          <option>Bouaké</option>
                          <option>Yamoussoukro</option>
                          <option>San-Pédro</option>
                          <option>Korhogo</option>
                          <option>Autre</option>
                        </select>
                      </div>
                    </div>

                    {/* Fréquence contact */}
                    <div>
                      <label className="contact-field-label">
                        Préférence de contact
                      </label>
                      <div
                        style={{
                          display: "flex",
                          gap: 24,
                          flexWrap: "wrap",
                          marginTop: 4,
                        }}
                      >
                        {[
                          ["unique", "Contact unique"],
                          ["suivi", "Suivi régulier"],
                          ["urgent", "Urgent"],
                        ].map(([val, label]) => (
                          <label key={val} className="freq-label">
                            <div
                              onClick={() => setFreq(val)}
                              style={{
                                width: 18,
                                height: 18,
                                borderRadius: 4,
                                border: `2px solid ${freq === val ? "#1a5c2a" : "#d1d5db"}`,
                                background: freq === val ? "#1a5c2a" : "#fff",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                cursor: "pointer",
                                flexShrink: 0,
                                transition: "all 0.15s",
                              }}
                            >
                              {freq === val && (
                                <svg
                                  width="10"
                                  height="10"
                                  fill="none"
                                  stroke="#fff"
                                  strokeWidth="3"
                                  viewBox="0 0 24 24"
                                >
                                  <polyline points="20 6 9 17 4 12" />
                                </svg>
                              )}
                            </div>
                            {label}
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Row 2 */}
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: 16,
                      }}
                    >
                      <div>
                        <label className="contact-field-label">Prénom</label>
                        <input
                          name="prenom"
                          value={form.prenom}
                          onChange={onChange}
                          placeholder="Votre prénom"
                          style={inputStyle}
                        />
                      </div>
                      <div>
                        <label className="contact-field-label">Nom</label>
                        <input
                          name="nom"
                          value={form.nom}
                          onChange={onChange}
                          placeholder="Votre nom"
                          style={inputStyle}
                        />
                      </div>
                    </div>

                    {/* Row 3 */}
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: 16,
                      }}
                    >
                      <div>
                        <label className="contact-field-label">
                          Adresse Email
                        </label>
                        <input
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={onChange}
                          placeholder="votre@email.com"
                          style={inputStyle}
                        />
                      </div>
                      <div>
                        <label className="contact-field-label">Téléphone</label>
                        <input
                          name="telephone"
                          value={form.telephone}
                          onChange={onChange}
                          placeholder="+225 00 00 00 00 00"
                          style={inputStyle}
                        />
                      </div>
                    </div>

                    {/* Submit */}
                    <button type="submit" className="submit-btn">
                      Envoyer la Demande
                      <div
                        style={{
                          width: 30,
                          height: 30,
                          borderRadius: "50%",
                          background: "rgba(255,255,255,0.2)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <svg
                          width="14"
                          height="14"
                          fill="none"
                          stroke="#fff"
                          strokeWidth="2.5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 12h14M13 6l6 6-6 6" />
                        </svg>
                      </div>
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* ══ COLONNE DROITE : Infos + Services ══ */}
            <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
              {/* Header */}
              <div>
                <span className="contact-label">Nos coordonnées</span>
                <h2 className="contact-title-white">Restons En Contact</h2>
                <p
                  style={{
                    fontFamily: "'Barlow',sans-serif",
                    fontSize: 14,
                    color: "rgba(255,255,255,0.6)",
                    lineHeight: 1.7,
                    margin: 0,
                    maxWidth: 420,
                  }}
                >
                  L'OCPV est présent dans toute la Côte d'Ivoire via ses 14
                  antennes régionales. Contactez-nous pour toute question
                  relative au commerce vivrier.
                </p>
              </div>

              {/* Infos cards */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 12,
                }}
              >
                {[
                  {
                    icon: (
                      <svg
                        width="20"
                        height="20"
                        fill="none"
                        stroke="#f97316"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                        <circle cx="12" cy="9" r="2.5" />
                      </svg>
                    ),
                    label: "Adresse",
                    value: "ABOBO PK 18, Route d'Anyama, Carrefour AGRIPAC",
                  },
                  {
                    icon: (
                      <svg
                        width="20"
                        height="20"
                        fill="none"
                        stroke="#f97316"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.08 1.18 2 2 0 012.06 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.27 7.68a16 16 0 006.06 6.06l1.05-1.05a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                      </svg>
                    ),
                    label: "Téléphone",
                    value: "+225 27 24 39 18 74\n27 24 48 00 27",
                  },
                  {
                    icon: (
                      <svg
                        width="20"
                        height="20"
                        fill="none"
                        stroke="#f97316"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    ),
                    label: "Email",
                    value: "info@ocpv-ci.com\ndirection.ocpv@gmail.com",
                  },
                  {
                    icon: (
                      <svg
                        width="20"
                        height="20"
                        fill="none"
                        stroke="#f97316"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <rect x="2" y="7" width="20" height="14" rx="2" />
                        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
                      </svg>
                    ),
                    label: "Boîte Postale",
                    value: "BP V 204 Abidjan\nCôte d'Ivoire",
                  },
                ].map((item) => (
                  <div key={item.label} className="info-card">
                    <div
                      style={{
                        flexShrink: 0,
                        width: 38,
                        height: 38,
                        borderRadius: 8,
                        background: "rgba(249,115,22,0.12)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <p className="info-card-label">{item.label}</p>
                      <p
                        className="info-card-value"
                        style={{ whiteSpace: "pre-line" }}
                      >
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Image illustration + services — style template */}
              <div
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 12,
                  overflow: "hidden",
                }}
              >
                {/* Image avec overlay */}
                <div
                  style={{
                    position: "relative",
                    height: 160,
                    overflow: "hidden",
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=800&q=75"
                    alt="Marchés vivriers"
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
                      background: "rgba(13,53,24,0.65)",
                    }}
                  />
                  {/* Tabs style template */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      display: "flex",
                    }}
                  >
                    {["Marchés", "Prix", "Plateformes"].map((t, i) => (
                      <div
                        key={t}
                        style={{
                          flex: 1,
                          padding: "10px 0",
                          textAlign: "center",
                          background: i === 1 ? "#1a5c2a" : "rgba(0,0,0,0.4)",
                          borderRight:
                            i < 2 ? "1px solid rgba(255,255,255,0.1)" : "none",
                          cursor: "pointer",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "'Barlow Condensed',sans-serif",
                            fontWeight: 700,
                            fontSize: 13,
                            textTransform: "uppercase",
                            color: "#fff",
                            letterSpacing: 0.5,
                          }}
                        >
                          {t}
                        </span>
                        {i === 1 && (
                          <div
                            style={{
                              height: 2,
                              background: "#f97316",
                              margin: "3px auto 0",
                              width: 32,
                            }}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Services list — style template */}
                <div style={{ padding: "8px 20px 4px" }}>
                  {services.map((s) => (
                    <div key={s.label} className="service-item">
                      <div
                        style={{
                          width: 28,
                          height: 28,
                          borderRadius: "50%",
                          background: "#f97316",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <svg
                          width="12"
                          height="12"
                          fill="none"
                          stroke="#fff"
                          strokeWidth="2.5"
                          viewBox="0 0 24 24"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <span className="service-name">{s.label}</span>
                    </div>
                  ))}
                </div>

                {/* Bouton bas */}
                <div style={{ padding: "0 20px 20px" }}>
                  <a
                    href="/#platforms"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      background: "#fff",
                      borderRadius: 8,
                      padding: "14px 18px",
                      textDecoration: "none",
                      marginTop: 8,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Barlow Condensed',sans-serif",
                        fontWeight: 800,
                        fontSize: 15,
                        textTransform: "uppercase",
                        color: "#1a1a1a",
                        letterSpacing: 0.3,
                      }}
                    >
                      Voir nos plateformes
                    </span>
                    <div
                      style={{
                        width: 30,
                        height: 30,
                        borderRadius: "50%",
                        background: "#1a5c2a",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <svg
                        width="13"
                        height="13"
                        fill="none"
                        stroke="#fff"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

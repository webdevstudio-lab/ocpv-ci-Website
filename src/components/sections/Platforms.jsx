const platforms = [
  {
    img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=700&q=80",
    name: "E-GRENIER",
    badge: "Web",
    badgeColor: "#1a5c2a",
    desc: "Plateforme de mise en relation d'affaires entre acheteurs et vendeurs de produits vivriers en Côte d'Ivoire.",
    icon: (
      <svg
        width="28"
        height="28"
        fill="none"
        stroke="#fff"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 01-8 0" />
      </svg>
    ),
  },
  {
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=700&q=80",
    name: "INFOS PRIX",
    badge: "Android",
    badgeColor: "#f97316",
    desc: "Consultez les meilleurs prix du marché vivrier en temps réel directement sur votre smartphone Android.",
    icon: (
      <svg
        width="28"
        height="28"
        fill="none"
        stroke="#fff"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
  },
  {
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&q=80",
    name: "INFOS PRIX WEB",
    badge: "Web",
    badgeColor: "#1a5c2a",
    desc: "Version web pour suivre l'évolution des prix vivriers depuis n'importe quel navigateur, sans installation.",
    icon: (
      <svg
        width="28"
        height="28"
        fill="none"
        stroke="#fff"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
      </svg>
    ),
  },
];

export default function Platforms() {
  return (
    <section
      id="platforms"
      style={{ background: "#fff", padding: "90px 24px" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <span
            style={{
              color: "#f97316",
              fontWeight: 700,
              fontSize: 12,
              textTransform: "uppercase",
              letterSpacing: 3,
            }}
          >
            Innovation numérique
          </span>
          <h2
            style={{
              color: "#1a5c2a",
              fontSize: "clamp(1.6rem,3vw,2.4rem)",
              fontWeight: 900,
              marginTop: 10,
              marginBottom: 12,
            }}
          >
            Nos Plateformes Numériques
          </h2>
          <p
            style={{
              color: "#6b7280",
              fontSize: 14,
              maxWidth: 480,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Des outils digitaux modernes pour faciliter l'accès à l'information
            sur les marchés vivriers ivoiriens.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: 28,
          }}
        >
          {platforms.map((p) => (
            <div
              key={p.name}
              style={{
                borderRadius: 22,
                overflow: "hidden",
                boxShadow: "0 4px 28px rgba(0,0,0,0.09)",
                background: "#fff",
                border: "1px solid #e5e7eb",
              }}
            >
              {/* Image */}
              <div
                style={{
                  position: "relative",
                  height: 200,
                  overflow: "hidden",
                }}
              >
                <img
                  src={p.img}
                  alt={p.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.4s",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(13,53,24,0.85) 0%, rgba(13,53,24,0.1) 60%)",
                  }}
                />
                {/* Badge */}
                <span
                  style={{
                    position: "absolute",
                    top: 16,
                    right: 16,
                    background: p.badgeColor,
                    color: "#fff",
                    fontSize: 11,
                    fontWeight: 800,
                    padding: "4px 12px",
                    borderRadius: 999,
                  }}
                >
                  {p.badge}
                </span>
                {/* Icone cercle */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 16,
                    left: 16,
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.15)",
                    backdropFilter: "blur(4px)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "2px solid rgba(255,255,255,0.3)",
                  }}
                >
                  {p.icon}
                </div>
              </div>
              {/* Content */}
              <div style={{ padding: "22px 24px 28px" }}>
                <h3
                  style={{
                    color: "#1a5c2a",
                    fontSize: 18,
                    fontWeight: 900,
                    marginBottom: 10,
                  }}
                >
                  {p.name}
                </h3>
                <p
                  style={{
                    color: "#6b7280",
                    fontSize: 13,
                    lineHeight: 1.7,
                    marginBottom: 18,
                  }}
                >
                  {p.desc}
                </p>
                <button
                  style={{
                    background: "none",
                    border: `2px solid ${p.badgeColor}`,
                    cursor: "pointer",
                    color: p.badgeColor,
                    fontWeight: 800,
                    fontSize: 13,
                    padding: "9px 20px",
                    borderRadius: 999,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    transition: "all 0.2s",
                  }}
                >
                  Accéder
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
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";

const directions = [
  {
    short: "DSSID",
    title: "Direction de la Statistique et du Système d'Information",
    desc: "Collecte, traitement et diffusion des données statistiques sur les marchés vivriers.",
    href: "#",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=70",
    color: "#1a5c2a",
  },
  {
    short: "DI",
    title: "Direction des Infrastructures",
    desc: "Développement et maintenance des infrastructures marchandes à travers la Côte d'Ivoire.",
    href: "#",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=70",
    color: "#f97316",
  },
  {
    short: "DPACVPV",
    title:
      "Direction de la Professionnalisation et de l'Assistance Commerciale",
    desc: "Encadrement des acteurs de la filière et valorisation des produits vivriers locaux.",
    href: "#",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=70",
    color: "#1a5c2a",
  },
  {
    short: "DPD",
    title: "Direction de la Planification et du Développement",
    desc: "Élaboration et suivi des plans stratégiques de développement du commerce vivrier.",
    href: "#",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=70",
    color: "#f97316",
  },
  {
    short: "DAAF",
    title: "Direction des Affaires Administratives et Financières",
    desc: "Gestion des ressources humaines, financières et matérielles de l'Office.",
    href: "#",
    img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=70",
    color: "#1a5c2a",
  },
  {
    short: "SAR",
    title: "Services Rattachés et Antennes Régionales",
    desc: "14 antennes régionales assurant la présence de l'OCPV sur tout le territoire national.",
    href: "#",
    img: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&q=70",
    color: "#f97316",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      style={{ background: "#f8f9fa", padding: "90px 24px" }}
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
            Organisation
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
            Direction Générale de l'OCPV
          </h2>
          <p
            style={{
              color: "#6b7280",
              fontSize: 14,
              maxWidth: 540,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            5 directions techniques, 4 services rattachés et 14 antennes
            régionales couvrant l'ensemble du territoire ivoirien.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: 24,
          }}
        >
          {directions.map((d) => (
            <Link
              key={d.short}
              href={d.href}
              style={{ textDecoration: "none" }}
            >
              <div
                style={{
                  background: "#fff",
                  borderRadius: 20,
                  overflow: "hidden",
                  boxShadow: "0 2px 16px rgba(0,0,0,0.07)",
                  transition: "transform 0.2s, box-shadow 0.2s",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Image */}
                <div
                  style={{
                    height: 140,
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <img
                    src={d.img}
                    alt={d.short}
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
                      background: "rgba(13,53,24,0.45)",
                    }}
                  />
                  <span
                    style={{
                      position: "absolute",
                      top: 14,
                      left: 14,
                      background: d.color,
                      color: "#fff",
                      fontSize: 11,
                      fontWeight: 800,
                      padding: "4px 12px",
                      borderRadius: 999,
                    }}
                  >
                    {d.short}
                  </span>
                </div>
                {/* Content */}
                <div
                  style={{
                    padding: "20px 22px 24px",
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <h3
                    style={{
                      color: "#1a5c2a",
                      fontSize: 15,
                      fontWeight: 800,
                      marginBottom: 8,
                      lineHeight: 1.4,
                    }}
                  >
                    {d.title}
                  </h3>
                  <p
                    style={{
                      color: "#6b7280",
                      fontSize: 13,
                      lineHeight: 1.6,
                      flex: 1,
                      margin: 0,
                    }}
                  >
                    {d.desc}
                  </p>
                  <span
                    style={{
                      color: d.color,
                      fontSize: 13,
                      fontWeight: 700,
                      marginTop: 14,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    En savoir plus
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

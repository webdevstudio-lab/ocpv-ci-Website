"use client";
const partners = [
  {
    name: "LADY AGRI",
    href: "https://www.lady-agri.org/",
    logo: "/assets/img/logoPatners/ladyAgri.png",
  },
  {
    name: "PDC2V",
    href: "https://pdc2v.ci/",
    logo: "/assets/img/logoPatners/logo-pdc2v.png",
  },
  {
    name: "ANADER",
    href: "https://www.anader.ci/",
    logo: "/assets/img/logoPatners/logo_anader.png",
  },
  {
    name: "PIDUCAS",
    href: "https://www.prici.ci/piducas.html",
    logo: "/assets/img/logoPatners/LogoPrici.png",
  },
  {
    name: "Banque mondiale",
    href: "https://www.banquemondiale.org/fr/country/cotedivoire",
    logo: "/assets/img/logoPatners/banqueMondial.svg",
  },
  {
    name: "BAD",
    href: "https://www.afdb.org/fr",
    logo: "/assets/img/logoPatners/afdb-logo-fr.webp",
  },
  {
    name: "Min. du Commerce",
    href: "https://www.commerce.gouv.ci/",
    logo: "/assets/img/logoPatners/ministereDuCommerce.png",
  },
];

function LogoCard({ partner }) {
  return (
    <a
      href={partner.href}
      target="_blank"
      rel="noreferrer"
      style={{
        background: "#fff",
        borderRadius: 12,
        border: "1.5px solid #e5e7eb",
        padding: "20px 16px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        textDecoration: "none",
        gap: 10,
        transition: "border-color 0.2s, box-shadow 0.2s, transform 0.2s",
        minHeight: 100,
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "#1a5c2a";
        e.currentTarget.style.boxShadow = "0 6px 24px rgba(26,92,42,0.12)";
        e.currentTarget.style.transform = "translateY(-3px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "#e5e7eb";
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <img
        src={partner.logo}
        alt={partner.name}
        style={{
          width: "100%",
          maxWidth: 110,
          height: 52,
          objectFit: "contain",
          objectPosition: "center",
          filter: "grayscale(20%)",
          transition: "filter 0.2s",
        }}
        onError={(e) => {
          /* fallback : affiche le nom si l'image est introuvable */
          e.currentTarget.style.display = "none";
          e.currentTarget.nextSibling.style.display = "block";
        }}
      />
      {/* Fallback texte (masqué par défaut) */}
      <span
        style={{
          display: "none",
          fontSize: 28,
          lineHeight: 1,
        }}
      >
        🏢
      </span>
      <span
        style={{
          fontSize: 11,
          fontWeight: 700,
          color: "#6b7280",
          lineHeight: 1.3,
          fontFamily: "'Barlow Condensed', sans-serif",
          textTransform: "uppercase",
          letterSpacing: "0.5px",
        }}
      >
        {partner.name}
      </span>
    </a>
  );
}

export default function Partners() {
  return (
    <section style={{ background: "#f8f7f4", padding: "90px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* En-tête */}
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <span
            style={{
              color: "#f97316",
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              fontSize: 12,
              textTransform: "uppercase",
              letterSpacing: 3,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
            }}
          >
            <span
              style={{
                display: "block",
                width: 28,
                height: 2,
                background: "#f97316",
              }}
            />
            Écosystème
            <span
              style={{
                display: "block",
                width: 28,
                height: 2,
                background: "#f97316",
              }}
            />
          </span>
          <h2
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              color: "#1a5c2a",
              fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
              fontWeight: 900,
              textTransform: "uppercase",
              marginTop: 10,
              marginBottom: 12,
              letterSpacing: "0.5px",
            }}
          >
            Nos Partenaires
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
            L'OCPV collabore avec des institutions nationales et internationales
            pour renforcer la filière vivière ivoirienne.
          </p>
        </div>

        {/* Grille logos */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
            gap: 16,
            marginBottom: 60,
          }}
        >
          {partners.map((p) => (
            <LogoCard key={p.name} partner={p} />
          ))}
        </div>

        {/* CTA bannière */}
        <div
          style={{
            position: "relative",
            borderRadius: 20,
            overflow: "hidden",
            boxShadow: "0 8px 40px rgba(26,92,42,0.25)",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=70"
            alt="Partenariat"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(13,53,24,0.88)",
            }}
          />
          <div
            style={{
              position: "relative",
              padding: "48px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 24,
              flexWrap: "wrap",
            }}
          >
            <div>
              <h3
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  color: "#fff",
                  fontSize: "clamp(1.2rem, 2.5vw, 1.7rem)",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  marginBottom: 10,
                }}
              >
                Vous souhaitez devenir partenaire ?
              </h3>
              <p
                style={{
                  color: "rgba(255,255,255,0.7)",
                  fontSize: 14,
                  maxWidth: 480,
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                Rejoignez le réseau de l'OCPV et contribuez au développement du
                commerce vivrier en Côte d'Ivoire.
              </p>
            </div>
            <a
              href="/#contact"
              style={{
                flexShrink: 0,
                background: "#f97316",
                color: "#fff",
                padding: "14px 32px",
                borderRadius: 6,
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 800,
                fontSize: 14,
                textTransform: "uppercase",
                letterSpacing: "0.8px",
                textDecoration: "none",
                boxShadow: "0 4px 20px rgba(249,115,22,0.45)",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                transition: "background 0.2s",
              }}
            >
              Nous contacter
              <svg
                width="15"
                height="15"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

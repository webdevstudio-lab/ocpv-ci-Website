// src/components/sections/ServicesGrid.jsx
const OCPV_SERVICES = [
  {
    title: "Collecte & Transport",
    desc: "Enlèvement des ordures ménagères et industrielles sur tout le district d'Abidjan.",
    img: "https://www.ocpv-ci.com/images/services/s1.jpg",
  },
  {
    title: "Nettoiement Urbain",
    desc: "Balayage mécanique et manuel des voies publiques pour une cité propre.",
    img: "https://www.ocpv-ci.com/images/services/s2.jpg",
  },
  {
    title: "Assainissement",
    desc: "Curage de caniveaux et entretien des réseaux d'évacuation des eaux usées.",
    img: "https://www.ocpv-ci.com/images/services/s3.jpg",
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-[#2e7d32] font-bold uppercase tracking-widest mb-2">
            Nos Spécialités
          </h3>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900">
            Ce Que Nous Faisons Le Mieux
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {OCPV_SERVICES.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-bold mb-4 text-slate-800">
                  {service.title}
                </h4>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.desc}
                </p>
                <button className="flex items-center gap-2 text-[#2e7d32] font-bold group-hover:gap-4 transition-all">
                  LIRE LA SUITE <span className="text-xl">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

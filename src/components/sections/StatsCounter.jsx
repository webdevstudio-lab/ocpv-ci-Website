"use client";
export default function StatsCounter() {
  return (
    <section className="bg-slate-900 text-white">
      <div className="container mx-auto flex flex-wrap">
        {/* Partie Orange */}
        <div className="w-full md:w-1/3 bg-[#f4b400] p-16 flex flex-col justify-center">
          <h2 className="text-5xl font-black text-slate-900 mb-4">97%</h2>
          <p className="text-slate-800 font-bold uppercase">
            De Clients Satisfaits <br /> À Travers Le Pays
          </p>
        </div>

        {/* Partie Chiffres */}
        <div className="w-full md:w-2/3 p-16 grid grid-cols-2 md:grid-cols-3 gap-10 items-center">
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">150+</div>
            <div className="text-gray-400 text-sm font-bold uppercase">
              Agents Qualifiés
            </div>
          </div>
          <div className="text-center border-x border-gray-800">
            <div className="text-4xl font-bold mb-2">20+</div>
            <div className="text-gray-400 text-sm font-bold uppercase">
              Camions Bennes
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">10+</div>
            <div className="text-gray-400 text-sm font-bold uppercase">
              Ans d'Expertise
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

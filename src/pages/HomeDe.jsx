import Snowfall from "react-snowfall";

function HomeDe() {
  return (
    <>
      <div>
        <h1 className="font-mono font-black uppercase text-white text-2xl text-center mt-20 mb-5">
          BTA wünscht dir frohe Weihnachten!
        </h1>
        <div className="flex justify-center items-center mt-5">
          <div className="w-full md:w-2/3 lg:w-1/2 px-4">
            <p className="font-mono font-normal text-white text-center text-sm">
              und einen super Start ins Jahr 2024!
            </p>
            <p className="font-mono font-normal text-white text-center text-sm mt-5 max-w-2xl mx-auto px-4 lg:px-8">
              Wir haben drei unserer liebsten Weihnachtsplätzchen-Rezepte zum
              Nachbacken vorbereitet. Damit sie im Ofen nicht verbrennen, gibt
              es die perfekt getimte BTA-Playlist direkt dazu.
            </p>

            <p className="font-mono font-normal text-white text-center text-sm mt-5">
              Viel Spaß, und bis zum nächsten Jahr! 💫
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeDe;

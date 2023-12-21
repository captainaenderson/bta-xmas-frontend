import React, { useState } from "react";

const recipes = [
  {
    name: "Klassisch",
    description: "Omas Butterplätzchen",
    zutaten: [
      "500g Mehl",
      "150g Zucker",
      "250g weiche Butter",
      "2 Eier",
      "1 TL Vanillezucker",
      "1 TL Backpulver",
    ],

    anleitung: [
      "1. Alle Zutaten für den Teig in eine große Schüssel geben und kurz zu einem glatten Teig verarbeiten. Teig zu einer Kugel formen und abgedeckt im Kühlschrank für mindestens 1 Stunde, besser über Nacht ziehen lassen.",
      "2. Backofen auf 170 °C Ober- und Unterhitze vorheizen. Teig in 5 gleich große Portionen teilen. Für die Butterplätzchen einen Teil ausrollen und mit verschiedenen Ausstechen Plätzchen ausstechen. Auf ein Backblech mit Backpapier legen und für etwa 10 – 15 Minuten backen.",
      "3. Puderzucker mit etwas Wasser zu einem cremigen Zuckerguss vermischen. Butterplätzchen mit Zuckerguss und Zuckerstreuseln dekorieren.",
      "4. Plätzchen in einer Blechdose lagern und vor dem Servieren auf einem weihnachtlichen Teller hübsch anrichten.",
    ],
  },
  {
    name: "Vegan",
    description: "Vanillekipferl",
    zutaten: [
      "300g Mehl (Typ 405 | 550)",
      "70g Zucker",
      "250g Margarine",
      "100g gemahlene Mandeln",
      "2 Päckchen Vanillezucker",
      "1 Prise Salz",
    ],

    anleitung: [
      "1. Kalte, vegane Butter in grobe Würfel schneiden. Mehl, gemahlene Mandeln, Zucker, Vanillezucker, Salz und Butterwürfel in einer großen Schüssel vermengen und zu einem glatten Teig verkneten. Zudecken oder in Folie wickeln und für 1 Stunde kaltstellen.",
      "2. Backofen auf 175 Grad Ober-/Unterhitze vorheizen. Ein Backblech mit Backpapier belegen. Den Teig vierteln und bis auf ein Stück zurück in den Kühlschrank legen. Die Teig-Stücke jeweils zu einer ca. 1,5 cm dicken Rolle formen und  ca.1 cm breite Scheiben abschneiden. Zwischen den Handballen zu Kipferln formen. Mit den restlichen Stücken genauso widerholen, bis der Teig aufgebraucht ist.",
      "3. Vanillekipferl auf das Backblech legen und im Ofen ca. 12-15 Minuten backen, bis sie an den Spitzen leicht anfangen sich goldbraun zu verfärben. In der Zwischenzeit Puderzucker in eine Schüssel sieben und mit Zucker und Vanillezucker mischen.",
      "4. Vanillekipferl aus dem Ofen nehmen, 2-3 Minuten abkühlen lassen und noch warm in der Puderzucker-Mischung wenden. Vollständig auskühlen lassen.",
    ],
  },
  {
    name: "Glutenfrei",
    description: " Haferflocken-Makronen mit Hagebutten-Konfitüre",
    zutaten: [
      "125 g Haferflocken",
      "2 Eiweiß (Größe M)",
      "2 EL Zucker",
      "180 g Hagebutten-Konfitüre",
      "50 g gemahlene Mandeln (ohne Haut)",
    ],

    anleitung: [
      "1. Backofen vorheizen (E-Herd: 150 °C/ Umluft: 125 °C). Ein Backblech mit Backpapier auslegen. Haferflocken in einer Pfanne ohne Fett kurz anrösten. Sofort herausnehmen und auskühlen lassen.",
      "2. Eiweiß mit den Schneebesen des Handrührgerätes auf höchster Stufe steif schlagen. Nach und nach Zucker und 100 g Konfitüre unterrühren. Mandeln und Haferflocken vorsichtig unterheben.",
      "3. Makronenmasse mit 2 Teelöffeln als kleine Häufchen auf das Backblech setzen. Dann mit einem runden Löffelstiel eine kleine Vertiefung in die Makronen drücken. Haferflocken-Makronen im heißen Ofen ca. 30 Minuten backen.",
      "4. Haferflocken-Makronen noch heiß mit 80 g Konfitüre füllen und auf dem Backblech ca. 1 Stunde auskühlen lassen.",
    ],
  },
];

const RecipeSelectorDe = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return (
    <div className="pl-10 pr-10 max-w-7xl mx-auto" >
      <h2 className="text-2xl font-mono font-bold uppercase text-white text-center mt-20">
        Wähle dein Rezept 🎲
      </h2>
      <div className="flex flex-wrap justify-center py-5">
        {recipes.map((recipe) => (
          <button
            key={recipe.name}
            onClick={() => setSelectedRecipe(recipe)}
            className={`text-sm font-mono rounded-full border-2 border-white bg-transparent px-5 py-2 m-2 rounded cursor-pointer transition duration-500 ease-in-out ${
              selectedRecipe?.name === recipe.name
                ? "bg-white text-black" // Schwarz für ausgewählten Button
                : "text-white hover:bg-white hover:text-black" // Weiß sonst, aber schwarz beim Hovern
            }`}
          >
            {recipe.name}
          </button>
        ))}
      </div>
      {selectedRecipe && (
        <div className="flex flex-col md:flex-row justify-center  mt-5 mb-10">
          <div className="md:w-1/2 md:mr-4">
            <h2 className="text-2xl font-mono font-bold text-white text-center uppercase mb-10">
              {selectedRecipe.name}
              {selectedRecipe.description && ` - ${selectedRecipe.description}`}
            </h2>

            <h2 className="text-white uppercase font-mono font-bold mt-5 underline">
              Zutaten
            </h2>
            <ul className="list-none">
              {selectedRecipe.zutaten.map((zutat, index) => (
                <li
                  key={index}
                  className="text-white mt-5 mb-5 relative pl-6 font-mono text-sm"
                >
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-black border border-white"></div>
                  {zutat}
                </li>
              ))}
            </ul>
            <h2 className="text-white uppercase font-mono font-bold mt-5 underline">
              Zubereitung
            </h2>
            <ol>
              {selectedRecipe.anleitung.map((schritt, index) => (
                <li className="text-white mt-5 font-mono text-sm text-justify" key={index}>
                  {schritt}
                </li>
              ))}
            </ol>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeSelectorDe;

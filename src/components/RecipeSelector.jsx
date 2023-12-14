import React, { useState } from "react";

const recipes = [
  {
    name: "Classic",
    description: "GRANDMAS BUTTER COOKIES",
    zutaten: [
      "500g flour",
      "150g sugar",
      "250g soft butter",
      "2 eggs",
      "1 tsp vanilla",
      "1 tsp baking powder",
    ],

    anleitung: [
      "1. Put all the ingredients for the dough into a large bowl and briefly process into a smooth dough. Shape the dough into a ball and let it rest covered in the refrigerator for at least 1 hour, preferably overnight.",
      "2. Preheat the oven to 170 °C (338 °F) top and bottom heat. Divide the dough into 5 equal portions. For the butter cookies, roll out one part and cut out cookies using various cookie cutters. Place them on a baking sheet lined with parchment paper and bake for about 10 – 15 minutes.",
      "3. Mix powdered sugar with a little water to make a creamy icing. Decorate the butter cookies with icing and sugar sprinkles.",
      "4. Store the cookies in a metal tin and arrange them nicely on a festive plate before serving.",
    ],
  },
  {
    name: "Vegan",
    description: "Vanilla Crescents",
    zutaten: [
        "300g flour (type 405 | 550)",
        "70g sugar",
        "250g margarine",
        "100 g ground almonds",
        "2 packets vanilla sugar",
        "1 pinch of salt",
      ],
  
      anleitung: [
        "1. Cut cold, vegan butter into coarse cubes. In a large bowl, mix flour, ground almonds, sugar, vanilla sugar, salt, and butter cubes, and knead into a smooth dough. Cover or wrap in foil and chill for 1 hour.",
        "2. Preheat the oven to 175 degrees Celsius (347 degrees Fahrenheit) using top and bottom heat. Line a baking tray with parchment paper. Quarter the dough and put all but one piece back in the fridge. Shape each piece of dough into a roll about 1.5 cm thick and cut off slices about 1 cm wide. Shape into crescents using the palms of your hands. Repeat with the remaining pieces until all the dough is used up.",
        "3. Place the Vanilla Crescents on the baking tray and bake in the oven for about 12-15 minutes until they start to turn golden brown at the tips. In the meantime, sift powdered sugar into a bowl and mix with sugar and vanilla sugar.",
        "4. Take the Vanilla Crescents out of the oven, let them cool for 2-3 minutes, and while still warm, roll them in the powdered sugar mixture. Let them cool completely.",
      ],
  },
  {
    name: "Gluten Free",
    description: " Oat Macaroons with Rosehip Jam",
    zutaten: [
        "125 g oat flakes",
        "2 egg whites (size M)",
        "2 tablespoons sugar",
        "180 g rosehip jam",
        "50 g ground almonds (without skin)",
      ],
  
      anleitung: [
        "1. Preheat the oven (electric oven: 150 °C/ convection: 125 °C). Line a baking tray with parchment paper. Briefly toast the oat flakes in a pan without fat. Remove immediately and let cool.",
        "2. Whisk the egg whites with a hand mixer on the highest setting until stiff. Gradually stir in the sugar and 100 g of the jam. Gently fold in the almonds and oat flakes.",
        "3. Spoon small mounds of the macaroon mixture onto the baking tray using two teaspoons. Then, press a small indentation into the macaroons using the round end of a spoon handle. Bake the oat flake macaroons in the hot oven for about 30 minutes.",
        "4. While still hot, fill the oat flake macaroons with 80 g of jam and let them cool on the baking tray for about 1 hour.",

      ],
  },
];

const RecipeSelector = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return (
    <div className="pl-10 pr-10">
      <h2 className="text-2xl font-mono font-bold uppercase text-white text-center mt-20">
        Pick your recipe 🎲
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
        <div className="flex flex-col md:flex-row justify-center items-center mt-5 mb-10">
          <div className="md:w-1/2 md:mr-4">
          <h2 className="text-xl font-mono font-bold text-white text-center uppercase mb-10">
  {selectedRecipe.name}
  {selectedRecipe.description && ` - ${selectedRecipe.description}`}
</h2>


            <h2 className="text-white uppercase font-mono font-bold mt-5 underline">
              Ingredients
            </h2>
            <ul className="list-none">
              {selectedRecipe.zutaten.map((zutat, index) => (
                <li key={index} className="text-white mt-5 mb-5 relative pl-6 font-mono text-sm">
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-black border border-white"></div>
                  {zutat}
                </li>
              ))}
            </ul>
            <h2 className="text-white uppercase font-mono font-bold mt-5 underline">
              Instructions
            </h2>
            <ol>
              {selectedRecipe.anleitung.map((schritt, index) => (
                <li className="text-white mt-5 font-mono text-sm" key={index}>
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

export default RecipeSelector;

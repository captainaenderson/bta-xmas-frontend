import React, { useState } from "react";

const recipes = [
  {
    name: "Keep it Classic",
    description: "Rezept für Schokoladenkekse...",
    playlist:
      "https://open.spotify.com/embed/playlist/2fnFoN85qLk8UgZ91xLArt?utm_source=generator&theme=0",
  },
  {
    name: "NOHH Dear",
    description: "Rezept für Vanillekekse...",
    playlist:
      "https://open.spotify.com/embed/playlist/2fnFoN85qLk8UgZ91xLArt?utm_source=generator&theme=0",
  },
  {
    name: "Gluten Free",
    description: "Rezept für Haferkekse...",
    playlist:
      "https://open.spotify.com/embed/playlist/2fnFoN85qLk8UgZ91xLArt?utm_source=generator&theme=0",
  },
];

const RecipeSelector = () => {
    const [selectedRecipe, setSelectedRecipe] = useState(null);
  
    return (
      <div>
        <h2 className="text-2xl font-mono font-bold uppercase text-white text-center mt-20 mb-5">Choose your recipe</h2>
        <p className="font-mono font-normal text-white text-center">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,</p>
        <div className="flex flex-wrap justify-center py-5">
          {recipes.map(recipe => (
         <button 
         key={recipe.name} 
         onClick={() => setSelectedRecipe(recipe)}
         className={`font-mono rounded-full border-2 border-white bg-transparent px-5 py-2 m-2 rounded cursor-pointer transition duration-500 ease-in-out ${
           selectedRecipe?.name === recipe.name
             ? 'bg-white text-black' // Schwarz für ausgewählten Button
             : 'text-white hover:bg-white hover:text-black' // Weiß sonst, aber schwarz beim Hovern
         }`}
       >
         {recipe.name}
       </button>
       
        
          ))}
        </div>
        {selectedRecipe && (
          <div className="flex flex-col md:flex-row justify-center items-center mt-5">
            <div className="md:w-1/2 md:mr-4">
              <h2 className="text-xl font-mono font-bold text-white">{selectedRecipe.name}</h2>
              <p className=" text-white">{selectedRecipe.description}</p>
            </div>
          </div>
        )}
      </div>
    );
  };
  

export default RecipeSelector;

import React, { useState } from 'react';

const colors = {
  background: '#DDBEA9',  // Beige background
  buttonBg: '#8C9A8E',    // Sage green for container
  buttonLight: '#D3D3C7'  // Light sage for buttons
};

const GenerateRecipesPage: React.FC = () => {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [newIngredient, setNewIngredient] = useState<string>('');
  const [showRecipes, setShowRecipes] = useState<boolean>(false); // Toggle to show recipes
  const [hasGeneratedOnce, setHasGeneratedOnce] = useState<boolean>(false); // Track if generate was clicked at least once

  const handleAddIngredient = () => {
    if (newIngredient.trim() && !ingredients.includes(newIngredient.trim())) {
      setIngredients([...ingredients, newIngredient.trim()]);
      setNewIngredient(''); // Clear the input field
      setShowRecipes(false); // Hide recipes if ingredients are modified
    }
  };

  const handleRemoveIngredient = (ingredient: string) => {
    setIngredients(ingredients.filter(item => item !== ingredient));
    setShowRecipes(false); // Hide recipes if ingredients are modified
  };

  const handleGenerateRecipes = () => {
    if (ingredients.length > 0) {
      setShowRecipes(true); // Show recipes when button is pressed
      setHasGeneratedOnce(true); // Indicate that generation has happened at least once
    }
  };

  return (
    <div 
      className="min-h-screen flex flex-col items-center p-10"
      style={{ backgroundColor: colors.background }}
    >
      {/* Title */}
      <div className="text-center mb-16">
        <h1 
          className="text-6xl mb-4 font-serif"
          style={{ color: '#1A1A1A' }}
        >
          Ingrediate
        </h1>
        <p 
          className="text-xl font-serif"
          style={{ color: '#1A1A1A' }}
        >
          Turning Nothing, Into Something.
        </p>
      </div>
      
      <div className="flex flex-col lg:flex-row w-full lg:justify-between">
        {/* Ingredients List */}
        <div 
          className="flex flex-col p-6 rounded-lg shadow-lg space-y-4 mb-8 lg:mb-0 max-w-full lg:max-w-2/5"
          style={{ backgroundColor: colors.buttonBg }}
        >
          <h2 className="text-2xl font-serif mb-4 text-center" style={{ color: '#1A1A1A' }}>
            Ingredients
          </h2>

          {/* Ingredient Input Section */}
          <div className="flex space-x-2 mb-4">
            <input
              type="text"
              value={newIngredient}
              onChange={(e) => setNewIngredient(e.target.value)}
              placeholder="Add an ingredient"
              className="flex-1 p-2 rounded-lg border border-gray-400"
            />
            <button 
              onClick={handleAddIngredient}
              className="px-4 py-2 rounded-lg font-serif transition-all hover:shadow-md"
              style={{ backgroundColor: colors.buttonLight }}
            >
              Add
            </button>
          </div>

          {/* Ingredients List and Generate Button Container */}
          <div className="flex flex-col justify-between h-full">
            {/* Display Ingredients with Scrollable and Wrapping Functionality */}
            <div 
              className="grid grid-cols-3 gap-2 overflow-y-auto mb-4"
              style={{ maxHeight: '300px' }}  // Set max height for scrollable area
            >
              {ingredients.map((ingredient, index) => (
                <button 
                  key={index} 
                  onClick={() => handleRemoveIngredient(ingredient)}  // Remove ingredient on click
                  className="py-2 px-4 rounded-full font-serif transition-all hover:shadow-md text-sm max-w-[15ch] truncate whitespace-normal text-center"
                  style={{ backgroundColor: colors.buttonLight }}
                  title={ingredient}  // Show full ingredient on hover
                >
                  {ingredient} ✕
                </button>
              ))}
            </div>

            {/* Generate Recipes Button - Positioned at Bottom */}
            <button 
              onClick={handleGenerateRecipes}
              className="py-3 rounded-lg text-lg font-serif transition-all hover:shadow-md"
              style={{ backgroundColor: colors.buttonLight }}
            >
              Generate Recipes
            </button>
          </div>
        </div>

        {/* Recipes Section - Only Show When Generate Recipes is Pressed */}
        <div className="flex-1 lg:ml-10">
          <h2 className="text-4xl font-serif text-center lg:text-left mb-6" style={{ color: '#1A1A1A' }}>
            Recipes
          </h2>
          {ingredients.length === 0 ? (
            <p className="text-2xl font-serif text-center mt-10" style={{ color: '#1A1A1A' }}>
              Add some ingredients to begin generation!
            </p>
          ) : !showRecipes ? (
            hasGeneratedOnce ? (
              <p className="text-2xl font-serif text-center mt-10" style={{ color: '#1A1A1A' }}>
                Click Generate Again to Receive Updated Recipes!
              </p>
            ) : (
              <p className="text-2xl font-serif text-center mt-10" style={{ color: '#1A1A1A' }}>
                Click generate when all ingredients have been added.
              </p>
            )
          ) : (
            <div className="space-y-4">
              <div 
                className="p-4 rounded-lg shadow-lg" 
                style={{ backgroundColor: colors.buttonBg }}
              >
                <h3 className="text-2xl font-serif mb-2" style={{ color: '#1A1A1A' }}>
                  Avocado Toast with Poached Egg
                </h3>
                <p className="text-md font-serif mb-4">
                  A quick and nutritious breakfast, featuring creamy avocado spread on whole-grain toast topped with a perfectly poached egg.
                </p>
                <button 
                  className="py-2 px-4 rounded-lg text-lg font-serif transition-all hover:shadow-md"
                  style={{ backgroundColor: colors.buttonLight }}
                >
                  View Recipe
                </button>
              </div>
              <div 
                className="p-4 rounded-lg shadow-lg" 
                style={{ backgroundColor: colors.buttonBg }}
              >
                <h3 className="text-2xl font-serif mb-2" style={{ color: '#1A1A1A' }}>
                  One-Pot Garlic Butter Pasta
                </h3>
                <p className="text-md font-serif mb-4">
                  A simple yet flavorful pasta dish, cooked in one pot with garlic, butter, and Parmesan for a deliciously rich and easy meal.
                </p>
                <button 
                  className="py-2 px-4 rounded-lg text-lg font-serif transition-all hover:shadow-md"
                  style={{ backgroundColor: colors.buttonLight }}
                >
                  View Recipe
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GenerateRecipesPage;

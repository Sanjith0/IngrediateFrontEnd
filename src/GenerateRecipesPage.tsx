import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';
import logoImage from './accountLogo.png'; // Ensure to replace with actual path

const colors = {
  background: '#DDBEA9',  // Beige background
  buttonBg: '#8C9A8E',    // Sage green for containers
  buttonLight: '#D3D3C7'  // Light sage for buttons
};

const GenerateRecipesPage: React.FC = () => {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [newIngredient, setNewIngredient] = useState<string>('');
  const [showRecipes, setShowRecipes] = useState<boolean>(false);
  const [hasGeneratedOnce, setHasGeneratedOnce] = useState<boolean>(false);

  const handleAddIngredient = () => {
    if (newIngredient.trim() && !ingredients.includes(newIngredient.trim())) {
      setIngredients([...ingredients, newIngredient.trim()]);
      setNewIngredient('');
      setShowRecipes(false);
    }
  };

  const handleRemoveIngredient = (ingredient: string) => {
    setIngredients(ingredients.filter(item => item !== ingredient));
    setShowRecipes(false);
  };

  const handleGenerateRecipes = () => {
    if (ingredients.length > 0) {
      setShowRecipes(true);
      setHasGeneratedOnce(true);
    }
  };

  const handleLogoClick = () => {
    alert('Logo button clicked!'); // Replace with desired functionality
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center p-10"
      style={{ backgroundColor: colors.background }}
    >
      {/* Header with Title and Logo */}
      <div className="w-full flex justify-between items-center mb-4">
        <h1
          className="text-6xl font-serif"
          style={{ color: '#1A1A1A', textAlign: 'left' }}
        >
          Ingrediate
        </h1>
        <button onClick={handleLogoClick} className="p-2 rounded-full hover:shadow-lg transition-all">
          <img src={logoImage} alt="Logo" className="w-16 h-16" />
        </button>
      </div>
      
      <p className="text-xl font-serif mb-10" style={{ color: '#1A1A1A', marginTop: '-0.5rem', textAlign: 'left', width: '100%' }}>
        Turning Nothing, Into Something.
      </p>

      <div className="flex flex-col lg:flex-row w-full lg:justify-between">
        {/* Ingredients List */}
        <div
          className="flex flex-col p-6 rounded-lg shadow-lg space-y-4 mb-8 lg:mb-0 max-w-full lg:max-w-2/5"
          style={{ backgroundColor: colors.buttonBg }}
        >
          <h2 className="text-2xl font-serif mb-4 text-center" style={{ color: '#1A1A1A' }}>
            Ingredients
          </h2>

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

          <div className="flex flex-col justify-between h-full">
            <div
              className="grid grid-cols-3 gap-2 overflow-y-auto mb-4"
              style={{ maxHeight: '300px' }}
            >
              {ingredients.map((ingredient, index) => (
                <button
                  key={index}
                  onClick={() => handleRemoveIngredient(ingredient)}
                  className="py-2 px-4 rounded-full font-serif transition-all hover:shadow-md text-sm max-w-[15ch] truncate whitespace-normal text-center"
                  style={{ backgroundColor: colors.buttonLight }}
                  title={ingredient}
                >
                  {ingredient} ✕
                </button>
              ))}
            </div>

            <button
              onClick={handleGenerateRecipes}
              className="py-3 rounded-lg text-lg font-serif transition-all hover:shadow-md"
              style={{ backgroundColor: colors.buttonLight }}
            >
              Generate Recipes
            </button>
          </div>
        </div>

        <div className="flex-1 lg:ml-10">
          <h2 className="text-4xl font-serif text-center lg:text-left mb-6" style={{ color: '#1A1A1A' }}>
            Recipes
          </h2>
          {ingredients.length === 0 ? (
            <>
              <p className="text-2xl font-serif text-center mt-10" style={{ color: '#1A1A1A' }}>
                Add some ingredients to begin generation!
              </p>
              <main className="flex justify-center mt-10">
                <Spline
                  scene="https://prod.spline.design/S6a-npsG9QGD-tui/scene.splinecode"
                />
              </main>
            </>
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

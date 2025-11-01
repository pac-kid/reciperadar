import { RecipeCard } from '../RecipeCard'
import recipeImage from '@assets/generated_images/Grilled_salmon_recipe_836bff56.png'

export default function RecipeCardExample() {
  return (
    <div className="w-full max-w-sm">
      <RecipeCard
        id="1"
        title="Grilled Salmon with Quinoa"
        image={recipeImage}
        cookingTime={25}
        calories={450}
        protein={35}
        matchPercentage={85}
        missingIngredients={2}
        isFavorite={false}
        onClick={(id) => console.log('Recipe clicked:', id)}
        onFavoriteToggle={(id) => console.log('Favorite toggled:', id)}
      />
    </div>
  )
}

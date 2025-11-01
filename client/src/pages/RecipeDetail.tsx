import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowLeft, Heart, Clock, Users } from 'lucide-react'
import { NutritionPanel } from '@/components/NutritionPanel'
import { ThemeToggle } from '@/components/ThemeToggle'
import { Link } from 'wouter'
import salmonImage from '@assets/generated_images/Grilled_salmon_recipe_836bff56.png'

export default function RecipeDetail() {
  const [isFavorite, setIsFavorite] = useState(false)
  const [checkedSteps, setCheckedSteps] = useState<Set<number>>(new Set())

  const recipe = {
    title: 'Grilled Salmon with Quinoa & Roasted Vegetables',
    image: salmonImage,
    cookingTime: 25,
    servings: 2,
    difficulty: 'Medium',
    nutrition: {
      calories: 450,
      protein: 35,
      carbs: 40,
      fats: 15,
      servings: 2,
    },
    ingredients: [
      { name: 'Salmon fillet', amount: '2 pieces (6 oz each)' },
      { name: 'Quinoa', amount: '1 cup, uncooked' },
      { name: 'Bell peppers', amount: '2, mixed colors' },
      { name: 'Zucchini', amount: '1 medium' },
      { name: 'Olive oil', amount: '3 tablespoons' },
      { name: 'Lemon', amount: '1' },
      { name: 'Garlic', amount: '3 cloves, minced' },
      { name: 'Fresh herbs', amount: '2 tablespoons' },
    ],
    instructions: [
      'Preheat your oven to 425°F (220°C). Line a baking sheet with parchment paper.',
      'Rinse quinoa under cold water. Cook according to package directions (usually 1:2 ratio with water, simmer for 15 minutes).',
      'Cut bell peppers and zucchini into 1-inch pieces. Toss with 2 tablespoons olive oil, salt, and pepper.',
      'Spread vegetables on the prepared baking sheet. Roast for 20 minutes, stirring halfway through.',
      'While vegetables roast, season salmon with salt, pepper, and minced garlic. Drizzle with remaining olive oil.',
      'Heat a grill pan over medium-high heat. Cook salmon skin-side down for 4-5 minutes, then flip and cook for another 3-4 minutes.',
      'Fluff cooked quinoa with a fork. Mix in fresh herbs and a squeeze of lemon juice.',
      'Plate quinoa, top with grilled salmon, and serve alongside roasted vegetables. Garnish with lemon wedges.',
    ],
  }

  const toggleStep = (index: number) => {
    const newChecked = new Set(checkedSteps)
    if (newChecked.has(index)) {
      newChecked.delete(index)
    } else {
      newChecked.add(index)
    }
    setCheckedSteps(newChecked)
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-background border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/">
              <Button variant="ghost" data-testid="button-back">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back
              </Button>
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <div className="relative h-[50vh] min-h-[400px]">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-start justify-between gap-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white">
                {recipe.title}
              </h1>
              <Button
                size="icon"
                variant="ghost"
                className={`${isFavorite ? 'text-red-500' : 'text-white'} hover:bg-white/20 backdrop-blur-sm flex-shrink-0`}
                onClick={() => setIsFavorite(!isFavorite)}
                data-testid="button-favorite-detail"
              >
                <Heart className={`h-6 w-6 ${isFavorite ? 'fill-current' : ''}`} />
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-4 mt-4 text-white/90">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>{recipe.cookingTime} minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>{recipe.servings} servings</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">{recipe.difficulty}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl font-display font-semibold mb-4">Ingredients</h2>
              <Card className="p-6">
                <ul className="space-y-3">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-start gap-3" data-testid={`ingredient-${index}`}>
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <div>
                        <span className="font-medium">{ingredient.name}</span>
                        <span className="text-muted-foreground"> — {ingredient.amount}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </Card>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold mb-4">Instructions</h2>
              <div className="space-y-4">
                {recipe.instructions.map((instruction, index) => (
                  <Card
                    key={index}
                    className={`p-4 cursor-pointer hover-elevate ${
                      checkedSteps.has(index) ? 'bg-accent' : ''
                    }`}
                    onClick={() => toggleStep(index)}
                    data-testid={`step-${index}`}
                  >
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold ${
                          checkedSteps.has(index)
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted text-muted-foreground'
                        }`}>
                          {index + 1}
                        </div>
                      </div>
                      <p className={`flex-1 ${checkedSteps.has(index) ? 'line-through text-muted-foreground' : ''}`}>
                        {instruction}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <NutritionPanel {...recipe.nutrition} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

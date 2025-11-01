import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Search, Heart, Bell } from 'lucide-react'
import { RecipeCard } from '@/components/RecipeCard'
import { IngredientChip } from '@/components/IngredientChip'
import { IngredientSearch } from '@/components/IngredientSearch'
import { ThemeToggle } from '@/components/ThemeToggle'
import { NotificationBanner } from '@/components/NotificationBanner'
import { Link } from 'wouter'
import heroImage from '@assets/generated_images/Hero_fitness_meal_spread_5c3c0e5f.png'
import salmonImage from '@assets/generated_images/Grilled_salmon_recipe_836bff56.png'
import buddhaImage from '@assets/generated_images/Buddha_bowl_recipe_cb2a4112.png'
import stirfryImage from '@assets/generated_images/Chicken_stir-fry_recipe_06d9119a.png'
import parfaitImage from '@assets/generated_images/Greek_yogurt_parfait_50910901.png'
import burritoImage from '@assets/generated_images/Burrito_bowl_recipe_fb7f08aa.png'
import eggMuffinsImage from '@assets/generated_images/Egg_muffins_recipe_0009260c.png'

export default function Home() {
  const [ingredients, setIngredients] = useState([
    'Chicken Breast',
    'Quinoa',
    'Spinach',
    'Bell Peppers',
    'Olive Oil',
  ])
  
  const [notifications, setNotifications] = useState([
    {
      id: '1',
      title: 'Meal Prep Reminder',
      message: 'Time to prepare your healthy lunch for tomorrow!',
      time: '2 hours ago',
    },
  ])

  const [searchQuery, setSearchQuery] = useState('')

  const recipes = [
    {
      id: '1',
      title: 'Grilled Salmon with Quinoa',
      image: salmonImage,
      cookingTime: 25,
      calories: 450,
      protein: 35,
      matchPercentage: 85,
      missingIngredients: 2,
    },
    {
      id: '2',
      title: 'Colorful Buddha Bowl',
      image: buddhaImage,
      cookingTime: 20,
      calories: 380,
      protein: 18,
      matchPercentage: 92,
      missingIngredients: 1,
    },
    {
      id: '3',
      title: 'Chicken Stir-Fry',
      image: stirfryImage,
      cookingTime: 15,
      calories: 420,
      protein: 32,
      matchPercentage: 95,
      missingIngredients: 0,
    },
    {
      id: '4',
      title: 'Greek Yogurt Parfait',
      image: parfaitImage,
      cookingTime: 5,
      calories: 250,
      protein: 20,
      matchPercentage: 78,
      missingIngredients: 3,
    },
    {
      id: '5',
      title: 'Chicken Burrito Bowl',
      image: burritoImage,
      cookingTime: 30,
      calories: 520,
      protein: 38,
      matchPercentage: 88,
      missingIngredients: 2,
    },
    {
      id: '6',
      title: 'Protein Egg Muffins',
      image: eggMuffinsImage,
      cookingTime: 25,
      calories: 180,
      protein: 15,
      matchPercentage: 90,
      missingIngredients: 1,
    },
  ]

  const handleAddIngredient = (ingredient: string) => {
    if (!ingredients.includes(ingredient)) {
      setIngredients([...ingredients, ingredient])
    }
  }

  const handleRemoveIngredient = (ingredient: string) => {
    setIngredients(ingredients.filter((i) => i !== ingredient))
  }

  const handleDismissNotification = (id: string) => {
    setNotifications(notifications.filter((n) => n.id !== id))
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-background border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-2xl font-display font-bold text-primary">FitRecipe</h1>
            <div className="flex items-center gap-2">
              <Button
                size="icon"
                variant="ghost"
                data-testid="button-notifications"
              >
                <Bell className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                data-testid="button-favorites"
              >
                <Heart className="h-5 w-5" />
              </Button>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/30" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            Discover Fitness Recipes From What You Have
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Turn your ingredients into healthy, delicious meals
          </p>
          
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search recipes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 text-base bg-background/95 backdrop-blur-sm"
                data-testid="input-hero-search"
              />
            </div>
          </div>
        </div>
      </section>

      {notifications.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="space-y-3">
            {notifications.map((notification) => (
              <NotificationBanner
                key={notification.id}
                {...notification}
                onDismiss={handleDismissNotification}
              />
            ))}
          </div>
        </section>
      )}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h3 className="text-2xl font-display font-semibold mb-4">My Ingredients</h3>
        
        <div className="mb-6">
          <IngredientSearch onAdd={handleAddIngredient} />
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {ingredients.map((ingredient) => (
            <IngredientChip
              key={ingredient}
              name={ingredient}
              onRemove={handleRemoveIngredient}
            />
          ))}
        </div>
        
        <div className="mt-6">
          <h4 className="text-sm font-medium text-muted-foreground mb-3">Popular ingredients you might have:</h4>
          <div className="flex flex-wrap gap-2">
            {['Brown Rice', 'Eggs', 'Greek Yogurt', 'Sweet Potato', 'Broccoli'].map((suggestion) => (
              <Button
                key={suggestion}
                variant="outline"
                size="sm"
                onClick={() => handleAddIngredient(suggestion)}
                data-testid={`button-suggestion-${suggestion.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <Search className="h-3 w-3 mr-1.5" />
                {suggestion}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-display font-semibold">Recipes For You</h3>
          <p className="text-sm text-muted-foreground">{recipes.length} recipes found</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              {...recipe}
              onClick={(id) => console.log('Recipe clicked:', id)}
              onFavoriteToggle={(id) => console.log('Favorite toggled:', id)}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

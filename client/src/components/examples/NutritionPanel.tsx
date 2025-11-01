import { NutritionPanel } from '../NutritionPanel'

export default function NutritionPanelExample() {
  return (
    <div className="w-full max-w-md">
      <NutritionPanel
        calories={450}
        protein={35}
        carbs={40}
        fats={15}
        servings={2}
      />
    </div>
  )
}

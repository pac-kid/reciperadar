import { IngredientSearch } from '../IngredientSearch'

export default function IngredientSearchExample() {
  return (
    <div className="w-full max-w-2xl">
      <IngredientSearch onAdd={(ingredient) => console.log('Add ingredient:', ingredient)} />
    </div>
  )
}

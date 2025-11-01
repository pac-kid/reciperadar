import { IngredientChip } from '../IngredientChip'

export default function IngredientChipExample() {
  return (
    <div className="flex gap-2 flex-wrap">
      <IngredientChip name="Chicken Breast" onRemove={(name) => console.log('Remove:', name)} />
      <IngredientChip name="Quinoa" onRemove={(name) => console.log('Remove:', name)} />
      <IngredientChip name="Spinach" onRemove={(name) => console.log('Remove:', name)} />
    </div>
  )
}

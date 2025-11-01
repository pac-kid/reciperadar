import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export interface NutritionInfo {
  calories: number
  protein: number
  carbs: number
  fats: number
  servings: number
}

export interface NutritionPanelProps extends NutritionInfo {
  className?: string
}

export function NutritionPanel({
  calories,
  protein,
  carbs,
  fats,
  servings,
  className = '',
}: NutritionPanelProps) {
  const total = protein + carbs + fats
  const proteinPercent = (protein / total) * 100
  const carbsPercent = (carbs / total) * 100
  const fatsPercent = (fats / total) * 100

  return (
    <Card className={className} data-testid="card-nutrition">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl">Nutrition Facts</CardTitle>
        <p className="text-sm text-muted-foreground">Per serving ({servings} servings)</p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-4 rounded-lg bg-accent">
            <div className="text-3xl font-bold font-display text-foreground">{calories}</div>
            <div className="text-sm text-muted-foreground mt-1">Calories</div>
          </div>
          <div className="text-center p-4 rounded-lg bg-accent">
            <div className="text-3xl font-bold font-display text-foreground">{protein}g</div>
            <div className="text-sm text-muted-foreground mt-1">Protein</div>
          </div>
          <div className="text-center p-4 rounded-lg bg-accent">
            <div className="text-3xl font-bold font-display text-foreground">{carbs}g</div>
            <div className="text-sm text-muted-foreground mt-1">Carbs</div>
          </div>
          <div className="text-center p-4 rounded-lg bg-accent">
            <div className="text-3xl font-bold font-display text-foreground">{fats}g</div>
            <div className="text-sm text-muted-foreground mt-1">Fats</div>
          </div>
        </div>

        <div>
          <div className="text-sm font-medium mb-2">Macro Distribution</div>
          <div className="h-3 w-full rounded-full overflow-hidden flex">
            <div
              className="bg-primary"
              style={{ width: `${proteinPercent}%` }}
              title={`Protein: ${proteinPercent.toFixed(0)}%`}
            />
            <div
              className="bg-chart-2"
              style={{ width: `${carbsPercent}%` }}
              title={`Carbs: ${carbsPercent.toFixed(0)}%`}
            />
            <div
              className="bg-chart-3"
              style={{ width: `${fatsPercent}%` }}
              title={`Fats: ${fatsPercent.toFixed(0)}%`}
            />
          </div>
          <div className="flex justify-between mt-2 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-sm bg-primary" />
              Protein
            </span>
            <span className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-sm bg-chart-2" />
              Carbs
            </span>
            <span className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-sm bg-chart-3" />
              Fats
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

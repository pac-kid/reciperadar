import { Badge } from '@/components/ui/badge'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export interface IngredientChipProps {
  name: string
  onRemove?: (name: string) => void
}

export function IngredientChip({ name, onRemove }: IngredientChipProps) {
  return (
    <Badge
      variant="secondary"
      className="pl-3 pr-1 py-1.5 gap-1 text-sm"
      data-testid={`chip-ingredient-${name.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <span>{name}</span>
      {onRemove && (
        <Button
          size="icon"
          variant="ghost"
          className="h-4 w-4 p-0 hover:bg-transparent no-default-hover-elevate no-default-active-elevate"
          onClick={() => onRemove(name)}
          data-testid={`button-remove-${name.toLowerCase().replace(/\s+/g, '-')}`}
        >
          <X className="h-3 w-3" />
        </Button>
      )}
    </Badge>
  )
}

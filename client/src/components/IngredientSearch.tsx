import { Input } from '@/components/ui/input'
import { Search, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export interface IngredientSearchProps {
  onAdd?: (ingredient: string) => void
  placeholder?: string
}

export function IngredientSearch({
  onAdd,
  placeholder = "Add ingredients you have...",
}: IngredientSearchProps) {
  const [value, setValue] = useState('')

  const handleAdd = () => {
    if (value.trim()) {
      onAdd?.(value.trim())
      setValue('')
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAdd()
    }
  }

  return (
    <div className="flex gap-2">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyPress={handleKeyPress}
          className="pl-10"
          data-testid="input-ingredient-search"
        />
      </div>
      <Button
        onClick={handleAdd}
        disabled={!value.trim()}
        data-testid="button-add-ingredient"
      >
        <Plus className="h-5 w-5 mr-2" />
        Add
      </Button>
    </div>
  )
}

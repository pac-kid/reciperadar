import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Heart, Clock, Flame, Scale } from 'lucide-react'
import { useState } from 'react'

export interface RecipeCardProps {
  id: string
  title: string
  image: string
  cookingTime: number
  calories: number
  protein: number
  matchPercentage?: number
  missingIngredients?: number
  isFavorite?: boolean
  onFavoriteToggle?: (id: string) => void
  onClick?: (id: string) => void
}

export function RecipeCard({
  id,
  title,
  image,
  cookingTime,
  calories,
  protein,
  matchPercentage,
  missingIngredients,
  isFavorite = false,
  onFavoriteToggle,
  onClick,
}: RecipeCardProps) {
  const [favorite, setFavorite] = useState(isFavorite)

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    setFavorite(!favorite)
    onFavoriteToggle?.(id)
  }

  return (
    <Card
      className="overflow-hidden cursor-pointer hover-elevate active-elevate-2 group"
      onClick={() => onClick?.(id)}
      data-testid={`card-recipe-${id}`}
    >
      <div className="relative aspect-[4/3]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        
        {matchPercentage !== undefined && (
          <Badge
            className="absolute top-3 left-3 bg-primary text-primary-foreground border-primary-border"
            data-testid={`badge-match-${id}`}
          >
            {matchPercentage}% Match
          </Badge>
        )}
        
        <Button
          size="icon"
          variant="ghost"
          className={`absolute top-3 right-3 ${favorite ? 'text-red-500' : 'text-white'} hover:bg-black/20 backdrop-blur-sm`}
          onClick={handleFavoriteClick}
          data-testid={`button-favorite-${id}`}
        >
          <Heart className={`h-5 w-5 ${favorite ? 'fill-current' : ''}`} />
        </Button>
        
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="font-display font-semibold text-lg text-white mb-2">
            {title}
          </h3>
          {missingIngredients !== undefined && missingIngredients > 0 && (
            <p className="text-sm text-white/90">
              {missingIngredients} missing ingredient{missingIngredients > 1 ? 's' : ''}
            </p>
          )}
        </div>
      </div>
      
      <div className="p-4 flex items-center gap-4 text-sm">
        <div className="flex items-center gap-1.5 text-muted-foreground">
          <Clock className="h-4 w-4" />
          <span>{cookingTime} min</span>
        </div>
        <div className="flex items-center gap-1.5 text-muted-foreground">
          <Flame className="h-4 w-4" />
          <span>{calories} cal</span>
        </div>
        <div className="flex items-center gap-1.5 text-muted-foreground">
          <Scale className="h-4 w-4" />
          <span>{protein}g protein</span>
        </div>
      </div>
    </Card>
  )
}

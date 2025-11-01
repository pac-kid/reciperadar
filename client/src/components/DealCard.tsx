import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Heart, ExternalLink, Star } from 'lucide-react'
import { useState } from 'react'

export interface DealCardProps {
  id: string
  title: string
  image: string
  brand: 'amazon' | 'flipkart' | 'myntra' | 'ajio'
  originalPrice: number
  discountedPrice: number
  discountPercent: number
  rating?: number
  ratingCount?: number
  expiresIn?: string
  isFavorite?: boolean
  onFavoriteToggle?: (id: string) => void
  onClick?: (id: string) => void
}

const brandColors = {
  amazon: 'bg-[#FF9900] text-black',
  flipkart: 'bg-[#2874f0] text-white',
  myntra: 'bg-[#ff3e6c] text-white',
  ajio: 'bg-[#a1825e] text-white',
}

const brandNames = {
  amazon: 'Amazon',
  flipkart: 'Flipkart',
  myntra: 'Myntra',
  ajio: 'Ajio',
}

export function DealCard({
  id,
  title,
  image,
  brand,
  originalPrice,
  discountedPrice,
  discountPercent,
  rating,
  ratingCount,
  expiresIn,
  isFavorite = false,
  onFavoriteToggle,
  onClick,
}: DealCardProps) {
  const [favorite, setFavorite] = useState(isFavorite)
  const savings = originalPrice - discountedPrice

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    setFavorite(!favorite)
    onFavoriteToggle?.(id)
  }

  return (
    <Card
      className="overflow-hidden cursor-pointer hover-elevate active-elevate-2 group flex flex-col h-full"
      onClick={() => onClick?.(id)}
      data-testid={`card-deal-${id}`}
    >
      <div className="relative aspect-[3/4] bg-muted">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain p-4"
        />
        
        <Badge
          className={`absolute top-3 left-3 text-xs font-bold ${brandColors[brand]}`}
          data-testid={`badge-brand-${id}`}
        >
          {brandNames[brand]}
        </Badge>
        
        <Badge
          className="absolute top-3 right-3 bg-destructive text-destructive-foreground text-base font-display font-bold px-3 py-1"
          data-testid={`badge-discount-${id}`}
        >
          {discountPercent}% OFF
        </Badge>
        
        <Button
          size="icon"
          variant="ghost"
          className={`absolute bottom-3 right-3 ${favorite ? 'text-red-500' : 'text-foreground'} bg-background/80 backdrop-blur-sm hover:bg-background/90`}
          onClick={handleFavoriteClick}
          data-testid={`button-favorite-${id}`}
        >
          <Heart className={`h-4 w-4 ${favorite ? 'fill-current' : ''}`} />
        </Button>
      </div>
      
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-semibold text-sm line-clamp-2 mb-2 min-h-[2.5rem]">
          {title}
        </h3>
        
        {rating && (
          <div className="flex items-center gap-1 mb-2 text-xs">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-3 w-3 ${
                    i < Math.floor(rating)
                      ? 'fill-yellow-500 text-yellow-500'
                      : 'text-muted-foreground'
                  }`}
                />
              ))}
            </div>
            {ratingCount && <span className="text-muted-foreground">({ratingCount})</span>}
          </div>
        )}
        
        <div className="mb-3">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-display font-bold text-foreground">
              ₹{discountedPrice.toLocaleString()}
            </span>
            <span className="text-sm text-muted-foreground line-through">
              ₹{originalPrice.toLocaleString()}
            </span>
          </div>
          <p className="text-xs text-primary font-medium mt-1">
            Save ₹{savings.toLocaleString()}
          </p>
        </div>
        
        {expiresIn && (
          <p className="text-xs text-destructive font-medium mb-3">
            Ends in {expiresIn}
          </p>
        )}
        
        <Button className="w-full mt-auto" size="sm" data-testid={`button-view-deal-${id}`}>
          View Deal
          <ExternalLink className="h-3 w-3 ml-2" />
        </Button>
      </div>
    </Card>
  )
}

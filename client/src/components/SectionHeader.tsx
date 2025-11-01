import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export interface SectionHeaderProps {
  title: string
  subtitle?: string
  dealCount?: number
  onViewAll?: () => void
  brandColor?: string
}

export function SectionHeader({
  title,
  subtitle,
  dealCount,
  onViewAll,
  brandColor,
}: SectionHeaderProps) {
  return (
    <div className="flex items-end justify-between mb-6">
      <div>
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-2" style={{ color: brandColor }}>
          {title}
        </h2>
        {subtitle && (
          <p className="text-muted-foreground">{subtitle}</p>
        )}
        {dealCount !== undefined && (
          <p className="text-sm text-muted-foreground mt-1">
            {dealCount} amazing deals
          </p>
        )}
      </div>
      
      {onViewAll && (
        <Button
          variant="outline"
          onClick={onViewAll}
          data-testid="button-view-all"
        >
          View All
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      )}
    </div>
  )
}

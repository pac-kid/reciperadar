import { Card } from '@/components/ui/card'

export interface BrandBannerProps {
  brandName: string
  image: string
  onClick?: () => void
  testId?: string
}

export function BrandBanner({ brandName, image, onClick, testId }: BrandBannerProps) {
  return (
    <Card
      className="overflow-hidden cursor-pointer hover-elevate active-elevate-2 group"
      onClick={onClick}
      data-testid={testId}
    >
      <div className="relative aspect-video w-full">
        <img
          src={image}
          alt={`${brandName} offers`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </Card>
  )
}

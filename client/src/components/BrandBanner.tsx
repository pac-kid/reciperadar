import { Card } from '@/components/ui/card'

export interface BrandBannerProps {
  brandName: string
  image: string
  link?: string       // ⬅️ NEW
  onClick?: () => void
  testId?: string
}

export function BrandBanner({ brandName, image, link, onClick, testId }: BrandBannerProps) {

  const handleClick = () => {
    if (link) {
      window.open(link, "_blank");   // ⬅️ open link in new tab
      return;
    }
    if (onClick) {
      onClick();                     // ⬅️ fallback
    }
  };

  return (
    <Card
      className="overflow-hidden cursor-pointer hover-elevate active-elevate-2 group"
      onClick={handleClick}
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

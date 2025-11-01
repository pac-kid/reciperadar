import { DealCard } from '../DealCard'
import productImage from '@assets/generated_images/Smartphone_product_d15f9a32.png'

export default function DealCardExample() {
  return (
    <div className="w-full max-w-xs">
      <DealCard
        id="1"
        title="Latest 5G Smartphone - 128GB Storage, 8GB RAM"
        image={productImage}
        brand="amazon"
        originalPrice={29999}
        discountedPrice={19999}
        discountPercent={33}
        rating={4.5}
        ratingCount={1250}
        expiresIn="6 hours"
        onClick={(id) => console.log('Deal clicked:', id)}
        onFavoriteToggle={(id) => console.log('Favorite toggled:', id)}
      />
    </div>
  )
}

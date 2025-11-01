import { BrandBanner } from '../BrandBanner'
import bannerImage from '@assets/generated_images/Amazon_products_banner_fbe2de2d.png'

export default function BrandBannerExample() {
  return (
    <div className="w-full max-w-4xl">
      <BrandBanner
        brandName="Amazon"
        image={bannerImage}
        onClick={() => console.log('Amazon banner clicked')}
        testId="banner-amazon"
      />
    </div>
  )
}

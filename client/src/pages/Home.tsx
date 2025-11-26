import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Search, Heart, Menu } from 'lucide-react'
import { BrandBanner } from '@/components/BrandBanner'
import { SectionHeader } from '@/components/SectionHeader'
import { ThemeToggle } from '@/components/ThemeToggle'
import heroImage from '@assets/generated_images/Hero_shopping_excitement_a47de800.png'

// Load local banner data
import brandBanners from '@/data/brandbanners.json'

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="min-h-screen bg-background text-white">

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-background border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-4">
            <div className="flex items-center gap-4">
              <Button
                size="icon"
                variant="ghost"
                className="md:hidden"
                data-testid="button-menu"
              >
                <Menu className="h-5 w-5" />
              </Button>

              <h1 className="text-xl md:text-2xl font-display font-bold bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
                DealHub
              </h1>
            </div>

            <div className="hidden md:flex flex-1 max-w-xl">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search deals..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                  data-testid="input-search"
                />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button size="icon" variant="ghost" data-testid="button-saved-deals">
                <Heart className="h-5 w-5" />
              </Button>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative h-36 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/40" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white leading-tight">
            Discover Today's Hottest Deals Across Top Brands
          </h2>
          <p className="text-sm md:text-base text-white/80 mt-1">
            Amazon • Flipkart • Myntra • Ajio — all curated in one place
          </p>
        </div>
      </section>

      {/* BRAND BANNERS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <SectionHeader
            title="Top Brand Offers"
            subtitle="Shop the latest deals from your favourite stores"
            dealCount={730}
            brandColor="#6d28d9"
            onViewAll={() => console.log('View all brands')}
          />
        </div>

        {/* Dynamic grid from JSON */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {brandBanners.map((brand, index) => (
            <BrandBanner
              key={index}
              brandName={brand.brandName}
              image={brand.image}
              onClick={() => window.open(brand.url, '_blank')}
            />
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-card border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h3 className="text-2xl font-display font-bold mb-4">Never Miss a Deal</h3>
            <p className="text-muted-foreground mb-6">
              Join 50,000+ smart shoppers and get the best deals delivered daily
            </p>

            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1"
                data-testid="input-newsletter"
              />
              <Button data-testid="button-subscribe">Subscribe</Button>
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}

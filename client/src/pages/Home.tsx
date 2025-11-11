import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Search, Heart, Menu, ChevronDown } from 'lucide-react'
import { BrandBanner } from '@/components/BrandBanner'
import { SectionHeader } from '@/components/SectionHeader'
import { ThemeToggle } from '@/components/ThemeToggle'
import heroImage from '@assets/generated_images/Hero_shopping_excitement_a47de800.png'
import mamaearthBanner from '@assets/generated_images/Mamaearth_products_banner.png'
import flipkartBanner from '@assets/generated_images/Flipkart_products_banner_0d4084d1.png'
import myntraBanner from '@assets/generated_images/Myntra_products_banner_86b71eb6.png'
import ajioBanner from '@assets/generated_images/Ajio_products_banner_82c1fe51.png'

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
              <Button
                size="icon"
                variant="ghost"
                data-testid="button-saved-deals"
              >
                <Heart className="h-5 w-5" />
              </Button>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* SMALL HERO / TITLE STRIP (reduced height) */}
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

      {/* BRANDS (IGN-like grid — 4 across) */}
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Mamaearth */}
          <div className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <img
              src={mamaearthBanner}
              alt="Mamaearth offers"
              className="w-full h-64 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-green-700 bg-opacity-95 p-4">
              <h3 className="text-lg md:text-xl font-bold">Mamaearth Offers</h3>
              <p className="text-sm text-white/90 mt-1">Best skincare & personal care deals</p>
              <div className="mt-3">
                <Button
                  size="sm"
                  className="bg-white text-black"
                  onClick={() => window.open('https://bitli.in/cUofk3Q', '_blank')}
                >
                  View Deals
                </Button>
              </div>
            </div>
          </div>

          {/* Flipkart */}
          <div className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <img
              src={flipkartBanner}
              alt="Flipkart offers"
              className="w-full h-64 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-blue-700 bg-opacity-95 p-4">
              <h3 className="text-lg md:text-xl font-bold">Flipkart Offers</h3>
              <p className="text-sm text-white/90 mt-1">Amazing deals on electronics, fashion & more</p>
              <div className="mt-3">
                <Button
                  size="sm"
                  className="bg-white text-black"
                  onClick={() => window.open('https://fktr.in/zw2ka9z', '_blank')}
                >
                  View Deals
                </Button>
              </div>
            </div>
          </div>

          {/* Myntra */}
          <div className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <img
              src={myntraBanner}
              alt="Myntra offers"
              className="w-full h-64 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-pink-600 bg-opacity-95 p-4">
              <h3 className="text-lg md:text-xl font-bold">Myntra Offers</h3>
              <p className="text-sm text-white/90 mt-1">Trending fashion & accessories</p>
              <div className="mt-3">
                <Button
                  size="sm"
                  className="bg-white text-black"
                  onClick={() => window.open('https://myntr.it/gi8fwFa', '_blank')}
                >
                  View Deals
                </Button>
              </div>
            </div>
          </div>

          {/* Ajio */}
          <div className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <img
              src={ajioBanner}
              alt="Ajio offers"
              className="w-full h-64 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-amber-700 bg-opacity-95 p-4">
              <h3 className="text-lg md:text-xl font-bold">Ajio Offers</h3>
              <p className="text-sm text-white/90 mt-1">Premium fashion at great prices</p>
              <div className="mt-3">
                <Button
                  size="sm"
                  className="bg-white text-black"
                  onClick={() => window.open('https://ajiio.in/Ukofnfz', '_blank')}
                >
                  View Deals
                </Button>
              </div>
            </div>
          </div>
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
              <Button data-testid="button-subscribe">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

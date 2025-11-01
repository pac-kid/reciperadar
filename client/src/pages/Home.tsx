import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Search, Heart, Menu, ChevronDown } from 'lucide-react'
import { BrandBanner } from '@/components/BrandBanner'
import { SectionHeader } from '@/components/SectionHeader'
import { ThemeToggle } from '@/components/ThemeToggle'
import heroImage from '@assets/generated_images/Hero_shopping_excitement_a47de800.png'
import amazonBanner from '@assets/generated_images/Amazon_products_banner_fbe2de2d.png'
import flipkartBanner from '@assets/generated_images/Flipkart_products_banner_0d4084d1.png'
import myntraBanner from '@assets/generated_images/Myntra_products_banner_86b71eb6.png'
import ajioBanner from '@assets/generated_images/Ajio_products_banner_82c1fe51.png'

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="min-h-screen bg-background">
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

      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4 leading-tight">
            Discover Today's Hottest Deals<br />Across Top Brands
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-6">
            Amazon • Flipkart • Myntra • Ajio - All in One Place
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8"
              data-testid="button-explore-deals"
            >
              Explore Deals
              <ChevronDown className="h-5 w-5 ml-2" />
            </Button>
            <div className="flex items-center gap-3 text-white/80 text-sm">
              <span className="hidden sm:inline">|</span>
              <span>50,000+ deals updated daily</span>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeader
          title="Amazon Offers"
          subtitle="Exclusive deals from the world's largest online retailer"
          dealCount={156}
          brandColor="#FF9900"
          onViewAll={() => console.log('View all Amazon deals')}
        />
        
        <BrandBanner
          brandName="Amazon"
          image={amazonBanner}
          onClick={() => console.log('Amazon banner clicked')}
          testId="banner-amazon"
        />
      </section>

      <section className="bg-accent/30 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Flipkart Offers"
            subtitle="Amazing deals on electronics, fashion, and more"
            dealCount={203}
            brandColor="#2874f0"
            onViewAll={() => console.log('View all Flipkart deals')}
          />
          
          <BrandBanner
            brandName="Flipkart"
            image={flipkartBanner}
            onClick={() => console.log('Flipkart banner clicked')}
            testId="banner-flipkart"
          />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeader
          title="Myntra Offers"
          subtitle="Trending fashion deals for your style"
          dealCount={189}
          brandColor="#ff3e6c"
          onViewAll={() => console.log('View all Myntra deals')}
        />
        
        <BrandBanner
          brandName="Myntra"
          image={myntraBanner}
          onClick={() => console.log('Myntra banner clicked')}
          testId="banner-myntra"
        />
      </section>

      <section className="bg-accent/30 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Ajio Offers"
            subtitle="Premium fashion at unbeatable prices"
            dealCount={142}
            brandColor="#a1825e"
            onViewAll={() => console.log('View all Ajio deals')}
          />
          
          <BrandBanner
            brandName="Ajio"
            image={ajioBanner}
            onClick={() => console.log('Ajio banner clicked')}
            testId="banner-ajio"
          />
        </div>
      </section>

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

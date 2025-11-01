import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Search, Heart, Menu, ChevronDown } from 'lucide-react'
import { DealCard } from '@/components/DealCard'
import { SectionHeader } from '@/components/SectionHeader'
import { ThemeToggle } from '@/components/ThemeToggle'
import heroImage from '@assets/generated_images/Hero_shopping_excitement_a47de800.png'
import smartphone from '@assets/generated_images/Smartphone_product_d15f9a32.png'
import headphones from '@assets/generated_images/Headphones_product_c952b6da.png'
import jacket from '@assets/generated_images/Denim_jacket_fashion_a4dca521.png'
import sneakers from '@assets/generated_images/Sneakers_product_3e4a6ae6.png'
import smartwatch from '@assets/generated_images/Smartwatch_product_08d7b12a.png'
import handbag from '@assets/generated_images/Handbag_fashion_f26a9639.png'
import laptop from '@assets/generated_images/Laptop_product_91ae891f.png'
import sunglasses from '@assets/generated_images/Sunglasses_fashion_274ed69d.png'
import tshirt from '@assets/generated_images/T-shirt_fashion_173bfeff.png'
import speaker from '@assets/generated_images/Bluetooth_speaker_a10e3ab8.png'
import runningShoes from '@assets/generated_images/Running_shoes_3251b72b.png'
import shirt from '@assets/generated_images/Dress_shirt_96e201da.png'
import tablet from '@assets/generated_images/Tablet_device_8f286f91.png'
import dress from '@assets/generated_images/Floral_dress_2a4341d1.png'
import controller from '@assets/generated_images/Gaming_controller_984b6824.png'

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('')

  const amazonDeals = [
    {
      id: 'a1',
      title: 'Premium Wireless Noise-Canceling Headphones',
      image: headphones,
      brand: 'amazon' as const,
      originalPrice: 12999,
      discountedPrice: 7999,
      discountPercent: 38,
      rating: 4.5,
      ratingCount: 2340,
      expiresIn: '3 hours',
    },
    {
      id: 'a2',
      title: 'Latest 5G Smartphone - 128GB Storage',
      image: smartphone,
      brand: 'amazon' as const,
      originalPrice: 29999,
      discountedPrice: 19999,
      discountPercent: 33,
      rating: 4.3,
      ratingCount: 1856,
    },
    {
      id: 'a3',
      title: 'Smart Fitness Watch with Heart Rate Monitor',
      image: smartwatch,
      brand: 'amazon' as const,
      originalPrice: 8999,
      discountedPrice: 4999,
      discountPercent: 44,
      rating: 4.2,
      ratingCount: 987,
      expiresIn: '12 hours',
    },
    {
      id: 'a4',
      title: 'Ultra-Slim Laptop 14" Full HD Display',
      image: laptop,
      brand: 'amazon' as const,
      originalPrice: 54999,
      discountedPrice: 39999,
      discountPercent: 27,
      rating: 4.6,
      ratingCount: 543,
    },
  ]

  const flipkartDeals = [
    {
      id: 'f1',
      title: 'Casual Denim Jacket - Premium Quality',
      image: jacket,
      brand: 'flipkart' as const,
      originalPrice: 2999,
      discountedPrice: 1499,
      discountPercent: 50,
      rating: 4.1,
      ratingCount: 456,
      expiresIn: '8 hours',
    },
    {
      id: 'f2',
      title: 'Bluetooth Portable Speaker - Waterproof',
      image: speaker,
      brand: 'flipkart' as const,
      originalPrice: 3999,
      discountedPrice: 1999,
      discountPercent: 50,
      rating: 4.4,
      ratingCount: 1234,
    },
    {
      id: 'f3',
      title: 'Gaming Controller Wireless - LED Lights',
      image: controller,
      brand: 'flipkart' as const,
      originalPrice: 4999,
      discountedPrice: 2799,
      discountPercent: 44,
      rating: 4.3,
      ratingCount: 789,
      expiresIn: '5 hours',
    },
    {
      id: 'f4',
      title: 'Android Tablet 10.1" - 64GB Storage',
      image: tablet,
      brand: 'flipkart' as const,
      originalPrice: 18999,
      discountedPrice: 12999,
      discountPercent: 32,
      rating: 4.0,
      ratingCount: 234,
    },
  ]

  const myntraDeals = [
    {
      id: 'm1',
      title: 'Trendy White Sneakers - Casual Footwear',
      image: sneakers,
      brand: 'myntra' as const,
      originalPrice: 3499,
      discountedPrice: 1999,
      discountPercent: 43,
      rating: 4.5,
      ratingCount: 2103,
    },
    {
      id: 'm2',
      title: 'Designer Sunglasses - UV Protection',
      image: sunglasses,
      brand: 'myntra' as const,
      originalPrice: 2999,
      discountedPrice: 1299,
      discountPercent: 57,
      rating: 4.2,
      ratingCount: 567,
      expiresIn: '24 hours',
    },
    {
      id: 'm3',
      title: 'Casual Cotton T-Shirt - Multicolor Pack',
      image: tshirt,
      brand: 'myntra' as const,
      originalPrice: 1999,
      discountedPrice: 999,
      discountPercent: 50,
      rating: 4.3,
      ratingCount: 3456,
    },
    {
      id: 'm4',
      title: 'Running Shoes - Athletic Performance',
      image: runningShoes,
      brand: 'myntra' as const,
      originalPrice: 4999,
      discountedPrice: 2499,
      discountPercent: 50,
      rating: 4.4,
      ratingCount: 1876,
      expiresIn: '6 hours',
    },
  ]

  const ajioDeals = [
    {
      id: 'aj1',
      title: 'Elegant Leather Handbag - Premium',
      image: handbag,
      brand: 'ajio' as const,
      originalPrice: 6999,
      discountedPrice: 3999,
      discountPercent: 43,
      rating: 4.6,
      ratingCount: 234,
    },
    {
      id: 'aj2',
      title: 'Formal White Dress Shirt - Slim Fit',
      image: shirt,
      brand: 'ajio' as const,
      originalPrice: 1999,
      discountedPrice: 999,
      discountPercent: 50,
      rating: 4.3,
      ratingCount: 876,
      expiresIn: '4 hours',
    },
    {
      id: 'aj3',
      title: 'Floral Summer Dress - Women Fashion',
      image: dress,
      brand: 'ajio' as const,
      originalPrice: 3499,
      discountedPrice: 1749,
      discountPercent: 50,
      rating: 4.5,
      ratingCount: 432,
    },
    {
      id: 'aj4',
      title: 'Casual Denim Jeans - Comfort Fit',
      image: jacket,
      brand: 'ajio' as const,
      originalPrice: 2999,
      discountedPrice: 1499,
      discountPercent: 50,
      rating: 4.2,
      ratingCount: 654,
      expiresIn: '10 hours',
    },
  ]

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
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {amazonDeals.map((deal) => (
            <DealCard
              key={deal.id}
              {...deal}
              onClick={(id) => console.log('Deal clicked:', id)}
              onFavoriteToggle={(id) => console.log('Favorite toggled:', id)}
            />
          ))}
        </div>
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
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {flipkartDeals.map((deal) => (
              <DealCard
                key={deal.id}
                {...deal}
                onClick={(id) => console.log('Deal clicked:', id)}
                onFavoriteToggle={(id) => console.log('Favorite toggled:', id)}
              />
            ))}
          </div>
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
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {myntraDeals.map((deal) => (
            <DealCard
              key={deal.id}
              {...deal}
              onClick={(id) => console.log('Deal clicked:', id)}
              onFavoriteToggle={(id) => console.log('Favorite toggled:', id)}
            />
          ))}
        </div>
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
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ajioDeals.map((deal) => (
              <DealCard
                key={deal.id}
                {...deal}
                onClick={(id) => console.log('Deal clicked:', id)}
                onFavoriteToggle={(id) => console.log('Favorite toggled:', id)}
              />
            ))}
          </div>
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

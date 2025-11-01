# Design Guidelines: DealHub - Multi-Brand Offers Aggregator

## Design Approach

**Reference-Based Approach** drawing inspiration from Slickdeals (deal discovery patterns), Amazon (product card layouts), and Flipkart (vibrant Indian e-commerce aesthetics). This creates an experience-focused platform where visual hierarchy, urgency indicators, and engaging product imagery drive exploration and click-throughs.

## Typography System

**Font Families:**
- Primary: 'Inter' (Google Fonts) - Clean, versatile sans-serif for all UI elements
- Display: 'Outfit' (Google Fonts) - Bold, modern headlines for deals and CTAs

**Hierarchy:**
- Hero Headlines: Outfit Bold, 4xl to 6xl (responsive)
- Deal Section Headers: Outfit SemiBold, 2xl to 4xl
- Product Titles: Inter SemiBold, base to lg (clamp to 2 lines)
- Price Display: Outfit Bold, xl to 2xl (discount prices)
- Original Price: Inter Regular, sm to base (strikethrough)
- Discount Badges: Outfit Bold, xs to sm
- Body Text: Inter Regular, sm to base
- Meta Info: Inter Regular, xs (shipping, ratings, brand)

## Layout System

**Spacing Primitives:** Tailwind units of 2, 4, 6, and 8 (e.g., gap-4, p-6, my-8)
- Tight spacing: 2 (badges, inline elements)
- Standard spacing: 4 (cards, filters)
- Section spacing: 6-8 (between deal sections)
- Page padding: 6-8 (containers)

**Grid System:**
- Mobile: 1-2 column grid for deals
- Tablet (md): 3-column grid
- Desktop (lg): 4-5 column grid for maximum density

**Container Strategy:**
- Full-width: Hero, category banners, deal grids
- Constrained: max-w-7xl for main content
- Filter sidebar: max-w-xs on desktop (collapsible on mobile)

## Core Page Structure

### Home/Discovery Page

**Hero Section (70vh on desktop, 50vh on mobile):**
- Dynamic hero image showing shopping excitement (person with shopping bags, colorful product collage, or vibrant discount graphics)
- Gradient overlay for text contrast
- Centered headline: "Discover Today's Hottest Deals Across Top Brands"
- Subheadline highlighting aggregation: "Amazon • Flipkart • Myntra • Ajio - All in One Place"
- Primary CTA with blurred background: "Explore Deals"
- Brand logo strip below CTA (horizontal scroll on mobile)

**Quick Filter Bar (Sticky below header):**
- Horizontal chip filters: Categories (Electronics, Fashion, Home, Beauty), Discount Range (>50%, >70%), Price Range
- Sort dropdown: Newest, Highest Discount, Price Low-High
- View toggle: Grid/List view switcher
- Active filters display with clear-all option

**Featured Deals Section:**
- Large 2-column layout (1 on mobile) showcasing "Deal of the Day" cards
- Each featured card takes 50% width with large product image (16:9 aspect)
- Countdown timer for limited-time offers
- Prominent discount badge (top-right corner)
- Brand logo badge (top-left corner)
- Quick-view button on hover

**Category Grid Section:**
- 4-column grid on desktop (2 on tablet, 1 on mobile)
- Category cards with representative product images
- Category name overlay with deal count ("Electronics - 234 deals")
- Hover state reveals top discount available

**All Deals Grid:**
- 5-column masonry grid on desktop, 3 on tablet, 2 on mobile
- Infinite scroll with lazy loading
- Section headers every 20 items: "Trending This Hour", "Fashion Steals", "Tech Deals"
- Load more button as fallback

**Newsletter/Updates Section:**
- Full-width banner with gradient background
- Split layout: Left side with headline "Never Miss a Deal", Right side with email input and subscribe button
- Social proof: "Join 50,000+ smart shoppers"
- Trust badges: Daily updates, Verified deals, No spam

### Deal Detail Page

**Layout:**
- Hero product image gallery (60% width on desktop, full-width on mobile)
- Image carousel with thumbnail navigation
- Zoom on hover functionality
- Right sidebar (40% width) with deal information

**Deal Information Panel (Sticky on scroll):**
- Product title (2xl, bold)
- Brand badge and logo
- Price display: Large discounted price, small strikethrough original price
- Discount percentage badge (prominent, large size)
- Savings amount highlighted
- Deal validity timer/countdown
- "Get This Deal" CTA (full-width, prominent)
- Secondary CTA: "View on [Brand Name]"
- Store selector if available on multiple platforms
- Share buttons (WhatsApp, Twitter, Copy Link)

**Additional Details Section:**
- Tabbed interface: Description, Specifications, Reviews
- Deal history chart (price trends)
- Similar deals carousel
- User comments/ratings section

## Component Library

### Deal Cards

**Standard Deal Card:**
- 3:4 aspect ratio product image fills top portion
- Brand logo badge (small, top-left corner with semi-transparent background)
- Discount percentage badge (large, top-right, bold)
- Product title below image (clamp 2 lines, semibold)
- Price row: Discounted price (large, bold), Original price (small, strikethrough)
- Savings amount in smaller text
- Rating stars with count (5 stars layout, small)
- Quick action icons: Heart (save), Share (external)
- "View Deal" button (full-width at bottom)
- Expiry indicator: "Ends in 2 hours" or "Limited stock"

**Featured Deal Card (Larger format):**
- 16:9 hero product image
- Same badge system but larger scale
- Additional info: Brief description snippet (1 line)
- Countdown timer (hours:minutes:seconds)
- Two CTAs: Primary "Grab Now", Secondary "Details"

### Filter Components

**Sidebar Filters (Desktop):**
- Collapsible sections: Brands, Categories, Price Range, Discount
- Checkbox groups with count indicators
- Price range slider with min/max inputs
- Apply/Clear filter buttons at bottom
- Sticky positioning

**Mobile Filter Drawer:**
- Bottom sheet/modal on mobile
- Same filter groups in accordion style
- Fixed footer with Apply and Clear buttons
- Filter count badge on trigger button

### Brand Indicators

**Brand Badges:**
- Small logo images (32x32px) or text badges
- Consistent positioning (top-left of cards)
- Semi-transparent background for contrast
- Brand-specific styling treatment ready

### Urgency Indicators

**Countdown Timers:**
- Digital clock format (HH:MM:SS)
- "Ending Soon" text for <1 hour
- Progress bar for visual time remaining

**Stock Alerts:**
- "Only 3 left" badges
- "Almost Gone" indicators
- "Back in Stock" labels

## Navigation

**Top Navigation:**
- Logo left, centered search bar (expandable on mobile)
- Category mega-menu (Desktop: dropdown, Mobile: hamburger)
- User actions right: Saved deals (heart icon with count), Login/Profile
- Sticky with shadow on scroll

**Breadcrumbs:**
- Show hierarchy: Home > Category > Subcategory > Deal
- Clickable navigation path

## Icons

**Icon Library:** Heroicons (via CDN)
- Navigation: home-outline, tag-outline, heart-outline, user-circle-outline
- Actions: shopping-cart, share, bookmark, filter, search, external-link
- Indicators: clock, trending-up, fire (hot deals), star (ratings)
- Sorting: arrows-up-down, adjustments-horizontal

## Images Strategy

**Hero Images:**
- Large hero banner: Vibrant shopping-themed imagery - excited shoppers with bags, colorful product arrangements, or celebratory discount graphics
- High energy, lifestyle photography that communicates savings and variety
- Gradient overlay (bottom-to-top or radial) for text readability

**Product Images:**
- High-quality product photography (white/transparent backgrounds preferred)
- Consistent aspect ratios per card type
- All images lazy-loaded for performance
- Fallback placeholder for missing images

**Brand Logos:**
- Official brand logos for Amazon, Flipkart, Myntra, Ajio
- Consistent sizing (32x32px for badges, larger for hero brand strip)
- Optimized SVG or PNG formats

**Category Banners:**
- Lifestyle images representing each category
- Fashion: Clothing flat-lays or styled outfits
- Electronics: Product shots on modern backgrounds
- Home: Curated home décor scenes

## Spacing & Vertical Rhythm

- Hero section: py-20 to py-32
- Section spacing: py-12 to py-20
- Card padding: p-4 to p-6
- Grid gaps: gap-6 on desktop, gap-4 on mobile
- Filter spacing: space-y-6 for groups

## Key Interactions

**Scroll-Based Reveals:**
- Fade-in animation as cards enter viewport
- Staggered animation (50ms delay between cards)
- Scale-up effect (from 95% to 100%) on reveal

**Card Interactions:**
- Hover lift with shadow increase
- Image zoom on hover (desktop)
- Quick-view overlay on hover
- Heart animation on save
- Share button triggers native share or modal

**Filter Interactions:**
- Instant grid updates on filter selection
- Smooth collapse/expand animations
- Filter count updates in real-time

## Accessibility

- Contrast ratio 4.5:1 for all text
- Focus states: 2px outline with 2px offset
- Touch targets: minimum 44x44px
- Semantic HTML: article for cards, nav for navigation
- ARIA labels for icon-only buttons
- Skip-to-content link
- Keyboard navigation: Tab through cards, Enter to activate
- Screen reader announcements for deal expiry, stock levels

This design creates a vibrant, high-energy shopping experience that maximizes deal visibility while maintaining clarity and encouraging exploration through strategic visual hierarchy and engagement patterns.
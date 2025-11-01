# Design Guidelines: FitRecipe - Fitness Recipe Discovery App

## Design Approach

**Reference-Based Approach** drawing inspiration from Tasty (visual recipe presentation), MyFitnessPal (nutrition-focused UI), and Pinterest (discovery grid patterns). This creates an experience-focused app where food imagery and visual hierarchy drive engagement while maintaining fitness-oriented clarity.

## Typography System

**Font Families:**
- Primary: 'Inter' (Google Fonts) - Clean, modern sans-serif for UI elements
- Display: 'Poppins' (Google Fonts) - Bold, energetic headlines

**Hierarchy:**
- Hero Headlines: Poppins Bold, 3xl to 5xl (responsive)
- Section Headers: Poppins SemiBold, 2xl to 3xl
- Card Titles: Inter SemiBold, lg to xl
- Body Text: Inter Regular, base (16px)
- Nutritional Data: Inter Medium, sm to base (emphasize numbers with SemiBold)
- Labels/Meta: Inter Regular, xs to sm

## Layout System

**Spacing Primitives:** Tailwind units of 2, 4, 6, and 8 (e.g., p-4, m-6, gap-8)
- Tight spacing: 2 (buttons, inline elements)
- Standard spacing: 4 (cards, form fields)
- Section spacing: 6-8 (between major sections)
- Page padding: 6-8 (containers)

**Grid System:**
- Mobile: Single column, full-width cards
- Tablet (md): 2-column grid for recipe cards
- Desktop (lg): 3-column masonry-style grid for recipe discovery

**Container Strategy:**
- Full-width: Hero section, recipe grid backgrounds
- Constrained: max-w-7xl for content sections
- Narrow forms: max-w-2xl for ingredient input, filters

## Core Page Structures

### Home/Discovery Page
**Hero Section (60vh on desktop, auto on mobile):**
- Large hero image showing vibrant, healthy meal
- Overlay gradient for text readability
- Centered headline: "Discover Fitness Recipes From What You Have"
- Search bar for ingredient input (prominent, full-width on mobile, 60% width on desktop)
- CTA button with blurred background overlay

**Ingredient Inventory Section:**
- Horizontal scrollable chip list of current ingredients
- Add/remove functionality with icon buttons
- Quick-add suggestions below ("Popular ingredients you might have")

**Recipe Discovery Grid:**
- Masonry/Pinterest-style layout (3 columns on lg, 2 on md, 1 on mobile)
- Recipe cards with 4:3 aspect ratio food images
- Overlay labels for match percentage ("85% Match • 3 missing ingredients")
- Hover state reveals quick-view nutrition stats

### Recipe Detail Page
**Layout:**
- Hero image (full-width, 50vh)
- Recipe title overlaid on image (bottom-left, with blurred background)
- Two-column layout on desktop (lg): 
  - Left (60%): Ingredients list, instructions
  - Right (40%): Nutrition panel (sticky), timing info
- Single column on mobile with nutrition panel at top

**Nutrition Panel:**
- Card-style container with grid layout (2x2 for macros)
- Large numbers (3xl) with small labels
- Visual macro breakdown bar (horizontal stacked bar)
- Serving size adjuster

**Instructions:**
- Numbered step cards with optional step images
- Checkboxes for progress tracking
- Timer integration for time-sensitive steps

### Ingredient Management Page
**Search & Add Section:**
- Prominent search bar with autocomplete dropdown
- Category filters (Proteins, Vegetables, Grains, etc.)
- Quick-add buttons for common items

**My Ingredients Grid:**
- 4-column grid on desktop, 2 on mobile
- Ingredient cards with small icons
- Remove button (X) in top-right corner
- Quantity badges (optional amounts)

## Component Library

### Recipe Cards
- Image fills top 65% of card
- Title, cooking time, difficulty on overlay (bottom section, blurred background)
- Nutrition summary icons (calories, protein) below image
- Heart icon for favorites (top-right)
- Match percentage badge (top-left, if applicable)

### Nutrition Display
- Circular or rectangular cards for macro display
- Large numerical value (calories, protein, carbs, fats)
- Small unit labels
- Horizontal progress bars for macro distribution
- Use semantic spacing (gap-4 between cards)

### Input Components
- Ingredient search: Full-width with rounded corners, shadow, search icon
- Filters: Chip-style toggle buttons in horizontal scroll
- Form fields: Standard height (h-12), consistent padding (px-4)
- Buttons: Medium size (px-6 py-3), rounded-lg

### Navigation
**Top Navigation:**
- Horizontal bar with logo left, navigation center, profile right
- Sticky on scroll
- Search icon that expands to full search bar on click (mobile)

**Bottom Tab Navigation (Mobile):**
- 4-5 tabs: Discover, My Ingredients, Favorites, Reminders, Profile
- Active state with icon fill and label

### Notification/Reminder Cards
- Compact card design with icon left, text center, action right
- Time indicator and category label
- Swipe-to-dismiss on mobile
- Bell icon with notification badge

## Icons
**Icon Library:** Heroicons (outline for inactive states, solid for active states)
- Navigation: home, collection, heart, bell, user
- Actions: plus, trash, search, filter, clock
- Recipe: fire (calories), scale (protein), leaf (healthy)

## Images Strategy

**Hero Images:**
- Large hero on home page: Vibrant fitness meal spread (grilled chicken, quinoa, vegetables)
- Recipe detail heroes: Individual dish hero shots, professionally photographed
- All hero images require gradient overlays for text readability

**Recipe Card Images:**
- 4:3 aspect ratio
- High-quality food photography
- Consistent styling (bright, appetizing, fitness-focused)

**Supplementary Images:**
- Ingredient icons (small, consistent style)
- Step-by-step cooking photos (optional, in instruction cards)
- Empty state illustrations (friendly, encouraging)

## Spacing & Rhythm
- Hero sections: py-16 to py-24
- Content sections: py-12 to py-16
- Card internal padding: p-4 to p-6
- Grid gaps: gap-6 on desktop, gap-4 on mobile
- Form field spacing: space-y-4

## Key Interactions
- Recipe card hover: Subtle lift (shadow increase), reveal nutrition overlay
- Ingredient chip: Click to remove with fade-out animation
- Checkbox completion: Scale animation on check
- Search: Smooth expand/collapse, instant results
- Favorite: Heart fill animation

## Accessibility
- Maintain 4.5:1 contrast ratio for all text
- Focus states: 2px outline with offset
- Touch targets: minimum 44x44px on mobile
- Semantic HTML for all form inputs
- ARIA labels for icon-only buttons
- Keyboard navigation support throughout

This design creates a visually rich, engagement-focused experience that balances the inspirational nature of recipe discovery with the data-driven needs of fitness enthusiasts.
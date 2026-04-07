
import type { Option, ControlSettings } from './types';

export const LIGHTING_OPTIONS: Option[] = [
  { value: "studio", label: "Studio", description: "Professional, controlled lighting with softboxes" },
  { value: "natural", label: "Natural", description: "Soft window light or bright outdoor illumination" },
  { value: "soft-diffused", label: "Soft Diffused", description: "Gentle, even lighting that minimizes shadows" },
  { value: "hard-dramatic", label: "Hard Dramatic", description: "Direct lighting creating sharp, defined shadows and high contrast" },
  { value: "chiaroscuro", label: "Chiaroscuro", description: "Extreme contrast between light and dark for a moody effect" },
  { value: "high-key", label: "High-Key", description: "Bright, airy lighting with minimal shadows for a clean, modern look" },
  { value: "low-key", label: "Low-Key", description: "Dark, dramatic shadows with selective highlights to create a moody atmosphere" },
  { value: "golden-hour", label: "Golden Hour", description: "Warm, soft, golden-hued lighting typical of sunrise or sunset" }
];

export const BACKGROUND_OPTIONS: Option[] = [
  { value: "white-seamless", label: "White Seamless", description: "A clean, crisp, infinity-style white background" },
  { value: "black-backdrop", label: "Black Backdrop", description: "A dramatic, deep black background to make the product pop" },
  { value: "marble-surface", label: "Marble Surface", description: "An elegant, luxurious marble tabletop or surface" },
  { value: "wooden-texture", label: "Wooden Texture", description: "A natural, rustic wood grain surface like a table or wall" },
  { value: "gradient", label: "Gradient", description: "A smooth transition between complementary colors" },
  { value: "lifestyle-setting", label: "Lifestyle Setting", description: "A realistic, in-context environment like a kitchen counter or a desk" },
  { value: "minimalist-concrete", label: "Minimalist Concrete", description: "A simple, modern, and textured concrete surface" }
];

export const MOCKUP_OPTIONS: Option[] = [
  { value: "flat-lay", label: "Flat-lay", description: "An overhead shot with the product laid flat on the surface" },
  { value: "on-model-lifestyle", label: "Lifestyle", description: "The product shown in use or in a realistic, styled scene" },
  { value: "product-showcase", label: "Showcase", description: "A heroic, isolated shot focusing on the product's key features" },
  { value: "catalog", label: "Catalog", description: "A clean, straightforward, informational product shot on a plain background" }
];

export const ASPECT_RATIO_OPTIONS: Option[] = [
  { value: "1:1", label: "1:1", description: "Square, perfect for Instagram feeds and social profiles" },
  { value: "16:9", label: "16:9", description: "Widescreen, great for website banners and video thumbnails" },
  { value: "4:5", label: "4:5", description: "Portrait, ideal for mobile-first viewing and Instagram stories" },
  { value: "3:2", label: "3:2", description: "Classic photography aspect ratio" }
];

export const INITIAL_SETTINGS: ControlSettings = {
    lighting: LIGHTING_OPTIONS[0],
    background: BACKGROUND_OPTIONS[0],
    mockup: MOCKUP_OPTIONS[0],
    aspectRatio: ASPECT_RATIO_OPTIONS[0]
};

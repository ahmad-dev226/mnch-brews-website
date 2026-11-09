export const instagramUrl = "https://www.instagram.com/mnchbrews/";

export const photos = [
  { src: "/images/MNCH1.jpeg", alt: "MNCH cans styled with a book and sunglasses" },
  { src: "/images/MNCH2.jpeg", alt: "An MNCH iced drink held against an everyday outfit" },
  { src: "/images/MNCH3.jpeg", alt: "A colorful MNCH drink alongside a meal" },
  { src: "/images/MNCH4.jpeg", alt: "MNCH drinks courtside under evening lights" },
  { src: "/images/MNCH5.jpeg", alt: "A layered MNCH drink with matcha, milk and strawberry" },
  { src: "/images/MNCH6.jpeg", alt: "A group of MNCH drinks at the court" },
] as const;

export const navigation = [
  { label: "HOME", href: "/" },
  { label: "OUR STORY", href: "/our-story" },
  { label: "MENU", href: "/menu" },
  { label: "GALLERY", href: "/gallery" },
  { label: "CONTACT", href: "/contact" },
] as const;

export const menuSections = [
  {
    category: "Chillers / Iced Teas",
    items: [
      { name: "Pomegranate Mojito", price: "PKR 800" },
      { name: "Mint Margarita", price: "PKR 800" },
      { name: "Strawberry Lemonade", price: "PKR 800" },
      { name: "Blue Lagoon", price: "PKR 800" },
      { name: "Peach Iced Tea", price: "PKR 800" },
      { name: "Lemon Iced Tea", price: "PKR 800" },
      { name: "Mixed Berry Iced Tea", price: "PKR 800" },
      { name: "Strawberry Chiller", price: "PKR 800" },
      { name: "Peach Chiller", price: "PKR 800" },
      { name: "Wild Berry Chiller", price: "PKR 800" },
    ],
  },
  {
    category: "Matcha",
    items: [
      { name: "Strawberry Matcha", price: "PKR 950" },
      { name: "Coconut Matcha", price: "PKR 950" },
      { name: "Mango Cloud Matcha", price: "PKR 950" },
    ],
  },
  {
    category: "House Special Savoury",
    items: [
      { name: "Super Stacked Smash Burger", price: "PKR 1100" },
      { name: "Chicken Sirarcha Burger", price: "PKR 800" },
      { name: "The OG Fried Chicken Burger", price: "PKR 800" },
      { name: "Katsu Crusted Sandwich", price: "PKR 700" },
      { name: "Beef Sirarcha Burger", price: "PKR 850" },
      { name: "Grilled Chicken Sandwich", price: "PKR 700" },
      { name: "Croissant Chicken Sandwich", price: "PKR 600" },
      { name: "Smash / Ultimate Loaded Fries", price: "PKR 800" },
    ],
  },
  {
    category: "Iced Coffee",
    items: [
      { name: "Latte", price: "PKR 850" },
      { name: "Vanilla Latte", price: "PKR 850" },
      { name: "Spanish Latte", price: "PKR 850" },
      { name: "Hazelnut Latte", price: "PKR 850" },
      { name: "Caramel Latte", price: "PKR 850" },
      { name: "Pumpkin Spice", price: "PKR 950" },
      { name: "Vanilla Madagascar", price: "PKR 950" },
      { name: "Tiramisu / San Sebastian", price: "PKR 950" },
      { name: "Butterscotch", price: "PKR 950" },
      { name: "Pistachio Latte", price: "PKR 1000" },
      { name: "Chocolate Frappe", price: "PKR 1000" },
      { name: "Hazelnut Frappe", price: "PKR 1000" },
      { name: "Cookies and Cream Shake", price: "PKR 1000" },
      { name: "Classic Cold Coffee", price: "PKR 1000" },
      { name: "Biscoff Cold Coffee", price: "PKR 1000" },
      { name: "Hazelnut Cold Coffee", price: "PKR 1000" },
      { name: "Vanilla Frappe", price: "PKR 1000" },
      { name: "Caramel Frappe", price: "PKR 1000" },
    ],
  },
  {
    category: "Mojitos",
    items: [
      { name: "Strawberry Lemonade", price: "PKR 800" },
      { name: "Green Apple & Kiwi Mojito", price: "PKR 800" },
      { name: "Passion Fruit & Wild Berry Mojito", price: "PKR 800" },
      { name: "Pineberry Mojito", price: "PKR 800" },
    ],
  },
] as const;

export const menuCategories = ["All", ...menuSections.map((section) => section.category)] as const;

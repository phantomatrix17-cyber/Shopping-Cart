export const menuItems = [
  {
    id: 1,
    name: "Chicken Piccata with Lemon Butter Pasta",
    description:
      "Pan-seared chicken breasts over creamy lemon butter pasta with fresh parsley.",
    price: 55.0,
    image:
      "/Images/15 Easy And Delicious Crockpot Recipes For Busy Weeknights - Thrive With Janie (1).jpg",
    quantity: 1,
    category: "food",
  },
  {
    id: 2,
    name: "Herb Grilled Chicken with Roasted Veggies",
    description:
      "Juicy sliced chicken with carrots and broccoli in a herb olive oil drizzle.",
    price: 48.0,
    image: "/Images/20-Minute Dinner Recipes for Busy Weeknights.jpg",
    quantity: 1,
    category: "food",
  },
  {
    id: 3,
    name: "Grilled Chicken Quinoa Bowl",
    description:
      "Grilled chicken with fluffy quinoa, roasted tomatoes and zucchini.",
    price: 50.0,
    image:
      "/Images/Balanced Meal Inspiration_ Grilled Chicken, Quinoa, and Veggies Delight.jpg",
    quantity: 1,
    category: "food",
  },
  {
    id: 4,
    name: "Chai Latte with Whipped Cream",
    description:
      "Spiced chai latte over ice, topped with whipped cream and cinnamon.",
    price: 12.0,
    image:
      "/Images/Chai Latte That Warms Your Senses Like Starbucks Fall Drinks 2026.jpg",
    quantity: 1,
    category: "drinks",
  },
  {
    id: 5,
    name: "Creamy Butter Chicken",
    description:
      "Tender chicken in a rich, creamy tomato butter sauce, served with warm naan.",
    price: 45.0,
    image: "/Images/Creamy Butter Chicken 🍛🍗.jpg",
    quantity: 1,
    category: "food",
  },
  {
    id: 6,
    name: "Caramel Whipped Frappe",
    description:
      "Blended caramel coffee frappe finished with whipped cream and caramel drizzle.",
    price: 15.0,
    image:
      "/Images/Creamy caramel coffee beverage topped with whipped cream and a green straw in a clear cup.jpg",
    quantity: 1,
    category: "drinks",
  },
  {
    id: 7,
    name: "Sunrise Fruit Cooler",
    description:
      "Refreshing layered fruit drink with orange and berry flavours over ice.",
    price: 10.0,
    image: "/Images/download (42).jpg",
    quantity: 1,
    category: "drinks",
  },
  {
    id: 8,
    name: "Caramel Swirl Milkshake",
    description: "Thick, creamy milkshake swirled with golden caramel sauce.",
    price: 14.0,
    image: "/Images/download (43).jpg",
    quantity: 1,
    category: "drinks",
  },
  {
    id: 9,
    name: "Iced Caramel Coffee",
    description: "Cold caramel coffee over ice with a sweet caramel drizzle.",
    price: 13.0,
    image: "/Images/download (44).jpg",
    quantity: 1,
    category: "drinks",
  },
  {
    id: 10,
    name: "Mutton Curry",
    description:
      "Slow-cooked mutton in a bold, spicy red curry with green chillies.",
    price: 60.0,
    image: "/Images/Mutton 20.jpg",
    quantity: 1,
    category: "food",
  },
  {
    id: 11,
    name: "Mutton Bhuna",
    description:
      "Mutton simmered in a thick, dark masala gravy rich with roasted spices.",
    price: 62.0,
    image: "/Images/Mutton bhuna.jpg",
    quantity: 1,
    category: "food",
  },
  {
    id: 12,
    name: "Malwani Chicken Curry",
    description:
      "Chicken pieces in a fiery Malwani-style curry with fresh coriander.",
    price: 46.0,
    image: "/Images/🍗Malwani Chicken Curry 🍗.jpg",
    quantity: 1,
    category: "food",
  },
  {
    id: 13,
    name: "Chicken Masaledar",
    description:
      "Aromatic chicken in a rich masala gravy with a perfect balance of heat and flavour.",
    price: 47.0,
    image: "/Images/Coconut Chicken Rice Bowl.jfif",
    quantity: 1,
    category: "food",
  },
  {
    id: 14,
    name: "High Protein Chicken Bowl",
    description:
      "Grilled chicken with rice, roasted sweet potato and broccoli in a creamy drizzle.",
    price: 44.0,
    image: "/Images/🥗 High Protein Lunch To Stay Full Longer 🔥.jpg",
    quantity: 1,
    category: "food",
  },
];

export function cart() {
  return JSON.parse(localStorage.getItem("cartKey")) || [];
}

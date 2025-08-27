import img1 from '../assets/images/img1.png';
import img2 from '../assets/images/img2.png';
import img3 from '../assets/images/img3.png';
import img4 from '../assets/images/img4.png';
import img5 from '../assets/images/img5.png';
import img6 from '../assets/images/img6.png';
import img7 from '../assets/images/img7.png';
import img8 from '../assets/images/img8.png';
import img9 from '../assets/images/img9.png';
import img10 from '../assets/images/img10.png';
import img11 from '../assets/images/img11.png';
import img12 from '../assets/images/img12.png';
import img13 from '../assets/images/img13.png';
import img14 from '../assets/images/img14.png';
import img15 from '../assets/images/img15.png';
import img16 from '../assets/images/img16.png';


const products = [
  {
    id: 1,
    name: "Hydrating shower gel",
    price: 7000,
    image: img1,
    description: "A lightweight hand and body lotion with amino acids that deeply cleanses dirt and pores...",
    howToUse:
      "Take a finger scoop of product after bath, rub smoothly and evenly...",
    reviews: [
      { user: "Sandra", text: "This moisturizer is amazing..." },
      { user: "Kelvin", text: "Really effective and smooth..." },
      { user: "Amie", text: "Cleared blemishes and hydrated skin..." },
    ],  
  },
  {
    id: 2,
    name: "Restoration body moisturizer",
    price: 5000,
    image: img2,
    description: "A lightweight hand and body lotion with amino acids that deeply cleanses dirt and pores...",
    howToUse:
      "Take a finger scoop of product after bath, rub smoothly and evenly...",
    reviews: [
      { user: "Sandra", text: "This moisturizer is amazing..." },
      { user: "Kelvin", text: "Really effective and smooth..." },
      { user: "Amie", text: "Cleared blemishes and hydrated skin..." },
    ],  
  },
  {
    id: 3,
    name: "Vit C-oil free",
    price: 10000,
    image: img3,
    description: "A lightweight hand and body lotion with amino acids that deeply cleanses dirt and pores...",
    howToUse:
      "Take a finger scoop of product after bath, rub smoothly and evenly...",
    reviews: [
      { user: "Sandra", text: "This moisturizer is amazing..." },
      { user: "Kelvin", text: "Really effective and smooth..." },
      { user: "Amie", text: "Cleared blemishes and hydrated skin..." },
    ],  
  },
  {
    id: 4,
    name: "Mosturizing hand/body lotion",
    price: 15000,
    image: img4,
    description: "A lightweight hand and body lotion with  amino  acids that deeply cleanses dirt and pores. The contents of ceramide, Amino Acid and White Trufflle keeps the skin moisturized and does not feel tight. Produces a smooth and soft surface on the hand and body with natural ingredients that are safe for skin barrier health. It comes in tubes (20m ) and containers (15ml)",
    howToUse:
      "TTake a finger scoop of product after bath, rub smoothly and evenly over the hand and repeat same and rub over the body, then leave to settle on applied  areas. Repeat morning and evening daily.",
    reviews: [
      { user: "Sandra", text: "ME moisturizer has been a game changer. After using it consistently for 3 weeks my dark spotS faded and i noticed instant skin glow " },
      { user: "Kettie", text: "ME moisturizer has been a game changer. After using it consistently for 3 weeks my dark spotS faded and i noticed instant skin glow " },
      { user: "jannoe", text: "ME moisturizer cleared blemishes  and reduced wrinkles on my  face after constant usage. It helped reduce my eyes bags ." },
    ],  
  },
  {
    id: 5,
    name: "Antibacterial hand lotion",
    price: 12000,
    image: img5,
    description: "A lightweight hand and body lotion with amino acids that deeply cleanses dirt and pores...",
    howToUse:
      "Take a finger scoop of product after bath, rub smoothly and evenly...",
    reviews: [
      { user: "Sandra", text: "This moisturizer is amazing..." },
      { user: "Kelvin", text: "Really effective and smooth..." },
      { user: "Amie", text: "Cleared blemishes and hydrated skin..." },
    ],  
  },
  {
    id: 6,
    name: "Toning face wash",
    price: 8000,
    image: img6,
    description: "A lightweight hand and body lotion with amino acids that deeply cleanses dirt and pores...",
    howToUse:
      "Take a finger scoop of product after bath, rub smoothly and evenly...",
    reviews: [
      { user: "Sandra", text: "This moisturizer is amazing..." },
      { user: "Kelvin", text: "Really effective and smooth..." },
      { user: "Amie", text: "Cleared blemishes and hydrated skin..." },
    ],  
  },
  {
    id: 7,
    name: "Conditioning shampo",
    price: 6000,
    image: img7,
    description: "A lightweight hand and body lotion with amino acids that deeply cleanses dirt and pores...",
    howToUse:
      "Take a finger scoop of product after bath, rub smoothly and evenly...",
    reviews: [
      { user: "Sandra", text: "This moisturizer is amazing..." },
      { user: "Kelvin", text: "Really effective and smooth..." },
      { user: "Amie", text: "Cleared blemishes and hydrated skin..." },
    ],  
  },
  {
    id: 8,
    name: "Pigmentation/Acne control oil",
    price: 11500,
    image: img8,
    description: "A lightweight hand and body lotion with amino acids that deeply cleanses dirt and pores...",
    howToUse:
      "Take a finger scoop of product after bath, rub smoothly and evenly...",
    reviews: [
      { user: "Sandra", text: "This moisturizer is amazing..." },
      { user: "Kelvin", text: "Really effective and smooth..." },
      { user: "Amie", text: "Cleared blemishes and hydrated skin..." },
    ],  
  },
  {
    id: 9,
    name: "Hydrating body wash",
    price: 12000,
    image: img9,
    description: "A lightweight hand and body lotion with amino acids that deeply cleanses dirt and pores...",
    howToUse:
      "Take a finger scoop of product after bath, rub smoothly and evenly...",
    reviews: [
      { user: "Sandra", text: "This moisturizer is amazing..." },
      { user: "Kelvin", text: "Really effective and smooth..." },
      { user: "Amie", text: "Cleared blemishes and hydrated skin..." },
    ],  
  },
  {
    id: 10,
    name: "Acne control face cream",
    price: 8000,
    image: img10,
    description: "Acne Control Face Cream is a lightweight, dermatologist-tested formula designed to target acne at the root while keeping your skin hydrated and balanced. Enriched with salicylic acid, tea tree extract, and niacinamide, it unclogs pores, reduces inflammation, and prevents future breakouts. Its non-greasy texture absorbs quickly, leaving your skin smooth, refreshed, and visibly clearer with consistent use.",
    howToUse:
      "Cleanse your face thoroughly with a mild facial cleanser. Apply a pea-sized amount of Acne Control Face Cream evenly to affected areas or all over the face. Gently massage until fully absorbed. Use twice daily (morning and evening) for best results. ⚠️ Tip: Apply sunscreen during the day, as active ingredients may increase skin sensitivity to the sun.",
    reviews: [
      { user: "skinlover23", text: "This cream worked wonders on my breakout areas within just a week. My skin feels smoother and less oily. A little strong at first, but it really controls acne well!" },
      { user: "glowwithtolu", text: "I’ve tried so many acne creams, but this one is the best. No greasy feel, absorbs quickly, and my pimples are finally under control. Highly recommend!" },
      { user: "joshua_98", text: "I like how light it feels on my skin. My acne spots are fading slowly but surely. The only downside is the strong herbal scent, but it’s worth it." },
    ],  
  },
  {
    id: 11,
    name: "Vit C-oil",
    price: 6000,
    image: img11,
    description: "A lightweight hand and body lotion with amino acids that deeply cleanses dirt and pores...",
    howToUse:
      "Take a finger scoop of product after bath, rub smoothly and evenly...",
    reviews: [
      { user: "Sandra", text: "This moisturizer is amazing..." },
      { user: "Kelvin", text: "Really effective and smooth..." },
      { user: "Amie", text: "Cleared blemishes and hydrated skin..." },
    ],  
  },
  {
    id: 12,
    name: "wrinkle-free beauty water",
    price: 11500,
    image: img12,
    description: "A lightweight hand and body lotion with amino acids that deeply cleanses dirt and pores...",
    howToUse:
      "Take a finger scoop of product after bath, rub smoothly and evenly...",
    reviews: [
      { user: "Sandra", text: "This moisturizer is amazing..." },
      { user: "Kelvin", text: "Really effective and smooth..." },
      { user: "Amie", text: "Cleared blemishes and hydrated skin..." },
    ],  
  },
  {
    id: 13,
    name: "Ageless beauty water",
    price: 12000,
    image: img13,
    description: "A lightweight hand and body lotion with amino acids that deeply cleanses dirt and pores...",
    howToUse:
      "Take a finger scoop of product after bath, rub smoothly and evenly...",
    reviews: [
      { user: "Sandra", text: "This moisturizer is amazing..." },
      { user: "Kelvin", text: "Really effective and smooth..." },
      { user: "Amie", text: "Cleared blemishes and hydrated skin..." },
    ],  
  },
  {
    id: 14,
    name: "skin toning body oil",
    price: 8000,
    image: img14,
    description: "A lightweight hand and body lotion with amino acids that deeply cleanses dirt and pores...",
    howToUse:
      "Take a finger scoop of product after bath, rub smoothly and evenly...",
    reviews: [
      { user: "Sandra", text: "This moisturizer is amazing..." },
      { user: "Kelvin", text: "Really effective and smooth..." },
      { user: "Amie", text: "Cleared blemishes and hydrated skin..." },
    ],  
  },
  {
    id: 15,
    name: "Hand and body lotion set",
    price: 20000,
    image: img15,
    description: "A lightweight hand and body lotion with amino acids that deeply cleanses dirt and pores...",
    howToUse:
      "Take a finger scoop of product after bath, rub smoothly and evenly...",
    reviews: [
      { user: "Sandra", text: "This moisturizer is amazing..." },
      { user: "Kelvin", text: "Really effective and smooth..." },
      { user: "Amie", text: "Cleared blemishes and hydrated skin..." },
    ],  
  },
  {
    id: 16,
    name: "Facial cleanser",
    price: 11500,
    image: img16,
    description: "A lightweight hand and body lotion with amino acids that deeply cleanses dirt and pores...",
    howToUse:
      "Take a finger scoop of product after bath, rub smoothly and evenly...",
    reviews: [
      { user: "Sandra", text: "This moisturizer is amazing..." },
      { user: "Kelvin", text: "Really effective and smooth..." },
      { user: "Amie", text: "Cleared blemishes and hydrated skin..." },
    ],  
  },
  
];

export default products;
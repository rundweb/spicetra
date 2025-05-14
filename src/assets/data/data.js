const menuItem = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Process", href: "/process" },
  { name: "Contact", href: "/contact" },
];

import slide1 from "../images/spicetra_12.jpg";
import slide2 from "../images/spicetra_7.jpg";
import slide3 from "../images/spicetra_1.jpg";

const heroSlides = [
  {
    title: "Explore the Richness of Indonesia's Finest Spices",
    subtitle:
      "Delivering handpicked, aromatic spices from the heart of the archipelago to the global market.",
    image: slide1, // saran: close-up rempah-rempah tradisional
  },
  {
    title: "Premium Seafood, Straight from the Ocean to the World",
    subtitle:
      "Fresh-caught tropical seafood, processed with international standards and ready for export.",
    image: slide2, // saran: hasil laut segar di tempat pengepakan ekspor
  },
  {
    title: "Your Trusted Export Partner for Spices & Seafood",
    subtitle:
      "Connecting quality Indonesian products to international markets with professionalism and care.",
    image: slide3, // saran: pelabuhan, kontainer, atau aktivitas ekspor
  },
];

import {
  RiShipLine,
  RiLeafLine,
  RiSecurePaymentLine,
  RiGlobalLine,
  RiCustomerService2Line,
} from "react-icons/ri";

// images
import service1 from '../images/spicetra_6.jpg'
import service2 from '../images/spicetra_8.jpg'
import service3 from '../images/spicetra_5.jpg'
import service4 from '../images/spicetra_10.jpg'
import service5 from '../images/spicetra_13.jpg'

const services = [
  {
    title: "Export Logistics",
    description:
      "Efficient and reliable shipping solutions for global delivery.",
    icon: RiShipLine,
    image: service1,
  },
  {
    title: "Quality Control",
    description: "Strict quality checks to ensure premium spices and seafood.",
    icon: RiLeafLine,
    image: service2,
  },
  {
    title: "Secure Transactions",
    description: "Safe and transparent international trade processes.",
    icon: RiSecurePaymentLine,
    image: service3,
  },
  {
    title: "Global Reach",
    description: "Serving clients across Asia, Europe, and the Americas.",
    icon: RiGlobalLine,
    image: service4,
  },
  {
    title: "24/7 Support",
    description: "Dedicated customer service for all your export needs.",
    icon: RiCustomerService2Line,
    image: service5,
  },
];

// icons
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const info = [
  {
    icon: FiPhone,
    value: "+62 812-3456-7890",
  },
  {
    icon: FiMail,
    value: "info@spicetra.com",
  },
  {
    icon: FiMapPin,
    value: "Jl. Rempah No. 27, Jakarta, Indonesia",
  },
];

// icons
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const social = [
  {
    icon: FaFacebookF,
    title: "Facebook",
  },
  {
    icon: FaTwitter,
    title: "Twitter",
  },
  {
    icon: FaInstagram,
    title: "Instagram",
  },
  {
    icon: FaLinkedinIn,
    title: "LinkedIn",
  },
];


const features = [
  "Direct sourcing from certified local producers",
  "Strict quality control and packaging standards",
  "Export-ready logistics with global reach",
  "Customer-first approach with long-term collaboration",
];

import { FaLeaf, FaFish, FaSnowflake } from "react-icons/fa";
import { GiJasmine , GiHerbsBundle, GiFishCooked } from "react-icons/gi";

const categories = [
  {
    title: "Whole Spices",
    icon: GiJasmine,
    description: "High-quality whole spices like black pepper, cloves, and cinnamon.",
    href: "/category/whole-spices",
    qty: 24
  },
  {
    title: "Ground Spices",
    icon: FaLeaf,
    description: "Finely ground spices such as turmeric, ginger, and chili powder.",
    href: "/category/ground-spices",
    qty: 18
  },
  {
    title: "Herbs & Leaves",
    icon: GiHerbsBundle,
    description: "Dried herbs and leaves like bay leaf, lemongrass, and kaffir lime leaf.",
    href: "/category/herbs-leaves",
    qty: 15
  },
  {
    title: "Fresh Seafood",
    icon: FaFish,
    description: "Freshly caught fish, shrimp, and squid from trusted local fishermen.",
    href: "/category/fresh-seafood",
    qty: 30
  },
  {
    title: "Frozen Seafood",
    icon: FaSnowflake,
    description: "Frozen seafood products with preserved freshness and quality.",
    href: "/category/frozen-seafood",
    qty: 22
  },
  {
    title: "Dried Seafood",
    icon: GiFishCooked,
    description: "Sun-dried fish, dried squid, and other long-lasting seafood items.",
    href: "/category/dried-seafood",
    qty: 17
  }
];

// images
import product1 from "../images/01-540x496.jpg";
import product2 from "../images/02-540x496.jpg";
import product3 from "../images/03-540x496.jpg";
import product4 from "../images/04-540x496.jpg";
import product5 from "../images/06-540x496.jpg";
import product6 from "../images/07-540x496.jpg";
import product7 from "../images/08-540x496.jpg";
import product8 from "../images/09-540x496.jpg";


const products = [
  {
    id: 1,
    name: "Premium Grade Organic Cinnamon Sticks",
    price: "$10",
    oldPrice: "$15",
    image: product1,
    category: "featured",
  },
  {
    id: 2,
    name: "High Quality Black Pepper Seeds - Whole",
    price: "$12",
    oldPrice: "$16",
    image: product2,
    category: "best-seller",
  },
  {
    id: 3,
    name: "Natural Sun-Dried Nutmeg from Indonesia",
    price: "$14",
    oldPrice: "$18",
    image: product3,
    category: "populer",
  },
  {
    id: 4,
    name: "Handpicked Aromatic Cloves - Export Quality",
    price: "$11",
    oldPrice: "$13",
    image: product4,
    category: "featured",
  },
  {
    id: 5,
    name: "Grade A Turmeric Powder - Freshly Ground",
    price: "$9",
    oldPrice: "$12",
    image: product5,
    category: "best-seller",
  },
  {
    id: 6,
    name: "Dried Ginger Slices - All Natural Export Quality",
    price: "$13",
    oldPrice: "$17",
    image: product6,
    category: "populer",
  },
  {
    id: 7,
    name: "Whole Dried Cardamom Pods - Fragrant & Rich",
    price: "$18",
    oldPrice: "$22",
    image: product7,
    category: "featured",
  },
  {
    id: 8,
    name: "Fresh Mace Spice - Hand-Harvested in Indonesia",
    price: "$16",
    oldPrice: "$20",
    image: product8,
    category: "best-seller",
  },
];

import { FaShippingFast, FaCertificate, FaHandshake } from "react-icons/fa";

const whyChooseUs = [
  {
    icon: service1,
    title: "100% Natural & Organic",
    description: "Pure products with no additives or preservatives.",
  },
  {
    icon: service2,
    title: "Reliable Global Shipping",
    description: "On-time delivery to worldwide destinations in the world.",
  },
  {
    icon: service3,
    title: "Certified Quality Standards",
    description: "HACCP, ISO, and FDA certified handling for spicetra.",
  },
  {
    icon: service4,
    title: "Trusted by Global Clients",
    description: "Preferred by global partners and culinary brands.",
  },
];


export { menuItem, heroSlides, services,info,social,features,categories,products,whyChooseUs };

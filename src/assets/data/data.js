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




export { menuItem, heroSlides, services,info,social,features,categories };

import account from "./account.png";
import cart from "./cart.png";
import heart from "./heart.png";
import search from "./search.png";
import cover from "./cover.png";
import living from "./living.jpg";
import dining from "./dining.jpg";
import bedroom from "./bedroom.jpg";
import accent_chair from "./accent_chair.jpg";
import bar_stool from "./bar_stool.jpg";
import bed_frame from "./bed_frame.jpg";
import book_shelf from "./book_shelf.jpg";
import coffee_table from "./coffee_table.jpg";
import mordern_sofa from "./mordern_sofa.jpg";
import night_stand from "./night_stand.jpg";
import office_desk from "./office_desk.jpg";
import tv_console from "./tv_console.jpg";
import wooden_dining_table from "./wooden_dining_table.jpg";
import shop_cover from "./shop_cover.jpg";
import right_arrow from "./right_arrow.png";
import grid from "./grid.png";
import filter from "./filter.png";
import list from "./list.png";
import award from "./award.png";
import verify from "./verify.png";
import delivery from "./delivery.png";
import service from "./service.png";
import clock from "./clock.png";
import location from "./location.png";
import phone from "./phone.png";
import close from "./close.png";
import trash from "./trash.png";
import menu from "./menu.png";

export const assets = {
  account,
  cart,
  heart,
  search,
  cover,
  living,
  dining,
  bedroom,
  accent_chair,
  bar_stool,
  bed_frame,
  book_shelf,
  coffee_table,
  mordern_sofa,
  night_stand,
  office_desk,
  tv_console,
  wooden_dining_table,
  shop_cover,
  right_arrow,
  filter,
  grid,
  list,
  service,
  award,
  verify,
  delivery,
  clock,
  location,
  phone,
  close,
  trash,
  menu,
};

export const products = [
  {
    id: 1,
    name: "Modern Sofa",
    subName: "3-Seater Comfort",
    description:
      "A modern 3-seater with premium fabric and sturdy wooden frame.",
    new: true,
    price: 499.99,
    size: "200x90x85 cm",
    category: "Living Room",
    img: mordern_sofa,
  },
  {
    id: 2,
    name: "Wooden Dining Table",
    subName: "6-Seater Classic",
    description: "Solid oak wood dining table perfect for family meals.",
    new: false,
    price: 699.99,
    size: "180x90x75 cm",
    category: "Dining",
    img: wooden_dining_table,
  },
  {
    id: 3,
    name: "Accent Chair",
    subName: "Velvet Finish",
    description:
      "Add a touch of elegance with this velvet-upholstered accent chair.",
    new: true,
    price: 199.99,
    size: "75x75x90 cm",
    category: "Living Room",
    img: accent_chair,
  },
  {
    id: 4,
    name: "Bed Frame",
    subName: "Queen Size",
    description: "Minimalist queen-sized bed frame with headboard and storage.",
    new: false,
    price: 899.99,
    size: "210x160x100 cm",
    category: "Bedroom",
    img: bed_frame,
  },
  {
    id: 5,
    name: "Office Desk",
    subName: "Ergo Wood",
    description:
      "Spacious wooden desk with ergonomic design and cable management.",
    new: true,
    price: 349.99,
    size: "140x70x75 cm",
    category: "Office",
    img: office_desk,
  },
  {
    id: 6,
    name: "Bookshelf",
    subName: "5-Tier Open",
    description: "Open-design metal & wood bookshelf for modern interiors.",
    new: false,
    price: 149.99,
    size: "80x30x180 cm",
    category: "Storage",
    img: book_shelf,
  },
  {
    id: 7,
    name: "Coffee Table",
    subName: "Round Walnut",
    description:
      "Stylish round coffee table with walnut wood top and metal legs.",
    new: false,
    price: 129.99,
    size: "90x90x45 cm",
    category: "Living Room",
    img: coffee_table,
  },
  {
    id: 8,
    name: "Nightstand",
    subName: "2-Drawer Minimal",
    description: "Compact and modern nightstand with two drawers for storage.",
    new: true,
    price: 89.99,
    size: "50x40x55 cm",
    category: "Bedroom",
    img: night_stand,
  },
  {
    id: 9,
    name: "TV Console",
    subName: "Wood & Metal",
    description:
      "Contemporary TV console with cable holes and storage shelves.",
    new: false,
    price: 279.99,
    size: "160x40x55 cm",
    category: "Living Room",
    img: tv_console,
  },
  {
    id: 10,
    name: "Bar Stool",
    subName: "Adjustable Swivel",
    description:
      "Stylish bar stool with adjustable height and footrest support.",
    new: true,
    price: 109.99,
    size: "40x40x90 cm",
    category: "Dining",
    img: bar_stool,
  },
];

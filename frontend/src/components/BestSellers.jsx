import React from "react";
import { Star, Heart, ShoppingCart } from "lucide-react";
import Chair from "../assets/chair.jpg";
import Clock from "../assets/clock.jpg";
import Light from "../assets/light.jpeg";
import Pillow from "../assets/pillow.jpg";
import Table from "../assets/Table.jpg";
import { toast } from "react-hot-toast";

const products = [
  {
    id: 1,
    name: "Scandia Lounge Chair",
    price: "200000",
    offerPrice: "170000",
    image: Chair,
    rating: 5,
    discount: "15% OFF"
  },
  {
    id: 2,
    name: "Artisan Coffee Table",
    price: "150000",
    offerPrice: "120000",
    image: Table,
    rating: 5,
    discount: "10% OFF"
  },
  {
    id: 3,
    name: "Nordic Pendant Light",
    price: "2000",
    offerPrice: "1500",
    image: Light,
    rating: 4,
    discount: "5% OFF"
  },
  {
    id: 4,
    name: "Velvet Accent Pillow",
    price: "500",
    offerPrice: "400",
    image: Pillow,
    rating: 4,
    discount: "NEW"
  },
  {
    id: 5,
    name: "Minimalist Wall Clock",
    price: "4000",
    offerPrice: "3500",
    image: Clock,
    rating: 5,
    discount: "20% OFF"
  },
];

const ProductCard = ({ name, price, image, rating, discount, offerPrice }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
      <div className="relative">
        <img src={image} alt={name} className="w-full h-64 object-cover object-center" />
        
        {discount && (
          <div className="absolute top-3 left-3 bg-tertiary text-white text-xs font-bold px-2 py-1 rounded">
            {discount}
          </div>
        )}
        
        <button className="absolute top-3 right-3 p-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-100">
          <Heart size={18} className="text-gray-600" />
        </button>
        
        <div className="absolute inset-0 bg-black/90 bg-opacity-20 opacity-0 group-hover:opacity-90 transition-opacity flex items-center justify-center">
          <button onClick={()=> toast.success('Add to Cart')} className="bg-white text-fortext px-4 py-2 rounded-lg font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform hover:bg-primary hover:text-white flex items-center gap-2">
            <ShoppingCart size={16} />
            Add to Cart
          </button>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-center mb-2">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
          ))}
        </div>
        <h3 className="text-gray-800 font-medium mb-1 text-lg">{name}</h3>
        <p className="text-gray-500  text-decoration-line: line-through decoration-gray-500 decoration-1">Nrs. {price}</p>
        <p className="text-primary font-bold">Nrs. {offerPrice}</p>
      </div>
    </div>
  );
};

const BestSellers = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Best Sellers</h2>
            <p className="text-gray-600 mt-2">Our most popular items loved by customers</p>
          </div>
          <a href="/shop" className="hidden md:inline-flex items-center text-primary font-medium hover:text-tertiary">
            View All Products
          </a>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        
        <div className="mt-10 text-center md:hidden">
          <a href="/shop" className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-tertiary transition-colors font-medium">
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
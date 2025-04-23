import React, { useState } from "react";
import { Star, Heart, ShoppingCart, Plus, Minus, Trash2 } from "lucide-react";
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
    price: "20000",
    offerPrice: "17000",
    image: Chair,
    rating: 5,
    discount: "15% OFF"
  },
  {
    id: 2,
    name: "Artisan Coffee Table",
    price: "15000",
    offerPrice: "12000",
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

const ProductCard = ({ id, name, price, image, rating, discount, offerPrice, cartItems, setCartItems, wishlist, setWishlist }) => {
  const isInCart = cartItems.some(item => item.id === id);
  const isInWishlist = wishlist.includes(id);
  
  const cartItem = cartItems.find(item => item.id === id);
  const quantity = cartItem ? cartItem.quantity : 0;
  
  const handleAddToCart = () => {
    if (isInCart) {
      // Increase quantity
      const updatedCart = cartItems.map(item => 
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCart);
      toast.success(`Added another ${name} to cart`);
    } else {
      // Add new item
      setCartItems([...cartItems, { id, name, price: offerPrice, image, quantity: 1 }]);
      toast.success(`${name} added to cart`);
    }
  };
  
  const handleRemoveFromCart = () => {
    setCartItems(cartItems.filter(item => item.id !== id));
    toast.error(`${name} removed from cart`);
  };
  
  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      const updatedCart = cartItems.map(item => 
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      );
      setCartItems(updatedCart);
      toast.success(`Reduced ${name} quantity`);
      toast(`Reduced ${name} quantity`, {
        icon: '🗑️',
      });
    } else {
      handleRemoveFromCart();
    }
  };
  
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
      <div className="relative">
        <img src={image} alt={name} className="w-full h-64 object-cover object-center" />
        
        {discount && (
          <div className="absolute top-3 left-3 bg-tertiary text-white text-xs font-bold px-2 py-1 rounded">
            {discount}
          </div>
        )}
        
        <div className="absolute inset-0 bg-black/90 bg-opacity-20 opacity-0 group-hover:opacity-90 transition-opacity flex items-center justify-center">
          {!isInCart ? (
            <button 
              onClick={handleAddToCart} 
              className="bg-white text-fortext px-4 py-2 rounded-lg font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform hover:bg-primary hover:text-white flex items-center gap-2"
            >
              <ShoppingCart size={16} />
              Add to Cart
            </button>
          ) : (
            <div className="flex flex-col gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
              <div className="flex items-center gap-3 bg-white rounded-lg overflow-hidden">
                <button 
                  onClick={handleDecreaseQuantity}
                  className="p-2 hover:bg-gray-100"
                >
                  <Minus size={16} className="text-gray-600" />
                </button>
                <span className="px-4 py-1 font-medium">{quantity}</span>
                <button 
                  onClick={handleAddToCart}
                  className="p-2 hover:bg-gray-100"
                >
                  <Plus size={16} className="text-gray-600" />
                </button>
              </div>
              <button 
                onClick={handleRemoveFromCart}
                className="bg-red-500 text-white px-4 py-2 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-red-600"
              >
                <Trash2 size={16} />
                Remove
              </button>
            </div>
          )}
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-center mb-2">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
          ))}
        </div>
        <h3 className="text-gray-800 font-medium mb-1 text-lg">{name}</h3>
        <p className="text-gray-500 line-through decoration-gray-500 decoration-1">Nrs. {price}</p>
        <p className="text-primary font-bold">Nrs. {offerPrice}</p>

        {isInCart && (
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center border rounded overflow-hidden">
              <button 
                onClick={handleDecreaseQuantity}
                className="px-2 py-1 hover:bg-gray-100"
              >
                <Minus size={14} />
              </button>
              <span className="px-3">{quantity}</span>
              <button 
                onClick={handleAddToCart}
                className="px-2 py-1 hover:bg-gray-100"
              >
                <Plus size={14} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const BestSellers = () => {
  const [cartItems, setCartItems] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cartItems.reduce((total, item) => total + (parseInt(item.price) * item.quantity), 0);
  
  return (
    <section className="py-16 bg-secondary">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between gap-10 items-center mb-10">
          <div>
            <h2 className="text-4xl font-bold text-fortext">Best <span className="text-primary">Sellers</span></h2>
            <p className="text-gray-600 mt-2">Our most popular items loved by customers</p>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative">
            </div>
            <div className="relative">
              <button className="p-2 rounded-full bg-white shadow hover:bg-gray-50">
                <ShoppingCart size={20} className="text-gray-700" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {cartItemCount}
                  </span>
                )}
              </button>
            </div>
            <a href="/shop" className="hidden md:inline-flex items-center text-primary font-medium hover:text-tertiary">
              View All Products
            </a>
          </div>
        </div>
        
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {products.map((product) => (
            <ProductCard 
              key={product.id} 
              {...product} 
              cartItems={cartItems} 
              setCartItems={setCartItems}
              wishlist={wishlist}
              setWishlist={setWishlist}
            />
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
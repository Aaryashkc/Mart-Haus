import React, { useState, useEffect } from 'react';
import { ShoppingBag, Sparkles, Flame, ChevronRight } from 'lucide-react';
import Image from '../assets/06.jpg';

export default function Banner() {
  const [isHovering, setIsHovering] = useState(false);
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => (prev + 1) % 100);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-primary/10 py-6 px-4 relative overflow-hidden ">     
      <div className='max-w-[80%] h-[50%] mx-auto '>        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-4">
    
          <div className="md:w-3/5 space-y-6">
            <div className="relative">
   
              <div className="absolute -top-6 -left-2 bg-tertiary text-white px-3 py-1 text-sm font-bold transform -rotate-3 shadow-md">
                LIMITED TIME
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black text-[#3b3b3b]">
                <span className="text-primary inline-block animate-pulse">HOT</span> 
                <span className="relative">
                  DEALS
                  <span className="absolute -top-6 right-0 text-tertiary">
                    <Flame size={24} className="animate-bounce" />
                  </span>
                </span>
              </h1>
              
              <div className="h-2 w-32 bg-gradient-to-r from-primary to-tertiary mt-2 rounded-full"></div>
            </div>
            
            <p className="text-xl text-[#3b3b3b] font-medium">
              <span className="font-bold text-tertiary text-2xl inline-flex items-center">
                20% OFF 
                <Sparkles size={16} className="ml-1 text-primary" />
              </span>
              <span className="block mt-1">on all premium products. Limited time offer.</span>
            </p>

            {/* Interactive button with hover effect */}
            <div 
              className="relative flex"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <button className="flex items-center gap-2 bg-primary text-white font-bold py-4 px-8 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 group">
                <ShoppingBag size={20} className="group-hover:scale-110 transition-transform" />
                SHOP NOW
              </button>
              <button className="flex items-center gap-2 ml-10 bg-secondary border-1 text-fortext font-bold py-4 px-8 rounded-md hover:shadow-xl transition-all duration-300 group">
                Explore more
                <ChevronRight size={20} className={`transition-transform duration-300 ${isHovering ? 'translate-x-1' : ''}`} />
              </button>
              <div className="absolute -bottom-2 -right-2 w-full h-full bg-primary rounded-md -z-10"></div>
            </div>
            

          </div>
          
          {/* Right side - dynamic product display */}
          <div className="md:w-2/5">
            <div className="relative overflow-hidden rounded-lg transform hover:scale-105 transition-all duration-500 hover:rotate-1">
              {/* Sale badge */}
              <div className="absolute -top-1 -right-1 z-10">
                <div className="bg-tertiary text-white px-4 py-4 rounded-full font-bold shadow-lg transform rotate-12 flex items-center justify-center">
                  <div className="text-center transform -rotate-12">
                    <div className="text-sm">SAVE</div>
                    <div className="text-xl font-black">20%</div>
                  </div>
                </div>
              </div>
              
              {/* Product image with overlay */}
              <div className="relative  w-[90%] h-[80%] mx-auto overflow-hidden shadow-lg">
                <img 
                  src={Image} 
                  alt="Featured products" 
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent"></div>
                
                {/* Floating sparkles */}
                <div className="absolute top-1/4 left-1/4 text-primary animate-ping">
                  <Sparkles size={16} />
                </div>
                <div className="absolute bottom-1/3 right-1/3 text-white animate-pulse">
                  <Sparkles size={20} />
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


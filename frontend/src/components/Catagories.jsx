import React from 'react';
import { Home, Sofa, CookingPot, Lamp, Bed, Book } from 'lucide-react';

const Categories = () => {
  const categoryItems = [
    {
      icon: <Sofa className="w-8 h-8 text-primary" />,
      title: "Living Room",
      description: "Stylish furniture and decor",
    },
    {
      icon: <CookingPot className="w-8 h-8 text-primary" />,
      title: "Kitchen",
      description: "Modern appliances and essentials",
    },
    {
      icon: <Bed className="w-8 h-8 text-primary" />,
      title: "Bedroom",
      description: "Comfortable and elegant designs",
    },
    {
      icon: <Home className="w-8 h-8 text-primary" />,
      title: "Home Office",
      description: "Productive workspace solutions",
    },
    {
      icon: <Lamp className="w-8 h-8 text-primary" />,
      title: "Lighting",
      description: "Illuminating fixtures and lamps",
    },
    {
      icon: <Book className="w-8 h-8 text-primary" />,
      title: "Accessories",
      description: "Finishing touches for any space",
    },
  ];

  return (
    <section className="py-16 bg-secondary text-fortext">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-4">Shop by <span className="text-primary">Category</span></h2>
          <p className="text-fortext max-w-2xl mx-auto">
            Explore our carefully curated collection of premium home furnishings and décor
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
          {categoryItems.map((category, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-xl p-5 shadow-md hover:shadow-lg hover:bg-white transition-all duration-300 cursor-pointer border border-gray-100 hover:border-primary/20 h-full"
            >
              <div className="flex justify-center mb-3">
                <div className="p-3 bg-primary/10 rounded-full">
                  {category.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-center text-gray-800 mb-1">{category.title}</h3>
              <p className="text-sm text-center text-gray-600">{category.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <a href="/collections" className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-tertiary transition-colors font-medium">
            View All Collections
          </a>
        </div>
      </div>
    </section>
  );
};

export default Categories;
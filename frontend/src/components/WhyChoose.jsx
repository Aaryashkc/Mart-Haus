import React from "react";
import { Truck, ShieldCheck, Package, HeadphonesIcon } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Truck className="w-10 h-10 text-primary" />,
      title: "Express Delivery",
      description: "Free shipping on orders over $50 with 2-3 day delivery across the country.",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-primary" />,
      title: "Secure Shopping",
      description: "Bank-level encryption and multiple payment options for worry-free transactions.",
    },
    {
      icon: <Package className="w-10 h-10 text-primary" />,
      title: "Premium Selection",
      description: "Curated collection of high-quality products from trusted global brands.",
    },
    {
      icon: <HeadphonesIcon className="w-10 h-10 text-primary" />,
      title: "Expert Support",
      description: "Our dedicated team is available 24/7 to answer your questions and solve issues.",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Why Shop with <span className="text-primary">Mart Haus</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We're committed to providing an exceptional shopping experience with quality products,
            reliable service, and customer satisfaction at the core of everything we do.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className="bg-primary/10 p-3 inline-flex rounded-lg mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
              <p className="text-fortext">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
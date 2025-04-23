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
    <section>
    <div className="py-16 bg-secondary text-fortext">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Why Shop with <span className="text-primary">Mart Haus</span>
          </h2>
          <p className="text-gray-600 max-w-4xl mx-auto text-lg">
            We're committed to providing an exceptional shopping experience with quality products,
            reliable service, and customer satisfaction at the core of everything we do.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, idx) => (
            <div 
              key={idx}
              className="bg-secondary rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className="bg-primary/10 p-3 inline-flex rounded-lg mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-fortext">{feature.title}</h3>
              <p className="text-fortext">{feature.description}</p>
            </div>
          ))}
        </div>
        
      </div>
    </div>
              {/* FAQ Section */}
     <div className="py-16 bg-gray-50">
     <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-fortext text-center mb-10">Frequently Asked <span className="text-primary">Questions</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-secondary p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold text-fortext mb-2">What are your delivery options?</h3>
              <p className="text-gray-600">We offer standard delivery (3-5 business days) and express delivery (1-2 business days) throughout Nepal. International shipping is available to select countries.</p>
            </div>
            
            <div className="bg-secondary p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold text-fortext mb-2">How can I track my order?</h3>
              <p className="text-gray-600">Once your order is shipped, you'll receive a tracking number via email. You can use this number to track your package on our website or the courier's website.</p>
            </div>
            
            <div className="bg-secondary p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold text-fortext mb-2">What is your return policy?</h3>
              <p className="text-gray-600">We accept returns within 14 days of delivery. Items must be unused, undamaged, and in their original packaging. Please contact our customer service to initiate a return.</p>
            </div>
            
            <div className="bg-secondary p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold text-fortext mb-2">Do you offer assembly services?</h3>
              <p className="text-gray-600">Yes, we offer professional assembly services for an additional fee. You can select this option during checkout or contact our customer service team for more information.</p>
            </div>
          </div>
        </div>  
      </div> 
    </section>
  );
};

export default WhyChooseUs;
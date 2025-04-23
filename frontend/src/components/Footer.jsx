import React from 'react'
import Logo from "../assets/logo.png"; 


const Footer = () => {
  const linkSections = [
    {
        title: "Quick Links",
        links: [
            { name: "Home", url: "/" },
            { name: "Best Sellers", url: "/products" },
            { name: "Offers & Deals", url: "/offersdeals" },
            { name: "Contact Us", url: "/contact" },
            { name: "FAQs", url: "/faqs" }
        ]
          },
          {
              title: "Need Help?",
              links: [
                  { name: "Delivery Information", url: "/deliveryInformation" },
                  { name: "Return & Refund Policy", url: "/returnsRefunds" },
                  { name: "Payment Methods", url: "/paymentMethods" },
                  { name: "Track your Order", url: "/trackorder" },
                  { name: "Contact Us", url: "/contact" }
              ]
          },
          {
              title: "Follow Us",
              links: [
                  { name: "Instagram", url: "https://instagram.com" },
                  { name: "Twitter", url: "https://twitter.com" },
                  { name: "Facebook", url: "https://facebook.com" },
                  { name: "YouTube", url: "https://youtube.com" }
              ]
          }
      ];

  return (
      <div className="px-6 md:px-16 lg:px-24 xl:px-32 border-t border-gray-200 bg-secondary text-fortext">
          <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500">
              <div>
                  <img className="w-34 md:w-32" src={Logo} alt="dummyLogoColored" />
                  <p className="max-w-[410px] mt-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum unde quaerat eveniet cumque accusamus atque qui error quo enim fugiat?</p>
              </div>
              <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
                  {linkSections.map((section, index) => (
                      <div key={index}>
                          <h3 className="font-semibold text-base text-tertiary md:mb-5 mb-2">{section.title}</h3>
                          <ul className="text-sm space-y-1">
                              {section.links.map((link, i) => (
                                  <li key={i}>
                                      <a href={link.url} className="hover:underline transition">{link.name}</a>
                                  </li>
                              ))}
                          </ul>
                      </div>
                  ))}
              </div>
          </div>
          <p className="py-4 text-center text-sm md:text-base text-gray-500/80">
              Copyright {new Date().getFullYear()} © Mart Haus All Right Reserved.
          </p>
      </div>
  );
};

export default Footer

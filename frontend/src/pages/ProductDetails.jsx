import { Star } from 'lucide-react';
import React from 'react'
import { Link } from 'react-router-dom';

const ProductDetails = () => {

  const product = {
      name: "Casual Shoes",
      category: "Sports",
      price: 3000,
      offerPrice: 2000,
      rating: 4,
      images: [
          "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage.png",
          "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage2.png",
          "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage3.png",
          "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage4.png"
      ],
      description: [
          "High-quality material",
          "Comfortable for everyday use",
          "Available in different sizes"
      ]
  };

  const [thumbnail, setThumbnail] = React.useState(product.images[0]);

  return product && (
      <div className="max-w-7xl mx-auto px-4 mt-10">
          <p>
              <Link to={'/'}>Home</Link> /
              <Link to={'/products'}> Products</Link> /
              <Link> {product.category}</Link> /
              <span className="text-primary"> {product.name}</span>
          </p>

          <div className="flex flex-col md:flex-row gap-16 mt-4">
              <div className="flex gap-3">
                  <div className="flex flex-col gap-3">
                      {product.images.map((image, index) => (
                          <div key={index} onClick={() => setThumbnail(image)} className="border max-w-24 border-gray-500/30 rounded overflow-hidden cursor-pointer" >
                              <img src={image} alt={`Thumbnail ${index + 1}`} />
                          </div>
                      ))}
                  </div>

                  <div className="border border-gray-500/30 max-w-100 rounded overflow-hidden">
                      <img src={thumbnail} alt="Selected product" />
                  </div>
              </div>

              <div className="text-sm w-full md:w-1/2">
                  <h1 className="text-3xl font-medium">{product.name}</h1>

                  <div className="flex items-center gap-0.5 mt-1">
                      {Array(5).fill('').map((_, i) => (
                          product.rating > i ? (
                              <Star key={i} className="text-primary" size={14} fill="#FF5757" strokeWidth={2} />
                          ) : (
                                <Star key={i} className="text-gray-500/70" size={14} strokeWidth={2} />
                          )
                      ))}
                      <p className="text-base ml-2">({product.rating})</p>
                  </div>

                  <div className="mt-6">
                      <p className="text-gray-500/70 line-through">Nrs. {product.price}</p>
                      <p className="text-2xl font-medium">Nrs. {product.offerPrice}</p>
                      <span className="text-gray-500/70">(inclusive of all taxes)</span>
                  </div>

                  <p className="text-base font-medium mt-6">About Product</p>
                  <ul className="list-disc ml-4 text-gray-500/70">
                      {product.description.map((desc, index) => (
                          <li key={index}>{desc}</li>
                      ))}
                  </ul>

                  <div className="flex items-center mt-10 gap-4 text-base">
                      <button className="w-full py-3.5 cursor-pointer font-medium bg-gray-100 text-gray-800/80 hover:bg-gray-200 transition" >
                          Add to Cart
                      </button>
                      <button className="w-full py-3.5 cursor-pointer font-medium bg-primary text-white hover:bg-tertiary transition" >
                          Buy now
                      </button>
                  </div>
              </div>
          </div>

            <div className="mt-10 mb-10">
                <h1 className="text-2xl font-bold m-auto">Similar <span className='text-primary'>Products</span></h1>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
                    {Array(8).fill('').map((_, index) => (
                        <div key={index} className="border border-gray-500/30 rounded overflow-hidden">
                            <img src={product.images[0]} alt={`Product ${index + 1}`} />
                            <div className="p-4">
                                <h2 className="text-lg font-medium">{product.name}</h2>
                                <p className="text-gray-500/70">Nrs. {product.offerPrice}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
      </div>
  );
};

export default ProductDetails;
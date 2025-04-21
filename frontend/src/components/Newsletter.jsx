import React from 'react';
import { Mail } from 'lucide-react';

const Newsletter = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 text-center rounded-xl max-w-2xl mx-auto my-10">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 flex items-center justify-center gap-2">
        <Mail className="w-6 h-6 text-tertiary" />
        Join the Mart Haus Community
      </h2>
      <p className="mt-2 text-gray-600">
        Be the first to get updates on new arrivals and exclusive offers.
      </p>

      <form className="mt-6 flex flex-col sm:flex-row gap-4 items-center justify-center">
        <div className="relative w-full sm:w-2/3">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary "
          />
        </div>

        <button
          type="submit"
          className="w-full sm:w-auto px-6 py-2 bg-primary text-white rounded-md hover:bg-tertiary transition duration-200"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;

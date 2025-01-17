import React from "react";
import { Shield, Check, Truck } from "lucide-react";

const Categories = () => {
  return (
    <div className="w-full bg-blue-600 py-16">
      <div className="container mx-auto px-4">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-white text-4xl font-bold mb-4">Categories</h2>
        <p className="text-white/90">Discover our curated collection of premium second-hand shoes</p>
      </div>

      {/* Buttons Section */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        <button className="bg-blue-500/50 hover:bg-blue-500/70 text-white px-6 py-2 rounded-full transition">All Brands</button>
        <button className="bg-blue-500/50 hover:bg-blue-500/70 text-white px-6 py-2 rounded-full transition">New Arrivals</button>
        <button className="bg-blue-500/50 hover:bg-blue-500/70 text-white px-6 py-2 rounded-full transition">Best Sellers</button>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div className="flex items-center gap-4">
          <div className="bg-blue-100 p-3 rounded-full">
          <Check className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h3 className="text-white font-semibold">100% Authentic</h3>
            <p className="text-white/75 text-sm">Guaranteed original brands</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="bg-blue-100 p-3 rounded-full">
          <Shield className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h3 className="text-white font-semibold">Secure Payment</h3>
            <p className="text-white/75 text-sm">Multiple payment options</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="bg-blue-100 p-3 rounded-full">
          <Truck className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h3 className="text-white font-semibold">Fast Delivery</h3>
            <p className="text-white/75 text-sm">Nationwide shipping</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Categories;

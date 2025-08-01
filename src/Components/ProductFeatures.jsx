import React from 'react'
import { CheckCircle } from 'lucide-react';

function ProductFeatures() {
const features = [
  "Premium quality fabric – soft, breathable & durable",
  "Color won’t fade after multiple washes",
  "Tailored fit that complements all body types",
  "Skin-friendly & sweat-absorbent material",
  "Easy to care for – machine washable",
  "Modern design perfect for casual & semi-formal use",
  "Lightweight yet strong stitching",
  "Wrinkle-resistant for all-day freshness",
];
  return (
     <div className="mt-10 bg-gray-100 p-6 rounded-2xl shadow-sm">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">
        Product Highlights
      </h2>
      <ul className="grid gap-3 md:grid-cols-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-gray-700">
            <CheckCircle className="text-green-500 w-5 h-5 mt-1" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductFeatures
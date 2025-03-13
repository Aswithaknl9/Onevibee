import React from "react";
import Card from "../Productspage/Card"

const Products = () => {
  return (
    <>
    <div className="container mx-auto px-6 pt-[130px] pb-12 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Best Services For Your Business
        </h1>
        <p className="mt-4 text-gray-600 leading-relaxed">
          Embark on a journey of global excellence with our services designed to 
          actualize cost-effectiveness, maximize resources, and enhance leadership skills.
        </p>
      </div>
    </div>
    <Card />
    </>
  );
};

export default Products;

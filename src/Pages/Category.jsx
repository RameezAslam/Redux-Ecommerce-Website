import React,{useState,useEffect} from 'react'
import ProductCard from '../Components/ProductCard'
import SortDropdown from "../Components/SortDropdown";
import all_products from "../Components/Assets/all_product"; 

function Category(props) {
  const [products, setProducts] = useState(all_products);
  const [sortedProducts, setSortedProducts] = useState(all_products);

  const handleSortChange = (sortType) => {
    let sorted = [...products];

    if (sortType === "az") {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortType === "za") {
      sorted.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortType === "low-high") {
      sorted.sort((a, b) => a.new_price - b.new_price);
    } else if (sortType === "high-low") {
      sorted.sort((a, b) => b.new_price - a.new_price);
    }

    setSortedProducts(sorted);
  };

  return (
   <div className="w-full min-h-screen py-10 px-8 mt-[6rem]">
      <div className='container mx-auto'>
          <img src={props.banner} alt="Banner" />
      </div>
      <div className="mb-4 flex justify-end">
        <SortDropdown onSortChange={handleSortChange} />
      </div>

      <div
       className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {sortedProducts.map((item,i) => {
            if(props.category === item.category) {
                return  <ProductCard key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            } else {
                return null;
            }  
          })}
      </div>
    </div>
  );
};

export default Category
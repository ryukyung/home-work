import ProductCard from './ProductCard';
import productList from '../data/productList.js';
import '../styles/ProductCardList.css';

export default function ProductCardList() {
  return (
    <div className="productCardList">
      {productList.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
}

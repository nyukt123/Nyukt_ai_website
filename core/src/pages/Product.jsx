import { useNavigate } from 'react-router-dom';
import ProductHero from "../components/Product/ProductHero";
import ScrollToTopButton from "../components/Homecom/ScrollToTopButton";
import ProductCards from "../components/Product/ProductCard";

const Product = () => {
  const navigate = useNavigate();

  const handleProductSelect = (productId) => {
    // Navigate to the product detail page based on the productId
    navigate(`/product/${productId}`);
  };

  return (
    <>
      <ProductHero/>
      <ProductCards onProductSelect={handleProductSelect} />
      <section>
        <ScrollToTopButton />
      </section>
    </>
  );
};

export default Product;

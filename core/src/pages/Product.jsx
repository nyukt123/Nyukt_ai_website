import ProductHero from "../components/Product/ProductHero";
import ScrollToTopButton from "../components/Homecom/ScrollToTopButton";
import ProductCards from "../components/Product/ProductCard";

const Product = () => {
  return (
    <>
      <ProductHero/>
      <ProductCards/>
      {/* <NyukTRON/>
      <NyukTRON/>
      <NyukTRON/>
      <NyukTRON/>
      <NyukTRON/> */}
      {/* scroll-to-page btn start */}
      <section>
        <ScrollToTopButton />
      </section>
      {/* scroll-to-page btn start */}
    </>
  );
};

export default Product;

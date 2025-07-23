import ProductHero from "../components/Product/ProductHero";
import NyukTRON from "../components/Product/NyukTRON";
import ScrollToTopButton from "../components/Homecom/ScrollToTopButton";
const Product = () => {
  return (
    <>
      <ProductHero/>
      <NyukTRON/>
      {/* scroll-to-page btn start */}
      <section>
        <ScrollToTopButton />
      </section>
      {/* scroll-to-page btn start */}
    </>
  );
};

export default Product;

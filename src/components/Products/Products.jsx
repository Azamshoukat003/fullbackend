// Products.jsx
import "./Products.scss";
import Product from "./Product/Product";

const Products = ({ products, innerPage, headingText }) => {
  //   if (!products || !products.data || !Array.isArray(products.data)) {
  //     // Handle the case when products or products.data is undefined or not an array.
  //     return <div>No products available</div>;
  //   }

  return (
    <div className="products-container">
      {!innerPage && <div className="sec-heading">{headingText}</div>}
      <div className="products">
        {products?.data?.map((item) => (
          <Product key={item.id} id={item.id} data={item.attributes} />
        ))}
      </div>
    </div>
  );
};

export default Products;

import { useParams } from "react-router-dom";
import Thumbnails from "../components/Thumbnails";

const prod = {
  id: "123456789",
  company: "Linen",
  name: "T-Shirt Polo",
  price: "1300/-",
  details:
    "The best tshirt! We tried several tshirt brands and finally found this one with a great recommendation from Good On You. The shirts are soft, perfect length, cool colors, great weight (esp for wear in Hawaii). Fast shipping, in eco friendly packaging. Do not hesitate. This is the shirt you have been searching for",
  images: [
    "https://shorturl.at/ekIY2",
    "https://shorturl.at/gyDR5",
    "https://shorturl.at/sK568",
    "https://shorturl.at/fhDFX",
  ],
};

const Product = () => {
  let currentProduct;
  const { id } = useParams();

  if (prod.id === id) {
    currentProduct = prod;
  }

  return (
    <div className="product_main">
      <div className="image">
        <div className="thumbnail_holder">
          <Thumbnails images={currentProduct.images} />
        </div>
        <div className="currentImage_holder">{currentProduct.images[0]}</div>
        <div className="button_holder">
          <button>Add to Cart</button>
          <button>Buy Now</button>
        </div>
      </div>
      <div className="details">
        <h3>{currentProduct.company}</h3>
        <h2>{currentProduct.name}</h2>
        <p className="price">{currentProduct.price}</p>
        <p className="review_rating">4 * from 1234 ratimgs 54872 reviews</p>
        <h3>Details</h3>
        <p className="prod_details">{currentProduct.details}</p>
      </div>
    </div>
  );
};
export default Product;
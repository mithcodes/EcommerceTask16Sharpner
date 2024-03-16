import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { AppState } from "../context/Context";
import { Link } from "react-router-dom";
const Products = () => {
  
  const { state, dispatch } = AppState();
  const productsArr = state.products;

  return (
    <>
      
      <Row xs={1} md={2} className="g-4 row">
        {productsArr.map((ele, idx) => (
          <Col key={idx}>
           <Link to={"/store/123456789"}>
              <Card>
                <Card.Title>{ele.title}</Card.Title>
                <Card.Img
                  variant="top"
                  src={ele.imageUrl}
                  className="hover-zoom"
                />
                <Card.Body>
                  <div className="card-detail">
                    <h3>$ {ele.price}</h3>
                    <Button
                      variant="primary"
                      onClick={() =>
                        dispatch({ type: "AddToCart", payload: ele })
                      }
                    >
                      Buy
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Products;

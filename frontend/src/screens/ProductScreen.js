import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating';


const ProductScreen = () => {
  const params = useParams();
  const [product, setProduct] = useState({})

  useEffect(() => {
    const fetchProduct = async () => {
      const {data} = await axios.get(`/api/products/${params.id}`)

      setProduct(data)
    }

    fetchProduct()
  }, [])

// Params = parameters stored in product.js - can be like id or location. Parameteres are all a collection.    
  // params is coming from actual params by making a call to the API and it will come back as response Json and then call the function setProduct as part of useState. Now you're done hooking things up
//  find method, within the aray it will loop through and find the element we are looking for. We are looking for product, and in this case product.id. FInd will loop through each element in products.js which is coming thorugh the params above. This guy will go find the product and find the id. Then we display it below the HTML required for it to display on the React page.

  // this is a function page, we have to return something here

  
  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className='btn-block'
                  type='button'
                  disabled={product.countInStock === 0}
                >
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default ProductScreen
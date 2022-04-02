import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating';
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listProductDetails } from '../actions/productActions'

// Use State hook, store state information within the component so the compoenent can use it. 
// Now pass the State information to the other components (as many components as I want). Globally sharing the State with the other components of this app = REDUX!! It's called Redux. State is temp. storage of data. Now Redux is a GLOBAL memory, a temporary store, it's not a database.

// Redux = a way to share data across Components. High-level overview = 1. At component 2. Action is triggered by data and pass to Reducer 3. Reducer is listening and writing it to the store. 4. Data in store is available for Components to use.

const ProductScreen = () => {
  const params = useParams();
  const dispatch = useDispatch()
  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails

  useEffect(() => {
    dispatch(listProductDetails(params.id))
  }, [dispatch, params])

  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
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
      </Row>)}
    </>
  )
}

export default ProductScreen

// Params = parameters stored in product.js - can be like id or location. Parameteres are all a collection.    
  // params is coming from actual params by making a call to the API and it will come back as response Json and then call the function setProduct as part of useState. Now you're done hooking things up
//  find method, within the aray it will loop through and find the element we are looking for. We are looking for product, and in this case product.id. FInd will loop through each element in products.js which is coming thorugh the params above. This guy will go find the product and find the id. Then we display it below the HTML required for it to display on the React page.

  // this is a function page, we have to return something here

  // params in fetchProduct will refresh and fetch new id (products) which is what params stands for. It will rerun useEffect to fetch whatever new param value change it is you want.
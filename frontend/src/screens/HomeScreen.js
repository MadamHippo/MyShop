import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Row, Col} from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listProducts } from '../actions/productActions'


// Hook is sort of like the USB port to a laptop. Component is like the laptop. These Hooks are available for you to plugin. It's like an extra route that's enhancing what's originally there in the component state. Hooks will route to the USB device, read the data, and give you the data back/make the data available for you. Hooks will go "OK you need me to do this and I'll listen for these things you're telling me to watch out for and give it back to you."

const HomeScreen = () => {
  const dispatch = useDispatch()
  const productList = useSelector((state) => state.productList)
  const {loading, error, products} = productList
  // must match the order from productReducer.js

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

      // Async is saying main thread is saying secondary thread do this instead while main thread loads. Secondary thread is running inside the main thread so we need to use a hook.
      // A state is available in every component within React.
      // await is to wait for axios to come back if it takes time to get it back
      // useEffect will run unless new data comes about

  return (
    // using the Map function omg finally using algo stuff!! make a loop
    <>
    <h1>Latest Products</h1>
    {loading ? (
      <Loader />
    ) : error ? (
      <Message variant='danger'>{error}</Message>
    ): (<Row>
      {products.map((product) => (
        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
          <Product product={product} />
        </Col>
      ))}
    </Row>)}

    
  </>
)
}

export default HomeScreen
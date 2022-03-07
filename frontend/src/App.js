// App.js is the parent component, we attached footer and header subcomps in this below.

// arrow functions - new way to write functions in ES6
import {Container} from 'react-bootstrap';
import Footer from "./components/Footer";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom' // See app below how router, and routes, and route is bundled and organized together
import { Header } from "./components/Header";
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';



//In situation where someone has multiple slashes we need to put 'exact' so if you see another path with another slash that says product we need to take them to that

//arrow functions

 const App = () => {
   return (
    <>
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen />} exact />
            <Route path='/product/:id' element={<ProductScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
    </>
  );
 }

export default App;

// React Router is basically Express. Its built based off Express. We have to download bootstrap and react router dom
// App.js is the parent component, we attached footer and header subcomps in this below.

// arrow functions - new way to write functions in ES6
import {Container} from 'react-bootstrap';
import Footer from "./components/Footer";
import { Header } from "./components/Header";

 const App = () => {
   return (
    <>
      <Header />
      <main>
        <Container>
        <h1>Welcome to MyShop!</h1>
        </Container>
      </main>
      <Footer />
    </>
  );
 }

export default App;

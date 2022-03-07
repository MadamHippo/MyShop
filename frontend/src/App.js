// App.js is the parent component, we attached footer and header subcomps in this below.

// arrow functions - new way to write functions in ES6
import {Container} from 'react-bootstrap';
import Footer from "./components/Footer";
import { Header } from "./components/Header";
import HomeScreen from './screens/HomeScreen';


//arrow functions

 const App = () => {
   return (
    <>
      <Header />
      <main>
        <Container>
          <HomeScreen />
        </Container>
      </main>
      <Footer />
    </>
  );
 }

export default App;

// React Router is basically Express. Its built based off Express. We have to download bootstrap and react router dom
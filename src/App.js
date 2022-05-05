import Cards from "./components/DashBoard/Cards";
import NavBarComponent from "./components/Header/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer/Footer";

const App = () => {
 
  return (
    <>
      <NavBarComponent />
      <Cards />
      <Footer />
    </>
  );
};

export default App;

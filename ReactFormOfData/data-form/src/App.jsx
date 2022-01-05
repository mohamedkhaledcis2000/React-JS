
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/About/About.jsx";
import CartDetails from "./components/Cart/CartDetails.jsx";
import Header from "./components/Header/Header.jsx";
import Home from "./components/Home/Home.jsx";
import ProductDetails from "./components/Products/ProductDetails";
import Products from "./components/Products/Products";
import CartProvider from "./store/CartProvider";
import UserForm from "./components/UserForm/UserForm.jsx";
const App = () => {
  return (
    <CartProvider>
      <Router>
        <Route path="/" component={Header} />
        <Route path="/products" component={Products} exact />
        <Route path="/" component={Home} exact />
        <Route path="/details" component={() => <CartDetails />} exact />
        <Route path="/about" component={About} exact />
        <Route
          path="/productDetails"
          component={(props) => <ProductDetails {...props} exact />}
        />
        <Route path="/userform" component={UserForm}/>
      </Router>
    </CartProvider>
  );
};
export default App;

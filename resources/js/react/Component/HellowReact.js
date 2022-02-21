


import React,{useState,Fragment} from 'react';
import ReactDOM from "react-dom";
import Cart from './Cart/Cart';
import Header from './Header/Header';
import FoodList from './FoodList/Foodlist'

const HellowReact = () => {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = () => {
    setCartIsShown(true);
  }
  const hideCartHandler = () => {
    setCartIsShown(false);
  }
  return (
    <Fragment>
    {cartIsShown && <Cart onhide={hideCartHandler} />}
      <Header onshow={showCartHandler}/>
      <main>
       <FoodList/>
      </main>
    </Fragment>
   
  )
}

export default HellowReact;

ReactDOM.render(<HellowReact/>,document.getElementById("react-app"));


import React, { useContext } from 'react';
import ReactDOM from 'react-dom';


import CartItem from './CartItem';
import cartContext from '../../store/cart-context';

const Cart = (props) => {

  let userEmail;
  if (localStorage.getItem('tokenId')) {
    userEmail = JSON.parse(localStorage.getItem('tokenId')).email;
    // userEmail = userEmail.replace(/[@.]/g, '');
  }

  const cartCtx = useContext(cartContext);

  const cartElements = cartCtx.item;

  let cartItemList = [];
  let totalAmount = 0;

  if (cartCtx.item) {
    cartItemList = cartElements.map((item) => (
      <CartItem key={Math.random().toString()} item={item} />
    ));

    totalAmount = cartCtx.totalAmount.toFixed(2);
  }

  

  
    return (
      <div>
        <span>CART</span>
        <button onClick={props.onClick}>
          X
        </button>
        <div >
          <span >ITEM</span>
          <span >PRICE</span>
          <span >QUANTITY</span>
        </div>
        {cartItemList}
        <div>
          <span>Total</span>
          <div>${totalAmount}</div>
        </div>
        {cartItemList.length > 0 && (
          <button>
            PURCHASE
          </button>
        )}
      </div>
    );
  };
export default Cart;
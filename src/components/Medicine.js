import { useContext } from "react";
import cartContext from "../store/cart-context";
const Medicine=(props)=>{
    let userEmail;
  if (localStorage.getItem('tokenId')) {
    userEmail = JSON.parse(localStorage.getItem('tokenId')).medicine;
    userEmail = userEmail.replace(/[@.]/g, '');
  }
    const cartCtx=useContext(cartContext)
    const addItemToCart = (event) => {
        event.preventDefault();
        cartCtx.addItem({ ...props, quantity: props.quantity });
       
    }
return (
    <>
    <ul>
        <li>{props.medicine} {props.description}{props.quantity}{props.price} <button onClick={addItemToCart}>AddtoCart</button></li>
    </ul>
    </>
)
}
export default Medicine
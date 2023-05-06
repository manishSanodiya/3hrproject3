import showCartContext from "../../store/showcart-context"
import { useContext } from "react"
import Cart from "../cart/Cart"
const HeaderCartButton=()=>{
    const showcartCtx=useContext(showCartContext)
    return (
        <header>
    <button onClick={showcartCtx.showCart}>
        <span>Cart</span>
        <span>3</span>
    </button>
    {showcartCtx.cartState && <Cart onClick={showcartCtx.hideCart} />}
        </header>
    )
    }
    export default HeaderCartButton
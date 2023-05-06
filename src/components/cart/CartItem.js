const CartItem=(props)=>{
    return (
        <div>
            <div>
            
            <span>{props.item.medicine}</span>
            <span>{props.item.description}</span>
            <span>${props.item.price}</span>
            <span>{props.item.quantity}</span>
            
          </div>
        </div>
    )
    }
    export default CartItem
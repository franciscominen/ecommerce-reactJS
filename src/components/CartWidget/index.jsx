import "./style.scss";
import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from "../../context/CartContext";

const CartWidgetComponent = () => {

    const {cantidad, actualizarCantidad} = useContext(cartContext)

    return (
        <div className="compras_container">
            <>
                <Link className="link" to="/cart">
                    <img src={"/img/CartWidget/CartIcon.svg"} className='cartIcon' style={{maxWidth:'31px', marginRight:'15px'}}/>
                
                    { cantidad > 0 ?
                        <div className="cantItems_container">
                            <span className="cantItems"> {actualizarCantidad()} </span> 
                        </div>
                        : null
                    }
                </Link>
            </> 
        </div>
    )
}

export default CartWidgetComponent
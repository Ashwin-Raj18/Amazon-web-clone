
import React from 'react';
import './Subtotal.css';
import { Button } from '@material-ui/core';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../../../state&context/StateProvider';
import { getCartTotal } from '../../../state&context/Reducer';

function Subtotal() {
    const [{ cart }, dispatch] = useStateValue();

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({cart.length} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" />This order contains gift.
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getCartTotal(cart)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}
            />

            <Button>Proceed to Checkout</Button>
        </div>
    )
}

export default Subtotal
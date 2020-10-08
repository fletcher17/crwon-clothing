import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HZZw9D9OOhqKM7jptfybtsJJLUeaiP0jPnV27p12wsnSelaGdcmjIpM5pzQ8M2Fx14ESWuiQZh1plknQy4c9x7100KO066GJa';
    const onToken = token => {
        console.log(token)
        alert('Payment Successful');
    }

    return(
        <StripeCheckout label='Pay Now'
        name='CROWN CLOTHING LTD'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount= {priceForStripe}
        panelLabel= 'Pay NOW'
        token={onToken}
        stripeKey={publishableKey}
        />
    )
}


export default StripeCheckoutButton;
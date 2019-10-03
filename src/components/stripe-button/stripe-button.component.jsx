import React from "react";
import { connect } from "react-redux";
import StripeCheckout from "react-stripe-checkout";

import { emptyCart } from "../../redux/cart/cart.actions";

const StripeCheckoutButton = ({ price, emptyCart }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_IZeFDq2e4VcHg1Dt3CaclrdX004bPRUTyw";

  const onToken = token => {
    console.log(token);
    alert("Payment Successful");
    emptyCart();
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="eCom Project"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

const mapDispatchToProps = dispatch => ({
  emptyCart: item => dispatch(emptyCart(item))
});

export default connect(
  null,
  mapDispatchToProps
)(StripeCheckoutButton);

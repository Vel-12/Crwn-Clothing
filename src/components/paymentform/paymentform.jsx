import { useState } from "react";
import { selectCartTotal } from "../../store/cart/cartselector";
import { selectCurrentUser } from "../../store/user/userselector";

import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import { useSelector } from "react-redux";

import Button from "../button/button";

import "./paymentform.scss";

function Paymentform() {
  const stripe = useStripe();
  const elements = useElements();

  const currentUser = useSelector(selectCurrentUser);

  const amount = useSelector(selectCartTotal);

  const [isPaymentProcessing, setIsPaymentProcessing] = useState(false);

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    if(amount === 0 )
    {
      alert('Cart is Empty!');
      return;
    }

    setIsPaymentProcessing(true);

    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => res.json());

    const {
      paymentIntent: { client_secret },
    } = response;

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : "Guest",
        },
      },
    });

    setIsPaymentProcessing(false);

    if (paymentResult.error) {
      alert(" Please Enter card details");
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Payment Successful");
      }
    }
  };

  return (
    <div className="PaymentFormContainer">
      <form className="FormContainer" onSubmit={paymentHandler}>
        <h2>Credit Card Payment: </h2>
        <CardElement />
        <div className="button"><Button isloading={isPaymentProcessing} buttonType="inverted"> Pay Now </Button></div>
      </form>
    </div>
  );
}

export default Paymentform;

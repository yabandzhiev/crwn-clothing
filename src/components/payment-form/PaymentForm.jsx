import { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useSelector, useDispatch } from "react-redux";

import { selectCartTotal } from "../../store/cart/cartSelector.js";
import { selectCurrentUser } from "../../store/user/userSelector.js";
import { BUTTON_TYPE_CLASSES } from "../button/Button.jsx";
import { clearCart } from "../../store/cart/cartAction.js";

import {
  PaymentFormContainer,
  FormContainer,
  PaymentButton,
} from "./PaymentForm.styles.jsx";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);

  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessingPayment(true);

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
        billing_details: { name: currentUser ? currentUser.displayName : "Guest" },
      },
    });

    setIsProcessingPayment(false);

    if (paymentResult.error) {
      alert("Error with payment");
    } else {
      if ((paymentResult.paymentIntent.status = "succeeded")) {
        dispatch(clearCart());
        alert("Payment Successful");
      }
    }
  };
  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit Card Payment: </h2>
        <CardElement />
        <PaymentButton
          isLoading={isProcessingPayment}
          buttonType={BUTTON_TYPE_CLASSES.inverted}
        >
          Pay Now
        </PaymentButton>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;

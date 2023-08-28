import React from "react";
import ReactDOM from "react-dom";
const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });
export default function PayPal() {
  const createOrder = (data) => {
    // Order is created on the server and the order id is returned
    return fetch("http://localhost:5000/create-paypal-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // use the "body" param to optionally pass additional order information
      // like product skus and quantities
      body: JSON.stringify({
        cart: [
          {
            sku: "YOUR_PRODUCT_STOCK_KEEPING_UNIT",
            quantity: "YOUR_PRODUCT_QUANTITY",
          },
        ],
      }),
    })
      .then((response) => response.json())
      .then((order) => {
        return order.id;
      })
      .catch((e) => console.log(e.message));
  };
  const onApprove = (data) => {
    console.log(data);
    // Order is captured on the server and the response is returned to the browser
    return fetch("http://localhost:5000/capture-paypal-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        orderID: data.orderID,
      }),
    }).then((response) => response.json());
  };
  return (
    <PayPalButton
      createOrder={(data) => createOrder(data)}
      onApprove={(data) => onApprove(data)}
    />
  );
}

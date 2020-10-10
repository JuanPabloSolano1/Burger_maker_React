import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Orders.css";

const Orders = () => {
  const [newOrders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get(`https://burger-3064e.firebaseio.com/item.json`)
      .then((response) => {
        setOrders(response.data);
      })
      .catch((error) => console.log(error));
  }, []);
  let orders = null;
  if (newOrders != null) {
    orders = Object.values(newOrders).map((element, index) => {
      const { name, address, email, order } = element;
      return (
        <div>
          <h2>Contact Information</h2>
          <p>Order-id: {index + 1}</p>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>Address: {address}</p>
          <p>Price: {`$${order.price}`}</p>
          <p>Total Items: {order.total_items}</p>
          <h2>Ingredients</h2>
          {Object.keys(order.ingredients).map((ingredient) => {
            return (
              <div className="order-ingredients">
                <p>{`${ingredient}: ${element.order.ingredients[ingredient]}`}</p>
              </div>
            );
          })}
          <hr></hr>
        </div>
      );
    });
  } else {
    orders = <div>No Orders</div>;
  }
  return <div className="orders">{orders}</div>;
};

export default Orders;

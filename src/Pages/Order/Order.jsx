import React, { useContext, useEffect, useState } from "react";
import {
  getFirestore,
  collection,
  doc,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore"; // Firebase v9 imports
import { getApp } from "firebase/app"; // To get the Firebase app instance
import { DataContext } from "../../components/DataProvider/DataProvider";
import classes from "./order.module.css";
import ProductCard from "../../components/Product/ProductCard";
import LayOut from "../../components/LayOut/LayOut";

const Order = () => {
  const [{ user }] = useContext(DataContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      // Initialize Firestore
      const app = getApp(); // Get Firebase app instance
      const db = getFirestore(app); // Get Firestore instance from the app

      // Reference to the orders collection of the user
      const ordersRef = collection(db, "users", user.uid, "orders");
      const ordersQuery = query(ordersRef, orderBy("created", "desc")); // Order the orders by creation date in descending order

      // Fetch the orders with onSnapshot
      const unsubscribe = onSnapshot(ordersQuery, (snapshot) => {
        setOrders(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });

      // Clean up the listener when the component unmounts
      return () => unsubscribe();
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.orders_container}>
          <h2>Your Orders</h2>
          {orders?.length === 0 && (
            <div style={{ padding: "20px" }}>
              You don't have any orders yet.
            </div>
          )}
          {/* Ordered items */}
          <div>
            {orders?.map((eachOrder, i) => (
              <div key={i}>
                <hr />
                <p>OrderID: {eachOrder?.id}</p>
                {eachOrder?.data?.basket?.map((order) => (
                  <ProductCard flex={true} key={order.id} product={order} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </LayOut>
  );
};

export default Order;

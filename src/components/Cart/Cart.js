import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = (props) => {
  const cartItems = [{ id: "c1", name: "sushi", amount: 2, price: 12.99 }].map(
    (item) => (
      <ul className={classes["cart-items"]}>
        <li>{item.name}</li>
      </ul>
    )
  );

  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amout</span>
        <span>35.62</span>
        <div className={classes.actions}>
          <button className={classes["button--alt"]}>Close</button>
          <button className={classes.button}>Order</button>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;

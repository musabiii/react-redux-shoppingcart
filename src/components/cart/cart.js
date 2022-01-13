import { connect } from "react-redux";
import CartItem from "../cartItem";
import "./cart.css";

const Cart = ({ cart }) => {
  const res = cart.map((el) => {
    return (
      <CartItem
        key={el.id}
        title={el.title}
        price={el.price}
        qty={el.qty}
        id={el.id}
        img={el.img}
      />
    );
  });

  let totalSum = 0;
  let totalQty = 0;
  cart.forEach((el) => {
    totalSum += el.qty * el.price;
    totalQty += el.qty;
  });

  return (
    <div className="cart">
      <div className="cart-list">{res}</div>
      <div className="total">
        <h2>Summary</h2>

        <h3>totla qty: {totalQty}</h3>
        <h3>total sum: {totalSum} $</h3>
        <input className="checkout" type="button" value="CHECKOUT" />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps)(Cart);

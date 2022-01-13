import { connect } from "react-redux";
import { adjustqty } from "../../actions";

import "./cartItem.css";

const CartItem = ({ title, price, qty, id, adjustqty, img }) => {
  return (
    <div className="cart-item">
      <img src={process.env.PUBLIC_URL + "/img/" + img} alt="" />
      <div className="title">{title}</div>
      <div className="price">{price}$</div>
      <div className="qty-box">
        <input type="button" value="-" onClick={() => adjustqty(id, -1)} />
        {/* <h3 className="qty">{qty}$</h3> */}
        {qty}
        <input type="button" value="+" onClick={() => adjustqty(id, 1)} />
      </div>
      <a href="#" onClick={() => adjustqty(id, -qty)}>
        <i className="fas fa-trash-alt"></i>
      </a>
    </div>
  );
};

const mapDispatchToProps = { adjustqty };

export default connect(null, mapDispatchToProps)(CartItem);

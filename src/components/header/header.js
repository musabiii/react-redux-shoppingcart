import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./header.css";


const Header = ({cart}) => {


  let amount  = 0;
  
  cart.forEach(el => {
    amount+=el.qty;
  });

  amount = amount===0?'':`  ( ${amount} )`

  return (
    <div className="header">
      <Link to = "/" className="logo">
        <i className="fas fa-store"> SHOP</i>
      </Link>
      <div className="links">
        <Link className="link" to="/">
          <i className="fas fa-tshirt"></i>
        </Link>
        <Link className="link" to="/cart">
          <i className="fas fa-shopping-cart"> {amount} </i>
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps=(state)=>{
  return {
    cart:state.cart
  }
}

export default connect(mapStateToProps)(Header);

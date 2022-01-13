import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./header.css";


const Header = ({cart}) => {


  let amount  = 0;
  
  cart.forEach(el => {
    amount+=el.qty;
  });

  amount = amount===0?'':`  ( ${amount} )`


  const activeList=()=>{
    document.querySelectorAll('.link').forEach(el=>el.classList.remove('active'));
    document.querySelector('.list-link').classList.add('active');
  }

  const activeCart=()=>{
    document.querySelectorAll('.link').forEach(el=>el.classList.remove('active'));
    document.querySelector('.cart-link').classList.add('active');
  }

  return (
    <div className="header">
      <Link to = "/react-redux-shoppingcart" className="logo" onClick={activeList}>
        <i className="fas fa-store"> SHOP</i>
      </Link>
      <div className="links">
        <Link className="link list-link active" to="/react-redux-shoppingcart" onClick={activeList}>
          <i className="fas fa-tshirt"></i>
        </Link>
        <Link className="link cart-link" to="/react-redux-shoppingcart/cart"  onClick={activeCart}>
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

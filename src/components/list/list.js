import { connect } from "react-redux";
import ListItem from "../listItem";
import "./list.css";

const List = ({ list, cart }) => {
  const res = list.map((el) => {
    const itemCart = cart.find((item) => item.id === el.id);
    const qty = itemCart?.qty ? `( ${itemCart.qty} )` : "";
    return (
      <ListItem
        key={el.id}
        id={el.id}
        title={el.title}
        price={el.price}
        img={el.img}
        qty={qty}
      />
    );
  });

  return <div className="list">{res}</div>;
};

const mapStateToProps = ({ list, cart }) => {
  return {
    list,
    cart,
  };
};

export default connect(mapStateToProps)(List);

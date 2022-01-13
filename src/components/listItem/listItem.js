import { connect } from "react-redux";
import { adjustqty } from "../../actions";
import "./listItem.css";

const ListItem = ({ id, title, price, img, adjustqty,qty }) => {
  return (
    <div className="list-item">
      <img src={process.env.PUBLIC_URL + `/img/${img}`} alt="" />
      <h2>{title}</h2>
      <p>{price} $</p>
      <input
        type="button"
        value={`ADD TO CART ${qty}`}
        onClick={() => adjustqty(id, 1)}
      />
    </div>
  );
};



const mapDispatchToProps = {
  adjustqty,
};

export default connect(null, mapDispatchToProps)(ListItem);

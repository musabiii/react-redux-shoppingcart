const listloaded = (newList) => {
  return {
    type: "LIST_LOADED",
    list: newList,
  };
};

const adjustqty = (id, qty) => {
  return {
    type: "ADJUST_QTY",
    id: id,
    qty: qty,
  };
};


export { listloaded,adjustqty };

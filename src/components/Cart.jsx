export default function Cart(props) {
  const cart = props.cart;
  let totalCartPrice = 0;

  for (let i = 0; i < cart.length; i++) {
    let total = cart[i].price * cart[i].quantity;
    totalCartPrice += total;
  }

  function CartItem(props) {
    const { details } = props;
    const total = details.price * details.quantity;
    return (
      <tr>
        <td>
          <img width="30" height="30" alt="" src={details.image} />
          {details.name}
        </td>
        <td>{details.price}</td>
        <td>{details.quantity}</td>
        <td>
          <strong>{total}</strong>
        </td>
      </tr>
    );
  }
  return (
    <div className="cart-layout">
      <div>
        <h1>Your Cart</h1>
        {cart.length > 0 ? (
          <table className="table table-cart">
            <thead>
              <tr>
                <th width="25%" className="th-product">
                  Product
                </th>
                <th width="20%">Unit price</th>
                <th width="10%">Quanity</th>
                <th width="25%">Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((el) => (
                <CartItem key={cart.indexOf(el)} details={el} />
              ))}
            </tbody>
            <tfoot>
              <tr>
                <th colSpan="2"></th>
                <th className="cart-highlight">Total</th>
                <th className="cart-highlight">{`$${totalCartPrice}`}</th>
              </tr>
            </tfoot>
          </table>
        ) : (
          <p>You have not added any product to your cart yet.</p>
        )}
      </div>
    </div>
  );
}

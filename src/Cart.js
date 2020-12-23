import { Link } from 'react-router-dom';
function Cart(props) {
    const items = props.items;
    let total = 0;
    const listItems = props.cart.map((item) => {
        total += items[item.id - 1].price * item.amt;
        return (
            <Link key={items[item.id - 1].id} to={`/itemdetail/${item.id}`}>
                <div className="showitem-cart">
                    <img
                        src={items[item.id - 1].image}
                        alt={items[item.id - 1].name}
                    ></img>
                    <div>{items[item.id - 1].name}</div>
                    <div className="price">
                        {items[item.id - 1].price + 'ED'}
                    </div>
                    <div>
                        Quantity:{' '}
                        <span style={{ color: 'rgb(239, 81, 81)' }}>
                            {item.amt}
                        </span>
                    </div>
                    <div>
                        Total:{' '}
                        <span style={{ color: 'rgb(239, 81, 81)' }}>
                            {items[item.id - 1].price * item.amt}ED
                        </span>
                    </div>
                </div>
            </Link>
        );
    });
    const checkout = (
        <div className="checkout">
            <div>
                Cart Total: <span style={{ color: 'red' }}>{total}ED</span>
            </div>
            <div className="btn">{'>Checkout'}</div>
        </div>
    );
    return listItems.length === 0 ? (
        <div className="cart-empty">
            <div>No items in Cart :(</div>
            <Link to="/shop">
                <div className="btn"> {'>Shop now!'}</div>
            </Link>
        </div>
    ) : (
        <div>
            <div className="item-list">{listItems}</div>
            {checkout}
        </div>
    );
}
export default Cart;

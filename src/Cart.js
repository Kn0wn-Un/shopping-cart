function Cart(props) {
    const items = props.items;
    const listItems = props.cart.map((item) => {
        return (
            <div key={items[item - 1].id} className="showitem-cart">
                <img
                    src={items[item - 1].image}
                    alt={items[item - 1].name}
                ></img>
                <div>{items[item - 1].name}</div>
                <div className="price">{items[item - 1].price + ' ED'}</div>
            </div>
        );
    });
    return <div className="item-list">{listItems}</div>;
}
export default Cart;

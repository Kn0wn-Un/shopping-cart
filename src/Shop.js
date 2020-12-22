import { Link } from 'react-router-dom';
function Shop(props) {
    const listItems = props.items.map((item) => {
        return (
            <Link key={item.id} to={`/itemdetail/${item.id}`}>
                <div id={item.id} className="showitem-large">
                    <img src={item.image} alt={item.name}></img>
                    <div>{item.name}</div>
                    <div className="price">{item.price + ' ED'}</div>
                </div>
            </Link>
        );
    });
    return <div className="item-list">{listItems}</div>;
}
export default Shop;

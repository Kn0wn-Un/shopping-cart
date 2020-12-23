import { Link } from 'react-router-dom';
import './styles.css';

function Nav(props) {
    return (
        <div className="navigation">
            <div className="heading">
                <Link to="/shopping-cart/">Cyberware</Link>
            </div>
            <ul className="navbar">
                <Link to="/shopping-cart/shop">
                    <li>Shop</li>
                </Link>
                <Link to="/shopping-cart/cart">
                    <li>Cart ({props.items})</li>
                </Link>
            </ul>
        </div>
    );
}

export default Nav;

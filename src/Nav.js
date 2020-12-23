import { Link } from 'react-router-dom';
import './styles.css';

function Nav(props) {
    return (
        <div className="navigation">
            <div className="heading">
                <Link to="/">Cyberware</Link>
            </div>
            <ul className="navbar">
                <Link to="/shop">
                    <li>Shop</li>
                </Link>
                <Link to="/cart">
                    <li>Cart ({props.items})</li>
                </Link>
            </ul>
        </div>
    );
}

export default Nav;

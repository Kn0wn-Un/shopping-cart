import { Link } from 'react-router-dom';
import './styles.css';

function Nav() {
    return (
        <div className="navigation">
            <Link to="/">
                <div className="heading">Cyberware</div>
            </Link>
            <ul className="navbar">
                <Link to="/shop">
                    <li>Shop</li>
                </Link>
                <Link to="/cart">
                    <li>Cart</li>
                </Link>
            </ul>
        </div>
    );
}

export default Nav;

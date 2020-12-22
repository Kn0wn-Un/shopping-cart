import { Link } from 'react-router-dom';
import './styles.css';
function HomePage() {
    return (
        <div className="navigation">
            <h2>Cyberware</h2>
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
export default HomePage;

import { Link } from 'react-router-dom';
import './styles.css';
function HomePage() {
    return (
        <div>
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
            <div className="description">
                <div className="tagline">
                    <b>Style</b> is everything.
                </div>
                <div className="summary">
                    The possession of trendy cyberware has become an integral
                    and defining part of Night City culture. Uniqueness is just
                    another form of currency. To make it big, you need to look
                    the part.
                </div>
                <Link to="/shop">
                    <div>Shop now!</div>
                </Link>
            </div>
        </div>
    );
}
export default HomePage;

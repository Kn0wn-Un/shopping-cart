import { Link } from 'react-router-dom';
import './styles.css';
function HomePage() {
    return (
        <div>
            <div className="description">
                <div className="tagline">
                    <b>Style</b> is everything.
                </div>
                <div className="summary">
                    The possession of trendy cyberware has become an integral
                    and defining part of Night City culture.
                    <b>Uniqueness is just another form of currency.</b> To make
                    it big, you need to look the part.
                </div>
                <Link to="/shop">
                    <div className="btn"> {'>Shop now!'}</div>
                </Link>
            </div>
        </div>
    );
}
export default HomePage;

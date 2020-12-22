import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Shop from './Shop';
import Cart from './Cart';
import HomePage from './HomePage';
import Nav from './Nav';
function App() {
    return (
        <BrowserRouter>
            <Nav />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/shop" component={Shop} />
                <Route exact path="/cart" component={Cart} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import Shop from './Shop';
import Cart from './Cart';
import HomePage from './HomePage';
import Nav from './Nav';
import ItemDetail from './ItemDetail';
function App() {
    const items = [
        {
            id: 1,
            name: 'Gorilla Arms',
            price: 1500,
            tagLine:
                'Classic and reliable replacements for natural limbs, suited for all kinds of hard labor.',
            image:
                'https://www.gamesatlas.com/images/cyberpunk2077/weapons/gorilla-arms-1.jpg',
            description: `Gorilla Arms charge with each attack. When you perform a Strong Attack, they deal bonus damage based on the charge level. Gorilla Arms also allow you to force open locked doors and rip turrets from their bases.
                Gorilla Arms deal Physical damage.`,
        },
        {
            id: 2,
            name: 'Mantis Blades',
            price: 2000,
            tagLine:
                'Arm blades designed with lethality and concealment in mind. As effective as they are flashy.',
            image:
                'https://www.gamesatlas.com/images/cyberpunk2077/weapons/mantis-blades-1.jpg',
            description: `Allow you to slice and dice your enemies with swift, deadly slashes. They also unlock the ability to leap towards a target and deal massive damage. Due to the blades' inherently fast attack speed and combos, they can rapidly deal devastation damage, granting a higher chance to dismember the enemy. Very effective against an individual target.`,
        },
        {
            id: 3,
            name: 'Monowire',
            price: 2500,
            tagLine:
                'Whip-like monofilament wire a cutting edge only a molecule wide.',
            image:
                'https://www.gamesatlas.com/images/cyberpunk2077/weapons/monowire-1.jpg',
            description: `The Monowire charges when equipped but not in combat. Attacks with a charged wire deal bonus damage based on the charge level. Charge level and bonus damage dealt decline with each attack. Monowire deals Physical damage. Deals high amount of concentrated damage and can instantly dismember an enemy with one attacks.`,
        },
        {
            id: 4,
            name: 'Projectile Launch System',
            price: 5000,
            tagLine:
                'A missile launcher in the palm of your hand (more or less literally).',
            image:
                'https://www.gamesatlas.com/images/cyberpunk2077/weapons/projectile-launch-system-1.jpg',
            description: `The Projectile Launcher allows you to unleash various powerful projectiles, dealing various types of damage as well as causing explosions and applying status effects. 
            But most importantly, it wreaks mayhem and destruction. Explodes on impact and deals major Physical damage to enemies within the area of effect. Charged shots increase damage, the explosion radius and the chance to dismember. Effective against groups of enemies.`,
        },
    ];
    const [cart, addCart] = useState([]);
    return (
        <BrowserRouter>
            <Nav items={cart.length} />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/shopping-cart" component={HomePage} />
                <Route
                    exact
                    path="/shopping-cart/shop"
                    component={() => (
                        <Shop addCart={addCart} cart={cart} items={items} />
                    )}
                />
                <Route
                    exact
                    path="/shopping-cart/cart"
                    component={() => <Cart cart={cart} items={items} />}
                />
                <Route
                    exact
                    path="/shopping-cart/itemdetail/:id"
                    component={ItemDetail}
                />
            </Switch>
        </BrowserRouter>
    );
}

export default App;

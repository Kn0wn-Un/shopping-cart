import { useState } from 'react';
import { Link } from 'react-router-dom';
function ItemDetail(props) {
    const {
        match: { params },
    } = props;
    let id = params.id;
    const addCart = props.location.handler;
    const cart = props.location.cart;
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
    const [amt, setAmt] = useState(1);
    const formHandler = (e) => {
        e.preventDefault();
        addCart(cart.filter((item) => item.id !== id).concat([{ id, amt }]));
    };
    return (
        <div id={id} className="showitem">
            <img src={items[id - 1].image} alt={items[id - 1].name}></img>
            <div className="item-description">
                <div className="tag-line">{`"${items[id - 1].tagLine}"`}</div>
                <div className="name">{items[id - 1].name}</div>
                <div className="price">{items[id - 1].price + ' ED'}</div>
                <div className="des">{items[id - 1].description}</div>
                <div>
                    <form onSubmit={formHandler}>
                        <label>Quantity: </label>
                        <input
                            type="number"
                            min="1"
                            step="1"
                            required
                            value={amt}
                            onChange={(e) => {
                                setAmt(e.target.value);
                            }}
                        ></input>
                        <br />
                        <br />
                        <button className="btn">{'>Add to Cart'}</button>
                        <Link to="/shopping-cart/cart">
                            <button className="btn">{'>Go to Cart'}</button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default ItemDetail;

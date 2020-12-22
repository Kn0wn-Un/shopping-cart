function Shop() {
    const ex = [
        {
            id: 1,
            name: 'Gorilla Arms',
            price: '1500ED',
            imageSm:
                'https://cyberpunk2077.wiki.fextralife.com/file/Cyberpunk-2077/gorilla_arms_cyberware_cyberpunk2077_wiki_guide.png',
            image:
                'https://www.gamesatlas.com/images/cyberpunk2077/weapons/gorilla-arms-1.jpg',
            description:
                'wuhdwdwdwaydgwdw namejwadjauwdhawuhd adhwuahdwuahddu hwduhwad wj',
        },
        {
            id: 2,
            name: 'Mantis Blades',
            price: '1500ED',
            imageSm:
                'https://cyberpunk2077.wiki.fextralife.com/file/Cyberpunk-2077/mantis_blades_cyberware_cyberpunk2077_wiki_guide.png',
            image:
                'https://www.gamesatlas.com/images/cyberpunk2077/weapons/mantis-blades-1.jpg',
            description:
                'wuhdwdwdwaydgwdw namejwadjauwdhawuhd adhwuahdwuahddu hwduhwad wj',
        },
        {
            id: 3,
            name: 'Monowire',
            price: '1500ED',
            imageSm:
                'https://cyberpunk2077.wiki.fextralife.com/file/Cyberpunk-2077/monowire_cyberware_cyberpunk2077_wiki_guide.png',
            image:
                'https://www.gamesatlas.com/images/cyberpunk2077/weapons/monowire-1.jpg',
            description:
                'wuhdwdwdwaydgwdw namejwadjauwdhawuhd adhwuahdwuahddu hwduhwad wj',
        },
        {
            id: 4,
            name: 'Projectile Launch System',
            price: '1500ED',
            imageSm:
                'https://cyberpunk2077.wiki.fextralife.com/file/Cyberpunk-2077/projectile_launch_system_cyberware_cyberpunk2077_wiki_guide.png',
            image:
                'https://www.gamesatlas.com/images/cyberpunk2077/weapons/projectile-launch-system-1.jpg',
            description:
                'wuhdwdwdwaydgwdw namejwadjauwdhawuhd adhwuahdwuahddu hwduhwad wj',
        },
    ];
    const listItems = ex.map((item) => {
        return (
            <div key={item.id} className="showitem-large">
                <img src={item.image} alt={item.name}></img>
                <div>{item.name}</div>
                <div className="price">{item.price}</div>
                <div>
                    <input type="number" step="1" min="1"></input>
                </div>
                <div>
                    <button>Add to cart</button>
                </div>
            </div>
        );
    });
    return <div className="item-list">{listItems}</div>;
}
export default Shop;

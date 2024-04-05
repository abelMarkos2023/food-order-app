import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
const ExploreMenu = ({category,changeCategory}) => {
    console.log(category)
  return (
    <div className="explore" id='explore'>
        <h2>Explore our menu</h2>
        <p>Enjoy and choose from a diverse array of delicious dishes  our mission is to satisfy your cravings and elevate your dining experience one delicious meal at a time</p>
        <div className="explore-menu-list">
        {menu_list.map(item => (
            <div key={item.menu_name} onClick={() => changeCategory(prev => prev === item.menu_name ? 'all':item.menu_name)} className="menu-item">
                <img className={category === item.menu_name ? 'active':''} src={item.menu_image} alt="" />
                <h3>{item.menu_name}</h3>
            </div>
        ))}
        </div>
        <hr />
    </div>
  )
}

export default ExploreMenu
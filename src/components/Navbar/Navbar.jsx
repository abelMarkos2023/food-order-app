import  './Navbar.css'
import {assets} from '../../assets/assets'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
const Navbar = ({showLogin}) => {
    const {items} = useContext(StoreContext)
    const [active,setActive] = useState('home')
    const navigate = useNavigate()
  return (
<div className="navbar">
<img src={assets.logo} className='logo' alt="" onClick={() => navigate('/')}/>
<ul className="navbar-menu">
    <li className={active === 'home'?'active':''} onClick = {() => {
        setActive('home')
        navigate('/')
    }}>Home</li>
    <a href='#explore' className={active === 'menu'?'active':''} onClick = {() => setActive('menu')}>Menu</a>
    <a href='#download' className={active === 'mobile'?'active':''} onClick = {() => setActive('mobile')}>Mobile app</a>
    <a href='#footer' className={active === 'contact'?'active':''} onClick = {() => setActive('contact')}>Contact us</a>
</ul>
<div className="menu-right">
    <img src={assets.search_icon} alt="" />
    <div className="basket" onClick={() => {
        navigate('/cart')
        setActive('cart')
    }}>
        <img src={assets.basket_icon} alt="" />
        {Object.keys(items).length > 0 && <div className="dot">
            {Object.keys(items).length}
            </div>
            
            }
    </div>
    <button className="sign-up" onClick={() => showLogin(prev => !prev)}>Sign Up</button>
</div>
</div>

)
}

export default Navbar
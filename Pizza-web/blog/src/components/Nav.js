import React from 'react';
import { useState } from 'react';
import {AiOutlineMenuFold} from "react-icons/ai";
import {AiOutlineMenuUnfold} from "react-icons/ai";
import "../App.css";
const Nav = () => {
  const [nav,setnav]=useState('#');
        const [show, setShow] = useState(false)

  return (
    <nav>
                          <h3>Figo</h3>
                    
                    <ul className={`${show ? "mobile-nav" : "list"}`}>
                         <a href="#" onClick={()=>setnav('#')}      className={nav==='#'? 'list-active': ''} >Home</a>
                        <a href="#about" onClick={()=>setnav('#about')}      className={nav==='#about'? 'list-active': ''} >About</a>
                        <a href="#menu" onClick={()=>setnav('#menu')}      className={nav==='#menu'? 'list-active': ''} >Menu</a>
                        <a href="#signin" onClick={()=>setnav('#signin')}      className={nav==='#signin'? 'list-active': ''} >Contact</a>
                        <a href="#cart" onClick={()=>setnav('#cart')}      className={nav==='#cart'? 'list-active': ''} >##</a>
                    </ul>
                    <div className='toggleBtn'>
          <button className="btn" onClick={() => setShow(!show)}>{show ? <AiOutlineMenuUnfold/> :<AiOutlineMenuFold/> }</button>
        </div>
             </nav>
                    )
}

export default Nav;


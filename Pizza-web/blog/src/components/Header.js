import React from 'react'
import "../App.css";
import pizza from '../components/img/pizza6.png';
import Nav from './Nav';

const Header = () => {
  return (
                    <div className='header'>
                       <Nav/>                                   
                         <div className='coctainer'>
                          <div className='header_content'>
                        <div className='header_text'>
                          <h1>All in Good Taste Food With Figo</h1>
                          <p>Quality productional standard complent arcitecture and
                             may have progressive internal and organic sources</p>
                             <div className='buttons'>
                              <input id='input_order' type='text' placeholder='Enter email addres'/>
                              <button className='btn'>Get Started</button>
                             </div>
                        </div>
                        <div className='image'>
                          <img src={pizza}/>
                        </div>
                         </div>
                         </div>
                    </div>
    
  )
}

export default Header
import React from 'react';
import "../App.css";
import pizza from '../components/img/pizza.jpg';

const About = () => {
  return (
   <div className="about">
          <div className='coctainer'>
                          <div className='header_content'>
                            <div className='image_about'>
                          <img src={pizza} alt='Cock'/>    
                            </div>

                            <div className='about_text'>
                              <small>About Restaurant</small>
                              <h2>Welcome to Figo <br/>Restaurant</h2>
                              <p> This will depend on the scheduling algorithm used examples are the amount of 
                                time that the process has waiting and the amount of time that the process executed
                                 the last time it was running. <br/>
                                 Various flags, signals and messages 
may be associated with communication between  </p>
                                 <div className='buttons'>
                              <button className='about_btn'>Explore Our Story</button>
                             </div>
                            </div>
                        </div>
                        </div>        
   </div>
                    )
}

export default About
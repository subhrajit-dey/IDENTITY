import React from 'react'
import './Header.css';
import canvas from './canvas.jpg';
export const Header = () => {
  return (
    <>
    <div className="new_background">
    <div className='headerhome'>

      <div className="for_background">
       <h3 className='hello'>_________Hello There</h3>
      <h1 className='iam name_ani'>I am &nbsp; 
        <span className="S name_ani_span">S</span> 
        <span className="U name_ani_span">U</span>
        <span className="B name_ani_span">B</span>
        <span className="H name_ani_span">H</span>
        <span className="R name_ani_span">R</span>
        <span className="A name_ani_span">A</span>
        <span className="J name_ani_span">J</span>
        <span className="I name_ani_span">I</span>
        <span className="T name_ani_span">T</span>
        &nbsp;
        <span className="D name_ani_span">D</span>
        <span className="E name_ani_span">E</span>
        <span className="Y name_ani_span">Y</span>
      </h1>
       <div className="wrapper">
       <div className="static-txt">I am a</div>
       <ul className="dynamic-txts">
        <li><span>Student</span></li>
        <li><span>Developer</span></li>
        <li><span>Fresher</span></li>
       </ul>
       </div>
       <br/>
       <p className='para'>Welcome to my Identity Portfolio. I am currently an undergraduate student at IIEST Shibpur. I am a curious 
         guy interested in the advancing technologies and the use of the device known as a Computer to achieve greatness
         and to build a world in which Human Beings can live hand in hand with Machines 
       </p>
       </div>
       <div>
       
       </div>
    </div>
    <a href="/about"><button className='aboutbtn'>Know More About Me</button></a>
    <a href="/contact"><button className='contactbtn'>Contact Me</button></a>
    <br/>
    </div>
    <img src={canvas} alt="" className='canvas'/>
    </>
  )
}

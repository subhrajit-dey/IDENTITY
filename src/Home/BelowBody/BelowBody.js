import React from 'react';
import fb from './fb.jpg';
import insta from './insta.jpg';
import linked from './linked.jpg';
import lana from './lana.jpg'
import wp from './wp.jpg';
import './BelowBody.css';
export const BelowBody = () => {
    return (
        <div className='wrapper_belowbody'>
            <div className='wrap' >
                <div>
                    <img src={fb} alt="" id='fb' />
                    <h2 className='heading' >FACEBOOK<hr /></h2>
                    <h2 className='heading_side' ><a href="https://www.facebook.com/subhrajit.dey.108/" className='al'>https://www.facebook.com/subhrajit.dey.108/</a></h2>
                </div>
                <div>
                    <img src={insta} alt="" id='insta' />
                    <h2 className='heading'>INSTAGRAM<hr /></h2>
                    <h2 className='heading_side' ><a href="https://www.instagram.com/subhrajit123456/" className='al'>https://www.instagram.com/subhrajit123456/</a></h2>
                </div>
                <div>
                    <img src={linked} alt="" id='linked' />
                    <h2 className='heading'>LINKEDIN<hr /></h2>
                    <h2 className='heading_side' ><a href="https://www.linkedin.com/in/subhrajit-dey-430871201/" className='al'>https://www.linkedin.com/in/subhrajit-dey-430871201/</a></h2>
                </div>
                <div>
                    <img src={wp} alt="" id='wp' />
                    <h2 className='heading'>WHATSAPP <hr /></h2>
                    <h2 className='heading_side' ><a href="" className='al'> Ph. No. 8250025289</a></h2>
                </div>
            </div>
            <img src={lana} alt="" id='lana'/>
            <br /><br /><br />
            <h3>_________Robert Kiyosaki says</h3>
            <h1 id='quote'>"Don't let the fear of losing be greater than the excitement of winning."</h1>
        </div>
    )
}

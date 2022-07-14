import React from 'react';
import './Contact.css'
import mail from './mail.png';
import mapsandflags from './mapsandflags.png';
import phonecall from './phonecall.png'

export const Contact = () => {
  return (
    <div className='about_wrapper'>
        <section className="contact">
            <div className="content">
                <h1 className='contact_us'>___Contact Us</h1>
                <p className='contact_writing'>Please Feel free to contact us and provide us your valuable suggestions...We would really appreciate it!!!</p>
            </div>
            <div className="container">
                <div className="contactInfo">
                    <div className="box">
                        <img src={mapsandflags} className='contact_icon' alt="" />
                        <h3 className='contact_heading_box'>Address</h3>
                        <p className='contact_writing_box'>Siliguri<br /> Dist. Jalpaiguri <br /> West Bengal</p>
                    </div>
                    <div className="box">
                    <img src={phonecall} className='contact_icon' alt="" />
                        <h3 className='contact_heading_box'>Phone</h3>
                        <p className='contact_writing_box'>+91 8250025289</p>
                    </div>
                    <div className="box">
                    <img src={mail} className='contact_icon' alt="" />
                        <h3 className='contact_heading_box'>Email</h3>
                        <p className='contact_writing_box'>deysubharajit@gmail.com</p>
                    </div>
                </div>
                <h2 className='send_message'>Send Message</h2>
                <div className="contactForm">
                        <form action="https://formsubmit.co/b937222d4ac60129c4719f4b5d3dcb20" method='POST'>
                            <div class="form__group field">
                                <input type="input" class="form__field" placeholder="Name" name="name" required />
                                <label for="name" class="form__label">Name</label>
                            </div>
                            <div class="form__group field">
                                <input type="email" class="form__field" placeholder="email" name="email"  required />
                                <label for="name" class="form__label">Email</label>
                            </div>
                            <div class="form__group field">
                                <textarea type="input" class="form__field" placeholder="Type your Message here..." name="message"  required />
                                <label for="name" class="form__label">Type your Message here...</label>
                            </div>
                            <div className="inputBox">
                                <button type='submit' className='button-51'>Send</button>
                            </div>
                        </form>
                    </div>
            </div>
        </section>
    </div>
  )
}

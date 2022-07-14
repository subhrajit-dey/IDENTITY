import React from 'react';
import './About.css'
import profile_pic from './profile_pic.jpg'
export const About = () => {

  return (
    <div>
        <div className='about_main'>
        <h3 className='helloAbout loader'>_________
        <span className="H hello_span">H</span>
        <span className="I hello_span">I</span>
        &nbsp;
        <span className="T hello_span">T</span>
        <span className="H hello_span">H</span>
        <span className="E hello_span">E</span>
        <span className="R hello_span">R</span>
        <span className="E hello_span">E</span>
        </h3>
        </div>
        <div className='about_wrapper'>
        <img src={profile_pic} alt="" className='profile_pic_class' />
        <div className='about_writing'>
        This website has been created and developed by <strong> <h3 className='name_about'> Subhrajit Dey </h3> </strong>. Hi! My name is Subhrajit Dey. I am a pre-final year Student at the prestiguous 
        institute of Indian Institute of Engineering Science and Technology, Shibpur. I have currenty purusuing a Bachelors in Technology(B.Tech) in 
        the Department of Information Technology. I have a passion for coding and solving real world problem through code. I love solving problems 
        in Competitive Programming and also have a good grasp over Data Structures and Algorithms. I am a 3 Star coder in Codechef. Pupil in Codeforces
        and have solved over 200 problems in Leetcode. I also love to code in other platforms in other platforms like Geeks for Geeks, AtCoder, Coding Ninjas
        and many more. <br />
        Discussing about the history of my life I was born and brought up in the town of Malbazar also known as the "Heart of Dooars". A picturesque tourist
        spot in the state of West Bengal, India. I studied initially in Don Bosco School, Oodlabari and then I shifted to Delhi Public School, Siliguri where 
        I later completed my schooling. <br />
        I am a passionate coder who loves hard work and learn new things. I am also the winner of XPecto Hackathon, hosted by IIT Mandi, and also a Machine Learning Enthsiuast
        The idea that a computer can learn and predict the future using Mathematical and Statistical concepts fascinates me. 
        I love meeting people and conversing with them in order to learn new things and I have a dream of impacting millions of lives through code
        </div>
        <h1 className='the_name'>
          ______The Links of my Coding Profiles are given below.
        </h1>

        <ul className='coding_profile_list'>
          <a href="https://github.com/subhrajit-dey/subhrajit-dey" className='about_page_profiles_link' target="_blank"><li className='coding_profile_list_items'>GITHUB</li></a>
          <a href="https://codeforces.com/profile/Subhrajit123" className='about_page_profiles_link' target="_blank"><li className='coding_profile_list_items'>CODEFORCES</li></a>
          <a href="https://www.codechef.com/users/sd_25602" className='about_page_profiles_link' target="_blank"><li className='coding_profile_list_items'>CODECHEF</li></a>
          <a href="https://leetcode.com/Subhrajit123/" className='about_page_profiles_link' target="_blank"><li className='coding_profile_list_items'>LEETCODE</li></a>
        </ul>

        </div>

        <h1 className='resume_writing'>______TO KNOW MORE ABOUT ME PLEASE CLICK THE DOWNLOAD BUTTON TO DOWNLOAD MY RESUME</h1>
        <a href="https://drive.google.com/file/d/1adS8gAqz4cDIr-j7G2pW1G_b6MSv4CSt/view?usp=sharing" target="_blank"><button className='resume'>CLICK HERE TO DOWNLOAD MY RESUME</button></a>
        </div>
  )
}

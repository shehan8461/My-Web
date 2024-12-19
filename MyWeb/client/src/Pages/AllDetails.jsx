import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './css/alldetails.css';
import logo from '../Pages/Images/my_img.jpg'
export default function AllDetails() {


  return (

    <div className='all-details-home'>

      <h1 id='main-header'>Transforming Ideas into Digital Excellence</h1>
      <div className='image'>
        <p id='image-details'>
          Join over <span className="highlight">best satisfied clients</span> who trust me to transform their websites. With years of experience, I help businesses achieve their digital goals through seamless, impactful designs. Let's work together to elevate your online presence.
        </p>

        <img id='my-img' src={logo} alt='Logo' width="15%" height="15%" />
      </div>


      <div className='main-details'>
        <h3 id="choose-me-details">Looking for a Freelance Web Designer to Create Your Website? </h3>
        <p id='my-main-details'>Welcome to <b className='highlight-main-details'>Shehan's Freelancing Hub</b>  where creativity meets expertise. With over two decades of experience in website design, UI design, and the development of both small
          and complex projects, I am committed to delivering high-quality results at the best price and within the most efficient time frame.
          My journey in the industry has equipped me with a wealth of skills, allowing me to craft websites that are not only visually appealing
          but also user-friendly and optimized for performance. I take the time to understand your specific needs, ensuring that the final product meets your expectations and serves your business goals effectively.
          Whether you're looking to launch a personal website, a business site, or something more intricate, I am here to guide you through every step of the process—from concept to completion.
          Let’s bring your vision to life with the perfect blend of design, functionality, and innovation.
        </p>

      </div>


      <div className='work-counts'>

        <p id='work-counts-webdesign'><b>Web Designs</b>
          40
        </p>
        <p id='work-counts-UiDesigns'><b>Ui Designs</b>
          15
        </p>
        <p id='work-counts-Projects'><b>Projects(complex/small)</b>
          70
        </p>
      </div>
      <div className='services'>
        <h2 id='topic-of-services'>Services | Offer</h2>
        <li>Web Design</li>
        <li>Ui Design</li>
        <li>Complex Project/Small Project</li>
        <li>Software Solution</li>
      </div>
      <div className='freelancer-details'>
        <h2 className="freelancer-topic">
          Freelance Web Designer Based in <span>Sri Lanka</span>, Serving Clients Worldwide</h2>
        <p id='freelancer-topic-own-details'>At Shehan's Freelancing Hub, I offer expert web design services to clients worldwide. With over 20 years of experience in web design and UI development, I create tailored solutions for
          businesses and individuals across industries. From small, responsive websites to complex projects, I focus on aesthetics, functionality,
          and user experience. Let's collaborate to deliver a website that exceeds your expectations, on time and within budget.
          <br></br>
          <h3 id='contact'>+94 766 722 019</h3>
        </p>

      </div>
      <div className='benefit-details'>
        <h2 id='benefit-details-topic'>Why Choose the Right Freelancing Partner: Unlocking Exclusive Benefits for Clients and Customers</h2>

        <div className='topic-1'>
          <h3>1.Client-Centric Approach: Delivering Tailored Solutions</h3>
          <p>At Shehan's Freelancing Hub, we prioritize your needs, delivering tailored solutions aligned with your goals.
            Through active collaboration, we bring your vision to life while fostering trust and lasting relationships.</p>
        </div>

        <div className='topic-2'>
          <h3>2.Access to Expert Talent and Diverse Services</h3>
          <p>Shehan's Freelancing Hub delivers expert web development, UI/UX design, and hosting solutions. Save time with all-in-one services,
             from stunning websites to intuitive interfaces and reliable hosting. Trust our proven experience for exceptional digital results.</p>
        </div>
 
 
        <div className='topic-3'>
          <h3>3.Cost-Effective and Flexible Solutions</h3>
          <p>Our freelancing model combines cost efficiency and flexibility for maximum value. We deliver high-quality solutions at competitive rates,
             free from traditional agency overheads. With adaptable schedules, we ensure timely, tailored services to fit your budget and timeline.</p>
        </div>
 
        <div className='topic-4'>
          <h3>4.Long-Term Growth and Competitive Edge</h3>
          <p>Partner with Shehan's Freelancing Hub to empower your business for future success. Our cutting-edge designs and strategic solutions boost 
            your online presence and create lasting customer impressions, helping you thrive in a competitive digital market.</p>
        </div>

      </div>


      
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />

    </div>

  )
}

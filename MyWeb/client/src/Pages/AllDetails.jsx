import React, { useState, useEffect } from 'react';
import './css/alldetails.css';
import logo from '../Pages/Images/IMG_8567.png';
import logo1 from '../Pages/Images/people.jpg';
import logo2 from '../Pages/Images/pixeles.jpg';
import logo3 from '../Pages/Images/responsive.jpg';
import linkidn from '../Pages/Images/linkedin.png';
import web from '../Pages/Images/web.jpg';
import contact from '../Pages/Images/contact.png';
import github from '../Pages/Images/githubNew.png';
import react from '../Pages/Images/react.png'
import angular from '../Pages/Images/angularNew.png'
import laravel from '../Pages/Images/laravel.png'
import nextJs from '../Pages/Images/nextJs.png'
import sql from '../Pages/Images/sql.png'
import tailwind from '../Pages/Images/tailwind.png'
import packettracer from '../Pages/Images/packettracer.png'
import figma from '../Pages/Images/figma.png'


export default function AllDetails() {
  const [webDesigns, setWebDesigns] = useState(0);
  const [uiDesigns, setUiDesigns] = useState(0);
  const [projects, setProjects] = useState(0);

  const animateCount = (setter, target, duration) => {
    let start = 0;
    const increment = target / (duration / 10); // Calculate increment per frame

    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        clearInterval(interval);
        setter(target);
      } else {
        setter(Math.ceil(start));
      }
    }, 10);
  };

  useEffect(() => {
    animateCount(setWebDesigns, 40, 7000); // Animate to 40 over 2 seconds
    animateCount(setUiDesigns, 15, 8000);  // Animate to 15 over 2 seconds
    animateCount(setProjects, 70, 9000);   // Animate to 70 over 2 seconds
  }, []);

  return (
    <div className='all-details-home'>
  
      <h1 id='main-header'>Transforming Ideas into Digital Excellence</h1>
      <div className='image'>
        <p id='image-details'>
          Join over <span className="highlight">best satisfied clients</span> who trust me to transform their websites.
          With years of experience, I help businesses achieve their digital goals through seamless, impactful designs.
          Let's work together to elevate your online presence.
        </p>
        <img id='my-img' src={logo} alt='Logo' width="15%" height="15%" />
      </div>

      <div className='images-background'>

        <div className="icons-container">
          <a to="/icon1">
            <img
              src={linkidn} /* or use SVG directly */
              alt="Linkd In"
              className="icon"
              id='icon1'
            />
          </a>
          <a to="/icon2">
            <img
              src={github}
              alt="Icon 2"
              className="icon"
            />
          </a>
          <a to="/icon3">
            <img
              src={contact}
              alt="Icon 3"
              className="icon"
            />
          </a>
          <a to="/icon4">
            <img
              src={web}
              alt="Icon 4"
              className="icon"
            />
          </a>
        </div>
        <h2></h2>
      </div>

      <div className='main-details'>
        <h3 id="choose-me-details">Looking for a Freelance Web Designer to Create Your Website?</h3>
        <p id='my-main-details'>
          Welcome to <b className='highlight-main-details'>Shehan's Freelancing Hub</b>, where creativity meets expertise.
          I specialize in website and UI design, delivering visually appealing, user-friendly,
          and high-performance solutions tailored to your needs. From personal to complex projects,
          I’m here to guide you every step of the way—let’s turn your vision into reality.
        </p>
      </div>

      <div className='work-counts'>
        <p id='work-counts-webdesign'><b>Web Designs</b> {webDesigns}</p>
        <p id='work-counts-UiDesigns'><b>UI Designs</b> {uiDesigns}</p>
        <p id='work-counts-Projects'><b>Projects (complex/small)</b> {projects}</p>
      </div>

      <div className="do-things">
  <h1 id='what-do-tpic'>What I Can Do</h1>
  <div className="image-container">
    <div className="image-item">
      <img src={react} alt="Image 1" />
      <span>React</span>
    </div>
    <div className="image-item">
      <img src={figma} alt="Image 2" />
      <span>Figma</span>
    </div>
    <div className="image-item">
      <img src={angular} alt="Image 3" />
      <span>Angular</span>
    </div>
    <div className="image-item">
      <img src={nextJs} alt="Image 4" />
      <span>Next Js</span>
    </div>
    <div className="image-item">
      <img src={sql} alt="Image 5" />
      <span>Sql</span>
    </div>
    <div className="image-item">
      <img src={packettracer} alt="Image 6" />
      <span>Packet Tracer</span>
    </div>
    <div className="image-item">
      <img src={laravel} alt="Image 7" />
      <span>Laravel</span>
    </div>
    <div className="image-item">
      <img src={tailwind} alt="Image 8" />
      <span>Tailwind</span>
    </div>
  </div>
</div>


      <div className='services'>
        <div>
          <h2 id='topic-of-services'>Services | Offer</h2>
          <ol id='order-services'>
            <li>Web Design</li>
            <li>Ui Design</li>
            <li>Complex Project/Small Project</li>
            <li>Software Solution</li>
          </ol>
        </div>

        <div className='freelancer-details'>
          <h2 className="freelancer-topic">
            Freelance Web Designer Based in <span>Sri Lanka</span>, Serving Clients Worldwide</h2>
          <p id='freelancer-topic-own-details'>At Shehan's Freelancing Hub, I offer expert web design services to clients worldwide. With over 2 years of experience in web design and UI development, I create tailored solutions for
            businesses and individuals across industries.From small, responsive websites to complex projects,I focus on aesthetics,functionality,
            and user experience. Let's collaborate to deliver a website that exceeds your expectations,on time and within budget.
            <br></br>
            <h3 id='contact'>+94 766 722 019</h3>
          </p>

        </div>
      </div>
      {/* <div className='freelancer-details'>
        <h2 className="freelancer-topic">
          Freelance Web Designer Based in <span>Sri Lanka</span>, Serving Clients Worldwide</h2>
        <p id='freelancer-topic-own-details'>At Shehan's Freelancing Hub, I offer expert web design services to clients worldwide. With over 20 years of experience in web design and UI development, I create tailored solutions for
          businesses and individuals across industries. From small, responsive websites to complex projects, I focus on aesthetics, functionality,
          and user experience. Let's collaborate to deliver a website that exceeds your expectations, on time and within budget.
          <br></br>
          <h3 id='contact'>+94 766 722 019</h3>
        </p>

      </div> */}
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




      <div className='tips'>

        <h1 id='tips-topic'>Web Design Tips</h1>
        <div className='tips1'>
          <img id='topic-img1' src={logo1} alt='Logo' width="15%" height="15%" />

          <h2 id='tips-topic1'>Elevate Your Freelancing Website: A Guide to Capturing Client Attention</h2>
          <p id='tips-topic1-details'>Create a standout freelancing website with personalized designs, intuitive navigation, and engaging content. Highlight your unique services and ensure a responsive,
            visually appealing experience for clients and customers...</p>


        </div>



        <div className='tips2'>
          <img id='topic-img2' src={logo2} alt='Logo' width="15%" height="15%" />
          <h2 id='tips-topic2'>Avoid the Pitfalls of Generic Website Design</h2>
          <p id='tips-topic2-details'>Opting for quality web design builds trust, enhances user experience, and drives conversions. Generic designs can harm your brand's credibility, reduce customer engagement,
            and miss out on potential growth opportunities..</p>
        </div>


        <div className='tips3'>
          <img id='topic-img3' src={logo3} alt='Logo' width="15%" height="15%" />
          <h2 id='tips-topic3'>Prioritize Mobile Responsiveness</h2>
          <p id='tips-topic3-details'>With increasing mobile traffic, ensure your site is fully responsive. Use scalable designs, fluid layouts, and breakpoints for different screen sizes. For instance, adjust text sizes, button spacing,
            and images dynamically to provide a seamless browsing experience, whether on a desktop or smartphone...</p>

        </div>

      </div>


      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />

    </div>

  )
}

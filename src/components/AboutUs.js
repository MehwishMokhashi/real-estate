import React from 'react';
import '../styles/AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <section className="header-section">
        <div className="overlay">
          <h1>About us</h1>
          <p>Welcome to Real Estate, your reliable partner in real estate management. Our platform simplifies buying, selling, and renting properties by connecting clients with agents and listings in an easy-to-use format. We prioritize transparency and exceptional service, ensuring that everyone—from first-time buyers to seasoned investors—can navigate the real estate market with confidence. Join us as we transform the real estate experience for all.
</p>
        </div>
      </section>

     
     
      <section className="meet-team">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="../images/Alace.jpeg" alt="Team Member" />
            <h3>Alace Fernandes</h3>
            <p>Chief Executive Officer</p>
          </div>
          <div className="team-member">
            <img src="../images/priya.jpeg" alt="Team Member" />
            <h3>Priya</h3>
            <p>Chief Strategy Officer</p>
          </div>
          <div className="team-member">
            <img src="/images/reena.jpeg" alt="Team Member" />
            <h3>Reena</h3>
            <p>Chief Marketing Officer</p>
          </div>
          <div className="team-member">
            <img src="/images/john.jpeg" alt="Team Member" />
            <h3>John</h3>
            <p>Chief Technology Officer</p>
          </div>
          <div className="team-member">
            <img src="/images/Joseph.jpeg" alt="Team Member" height={192}/>
            <h3>Joseph</h3>
            <p>Chief Operating Officer</p>
          </div>
          <div className="team-member">
            <img src="/images/Tina.jpeg" alt="Team Member" />
            <h3>Teena</h3>
            <p>Chief Marketing Officer</p>
          </div>
        </div>
      </section>

      <section className="footer-section">
  
  <div className="footer">
    <div className="footer-col">
      <h4>Real Estate Systems</h4>
      <p>Contact Us: example@gmail.com</p>
      <p>Phone: (123) 456-7890</p>
    </div>
   
   
  </div>
</section>

    </div>
  );
};

export default AboutUs;

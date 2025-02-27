import { useState } from 'react';
import Modal from "../Modal/Modal";
import Styles from "./Footer.module.css"

export const Footer = () => {
    const [email, setEmail] = useState(''); 
    const [isModalOpen, setIsModalOpen] = useState(false); 
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
      
    
      setIsModalOpen(true);
  
      
      setEmail('');
    };
  
    const closeModal = () => {
      setIsModalOpen(false); 
    };
  return (
    <>
    <div className={Styles.footer}>
        <div className={Styles.container}>
          <a href="/">
            <img className={Styles.flogo} src="/Images/coinlogo.png" alt="River Store Logo" />
          </a>
          <div className={Styles.logoSection}>
            <h1 className={Styles.logo}>River Store</h1>
            <p className={Styles.description}>
                Connect your cryptocurrency wallets and exchanges. Get your crypto and bitcoin taxes done in minutes..
            </p>
          </div>
          <div className={Styles.linksSection}>
            <h3>Company</h3>
            <ul>
              <li>Lagos, Nigeria</li>
              <li><a href="">Privacy Policy</a></li>
              <li><a href="">Careers </a><span className={Styles.hire}>HIRING</span></li>
              <li><a href="">Enterprise</a></li>
              <li><a href="">Terms</a></li>
              <li><a href="">Tax Professionals</a></li>
              <li><a href="">Disclamer</a></li>
            
            </ul>
          </div>
          <div className={Styles.linksSection}>
            <h3>Platfrom</h3>
            <ul>
              <li><a href="#about">Pricing</a></li>
              <li><a href="#about">Status</a></li>
              <li><a href="#about">Security</a></li>
              <li><a href="#about">Crypto Prices</a></li>
              <li><a href="#about">Integrations</a></li>
            </ul>
          </div>
          <div className={Styles.newsletterSection}>
            <h3>Newsletter</h3>
            <p>Subscribe to get the latest updates and offers.</p>
            <form onSubmit={handleFormSubmit} className={Styles.newsletterForm}>
              <input
                type="email"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                className={Styles.input}
              />
              <button type="submit" className={Styles.button}>Subscribe</button>
            </form>
          </div>
        </div>
        <div className={Styles.bottom}>
          <p>&copy;Coins 2025. All Rights Reserved.</p>
          <ul className={Styles.socialLinks}>
            <li><a href="#facebook">Facebook</a></li>
            <li><a href="#twitter">Twitter</a></li>
            <li><a href="#instagram">Instagram</a></li>
          </ul>
        </div>
    </div>

    {isModalOpen && (
     <Modal closeModal={closeModal}/>   
    )}
    </>
    
  )
}

import { useEffect, useState } from "react";
import Header from "./Header";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope, FaHome } from 'react-icons/fa';
import Link from "next/link";
import styles from "../styles/Contact.module.css";

const ContactInfo = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <div className={styles.contactContainer}>
            <Header />
            <div className={styles.contactContent}>
                <h1 className={`${isLoaded ? 'fade-in-up delay-1' : ''}`}>Connect With Me</h1>
                
                <p className={`${styles.contactDescription} ${isLoaded ? 'fade-in-up delay-2' : ''}`}>
                Feel free to reach out on any of these platforms! I'm always open to new opportunities, collabs, or simply a friendly chat about technology ;)
                </p>
                
                <div className={`${styles.socialGrid} ${isLoaded ? 'fade-in-up delay-3' : ''}`}>
                    <a 
                        href="https://www.linkedin.com/in/jrcega" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={styles.socialCard}
                    >
                        <FaLinkedin size={48} className={styles.socialIcon} />
                        <span>LinkedIn</span>
                        <p>Professional network & career updates</p>
                    </a>
                    
                    <a 
                        href="https://github.com/JRCEGA" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={styles.socialCard}
                    >
                        <FaGithub size={48} className={styles.socialIcon} />
                        <span>GitHub</span>
                        <p>Code repositories & projects</p>
                    </a>
                    
                    <a 
                        href="https://www.instagram.com/robertocebrerosg/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={styles.socialCard}
                    >
                        <FaInstagram size={48} className={styles.socialIcon} />
                        <span>Instagram</span>
                        <p>Personal photos & daily life</p>
                    </a>
                    
                    <a 
                        href="mailto:robertoce1030@gmail.com" 
                        className={styles.socialCard}
                    >
                        <FaEnvelope size={48} className={styles.socialIcon} />
                        <span>Email</span>
                        <p>Direct professional contact</p>
                    </a>
                </div>
                
                <p className={`${styles.contactFooter} ${isLoaded ? 'fade-in delay-4' : ''}`}>
                    Looking forward to connecting with you!
                </p>
                
                <Link href="/" className={`${styles.homeButton} ${isLoaded ? 'fade-in delay-4' : ''}`}>
                    <FaHome size={24} />
                    <span>Back to Home</span>
                </Link>
            </div>
        </div>
    );
};

export default ContactInfo;
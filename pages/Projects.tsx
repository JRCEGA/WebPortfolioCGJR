import { useEffect, useState } from "react";
import Header from "./Header";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaMobile, FaLaptopCode, FaCar, FaFlask, FaDatabase } from "react-icons/fa";
import styles from "../styles/Projects.module.css";

const Projects = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <div className={styles.projectsContainer}>
            <Header />
            <div className={styles.projectsContent}>
                <h1 className={`${isLoaded ? 'fade-in-up delay-1' : ''}`}>My Projects</h1>
                
                <p className={`${styles.projectsDescription} ${isLoaded ? 'fade-in-up delay-2' : ''}`}>
                    Here are some of the key projects I've worked on during my academic career.
                    Each project has helped me develop different skills and tackle unique challenges.
                </p>
                
                <div className={styles.projectsList}>
                    {/* New Project - Capstone */}
                    <div className={`${styles.projectCard} ${isLoaded ? 'fade-in-up delay-2' : ''}`}>
                        <div className={styles.projectHeader}>
                            <div className={styles.projectIcon}>
                                <FaFlask size={28} />
                            </div>
                            <div>
                                <h2>Lab Inventory Management System for CETYS Universidad</h2>
                                <p className={styles.projectDate}>August 2024 – May 2025</p>
                                <p className={styles.projectRole}>University Capstone Project</p>
                            </div>
                        </div>
                        
                        <div className={styles.projectBody}>
                            <ul>
                                <li>Developed a polished, fully functional website for my university to manage maintenance of chemistry lab instruments and equipment.</li>
                                <li>Implemented a complete system for registering damaged instruments, scheduling maintenance orders, and tracking student equipment loans.</li>
                                <li>Built with React, Next.js, and MongoDB for the database, providing a comprehensive solution for laboratory inventory management.</li>
                            </ul>
                            
                            <div className={styles.projectTech}>
                                <span>Next.js</span>
                                <span>MongoDB</span>
                                <span>Laboratory Management</span>
                            </div>
                        </div>
                    </div>
                    
                    {/* Project 1 */}
                    <div className={`${styles.projectCard} ${isLoaded ? 'fade-in-up delay-3' : ''}`}>
                        <div className={styles.projectHeader}>
                            <div className={styles.projectIcon}>
                                <FaLaptopCode size={28} />
                            </div>
                            <div>
                                <h2>"CETYSync" Real Time Chat Web Application</h2>
                                <p className={styles.projectDate}>January 2024 – June 2024</p>
                                <p className={styles.projectRole}>University Course Final Project - Head and Leader</p>
                            </div>
                        </div>
                        
                        <div className={styles.projectBody}>
                            <ul>
                                <li>Developed a Live fully functional Web application using NextJS, ChatEngine.io and Vercel for deployment, goal was to create a safe and secure alternative for CETYS students to be synced with this web app, only accessible with your academic email, available on both Desktop and Mobile.</li>
                                <li>Final Project for my Network & Communication course, applying this knowledge to add AES encryption.</li>
                            </ul>
                            
                            <div className={styles.projectTech}>
                                <span>Next.js</span>
                                <span>ChatEngine.io</span>
                                <span>Vercel</span>
                                <span>AES Encryption</span>
                            </div>
                        </div>
                    </div>
                    
                    {/* Project 2 */}
                    <div className={`${styles.projectCard} ${isLoaded ? 'fade-in-up delay-4' : ''}`}>
                        <div className={styles.projectHeader}>
                            <div className={styles.projectIcon}>
                                <FaMobile size={28} />
                            </div>
                            <div>
                                <h2>Color Detection Mobile App</h2>
                                <p className={styles.projectDate}>August 2023 – December 2023</p>
                                <p className={styles.projectRole}>University Course Final Project - Head and Leader</p>
                            </div>
                        </div>
                        
                        <div className={styles.projectBody}>
                            <ul>
                                <li>Created an Android Mobile App for my Operating Systems course, using Apache Cordova on Node.js, this for gathering bluetooth data using Arduino UNO with Bluetooth HC-05 module.</li>
                                <li>Goal of the project was to monitor the health state of a plant using an RGB Sensor connected to the Arduino, then the data sent via Bluetooth to the app.</li>
                            </ul>
                            
                            <div className={styles.projectTech}>
                                <span>Apache Cordova</span>
                                <span>Node.js</span>
                                <span>Arduino</span>
                                <span>Bluetooth</span>
                            </div>
                        </div>
                    </div>
                    
                    {/* Project 3 */}
                    <div className={`${styles.projectCard} ${isLoaded ? 'fade-in-up delay-5' : ''}`}>
                        <div className={styles.projectHeader}>
                            <div className={styles.projectIcon}>
                                <FaCar size={28} />
                            </div>
                            <div>
                                <h2>"UberFare PRO"</h2>
                                <p className={styles.projectDate}>August 2023 – December 2023</p>
                                <p className={styles.projectRole}>University Course Final Project</p>
                            </div>
                        </div>
                        
                        <div className={styles.projectBody}>
                            <ul>
                                <li>Collaborating on our team's final project for our machine learning course, I was in charge of the front end development of the project, creating a functional website.</li>
                                <li>Machine learning project to estimate the best time in day to get an Uber, using a trained model and different regression models.</li>
                            </ul>
                            
                            <div className={styles.projectTech}>
                                <span>Machine Learning</span>
                                <span>Front-end Development</span>
                                <span>Regression Models</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <Link href="/" className={`${styles.homeButton} ${isLoaded ? 'fade-in delay-5' : ''}`}>
                    <FaArrowLeft size={16} />
                    <span>Back to Home</span>
                </Link>
            </div>
        </div>
    );
};

export default Projects;
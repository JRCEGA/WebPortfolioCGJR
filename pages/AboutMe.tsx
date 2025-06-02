import { useEffect, useState } from "react";
import Header from "./Header";
import Link from "next/link";
import { FaArrowLeft, FaGlobeAmericas, FaRunning, FaSpaceShuttle, FaLaptopCode, FaGraduationCap } from "react-icons/fa";
import styles from "/styles/AboutMe.module.css";

const AboutMe = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.content}>
                <div className={`${styles.hero} ${isLoaded ? 'fade-in-scale delay-1' : ''}`}>
                    <img src="me-2.jpg" alt="Portrait of Myself" className={styles.heroImage} />
                    <div className={styles.heroOverlay}>
                        <h1>About Me</h1>
                    </div>
                </div>

                <div className={styles.sections}>
                    {/* Introduction Section */}
                    <section className={`${styles.section} ${isLoaded ? 'fade-in-up delay-2' : ''}`}>
                        <h2 className={styles.sectionTitle}>
                            <FaGraduationCap className={styles.sectionIcon} />
                            Introduction
                        </h2>
                        <div className={styles.sectionContent}>
                        <p>Hi! I’m <strong>Jose Roberto Cebreros</strong>, a recent Computer Science gradute, I was born in Chula Vista, CA, and raised in Tijuana, Mexico, where I grew up passionate about technology, curious about how things work, and always chasing the next big thing.</p>
                        <p>My journey started with my first computer and evolved into a love for frontend development, user experience, and design. Along the way, I’ve also explored backend technologies. Currently, I’m working as a QA Engineer Trainee at <strong>Dexcom</strong>, where I contribute to high-impact projects in medical device technology.</p>
                        </div>
                    </section>

                    {/* Career Goals Section */}
                    <section className={`${styles.section} ${isLoaded ? 'fade-in-up delay-3' : ''}`}>
                        <h2 className={styles.sectionTitle}>
                            <FaLaptopCode className={styles.sectionIcon} />
                            Career Goals
                        </h2>
                        <div className={styles.sectionContent}>
                        <p>Right now, I’m mainly focused on <strong>Frontend Development</strong>, while staying open to learning and contributing across the full stack., constantly improving through personal projects, courses, and hands-on experience. I recently built a full-stack messaging app using React, Next.js, and Firebase, which helped me grow as both a designer and developer.</p>
                        <p>My next step is to dive deeper into <strong>Fullstack Development</strong> and keep expanding my skillset across technologies. Long term, I see myself building meaningful products—whether through startups, smart tech, or even my own venture, who knows :p</p>
                        </div>
                    </section>

                    {/* Hobbies Section */}
                    <section className={`${styles.section} ${isLoaded ? 'fade-in-up delay-4' : ''}`}>
                        <h2 className={styles.sectionTitle}>
                            <FaSpaceShuttle className={styles.sectionIcon} />
                            Hobbies & Interests
                        </h2>
                        <div className={styles.hobbiesGrid}>
                            <div className={styles.hobbyCard}>
                                <div className={styles.hobbyIcon}>
                                    <FaGlobeAmericas />
                                </div>
                                <h3>Traveling</h3>
                                <p>I love traveling and, like many, hope to explore more of the world's beauty.</p>
                            </div>
                            
                            <div className={styles.hobbyCard}>
                                <div className={styles.hobbyIcon}>
                                    <FaRunning />
                                </div>
                                <h3>Running</h3>
                                <p>I like to take evening runs in the city, and because of that, I feel enjoyment when meeting new people and seeking new relationships.</p>
                            </div>
                            
                            <div className={styles.hobbyCard}>
                                <div className={styles.hobbyIcon}>
                                    <FaSpaceShuttle />
                                </div>
                                <h3>Space Exploration</h3>
                                <p>I have a strong fascination with space, from space travel to the vast universe, especially planets, stars, and the origins of the universe.</p>
                            </div>
                        </div>
                    </section>
                </div>
                
                <Link href="/" className={`${styles.homeButton} ${isLoaded ? 'fade-in delay-4' : ''}`}>
                    <FaArrowLeft size={16} />
                    <span>Back to Home</span>
                </Link>
            </div>
        </div>
    );
};

export default AboutMe;
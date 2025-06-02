import { useEffect, useState } from "react";
import Header from "./Header";
import Link from "next/link";
import { FaArrowLeft, FaBriefcase, FaGraduationCap, FaBuilding, FaShoppingBag, FaCode } from "react-icons/fa";
import styles from "../styles/WorkEducation.module.css";

const WorkEducation = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.content}>
                <h1 className={`${isLoaded ? 'fade-in-up delay-1' : ''}`}>Work Experience & Education</h1>
                
                <div className={styles.sections}>
                    {/* Work Experience Section */}
                    <section className={`${styles.section} ${isLoaded ? 'fade-in-up delay-2' : ''}`}>
                        <h2 className={styles.sectionTitle}>
                            <FaBriefcase className={styles.sectionIcon} />
                            Work Experience
                        </h2>
                        
                        <div className={styles.timeline}>
                            {/* Job 1 */}
                            <div className={styles.timelineItem}>
                                <div className={styles.timelineContent}>
                                    <div className={styles.timelineHeader}>
                                        <h3>Software QA Engineer Trainee</h3>
                                        <span className={styles.company}>Dexcom/ITJ</span>
                                        <span className={styles.duration}>June 2024 – Present</span>
                                        <span className={styles.location}>Tijuana, Mexico/San Diego, CA</span>
                                    </div>
                                    <div className={styles.timelineBody}>
                                        <ul>
                                            <li>Trainee working on a nearshoring company called ITJ for Dexcom, a company that manufactures Glucose monitoring devices</li>
                                            <li>Part of the Quality Assurance team that made sure all products comply with multiple regulations including FDA, using both Scrum and Waterfall methodologies, specifically working at the App Compatibility team which managed that mobile devices properly run the company dedicated apps</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Job 2 */}
                            <div className={styles.timelineItem}>
                                <div className={styles.timelineContent}>
                                    <div className={styles.timelineHeader}>
                                        <h3>E-Commerce Administrator and Shopify Web Developer</h3>
                                        <span className={styles.company}>MG Joyería</span>
                                        <span className={styles.duration}>August 2020 – Present</span>
                                        <span className={styles.location}>Tijuana, Mexico</span>
                                    </div>
                                    <div className={styles.timelineBody}>
                                        <ul>
                                            <li>Creator and Current administrator of a Shopify website for a small local business, In charge of updating the website with new merchandise as soon as they arrive at the warehouse</li>
                                            <li>Developed the website on Shopify editing part of the liquid code, and custom CSS</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Job 3 */}
                            <div className={styles.timelineItem}>
                                <div className={styles.timelineContent}>
                                    <div className={styles.timelineHeader}>
                                        <h3>Retail Worker</h3>
                                        <span className={styles.company}>Various Stores</span>
                                        <span className={styles.duration}>October 2023 – January 2024</span>
                                        <span className={styles.location}>San Diego, CA</span>
                                    </div>
                                    <div className={styles.timelineBody}>
                                        <ul>
                                            <li>Worked in multiple retail stores in San Diego, providing excellent customer service</li>
                                            <li>Developed strong interpersonal skills while assisting customers with their purchases and inquiries</li>
                                            <li>Managed inventory, processed transactions, and maintained store appearance</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                    {/* Education Section */}
                    <section className={`${styles.section} ${isLoaded ? 'fade-in-up delay-3' : ''}`}>
                        <h2 className={styles.sectionTitle}>
                            <FaGraduationCap className={styles.sectionIcon} />
                            Education
                        </h2>
                        
                        <div className={styles.timeline}>
                            {/* University */}
                            <div className={styles.timelineItem}>
                                <div className={styles.timelineContent}>
                                    <div className={styles.timelineHeader}>
                                        <h3>B.S. in Computer Science</h3>
                                        <span className={styles.company}>CETYS Universidad</span>
                                        <span className={styles.duration}>August 2021 – June 2025 (Expected)</span>
                                        <span className={styles.location}>Tijuana, Mexico</span>
                                    </div>
                                    <div className={styles.timelineBody}>
                                        <p>Related Coursework:</p>
                                        <div className={styles.skillTags}>
                                            <span>Machine Learning</span>
                                            <span>Operating Systems</span>
                                            <span>Object-Oriented Programming</span>
                                            <span>Analysis of Algorithms</span>
                                            <span>Network & Communications</span>
                                            <span>Graphics and Visualization</span>
                                            <span>Database Systems</span>
                                            <span>Data Structures</span>
                                            <span>CUDA</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* High School */}
                            <div className={styles.timelineItem}>
                                <div className={styles.timelineContent}>
                                    <div className={styles.timelineHeader}>
                                        <h3>High School Diploma</h3>
                                        <span className={styles.company}>Bachillerato La Paz A.C.</span>
                                        <span className={styles.duration}>January 2019 – June 2021</span>
                                        <span className={styles.location}>Tijuana, Mexico</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                    {/* Skills Section */}
                    <section className={`${styles.section} ${isLoaded ? 'fade-in-up delay-4' : ''}`}>
                        <h2 className={styles.sectionTitle}>
                            <FaCode className={styles.sectionIcon} />
                            Skills
                        </h2>
                        
                        <div className={styles.skillsGrid}>
                            <div className={styles.skillCategory}>
                                <h3>Languages</h3>
                                <div className={styles.skillTags}>
                                    <span>English</span>
                                    <span>Spanish</span>
                                </div>
                            </div>
                            
                            <div className={styles.skillCategory}>
                                <h3>Programming Languages</h3>
                                <div className={styles.skillTags}>
                                    <span>Python</span>
                                    <span>JavaScript</span>
                                    <span>TypeScript</span>
                                    <span>HTML/CSS</span>
                                    <span>MySQL</span>
                                    <span>Oracle</span>
                                    <span>C++</span>
                                    <span>C</span>
                                    <span>Swift (iOS)</span>
                                    <span>CUDA</span>
                                </div>
                            </div>
                            
                            <div className={styles.skillCategory}>
                                <h3>Frameworks & Libraries</h3>
                                <div className={styles.skillTags}>
                                    <span>React</span>
                                    <span>Next.js</span>
                                    <span>Node.js</span>
                                    <span>ReactJS</span>
                                    <span>React Native</span>
                                </div>
                            </div>
                            
                            <div className={styles.skillCategory}>
                                <h3>Tools & Platforms</h3>
                                <div className={styles.skillTags}>
                                    <span>Vercel</span>
                                    <span>Android Studio</span>
                                    <span>Jupyter</span>
                                    <span>Google Colab</span>
                                    <span>Git</span>
                                    <span>GitHub</span>
                                    <span>Apache Cordova</span>
                                    <span>Flask</span>
                                    <span>Oracle Cloud PLM</span>
                                    <span>MongoDB</span>
                                    <span>Firebase</span>
                                </div>
                            </div>
                            
                            <div className={styles.skillCategory}>
                                <h3>Other Computer Skills</h3>
                                <div className={styles.skillTags}>
                                    <span>Jira</span>
                                    <span>Trello</span>
                                    <span>Microsoft Office</span>
                                    <span>Google Workspace</span>
                                    <span>Video and Sound Editing</span>
                                    <span>Visual Studio Code</span>
                                    <span>Xcode</span>
                                </div>
                            </div>
                            
                            <div className={styles.skillCategory}>
                                <h3>Operating Systems</h3>
                                <div className={styles.skillTags}>
                                    <span>macOS</span>
                                    <span>Windows</span>
                                    <span>Kali Linux</span>
                                </div>
                            </div>
                            
                            <div className={styles.skillCategory}>
                                <h3>Soft Skills</h3>
                                <div className={styles.skillTags}>
                                    <span>Team Leadership</span>
                                    <span>Project Management</span>
                                    <span>Customer Service</span>
                                    <span>Problem Solving</span>
                                    <span>Communication</span>
                                </div>
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

export default WorkEducation;
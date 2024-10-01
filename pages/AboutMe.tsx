import Header from "./Header";
import styles from "/styles/AboutMe.module.css"

const AboutMe = () => {
    return (
        <>
            <div className={styles.AboutMe}>
                <Header />
                <img src="me-2.jpg" alt="Portrait of Myself" className={styles.AboutMePortrait}/>
                <div className={styles.AboutMeContent}>
                    <h1>About Me</h1>
                    <p>Born in Chula Vista, California. In 2003</p>
                    <p>I'm <b>Jose Roberto Cebreros</b>, a Senior year Computer Science student, expecting to graduate in 2025.</p>
                    <br />
                    <p>Raised in Tijuana, Mexico, I have always been passionate about technology, learning and understanding about the brand "new thing" released.</p>
                    <p>Ever since my very first computer, i had the urge to learn more about it, how things worked, and hoped to one day contribute to the continuous advancement of the tech industry.</p>
                    <br />
                    <h3>Interests</h3>
                    <p>I consider myself really open-minded, always trying to learn both new and common topics such as AI, Cybersecurity and improve the ones i consider my main interests.</p>
                    <br />
                    <p>As of right now, im pursuing my goal to become a Frontend Developer when i graduate, always trying to improve my skills, taking courses, and overall learning more about it.</p>
                    <p>In the near future, I am eager to expand into Fullstack Development.</p>
                    <br />
                    <h3>Hobbies</h3>
                    <p>I love traveling and, like many, hope to explore more of the world’s beauty.</p>
                    <p>Like to take evening runs on the city, and because of that, i feel enjoyment when meeting new people and seek new relations.</p>
                    <br />
                    <p>I have a strong fascination with space, from space travel to the vast universe, especially planets, stars, and the origins of the universe.</p>
                </div>
                <img src="hobbies1.png" alt="JWST" className={styles.HobbiesPNG} />
            </div>
        </>
    );
};

export default AboutMe;
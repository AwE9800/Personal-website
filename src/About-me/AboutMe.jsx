import AboutMeText from './AboutMe-text/AboutMeText';
import './AboutMe.css';
import SkillsCard from './Skills-card/SkillsCard';

const AboutMe = () => {
    const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Sass', 'Tailwind', 'Node.js'];
    const skillsToCome = ['TypeScript', 'UX & grafiska verktyg', 'Backend ( NodeJs, Express, JWT, Socket ) '];
    const Tools = ['VScode', 'Trello', 'Figma', 'Git', 'github', 'Agila metoder'];

    return (
        <section className="aboutMe-container">
            <h2>About me</h2>
            <div className="aboutMe-container-content">
                <AboutMeText />
                <SkillsCard skills={skills} skillsToCome={skillsToCome} tools={Tools} />
            </div>
        </section>
    );
};

export default AboutMe;

import AboutMeText from './AboutMe-text/AboutMeText';
import './AboutMe.css';
import SkillsCard from './Skills-card/SkillsCard';

const AboutMe = () => {
    const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Sass', 'Tailwind', 'Node.js', 'Agila metoder'];
    const skillsToCome = ['TypeScript', 'UX & grafiska verktyg', 'Backend ( NodeJs, Express, JWT, Socket ) '];
    const Tools = ['VScode', 'Trello', 'Figma', 'Git', 'github', 'Chrome DevTools'];

    return (
        <section className="aboutMe-container">
            <AboutMeText />
            <SkillsCard skills={skills} skillsToCome={skillsToCome} tools={Tools} />
        </section>
    );
};

export default AboutMe;

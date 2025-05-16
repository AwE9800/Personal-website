import AboutMeText from './AboutMe-text/AboutMeText';
import './AboutMe.css';
import SkillsCard from './Skills-card/SkillsCard';

const AboutMe = () => {
    const Frontend = ['HTML', 'CSS', 'JavaScript', 'Typescript', 'React', 'Vue', 'Bootstrap', 'Sass', 'Tailwind', 'Redux'];
    const Backend = ['NodeJs', 'Express', 'JWT', 'Socket', 'bcrypt', 'MongoDB', 'Firebase', 'SQLite'];
    const Tools = ['VScode', 'Trello', 'Figma', 'Git', 'github', 'Slack', 'Jira', 'Agila metoder'];

    return (
        <section className="aboutMe-container-content">
            <AboutMeText />
            <SkillsCard frontend={Frontend} backend={Backend} tools={Tools} />
        </section>
    );
};

export default AboutMe;

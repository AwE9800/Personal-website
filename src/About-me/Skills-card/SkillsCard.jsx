import './SkillsCard.css';

// importig props
const SkillsCard = ({ skills, skillsToCome, tools }) => {
    return (
        <section className="Skills-card-container">
            <div className="skills">
                <h4>Skills</h4>
                <ul>
                    {skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>
            <div className="skills-to-learn">
                <h4>Skills to learn</h4>
                <ul>
                    {skillsToCome.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>
            <div className="tools">
                <h4>Tools</h4>
                <ul>
                    {tools.map((tool, index) => (
                        <li key={index}>{tool}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default SkillsCard;

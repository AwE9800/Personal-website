import './SkillsCard.css';

// importig props
const SkillsCard = ({ frontend, backend, tools }) => {
    return (
        <section className="Skills-card-container">
            <div className="skills card">
                <h4>Frontend</h4>
                <ul>
                    {frontend.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>
            <div className="skills-to-learn card">
                <h4>Backend & Database</h4>
                <ul>
                    {backend.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>
            <div className="tools card">
                <h4>My Toolkit</h4>
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

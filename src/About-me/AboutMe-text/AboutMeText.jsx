import './AboutMeText.css';

const AboutMeText = () => {
    return (
        <section className="About-me">
            <div className="AboutMeText">
                <h2>About Me</h2>
                <p>
                    I'm a front-end developer based in Sweden, recently graduated from KYH with a focus on front-end development. During my
                    studies, I gained expertise in everything from HTML, CSS, and JavaScript to back-end technologies like Node.js, Express,
                    and MongoDB. Below, you'll find an overview of my skills in front-end development, back-end, and the tools I use to
                    build great web experiences.
                </p>
                <br />
                <br />
                <p>
                    When I'm not in front of the computer coding, I spend my time with family and friends, working out, and watching
                    football. This balance between coding and personal interests has been key to my creativity and overall well-being.
                </p>
            </div>
            <div className="aboutMeImage">
                <div></div>
            </div>
        </section>
    );
};

export default AboutMeText;

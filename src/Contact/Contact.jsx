import './Contact.css';
import Background from '../assets/Background.jpg';

const Contact = () => {
    return (
        <section className="contact">
            <div className="contact-form">
                <h2>Contact Me</h2>
                <p>
                    Hello and welcome to my contact page! If you'd like to get in touch or learn more about me, LinkedIn is a fantastic
                    place to do so.
                </p>
                <p>
                    You can also contact me via email at <a href="mailto:Alvin.Samuelsson1@outlook.com">Alvin.Samuelsson1@outlook.com</a> or
                    call me at <a href="tel:+46723107013">072-310 70 13</a>.
                </p>
                <div className="linkedIn-link">
                    <h5>Connect with me on LinkedIn:</h5>
                    <button onClick={() => window.open('https://www.linkedin.com/in/alvin-samuelsson-7b07032a9/', '_blank')}>
                        LinkedIn
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Contact;

import './Contact.css';
import Background from '../assets/Background.jpg';

const Contact = () => {
    const LinkedInProfile = () => {
        const linkedinURL = 'https://www.linkedin.com/in/alvin-samuelsson-7b07032a9/';

        // opening the link in a diffrent window
        window.open(linkedinURL, '_blank');
    };

    return (
        <section className="contact">
            <div className="contact-form">
                <h2>Contact Me</h2>
                <p>
                    Hello and welcome to my contact page! If you'd like to get in touch or learn more about me, LinkedIn is a fantastic
                    place to do so.
                </p>
                <p>
                    I'm eager to share my journey, experiences, and interests on LinkedIn. Feel free to visit my LinkedIn profile for
                    updates on my work and join the conversation.
                </p>
                <div className="linkedIn-link">
                    <h5>Connect with me on LinkedIn:</h5>
                    <button onClick={LinkedInProfile}>LinkedIn</button>
                </div>
            </div>
        </section>
    );
};

export default Contact;

import AboutMe from '../About-me/AboutMe';
import Contact from '../Contact/Contact';
import Portfolio from '../Portfolio/Portfolio';
import WelcomeCard from './WelcomeCard/WelcomeCard';
import './Home.css';

const Home = () => {
    return (
        <div className="Home">
            <WelcomeCard />
            <AboutMe />
            <Portfolio />
            <Contact />
        </div>
    );
};

export default Home;

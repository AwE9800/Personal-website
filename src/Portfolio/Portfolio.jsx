import './Portfolio.css';
import PortfolioCard from './portfolio-card/Portfolio-card';
import TipCalcImage from '../assets/TipCalc.png';
import MemoryImage from '../assets/Memory.png';
import Filmvisarna from '../assets/Filmvisarna.png';

const Portfolio = () => {
    // Array of objects containing data for each portfolio project
    const PortfolioData = [
        {
            id: 1,
            name: 'Filmvisarna',
            img: Filmvisarna,
            info: 'Filmvisarna is a cinema web application where users can browse movies, view showtimes, and book tickets. The project was built using React, TypeScript, and Bootstrap for the frontend, and Express with SQLite on the backend. Key features include user authentication, admin management, and responsive UI design.',
            repo: 'https://github.com/AwE9800/Filmvisarna',
            site: 'https://fv.nodehill.se/',
        },
        {
            id: 2,
            name: 'Memory-Game',
            img: MemoryImage,
            info: "Memory game is a school project that we've created using HTML5, CSS, and JavaScript ES6. The game involves finding the most pairs to win. The page is responsive, and you can play against each other or against the computer.",
            repo: 'https://github.com/AwE9800/Memory-Game-main',
            site: 'https://awe9800.github.io/Memory-Game-main/',
        },
        {
            id: 3,
            name: 'Tip-Calculator',
            img: TipCalcImage,
            info: "Tip-Calculator challenge from FrontendMentor, created with HTML5, CSS, and JavaScript ES6. It's a responsive page that calculates the bill per person, including the tip amount.",
            repo: 'https://github.com/AwE9800/tip-calculator-app-main',
            site: 'https://awe9800.github.io/tip-calculator-app-main/',
        },
    ];
    return (
        <section className="portfolio-container">
            <div className="portfolio-text-container">
                <div className="Portfolio-text">
                    <h2>Portfolio</h2>
                    <p>
                        Welcome to my portfolio! Here, I showcase some of my GitHub projects that reflect my passion for coding and
                        technical versatility. Explore and discover my work below.
                    </p>
                </div>
            </div>
            {/* Mapping through the PortfolioData array to render PortfolioCard components */}
            <div className="portfolio-cards-container">
                {PortfolioData.map(item => (
                    <PortfolioCard key={item.id} name={item.name} img={item.img} info={item.info} repo={item.repo} site={item.site} />
                ))}
            </div>
            <div className="github-link">
                <p>If you would like to see more of my work, feel free to check out my GitHub page.</p>
                <a className="link-to-github" href="https://github.com/AwE9800" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24">
                        <path
                            fill="currentColor"
                            d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
                        />
                    </svg>
                    <p>Github</p>
                </a>
            </div>
        </section>
    );
};

export default Portfolio;

import './Portfolio-card.css';

const PortfolioCard = ({ name, img, info, repo, site }) => {
    return (
        <div className="Card-container">
            <img src={img} alt={name} />
            <div className="name-info">
                <h5>{name}</h5>
                <p>{info}</p>
            </div>
            <div className="links-repo-site">
                <a href={repo} target="_blank">
                    View repo
                </a>
                <a href={site} target="_blank">
                    View site
                </a>
            </div>
        </div>
    );
};

export default PortfolioCard;

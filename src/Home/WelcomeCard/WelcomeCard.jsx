import AboutMeImage from '../../assets/AboutMeImage.jpg';

import './WelcomeCard.css';
const WelcomeCard = () => {
    return (
        <div className="Info-card">
            <svg className="background-svg" width="570" height="207" viewBox="0 0 570 207" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M1 146.207C9.89633 150.019 23.6072 148.712 32.8333 149.151C65.6755 150.715 96.0671 147.818 127.056 136.095C155.807 125.219 184.38 109.786 206 87.5399C217.821 75.3765 230.802 59.4276 231.556 41.5399C232.232 25.4887 220.595 14.555 206.667 8.87325C195.67 4.38738 176.413 1.66713 165.111 1.20658C134.94 -0.0228462 104.051 4.2234 75.5556 14.2621C51.6389 22.6878 18.7958 38.0865 7.55556 63.3177C-6.97702 95.9392 25.8412 121.332 49.9444 134.429C94.925 158.87 140.944 169.79 191.111 179.873C276.229 196.982 363.28 204.208 450 205.318C489.446 205.823 529.94 204.456 569 198.207"
                    stroke="#335880"
                    stroke-opacity="0.6"
                    stroke-width="2"
                    stroke-linecap="round"
                />
            </svg>
            <div className="Info-card-text">
                <h1 className="hello">Hi there!</h1>
                <h1>
                    I'm Alvin <span className="name">Samuelsson.</span>
                </h1>
                <h4>
                    I'm a front-end developer from Sweden, recently finished with my studies and ready to take on new challenges in the tech
                    world. I love creating websites that not only look great, but also feel smooth and intuitive to use.
                </h4>
            </div>
            <div className="Info-card-image">
                <img src={AboutMeImage} alt="Image on me" />
            </div>
        </div>
    );
};

export default WelcomeCard;

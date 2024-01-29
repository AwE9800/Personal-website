## Table of contents

-   [Overview](#overview)
    -   [The challenge](#the-challenge)
    -   [Installation](#Installation)
    -   [Screenshot](#screenshot)
    -   [Links](#links)
-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)
    -   [Continued development](#continued-development)
-   [Author](#author)
-   [Acknowledgments](#acknowledgments)
-   [React-Vite](#React-Vite)

## Overview

### The challenge

Your task is to develop an interactive Single Page Application (SPA) that functions as a CV or personal website using a JavaScript framework. The web app should present information about yourself, including your skills, experiences, projects, and contact information.

Your finished project should follow the component structure and data flow you have established in the written submission. In addition, the web app should meet the technical requirements outlined below.

Technical Requirements:

Component Structure and Data Flow

Create reusable components to structure your website.
Use props to pass data between components to ensure efficient data flow.
React Router

Implement React Router to manage navigation between different sections or pages on the website. You should have at least three views, such as 'About Me,' 'Projects,' and 'Contact.'
useState Hook

Use the useState hook to manage local state in at least one component in your web app. For example, you can use it to create an interactive contact form or another interactive section.
Redux

Integrate Redux for global state management. This can be used to handle user preferences (such as theme or layout) or to store and manage data used by multiple components.
Code Standard and Documentation

Write clean and well-organized code. Comment the code where necessary to explain complex or important parts.
Include a README file that describes the project, how to run it, and an overview of its features.

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/AwE9800/personal-website.git
    ```
2.  Install NPM packages
    ```sh
    cd personal-website
    npm install
    ```
3.  Run projekt
    ```sh
    npm run dev
    ```

### Screenshot

![image](https://github.com/AwE9800/personal-website/assets/143619434/2d4f096f-7219-453a-9f3b-319d63585412)

### Links

-   Live Site URL: [Live site](https://personal-website-m693.vercel.app/)
-   FigJam sketch: [Figjam](https://www.figma.com/file/MEMxK28ZetnF98zNjhj7Qw/React-Individuell-uppgift-del-2?type=whiteboard&node-id=0%3A1&t=mMeyq1yDZprLheee-1)

## My process

### Built with

-   Semantic HTML5 markup
-   CSS custom properties
-   Flexbox
-   CSS Grid
-   React
-   Javascript
-   Redux
-   Github-API

### What I learned

This was my first react projekt. Throughout this project, I have learned how to use React and how to utilize routes. I have also experimented with using Redux and API.

### Continued development

I enjoy using React, but I don't feel confident using Redux and fetching data from an API. It's something I want to work on in future projects.

## Author

-   Website - [Min hemsida](https://personal-website-m693.vercel.app/)
-   Linkedin - [Alvin Samuelsson](https://www.linkedin.com/in/alvin-samuelsson-7b07032a9/)

## Acknowledgments

I want to extend a big thank you to my classmates [Dennis](https://www.linkedin.com/in/dennis-ehnwall-09524b29b/), [Eric](https://www.linkedin.com/in/eric-classon-001b131a2/), [Kalle](https://www.linkedin.com/in/kalle-pettersson-b74724294/), and [Pontus](https://www.linkedin.com/in/pontus-boman-aa85131bb/), who have supported and helped me throughout the project.

## React-Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

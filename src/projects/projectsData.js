import projectOne from "../assets/Project-1.png";
import projectTwo from "../assets/Project-2.png";
import projectThree from "../assets/Project-3.png";

const projects = {
  1: {
    title: "Portfolio Website",
    image: projectOne,
    description: (
      <>
        <p>
          After countless hours of design, development, and refinement, I'm
          proud to showcase my work, skills, and passion in one centralized hub.
          Dive in to explore my projects, learn more about my background, and
          get in touch to discuss potential collaborations.
        </p>
      </>
    ),
    github:
      "https://www.linkedin.com/in/yash-mahindroo-69228a213/details/projects/",
    demo: "https://yash-mahindroo-portfolio.netlify.app/",
  },
  2: {
    title: "Snake Game",
    image: projectTwo,
    description: (
      <>
        <p>
          The Snake.io game Project is a web application that uses JavaScript to
          generate the snake and to play the game. This project aims to provide
          a user-friendly interface to play and enjoy the game.
        </p>
      </>
    ),
    github: "https://github.com/YashMahindroo/snake.io",
    demo: "https://www.linkedin.com/in/yash-mahindroo-69228a213/details/projects/",
  },
  3: {
    title: "AI Face Detection",
    image: projectThree,
    description: (
      <>
        <p>
          Using advanced machine learning algorithms, my AI Face Expression
          Reader analyzes facial expressions in real-time, interpreting emotions
          such as happiness, sadness, surprise, and more! This technology has
          incredible potential across various industries, from enhancing user
          experiences on websites to revolutionizing customer feedback analysis.
        </p>
      </>
    ),
    github: "https://github.com/YashMahindroo/ai_face_expression_reader",
    demo: "https://www.linkedin.com/in/yash-mahindroo-69228a213/details/projects/",
  },
};

export default projects;

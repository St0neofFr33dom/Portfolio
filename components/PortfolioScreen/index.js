import React, { useState } from "react";
import styles from "./styles.module.css";
import ProjectEntry from "../ProjectEntry";
import CareFullImage from "../../public/ProjectScreenshots/Care-Full.png"
import GraphQLImage from "../../public/ProjectScreenshots/ApolloGraphQL.png"
import SudokuImage from "../../public/ProjectScreenshots/Sudoku.jpg"
import QuizImage from "../../public/ProjectScreenshots/Sci-Trivia-Quiz.jpg"
import ChainLettersImage from "../../public/ProjectScreenshots/ChainLettersGameScreen.png"

const PortfolioScreen = ({popupImage}) => {
  let graphQLDescription =
    "GraphQL Project, using an Apollo server in conjuction with an express server, communicating with a MongoDB database. The data is for a video game relesaed in 2005";
  let sudokuDescription =
    "An application that takes in a sudoku puzzle and solves it (The logic can currently solve easy and medium puzzles, but struggles with harder diffuclty puzzles";
  let carefullDescription =
    "Final group project made during School of Code. A web application for users to store symptom info and a schedule reminder for their pets.";
  let reactNativeDescription =
    "Group project, teaching ourselves React native and Expo Apps. Also practicing our Typescript.";
  let chainLettersDescription = 
    "An iOS word game app developed in Swift, learned the language and deeveloped the app in 10 days"
  const [entries, setEntries] = useState([
    {
      title: "Care-Full",
      link: "https://care-full.netlify.app/",
      description: carefullDescription,
      skills: ["Next.JS", "Auth0", "Express", "PostgreSQL"],
      image: CareFullImage,
    },
    {
      title: "Fire Emblem GraphQL API",
      link: "https://github.com/St0neofFr33dom/GraphQLProject",
      description: graphQLDescription,
      skills: ["MongoDB", "Apollo"],
      image: GraphQLImage,
    },
    {
      title: "Sudoku Solver",
      link: "https://github.com/St0neofFr33dom/Sudoku_solver_javascript",
      description: sudokuDescription,
      skills: ["NodeJS", "Jest"],
      image: SudokuImage,
    },
    {
      title: "Sci-Fi Quiz App",
      link: "https://github.com/anastasia-starostina/React_Native_SciFi_App",
      description: reactNativeDescription,
      skills: ["React Native", "Expo Go", "Typescript"],
      image: QuizImage,
    },
    {
      title: "Chain Letters App",
      link: "https://github.com/St0neofFr33dom/ChainLettersSwiftApp",
      description: chainLettersDescription,
      skills: ["Swift", "SwiftUI"],
      image: ChainLettersImage,
    }
]);

  return (
    <div className={styles.screen}>
      <h2>Projects</h2>
      <div>
        {entries.map((project, index) => {
          return (
            <ProjectEntry
              key={index}
              title={project.title}
              link={project.link}
              description={project.description}
              skills={project.skills}
              image={project.image}
              onClick={popupImage}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PortfolioScreen;



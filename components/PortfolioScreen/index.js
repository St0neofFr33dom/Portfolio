import React from 'react'

const PortfolioScreen = () => {
    return (
        <div>
            <h3>Projects</h3>
            <h3><a href="https://care-full.netlify.app/" target="_blank" rel="noreferrer">Care-Full App</a></h3>
            <p>Final group project made during School of Code. A web application for users to store symptom info and a schedule reminder for their pets.</p>
            <h3><a href="https://st0neoffr33dom.github.io/Sudoku_solver_javascript/" target="_blank" rel="noreferrer">Sudoku Solver</a></h3>
            <p>An application that takes in a sudoku puzzle and solves it (The logic can currently solve easy and medium puzzles, but struggles with harder diffuclty puzzles)</p>
            <h3><a href="https://github.com/St0neofFr33dom/GraphQLProject" target="_blank" rel="noreferrer">Fire Emblem 9 GraphQL API</a></h3>
            <p>A work in progress, a GraphQL API that communicates with a Mongodb databse, with inofrmationand statistics from the video game Fire Emblem: Path of Radiance</p>
            <h3>For more projects click <a href="https://github.com/St0neofFr33dom" target="_blank" rel="noreferrer">here</a></h3>
        </div>
    )
}

export default PortfolioScreen
import React from "react";
import "./App.css";
import teamNames from "./CollegeBasketballTeams.json";

interface Team {
  school: string;
  name: string;
  city: string;
  state: string;
}

function HeadingSection() {
  return (
    <>
      <h1>Welcome to March Madness!!!!!!!!!!</h1>
      <p>
        This site will give all the details that we need in order to create a
        perfect March Madness bracket.
      </p>
    </>
  );
}

class TeamCard extends React.Component<Team> {
  render() {
    const oneTeam = this.props;

    return (
      <div>
        <h1>{oneTeam.school}</h1>
        <h2>Mascot: {oneTeam.name}</h2>
        <h3>
          {oneTeam.city}, {oneTeam.state}
        </h3>
      </div>
    );
  }
}

function TeamList() {
  return (
    <div>
      {teamNames.teams.map((team: Team, index: number) => (
        <TeamCard key={index} {...team} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div>
      <HeadingSection />
      <TeamList />
    </div>
  );
}

export default App;

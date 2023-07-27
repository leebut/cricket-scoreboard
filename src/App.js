import { useState } from "react";
import "./styles.css";

export default function App() {
  function addTeam(players) {
    console.log("TEAMPLAYERS");
    console.log(players);
    setTeamOne(players);
    console.log("TEAM:");
    console.log(teamOne);
  }

  // ------------------------------------------

  const [teamOne, setTeamOne] = useState([]);
  const [team2, setTeam2] = useState([]);
  const [playerRuns, setPlayerRuns] = useState(0);
  const [playerBalls, setPlayerBalls] = useState(0);

  return (
    <>
      <AddTeam onAddteam={addTeam} />
      <ScoreBoard
        teamOne={teamOne}
        playerRuns={playerRuns}
        playerBalls={playerBalls}
      />
    </>
  );
}

function AddTeam({ onAddteam, playerRuns, playerBalls }) {
  const [p1, setP1] = useState("");
  const [p2, setP2] = useState("");
  const [p3, setP3] = useState("");
  const [p4, setP4] = useState("");
  const [p5, setP5] = useState("");
  const [p6, setP6] = useState("");
  const [p7, setP7] = useState("");
  const [p8, setP8] = useState("");
  const [p9, setP9] = useState("");
  const [p10, setP10] = useState("");
  const [p11, setP11] = useState("");

  function addPlayers(e) {
    e.preventDefault();

    const id = crypto.randomUUID();

    const players = {
      id: id,
      name: p1,
      runs: playerRuns,
      balls: playerBalls,
    };

    onAddteam(players);

    console.log("PLAYERS");
    console.log(players);
  }
  return (
    <>
      <form style={{ padding: "2rem" }} onSubmit={addPlayers}>
        <p>Players</p>
        <ol>
          {/* {Array.from({ length: 11 }, (_, i) => i + 1).map((num) => (
            <li key={num}>
              <input
                type="text"
                name={`p${num}`}
                id={`p${num}`}
                onChange={(e) => `setP${num}`(e.target.value)}
              />
            </li>
          ))} */}

          <li>
            <input
              type="text"
              name="p1"
              onChange={(e) => setP1(e.target.value)}
            />
          </li>
          <li>
            <input
              type="text"
              name="p2"
              onChange={(e) => setP2(e.target.value)}
            />
          </li>
          <li>
            <input
              type="text"
              name="p3"
              onChange={(e) => setP3(e.target.value)}
            />
          </li>
          <li>
            <input
              type="text"
              name="p4"
              onChange={(e) => setP4(e.target.value)}
            />
          </li>
          <li>
            <input
              type="text"
              name="p5"
              onChange={(e) => setP5(e.target.value)}
            />
          </li>
          <li>
            <input
              type="text"
              name="p6"
              onChange={(e) => setP6(e.target.value)}
            />
          </li>
          <li>
            <input
              type="text"
              name="p7"
              onChange={(e) => setP7(e.target.value)}
            />
          </li>
          <li>
            <input
              type="text"
              name="p8"
              onChange={(e) => setP8(e.target.value)}
            />
          </li>
          <li>
            <input
              type="text"
              name="p9"
              onChange={(e) => setP9(e.target.value)}
            />
          </li>
          <li>
            <input
              type="text"
              name="p10"
              onChange={(e) => setP10(e.target.value)}
            />
          </li>
          <li>
            <input
              type="text"
              name="p11"
              onChange={(e) => setP11(e.target.value)}
            />
          </li>
        </ol>
        <button type="submit">Add team</button>
      </form>
    </>
  );
}

function ScoreBoard({ teamOne, playerRuns, playerBalls }) {
  return (
    <>
      <div className="team">
        <ol style={{ marginLeft: "2rem" }}>
          {teamOne.map((player) => (
            <TeamList player={player} key={player.id} />
          ))}
        </ol>
      </div>
    </>
  );
}
function TeamList({ player }) {
  return (
    <>
      <li>{player.name}</li>
    </>
  );
}

import React from "react";
import lookBook from "./images/LookBook.png";
import textEditor from "./images/TextEditor.png";
import paddle from "./images/Paddle.png";
import weatherDashboard from "./images/WeatherDashboard.png";
import workDayScheduler from "./images/WorkDayScheduler.png";
import mathQuiz from "./images/CodeQuiz.png";
import "./Works.css";

const styles = {
  fontColor: {
    color: "#031927",
  },
  headerColor: {
    color: "#F96900",
  },
  cardColor: {
    background: "#3A5169",
  },
  linkColor: {
    color: "#A0C5F8",
  },
  cardWidth: {
    width: "24rem",
  },
};

export default function Works() {
  return (
    <div style={{ marginTop: 60 }} id="works">
      <h1 style={styles.headerColor}>
        Some of my <i>work</i>...
      </h1>

      <div className="mt-4 d-flex flex-wrap text-white justify-content-center">
    <div
      className="card col-6 p-1 m-2 border-0 cardGlow"
      style={styles.cardWidth}
    >
      <img
        className="card-img-top rounded-top h-50"
        src={workDayScheduler}
        alt="Workday Scheduler"
      />
      <div
        className="card-body rounded-bottom h-50"
        style={styles.cardColor}
      >
        <h5 className="card-title">Whatcha Watching</h5>
        <p className="card-text">
          Provides a randomly selected movie or TV series based on the user's search parameters. Utilizes Bootstrap and React.
          </p>
        <a
          href="https://colinmchale.github.io/WorkDayScheduler/"
          target="_blank"
          rel="noreferrer"
          className="card-link"
          style={styles.linkColor}
        >
          Live
        </a>
        <a
          href="https://github.com/colinmchale/WorkDayScheduler"
          target="_blank"
          rel="noreferrer"
          className="card-link"
          style={styles.linkColor}
        >
          Repository
        </a>
      </div>
    </div>
        <div
          className="card col-6 p-1 m-2 border-0 cardGlow"
          style={styles.cardWidth}
        >
          <img
            className="card-img-top rounded-top h-50"
            src={paddle}
            alt="Lyrcial Hackers"
          />
          <div
            className="card-body rounded-bottom h-50"
            style={styles.cardColor}
          >
            <h5 className="card-title">Paddle</h5>
            <p className="card-text">
            An online auction where users are able to keep track of their products and bids. Built with the MERN stack and GraphQL.
              </p>
            <a
              href="https://paddle-auction.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
              className="card-link"
              style={styles.linkColor}
            >
              Live
            </a>
            <a
              href="https://github.com/colinmchale/project-3"
              target="_blank"
              rel="noreferrer"
              className="card-link"
              style={styles.linkColor}
            >
              Repository
            </a>
          </div>
        </div>
        <div
          className="card col-6 p-1 m-2 border-0 cardGlow"
          style={styles.cardWidth}
        >
          <img
            className="card-img-top rounded-top h-50"
            src={lookBook}
            alt="LookBook"
          />
          <div
            className="card-body rounded-bottom h-50"
            style={styles.cardColor}
          >
            <h5 className="card-title">LookBook</h5>
            <p className="card-text">
            A social platform allowing users to share what books they are reading and give their reviews. Utilizes Bulma, MySQL2, Sequalize, Handlebars and Express.
            </p>
            <a
              href="https://young-anchorage-47013.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
              className="card-link"
              style={styles.linkColor}
            >
              Live
            </a>
            <a
              href="https://github.com/shivermotion/project-2"
              target="_blank"
              rel="noreferrer"
              className="card-link"
              style={styles.linkColor}
            >
              Repository
            </a>
          </div>
        </div>
        <div
          className="card col-6 p-1 m-2 border-0 cardGlow"
          style={styles.cardWidth}
        >
          <img
            className="card-img-top rounded-top h-50"
            src={weatherDashboard}
            alt="Password Generator"
          />
          <div
            className="card-body rounded-bottom h-50"
            style={styles.cardColor}
          >
            <h5 className="card-title">Weather Dashboard</h5>
            <p className="card-text">
              A weather app allowing users to search a city and see the current forecat and the following 5 days. Built with jQuery and Bootstrap.
              </p>
            <a
              href="https://colinmchale.github.io/WeatherDashboard/"
              target="_blank"
              rel="noreferrer"
              className="card-link"
              style={styles.linkColor}
            >
              Live
            </a>
            <a
              href="https://github.com/colinmchale/WeatherDashboard"
              className="card-link"
              target="_blank"
              rel="noreferrer"
              style={styles.linkColor}
            >
              Repository
            </a>
          </div>
        </div>
        <div
          className="card col-6 p-1 m-2 border-0 cardGlow"
          style={styles.cardWidth}
        >
          <img
            className="card-img-top rounded-top h-50"
            src={textEditor}
            alt="Note Taker"
          />
          <div
            className="card-body rounded-bottom h-50"
            style={styles.cardColor}
          >
            <h5 className="card-title">Text Editor</h5>
            <p className="card-text">
              Digital notepad built as a progressive web app. Just a single click gives the user the ability to download the app onto their computer.
              </p>
            <a
              href="https://powerful-hamlet-49828.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
              className="card-link"
              style={styles.linkColor}
            >
              Live
            </a>
            <a
              href="https://github.com/colinmchale/TextEditor"
              target="_blank"
              rel="noreferrer"
              className="card-link"
              style={styles.linkColor}
            >
              Repository
            </a>
          </div>
        </div>
        <div
          className="card col-6 p-1 m-2 border-0 cardGlow"
          style={styles.cardWidth}
        >
          <img
            className="card-img-top rounded-top h-50"
            src={mathQuiz}
            alt="Math Quiz"
          />
          <div
            className="card-body rounded-bottom h-50"
            style={styles.cardColor}
          >
            <h5 className="card-title">Math Quiz</h5>
            <p className="card-text">
              Timed math game that saves a users final score and adds it to the highscore list.
              </p>
            <a
              href="https://colinmchale.github.io/CodeQuiz/"
              target="_blank"
              rel="noreferrer"
              className="card-link"
              style={styles.linkColor}
            >
              Live
            </a>
            <a
              href="https://github.com/colinmchale/CodeQuiz"
              target="_blank"
              rel="noreferrer"
              className="card-link"
              style={styles.linkColor}
            >
              Repository
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

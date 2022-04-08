import React from 'react';
import lookBook from './images/LookBook.png';
import noteTaker from './images/NoteTaker.png';
import lyricalHacker from './images/LyricalHackers.png';
import passwordGenerator from './images/PasswordGenerator.png';
import workDayScheduler from './images/WorkDayScheduler.png';
import mathQuiz from './images/CodeQuiz.png';
import './Works.css';

const styles = {
  fontColor: {
    color: '#031927',
  },
  headerColor: {
    color: '#D93041',
  },
  cardColor: {
    background: '#3A5169'
  },
  linkColor: {
    color: '#A0C5F8'
  },
  cardWidth: {
    width: '18rem'
  }
};

export default function Works() {
  return (
    <div style={{marginTop: 60}}>
      <h1 style={styles.headerColor}>Some of my <i>works</i>...</h1>

    <div className='d-flex flex-wrap text-white'>
    <div className="card col-6 p-1 m-2 border-0 cardGlow" style={styles.cardWidth}>
        <img className="card-img-top border border-bottom-0 border-primary rounded-top h-50" src={lookBook} alt="LookBook"/>
        <div className="card-body rounded-bottom h-50" style={styles.cardColor}>
        <h5 className="card-title">LookBook</h5>
        <p className="card-text">Javascript/SQL/Sequalize/MVC/Express.js/CSS/HTML</p>
        <a href="https://young-anchorage-47013.herokuapp.com/" target="_blank" rel="noreferrer" className="card-link" style={styles.linkColor}>Deployed App</a>
        <a href="https://github.com/shivermotion/project-2" target="_blank" rel="noreferrer" className="card-link" style={styles.linkColor}>Repository</a>
        </div>
      </div>
      <div className="card col-6 p-1 m-2 border-0 cardGlow" style={styles.cardWidth}>
        <img className="card-img-top border border-bottom-0 border-primary rounded-top h-50" src={mathQuiz} alt="Math Quiz"/>
        <div className="card-body rounded-bottom h-50" style={styles.cardColor}>
        <h5 className="card-title">Math Quiz</h5>
        <p className="card-text">Javascript/CSS/HTML</p>
        <a href="https://colinmchale.github.io/CodeQuiz/" target="_blank" rel="noreferrer" className="card-link" style={styles.linkColor}>Deployed App</a>
        <a href="https://github.com/colinmchale/CodeQuiz" target="_blank" rel="noreferrer" className="card-link" style={styles.linkColor}>Repository</a>
        </div>
      </div>
      <div className="card col-6 p-1 m-2 border-0 cardGlow" style={styles.cardWidth}>
        <img className="card-img-top border border-bottom-0 border-primary rounded-top h-50" src={lyricalHacker} alt="Lyrcial Hackers"/>
        <div className="card-body rounded-bottom h-50" style={styles.cardColor}>
        <h5 className="card-title">Lyrcial Hackers</h5>
        <p className="card-text">Javascript/Express.js/CSS/HTML</p>
        <a href="https://colinmchale.github.io/ProjectforHackers/" target="_blank" rel="noreferrer" className="card-link" style={styles.linkColor}>Deployed App</a>
        <a href="https://github.com/colinmchale/ProjectforHackers" target="_blank" rel="noreferrer" className="card-link" style={styles.linkColor}>Repository</a>
        </div>
      </div>
      <div className="card col-6 p-1 m-2 border-0 cardGlow" style={styles.cardWidth}>
        <img className="card-img-top border border-bottom-0 border-primary rounded-top h-50" src={passwordGenerator} alt="Password Generator"/>
        <div className="card-body rounded-bottom h-50" style={styles.cardColor}>
        <h5 className="card-title">Password Generator</h5>
        <p className="card-text">Javascript/HTML</p>
        <a href="https://colinmchale.github.io/PasswordGenerator/" target="_blank" rel="noreferrer" className="card-link" style={styles.linkColor}>Deployed App</a>
        <a href="https://github.com/colinmchale/PasswordGenerator" className="card-link" target="_blank" rel="noreferrer" style={styles.linkColor}>Repository</a>
        </div>
      </div>
      <div className="card col-6 p-1 m-2 border-0 cardGlow" style={styles.cardWidth}>
        <img className="card-img-top border border-bottom-0 border-primary rounded-top h-50" src={workDayScheduler} alt="Workday Scheduler"/>
        <div className="card-body rounded-bottom h-50" style={styles.cardColor}>
        <h5 className="card-title">Workday Scheduler</h5>
        <p className="card-text">HTML/Javascript with local storage</p>
        <a href="https://colinmchale.github.io/WorkDayScheduler/" target="_blank" rel="noreferrer" className="card-link" style={styles.linkColor}>Deployed App</a>
        <a href="https://github.com/colinmchale/WorkDayScheduler" target="_blank" rel="noreferrer" className="card-link" style={styles.linkColor}>Repository</a>
        </div>
      </div>
      <div className="card col-6 p-1 m-2 border-0 cardGlow" style={styles.cardWidth}>
        <img className="card-img-top border border-bottom-0 border-primary rounded-top h-50" src={noteTaker} alt="Note Taker"/>
        <div className="card-body rounded-bottom h-50" style={styles.cardColor}>
        <h5 className="card-title">Note Taker</h5>
        <p className="card-text">Javascript/Express.js/CSS/HTML</p>
        <a href="https://whispering-harbor-33313.herokuapp.com/" target="_blank" rel="noreferrer" className="card-link" style={styles.linkColor}>Deployed App</a>
        <a href="https://github.com/colinmchale/NoteTaker" target="_blank" rel="noreferrer" className="card-link" style={styles.linkColor}>Repository</a>
        </div>
      </div>
    </div>
    </div>
  );
}

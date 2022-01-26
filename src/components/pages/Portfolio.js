import React from 'react';

const styles = {
  fontColor: {
    color: '#031927',
  },
  headerColor: {
    color: '#BA1200',
  },
  cardColor: {
    background: '#508AA8'
  },
  linkColor: {
    color: '#C8E0F4'
  }
}


export default function Portfolio() {
  return (
    <div>
      <h1 style={styles.headerColor}>Portfolio</h1>

    <div className='d-flex flex-wrap text-white'>
    <div className="card col-6 p-1 border-0">
        <img className="card-img-top rounded-top" src="..." alt="Card image cap"/>
        <div className="card-body rounded-bottom" style={styles.cardColor}>
        <h5 className="card-title">LookBook</h5>
        <p className="card-text">Javascript/SQL/Sequalize/MVC/Express.js/CSS/HTML</p>
        <a href="https://young-anchorage-47013.herokuapp.com/" target="_blank" rel="noreferrer" className="card-link" style={styles.linkColor}>Deployed App</a>
        <a href="https://github.com/shivermotion/project-2" target="_blank" rel="noreferrer" className="card-link" style={styles.linkColor}>Repository</a>
        </div>
      </div>
      <div className="card col-6 p-1 border-0">
        <img className="card-img-top rounded-top" src="..." alt="Card image cap"/>
        <div className="card-body rounded-bottom" style={styles.cardColor}>
        <h5 className="card-title">Note Taker</h5>
        <p className="card-text">Javascript/Express.js/CSS/HTML</p>
        <a href="https://whispering-harbor-33313.herokuapp.com/" target="_blank" rel="noreferrer" className="card-link" style={styles.linkColor}>Deployed App</a>
        <a href="https://github.com/colinmchale/NoteTaker" target="_blank" rel="noreferrer" className="card-link" style={styles.linkColor}>Repository</a>
        </div>
      </div>
      <div className="card col-6 p-1 border-0">
        <img className="card-img-top rounded-top" src="..." alt="Card image cap"/>
        <div className="card-body rounded-bottom" style={styles.cardColor}>
        <h5 className="card-title">Lyrcial Hackers</h5>
        <p className="card-text">Javascript/Express.js/CSS/HTML</p>
        <a href="https://colinmchale.github.io/ProjectforHackers/" target="_blank" rel="noreferrer" className="card-link" style={styles.linkColor}>Deployed App</a>
        <a href="https://github.com/colinmchale/ProjectforHackers" target="_blank" rel="noreferrer" className="card-link" style={styles.linkColor}>Repository</a>
        </div>
      </div>
      <div className="card col-6 p-1 border-0">
        <img className="card-img-top rounded-top" src="..." alt="Card image cap"/>
        <div className="card-body rounded-bottom" style={styles.cardColor}>
        <h5 className="card-title">Password Generator</h5>
        <p className="card-text">Javascript/HTML</p>
        <a href="https://colinmchale.github.io/PasswordGenerator/" target="_blank" rel="noreferrer" className="card-link" style={styles.linkColor}>Deployed App</a>
        <a href="https://github.com/colinmchale/PasswordGenerator" class="card-link" target="_blank" rel="noreferrer" className="card-link" style={styles.linkColor}>Repository</a>
        </div>
      </div>
      <div className="card col-6 p-1 border-0">
        <img className="card-img-top rounded-top" src="..." alt="Card image cap"/>
        <div className="card-body rounded-bottom" style={styles.cardColor}>
        <h5 className="card-title">Workday Scheduler</h5>
        <p className="card-text">HTML/Javascript with local storage</p>
        <a href="https://colinmchale.github.io/WorkDayScheduler/" target="_blank" rel="noreferrer" className="card-link" style={styles.linkColor}>Deployed App</a>
        <a href="https://github.com/colinmchale/WorkDayScheduler" target="_blank" rel="noreferrer" className="card-link" style={styles.linkColor}>Repository</a>
        </div>
      </div>
      <div className="card col-6 p-1 border-0">
        <img className="card-img-top rounded-top" src="..." alt="Card image cap"/>
        <div className="card-body rounded-bottom" style={styles.cardColor}>
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

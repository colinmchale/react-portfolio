import React from 'react';
// import { FaFacebookSquare } from "react-icons/fa";
// import { FaGithubSquare } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";

const styles = {
  fontColor: {
    color: '#031927',
  },
  linkColor: {
    color: '#F96900',
  },
  bgColor: {
    background: '#3A5169'
  }
}


function Footer () {
    return(
    <footer className="site-footer" style={{background: '#A0C5F8'}}>
      <div className="d-flex flex-wrap justify-content-center align-items-center py-4">
        <div>
         <span style={styles.fontColor}>© 2022 Colin McHale</span>
        </div>

        {/* <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
         <li><a className="text-muted" href="https://www.linkedin.com/in/colin-mchale-26a091139/" target="_blank" rel="noreferrer"><FaLinkedin style={{color: '#F96900', fontSize: '40px'}}/></a></li>
        <li><a className="text-muted" href="https://github.com/colinmchale" target="_blank" rel="noreferrer"><FaGithubSquare style={{color: '#F96900', fontSize: '40px'}}/></a></li>
        <li><a className="text-muted" href="https://www.facebook.com/colin.mchale.10/" target="_blank" rel="noreferrer"><FaFacebookSquare style={{color: '#F96900', fontSize: '40px'}}/></a></li>
        </ul> */}
      </div>
    </footer>
  )
}

export default Footer;

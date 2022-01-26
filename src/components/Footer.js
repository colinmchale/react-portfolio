import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const styles = {
  fontColor: {
    color: '#031927',
  },
  linkColor: {
    color: '#BA1200',
  }
}


function Footer () {
    return(
    <div>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
         <span className='ml-3' style={styles.fontColor}>Made by Colin McHale</span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
         <li><a className="text-muted" href="https://www.facebook.com/colin.mchale.10/" target="_blank" rel="noreferrer"><FaLinkedin style={{color: '#BA1200', fontSize: '40px'}}/></a></li>
        <li><a className="text-muted" href="https://github.com/colinmchale" target="_blank" rel="noreferrer"><FaGithubSquare style={{color: '#BA1200', fontSize: '40px'}}/></a></li>
        <li><a className="text-muted" href="https://www.linkedin.com/in/colin-mchale-26a091139/" target="_blank" rel="noreferrer"><FaFacebookSquare style={{color: '#BA1200', fontSize: '40px'}}/></a></li>
        </ul>
      </footer>
    </div>
  )
}

export default Footer;

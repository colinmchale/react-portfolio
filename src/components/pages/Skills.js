import React from 'react';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiHandlebarsdotjs } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";


const styles = {
  fontColor: {
    color: '#031927',
  },
  headerColor: {
    color: '#F96900',
  }, 
  linkColor: {
    color: '#3A5169',
  }
}

export default function Skills() {
  return (
    <div style={{marginTop: 60}}>
      <h1 style={styles.headerColor}>A few of my <i>skills</i>...</h1>
      {/* <div> */}

        {/* <p style={styles.fontColor}>
          Here is a link to my Resume!
        </p>
        <a href="https://docs.google.com/document/d/1avotxOyxeQwgVsX3E6J37fnLdrUUkCO66lvNjmo4-hg/edit#heading=h.y7d3xdxnr44m" target="_blank" rel="noreferrer" style={styles.linkColor}>Click Here!</a>
      </div> */}

      <div className='m-3 d-flex flex-wrap justify-content-center'>
        <ul>
        <div>
          <FaHtml5 style={{color: '#A0C5F8', fontSize: '60px'}}/>
          <p style={{color: '#FFFFFF'}}>HTML5</p>
        </div>

        <div>
          <FaCss3Alt style={{color: '#A0C5F8', fontSize: '60px'}}/>
          <p style={{color: '#FFFFFF'}}>CSS3</p>
        </div>

        <div><SiJavascript style={{color: '#A0C5F8', fontSize: '60px'}}/><p style={{color: '#FFFFFF'}}>Javascript</p></div>
        <div><FaPython style={{color: '#A0C5F8', fontSize: '60px'}}/><p style={{color: '#FFFFFF'}}>Python</p></div>
        <div><FaReact style={{color: '#A0C5F8', fontSize: '60px'}}/><p style={{color: '#FFFFFF'}}>React JS</p></div>
        <div><FaNode style={{color: '#A0C5F8', fontSize: '60px'}}/><p style={{color: '#FFFFFF'}}>Node.js</p></div>
        <div><SiExpress style={{color: '#A0C5F8', fontSize: '60px'}}/><p style={{color: '#FFFFFF'}}>Express.js</p></div>
        <div><SiHandlebarsdotjs style={{color: '#A0C5F8', fontSize: '60px'}}/><p style={{color: '#FFFFFF'}}>Handlebars</p></div>
        <div><SiMysql style={{color: '#A0C5F8', fontSize: '60px'}}/><p style={{color: '#FFFFFF'}}>MySQL</p></div>
        <div><SiMongodb style={{color: '#A0C5F8', fontSize: '60px'}}/><p style={{color: '#FFFFFF'}}>MongoDB</p></div>
        </ul>
      </div>
    </div>
  );
}

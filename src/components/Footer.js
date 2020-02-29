/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import { FaLinkedin,FaGithub } from 'react-icons/fa';

export default function Footer() {
    return (
        <div className="footer">
          <p>Md Forhad Sarkar<br/>Software Engineer</p>
            <div className="icon"> 
                <div style={{padding:10}}>
                    <FaLinkedin/>
                    <a target="_blank" 
                        style={{color:'black', textDecoration: 'none',textAlign:'center'}} 
                        href="https://www.linkedin.com/in/mdforhadsarkar/">
                        LinkedIn
                    </a>
                </div>
               
                <div style={{padding:10}}>
                
                    <FaGithub/>
                    <a  target="_blank" 
                        style={{color:'black', textDecoration: 'none',textAlign:'center'}} 
                        href="https://github.com/mdforhadsarker">
                        Github
                    </a>
                </div>
                
            </div>
      </div>
    )   
}

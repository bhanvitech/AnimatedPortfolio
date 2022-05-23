import { useEffect, useState } from 'react'

import Loader from 'react-loaders'
import Marquee from "react-fast-marquee";

import './education.scss'
import AnimatedLetters from '../AnimatedLetters/Animation'
import hulu from '../../assets/images/hulu1.png'
import linkedin from '../../assets/images/linkedin.png'
import textutil from '../../assets/images/textutils.png'
import todo from '../../assets/images/todo.png'
import admin from '../../assets/images/admin.png'
import restrnt from '../../assets/images/restraunt.png'

 
const Education = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const skillBoxStyle = {
    backgroundColor: '#FFFFA7',
    boxShadow: `0px 0px 30px #fcd12a`
}
  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container education-page">
        <div className="edu-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
              idx={15}
            />
          </h1>
          <div className="skillsContainer">
                <div className="skill--scroll">
                    <Marquee 
                        gradient={false} 
                        speed={80} 
                        pauseOnHover={true}
                        pauseOnClick={true} 
                        delay={0}
                        play={true} 
                        direction="left"
                    >
                        
                            <div className="skill--box"  style={skillBoxStyle}>
                                <img src={admin} style={{height:'200px' ,width:"150px"}} alt='portfolio'/>
                                <h3 style={{color: '#212121'}}>
                                   Admin Dashboard is a full stack web application
                                </h3>
                            </div>
                            <div className="skill--box"  style={skillBoxStyle}>
                                <img src={linkedin} style={{height:'200px' ,width:"150px"}} alt='portfolio'/>
                                <h3 style={{color: '#212121'}}>
                                   Linked-In clone with React Js and Tailwind CSS.
                                </h3>
                            </div>
                            <div className="skill--box"  style={skillBoxStyle}>
                                <img src={hulu} style={{height:'200px' ,width:"150px"}} alt='portfolio'/>
                                <h3 style={{color: '#212121'}}>
                                   Movies App using React Js
                                </h3>
                            </div>
                            <div className="skill--box"  style={skillBoxStyle}>
                                <img src={textutil} style={{height:'200px' ,width:"150px"}} alt='portfolio'/>
                                <h3 style={{color: '#212121'}}>
                                   html
                                </h3>
                            </div>
                            <div className="skill--box"  style={skillBoxStyle}>
                                <img src={todo} style={{height:'200px' ,width:"150px"}} alt='portfolio'/>
                                <h3 style={{color: '#212121'}}>
                                   html
                                </h3>
                            </div>
                            <div className="skill--box"  style={skillBoxStyle}>
                                <img src={restrnt} style={{height:'200px' ,width:"150px"}} alt='portfolio'/>
                                <h3 style={{color: '#212121'}}>
                                   html
                                </h3>
                            </div>
                        
                    </Marquee>
                    
                </div>
            </div>
         
          

       
         
        </div>
    
       
       
    
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Education

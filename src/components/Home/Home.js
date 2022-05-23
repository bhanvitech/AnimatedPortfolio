import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/Animation'
import LogoTitle from '../../assets/images/logo-s.png'
import LogoB from '../../assets/images/logo-b.png'
import Logo from './Logo'
import './home.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['o', 'f', 't', 'w', 'a','r','e', '','D','e','v','e','l','o','p','e','r','.']
  const jobArray = [
    
    'h',
    'a',
    'n',
    'v',
    'i',
    '',
    'D',
    'u',
    'd',
    'e',
    'j',
    'a',
      ,
  ]

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            {/* <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span> */}
           
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m ,</span>
            <br/>
            <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <img
              src={LogoB} 
              alt="JavaScript Developer Name, Web Developer Name"
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Front End Developer / Backend Developer / Gamer </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home

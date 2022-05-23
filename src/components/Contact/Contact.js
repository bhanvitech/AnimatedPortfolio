import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters/Animation'
import './contact.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_0aoqv9o',
        'template_4297he9',e.target,
        'RI_P3c6sgHAblMI47'
      ) 
      .then(
        () => {
          alert('Message successfully sent to Bhanvi !')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
          I am interested in front end projects more  - especially ambitious or
            large projects. However, if you have other request or question,
            don't hesitate to contact me using below form either.
            If you look me as a potential candidate, You can HIRE ME!
           
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        {/* <div className="info-map">
          Bhanvi Dudeja,
          <br />
          Faridabad,
          <br />
        Faridabad <br />
           <br />
          <br />
          <span>bhanvidudeja8@gmail.com</span>
        </div> */}
          {/* <div className="map-wrap">
            <MapContainer center={[44.96366, 19.61045]} zoom={13}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[44.96366, 19.61045]}>
                <Popup>Bhanvi lives here, come over for a cup of coffee :)</Popup>
              </Marker>
            </MapContainer>
          </div> */}
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact

import React from 'react';
import Skate from '../assets/images/skate.jpeg'
import GoogleFontLoader from 'react-google-font-loader';
import Junk1 from '../assets/images/junk1.jpg';

function Junk() {

const junkStyle = {
  backgroundColor: 'black',
  color: 'white',
  border: '1px solid black',
  marginBottom: '5px',
  width: '90%',
  minWidth: '350px',
  height: '10%',
  fontWeight: 'bold',
  fontFamily: 'BowlbyOneSC',


}
const picStyle = {
  width: '45%',
  height: '25%',
  margin: '0 auto',
  padding: '2.5px',
  textAlign: 'left',
  alignItems: 'left',
}

  return (
    <div style={junkStyle}>
      <h1>Video Title</h1>
      <img style={picStyle} src={Junk1} alt="junk" />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis gravida neque convallis a cras semper.</p>
      <button>Like</button>
      <button>Share</button>
    </div>
  )
}
export default Junk;

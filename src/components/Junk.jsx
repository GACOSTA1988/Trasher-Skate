import React from 'react';
import Skate from '../assets/images/skate.jpeg'
import GoogleFontLoader from 'react-google-font-loader';
import PropTypes from "prop-types";


function Junk(props) {

const junkStyle = {
  backgroundColor: 'black',
  color: 'white',
  border: '1px solid black',
  marginTop: '15px',
  marginBottom: '15px',
  margin: '0 auto',
  width: '90%',
  minWidth: '350px',
  height: '10%',
  fontWeight: 'bold',
  fontFamily: 'BowlbyOneSC',
  fontSize: '10px',
  // border: '1px solid white'
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
      <h5>{props.title}</h5>
      <img style={picStyle} src={props.imgLink} alt="junk" />
      <p>{props.description}</p>
      <button>Like</button>
      <button>Share</button>
      <hr style={{backgroundColor: 'white'}}/>
    </div>
  )
}

Junk.propTypes = {
  title: PropTypes.string.isRequired,
  imgLink: PropTypes.object.isRequired,
  description: PropTypes.string.isRequired,
};

export default Junk;

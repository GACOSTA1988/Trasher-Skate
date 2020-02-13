import React from 'react';
import Junk from './Junk'
import Junk1 from '../assets/images/junk1.jpg';
import Junk2 from '../assets/images/junk2.jpg';
import Junk3 from '../assets/images/junk3.jpg';
import Junk4 from '../assets/images/junk4.jpg';
import GoogleFontLoader from 'react-google-font-loader';

function JunkDrawer() {

const junkList = [
  {
    title: '"Scene Attack" 2019 Video Contest: No-Comply',
    imgLink: Junk1,
    description: 'Four-thousand bucks, four crews and just a few months to film a standout edit, the skaters of Austin went all out for the Vans Scene Attack by No-Comply. The make-you-wanna-go-skate factor is off the charts on this one!',
  },
  {
    title: 'Four AMs "Downtime" Music Video',
    imgLink: Junk2,
    description: 'Beatrice strikes through the car-lit streets of NYC in this FourAM music video directed by Giovanni Reda.',
  },
  {
    title: 'Rough Cut: Kevin Brauns Foam Rollin Part',
    imgLink: Junk3,
    description: 'Braun hitting Three-Up Three-Down at mach-ten and levitating on every nollie flip makes each minute of his Rough Cut a real pleasure. Take a longer look at one of the smoothest in the biz.',
  },
  {
    title: 'My War: Milton Martinez',
    imgLink: Junk4,
    description: `From the history of the Car Wash to the physical and mental obstacles necessary to overcome, this is truly a My War for the ages, complete with broken bones and creeping cops. However, a heaping dose of the Old Man’s everlasting stoke pushed Milton's fight to the finish. Skateboarding will never be the same...`,
  },
]

const junkDrawerStyle = {
  fontFamily: 'BowlbyOneSC',
  backgroundColor: 'black',
  color: 'white',
  alignItems:'center',
  maxWidth: '97%'
}

  return (
    <div style={junkDrawerStyle}>
      <h1>Junk Drawer</h1>
      <hr style={{backgroundColor: 'white'}}/>
      {junkList.map((junk, index) =>
        <Junk
        title={junk.title}
        imgLink={junk.imgLink}
        description={junk.description} />
      )}

    </div>
  )
}
export default JunkDrawer;

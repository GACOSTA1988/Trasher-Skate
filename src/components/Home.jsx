import React from 'react';
import HomeVideo from './HomeVideo'
import JunkDrawer from './JunkDrawer'


function Home() {

const homeStyle = {
  width: '80%',
  margin: '0 auto',
  paddingTop: '2.5px',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
}

  return (
    <div style={homeStyle}>
      <JunkDrawer/>
      <HomeVideo/>
    </div>
  )
}
export default Home;

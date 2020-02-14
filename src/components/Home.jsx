import React from 'react';
import HomeVideo from './HomeVideo'
import JunkDrawer from './JunkDrawer'
import RightContent from './RightContent'


function Home() {

const homeStyle = {
  width: '80%',
  margin: '0 auto',
  paddingTop: '4px',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
}

  return (
    <div style={homeStyle}>
      <JunkDrawer/>
      <RightContent/>
    </div>
  )
}
export default Home;
